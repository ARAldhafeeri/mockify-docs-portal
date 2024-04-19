import React from 'react'
import NavBarDocs from '../common/NavbarDocs'
import TopBar from '../common/TopBar'

export default function DocsLayout({children}) {
  return (
<>
<TopBar />

<div className='md:grid md:grid-cols-[auto_200px] m-5 bg-[#0D1117]'>
  <div className="flex flex-col pb-11 pt-11">
    {children}
  </div>
  <NavBarDocs />
</div>
<footer className="w-full fixed bg-[#00df9a] text-center text-xl text-black font-bold bottom-0">2024 © mockify.io</footer>

</>
  )
}
