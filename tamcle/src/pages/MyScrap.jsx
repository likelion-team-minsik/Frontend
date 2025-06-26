import React, { useState } from "react";
import * as R from "../styles/StyledMyScrap";
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
                <R.Title>스크랩한 글</R.Title>
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
                        <R.Box3><R.Name>이제돌잡이</R.Name><R.Time>10분 전</R.Time></R.Box3> 
                    </R.Box2>

                    <R.PostTitle>초보자 암벽화 추천 부탁드려요:)</R.PostTitle> 
                    <R.Content>이제 막 클라이밍 입문했는데, 몇 번 해보고
                        너무 재밌어서 암벽화 구매하려고 합니다! 
                        다들 어떤 브랜드 많이 신나요?</R.Content>
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
                        <R.Box3><R.Name>이림30cm부상클</R.Name><R.Time>어제</R.Time></R.Box3> 
                    </R.Box2>

                    <R.PostTitle>아니글쎄30cm에서떨어짐</R.PostTitle> 
                    <R.Content>이게 말이야 방구야
                        <br/>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ...</R.Content>
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
                        <R.Box3><R.Name>나이스요정</R.Name><R.Time>6시간 전</R.Time></R.Box3> 
                    </R.Box2>

                    <R.PostTitle>날씨가 너무 좋아요</R.PostTitle> 
                    <R.Content>클라이밍 하기 딱 좋은 날씨네
                        <br/>어디가지 추천 받아요...</R.Content>
                </R.PostBox>
              </R.PostBoxOfBox>
            </R.BackBox>
        </R.Background>
    );
}

export default MyPost;