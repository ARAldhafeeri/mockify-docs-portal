import React from 'react'
import ParagraphDocsCard from '../Text/ParagraphDocsCard'

export default function DocCard({h1, paragraph, icon, link}) {
  return (
    <a href={link} target="_blank" className='w-full h-full p-2 flex-col justify-start items-start border border-[#00df9a] rounded-xl transition-transform duration-300 hover:shadow-3xl hover:scale-105 hover:shadow-inner-[#00df9a]'>
          <div className="flex flex-row">
            <span className='ml-1 mr-1'>{icon}</span>
            <h3>{h1}</h3>
          </div>
          <p>{paragraph}</p>
    </a>

  )
}
