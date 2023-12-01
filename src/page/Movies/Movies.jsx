import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByKeyword } from '../../api/Api';
import MoviesList from '../../components/MoviesList/MoviesList';
import s from './Movies.module.css';
import PropTypes from 'prop-types';

export default function Movies() {
  const [inputChange, setInputChange] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const productName = (searchParams.get('query') ?? '').trim();

  useEffect(() => {
    setInputChange(productName);

    if (productName === '') return;
    const fetchData = async () => {
      try {
        const data = await searchMoviesByKeyword(searchParams.get('query'));
        setSearchMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productName, searchParams]);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputChange.trim() !== '') {
      setSearchParams({ query: inputChange.trim() });
    }

    e.target.reset();
  }

  return (
    <section className={s.moviesSection}>
      <form className={s.moviesForm} onSubmit={handleSubmit}>
        <label className={s.moviesLabel}>
          Input a search query &#8595;{' '}
          <input
            className={s.moviesInput}
            value={inputChange}
            onChange={e => {
              setInputChange(e.target.value);
            }}
          />
        </label>
        <button className={s.moviesButton} type="submit">
          Search
        </button>
      </form>
      <MoviesList searchMovies={searchMovies} />
    </section>
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
