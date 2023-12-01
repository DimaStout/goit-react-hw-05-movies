import React, { useState, useEffect, useRef, Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../api/Api';
import { MovieDetalis } from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
import s from './MoviesItem.module.css';

const MoviesItem = () => {
  const location = useLocation();
  const backLinkHref = useRef(location?.state?.from ?? '/');
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <div className={s.movieWrapper}>
      <div className={s.movieOverlay}>
        <Link className={s.return} to={backLinkHref.current}>
          &#8592; Return
        </Link>
        <MovieDetalis movie={movie} />
        <div className={s.movieLinkContainer}>
          <NavLink className={s.movieLink} to={`cast`} state={{ backLinkHref }}>
            Cast
          </NavLink>

          <NavLink
            className={s.movieLink}
            to={`reviews`}
            state={{ backLinkHref }}
          >
            Reviews
          </NavLink>
          <NavLink
            className={s.movieLink}
            to={`similar`}
            state={{ backLinkHref }}
          >
            Similar
          </NavLink>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesItem;
