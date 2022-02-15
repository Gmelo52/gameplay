import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'
import './styles'
import { ImageAvatar } from './styles'


type Props = {
  urlImage: string;
}

export default function Avatar({urlImage} : Props) {
  return (
    <LinearGradient colors={[theme.colors.secondary50, theme.colors.secondary70]} style={{width:49, height: 49, borderRadius:8, alignItems: "center", justifyContent: "center", marginRight:22}}>
      <ImageAvatar source={{uri: urlImage}}/>
    </LinearGradient>
  )
}