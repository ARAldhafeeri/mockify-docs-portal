import React from 'react'
import NavBarDocs from '../common/NavbarDocs'

export default function DocsLayout({children}) {
  return (
<>
<div className='grid grid-cols-2 m-5'>
    <div className='grid gap-y-2 gap-x-1 grid-flow-row-dense grid-col-1 md:grid-col-2 pb-[500px] md:pb-[400px]'>
        <div className="md:ml-[220px]  flex flex-col md:w-[700px] w-[600px] ">
          {children}
        </div>
        <NavBarDocs />
    </div>
</div>
<footer className="bg-[#F5F5F5] fixed  w-full text-center text-xl text-black font-bold bottom-0">2023 © mockify.io</footer>

</>
  )
}
