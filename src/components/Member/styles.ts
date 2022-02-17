import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

`;

export const Content = styled.View`

`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const StatusView = styled.View`

`;

export const StatusText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  font-size: 13px;
`;