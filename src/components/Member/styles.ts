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
  flex-direction: row;
  align-items: center;
`;

export const BulletOn = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.on};
  margin-right: 9px;
`;
export const BulletOff = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.primary};
  margin-right: 9px;
`;

export const StatusText = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;