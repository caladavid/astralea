import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='relative h-full w-4/5 sm:w-9/12 2xl:w-3/5 mx-auto'>
        { children }
    </div>
  )
}

export default Wrapper