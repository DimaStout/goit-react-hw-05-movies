import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/Api';
import s from './Cast.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCredits(id);
        if (Array.isArray(response)) {
          setCast(response);
        } else {
          setCast([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [id]);

  return (
    <>
      {cast.length !== 0 && (
        <div className={s.castContainer}>
          <h2 className={s.castTitle}>Movie Cast</h2>
          <ul className={s.castList}>
            {cast.map(actor => (
              <li key={actor.id} className={s.castItem}>
                <img
                  width="200px"
                  height="300px"
                  className={s.castImage}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${defaultImg}`
                  }
                  alt={actor.original_name}
                />
                <p className={s.castName}>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && (
        <div className={s.noCastMessage}>
          We haven't finalized the cast for this movie yet.
        </div>
      )}
    </>
  );
};

export default Cast;
