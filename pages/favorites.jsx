import React, {Component} from 'react'
import SearchBar from "../components/search-bar";
import FavoriteMovieList from "../components/favorite-list";


export default class Index extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <SearchBar/>
                <FavoriteMovieList/>
            </>
        )
    }
}
