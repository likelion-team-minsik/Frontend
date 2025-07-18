import React, { useState } from "react";
import * as R from "../styles/StyledSignDone";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation import
import Menu from "./Menu";

function SignDone() {
  const navigate = useNavigate();
  const location = useLocation();

  // location.state에서 username 받아오기 (없으면 빈 문자열)
  const username = location.state?.username || "";

  const GoTcBtn = () => {
    navigate("/TamcleTalk2");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const goMenu = () => setMenuOpen((prev) => !prev);

  const goMain = () => {
    navigate(`/`);
  };

  return (
    <R.Background>
      <R.BackBox>
        {menuOpen && <R.BackGround onClick={() => setMenuOpen(false)} />}
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <R.TopLogo>
          <R.WordLogo onClick={goMain}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              alt="왼쪽 상단 글자 로고입니다."
              width=" 165px"
            />
          </R.WordLogo>
          <R.PicLogo onClick={goMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/images/menu.svg`}
              alt="오른쪽 상단 그림 로고입니다."
              width="40px"
            />
          </R.PicLogo>
        </R.TopLogo>
        <R.Welcome>
          어서오세요
          <br />
          {username}님!
          <br />
          환영합니다:)
        </R.Welcome>
        <R.CenterLogo>
          <img
            src={`${process.env.PUBLIC_URL}/images/Pencil.png`}
            alt="가운데 로고입니다."
            width="145px"
          />
        </R.CenterLogo>

        <R.GoTcBtn onClick={GoTcBtn}>탐클톡 탐험가기</R.GoTcBtn>
      </R.BackBox>
      <R.BackImg></R.BackImg>
    </R.Background>
  );
}

export default SignDone;
