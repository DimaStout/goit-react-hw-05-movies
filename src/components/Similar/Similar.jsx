import { fetchTrendingMovies } from '../../api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import s from './Similar.module.css';

const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

const Similar = () => {
  const { id } = useParams();
  const [similar, setSimilar] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const similarMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        if (Array.isArray(response)) {
          setSimilar(response);
        } else {
          setSimilar([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    similarMovies();
  }, [id]);

  return (
    <>
      {similar.length !== 0 && (
        <div className={s.castContainer}>
          <h2 className={s.castTitle}>Similar Movies</h2>
          <ul className={s.castList}>
            {similar.map(movie => (
              <li key={movie.id} className={s.castItem}>
                <Link
                  className={s.movieLink}
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  <img
                    width="200px"
                    height="300px"
                    className={s.castImage}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : `${defaultImg}`
                    }
                    alt={movie.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {similar.length === 0 && (
        <div className={s.noCastMessage}>No similar movies found.</div>
      )}
    </>
  );
};

export default Similar;
