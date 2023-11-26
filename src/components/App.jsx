import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import Container from 'page/Container/Container';
import Navigation from 'page/Navigation/Navigation';
import NotFound from 'page/NotFound/NotFound';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../page/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import(
    '../page/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'details-page' */
  )
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <ThreeDots
            type="ThreeDots"
            color="#2196f3"
            height={70}
            width={70}
            timeout={2000}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:slug/*" element={<MovieDetailsPage />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
