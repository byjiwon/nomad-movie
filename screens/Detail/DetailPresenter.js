import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../../constants/Color";
import Layout from "../../constants/Layout";
import MoviePoster from "../../components/MoviePoster";
import makePhotoUrls from "../../utils/makePhotoUrls";
import { LinearGradient } from "expo-linear-gradient";
import MovieRating from "../../components/MovieRating";
import Loader from "../../components/Loader";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const Header = styled.View`
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: 30px;
  height: ${Layout.height / 3};
`;

const Column = styled.View`
  margin-left: 30px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

const MainContent = styled.View`
  padding-horizontal: 20px;
  margin-top: 25px;
`;

const ContentTitle = styled.Text`
  color: ${TINT_COLOR};
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContentValue = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
  width: 100%;
`;

const DataContainer = styled.View`
  margin-bottom: 10px;
`;

const Genres = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-top: 10px;
  width: 80%;
`;

const DetailPresenter = ({
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  loading,
  status,
  date,
  isMovie,
  genres
}) => (
  <Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrls(backgroundPhoto) }} />
      <LinearGradient
        colors={["transparent", "black"]}
        start={[0, 0]}
        end={[0, 0.7]}
      >
        <Content>
          <MoviePoster path={posterPhoto} />
          <Column>
            <Title>{title}</Title>
            <MovieRating inSlide={true} votes={voteAvg} />
            {genres ? (
              <Genres>
                {genres.map((genre, index) =>
                  index === genres.length - 1 ? genre.name : `${genre.name} /`
                )}
              </Genres>
            ) : null}
          </Column>
        </Content>
      </LinearGradient>
    </Header>
    <MainContent>
      {overview ? (
        <DataContainer>
          <ContentTitle>Overview</ContentTitle>
          <ContentValue>{overview}</ContentValue>
        </DataContainer>
      ) : null}
      {status ? (
        <DataContainer>
          <ContentTitle>Status</ContentTitle>
          <ContentValue>{status}</ContentValue>
        </DataContainer>
      ) : null}
      {date ? (
        <DataContainer>
          <ContentTitle>
            {isMovie ? "Realease Date" : "First Episode"}
          </ContentTitle>
          <ContentValue>{date}</ContentValue>
        </DataContainer>
      ) : null}
      {loading ? <Loader /> : null}
    </MainContent>
  </Container>
);

DetailPresenter.propTypes = {
  id: propTypes.number.isRequired,
  posterPhoto: propTypes.string.isRequired,
  backgroundPhoto: propTypes.string,
  title: propTypes.string.isRequired,
  voteAvg: propTypes.number,
  overview: propTypes.string,
  loading: propTypes.bool.isRequired,
  isMovie: propTypes.bool.isRequired,
  status: propTypes.string,
  date: propTypes.string,
  genres: propTypes.array
};

export default DetailPresenter;
