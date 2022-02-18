import { theme } from '../../global/styles/theme';
import styled from 'styled-components/native';

export const TextContainer = styled.TextInput`
  width: 100%;
  height: 95px;
  background-color: ${theme.colors.secondary40};
  color: ${theme.colors.heading};
  border-radius: 8px;
  font-family: ${theme.fonts.text400};
  font-size: 13px;
  margin-right: 4px;
  text-align: center;
`;