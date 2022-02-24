import { FlatList } from "react-native";
import Guild from "../../components/Guild";
import ListDivider from "../../components/ListDivider";
import { Container } from "./styles";


export default function Guilds() {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    }
  ]
  return (
    <Container>
      <FlatList
      style={{width:'100%',}}
      data={guilds}
      keyExtractor={item => item.id}
      renderItem={({item})=>(
        <Guild data={item}/>
      )}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={()=><ListDivider/>}
      />
    </Container>
  )
}