import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SecrchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Mounster = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [mounsters, setMounsters] = useState<Mounster[]>([]);
  const [filteredMounsters, setfilteredMounsters] = useState(mounsters);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Mounster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMounsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const dummyMounsters1 = mounsters.filter((mounster) => {
      return mounster.name.toLowerCase().includes(searchString);
    });
    setfilteredMounsters(dummyMounsters1);
  }, [mounsters, searchString]);

  const handleMounsters = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchString(event.target.value.toLowerCase());
  };

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
