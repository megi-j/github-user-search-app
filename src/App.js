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
  async function getInfo() {
    await fetch("https://api.github.com/users/octocat")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setData(json);
        setFetched(true);
      });
  }
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <MyContext.Provider value={{ data: data }}>
        <div className="container">
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
