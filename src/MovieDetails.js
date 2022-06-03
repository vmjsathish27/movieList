import React from 'react'

function MovieDetails({movieNames}) {
    // const posterUrl = movieNames.map(items=>items.poster);
  return (
    <div>
        {movieNames.map(items=>{
            return(
                <div>
                    <img src={items.poster} alt=""/>
                    <div>
                        <strong>{items.title} (<span>{items.year}</span>)</strong>                        
                    </div>
                    <div>
                        <p>
                            <strong>Director:</strong> {items.director}<br/>
                            <strong>Casts:</strong> {items.casts}<br/>
                            <strong>Genre:</strong> {items.genre}
                        </p>
                    </div>
                </div>
            )
            
        })}
        
    </div>
  )
}

export default MovieDetails