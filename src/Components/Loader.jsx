import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Logo/Name */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          duration: 1 
        }}
        className="relative"
      >
        {/* Outer Ring */}
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: '#00D1C7',
            borderRightColor: '#00D1C7',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-4 border-transparent"
          style={{
            borderBottomColor: '#00F5A0',
            borderLeftColor: '#00F5A0',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center Content */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-3xl font-bold font-jetbrains text-transparent bg-clip-text bg-gradient-to-r from-[#00D1C7] to-[#00F5A0]">
            L
          </span>
        </motion.div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex items-center gap-1"
      >
        <span className="font-jetbrains text-sm text-gray-400">Initializing</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-jetbrains text-sm text-[#00D1C7]"
        >
          _
        </motion.span>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#00D1C7] to-[#00F5A0] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;