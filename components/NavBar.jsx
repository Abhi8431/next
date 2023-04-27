import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div >
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 h-17  " >
        <div className="w-full justify-between  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 bg-white z-9999">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block md:px-0">
              {/* LOGO */}
              <Link href="/">
                <img src='../assets/logo.png' className='w-45 h-9 mx-2'/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-0 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={37} height={37} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={37}
                      height={37}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-l text-zinc-500 py-4 md:px-6 text-center border-b-2 md:border-b-0 ">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-l text-zinc-500 py-4 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link href="#events" onClick={() => setNavbar(!navbar)}>
                    Events
                  </Link>
                </li>
                <li className="pb-6 text-l text-zinc-500 py-4 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 text-l text-zinc-500 py-4 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link href="#teams" onClick={() => setNavbar(!navbar)}>
                    Teams
                  </Link>
                </li>
                <li className="pb-6 text-l text-zinc-500 py-4 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link href="#contacts" onClick={() => setNavbar(!navbar)}>
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
