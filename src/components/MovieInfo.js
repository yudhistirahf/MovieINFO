import React from 'react'

const MovieInfo = (props) => {
    return(
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go Back</span>
            </div>
            <div className="row">
                <h3>{props.currentMovie.title}</h3>
                <div className="col s12 m4">
                    { props.currentMovie.poster_path == null ? 
                        <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="Card image" style={{ width: "100%, height 360"}}/> : 
                        <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{ width: "100%, height 360"}}/>
                    }
                </div>
                <div className="col s12 m8">
                    <div className="container">
                        <p>{props.currentMovie.overview}</p>
                        <p>{'Ratings        : '+props.currentMovie.vote_average}</p>
                        {/* <p>{'Genres         : '+props.currentMovie.genre_ids}</p> */}
                        <p>{'Languages      : '+props.currentMovie.original_language}</p>
                        <p>{'Release Date   : '+props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("-")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;