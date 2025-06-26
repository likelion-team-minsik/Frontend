import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as R from "../styles/styledResult4";

const Result4 = () => {
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
            <span id="titleText2">응원형</span>
            <span id="titleText3">입니다!</span>
          </div>
        </R.Title>
        <R.Pic>
          <img
            src={`${process.env.PUBLIC_URL}/images/Result4-1.svg`}
            alt="result4"
            width="393px"
            height="393px"
          />
        </R.Pic>
      </R.Box>
      <R.Frame>
        <R.TextBox1>
          <div id="frameText">
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 혼자보다는
              친구들과 함께 즐기며
            </div>
            <div>
              <span id="space">
                <span id="highlight">응원과 분위기</span>를 중요하게 생각하는
                타입
              </span>
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 클라이밍은{" "}
              <span id="highlight">함께 즐기는 소셜 활동</span>으로
            </div>
            <div>
              <span id="space">
                여기며 , <span id="highlight">동료와의 유대감</span>을 중시함
              </span>
            </div>
          </div>
        </R.TextBox1>
        <R.TextBox2>
          <div id="frameText">
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 문제 유형:
              <span id="highlight"> #기본동작 #버디 #협력 루트</span>
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 입문 루트:
              쉽고 접근성 좋은 초급 루트, 버디
            </div>
            <div>
              <span id="space">이벤트 참여</span>
            </div>
            <div>
              <span style={{ letterSpacing: "3px" }}>• </span> 추천 장비:
              초보자용 암벽화, 내구성 좋은 초크 등
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

export default Result4;
