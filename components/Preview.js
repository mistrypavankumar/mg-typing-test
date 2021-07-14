import styled from "styled-components";
import { lightSecondaryColor, secondaryColor } from "../constants/color";

const Preview = (props) => {
  const text = props.text.split("");

  return (
    <MainDiv>
      {text.map((data, index) => {
        let color, bgColor;

        if (index < props.userInput.length) {
          bgColor =
            data === props.userInput[index] ? "transparent" : "hsl(0,100%,50%)";
          color = data === props.userInput[index] ? "hsl(158,100%,50%)" : null;
        }

        return (
          <span
            className="textSize"
            key={index}
            style={{ color: color, backgroundColor: bgColor }}
          >
            {data}
          </span>
        );
      })}
    </MainDiv>
  );
};

export default Preview;

const MainDiv = styled.div`
  padding: 1.2rem;
  height: auto;
  width: 100%;
  background-color: ${secondaryColor};
  border-radius: 15px;
  box-shadow: 0 0 10px 1px rgba(154, 129, 225, 0.8);
  color: #ffff;

  @media (min-width: 768px) {
    height: 40vh;
  }

  .textSize {
    font-size: 1.2rem;
  }
`;
