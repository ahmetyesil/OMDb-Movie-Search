import {action, observable} from "mobx";
import Api from "../api"

class Store {
    @observable movie_list = [];

    @observable favorite_movie_list = [];

    @observable is_loading = false;

    @action('search movie')
    onSearch(s, type, y) {
        this.is_loading = true;
        Api.Movies.getByFilterList(s, type, y).then((response) => {
            if (response.Response === "True") {
                if (localStorage.getItem('favorite_movie_list')) {
                    this.favorite_movie_list = JSON.parse(localStorage.getItem('favorite_movie_list'));
                    response.Search.forEach((movie) => {
                        const favorite_movie = this.favorite_movie_list.find((favorite_movie) => {
                            return (favorite_movie.imdbID === movie.imdbID)
                        });
                        movie.isFavorite = !!favorite_movie;
                    });
                } else {
                    response.Search.forEach((movie) => {
                        movie.isFavorite = false;
                    });
                }
                this.movie_list = response.Search;
                this.is_loading = false;
            } else {
                this.movie_list = [];
                this.is_loading = false;
            }

        }).catch((e) => {
            this.is_loading = false;
            console.log('e', e)
        });
    }


    getFavoriteMovieList() {
        if (localStorage.getItem('favorite_movie_list')) {
            this.favorite_movie_list = JSON.parse(localStorage.getItem('favorite_movie_list'));
        }
    }


    @action('favorite movie')
    onFavorite(index, movie_item) {
        movie_item.isFavorite = !movie_item.isFavorite;
        if (movie_item.isFavorite) {
            this.favorite_movie_list.push(movie_item);
        } else {
            this.favorite_movie_list.splice(index, 1);
        }
        localStorage.setItem('favorite_movie_list', JSON.stringify(this.favorite_movie_list))
    }

}

const store = new Store();
export default store;
