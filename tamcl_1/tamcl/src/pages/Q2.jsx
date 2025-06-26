import React from "react";
import { useNavigate } from "react-router-dom";
import * as Q from "../styles/styledQ2";

const Q2 = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const goBack = () => {
    navigate(`/Q1`);
  };

  const goNext = () => {
    navigate(`/Q3`);
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
        <Q.Bar1></Q.Bar1>
        <Q.Bar2></Q.Bar2>
        <Q.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </Q.Illust>
        <Q.TextGroup>
          <div id="title">Q2. 클라이밍을 처음 시작한다면?</div>
          <div id="optionA" onClick={goNext}>
            A. 일단 해보는 거야! 하다보면 적응하겠지
          </div>
          <div id="optionB" onClick={goNext}>
            B. 즐기면서 안전하게 체험하고 싶다
          </div>
          <div id="optionC" onClick={goNext}>
            C. 조금 걱정되는데 ... 친구 있으니까 괜찮겠지?
          </div>
          <div id="optionD" onClick={goNext}>
            D. 유X브에서 영상 보고 가야지
          </div>
        </Q.TextGroup>
      </Q.Box>
      <Q.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          width="51px"
          height="51px"
        />
      </Q.BackBtn>
    </Q.Container>
  );
};

export default Q2;
