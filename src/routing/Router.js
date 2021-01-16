import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import TVShowDetails from "../components/TVShowDetails";
import { routes } from "../routes";
import FavouriteMovies from "../views/FavouriteMovies";
import Home from "../views/Home";
import PopularMovies from "../views/PopularMovies";
// import PopularTVShows from "../views/PopularTVShows";
import TopRatedMovies from "../views/TopRatedMovies";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.popularMovies} component={PopularMovies} />
      <Route path={routes.topRatedMovies} component={TopRatedMovies} />
      <Route path={routes.favouriteMovies} component={FavouriteMovies} />
      <Route path="/movie/:name" component={MovieDetails} />
      {/* <Route path={routes.TVShows} component={PopularTVShows} /> */}
      <Route path="/tv/:name" component={TVShowDetails} />
    </Switch>
  );
};

export default Router;
