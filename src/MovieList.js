import React,{useState} from 'react';
import Header from './Header';
import Poster from './Poster';
import MovieDetails  from './MovieDetails';
import './App.css';

function MovieList({movieNames}) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');
    const [director, setDirector] = useState('');
    const [casts, setCast] = useState('');
    const [genre, setGenre] = useState('');
  const handleClick = (e) => {
    setTitle(e.title);
    setYear(e.year);
    setPoster(e.poster);
    setDirector(e.director);
    setCast(e.casts);
    setGenre(e.genre);
  }

  // const buttonStyle = {
  //   backgroundColor : index ?'red' : 'black',
  // }

  return (
    
    <div className="Main">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="HeaderCategory">
                  <Header />
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                  <div className="DetailsCategory">
                    <Poster poster={poster}/>
                    
                    <MovieDetails 
                      title={title}
                      year={year}
                      director={director}
                      casts={casts}
                      genre={genre}
                    />
                  {/* <MovieDetails {...props}/> */}
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="MovieCategory">
                  {movieNames && movieNames.map(items=>{
                      return (
                          <div className='listMovie' key={items.id}>                    
                              <button onClick={()=>handleClick(items)}>{items.title}</button>
                          </div>
                      )
                  })}        
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MovieList;