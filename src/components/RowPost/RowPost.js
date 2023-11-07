import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageURL,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies] = useState([]);
  const [urlId,setUrlid] = useState('');
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      // console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network error')
    }) 
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }else{
        alert('trailer not available');
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img onClick={() => handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageURL + movie.backdrop_path}`} alt="poster" />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
  
}

export default RowPost
