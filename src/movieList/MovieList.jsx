import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../App";

function MovieList() {

    const [movies, setMovies] = useState([]);
    const search = useContext(SearchContext);


    useEffect(() => {
        const getAsyncMovies = async () => {
            let data;
            if (search.length > 2) {
                data = await searchMovies(search);
            } else {
                data = await getMovies();
            }
            setMovies(data.results);
        }
        getAsyncMovies();
    }, [search]);

    const getMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=50c817a98f088ecfaaf8483ad5df9597&language=en-US&page=1')
            .then(res => res.json());
        return data;
    };

    const searchMovies = async (search) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=50c817a98f088ecfaaf8483ad5df9597&language=en-US&query=${search}&page=1&include_adult=false`)
            .then(res => res.json());
        return data;
    };


    return (
        <div className="MovieList">
            {movies.map(movie =>
                <Link key={movie.id} to={`/movie-details/${movie.id}`}>
                    <div >
                        <h3>{movie.title}</h3>
                        <img alt='pic' src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                    </div>
                </Link>
            )}
        </div>
    );
}

export default MovieList;