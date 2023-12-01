import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api/Api';
import { HomeList } from '../../components/HomeList/HomeList';
import s from './Home.module.css';
import PropTypes from 'prop-types';

export default function Home() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrendingMovies();
        setTrendings(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.trendingDiv}>
      <h1 className={s.treandingHeading}>Popular today</h1>
      <ul className={s.trendingUl}>
        {trendings.length > 0 && <HomeList trendings={trendings} />}
      </ul>
    </div>
  );
}

HomeList.propTypes = {
  trendings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
