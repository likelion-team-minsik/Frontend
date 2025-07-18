import React, { use, useState } from "react";
import * as R from "../styles/StyledSignUp2";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import axios from "axios";

function Signup2() {
  // 1. 초기 도메인값 설정

const [domain, setDomain] = useState("gmail.com"); // 

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const navigate = useNavigate();

  const goSignDone = () => {
    navigate("/SignDone");
  };

  const goMain = () => {
    navigate(`/`);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const goMenu = () => setMenuOpen((prev) => !prev);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    try {
      if (!username || !password || !password2 || !name || !phone || !email) {
        alert("필수 항목을 모두 입력해주세요.");
        return;
      }
      if (password !== password2) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      const fullEmail = `${email}@${domain}`;
      const response = await axios.post("/user/", {
        username,
        password,
        password2,
        full_name: name,
        phone_number: phone,
        email: fullEmail,
      });

      console.log("회원가입 성공:", response.data);
      navigate("/SignDone", { state: { username } }); // <-- 여기서 username 전달
    } catch (error) {
      // 서버에서 받은 에러 메시지 처리
      const data = error.response?.data;

      if (data?.username) {
        alert(`아이디 오류: ${data.username[0]}`);
      } else if (data?.password) {
        alert(`비밀번호 오류: ${data.password[0]}`);
      } else if (data?.full_name) {
        alert(`이름 오류: ${data.full_name[0]}`);
      } else if (data?.phone_number) {
        alert(`전화번호 오류: ${data.phone_number[0]}`);
      } else if (data?.email) {
        alert(`이메일 오류: ${data.email[0]}`);
      } else {
        alert("회원가입에 실패했습니다.");
      }

      console.error("회원가입 실패:", data || error.message);
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
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              alt="왼쪽 상단 글자 로고입니다."
              width=" 165px"
            />
          </R.WordLogo>
          <R.PicLogo onClick={goMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/images/menu.svg`}
              alt="오른쪽 상단 그림 로고입니다."
              width="40px"
            />
          </R.PicLogo>
        </R.TopLogo>
        <R.Sign>회원가입</R.Sign>
        <R.Box1>
          <R.Id>아이디</R.Id>
          <R.IdBox
            placeholder="아이디 입력(6~20자)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <R.Check>중복확인</R.Check>
          <R.Key>비밀번호</R.Key>
          <R.KeyBox
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <R.ReKey>비밀번호 확인</R.ReKey>
          <R.ReKeyBox
            placeholder="비밀번호 재입력"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <R.Name>이름</R.Name>
          <R.NameBox
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <R.Phone>전화번호</R.Phone>

          <R.PhoneBox
            placeholder="전화번호 입력"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <R.Mail>이메일 주소(선택)</R.Mail>
          <R.Box2>
            <R.MailBox
              placeholder="이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <R.AtIcon>@</R.AtIcon>
            <R.DomainSelect
              onChange={handleDomainChange}
              style={{
                height: "40px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                padding: "0 8px",
              }}
            >
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
              <option value="gmail.com">gmail.com</option>
            </R.DomainSelect>
          </R.Box2>
        </R.Box1>
        <R.DoneBtn onClick={handleSignup}>가입하기</R.DoneBtn>
      </R.BackBox>
    </R.Background>
  );
}

export default Signup2;
