import React from "react";
import { useNavigate } from "react-router-dom";
import * as Q from "../styles/styledQ3";

const Q3 = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const goBack = () => {
    navigate(`/Q2`);
  };

  const goNext = () => {
    navigate(`/Q4`);
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
        <Q.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </Q.Illust>
        <Q.TextGroup>
          <div id="title">Q3. 첫 클라이밍 날, 내 자세는?</div>
          <div id="optionA" onClick={goNext}>
            A. (등반하는 친구를 보며) “나이스~!” 외침
          </div>
          <div id="optionB" onClick={goNext}>
            B. (두리번 두리번) 사람 구경하며 등반 즐김
          </div>
          <div id="optionC" onClick={goNext}>
            C. (손에 초크 묻히며) “간다!!”
          </div>
          <div id="optionD" onClick={goNext}>
            D. (어떻게 오를지 관찰중) 이렇게 올라야지
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

export default Q3;
