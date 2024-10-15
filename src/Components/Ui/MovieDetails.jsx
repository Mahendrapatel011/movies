import { useLoaderData } from "react-router-dom";
import './MovieDetail.css'; // Import the CSS file

export const MoviesDetail = () => {
  const movieData = useLoaderData(); // Fetch the movie data using the loader
  console.log(movieData);

  if (!movieData || movieData.Response === "False") {
    return <h1>Movie not found!</h1>;
  }

  return (
    <div className="movie-detail-container"> {/* Main container for the card */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front"> {/* Front side of the card */}
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
          <div className="card-back"> {/* Back side of the card */}
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

export const GetMoviesDetail = async ({ params }) => {
  const id = params.movieID; // Use movieID as IMDb ID
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=baad5987`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
