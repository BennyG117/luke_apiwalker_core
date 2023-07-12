import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";

const OnePerson = () => {


// ***************************************   
// ************* CSS BELOW *************
// ***************************************  



// ***************************************  
// ************** END OF CSS *************
// ***************************************  

//TODO: Will need to adjust based on axios.get?
const {people, id} = useParams();

// const [pic, setPic] = useState("");


//TODO: Adjust param being entered so it's referencing a number instead of a person name
const getPersonData = () => {
    // axios.get(`https://swapi.dev/api/people/${person}`)
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err));
};

useEffect(getPersonData, []);


  return (
    <div>OnePerson</div>
  )
}

export default OnePerson