import { Children, ReactNode } from 'react';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

type Props = { //Definindo que o elemento filho do component é do tipo ReactNode
  children: ReactNode,
}

export default function Background({children} : Props) {
  return (
  <LinearGradient colors={[theme.colors.secondary80, theme.colors.secondary100]} style={{flex:1}}>
    {children}
  </LinearGradient>
  )
}