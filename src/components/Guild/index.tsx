import { TouchableOpacityProps } from "react-native";
import GuildIcon from "../GuildIcon";
import { Container, Content, Title, Type, ViewText } from "./styles";
import {Feather} from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export default function Guild({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <Content>
        <ViewText>
          <Title>{data.name}</Title>
          <Type>{data.owner ? "Administrador" : " Convidado"}</Type>
        </ViewText>
      </Content>
      <Feather
        name="chevron-right"
        size={24}
        color={theme.colors.heading}
        />
    </Container>
  );
}
