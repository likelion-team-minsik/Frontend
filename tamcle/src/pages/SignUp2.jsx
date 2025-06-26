import React, { use, useState } from "react";
import * as R from "../styles/StyledSignUp2";
import { useNavigate } from "react-router-dom";

function Signup2() {

    const [domain, setDomain] = useState("");

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
    };

    const navigate = useNavigate();

    const goSignDone = () => {
        navigate('/SignDone');
    }

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
        <R.Sign>회원가입</R.Sign>
        <R.Box1>
        <R.Id>아이디</R.Id>
        <R.IdBox placeholder="아이디 입력(6~20자)"/><R.Check>중복확인</R.Check>
        <R.Key>비밀번호</R.Key>
        <R.KeyBox placeholder="비밀번호 입력(문자,숫자,특수문자 포함 8~20자)"/>
        <R.ReKey>비밀번호 확인</R.ReKey>
        <R.ReKeyBox placeholder="비밀번호 재입력"/>
        <R.Name>이름</R.Name>
        <R.NameBox placeholder="이름을 입력해주세요"/>
        <R.Phone>전화번호</R.Phone>
        <R.PhoneBox placeholder='휴대폰 번호 입력("-"제외 11자리 입력)'/>
        
        <R.Mail>이메일 주소(선택)</R.Mail><R.Box2>
        <R.MailBox placeholder="이메일 주소"/>
        <R.AtIcon>@</R.AtIcon>
        <R.DomainSelect onChange={handleDomainChange} style={{ height: "40px", borderRadius: "4px", border: "1px solid #ccc", padding: "0 8px" }}>
              <option value="naver.com">naver.com</option>
              <option value="daum.net">gmail.com</option>
              <option value="">gmail.com</option>
             </R.DomainSelect></R.Box2>
           </R.Box1> 
        <R.DoneBtn onClick={goSignDone}>가입하기</R.DoneBtn>
           </R.BackBox>
        </R.Background>
    );
}

export default Signup2;