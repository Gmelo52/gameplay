import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
`;

export const Content = styled.View`
  width: 100px;
  height: 116px;
  background-color: ${theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const BoxChecked = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${theme.colors.primary};
  align-self: flex-end;
  margin-right: 7px;
  border-radius: 3px;
`;

export const BoxCheck = styled.View`
  width: 12px;
  height: 12px;
  background-color: ${theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-color: ${theme.colors.secondary50};
  border-width: 2px;
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
  font-size: 15px;
`;
