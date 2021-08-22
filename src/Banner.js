import React, { useEffect, useState } from 'react';
import "./Row.css";
import YouTube  from 'react-youtube';
import movieTrailer from "movie-trailer";
const baseUrl="https://image.tmdb.org/t/p/original/";

const Banner=(({title,fetchUrl})=>{
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
        console.log(data.results);
        setMovies(data.results[Math.floor(Math.random()*data.results.length-1)]);
    }catch (error) {
            console.log(`The error is ${error}`);}
        return Request;
        }
        getData();
    },[fetchUrl]);
    console.log(movies);
    function truncate(str,n)
    {
        return str?.length>n ? str.substr(0,n-1)+"...":str;
    }
return(
    
    <div className="banner" style={{backgroundImage:`url(${baseUrl}${movies?.backdrop_path})`,backgroundSize:"100% 100%",backgroundPosition:"Top",height:"550px"}}>
    <div className="overlay">
    <h1 className="banner__title">
       {movies?.title || movies?.name || movies?.original_name}  </h1>
    <div className="banner_button">
        <button className="banner_button_1" onClick={()=>handleClick(movies)}>Play</button>
        <button className="banner_button_2">Details</button>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
    <h1 className="banner_overview">{truncate(movies?.overview,150)}</h1>
    
    </div>
    
    </div>
)
});
export default Banner;