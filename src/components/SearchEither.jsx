import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";


const SearchEither = () => {

    const handleChange = (e) => {
        const {name, value} = e.target
        setQuery (currentData => ({...currentData, [name]:value}))
    }

    const [query, setQuery] = useState({category: "people", id: ""});
    


    const navigator = useNavigate();

    const searchPerson = () => {
    // const searchPerson = (e) => {
        // e.preventDefault();
        console.log(query.category);
        console.log(query.id);
        navigator(`/one/${query.category}/${query.id}`);
    };
    
    
// ***************************************   
// ************* CSS BELOW *************
// ***************************************    
  //css for drop select
  const DropSelection = styled.select`
    border-radius: 5px;
    background-color: lightgray;
    color: black;
    min-width: 110px;
    padding-left: 5px;
    margin-left: 10px;
    margin-right: 10px;
  `;

  //css for ID search
  const IdInput = styled.input`
    border-radius: 5px;
    background-color: lightgray;
    color: black;
    min-width: 110px;
    margin-left: 10px;
    margin-right: 10px;
  `;

  //css for search button
  const SearchButton = styled.button`
    background-color: blue;
    color: white;
    border: 1px solid;
    min-width: 95px;
    border-radius: 5px;
    min-width: 50px;
  `;

  //css for search row bar
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 30px;
  `;
// ***************************************  
// ************** END OF CSS *************
// ***************************************  


//(SOLVED - removed styled components)EEROR FOUND - input section allows for minimal typing*
//TODO: search button was changed so much, don't remember what I had

  return (
    // <form onSubmit={searchPerson}> </form>
      <div>
      <label> Search For: </label>
      <select name="category" onChange={handleChange} >
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>

      <label>ID: </label>

      <input type="text" name="id" onChange={handleChange}/>
      {/* <input type="submit" value="Search"/> */}
      {/* <SearchButton type="submit" > Search</SearchButton> */}
      <SearchButton onClick={searchPerson}> Search</SearchButton>
      </div>
  );
};

export default SearchEither;
