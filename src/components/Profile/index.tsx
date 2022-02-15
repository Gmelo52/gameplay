import Avatar from '../Avatar';
import './styles';
import { Container, Content, Greeting, Message, User, UserName } from './styles';

export default function Profile() {
  return (
    <Container>
      <Avatar urlImage='https://github.com/Gmelo52.png'/>
      <Content>
      <User>
        <Greeting>Olá,</Greeting>
        <UserName>Guilherme</UserName>
      </User>
      <Message>Hoje é dia de vitória!</Message>
      </Content>
    </Container>
  )
}