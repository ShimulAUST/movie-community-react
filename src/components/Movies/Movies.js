import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './Movies.css';
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./movieData.JSON')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    const handleAddToCart = (movie) => {
        //console.log(movie.name);
        const newCart = [...cart, movie];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="row"  >
                <div className="col-md-10">
                    <div className="row">
                        {
                            movies.map(movie => <Movie
                                key={movie.id}
                                movie={movie}
                                handleAddToCart={handleAddToCart}
                            />)
                        }

                    </div>

                </div>
                <div className="col-md-2">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Movies;