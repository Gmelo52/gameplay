import "./styles";
import { Container, Content, Illustration, SubTitle, Title } from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import ButtonIcon from "../../components/ButtonIcon";

export default function SignIn() {
  return (
    <>
      <Container>
        <Illustration source={IllustrationImg} resizeMode="stretch"/>
        <Content>
          <Title>Conecte-se {'\n'}e organize {'\n'} suas jogatinas</Title>
          <SubTitle> Crie grupos para seus games {'\n'}favoritos com seus amigos</SubTitle>
          <ButtonIcon title="Entrar com Discord" activeOpacity={.7}/>
        </Content>
      </Container>
    </>
  );
}
