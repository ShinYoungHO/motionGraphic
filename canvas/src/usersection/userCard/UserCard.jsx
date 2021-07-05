import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: inline-block;
  width: 25%;
  height: 19.5vh;
  border: 1px solid black;
`;

function UserCard({ users }) {
  return (
    <>
      {users.map((el) => (
        <DIV>{el}</DIV>
      ))}
    </>
  );
}

export default UserCard;
