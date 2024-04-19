import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from "../../assets/logo.png";
import DocLinks from './DocLinks';
export default function NavBarDocs() {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    React.useEffect(() => {
      const handleResize = () => {
          // Close the menu if it's open when the window expands
          if (showMenu && window.innerWidth >= 768) {
              setShowMenu(false);
          }
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [showMenu]);
  return (
    <div className="justify-between items-center mx-auto pb-[150px] bg-[#0D1117]">
    <div className="hidden md:block right-0 w-[200px] top-0 h-full fixed">
      <DocLinks />
    </div>
  
    <div onClick={toggleMenu} className="fixed md:hidden text-white top-0 right-0">
      {!showMenu && <AiOutlineMenu className="text-3xl" />}
    </div>
  
    {showMenu && (
      <div
        className={
          showMenu
            ? 'z-4  bg-[#0D1117] fixed left-0 top-0  w-[50%] overflow-auto h-full border-r border-r-gray-900 transition ease-in-out duration-500'
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
