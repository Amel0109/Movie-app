import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

function MovieDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const history = useHistory();

    useEffect(() => {
        const getAsyncMovie = async () => {
            const data = await getMovie(id);
            console.log(data);
            if (data?.id) {
                setMovie(data);
            } else {
                history.push('/movie-list')
            }
        }
        getAsyncMovie();
    }, []);

    const getMovie = async (id) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=50c817a98f088ecfaaf8483ad5df9597&language=en-US&page=1`)
            .then(res => res.json());
        return data;
    };

    return (
        <div className="MovieDetails">
            {
                <div>
                    <h3>{movie.title}</h3>
                    <img alt='pic' src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                    <p>{movie.overview}</p>
                </div>
            }
        </div>
    );
}

export default MovieDetails;