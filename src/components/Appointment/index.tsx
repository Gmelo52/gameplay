import "./styles";
import React from "react";
import {
  Btn,
  Category,
  Container,
  Content,
  DateInfo,
  DateText,
  Footer,
  Header,
  PlayersView,
  PlayerText,
  PlayerTextOwner,
  Title,
} from "./styles";
import { TouchableOpacityProps } from "react-native";
import GuildIcon from "../GuildIcon";
import { categories } from "../../Utils/categories";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
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
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;
  return (
    <Btn {...rest}>
      <Container>
        <GuildIcon />
        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>
          <Footer>
            <DateInfo>
              <CalendarSvg />
              <DateText>{data.date}</DateText>
            </DateInfo>

            <PlayersView>
              <PlayerSvg fill={owner ? primary : on} />
              {owner ? (
                <PlayerTextOwner>Anfitrião</PlayerTextOwner>
              ) : (
                <PlayerText>Visitante</PlayerText>
              )}
            </PlayersView>
          </Footer>
        </Content>
      </Container>
    </Btn>
  );
}
