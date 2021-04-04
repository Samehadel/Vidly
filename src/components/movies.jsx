import React, { Component } from 'react';
import _ from 'lodash';
import { getMovies, getGenre } from '../services/moviesService.js';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from './../utils/pagination';
import { filterMoviesBasedOnGenre } from './../utils/filterMovies';
import MoviesTable from './moviesTable';


class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 5,
        currentPage: 1,
        currentFilter: 'All Genre',
        sortColumn: { sortBy: 'title', sortOrder: 'asc' }
    };


    render() {

        const { currentFilter, sortColumn, currentPage } = this.state;


        const { numberOfRequiredPages, displayedMovies } = this.getPagedData();
        const { history } = this.props;

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={getGenre()}
                        onFilter={this.handleFilter}
                        currentSelection={currentFilter} />
                </div>

                <div className="col">
                    <button className='btn btn-primary btn-lg m-2' 
                            onClick={() => history.push('/movies/new')}>
                       Add Movie
                    </button>
                    <p className='m-2'>{this.getNumberOfMovies()}</p>

                    <MoviesTable
                        items={displayedMovies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        sortColumn={sortColumn}
                        onSort={this.handleSort} />

                    <Pagination
                        numberOfPages={numberOfRequiredPages}
                        displayedPage={currentPage}
                        onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }


    handleSort = (sortColumn) => {

        this.setState({ sortColumn })

    }
    handleFilter = (currentSelection) => {
        this.setState({
            currentFilter: currentSelection
        })
    }
    handlePageChange = (newPage) => {
        this.setState({ currentPage: newPage });
    }

    handleLike = (someId) => {
        //console.log(`Movie ${someId} is like-clicked`);

        const movie = this.state.movies.find(m => m._id === someId);

        const index = this.state.movies.indexOf(movie);

        const moviesCopy = [...this.state.movies];

        const newMovie = { ...movie };

        newMovie.liked = newMovie.liked === true ? false : true;

        moviesCopy[index] = newMovie;

        this.setState({ movies: moviesCopy })
    }

    handleDelete = (movie) => {
        let moviesCopy = this.state.movies.filter(m => m._id !== movie._id);

        this.setState({
            movies: moviesCopy
        })
    }

    getNumberOfMovies() {
        const numberOfMovies = this.state.movies.length;

        return numberOfMovies === 0 ? 'Movies List is Empty' : `${numberOfMovies} movie(s) available`
    }
    getPagedData = () => {

        //State Destructring
        const { pageSize, currentPage, movies, currentFilter, sortColumn } = this.state;

        //Filter Movies based on genre
        const filteredMovies = filterMoviesBasedOnGenre(movies, currentFilter);

        //Sort filteredMovies
        const sortedMoives = _.orderBy(filteredMovies, [sortColumn.sortBy], [sortColumn.sortOrder])

        //Paginate Movies
        const displayedMovies = paginate(sortedMoives, pageSize, currentPage);

        const numberOfRequiredPages = _.ceil(filteredMovies.length / pageSize);

        return { numberOfRequiredPages, displayedMovies }
    }
}

export default Movies;