import { useLoaderData } from "react-router-dom"
import { Card } from "../Components/Ui/Card";
import "./Movie.css"
export const Movie=()=>{
    const moviesData=useLoaderData();
    console.log(moviesData);
    return <>
    <ul className="container-grid" >
        {moviesData.Search.map((curMovie)=>{
            return <Card key={curMovie.imdbID} curMovie={curMovie}/>
        })}
    </ul>
    </>
}