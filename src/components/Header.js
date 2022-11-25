import React from "react";
import moon from "../images/icon-moon.svg";
export default function Header() {
  return (
    <header>
      <h1>devfinder</h1>
      <div className="mode">
        <p>DARK</p>
        <img src={moon} alt="moon" />
      </div>
    </header>
  );
}
