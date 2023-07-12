import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ObiImage from './image.jsx';

//TODO: ERRO getting the Obi-Wan images to work (tried url and tried jpg, still no success)

const Error = () => {

    
    
    return (
        <div>
        <h2>These are not the droid you're looking for...</h2>
        <img src={ObiImage} alt="Obi-Wan Kenobi"/>
    </div>
  )
}

export default Error






{/* 
// const {ObiWan} = useParams();

// const [pic, setPic] = useState("")

// const getObiWanData = () => {
//     axios.get(`https://swapi.dev.api/people/10`)
//     .then((res) =>setPic(res.data.)) */}