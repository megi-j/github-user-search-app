import React, { useContext } from "react";
import search from "../images/icon-search.svg";
import { MyContext } from "./Context";

export default function SearchBox() {
  const context = useContext(MyContext);
  return (
    <div
      className="search-box"
      style={{
        backgroundColor: context.clickedMode === false ? "#FEFEFE" : "#1E2A47",
        boxShadow:
          context.clickedMode === false
            ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
            : null,
      }}
    >
      <img src={search} alt="search" />
      <input
        style={{
          backgroundColor:
            context.clickedMode === false ? "#FEFEFE" : "#1E2A47",
          color: context.clickedMode === false ? "#4B6A9B" : "#fff",
        }}
        type="search"
        placeholder="Search GitHub username…"
        value={context.searchInputValue}
        onChange={(e) => context.changeInputValue(e)}
        onFocus={(e) => (e.target.placeholder = "")}
      />
      <div className="no-result">{context.noResult}</div>
      <button onClick={context.searchClicked}>Search</button>
    </div>
  );
}
