import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './Components/MovieCard';

// 66177250 api key

const API_URL = 'http://www.omdbapi.com?apikey=66177250';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img 
                    alt='search'
                    src={SearchIcon}
                    onClick={() => searchMovies(search)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                        
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )

            }


            
        </div>
    );
}

export default App;