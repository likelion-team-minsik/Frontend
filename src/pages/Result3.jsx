import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as R from "../styles/styledResult3";
import Menu from "./Menu";
import axios from "axios";

const Result3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const goMenu = () => setMenuOpen((prev) => !prev);

  const goIntro = () => {
    navigate(`/Intro`);
  };

  const [name, setName] = useState("");

  const goMain = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    setName(storedName);

    if (location.state && location.state.analysisResult) {
      const { analysisResult: initialResult } = location.state;
      //계획형 유형과 일치하는지 확인
      if (initialResult.result_type === "계획형") {
        setAnalysisResult(initialResult);
        localStorage.setItem("userType", initialResult.result_type);
      } else {
        //잘못된 유형으로 접근 시 올바른 페이지로 다시 접근
        switch (initialResult.result_type) {
          case "재미형":
            navigate("/Result2", { state: { analysisResult: initialResult } });
            break;
          case "도전형":
            navigate("/Result1", { state: { analysisResult: initialResult } });
            break;
          case "응원형":
            navigate("/Result4", { state: { analysisResult: initialResult } });
            break;
        }
      }
    } else {
      //로그인 후 이전에 했던 검사 결과 불러오기(get 사용)
      const storedMyResult = async () => {
        try {
          const token = localStorage.getItem("authToken");
          if (!token) {
            navigate("/login");
            return;
          }
          const response = await axios.get("/my-result", {
            headers: { Authorization: `Token ${token}` },
          });

          if (response.data.result_type === "계획형") {
            setAnalysisResult(response.data);
            localStorage.setItem("userType", response.data.result_type);
          }
        } catch (err) {
          console.log("분석 결과 조회 실패", err);
        }
      };
      storedMyResult();
    }
  }, [location.state, navigate]);

  return (
    <R.Container>
      {menuOpen && <R.Background onClick={() => setMenuOpen(false)} />}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <R.Logo onClick={goMain}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </R.Logo>
      <R.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
          width="40px"
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
