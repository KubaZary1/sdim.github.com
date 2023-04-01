import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [mobileState, setMobileState] = useState(false);
  return (
    <>
      <div className="responsiveButton">
        <button onClick={() => setMobileState((prev) => !prev)}>MENU</button>
      </div>
      <div className="navSpacer"></div>
      <nav className={mobileState ? "navbarActive" : "navbar"}>
        <div className="navbarLogo">SDIM 2023 - STRONA KONKURSOWA</div>
        <div className="navbarLinks">
          <a href="/sdim.github.com/#/">STRONA GŁÓWNA</a>
          <a href="/sdim.github.com/#/zyciorys">ŻYCIORYS</a>
          <a href="/sdim.github.com/#/getto-powstanie">POWSTANIE W GETCIE</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
