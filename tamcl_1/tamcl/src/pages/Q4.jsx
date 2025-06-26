import React from "react";
import { useNavigate } from "react-router-dom";
import * as Q from "../styles/styledQ4";

const Q4 = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const goBack = () => {
    navigate(`/Q3`);
  };

  const goNext = () => {
    navigate(`/Q5`);
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
        <Q.Bar3></Q.Bar3>
        <Q.Bar4></Q.Bar4>
        <Q.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </Q.Illust>
        <Q.TextGroup>
          <div id="title">Q4. 클라이밍 중간 쉬는 시간엔?</div>
          <div id="optionA" onClick={goNext}>
            A. (김치) 수다 떨면서 사진 타임
          </div>
          <div id="optionB" onClick={goNext}>
            B. 쉬면서 다른 사람들 등반을 분석함
          </div>
          <div id="optionC" onClick={goNext}>
            C. 친구를 보며 “ 조금만 더 힘내!”
          </div>
          <div id="optionD" onClick={goNext}>
            D. 휴식은 없다. 남은 체력으로 계속 도전중
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

export default Q4;
