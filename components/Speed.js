import { useRef, useEffect } from "react";
import styled from "styled-components";
import { headingAnimationColor, primaryColor } from "../constants/color";

const Speed = (props) => {
  const elementRef = useRef(0);

  useEffect(() => {
    if (props.countDown === 0 || props.isFinished) {
      elementRef.current.click();
    }
  });

  if (props.symbols !== 0 && props.sec !== 0) {
    const wpm = props.symbols / 5 / (props.sec / 60);

    return (
      <Div isSpeed={wpm >= 50}>
        <h3
          ref={elementRef}
          onClick={() => props.typingCardCallback(Math.round(wpm))}
        >
          {Math.round(wpm)} wpm
        </h3>
      </Div>
    );
  }

  return (
    <Div>
      <h3>0 wpm</h3>
    </Div>
  );
};

export default Speed;

const Div = styled.div`
  color: ${({ isSpeed }) => (isSpeed ? headingAnimationColor : primaryColor)};
  h3 {
    line-height: 0.2rem;
  }
`;
