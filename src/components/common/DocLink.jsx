import React from 'react'

export default function DocLink({link, text, icon}) {
  return (
    <a href={link} className=''>
    <li className="flex flex-row w-[200px] items-center m-3 rounded-xl shadow-2xl transition-transform duration-300 hover:shadow-3xl hover:scale-105 hover:shadow-inner-[#00df9a] p-2 text-xs md:text-1xl  hover:underline text-[#7a7a7a]">{icon}<div className="ml-2">{text}</div></li>
    </a>
  )
}
