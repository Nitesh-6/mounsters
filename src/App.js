import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SecrchBox from "./components/search-box/search-box.component";
import axios from "axios";

function App() {
  const [mounsters, setMounsters] = useState([]);
  const [filteredMounsters, setfilteredMounsters] = useState(mounsters);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setMounsters(res.data));
  }, []);

  useEffect(() => {
    const dummyMounsters1 = mounsters.filter((mounster) => {
      return mounster.name.toLowerCase().includes(searchString);
    });
    setfilteredMounsters(dummyMounsters1);
  }, [mounsters, searchString]);

  function handleMounsters(event) {
    setSearchString(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SecrchBox
        onchangeHandler={handleMounsters}
        className="mounster-search-box"
        placeHolder="search monsters"
      />
      <CardList mounsters={filteredMounsters} />
    </div>
  );
}

export default App;
