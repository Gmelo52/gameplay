import Avatar from "../Avatar";
import { BulletView, Container, Content, StatusText, StatusView, Title } from "./styles";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export default function Member({ data }: Props) {
  const isOnline = data.status === "online";

  return (
    <Container>
      <Avatar urlImage={data.avatar_url} />
      <Content>
        <Title>{data.username}</Title>
        <StatusView>
          <BulletView></BulletView>
          <StatusText>{isOnline ? "Disponível" : "Ocupado"}</StatusText>
        </StatusView>
      </Content>
    </Container>
  );
}
