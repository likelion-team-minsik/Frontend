import React, { useState } from "react";
import * as R from "../styles/StyledLogin"
import { useNavigate } from "react-router-dom";

function Login(){

    return(
        <R.Background>
        <R.BackBox>
      <R.TopLogo>
        <R.WordLogo>
          <img
            src={`${process.env.PUBLIC_URL}/images/Word.png`}
            alt="왼쪽 상단 글자 로고입니다."
            width=" 161.125px"
          />
        </R.WordLogo>
        <R.PicLogo>
          <img
            src={`${process.env.PUBLIC_URL}/images/Pic.png`}
            alt="오른쪽 상단 그림 로고입니다."
            width="40px"
          />
        </R.PicLogo>
      </R.TopLogo>
        <R.WordLogoBig><img
            src={`${process.env.PUBLIC_URL}/images/Word.png`}
            alt="큰 중간 로고입니다."
            width=" 280px"
          /></R.WordLogoBig>
        <R.Box1>
        <R.Id>아이디</R.Id>
        <R.IdInput placeholder="아이디 입력(6~20자)"></R.IdInput>
        <R.Key>비밀번호</R.Key>
        <R.KeyInput placeholder="비밀번호 입력(문자,숫자,특수문자 포함 8~20자)"></R.KeyInput></R.Box1>
        <R.Find>아이디 | 비밀번호 찾기</R.Find>
                    <R.LoginBtn>로그인</R.LoginBtn>

      </R.BackBox>
      <R.BackImg></R.BackImg>
      </R.Background>
    );
}

export default Login;