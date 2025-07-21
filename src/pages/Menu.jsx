import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/styledMenu";

const Menu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
    onClose();
  };

  const getTamcleTalkPath = () => {
    const token = localStorage.getItem("authToken");
    const hasAccountHistory = localStorage.getItem("hasAccountHistory"); // 회원가입/로그인 이력 플래그

    if (token) {
      //1. 토큰이 있으면 로그인 버전 탐클톡2 페이지
      return "/TamcleTalk2";
    } else if (hasAccountHistory === "true") {
      //2. 토큰은 없지만 계정 이력이 있으면 탐클톡3 페이지 (로그아웃 상태)
      return "/TamcleTalk3";
    } else {
      //3. 토큰도 없고 계정 이력도 없으면 비회원 탐클톡1 페이지 (완전 비회원 상태)
      return "/TamcleTalk1";
    }
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
          width="40px"
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

      <div id="menu5" onClick={() => goPage(getTamcleTalkPath())}>
        {/*1=비회원 2=로그인 완료 3=로그아웃 */}
        탐클톡
      </div>
    </M.MenuBox>
  );
};

export default Menu;
