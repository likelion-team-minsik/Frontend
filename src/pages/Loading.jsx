import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as L from "../styles/styledLoading";
import Menu from "./Menu";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 2.5초 후 "/Result" 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/Result1");
    }, 2500);

    // 컴포넌트 언마운트 시 타이머 제거
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <L.Container>
      <L.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </L.Logo>
      <L.Menu>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
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

export default Loading;
