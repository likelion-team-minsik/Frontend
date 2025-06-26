import React, { useState } from "react";
import * as R from "../styles/StyledSignDone"
import { useNavigate } from "react-router-dom";

function SignDone(){

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
      <R.Welcome>어서오세요<br/>happyclimbingday03님!<br/>환영합니다:) </R.Welcome>
                        <R.CenterLogo> <img
                        src={`${process.env.PUBLIC_URL}/images/Pencil.png`}
                        alt="가운데 로고입니다."
                        width="145px"/> 
                        </R.CenterLogo>

                        <R.GoTcBtn>탐클톡 탐험가기</R.GoTcBtn>
      </R.BackBox>
      <R.BackImg></R.BackImg>
      </R.Background>
    );
}

export default SignDone;