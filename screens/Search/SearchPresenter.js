import React from "react";
import proptypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Color";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const Input = styled.TextInput``;

const SearchPresenter = ({
  loading,
  tvResults,
  movieResults,
  searchTerm,
  handleSearchUpdate
}) => (
  <Container>
    <Input value={searchTerm} />
  </Container>
);

SearchPresenter.proptypes = {
  loading: proptypes.bool.isRequired,
  tvResults: proptypes.array,
  movieResults: proptypes.array,
  searchTerm: proptypes.string,
  handleSearchUpdate: proptypes.func.isRequired
};

export default SearchPresenter;
