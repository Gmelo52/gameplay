import { theme } from './../../global/styles/theme';
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background}
`;

export const Illustration = styled.Image`
  width: 100%;
  height: 360px;
`; 

export const Content = styled.View`
  margin-top: -40px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
`;