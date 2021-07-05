import React from "react";
import Canvas from "./canvas/Canvas";
import Chatsection from "./chatsection/Chatsection";
import GlobalStyles from "./GlobalStyles";
import Header from "./header/Header";
import Scoreboard from "./scoreboard/Scoreboard";
import Usersection from "./usersection/Usersection";
import styled from "styled-components";
import Wrap from "./canvas/Wrap";

const OUTERWRAP = styled.div`
  border: 1px solid black;
  align-items: center;
`;
const INNERWRAP = styled.div`
  border: 1px solid black;
`;
function App() {
  return (
    <OUTERWRAP>
      <GlobalStyles />
      <Header />
      <INNERWRAP>
        <Scoreboard />
        <Canvas />
        {/* <Wrap /> */}
        <Chatsection />
      </INNERWRAP>
      <Usersection />
    </OUTERWRAP>
  );
}

export default App;
