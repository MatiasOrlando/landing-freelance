import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-primary">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a>
                <img
                  className="w-[178px] h-[38px]"
                  src="assets/logoFooter.png"
                />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[40px]6 h-8 text-[#D9D9D9] "
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[40px] h-8 text-[#D9D9D9] "
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className={`flex-1 flex justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black hover:text-indigo-200 ">
                  <p style={{ color: "#FDCAE1" }} className="flex">
                    <img
                      src="/assets/instagram.png"
                      style={{ color: "#FDCAE1" }}
                      className="w-[22px] h-[22px]"
                    />{" "}
                    <span className="pl-2">@terapias</span>
                  </p>
                </li>
                <li className="text-black hover:text-indigo-200">
                  <p style={{ color: "#FDCAE1" }} className="flex">
                    <div className="ml-0">
                      <img
                        src="/assets/facebook.png"
                        style={{ color: "#FDCAE1" }}
                        className="w-[11.34px] h-[20px] xl:ml-2 lg:ml-2 md:ml-1 sm:ml-1 xs:ml-1"
                      />
                    </div>
                    <span className="xl:pl-2 lg:pl-2 md:pl-2 sm:pl-5 xs:pl-5">
                      /terapias
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a
              className="fab fa-whatsapp"
              href="https://wa.me/3571458344/?text=Contacta%20con%20Aylen%20por%20mensaje!"
              target="_blank"
            >
              <button className="flex justify-around w-[140px] h-[40px] px-4 py-2 text-[white] bg-secondary rounded-md shadow hover:bg-gray-800">
                <p>Contacto</p>
                <img src="assets/whatsapp.png" />
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
