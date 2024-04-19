import React from 'react'

export default function DocLink({link, text, icon}) {
  return (
    <a href={link} className='flex flex-row mt-2 mb-2 bg-[#0D1117] text-sm border border-[#00df9a] rounded-lg ml-1 w-[125px] h-[20px] items-center font-medium rtl:text-right  hover:scale-105'>
      <span className='ml-1'>{icon}</span>
      <span className='text-[#00df9a] ml-2 '>{text}</span>
    </a>
  )
}
