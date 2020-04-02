import React from 'react'
import {boolean, number, object, string} from 'prop-types'
import "../styles/components/movie.scss"
import {observer} from "mobx-react";
import store from "../stores";

@observer
export default class Movie extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        const {index, model} = this.props;

        return (
            <div className="movie">
                <div className="movie-image">

                    <img src={model.Poster} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300/101010/f1f1f1?text=Image Not Found"
                    }}/>
                </div>
                <div className="movie-description">
                    <strong className="title">{model.Title}</strong>
                    <span className="year">{model.Year}</span>
                    <span className="rating">{model.imdbRating}</span>
                    <a className="favorite-button"
                       onClick={() => {
                           store.onFavorite(index, model)
                       }}>
                        {
                            model.isFavorite ? <i className="fa fa-heart"/> : <i className="fa fa-heart-o"/>
                        }
                    </a>
                </div>
            </div>
        )
    }
}


Movie.propTypes = {
    index: number,
    model: object,
};



