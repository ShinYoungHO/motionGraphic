import React, { createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CANVAS = styled.canvas`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid black;
`;

function Canvas1({ width, height }) {
  const [answer, setAnswer] = useState("");
  const [isDrawer, setIsDrawer] = useState(true);
  const [isRightPos, setIsRightPos] = useState(true);
  let ctx;
  let dot = { drawable: false, X: -1, Y: -1 };
  const canvasRef = createRef();
  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "0.1";
    canvasRef.current.addEventListener("mousedown", (e) => initdraw(e));
    canvasRef.current.addEventListener("mousemove", (e) => draw(e));
    canvasRef.current.addEventListener("mouseup", (e) => finish(e));
    canvasRef.current.addEventListener("mouseout", (e) => finish(e));
  }, []);

  function initdraw(e) {
    dot.drawable = true;
    ctx.beginPath();
    ctx.moveTo(...getPosition(e.clientX, e.clientY));
    // ctx.moveTo(e.clientX, e.clientY);

    ctx.stroke();
  }
  function finish(e) {
    dot.drawable = false;
    ctx.closePath();
    dot = { drawable: false, X: -1, Y: -1 };
  }
  function draw(e) {
    if (dot.drawable) {
      const [newX, newY] = getPosition(e.clientX, e.clientY);
      dot = { ...dot, X: newX, Y: newY };
      ctx.lineTo(dot.X, dot.Y);
      ctx.stroke();
    }
  }
  function getPosition(X, Y) {
    const { top, bottom, right, left } =
      canvasRef.current.getBoundingClientRect();
    return [parseInt(X - left, 10), parseInt(Y - top, 10)];
  }
  return <CANVAS ref={canvasRef} width={width} height={height}></CANVAS>;
}

export default Canvas1;
