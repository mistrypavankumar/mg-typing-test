import { Component } from "react";
import styled from "styled-components";
import Preview from "./Preview";
import getText from "../data/getText";
import {
  headingColor,
  lightSecondaryColor1,
  primaryColor,
  secondaryColor,
} from "../constants/color";
import Speed from "./Speed";

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
  countDown: 60,
};

class TypingCard extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
    clearInterval(this.interval);
  };

  onUserInputChange = (e) => {
    const value = e.target.value;
    this.setTimer();
    this.onFinished(value);
    this.setState({
      userInput: value,
      symbols: this.countCorrectSymbols(value),
    });
  };

  onFinished = (userInput) => {
    if (
      userInput === this.state.text ||
      userInput.length === this.state.text.length ||
      this.state.countDown === 0
    ) {
      clearInterval(this.interval);
      this.setState({ finished: true });
    }
  };

  countCorrectSymbols = (userInput) => {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((data, i) => data === text[i]).length;
  };

  setTimer = () => {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          return { sec: prevProps.sec + 1, countDown: prevProps.countDown - 1 };
        });
      }, 1000);
    }
  };

  render() {
    if (this.state.countDown === 0) {
      clearInterval(this.interval);
    }
    return (
      <CardContainer>
        <div className="inner">
          <CountDown
            isStated={this.state.started}
            countDown={this.state.countDown}
          >
            <h2>{this.state.countDown}s</h2>
          </CountDown>
          <Preview text={this.state.text} userInput={this.state.userInput} />
          <TextArea
            value={this.state.userInput}
            onChange={this.onUserInputChange}
            placeholder="Start typing....."
            readOnly={this.state.finished}
          />

          <Content>
            <Speed
              countDown={this.state.countDown}
              typingCardCallback={(speed) => this.props.homepageCallback(speed)}
              sec={this.state.sec}
              symbols={this.state.symbols}
            />

            <Button onClick={this.onRestart}> Restart </Button>
          </Content>
        </div>
      </CardContainer>
    );
  }
}

export default TypingCard;

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 15px 2px hsl(258, 100%, 40%);

  @media (min-width: 986px) {
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
  right: 10px;
  top: 10px;
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
  font-size: 1rem;
  padding: 10px 1rem;
  resize: none;
  line-height: 1.5rem;

  scrollbar-face-color: #ff8c00;

  :focus {
    opacity: 0.9;
    background-color: ${secondaryColor};
    box-shadow: 0 0 10px 1px rgba(154, 129, 225, 0.8);
    color: #ffffff;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  background-color: ${secondaryColor};
  color: #ffff;
  font-size: 1rem;
  font-weight: 600;

  transition: opacity 0.5s, background-color 0.5s, transform 0.5s linear;
  box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.4);

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: ${primaryColor};
  }
`;
