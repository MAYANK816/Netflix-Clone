import React, { useEffect, useState } from 'react';
import "./Row.css";
import YouTube  from 'react-youtube';
import movieTrailer from "movie-trailer";
const baseUrl="https://image.tmdb.org/t/p/original/";
const Row=(({title,fetchUrl})=>{
    const[movies,setMovies]=useState([]);
    const[trailerUrl,settrailerUrl]=useState("");
    const opts={
        height:"390px",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
    const handleClick=(movie)=>{
        console.log("clicked");
        if(trailerUrl){
            settrailerUrl("");
        }
        else{
            console.log(movie?.original_title);
          movieTrailer(movie?.original_title || movie?.name || movies?.title)
          .then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search);
            urlParams.get("v");
            console.log(urlParams);
            settrailerUrl( urlParams.get("v"));
          })
          .catch((error)=>console.log(error));
        }
    }
    useEffect(()=>{
// if[],run once when row loads and dnt run again
  
const getData=async ()=>{
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch(fetchUrl, setHeader);
        const data = await res.json();
      //  console.log(data.results);
        setMovies(data.results);
    }catch (error) {
            console.log(`The error is ${error}`);}}

getData();
    },[fetchUrl]);
return(
    <div className="row">
    <h1 className="row__title">
       {title}  </h1>
      <div className="row__posters">
        {
            movies.map(movie=>(
                <img 
                onClick={()=>handleClick(movie)}
                key={movie.id}
                src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
            ))
        }
      </div>
  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
)
});
export default Row;