import styled from "styled-components";
import { Navbar, HeroSection } from "../Components";

const Container = styled.div`
  width: 100%;
`;

export const HeroPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
    </Container>
  );
};
