import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const Container = styled.View`
  margin-top: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 12px;
`;

const ScrollView = styled.ScrollView`
  padding-left: 20px;
`;

const Section = ({ title, children, horizontal = true }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal={horizontal}>{children}</ScrollView>
  </Container>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  horizontal: propTypes.bool
};

export default Section;
