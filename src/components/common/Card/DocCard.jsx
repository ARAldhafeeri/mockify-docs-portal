import React from 'react'
import HeaderDocs from '../Text/HeaderDocs'
import ParagraphDocsCard from '../Text/ParagraphDocsCard'

export default function DocCard({header, paragraph, icon, link}) {
  return (
    <a href={link} target="_blank" className='w-full h-full p-5 flex-col justify-start items-start bg-[#f9f9f9] rounded-xl transition-transform duration-300 hover:shadow-3xl hover:scale-105 hover:shadow-inner-[#00df9a]'>
          <div className="flex flex-row ml-2 justify-start">
            {icon}
          <HeaderDocs text={header} />
          </div>
          <ParagraphDocsCard text={paragraph} color="text-[#7a7a7a]" />
    </a>

  )
}
