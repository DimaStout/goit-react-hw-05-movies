import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./../page/Home/Home'));
const Movies = lazy(() => import('./../page/Movies/Movies'));
const MoviesItem = lazy(() => import('./../page/MoviesItem/MoviesItem'));
const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Similar = lazy(() => import('./Similar/Similar'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesItem />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="similar" element={<Similar />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
