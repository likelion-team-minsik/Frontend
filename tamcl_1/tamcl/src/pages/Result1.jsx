import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as R from "../styles/styledResult1";

const Result1 = () => {
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
            <span id="titleText2">도전형</span>
            <span id="titleText3">입니다!</span>
          </div>
        </R.Title>
        <R.Pic>
          <img
            src={`${process.env.PUBLIC_URL}/images/Result1-1.svg`}
            alt="result1"
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
              <span id="highlight">새롭고 어려운 코스</span>에 도전하는 걸
              즐기는 타입
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 클라이밍을 통해
              <span id="highlight"> 성취감과 자기 극복</span>을 느끼고 싶어함
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 처음부터 조금
              무리해도 <span id="highlight">도전정신</span>으로 극복하는 스타일
            </div>
          </div>
        </R.TextBox1>
        <R.TextBox2>
          <div id="frameText">
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 문제 유형:
              <span id="highlight"> #다이나믹 #파워 #지구력</span>
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 입문 루트:
              점프나 다이나믹 무브가 포함된 루트,
            </div>
            <div>
              <span id="space"></span>힘과 기술이 요구되는 루트 ex) 오버행
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 장비: 고성능
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

export default Result1;
