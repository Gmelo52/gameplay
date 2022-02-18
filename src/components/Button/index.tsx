import './styles'
import DiscordImg from '../../assets/discord.png'
import { Container, Title } from './styles'
import {TouchableOpacityProps} from 'react-native';

type Props = TouchableOpacityProps & { //Component recebe props de Touchable opactity alem das proprias props
  title: string;
}

export default function Button({ title, ...rest } : Props) { //(...rest) atribi o resto dos atributos na declaração do comp
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}