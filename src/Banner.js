import React,{ useState ,useEffect} from 'react'
import axios from './axios'; 
import requests from './requests'; 
import './Banner.css';

function Banner() {

  const [movie,setMovie] = useState([]);

  useEffect(() => {
   async function fetchData() { 
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
        request.data.results[
        Math.floor(Math.random()*request.data.results.length-1)
        ]
    );
    return request;

   }
   fetchData();
  }, []);
  console.log(movie);
  function truncate(str, num) {
   return str?.length > num ? str.substr(0,num-1) + '...': str;
  }

   return ( 
  <header 
    className="banner"
    style = {{
      /* background image */
      backgroundSize:"cover",
      backgroundImage:`url(
      "https://image.tmdb.org/t/p/original/${movie.poster_path}"
      )`,
      backgroundPosition:"center",
      }}
    >
    <div className="banner__contents">
      {/*title*/}
      <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className='banner__buttons'>
      <button className='banner__button'>Play</button>
      <button className='banner__button'>My List</button>
      </div>
      <h1 className='banner__description'>{movie?.overview}
         {truncate (movie?.overview, 100)}
      </h1>
    </div> 

    <div className='banner__fadeBottom'>
      
    </div>
  </header>
  )
}

export default Banner;