import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/styledMenu";

const Menu = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate(`/`);
  };

  const goTest = () => {
    navigate(`/Test`);
  };

  const goIntro = () => {
    navigate(`/Intro`);
  };

  const goSearch = () => {
    navigate(`/Search`);
  };

  const goTool = () => {
    navigate(`/Tool`);
  };

  return (
    <M.Container>
      <M.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </M.Logo>
      <M.MenuBox>
        <img
          src={`${process.env.PUBLIC_URL}/images/menuBox.svg`}
          alt="menubox"
          width="285.558px"
          height="auto"
        />
        <M.Menu onClick={goMain}>
          <img
            src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
            alt="menu"
            width="42px"
            height="auto"
          />
        </M.Menu>
        <div id="menu1" onClick={goTest}>
          나의 클라이밍 스타일은?
        </div>
        <div id="menu2" onClick={goIntro}>
          클라이밍 소개
        </div>
        <div id="menu3" onClick={goSearch}>
          암장 찾아보기
        </div>
        <div id="menu4" onClick={goTool}>
          장비 구경하기
        </div>
        <div id="menu5">탐클톡</div>
      </M.MenuBox>
      <M.IllustBox>
        <M.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main.svg`}
            width="272px"
            height="588.636px"
          />
        </M.Illust>
        <M.Overlay />
      </M.IllustBox>
    </M.Container>
  );
};

export default Menu;
