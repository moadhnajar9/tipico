import React from "react";
import imgLogo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="text-gray-100 flex max-width-screen mx-auto justify-between items-center h-14  py-8  ">
      <a className="basis-2/12" href="#logo">
        <img className="max-width-img" src={imgLogo} alt="tipico-logo" />
      </a>
      <div className="basis-8/12 text-sm flex gap-8   ">
        <a
          className="hover:opacity-100 opacity-70 focus:opacity-100 active:opacity-100"
          href="#Sports-Betting"
        >
          Sports Betting
        </a>
        <a
          className="hover:opacity-100 focus:opacity-100 active:opacity-100 opacity-70"
          href="#Live-Betings"
        >
          Live Betings
        </a>
        <a
          className="hover:opacity-100 focus:opacity-100 active:opacity-100 opacity-70"
          href="#Games"
        >
          Games
        </a>
      </div>
      <div className="basis-2/12 flex justify-end gap-4">
        <a className=" login-button bg-white text-skin-base" href="#Register">
          Register
        </a>
        <a className=" login-button bg-skin-base " href="#Login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
