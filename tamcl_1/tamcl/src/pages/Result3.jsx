import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as R from "../styles/styledResult3";

const Result3 = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const goIntro = () => {
    navigate(`/Intro`);
  };

  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    setName(storedName);
  }, []);

  return (
    <R.Container>
      <R.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </R.Logo>
      <R.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </R.Menu>
      <R.Box>
        <R.Title>
          <img
            src={`${process.env.PUBLIC_URL}/images/text.svg`}
            alt="title"
            width="303.167px"
            height="150.5px"
          />
          <div>
            <span id="titleText1">{name}님은 </span>
            <span id="titleText2">계획형</span>
            <span id="titleText3">입니다!</span>
          </div>
        </R.Title>
        <R.Pic>
          <img
            src={`${process.env.PUBLIC_URL}/images/Result3-1.svg`}
            alt="result3"
            width="393px"
            height="393px"
          />
        </R.Pic>
      </R.Box>
      <R.Frame>
        <R.TextBox1>
          <div id="frameText">
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span>{" "}
              <span id="highlight">체계적으로 준비하고 계획</span>하며 목표
              달성하는 타입
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 클라이밍 입문
              시에도<span id="highlight"> 충분히 정보를 수집</span>하고,
            </div>
            <div>
              <span id="space"></span>단계별로 배우는 것을 선호함
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span>
              <span id="highlight"> 꾸준함과 신중함</span>이 장점인 스타일
            </div>
          </div>
        </R.TextBox1>
        <R.TextBox2>
          <div id="frameText">
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 문제 유형:
              <span id="highlight"> #루트파인딩 #테크닉 #정밀동작</span>
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 입문 루트:
              루트파인딩같이 문제해결이 필요한
            </div>
            <div>
              <span id="space"></span> 루트, 섬세한 기술과 전략이 필요한 루트
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 장비: 테크닉
              암벽화, 내구성 좋은 초크 등
            </div>
          </div>
        </R.TextBox2>
      </R.Frame>
      <R.Frame2>
        <R.Dot>
          <div>•</div>
          <div>•</div>
          <div>•</div>
        </R.Dot>
        <div id="introText">이해하기 힘들다면?</div>
        <R.IntroBtn onClick={goIntro}>클라이밍 소개 바로가기</R.IntroBtn>
        <R.Post>
          <div id="btnText">테스트 공유하기</div>
          <R.ResetBtn>
            <img
              src={`${process.env.PUBLIC_URL}/images/reset.svg`}
              alt="reset"
              width="35px"
            />
          </R.ResetBtn>
        </R.Post>
      </R.Frame2>
    </R.Container>
  );
};

export default Result3;
