import React from 'react'
import {string} from 'prop-types'
import Movie from "./movie";
import Loading from "./loading";
import store from "../stores"
import {observer} from "mobx-react";
import "../styles/components/movie-list.scss"

@observer
export default class MovieList extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="movie-list">
                <div className="container">
                    {
                        (store.is_loading) ? <div className="row">
                            <div className="col-12">
                                <Loading/>
                            </div>
                        </div> : null
                    }

                    <div className="row">
                        {store.movie_list && !store.is_loading && store.movie_list.map((item, index) => (
                            <div key={item.imdbID} className="col-lg-3 col-md-6 col-sm-12">
                                <Movie index={index} model={item}/>
                            </div>
                        ))}
                        {
                            (store.movie_list && !store.is_loading && store.movie_list.length === 0) ?
                                <div className="col-12 empty">
                                    <strong>
                                        No Data
                                    </strong>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}



