import { TextInputProps } from "react-native";
import { TextContainer } from "./styles";

export default function SmallInput({ ...rest }: TextInputProps) {
  return <TextContainer 
  {...rest}
  keyboardType="numeric"
  />;
}
