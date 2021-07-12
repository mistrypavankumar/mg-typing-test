import styled from "styled-components";
import { lightSecondaryColor } from "../constants/color";

const Preview = (props) => {
  const text = props.text.split("");

  return (
    <MainDiv>
      {text.map((data, index) => {
        let color;

        if (index < props.userInput.length) {
          color =
            data === props.userInput[i]
              ? "hsl(158,100%,50%)"
              : "hsl(0,100%,50%)";
        }

        return (
          <span
            className="textSize"
            key={index}
            style={{ backgroundColor: color }}
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
  padding: 1rem;
  height: 40vh;
  background-color: ${lightSecondaryColor};
  border-radius: 15px;
  box-shadow: 0 0 10px 1px rgba(154, 129, 225, 0.8);
  color: #ffff;

  .textSize {
    font-size: 1.2rem;
  }
`;
