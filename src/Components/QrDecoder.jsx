import { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import Icon from './Icon';

// ── EMVCo merchant-presented QR decoding ──────────────────────────────────
// The payload is flat TLV: a 2-digit tag, a 2-digit length, then that many
// characters of value. Some tags are templates whose value is itself TLV.

const TEMPLATE_TAGS = new Set([
  '26', '27', '28', '29', '30', '31', '32', '33', '34', '35',
  '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
  '46', '47', '48', '49', '50', '51', '62', '64', '80', '81',
]);

const TAG_NAMES = {
  '00': 'Payload Format Indicator',
  '01': 'Point of Initiation Method',
  '26': 'Merchant Account Information',
  '52': 'Merchant Category Code',
  '53': 'Transaction Currency',
  '54': 'Transaction Amount',
  '58': 'Country Code',
  '59': 'Merchant Name',
  '60': 'Merchant City',
  '62': 'Additional Data Field',
  '63': 'CRC',
};

const SUB_TAG_NAMES = {
  '26': { '00': 'Globally Unique Identifier', '01': 'Merchant ID', '02': 'Scheme' },
  '62': { '01': 'Bill Number', '05': 'Reference Label' },
};

// ISO 4217 numeric → alpha, for the currencies this actually gets pointed at.
const CURRENCIES = { 834: 'TZS', 586: 'PKR', 840: 'USD', 978: 'EUR', 764: 'THB', 356: 'INR' };

const MCC = { 5411: 'Grocery stores, supermarkets', 5812: 'Eating places, restaurants', 4111: 'Transportation' };

function crc16CcittFalse(str) {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i += 1) {
    crc ^= str.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc;
}

function parseTlv(payload, depth = 0) {
  const nodes = [];
  let i = 0;

  while (i < payload.length) {
    const tag = payload.slice(i, i + 2);
    const lenRaw = payload.slice(i + 2, i + 4);

    if (tag.length < 2 || lenRaw.length < 2) {
      nodes.push({ error: `Truncated tag at position ${i}` });
      break;
    }
    const len = Number.parseInt(lenRaw, 10);
    if (Number.isNaN(len)) {
      nodes.push({ error: `Bad length "${lenRaw}" for tag ${tag}` });
      break;
    }

    const value = payload.slice(i + 4, i + 4 + len);
    if (value.length < len) {
      nodes.push({ error: `Tag ${tag} declares ${len} chars but only ${value.length} remain` });
      break;
    }

    nodes.push({
      tag,
      len,
      value,
      children: depth === 0 && TEMPLATE_TAGS.has(tag) ? parseTlv(value, depth + 1) : null,
    });

    i += 4 + len;
  }

  return nodes;
}

function annotate(node) {
  if (node.tag === '53') return CURRENCIES[Number(node.value)] ?? null;
  if (node.tag === '52') return MCC[Number(node.value)] ?? null;
  if (node.tag === '01') return node.value === '12' ? 'Dynamic (amount varies)' : 'Static';
  return null;
}

const SAMPLE =
  '00020101021226460014tz.go.bot.tips011600001234567890120204TIPS520454115303834540825000.005802TZ5914SOKO LA SAMAKI6013DAR ES SALAAM62250109INV-882130508REF902106304B86F';

const QrDecoder = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const [payload, setPayload] = useState(SAMPLE);
  const [copied, setCopied] = useState(false);

  const accent = isDark ? 'text-primary-dark' : 'text-primary-light';
  const heading = isDark ? 'text-secondary-light' : 'text-secondary-dark';
  const muted = isDark ? 'text-[#9a9a9a]' : 'text-[#5b5b6b]';
  const hairline = isDark ? 'border-white/10' : 'border-black/10';
  const surface = isDark ? 'bg-white/[0.03]' : 'bg-black/[0.02]';

  const result = useMemo(() => {
    // Strip only line breaks and tabs, which come from wrapping a pasted
    // payload. Spaces are significant: merchant names legitimately contain
    // them ("SOKO LA SAMAKI"), and removing those shifts every subsequent
    // field length and invalidates the CRC.
    const clean = payload.replace(/[\r\n\t]/g, '').trim();
    if (!clean) return { nodes: [], crc: null };

    const nodes = parseTlv(clean);
    const crcIndex = clean.lastIndexOf('6304');

    let crc = null;
    if (crcIndex !== -1 && clean.length >= crcIndex + 8) {
      const stated = clean.slice(crcIndex + 4, crcIndex + 8).toUpperCase();
      const computed = crc16CcittFalse(clean.slice(0, crcIndex + 4))
        .toString(16)
        .toUpperCase()
        .padStart(4, '0');
      crc = { stated, computed, valid: stated === computed };
    }

    return { nodes, crc };
  }, [payload]);

  const copySample = () => {
    setPayload(SAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-24" id="decoder">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className={`font-jetbrains text-sm ${accent}`}>03.</span>
            <h2 className={`font-inter font-bold text-2xl md:text-4xl tracking-tight ${heading}`}>
              Live EMVCo QR decoder
            </h2>
          </div>
          <p className={`font-inter text-[15px] md:text-base leading-relaxed ${muted} max-w-2xl`}>
            Merchant payment QRs are flat TLV — a two-digit tag, a two-digit length, then the
            value, with a CRC-16/CCITT-FALSE checksum in tag 63. This parses and validates one in
            the browser, no network call. Edit the payload and watch the checksum break.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-6">
          {/* Input */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border ${hairline} ${surface} p-5`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`font-jetbrains text-[11px] uppercase tracking-wider ${muted}`}>
                Payload
              </span>
              <button
                type="button"
                onClick={copySample}
                className={`inline-flex items-center gap-1.5 rounded-lg border ${hairline} px-2.5 py-1
                            font-jetbrains text-[11px] ${muted} transition-colors ${
                              isDark ? 'hover:bg-white/[0.06]' : 'hover:bg-black/[0.04]'
                            }`}
              >
                <Icon name={copied ? 'check' : 'copy'} size={13} />
                {copied ? 'Reset' : 'Load sample'}
              </button>
            </div>

            <textarea
              value={payload}
              onChange={(e) => setPayload(e.target.value)}
              spellCheck="false"
              aria-label="EMVCo QR payload"
              className={`w-full h-44 resize-none rounded-xl border ${hairline} bg-transparent p-3.5
                          font-jetbrains text-[12.5px] leading-relaxed break-all outline-none
                          ${heading} focus:border-transparent focus:ring-2 ${
                            isDark ? 'focus:ring-primary-dark/50' : 'focus:ring-primary-light/50'
                          }`}
            />

            {/* CRC verdict */}
            {result.crc && (
              <div
                className={`mt-4 flex items-start gap-3 rounded-xl border p-3.5 ${
                  result.crc.valid
                    ? isDark
                      ? 'border-[#00F5A0]/30 bg-[#00F5A0]/[0.07]'
                      : 'border-[#16a34a]/30 bg-[#16a34a]/[0.07]'
                    : 'border-red-500/30 bg-red-500/[0.07]'
                }`}
              >
                <span
                  className={`mt-0.5 ${
                    result.crc.valid
                      ? isDark
                        ? 'text-[#00F5A0]'
                        : 'text-[#16a34a]'
                      : 'text-red-400'
                  }`}
                >
                  <Icon name={result.crc.valid ? 'check' : 'lock'} size={16} strokeWidth={2.25} />
                </span>
                <div className="min-w-0">
                  <div className={`font-jetbrains text-[12px] font-medium ${heading}`}>
                    {result.crc.valid ? 'CRC valid' : 'CRC mismatch'}
                  </div>
                  <div className={`font-jetbrains text-[11px] ${muted} mt-0.5 break-all`}>
                    stated {result.crc.stated} · computed {result.crc.computed}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Decoded tree */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border ${hairline} ${surface} p-5`}
          >
            <span className={`font-jetbrains text-[11px] uppercase tracking-wider ${muted}`}>
              Decoded · {result.nodes.length} tags
            </span>

            <div className="mt-3 space-y-1.5 max-h-[22rem] overflow-y-auto pr-1">
              {result.nodes.map((node, idx) =>
                node.error ? (
                  <div
                    key={`err-${idx}`}
                    className="rounded-lg border border-red-500/30 bg-red-500/[0.07] px-3 py-2 font-jetbrains text-[11.5px] text-red-400"
                  >
                    {node.error}
                  </div>
                ) : (
                  <div key={`${node.tag}-${idx}`} className={`rounded-lg border ${hairline} px-3 py-2`}>
                    <div className="flex items-baseline gap-2.5 flex-wrap">
                      <span className={`font-jetbrains text-[11px] font-medium ${accent}`}>
                        {node.tag}
                      </span>
                      <span className={`font-inter text-[12.5px] font-medium ${heading}`}>
                        {TAG_NAMES[node.tag] ?? 'Reserved / proprietary'}
                      </span>
                      <span className={`font-jetbrains text-[10px] ${muted} opacity-60 ml-auto`}>
                        len {node.len}
                      </span>
                    </div>

                    {!node.children && (
                      <div className={`mt-1 font-jetbrains text-[12px] ${muted} break-all`}>
                        {node.value}
                        {annotate(node) && (
                          <span className={`ml-2 ${accent} opacity-80`}>→ {annotate(node)}</span>
                        )}
                      </div>
                    )}

                    {node.children && (
                      <div className={`mt-2 space-y-1 border-l ${hairline} pl-3`}>
                        {node.children.map((child, ci) =>
                          child.error ? (
                            <div key={ci} className="font-jetbrains text-[11px] text-red-400">
                              {child.error}
                            </div>
                          ) : (
                            <div key={`${child.tag}-${ci}`} className="flex items-baseline gap-2 flex-wrap">
                              <span className={`font-jetbrains text-[10.5px] ${accent} opacity-80`}>
                                {child.tag}
                              </span>
                              <span className={`font-inter text-[11.5px] ${muted} opacity-80`}>
                                {SUB_TAG_NAMES[node.tag]?.[child.tag] ?? 'Sub-field'}
                              </span>
                              <span className={`font-jetbrains text-[11.5px] ${heading} break-all`}>
                                {child.value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QrDecoder;
