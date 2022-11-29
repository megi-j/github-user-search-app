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

  // async function getInfo() {
  //   fetch(`https://api.github.com/users/${user}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // console.log(json);
  //       setData(json);
  //       if (json.message !== "Not Found") {
  //         setFetched(true);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error, "text");
  //     });
  // }
  function getInfo() {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error("something went wrong");
      })
      .then((responseJson) => {
        // console.log(responseJson);
        setData(responseJson);
        setFetched(true);
      })
      .catch((error) => {
        console.log(error);
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
    // if (user !== data.login) {
    //   setNoResult("No results");
    // } else {
    //   setNoResult("");
    // }
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
