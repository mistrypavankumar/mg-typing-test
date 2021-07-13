const Speed = (props) => {
  if (props.symbols !== 0 && props.sec !== 0) {
    const wpm = props.symbols / 5 / (props.sec / 60);

    return <div>{Math.floor(Math.random(wpm) * 100)} wpm</div>;
  }

  return null;
};

export default Speed;
