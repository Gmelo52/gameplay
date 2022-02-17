import { BorderlessButton } from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'
import Background from '../../components/Background'
import Header from '../../components/Header'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { Banner, BannerContent, SubTitle, Title } from './styles'
import ListHeader from '../../components/ListHeader'
import { FlatList } from 'react-native'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'

export default function AppointmentDetails() {
  const members = [
    {
      id:'1',
      username: 'Guilherme',
      avatar_url: 'http://github.com/Gmelo52.png',
      status: 'online',
    },
    {
      id:'2',
      username: 'Guilherme',
      avatar_url: 'http://github.com/Gmelo52.png',
      status: 'offline',
    }
  ]
  return (
    <Background>
      <Header
      title='Detalhes'
      action={
        <BorderlessButton>
          <Fontisto
            name='share'
            size={24}
            color={theme.colors.primary}
          />
        </BorderlessButton>}
      />

      <Banner source={BannerImg}>
        <BannerContent>
        <Title>Lendários</Title>
        <SubTitle>É hoje que vamos chegar ao challenger sem perder uma partida da md10!</SubTitle>
        </BannerContent>
      </Banner>
      <ListHeader title='Jogadores' subtitle='Total 3'/>
      <FlatList
      style={{
        marginLeft:24,
        marginTop:24,

      }}
      data={members}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <Member data={item}/>
      )}
      ItemSeparatorComponent={()=><ListDivider/>}
      
      />
    </Background>
  )
}