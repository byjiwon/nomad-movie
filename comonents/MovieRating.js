import React from "react";
import styled from "styled-components";
import proptypes from "prop-types";
import { TINT_COLOR } from "../constants/Color";

const Vote = styled.Text`
  color: ${TINT_COLOR};
  font-size: 10px;
  font-weight: 600;
`;

const MovieRating = ({ votes }) => <Vote>⭐️ {`${votes} / 10`}</Vote>;

MovieRating.proptypes = {
  votes: proptypes.number.isRequired
};

export default MovieRating;
