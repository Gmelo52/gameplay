import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
`;

export const Content = styled.View`
  width: 100px;
  height: 116px;
  border-radius: 8px;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const BoxChecked = styled.View`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 10px;
  height: 10px;
  background-color: ${theme.colors.primary};
  border-radius: 3px;
`;

export const BoxCheck = styled.View`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 12px;
  height: 12px;
  background-color: ${theme.colors.secondary100};
  border-color: ${theme.colors.secondary50};
  border-width: 2px;
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 15px;
`;
