import React from 'react';
import './App.css'

function MovieDetails(props) {
  return (
    <div className='MovieDatails'>
        <div>
            <strong>{props.title} (<span>{props.year}</span>)</strong>                        
        </div>
        <div>
            <p>
                <strong>Director:</strong> {props.director}<br/>
                <strong>Casts:</strong> {props.casts}<br/>
                <strong>Genre:</strong> {props.genre}
            </p>
        </div>
    </div>
  )
}

export default MovieDetails;