import React,{useState, useEffect} from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails'
import MoviesData from './movie-data.json';



function App() {
  
  const movieNames = MoviesData;
  
  return (
    <div className="container">
      <div class="row">

          <div class="col-md-6 col-sm-12">
            <MovieDetails movieNames={movieNames} />
          </div>
          <div class="col-md-6 col-sm-12">
            <h1>Hello</h1>
            <MovieList movieNames={movieNames}/>
          </div>
          
        </div>      
    </div>
  );
}

export default App;
