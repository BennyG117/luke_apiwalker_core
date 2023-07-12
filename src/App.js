import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import SearchEither from "./components/SearchEither";
import OnePerson from "./components/OnePerson";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <h1>Star Wars API Search</h1>
      <Link to={"/"}>HOME</Link>|<Link to={"/searchEither"}>SEARCH</Link>
      <hr />
      <SearchEither />
      <Routes>

        <Route path="/one/:category/:id" element={<OnePerson />}></Route>
        <Route path="/Error" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
