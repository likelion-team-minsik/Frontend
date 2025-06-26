import React from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../styles/styledTest";

const Test = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const start = () => {
    navigate(`/Name`);
  };

  return (
    <T.Container>
      <T.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </T.Logo>
      <T.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </T.Menu>
      <T.Box>
        <T.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </T.Illust>
        <div id="title">나의 클라이밍 스타일은?</div>
        <T.TestBtn onClick={start}>시작하기</T.TestBtn>
      </T.Box>
    </T.Container>
  );
};

export default Test;
