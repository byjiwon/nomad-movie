import React from "react";
import styled from "styled-components";
import proptypes from "prop-types";
import { TINT_COLOR, GREY_COLOR } from "../constants/Color";

const Vote = styled.Text`
  color: ${props => (props.inSlide ? TINT_COLOR : GREY_COLOR)};
  font-size: ${props => (props.inSlide ? "10px" : "8px")}
  font-weight: 600;
`;

const MovieRating = ({ votes, inSlide = false }) => (
  <Vote inSlide={inSlide}>⭐️ {`${votes} / 10`}</Vote>
);

MovieRating.proptypes = {
  votes: proptypes.number.isRequired,
  inSlide: proptypes.bool.isRequired
};

export default MovieRating;
