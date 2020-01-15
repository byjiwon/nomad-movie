import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import MovieRating from "./MovieRating";
import MoviePoster from "./MoviePoster";
import { GREY_COLOR } from "../constants/Color";

const Container = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const Title = styled.Text`
  color: white;
  font-size: ${props => (!props.big ? "12px" : "14px")}
  margin-vertical: 5px;
  font-size: 12px;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 10px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 12px;
  margin-vertical: 10px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview
}) =>
  horizontal ? (
    <HContainer>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title big={true}>{title}</Title>
        <MovieRating votes={voteAvg} />
        {overview ? (
          <Overview>
            {overview.length > 147
              ? `${overview.substring(0, 150)}...`
              : overview}
          </Overview>
        ) : null}
      </Column>
    </HContainer>
  ) : (
    <Container>
      <MoviePoster path={posterPhoto} />
      <Title>
        {title.length > 15 ? `${title.substring(0, 12)}...` : title}
      </Title>
      <MovieRating votes={voteAvg} />
    </Container>
  );

MovieItem.propTypes = {
  id: propTypes.number.isRequired,
  posterPhoto: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  voteAvg: propTypes.number.isRequired,
  overview: propTypes.string
};

export default MovieItem;
