import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

function TvDetails() {

    const [show, setShow] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const getAsyncShow = async () => {
            const data = await getShow(id);
            if (data?.id) {
                setShow(data);
            } else {
                history.push('/tv-list');
            }
        };
        getAsyncShow();
    }, []);

    const getShow = async (id) => {
        const data = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=50c817a98f088ecfaaf8483ad5df9597&language=en-US&page=1`)
            .then(res => res.json());
        return data;
    };

    return (
        <div className="TvDetails">
            {
                <div key={show.id}>
                    <h3>{show.name}</h3>
                    <img alt='pic' src={`https://image.tmdb.org/t/p/w185/${show.poster_path}`} />
                    <p>{show.overview}</p>
                </div>
            }
        </div>
    );
}

export default TvDetails;