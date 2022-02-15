import './styles'
import DiscordImg from '../../assets/discord.png'
import { Container, Icon, IconWrapper, Title } from './styles'
import {TouchableOpacityProps} from 'react-native';

type Props = TouchableOpacityProps & { //Component recebe props de Touchable opactity alem das proprias props
  title: string;
}

export default function ButtonIcon({ title, ...rest } : Props) { //(...rest) atribi o resto dos atributos na declaração do comp
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={DiscordImg}/>
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  )
}