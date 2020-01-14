import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrls from "../utils/makePhotoUrls";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.5;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 30px;
  justify-content: space-between;
`;

const MovieSlide = ({
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrls(backgroundPhoto) }} />
    <Content>
      <MoviePoster path={posterPhoto} />
    </Content>
  </Container>
);

MovieSlide.propTypes = {
  id: propTypes.number.isRequired,
  posterPhoto: propTypes.string.isRequired,
  backgroundPhoto: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  voteAvg: propTypes.number.isRequired,
  overview: propTypes.string.isRequired
};

export default MovieSlide;
