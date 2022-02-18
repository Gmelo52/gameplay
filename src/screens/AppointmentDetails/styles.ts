import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;
  margin-bottom: 30px;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
`;

export const Footer =styled.View`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;