import React from 'react'
import Movie from "./movie";
import store from "../stores"
import {observer} from "mobx-react";
import "../styles/components/favorite-list.scss"

@observer
export default class FavoriteList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.getFavoriteMovieList();
    }

    render() {
        return (
            <div className="favorite-movie-list">
                <div className="container">
                    <div className="row">
                        {store.favorite_movie_list && store.favorite_movie_list.map((item, index) => (
                            <div key={item.imdbID} className="col-lg-3 col-md-6 col-sm-12">
                                <Movie index={index} model={item}/>
                            </div>
                        ))}
                        {
                            (store.favorite_movie_list && store.favorite_movie_list.length === 0) ?
                                <div className="col-12 empty">
                                    <strong>
                                        You have no favorites
                                    </strong>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}



