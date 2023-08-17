import LoadingAnimation from '../Assets/Loader.svg'

const Loader = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <img src={LoadingAnimation} alt="Loader" className='w-44'/>
    </div>
  )
}

export default Loader