import "./styles";
import { Container, Content, Illustration, SubTitle, Title } from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import ButtonIcon from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  
  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <>
      <Container>
        <Illustration source={IllustrationImg} resizeMode="stretch"/>
        <Content>
          <Title>Conecte-se {'\n'}e organize {'\n'} suas jogatinas</Title>
          <SubTitle> Crie grupos para seus games {'\n'}favoritos com seus amigos</SubTitle>
          <ButtonIcon title="Entrar com Discord" activeOpacity={.7} onPress={handleSignIn}/>
        </Content>
      </Container>
    </>
  );
}
