import { ReactComponent as Databiz } from "../Assets/client-databiz.svg";
import { ReactComponent as Audiophile } from "../Assets/client-audiophile.svg";
import { ReactComponent as Meet } from "../Assets/client-meet.svg";
import { ReactComponent as Maker } from "../Assets/client-maker.svg";
import ImageHeroDesktop from "../Assets/image-hero-desktop.png";
import ImageHeromobile from "../Assets/image-hero-mobile.png";

import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 20px 0px;
  padding: 10px 40px;
  ${mobile({
    flexDirection: "column-reverse",
    margin: "0",
    width: "100%",
    padding: "20px 0px 0px 0px",
  })}
`;
const Right = styled.div`
  display: flex;
  width: 90%;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 40px;
  ${mobile({
    width: "100%",
    paddingTop: "20px",
    alignItems: "center",
  })}
`;
const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  margin: 40px 0px 40px 0px;
  ${mobile({
    display: "none",
  })}
`;
const TitleMobile = styled.h1`
  display: none;
  ${mobile({
    textAlign: "center",
    display: "block",
    fontSize: "36px",
  })}
`;

const Desc = styled.p`
  color: var(--MediumGray);
  ${mobile({
    fontSize: "14px",
    textAlign: "center",
  })}
`;
const Button = styled.button`
  padding: 10px 25px;
  background: var(--AlmostBlack);
  border: none;
  font-weight: 700;
  border-radius: 10px;
  margin: 20px 0px;
  color: var(--AlmostWhite);
  cursor: pointer;
  &:hover {
    color: var(--AlmostBlack);
    background: transparent;
    border: 2px solid var(--AlmostBlack);
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  & > svg {
    margin-right: 30px;
  }
  ${mobile({
    marginTop: "40px",
    "& > svg": {
      transform: "scale(0.9)",
      marginRight: "5px",
    },
  })}
`;

const Left = styled.div`
  flex: 1;
  text-align: right;
  ${mobile({
    textAlign: "left",
  })}
`;
const ImageDesktop = styled.img`
  height: 500px;
  ${mobile({
    display: "none",
  })}
`;
const ImageMobile = styled.img`
  width: 100%;
  ${mobile({
    display: "block",
  })}
`;
export const HeroSection = () => {
  return (
    <Container>
      <Right>
        <Title>
          {" "}
          Make <br /> remote work{" "}
        </Title>
        <TitleMobile> Make remote work </TitleMobile>
        <Desc>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </Desc>
        <Button>Learn more </Button>
        <IconsContainer>
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </IconsContainer>
      </Right>
      <Left>
        <ImageDesktop src={ImageHeromobile} alt="hero" />{" "}
        <ImageMobile src={ImageHeroDesktop} alt="hero" />{" "}
      </Left>
    </Container>
  );
};
