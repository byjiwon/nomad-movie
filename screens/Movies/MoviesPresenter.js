import React from "react";
import { Text } from "react-native";
import propTypes from "prop-types";
import Loader from "../../comonents/Loader";
import styled from "styled-components";
import MovieSlider from "../../comonents/MovieSlider";
import { BG_COLOR } from "../../constants/Color";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <MovieSlider movies={nowPlaying} />
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: propTypes.bool.isRequired,
  upcoming: propTypes.array,
  popular: propTypes.array,
  nowPlaying: propTypes.array
};

export default MoviesPresenter;
