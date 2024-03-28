import React from 'react'

export default function ParagraphDocsCard({text , color}) {
  const textColor = color ? color : 'text-[#00300] '
  return (
    <p className={textColor + ' ml-4 md:w-96 w-46  text-[#c4c4c4] text-sm' }>{text}</p>
    )
}
