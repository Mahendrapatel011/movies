import { useLoaderData } from "react-router-dom";
import './MovieDetail.css';

export const MoviesDetail = () => {
    const movieData = useLoaderData();
    console.log(movieData);

    if (!movieData || movieData.Response === "False") {
        return <h1>Movie not found!</h1>;
    }

    return (
        <div className="movie-detail-container">
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <h1>{movieData.Title}</h1>
                        <img src={movieData.Poster} alt={movieData.Title} />
                        <button className="watch-button">Watch Now</button>
                        <button
                            className="about-button"
                            onClick={() => document.querySelector('.card').classList.toggle('flipped')}
                        >
                            About
                        </button>
                    </div>
                    <div className="card-back">
                        <h2>About {movieData.Title}</h2>
                        <p><strong>Year:</strong> {movieData.Year}</p>
                        <p><strong>Director:</strong> {movieData.Director}</p>
                        <p><strong>Actors:</strong> {movieData.Actors}</p>
                        <p><strong>Genre:</strong> {movieData.Genre}</p>
                        <p><strong>Language:</strong> {movieData.Language}</p>
                        <p><strong>Country:</strong> {movieData.Country}</p>
                        <p><strong>Awards:</strong> {movieData.Awards}</p>
                        <button
                            className="close-button"
                            onClick={() => document.querySelector('.card').classList.toggle('flipped')}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
