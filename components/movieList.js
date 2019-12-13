import React from "react";
import Link from 'next/link';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  renderMovies = movies => {
    const movieElements = movies.map(movie => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <Link href="/movies/[id]" as={'/movies/' + movie.id}>
            <a>
              <img className="card-img-top" src={movie.image} alt="" />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href={'/movies/[id]'} as={'/movies/' + movie.id}>
                <a >{movie.name}</a>
              </Link>
            </h4>
            <h3 className="movie-genre">{movie.genre}</h3>
            <h5>$24.99</h5>
            <p className="card-text">{this.shorten(movie.description, 100)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small>
          </div>
        </div>
      </div>
    ));

    return movieElements;
  };
  render() {
    const { movies } = this.props;
    return this.renderMovies(movies);
  }
}

export default MovieList;
