import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import SearchEither from "./components/SearchEither";
import OnePerson from "./components/OnePerson";
import OnePlanet from "./components/OnePlanet";



function App() {
  return (
    <div className="App">
      
      
      
      <h1>Star Wars API Search</h1>
      <Link to={"/"}>HOME</Link>
      |
      <Link to={"/searchEither"}>SEARCH</Link>
      <hr/>


    <Routes>
    {/* <Route path="/" element={<Home/>}></Route> */}
    <Route path="/searchEither" element={<SearchEither/>} ></Route>
    <Route path="/one/:people/:id" element={<OnePerson/>}></Route>
    <Route path="/one/:planet/${}" element={<OnePlanet/>}></Route>
    </Routes>



    </div>
  );
}

export default App;
