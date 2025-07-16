import React, { useState } from "react";
import * as R from "../styles/StyledSignUp"
import { useNavigate } from "react-router-dom";

function SignUp(){

    const navigate = useNavigate();

    const goSignUp2 = () => {
        navigate('/SignUp2');
    };
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
                  <R.Title>탐클톡에 참여하고 싶으신가요?<br/>
                    지금 가입하고 함께 이야기 나눠요:)
                  </R.Title>
                  <R.Box1><R.CenterLogo> <img
                        src={`${process.env.PUBLIC_URL}/images/Pencil.png`}
                        alt="가운데 로고입니다."
                        width="145px"/></R.CenterLogo></R.Box1>
                <R.BackImg>
                      </R.BackImg>
                  
                <R.Box2><R.No>괜찮아요</R.No><R.Good onClick={goSignUp2}>좋아요!</R.Good></R.Box2>
            </R.BackBox>

        </R.Background>

    );
}

export default SignUp;