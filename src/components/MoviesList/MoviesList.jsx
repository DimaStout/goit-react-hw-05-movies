import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';
import PropTypes from 'prop-types';

const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

export default function MoviesList({ searchMovies }) {
  const location = useLocation();

  if ((!searchMovies || searchMovies.length === 0) && location.search) {
    return <p>There are no movies available.</p>;
  }

  return (
    <ul className={s.movieList}>
      {searchMovies.map(movie => (
        <li key={movie.id} className={s.movieItem}>
          <Link
            className={s.movieLink}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `${defaultImg}`
              }
              alt={movie.title}
              height="446px"
              className={s.movieImage}
            />
            <p className={s.movieTitle}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  searchMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
