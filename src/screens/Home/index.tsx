import { useState } from "react";
import { FlatList } from "react-native";
import Appointment from "../../components/Appointment";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Profile from "../../components/Profile";
import "./styles";
import { Container, Content, Header, TextGuild, ViewList } from "./styles";

export default function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10' 
    }
  ]

  function handlecategorySelect(categoryId: string) {
    // seta o estado contrario ao atual
    //se o ID que a função receber for o mesmo ele não seta nada, mas se for diferente ele seta o ID recebido
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
      <ViewList>
        <CategorySelect
          categorySelected={category}
          setCategory={handlecategorySelect}
        />
        <Content>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({item})=>(
            <Appointment data={item}/>
          )}
          />
        </Content>
      </ViewList>
    </Container>
  );
}
