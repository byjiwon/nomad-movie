import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrls from "../utils/makePhotoUrls";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";
import { TINT_COLOR, GREY_COLOR } from "../constants/Color";
import MovieRating from "./MovieRating";

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

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
`;

const VoteContainer = styled.View`
  margin: 10px 0px;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 5px;
  border-radius: 2.5px;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 12px;
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
      <Column>
        <Title>{title}</Title>
        {voteAvg ? (
          <VoteContainer>
            <MovieRating votes={voteAvg} inSlide={true} />
          </VoteContainer>
        ) : null}
        {overview ? (
          <Overview>
            {overview.length > 117
              ? `${overview.substring(0, 120)}...`
              : overview}
          </Overview>
        ) : null}
        <BtnContainer>
          <BtnText>More Details</BtnText>
        </BtnContainer>
      </Column>
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
