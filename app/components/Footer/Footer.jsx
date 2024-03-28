import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className='p-6 flex flex-col md:items-center  w-full bg-customGray text-bgColor'>
      <p>This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
      <p>	&copy; {date} Astralea. All Rights Reserved.</p>
      <p>Website Made by <a href='https://github.com/caladavid' target="_blank" rel="noopener noreferrer"><strong>David Cala</strong></a></p>
    </div>
  )
}

export default Footer