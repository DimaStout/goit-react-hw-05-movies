import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import * as API from '../../api/API';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast' 
'cast' */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' )
);

const MovieDetailsPage = () => {
  const { slug } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const [movieData, setMovieData] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const {
    poster_path,

    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieData;

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    setStatus('pending');
    API.fetchMovieDetails(movieId)
      .then(setMovieData, setStatus('resolved'))
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <>
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
        <>
          <button
            type="button"
            onClick={() => {
              navigate(location?.state?.from?.location ?? '/');
            }}
            className={s.goBackBtn}
          >
            {location?.state?.from?.label ?? 'Go back'}
          </button>
          <div className={s.movieContainer}>
            <img
              className={s.poster}
              src={
                poster_path && `https://image.tmdb.org/t/p/w342${poster_path}`
              }
              alt="poster"
            />

            <div className={s.infoContainer}>
              <h1>
                {title} ({new Date(release_date).getFullYear()})
              </h1>
              <hr />
              <p>User score: {vote_average}</p>

              <h2>Overview</h2>

              <p>{overview}</p>

              <h3>Genres</h3>
              <ul className={s.genresList}>
                {genres &&
                  genres.map(({ id, name }) => (
                    <li key={id} className={s.genreItem}>
                      {name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <hr />
          <p>Additional information</p>
          <Link
            to={`./cast`}
            state={{ from: location?.state?.from ?? '/' }}
            className={s.castLink}
          >
            Cast
          </Link>
          <Link
            to={`./reviews`}
            state={{ from: location?.state?.from ?? '/' }}
            className={s.reviewsLink}
          >
            Reviews
          </Link>
          <hr />

          <Suspense
            fallback={
              <Circles
                type="Circles"
                color="#2196f3"
                height={70}
                width={70}
                timeout={2000}
              />
            }
          >
            <Routes>
              <Route path="cast/*" element={<Cast movieId={movieId} />}></Route>
              <Route
                path="reviews/*"
                element={<Reviews movieId={movieId} />}
              ></Route>
            </Routes>
          </Suspense>
        </>
      )}

      {status === 'rejected' && <h1>{error.message}</h1>}
    </>
  );
};

export default MovieDetailsPage;
