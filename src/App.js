import ".//components/Reset.css";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultBox from "./components/ResultBox";
import { MyContext } from "./components/Context";

function App() {
  const [data, setData] = useState();
  const [fetched, setFetched] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [user, setUser] = useState("octocat");
  const [mode, setMode] = useState("#F2F2F2");
  const [clickedMode, setClickedMode] = useState(false);
  const [noResult, setNoResult] = useState("");

  async function getInfo() {
    await fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        if (json.message !== "Not Found") {
          setFetched(true);
        }
      });
  }
  useEffect(() => {
    getInfo();
  }, [user]);

  function changeInputValue(e) {
    setSearchInputValue(e.target.value);
  }
  function searchClicked() {
    setUser(searchInputValue);
    if (searchInputValue === "") {
      setNoResult("No results");
    }
    // else if (user != data.login) {
    //   setNoResult("No results");
    //   console.log("wrong");
    // }
    else {
      setNoResult("");
    }
    console.log(data);
  }
  function changeMode() {
    setClickedMode(!clickedMode);
    if (!clickedMode) {
      setMode("#141D2F");
    } else {
      setMode("#F2F2F2");
    }
  }
  function keyPress(e) {
    if (e.code === "Enter") {
      searchClicked();
    }
  }
  return (
    <>
      <MyContext.Provider
        value={{
          data: data,
          searchInputValue: searchInputValue,
          changeInputValue: (e) => changeInputValue(e),
          searchClicked: searchClicked,
          changeMode: changeMode,
          clickedMode: clickedMode,
          user: user,
          noResult: noResult,
          keyPress: keyPress,
        }}
      >
        <div className="container" style={{ backgroundColor: mode }}>
          <main>
            <Header />
            <SearchBox />
            {fetched ? <ResultBox /> : ""}
          </main>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;