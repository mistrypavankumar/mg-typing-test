import styled from "styled-components";
import Image from "next/image";
import logo from "../public/images/mg-typing-test-logo.png";
import bgImg from "../public/images/typing-girl.svg";
import {
  headingAnimationColor,
  headingColor,
  primaryColor,
  secondaryColor,
} from "../constants/color";
import TypingCard from "./TypingCard";

const HomePage = () => {
  return (
    <Div>
      <MainDiv>
        <Logo>
          <Image src={logo} alt="Mg-Typing-Test" width="60" height="60" />
          <h1 data-text="MG-Typing Test">MG-Typing Test</h1>
        </Logo>
        <MainContainer>
          <LeftContainer>
            <TypingCard />
          </LeftContainer>
          <RightContainer>
            <Image src={bgImg} alt="typing-gril" width="" height="" />
            <h3>
              Developer:
              <span> Mistry Pavan kumar</span>
            </h3>
          </RightContainer>
        </MainContainer>
      </MainDiv>
    </Div>
  );
};

export default HomePage;

const Div = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primaryColor};
  border-radius: 0.8rem;
  box-shadow: 0 0 10px 3px rgba(33, 0, 87, 0.5);
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;

  h1 {
    margin-left: 1rem;
    color: ${headingColor};
    font-size: 1.5rem;
    position: relative;
    display: inline-block;
    white-space: nowrap;

    ::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      border-right: 3px solid ${headingAnimationColor};
      color: ${headingAnimationColor};
      overflow: hidden;

      animation: animate 6s linear infinite alternate;
      --webkit-animation: animate 6s linear infinite alternate;

      @keyframes animate {
        0% {
          width: 0;
        }
        50% {
          width: 100%;
        }
        100% {
          width: 0;
        }
      }
    }

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const MainContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 0 20px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LeftContainer = styled.div``;
const RightContainer = styled.div`
  position: relative;
  width: 100%;

  h3 {
    width: 300px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #ffffff;

    span {
      color: ${headingAnimationColor};
    }
  }
`;
