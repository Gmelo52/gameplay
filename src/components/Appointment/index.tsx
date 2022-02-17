import "./styles";
import React from "react";
import { Btn, Category, Container, Content, Header, PlayersView, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import GuildIcon from "../GuildIcon";
import { categories } from "../../Utils/categories";
import PlayerSvg from '../../assets/player.svg'
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  owner: true;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  data: AppointmentProps;
};

export default function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const {owner} = data.guild;
  const {primary, on} = theme.colors;
  return (
    <Btn>
      <Container>
        <GuildIcon/>
        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>
          <PlayersView>
            <PlayerSvg fill={ owner ? primary : on}/>
          </PlayersView>
        </Content>
      </Container>
    </Btn>
  );
}
