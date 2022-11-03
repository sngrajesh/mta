/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font shadow-bottom fixed top-0 left-0 bg-white w-full  bg-white-400 bg-clip-padding bg-opacity-80 backdrop-filter backdrop-blur-xl border-b-gray-200 z-50">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between max-w-7xl">
          <div className="w-full md:w-fit flex title-font font-medium items-center text-gray-900 overflow-hidden justify-between">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-16 w-16  bg-gray-100  rounded-full  p-2"
                />
                <span className="ml-3 text-xl">
                  Antennas
                </span>
              </div>
            </Link>
         
          </div>
          <nav
            id="link_container"
            className="pb-3 md:pb-0 md:ml-auto md:mr-7 flex flex-wrap items-center justify-center cursor-pointer text-xl overflow-hidden mt-4 md:mt-0"
          >
            <Link href={"/"}>
              <a className="mr-5 hover:text-gray-900 hover:border-b-2 border-purple-600 text-gray-700 ">
                Types
              </a>
            </Link>
            <Link href={"/properties"}>
              <a className="mr-5 hover:text-gray-900 hover:border-b-2 border-purple-600 text-gray-700 ">
                Properties
              </a>
            </Link>

            <Link href={"/about"}>
              <a className="mr-0 hover:text-gray-900 hover:border-b-2 border-purple-600 text-gray-700 ">
                About
              </a>
            </Link>
          </nav>
          
        </div>
      </header>
    </>
  );
};

export default Navbar;
