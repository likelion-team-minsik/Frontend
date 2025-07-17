import React, { useState } from "react";
import * as R from "../styles/StyledMyPost";
import { useNavigate } from "react-router-dom";


function MyPost() {

     const navigate = useNavigate();
       const GoBack = () => {
        navigate('/MyPage');
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
              <R.Box1>
                <R.BackBtn onClick={GoBack}><img
                    src={`${process.env.PUBLIC_URL}/images/BackBtn.png`}
                    alt="뒤로 가기"
                    width="33px"
                  /></R.BackBtn>
                <R.Title>작성한 글</R.Title>
                <R.Glass><img
                    src={`${process.env.PUBLIC_URL}/images/SearchBtn.png`}
                    alt="돋보기"
                    width="23.728px"
                  /></R.Glass>
              </R.Box1>
              <R.PostBoxOfBox>
                <R.PostBox>
                    <R.Box2>
                        <R.Frame><img
                    src={`${process.env.PUBLIC_URL}/images/Profile.png`}
                    alt="프레임"
                    width="50px"
                  /></R.Frame>
                  <R.Inpro><img
                    src={`${process.env.PUBLIC_URL}/images/InproGray1.png`}
                    alt="프로필 사진"
                    width="23.736px"
                  /></R.Inpro> 
                        <R.Box3><R.Name>탐클병아리</R.Name><R.Time>6시간 전</R.Time></R.Box3> 
                    </R.Box2>

                    <R.PostTitle>암벽화 원래 작게 신는 건가요?</R.PostTitle> 
                    <R.Content>오늘 1일차인데... 너무 아픔
                        <br/>다들 이 고통을 견디는 것이겠죠...</R.Content>
                </R.PostBox>

                   <R.PostBox>
                    <R.Box2>
                        <R.Frame><img
                    src={`${process.env.PUBLIC_URL}/images/Profile.png`}
                    alt="프레임"
                    width="50px"
                  /></R.Frame>
                  <R.Inpro><img
                    src={`${process.env.PUBLIC_URL}/images/InproGray1.png`}
                    alt="프로필 사진"
                    width="23.736px"
                  /></R.Inpro> 
                        <R.Box3><R.Name>탐클병아리</R.Name><R.Time>6시간 전</R.Time></R.Box3> 
                    </R.Box2>

                    <R.PostTitle>암벽화 원래 작게 신는 건가요?</R.PostTitle> 
                    <R.Content>오늘 1일차인데... 너무 아픔
                        <br/>다들 이 고통을 견디는 것이겠죠...</R.Content>
                </R.PostBox>

                   <R.PostBox>
                    <R.Box2>
                        <R.Frame><img
                    src={`${process.env.PUBLIC_URL}/images/Profile.png`}
                    alt="프레임"
                    width="50px"
                  /></R.Frame>
                  <R.Inpro><img
                    src={`${process.env.PUBLIC_URL}/images/InproGray1.png`}
                    alt="프로필 사진"
                    width="23.736px"
                  /></R.Inpro> 
                        <R.Box3><R.Name>탐클병아리</R.Name><R.Time>6시간 전</R.Time></R.Box3> 
                    </R.Box2>

                    <R.PostTitle>암벽화 원래 작게 신는 건가요?</R.PostTitle> 
                    <R.Content>오늘 1일차인데... 너무 아픔
                        <br/>다들 이 고통을 견디는 것이겠죠...</R.Content>
                </R.PostBox>
              </R.PostBoxOfBox>
            </R.BackBox>
        </R.Background>
    );
}

export default MyPost;