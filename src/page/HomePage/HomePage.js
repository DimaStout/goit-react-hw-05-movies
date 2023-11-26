import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import slugify from 'slugify';
import s from './HomePage.module.css';
import { fetchTrendingMovies } from 'api/Api';

const slug = string => slugify(string, { replacement: '_', lower: true });

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    fetchTrendingMovies()
      .then(response => {
        setMovies(response.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {status === 'pending' && (
        <Circles
          type="Circles"
          color="#2196f3"
          height={70}
          width={70}
          timeout={2000}
        />
      )}
      {status === 'resolved' && (
        <ul className={s.moviesList}>
          {movies.map(({ id, title, name }) => (
            <li key={id} className={s.listItem}>
              <Link
                to={`/movies/${slug(`${title} ${id}`)}`}
                state={{ from: { location, label: 'Go back to home page' } }}
              >
                {title ?? name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === 'rejected' && <h1>{error.message}</h1>}
    </div>
  );
};

export default HomePage;
