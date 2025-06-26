import React from "react";
import { useNavigate } from "react-router-dom";
import * as Q from "../styles/styledQ1";

const Q1 = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const goNext = () => {
    navigate(`/Q2`);
  };

  return (
    <Q.Container>
      <Q.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </Q.Logo>
      <Q.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </Q.Menu>
      <Q.Box>
        <Q.Bar></Q.Bar>
        <Q.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </Q.Illust>
        <Q.TextGroup>
          <div id="title">Q1. 친구가 클라이밍 하자고 할 때 나는?</div>
          <div id="optionA" onClick={goNext}>
            A. 친구랑 같이 가서 응원하고 분위기 즐기고 싶어
          </div>
          <div id="optionB" onClick={goNext}>
            B. 도전해보고 싶다! 어떻게 하는지 궁금해
          </div>
          <div id="optionC" onClick={goNext}>
            C. 오, 한 번 가볼까? 재밌겠다! 고고
          </div>
          <div id="optionD" onClick={goNext}>
            D. 클라이밍? 규칙이 뭔데? 미리 알려줘
          </div>
        </Q.TextGroup>
      </Q.Box>
    </Q.Container>
  );
};

export default Q1;
