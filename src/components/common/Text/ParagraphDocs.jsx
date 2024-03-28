import React from 'react'

export default function ParagraphDocs({text , color}) {
  const textColor = color ? color : 'text-[#00300] '
  return (
    <p className={textColor + 'max-w-700 text-xs mt-2 text-[#c4c4c4] md:text-1xl w-[300px]  md:w-[600px] font-bold'}>{text}</p>
    )
}
