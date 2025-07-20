import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as N from "../styles/styledName";
import Menu from "./Menu";

const Name = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goMenu = () => setMenuOpen((prev) => !prev);

  const start = () => {
    navigate(`/Q1`);
    localStorage.setItem("userName", name);
  };

  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleBlur = () => {
    if (name.trim() === "") {
      //문자열 공백 제거
      setName("닉네임");
    }
  };

  const goMain = () => {
    navigate(`/`);
  };

  return (
    <N.Container>
      {menuOpen && <N.Background onClick={() => setMenuOpen(false)} />}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <N.Logo onClick={goMain}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </N.Logo>
      <N.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
          width="40px"
          height="auto"
        />
      </N.Menu>
      <N.Box>
        <N.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </N.Illust>
        <div id="title">닉네임을 입력해주세요.</div>
        <N.InputName
          type="text"
          placeholder="닉네임 두 글자"
          onChange={handleChangeName}
          onBlur={handleBlur}
          value={name}
        ></N.InputName>
        <N.TestBtn onClick={start}>시작하기</N.TestBtn>
      </N.Box>
    </N.Container>
  );
};

export default Name;
