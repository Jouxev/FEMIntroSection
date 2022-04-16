import styled from "styled-components";
import { HeroPage } from "./Pages";

const Container = styled.main`
  width: 100%;
`;
function App() {
  return (
    <Container>
      <HeroPage />{" "}
    </Container>
  );
}

export default App;
