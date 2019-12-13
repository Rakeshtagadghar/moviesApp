
import { useRouter } from 'next/router';
import { getMovieById, deleteMovieById } from '../../../actions';
import Link from 'next/link'
const Movie = (props) => {
    const router = useRouter();
    const { id } = router.query
    const { movie } = props;

    const deleteMovie = (id) => {
        deleteMovieById(id).then((res) => {
            router.push('/');
        }).catch((err) => err)
    }
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <h1>{movie.id}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>{movie.genre}</p>
                <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                    <button className="btn btn-success btn-lg mr-1" role="button">Edit</button>
                </Link>
                <button onClick={() => deleteMovie(movie.id)} className="btn btn-danger btn-lg pull-right" href="#" role="button">Delete</button>
            </div>
            <p className="long-desc">{movie.longDesc}</p>
            <style jsx>{`
                .long-desc{
                    font-size:16px
                }
            `}</style>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => {
    const movie = await getMovieById(query.id);

    return { movie }
}

export default Movie;