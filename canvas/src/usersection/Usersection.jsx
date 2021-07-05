import React, { useState } from "react";
import UserCard from "./userCard/UserCard";
import styled from "styled-components";

const DIV = styled.div`
  display: inline-block;
  width: 100%;
  height: 39vh;
  border: 1px solid black;
`;
function Usersection() {
  const [users, setUsers] = useState([1, 2, 3, 4, 5]);
  return (
    <DIV>
      <UserCard users={users} />
    </DIV>
  );
}

export default Usersection;
