import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [mobileState, setMobileState] = useState(false);
  return (
    <>
      <div className="responsiveButton">
        <button onClick={() => setMobileState((prev) => !prev)}>
          Nawigator
        </button>
      </div>
      <div className="navSpacer"></div>
      <nav className={mobileState ? "navbarActive" : "navbar"}>
        <div className="navbarLinks">
          <a href="/">STRONA GŁÓWNA</a>
          <a href="/zyciorys">ŻYCIORYS</a>
          <a href="/autorzy">AUTORZY</a>
          <a href="/getto-powstanie">POWSTANIE W GETCIE</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
