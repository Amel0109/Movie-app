import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../App";

function TvList() {

    const [shows, setShows] = useState([]);
    const search = useContext(SearchContext);

    useEffect(() => {
        const getAsyncShows = async () => {
            let data;
            if (search.length > 2) {
                data = await searhShows(search)
            } else {
                data = await getShows();
            }
            setShows(data.results);
        }
        getAsyncShows();
    }, [search]);

    const getShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=50c817a98f088ecfaaf8483ad5df9597&language=en-US&page=1')
            .then(res => res.json());
        return data;
    };

    const searhShows = async (search) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=50c817a98f088ecfaaf8483ad5df9597&language=en-US&page=1&query=${search}&include_adult=false`)
            .then(res => res.json());
        return data;
    };


    return (
        <div className="TvList">
            {shows.map(show =>
                <Link key={show.id} to={`/tv-details/${show.id}`} >
                    <div>
                        <h3>{show.name}</h3>
                        <img src={`https://image.tmdb.org/t/p/w185/${show.poster_path}`} alt="pic" />
                    </div>
                </Link>
            )}
        </div>
    );
}

export default TvList;