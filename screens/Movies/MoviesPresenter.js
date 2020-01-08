import React from "react";
import { Text } from "react-native";
import propTypes from "prop-types";
import Loader from "../../comonents/Loader";

const MoviesPresenter = ({ loading }) =>
  loading ? <Loader /> : <Text>Movie</Text>;

MoviesPresenter.propTypes = {
  loading: propTypes.bool.isRequired
};

export default MoviesPresenter;
