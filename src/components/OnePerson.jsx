import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchEither from "./SearchEither";
import axios from "axios";

const OnePerson = () => {
  // ***************************************
  // ************* CSS BELOW *************
  // ***************************************

  // ***************************************
  // ************** END OF CSS *************
  // ***************************************

  //TODO: Will need to adjust based on axios.get?
  const { category, id } = useParams();

  const [info, setInfo] = useState("");

  const navigator = useNavigate();


  //TODO: Adjust param being entered so it's referencing a number instead of a person name
  const getPersonData = () => {
    console.log(category, id);
    // axios.get(`https://swapi.dev/api/people/${person}`)
    axios
      .get(`https://swapi.dev/api/${category}/${id}`)
      .then((res) => setInfo(res.data))
      .catch((err) => navigator('/Error'));
  };

  useEffect(getPersonData, []);

  // need to refer to ternary from practice hw*
  return (
    <div>
        {/* //TODO: Determine why importing the search bar doesn't function properly when added to the top of the results page* */}
        {/* <SearchEither/> */}
      {category == "people" ? (
        <div>
            <h2>{info.name}</h2>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Hair Color: {info.hair_color}</p>
            <p>Skin Color: {info.skin_color}</p>
        </div>
      ) : (
        <div>
            <h2>{info.name}</h2>
            <p>Climate:{info.climate} </p>
            <p>Terain:{info.terrain} </p>
            <p>Surface Water:{info.surface_water > 0 ? "True" : "False"} </p>    
            <p>Population:{info.population} </p>    
        </div>
      )}
    </div>
  );
};

export default OnePerson;
