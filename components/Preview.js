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
  height: auto;
  width: 100%;
  background-color: ${lightSecondaryColor};
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
