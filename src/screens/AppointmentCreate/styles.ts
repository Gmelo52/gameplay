import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Scroll = styled.ScrollView`

`;

export const Label = styled.Text`
  font-size:18px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`;

export const Form = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 32px;

`;

export const Btn = styled.TouchableOpacity`

`;

export const Select = styled.View`
  width: 100%;
  flex-direction: row;
  height: 68px;
  border-color: ${theme.colors.secondary50};
  border-width:1px;
  border-radius: 8px;
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
`;

export const ImgView = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const FieldChild = styled.View`

`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 18px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.highlight};
`;

export const LimitText = styled.Text`
  font-family:${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  margin-bottom: 46px;

`;