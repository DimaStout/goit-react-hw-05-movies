import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { fetchMovieCredits } from '../../api/Api';
import s from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      setStatus('pending');
      fetchMovieCredits(movieId)
        .then(response => setCast(response.cast || []))
        .then(() => setStatus('resolved'))
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
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
      {status === 'resolved' && Array.isArray(cast) && cast.length > 0 ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                className={s.actorPhoto}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w342${profile_path}`
                    : 'URL_TO_YOUR_DEFAULT_IMAGE'
                }
                alt="actor"
              />
              <p> {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : status === 'resolved' && cast && cast.length === 0 ? (
        <p>There is no cast for this movie</p>
      ) : null}
      {status === 'rejected' && <h1>{error && error.message} </h1>}
    </>
  );
};

export default Cast;
