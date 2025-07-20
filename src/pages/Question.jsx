import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Q from "../styles/styledQuestion";
import Menu from "./Menu";
import axios from "axios";

const questionsData = [
  {
    id: 1,
    question: "Q1. 친구가 클라이밍 하자고 할 때 나는?",
    barColor: "#ff8b9a",
    choices: [
      { id: 1, text: "A. 친구랑 같이 가서 응원하고 분위기 즐기고 싶어" },
      { id: 2, text: "B. 도전해보고 싶다! 어떻게 하는지 궁금해" },
      { id: 3, text: "C. 오, 한 번 가볼까? 재밌겠다! 고고" },
      { id: 4, text: "D. 클라이밍? 규칙이 뭔데? 미리 알려줘" },
    ],
  },
  {
    id: 2,
    question: "Q2. 클라이밍을 처음 시작한다면?",
    barColor: "#8be6ff",
    choices: [
      { id: 5, text: "A. 일단 해보는 거야! 하다보면 적응하겠지" },
      { id: 6, text: "B. 즐기면서 안전하게 체험하고 싶다" },
      { id: 7, text: "C. 조금 걱정되는데 ... 친구 있으니까 괜찮겠지?" },
      { id: 8, text: "D. 유X브에서 영상 보고 가야지" },
    ],
  },
  {
    id: 3,
    question: "Q3. 첫 클라이밍 날, 내 자세는?",
    barColor: "#fff58b",
    choices: [
      { id: 9, text: "A. (등반하는 친구를 보며) “나이스~!” 외침" },
      { id: 10, text: "B. (두리번 두리번) 사람 구경하며 등반 즐김" },
      { id: 11, text: "C. (손에 초크 묻히며) “간다!!”" },
      { id: 12, text: "D. (어떻게 오를지 관찰중) 이렇게 올라야지" },
    ],
  },
  {
    id: 4,
    question: "Q4. 클라이밍 중간 쉬는 시간엔?",
    barColor: "#a88bff",
    choices: [
      { id: 13, text: "A. (김치) 수다 떨면서 사진 타임" },
      { id: 14, text: "B. 쉬면서 다른 사람들 등반을 분석함" },
      { id: 15, text: "C. 친구를 보며 “ 조금만 더 힘내!”" },
      { id: 16, text: "D. 휴식은 없다. 남은 체력으로 계속 도전중" },
    ],
  },
  {
    id: 5,
    question: "Q5. 내려온 후 든 생각은?",
    barColor: "#8bffc5",
    choices: [
      { id: 17, text: "A. 다음엔 저 벽부터 공략해야지" },
      { id: 18, text: "B. 아 나 이거 잘하면 완등하겠는데?" },
      { id: 19, text: "C. 응원 열심히 했네 ... 이제 집 가자!" },
      { id: 20, text: "D. 힘들지만 즐거운 경험이었어" },
    ],
  },
];

const Question = () => {
  const [questionId, setQuestionId] = useState(0);
  const [myAnswers, setMyAnswers] = useState(
    Array(questionsData.length).fill(null)
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const currentQuestion = questionsData[questionId];

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goMenu = () => setMenuOpen((prev) => !prev);

  const goMain = () => {
    navigate(`/`);
  };

  const handleChoiceSelect = async (choiceld) => {
    //현재 질문에 대한 답변 저장
    const newMyAnswers = [...myAnswers];
    newMyAnswers[questionId] = { choice_id: choiceld };
    setMyAnswers(newMyAnswers);

    //마지막 질문인지 여부 확인
    const lastQuestion = questionId === questionsData.length - 1;

    //마지막 질문이면 api 호출, 결과 제출
    if (lastQuestion) {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("authToken"); //로그인 토큰 가져오기

        if (!token) {
          navigate("/login");
          return;
        }

        //선택된 모든 답변을 담은 최종 배열
        const response = await axios.post(
          "/submit/",
          {
            answers: newMyAnswers,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        navigate("/analysis-result", {
          state: { analysisResult: response.data },
        });
      } catch (err) {
        if (err.response && err.response.status === 401) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    } else {
      //마지막 질문이 아니면 다음 질문으로 이동
      setQuestionId((prevIndex) => prevIndex + 1);
    }
  };

  //로딩 중 페이지 휴....
  if (loading) {
    return (
      <Q.Container>
        <Q.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="logo"
            width="165px"
            height="auto"
          />
        </Q.Logo>
        <Q.Menu>
          <img
            src={`${process.env.PUBLIC_URL}/images/menu.svg`}
            alt="menu"
            width="40px"
            height="auto"
          />
        </Q.Menu>
        <Q.LoadingBox>
          <Q.LoadingTitle>
            <span style={{ letterSpacing: "4px" }}>• • • </span>
            <span style={{ letterSpacing: "0px" }}> 분석</span>
            <span style={{ letterSpacing: "4px" }}>중 • • •</span>
          </Q.LoadingTitle>
        </Q.LoadingBox>
      </Q.Container>
    );
  }

  //찐 페이지
  return (
    <Q.Container>
      {menuOpen && <Q.Background onClick={() => setMenuOpen(false)} />}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Q.Logo onClick={goMain}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </Q.Logo>
      <Q.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
          width="40px"
          height="auto"
        />
      </Q.Menu>
      <Q.Box>
        <Q.BarBox>
          {questionsData.map((_, index) => (
            <Q.Bar
              key={index}
              $barColor={questionsData[index].barColor}
              $isActive={index <= questionId}
            />
          ))}
        </Q.BarBox>
        <Q.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main2.svg`}
            width="272px"
            height="588.636px"
          />
        </Q.Illust>
        <Q.TextGroup>
          <div id="title">{currentQuestion.question}</div>
          {currentQuestion.choices.map((choice) => (
            <Q.Option
              key={choice.id}
              onClick={() => handleChoiceSelect(choice.id)}
            >
              {choice.text}
            </Q.Option>
          ))}
        </Q.TextGroup>
        {questionId > 0 && (
          <Q.BackBtn
            onClick={() => setQuestionId((prevIndex) => prevIndex - 1)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
              width="51px"
              height="51px"
            />
          </Q.BackBtn>
        )}
      </Q.Box>
    </Q.Container>
  );
};

export default Question;
