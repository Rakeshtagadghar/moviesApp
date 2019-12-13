import React from 'react';
import Router from 'next/router';
import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById, updateMovieById } from '../../../actions';

class Edit extends React.Component {

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id)

        return { movie };
    }

    handleUpdateMovie = movie => {
        updateMovieById(movie).then(updatedMovie => {
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="container">
                {JSON.stringify(movie)}
                <MovieCreateForm
                    submitButton="Update"
                    movie={movie}
                    handleFormSubmit={this.handleUpdateMovie}
                />
            </div>
        )
    }
}

export default Edit;