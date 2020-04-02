import React, {Component} from 'react'
import SearchBar from "../components/search-bar";
import MovieList from "../components/movie-list";


export default class Index extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <SearchBar/>
                <MovieList/>
            </>
        )
    }
}
