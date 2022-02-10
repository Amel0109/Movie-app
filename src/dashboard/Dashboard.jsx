import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import MovieList from "../movieList/MovieList";
import TvList from "../tvList/TvList";

function Dashboard() {



    return (
        <div className="Dashboard">
            <nav>
                <ul>
                    <li>
                        <Link to="movie-list">Movies</Link>
                    </li>
                    <li>
                        <Link to="tv-list">Shows</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/movie-list">
                    <MovieList />
                </Route>
                <Route exact path="/tv-list">
                    <TvList />
                </Route>
            </Switch>
        </div>
    );
}

export default Dashboard;