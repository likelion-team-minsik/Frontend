import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Q from "../styles/styledQ5";
import Menu from "./Menu";

const Q5 = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goMenu = () => setMenuOpen((prev) => !prev);

  const goBack = () => {
    navigate(`/Q4`);
  };

  const goNext = () => {
    navigate(`/Loading`);
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
          <div id="optionA" onClick={goNext}>
            A. 다음엔 저 벽부터 공략해야지
          </div>
          <div id="optionB" onClick={goNext}>
            B. 아 나 이거 잘하면 완등하겠는데?
          </div>
          <div id="optionC" onClick={goNext}>
            C. 응원 열심히 했네 ... 이제 집 가자!{" "}
          </div>
          <div id="optionD" onClick={goNext}>
            D. 힘들지만 즐거운 경험이었어
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
      {menuOpen && <Q.Background onClick={() => setMenuOpen(false)} />}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </Q.Container>
  );
};

export default Q5;
