import { TouchableOpacityProps } from 'react-native';
import './styles';
import { Container } from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';

export default function ButtonAdd({...rest}:TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </Container>
  )
}