import React from 'react';
import './App.css';
import MovieList from './MovieList';
import MoviesData from './movie-data.json';



function App() {
  
  const movieNames = MoviesData;
  
  return (
    <div className="container">
      <div class="row">        
          <div class="col-md-12">
            <MovieList movieNames={movieNames}/>
          </div>
          
        </div>      
    </div>
  );
}

export default App;
