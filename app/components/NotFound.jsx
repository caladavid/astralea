import Link from 'next/link'
import React from 'react'
import Wrapper from './Wrapper/Wrapper'

export const NotFound = () => {
  return (
    <Wrapper>
      <div className='flex justify-center items-center'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </Wrapper>
  )
}
