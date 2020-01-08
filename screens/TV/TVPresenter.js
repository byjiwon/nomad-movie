import React from "react";
import { Text } from "react-native";
import propTypes from "prop-types";
import Loader from "../../comonents/Loader";

const TVPresenter = ({ loading }) => (loading ? <Loader /> : <Text>TV</Text>);

TVPresenter.propTypes = {
  loading: propTypes.bool.isRequired
};

export default TVPresenter;
