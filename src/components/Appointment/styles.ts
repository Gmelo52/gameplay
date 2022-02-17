import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';



export const Btn = styled.TouchableOpacity`

`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const DateText = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const Category = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
  margin-right: 24px;
`;

export const PlayersView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayerText = styled.Text`
  color: ${theme.colors.on};
  font-family: ${theme.fonts.text500};
  margin-left: 7px;
  margin-right: 24px;
`;

export const PlayerTextOwner = styled.Text`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.text500};
  margin-left: 7px;
  margin-right: 24px;
`;