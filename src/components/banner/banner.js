import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './banner.css'

import { API_KEY,imageURL } from '../../constants/constants'; 
function Banner() {
  const [movie,setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const random = Math.floor(Math.random() * 20)
        setMovie(response.data.results[random])
        console.log(response.data.results[random]);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div style={{backgroundImage:`url(${ movie ? imageURL+movie.backdrop_path : ''})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ''}</h1>
        <h1 className='title'>{movie ? movie.name : ''}</h1>
        <div className='buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>
        {movie ? movie.overview : ''}
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
