import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import MovieDetails from './movieDetails/MovieDetails';
import TvDetails from './tvDetails/TvDetails';
import { useState } from 'react';

export const SearchContext = React.createContext('')

function App() {

  const [search, setSearch] = useState('');

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <input type='text' value={search} placeholder='search'
        onChange={onSearchChange} />
      <SearchContext.Provider value={search}>
        <Switch>
          <Route exact path='/movie-details/:id'>
            <MovieDetails />
          </Route>
          <Route exact path='/tv-details/:id'>
            <TvDetails />
          </Route>
          <Route path="/" >
            <Dashboard />
          </Route>
        </Switch>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
