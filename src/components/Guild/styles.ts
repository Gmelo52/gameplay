import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex:1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Content = styled.View`
  flex:1;
  justify-content: center;
`;

export const ViewText = styled.View`

`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
  margin-bottom: 11px;
`;

export const Type = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
  margin-bottom: 24px;
`;