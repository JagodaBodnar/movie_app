import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import SingleArticle from "../components/SingleArticle";
import { routes } from "../routes";
import Blog from "../views/Blog";
import FavouriteMovies from "../views/FavouriteMovies";
import Home from "../views/Home";
import PopularMovies from "../views/PopularMovies";
import TopRatedMovies from "../views/TopRatedMovies";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.popularMovies} component={PopularMovies} />
      <Route path={routes.topRatedMovies} component={TopRatedMovies} />
      <Route path={routes.favouriteMovies} component={FavouriteMovies} />
      <Route path="/movie/:name" component={MovieDetails} />
      <Route exact path={routes.blog} component={Blog} />
      <Route path="/blog/:name" component={SingleArticle} />
    </Switch>
  );
};

export default Router;
