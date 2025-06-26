import React from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/styledLoading2";

const Loading2 = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  return (
    <L.Container>
      <L.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </L.Logo>
      <L.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </L.Menu>
      <L.Box>
        <L.Title>
          <span style={{ letterSpacing: "4px" }}>• • • </span>
          <span style={{ letterSpacing: "0px" }}> 분석</span>
          <span style={{ letterSpacing: "4px" }}>중 • • •</span>
        </L.Title>
      </L.Box>
    </L.Container>
  );
};

export default Loading2;
