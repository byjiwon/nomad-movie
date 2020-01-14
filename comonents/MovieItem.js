import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import MovieRating from "./MovieRating";
import MoviePoster from "./MoviePoster";

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  margin-vertical: 5px;
`;

const MovieItem = ({ id, posterPhoto, title, voteAvg }) => (
  <Container>
    <MoviePoster path={posterPhoto} />
    <Title>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
    <MovieRating votes={voteAvg} />
  </Container>
);

MovieItem.propTypes = {
  id: propTypes.number.isRequired,
  posterPhoto: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  voteAvg: propTypes.number.isRequired
};

export default MovieItem;
