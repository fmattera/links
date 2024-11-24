const Footer = () => {
  return (
    <footer className='mb-8 mt-16 flex flex-col items-center text-center'>
      <div className='text-m text-gray-500'>
        Built by <span className='font-medium text-white'>Francesco Mattera</span>.
      </div>
      <div className='mt-2 text-xs text-gray-500'>&copy; {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
