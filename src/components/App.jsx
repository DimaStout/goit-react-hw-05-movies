import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../page/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../page/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews')); // Доданий імпорт

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
          <Route path="/" element={<HomePage />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
