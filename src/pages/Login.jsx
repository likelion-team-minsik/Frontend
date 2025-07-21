import React, { useState } from "react";
import * as R from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import axios from "axios";

function Login() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goMenu = () => setMenuOpen((prev) => !prev);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); //로그인폼 제출 시 새로고침 방지!
    setLoading(true);
    setError(""); //에러메세지 초기화

    try {
      const response = await axios.post("/rest-auth/login/", {
        username: username,
        password: password,
      });

      const { key } = response.data; //응답 데이터에서 key(토큰) 추출

      console.log("로그인 성공: ", response.data);
      localStorage.setItem("authToken", key);
      localStorage.setItem("hasAccountHistory", "true");
      navigate("/TamcleTalk2");
    } catch (err) {
      console.error(
        "로그인 실패: " + (err.response ? err.response.data : err.message)
      );
      if (err.response && err.response.status === 400)
        setError("잘못된 아이디 또는 비밀번호입니다");
    } finally {
      setLoading(false);
    }
  };

  return (
    <R.Background>
      <R.BackBox>
        {menuOpen && <R.BackGround onClick={() => setMenuOpen(false)} />}
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <R.TopLogo>
          <R.WordLogo onClick={goMain}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Word.png`}
              alt="왼쪽 상단 글자 로고입니다."
              width=" 161.125px"
            />
          </R.WordLogo>
          <R.PicLogo onClick={goMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Pic.png`}
              alt="오른쪽 상단 그림 로고입니다."
              width="40px"
            />
          </R.PicLogo>
        </R.TopLogo>
        <R.WordLogoBig>
          <img
            src={`${process.env.PUBLIC_URL}/images/Word.png`}
            alt="큰 중간 로고입니다."
            width=" 280px"
          />
        </R.WordLogoBig>
        <form onSubmit={handleLogin}>
          <R.Box1>
            <R.Id>아이디</R.Id>
            <R.IdInput
              placeholder="아이디 입력(6~20자)"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></R.IdInput>
            <R.Key>비밀번호</R.Key>
            <R.KeyInput
              placeholder="비밀번호 입력(문자,숫자,특수문자 포함 8~20자)"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></R.KeyInput>
          </R.Box1>
          {error && <R.Error>{error}</R.Error>}
          <R.Find>아이디 | 비밀번호 찾기</R.Find>
          <R.LoginBtn type="submit">로그인</R.LoginBtn>
        </form>
      </R.BackBox>
      <R.BackImg></R.BackImg>
    </R.Background>
  );
}

export default Login;
