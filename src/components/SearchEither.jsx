import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";


const SearchEither = () => {

    const [query, setQuery] = useState("");
    
    const navigator = useNavigate();

    const searchPerson = () => {
        navigator(`/one/people/${query}`);
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
    font-size: large;
  `;
// ***************************************  
// ************** END OF CSS *************
// ***************************************  

//TODO: Confirm/Adjust DropSelections options so the people & planet values impact search params

//TODO: EEROR FOUND - input section allows for minimal typing*

  return (
    <Container>
      <label> Search For: </label>
      <DropSelection>
        <option value="{people}">People</option>
        <option value="{planet}">Planet</option>
      </DropSelection>

      <label>ID: </label>

      {/* ERROR HERE - input tag will only allow 1 letter or number typed before searching */}
{/* 
      onChange={(e) => setQuery(e.target.value)} 
 value={query} */}
      
      <IdInput type="text" onChange={(e) => setQuery(e.target.value)} 
 value={query}/>
      <SearchButton onClick={searchPerson}> Search</SearchButton>
    </Container>
  );
};

export default SearchEither;
