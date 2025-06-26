import React from "react";
import { useNavigate } from "react-router-dom";
import * as Q from "../styles/styledQ5";

const Q5 = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const goBack = () => {
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
        <Q.Bar4></Q.Bar4>
        <Q.Bar5></Q.Bar5>
        <Q.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </Q.Illust>
        <Q.TextGroup>
          <div id="title">Q5. 내려온 후 든 생각은?</div>
          <div id="optionA">A. 다음엔 저 벽부터 공략해야지</div>
          <div id="optionB">B. 아 나 이거 잘하면 완등하겠는데?</div>
          <div id="optionC">C. 응원 열심히 했네 ... 이제 집 가자! </div>
          <div id="optionD">D. 힘들지만 즐거운 경험이었어</div>
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

export default Q5;
