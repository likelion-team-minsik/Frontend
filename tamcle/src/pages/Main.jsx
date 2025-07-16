import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Main() {

  const navigate = useNavigate();
  const goTalk = () => {
    navigate(`/TamcleTalk`);
  };

   const goSignUp = () => {
    navigate(`/SignUp`);
  };

    const goMyPage = () => {
      navigate(`/MyPage`);
    }

        const goLogin = () => {
      navigate(`/Login`);
    }

  return (
    <div>
        <h1>메인 화면입니다!</h1>

        <button onClick={goTalk}> 탐클톡으로 이동 </button>
        <button onClick={goSignUp}>회원가입 페이지로 이동</button>
        <button onClick={goLogin}>로그인 페이지로 이동</button>
    </div>
  );
}

export default Main;