import { useState } from "react";
import styled from "styled-components";
import Preview from "./Preview";
import getText from "../data/getText";
import {
  headingColor,
  lightSecondaryColor,
  lightSecondaryColor1,
  primaryColor,
  secondaryColor,
} from "../constants/color";

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

const TypingCard = () => {
  const [state, setState] = useState(initialState);
  const [countDown, setCountDown] = useState(60);

  return (
    <CardContainer>
      <div className="inner">
        <CountDown isStated={state.started} countDown={countDown}>
          <h2>{countDown}s</h2>
        </CountDown>
        <Preview text={state.text} userInput={state.userInput} />
        <TextArea />
      </div>
    </CardContainer>
  );
};

export default TypingCard;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: #fff;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 60vw;
  }

  .inner {
    padding: 30px;
    position: relative;
  }
`;

const CountDown = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isStated, countDown }) =>
    isStated && countDown != 0 ? primaryColor : lightSecondaryColor1};
  color: ${headingColor};
  font-size: 0.8rem;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: all 0.5s ease-in-out;
  transform: ${({ isStated, countDown }) =>
    isStated && countDown != 0 ? "scale(1.1)" : "scale(1)"};

  h2 {
    opacity: ${({ isStated, countDown }) =>
      isStated && countDown != 0 ? 1 : 0.5};
    z-index: 10;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10vh;
  border-radius: 15px;
  margin-top: 2rem;
  border: none;
  outline: none;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  opacity: 0.7;
  font-size: 1rem;
  padding: 10px 1rem;
  resize: none;
  line-height: 1.5rem;

  scrollbar-face-color: #ff8c00;

  :focus {
    background-color: ${lightSecondaryColor1};
    box-shadow: 0 0 10px 1px rgba(154, 129, 225, 0.8);
  }
`;
