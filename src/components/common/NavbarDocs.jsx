import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from "../../assets/logo.png";
import DocLinks from './DocLinks';
export default function NavBarDocs() {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="fixed justify-between items-center mx-auto pb-[150px]">
    <div className="hidden md:block fixed left-0 w-[250px] top-0 h-full">
      <a className="flex flex-row justify-end" href="/docs">
        <img src={logo} alt="/" className="w-10 h-10 mt-2 ml-2" />
        <h1 className="w-full m-2 text-[#7a7a7a] text-xl mt-4">Mockify.io Docs</h1>
      </a>
      <DocLinks />
    </div>
  
    <div onClick={toggleMenu} className="fixed md:hidden text-[#7a7a7a] top-0 right-0">
      {!showMenu && <AiOutlineMenu className="text-3xl" />}
    </div>
  
    {showMenu && (
      <div
        className={
          showMenu
            ? 'z-4 bg-[#F5F5F5] fixed left-0 top-0 w-full md:w-[60%] h-full border-r border-r-gray-900 transition ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <div>
          {showMenu && (
            <div onClick={toggleMenu} className="md:hidden flex flex-row justify-end">
              <img src={logo} alt="/" className="w-7 h-7 mt-2 ml-2" />
              <h1 className="w-full mt-4 m-2 text-[#7a7a7a] text-xs">Mockify.io Docs</h1>
              <AiOutlineClose onClick={toggleMenu} className="text-2xl top-0 right-0 mx-auto m-2 text-[#7a7a7a]" />
            </div>
          )}
        </div>
        <DocLinks />
      </div>
    )}
  </div>
  )
}
