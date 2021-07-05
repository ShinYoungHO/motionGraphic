import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  width: 100%;
  height: 9vh;
  border: 1px solid black;
`;

const SPAN = styled.span``;

function Header() {
  return (
    <DIV>
      <SPAN>HEADER</SPAN>
    </DIV>
  );
}

export default Header;
