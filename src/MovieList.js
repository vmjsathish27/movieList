import React,{useState, useEffect} from 'react'
import './App.css';

function MovieList({movieNames}) {
    // const [data, setData] = useState([]);
  const handleClick = () => {
    // setData();
  }
  return (
    <div>
        {movieNames && movieNames.map(items=>{
            return (
                <div className='listMovie' key={items.id}>                    
                    <button onClick={handleClick}>{items.title}</button>
                </div>
            )
        })}        
    </div>
  )
}

export default MovieList