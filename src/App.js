import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from './routes';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

import './styles.css';
import 'modern-normalize/modern-normalize.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */
  ),
);
// const NotFoundPage = lazy(() => import('./views/NotFoundPage' /* webpackChunkName: "notFound-page" */));

const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />

          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
