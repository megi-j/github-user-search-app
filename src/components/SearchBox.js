import React from "react";
import search from "../images/icon-search.svg";

export default function SearchBox() {
  return (
    <div className="search-box">
      <img src={search} alt="search" />
      <input type="search" placeholder="Search GitHub username…" />
      <button>Search</button>
    </div>
  );
}
