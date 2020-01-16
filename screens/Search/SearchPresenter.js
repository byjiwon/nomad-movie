import React from "react";
import proptypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, GREY_COLOR } from "../../constants/Color";
import Layout from "../../constants/Layout";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  width: ${Layout.width / 1.6};
  padding: 5px 10px;
  border-radius: 15px;
`;

const SearchResults = styled.ScrollView`
  margin-top: 20px;
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const SearchPresenter = ({
  loading,
  tvResults,
  movieResults,
  searchTerm,
  handleSearchUpdate,
  onSubmitEditing
}) => (
  <Container>
    <InputContainer>
      <Input
        value={searchTerm}
        autoFocus
        onChangeText={handleSearchUpdate}
        returnKeyType="search"
        placeholder="Search Movies and TV"
        placeholderTextColor={GREY_COLOR}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>
    <SearchResults>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults ? (
            movieResults.length > 0 ? (
              <Section title="Movie Results">
                {movieResults
                  .filter(movie => movie.poster_path !== null)
                  .map(movie => (
                    <MovieItem
                      key={movie.id}
                      id={movie.id}
                      posterPhoto={movie.poster_path}
                      title={movie.title}
                      voteAvg={movie.vote_average}
                      overview={movie.overview}
                    />
                  ))}
              </Section>
            ) : null
          ) : null}
          {tvResults ? (
            tvResults.length > 0 ? (
              <Section title="TV Results">
                {tvResults
                  .filter(tv => tv.poster_path !== null)
                  .map(tv => (
                    <MovieItem
                      isMovie={false}
                      key={tv.id}
                      id={tv.id}
                      posterPhoto={tv.poster_path}
                      title={tv.name}
                      voteAvg={tv.vote_average}
                    />
                  ))}
              </Section>
            ) : null
          ) : null}
        </>
      )}
    </SearchResults>
  </Container>
);

SearchPresenter.proptypes = {
  loading: proptypes.bool.isRequired,
  tvResults: proptypes.array,
  movieResults: proptypes.array,
  searchTerm: proptypes.string,
  handleSearchUpdate: proptypes.func.isRequired,
  onSubmitEditing: proptypes.func.isRequired
};

export default SearchPresenter;
