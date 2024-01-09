import Profile from "@/components/Profile";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container>
        <h1>Chat</h1>
        <Profile />
      </Container>
    </main>
  );
}
