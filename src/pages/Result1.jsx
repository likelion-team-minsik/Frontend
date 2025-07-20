import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as R from "../styles/styledResult1";
import Menu from "./Menu";
import axios from "axios";

const Result1 = () => {
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
      //도전형 유형과 일치하는지 확인
      if (initialResult.result_type === "도전형") {
        setAnalysisResult(initialResult);
        localStorage.setItem("userType", initialResult.result_type);
      } else {
        //잘못된 유형으로 접근 시 올바른 페이지로 다시 접근
        switch (initialResult.result_type) {
          case "재미형":
            navigate("/Result2", { state: { analysisResult: initialResult } });
            break;
          case "계획형":
            navigate("/Result3", { state: { analysisResult: initialResult } });
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

          if (response.data.result_type === "도전형") {
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
