import React, { useState } from "react";
import * as R from "../styles/StyledMyPage";
import { useNavigate } from "react-router-dom";

function MyPage() {
     
    // 드롭다운 상태
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // 플러스 버튼 클릭 시 토글 함수
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navigate = useNavigate();


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
              <R.Box1 ><R.MyPageWord>마이페이지</R.MyPageWord></R.Box1>
              <R.ProfileFrame>   <img
                    src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}
                    width=" 126px"
                  /></R.ProfileFrame>
              <R.InPro>    <img
                    src={`${process.env.PUBLIC_URL}/images/Inpro.png`}
                    width=" 68.03999px"
                 /></R.InPro>
                 <R.Plus onClick={toggleDropdown}><img
                    src={`${process.env.PUBLIC_URL}/images/Plus.png`}
                    width=" 39px" alt="플러스 이미지"
                 /></R.Plus>

                   {/* 드롭다운 이미지 영역 - dropdownOpen이 true일 때만 보이도록 */}
                {dropdownOpen && (
                <R.DropdownContainer>
                    <R.Camera><img src={`${process.env.PUBLIC_URL}/images/Camera.png`} width="28.483px"/></R.Camera>
                    <R.DropFrame1><img src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}  width="60px" /></R.DropFrame1>
                    <R.DropPro><img src={`${process.env.PUBLIC_URL}/images/InPro2.png`} width="28.483px"/></R.DropPro>
                    <R.DropFrame><img src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}  width="60px" /></R.DropFrame>
                    <R.DropFrame2><img src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`} width="60px" /></R.DropFrame2>
                    <R.DropPro2><img src={`${process.env.PUBLIC_URL}/images/InPro3.png`} width="28.483px"/></R.DropPro2>
                    <R.DropFrame3><img src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`} width="60px" /></R.DropFrame3>
                    <R.DropPro3><img src={`${process.env.PUBLIC_URL}/images/InPro4.png`} width="28.483px"/></R.DropPro3>
                </R.DropdownContainer>
                )}

                 <R.Box1><R.Nick>닉네임</R.Nick></R.Box1>
                 <R.Box1><R.NickInput placeholder="닉네임 입력(2~10자)"/></R.Box1>
              </R.BackBox>
              <R.Box3>
                <R.Box2 onClick={() => navigate('/MyPost')}>
                    <R.Go1>작성한 글</R.Go1><R.Go1Btn><img
                    src={`${process.env.PUBLIC_URL}/images/Go.png`}
                    width="33px"
                 /></R.Go1Btn>
                </R.Box2>
                <R.Box2 onClick={() => navigate('/MyComment')}>
                    <R.Go2 >댓글 단 글</R.Go2><R.Go2Btn><img
                    src={`${process.env.PUBLIC_URL}/images/Go.png`}
                    width="33px"
                 /></R.Go2Btn>
                </R.Box2>
                <R.Box2 onClick={() => navigate('/MyScrap')}>
                    <R.Go3 >스크랩한 글</R.Go3><R.Go3Btn><img
                    src={`${process.env.PUBLIC_URL}/images/Go.png`}
                    width="33px"
                 /></R.Go3Btn>
                </R.Box2>
                <R.Box2>
                    <R.Go4 >로그아웃</R.Go4><R.Go4Btn><img
                    src={`${process.env.PUBLIC_URL}/images/Go.png`}
                    width="33px"
                 /></R.Go4Btn>
                </R.Box2>
                </R.Box3>
              </R.Background>
    );
}

export default MyPage;
