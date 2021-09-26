import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Movie.css';
const Movie = (props) => {
    //console.log(props);

    const { name, description, image, rating, language, genre, budget } = props.movie;
    return (



        <div className="col-md-4 d-flex align-items-stretch mb-5">
            <div class="card">
                {/* <img className="card-img-top" src="" alt="Card image cap"> */}

                <img src={image} alt="img" height="200px" />

                <div class="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Rating initialRating={rating}
                        readonly />
                    <p>Language: {language}</p>
                    <p>Genre: {genre}</p>
                    <p>Budget: {budget}</p>
                    <button className="btn btn-warning" onClick={() => props.handleAddToCart(props.movie)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Movie;