import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-2xl">
        <div className="flex justify-between items-center p-5 md:p-0 md:pl-5 2xl:max-w-7xl 2xl:m-auto relative">
          <nav className="h-full">
            <ul className="flex justify-center items-center gap-5 h-full text-black uppercase font-bold">
              <li className="w-16">
                <a href="/"><img src="logo.png" alt="Logo" /></a>
              </li>
              <li className="hidden md:flex items-center h-20 hover:text-primary-green">
                <a  href="/">Menu</a>
              </li>
              <li className="hidden md:flex items-center h-20 relative hover:text-primary-green">
                <a href="/">Rewards</a>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-green"></span>
              </li>
              <li className="hidden md:flex items-center h-20 hover:text-primary-green">
                <a  href="/">Gift Cards</a>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-4 p-5">
            <a className="text-black mr-10" href="/">Find a Store</a>
            <a href="/"><Button variant="secondaryBlack">Sign In</Button></a>
            <a href="/"><Button variant="primaryBlack">Join now</Button></a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className={`fixed top-26 right-0 h-full bg-white shadow-lg z-15 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
            <ul className="flex flex-col items-start gap-8 mt-12 text-black font-semibold w-96 p-5">
              <li className="w-full">
                <a href="/">Menu</a>
              </li>
              <li className="w-full">
                <a href="/">Rewards</a>
              </li>
              <li className="w-full">
                <a href="/">Gift Cards</a>
              </li>
              <li className="border-b-2 border-black border-solid w-full opacity-20"></li>
              <li className="flex gap-2 w-full">
                <a href="/"><Button variant="secondaryBlack">Sign In</Button></a>
                <a href="/"><Button variant="primaryBlack">Join now</Button></a>
              </li>
              <li className="w-full">
                <a href="/">Find a Store</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
      <div className="bg-secondary-green sticky top-0 z-10">
        <div className="flex justify-between items-center px-5 py-2 2xl:max-w-7xl 2xl:m-auto">
          <p className="uppercase font-bold">StarBucks Rewards</p>
          <Button className="md:hidden" variant="secondary">Join the app</Button>
        </div>
      </div>
    </>
  );
};

export default Header;