import { useState } from "react";
import { Platform } from "react-native";
import { Btn } from "../../components/Appointment/styles";
import { Feather } from "@expo/vector-icons";
import Background from "../../components/Background";
import CategorySelect from "../../components/CategorySelect";
import Header from "../../components/Header";
import {
  Column,
  Container,
  Divider,
  Field,
  FieldChild,
  Footer,
  Form,
  Label,
  LimitText,
  Scroll,
  Select,
  SelectBody,
} from "./styles";
import { theme } from "../../global/styles/theme";
import GuildIcon from "../../components/GuildIcon";
import SmallInput from "../../components/SmallInput";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

export default function AppointmentCreate() {
  const [category, setCategory] = useState("");

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding':'height'}>
      <Scroll showsVerticalScrollIndicator={false}>
        <Header title="Agendar Partida" />
        <Label style={{ marginLeft: 24, marginTop: 36, marginBottom: 18 }}>
          Categoria
        </Label>
        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />
        <Form>
          <Btn>
            <Select>
              {/*  <ImgView/> */}
              <GuildIcon />
              <SelectBody>
                <Label>Selecione um servidor</Label>
              </SelectBody>
              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </Select>
          </Btn>
          <Field>
            <FieldChild>
              <Label style={{ marginBottom: 12 }}>Dia e mês</Label>
              <Column>
                <SmallInput maxLength={2} />
                <Divider>/</Divider>
                <SmallInput maxLength={2} />
              </Column>
            </FieldChild>
            <FieldChild>
              <Label style={{ marginBottom: 12 }}>Hora e minuto</Label>
              <Column>
                <SmallInput maxLength={2} />
                <Divider>:</Divider>
                <SmallInput maxLength={2} />
              </Column>
            </FieldChild>
          </Field>
          <Field>
            <Label style={{ marginBottom: 12 }}>Descrição</Label>
            <LimitText>Max 100 caracteres</LimitText>
          </Field>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <Footer>
            <Button
              title="Agendar"
            />
          </Footer>
        </Form>
      </Scroll>
    </Container>
  );
}
