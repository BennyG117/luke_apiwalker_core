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

  const { category, id } = useParams();

  const [info, setInfo] = useState({});
  // const [info, setInfo] = useState("");

  const navigator = useNavigate();



  const getPersonData = () => {
    console.log(category, id);
    // axios.get(`https://swapi.dev/api/people/${person}`)
    axios
      .get(`https://swapi.dev/api/${category}/${id}`)
      .then((res) => setInfo(res.data))
      .catch((err) => navigator('/Error'));
  };

  //! >>SOLVED<< implement use effect to match useParams so it knows when to change*
  useEffect(getPersonData, [category, id]);

  // need to refer to ternary from practice hw*
  return (
    <div>
        {/* Determine why importing the search bar doesn't function properly when added to the top of the results page */}
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
