import React, { createRef, useEffect, useState } from "react";
import Canvas1 from "./Canvas1";
import styled from "styled-components";

const DIV = styled.div`
  display: inline-block;
  width: 60%;
  height: 50vh;
  border: 1px solid black;
`;

function Wrap() {
  const [size, setSize] = useState([]);
  const divRef = createRef();
  useEffect(() => {
    const { top, bottom, right, left } = divRef.current.getBoundingClientRect();
    setSize([right - left, bottom - top]);
  }, []);
  return (
    <DIV ref={divRef}>
      <Canvas1 width={size[0]} height={size[1]} />
    </DIV>
  );
}

export default Wrap;
