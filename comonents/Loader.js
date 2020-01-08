import React from "react";
import { ActivityIndicator } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Color";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${BG_COLOR}
  flex:1;
  justify-content: center;
`;

export default Loader = () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR} />
  </Container>
);
