import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/styledMenu";

const Menu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <M.MenuBox isOpen={isOpen}>
      <img
        src={`${process.env.PUBLIC_URL}/images/menuBox.svg`}
        alt="menubox"
        width="285.558px"
        height="auto"
      />
      <M.Menu onClick={onClose}>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </M.Menu>
      <div id="menu1" onClick={() => goPage("/Test")}>
        나의 클라이밍 스타일은?
      </div>
      <div id="menu2" onClick={() => goPage("/Intro")}>
        클라이밍 소개
      </div>
      <div id="menu3" onClick={() => goPage("/Search")}>
        암장 찾아보기
      </div>
      <div id="menu4" onClick={() => goPage("/Tool")}>
        장비 구경하기
      </div>
      <div id="menu5" onClick={() => goPage("/TamcleTalk2")}>
        {/*1=비회원 2=로그인 완료 3=로그아웃 */}
        탐클톡
      </div>
    </M.MenuBox>
  );
};

export default Menu;
