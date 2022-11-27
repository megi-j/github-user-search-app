import React, { useContext } from "react";
import moon from "../images/icon-moon.svg";
import { MyContext } from "./Context";
import sun from "../images/icon-sun.svg";

export default function Header() {
  const context = useContext(MyContext);
  return (
    <header>
      <h1 style={{ color: context.clickedMode === false ? "#222731" : "#fff" }}>
        devfinder
      </h1>
      <div className="mode" onClick={context.changeMode}>
        <p
          style={{ color: context.clickedMode === false ? "#697C9A" : "#fff" }}
        >
          {context.clickedMode === false ? "DARK" : "LIGHT"}
        </p>
        <img src={context.clickedMode === false ? moon : sun} alt="moon/sun" />
      </div>
    </header>
  );
}
