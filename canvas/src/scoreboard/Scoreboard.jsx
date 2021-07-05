import React, { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: inline-block;
  width: 20%;
  height: 50vh;
  border: 1px solid black;
`;
const SCORE = styled.li`
  border: 1px solid black;
`;
const ROUND = styled.li`
  border: 1px solid black;
`;
function Scoreboard() {
  const [users, setUsers] = useState();
  const [round, setRound] = useState(1);
  return (
    <DIV>
      {/* <SCORE>{users}</SCORE> */}
      {/* <ROUND>{round}</ROUND> */}
    </DIV>
  );
}

export default Scoreboard;
