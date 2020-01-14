import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import makePhotoUrls from "../utils/makePhotoUrls";

const Image = styled.Image`
  width: 110px;
  height: 160px;
  border-radius: 2.5px;
`;

const MoviePoster = ({ path }) => (
  <Image source={{ uri: makePhotoUrls(path) }} />
);

MoviePoster.propTypes = {
  path: propTypes.string
};

export default MoviePoster;
