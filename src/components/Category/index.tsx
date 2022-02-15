import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import "./styles";
import { BoxCheck, BoxChecked, Container, Content, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export default function Category({
  title,
  icon: Icon,
  checked = true,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <LinearGradient
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
        style={{width:104, height:120, justifyContent:'center', alignItems:'center', borderRadius:8, marginRight:8}}
      >
        <Content style={[{ opacity: checked ? 1 : 0.4 }]}>
          {checked ? 
          <BoxChecked/> 
          : 
          <BoxCheck/>}
          <Icon width={48} height={48}/>
          <Title>{title}</Title>
        </Content>
      </LinearGradient>
    </Container>
  );
}
