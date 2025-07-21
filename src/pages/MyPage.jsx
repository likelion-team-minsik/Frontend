import React, { useState, useRef, useEffect } from "react";
import * as R from "../styles/StyledMyPage";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import axios from "axios";

function MyPage() {
  // 드롭다운 상태
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState({ profile_image: null, nickname: "" });
  const [newNickName, setNewNickName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  //프로필 조회
  useEffect(() => {
    const profileUpdate = async () => {
      const token = localStorage.getItem("authToken"); // 토큰 불러오기
      if (!token) {
        navigate("/login"); // 토큰 없으면 로그인 페이지로 이동
        return;
      }

      try {
        const response = await axios.get("/profile/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setProfile(response.data); //현재 프로필 데이터
        setNewNickName(response.data.nickname || ""); //닉네임 입력 초기화
      } catch (err) {
        //에러 발생 시 토큰 삭제 -> 로그인 페이지 이동
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("authToken");
          navigate("/login");
        }
      }
    };
    profileUpdate();
  }, [navigate]);

  //프로필 수정
  const handleProfile = async ({
    nicknameUpdate = null,
    newProfileImage = null,
    defaultProfileImage = null,
  }) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const formData = new FormData();

      //기존 닉네임과 다를 경우에 (새로 닉네임 입력한 경우) 폼데이터에 추가
      if (nicknameUpdate !== null && nicknameUpdate !== profile.nickname) {
        formData.append("nickname", nicknameUpdate);
      } else if (nicknameUpdate === null && profile.nickname !== null) {
        //새로운 닉네임으로 업데이트 안된 경우도 기존 닉네임 데이터에 추가
        formData.append("nickname", profile.nickname);
      }

      //프로필 이미지
      if (newProfileImage) {
        formData.append("profile_image", newProfileImage);
      } else if (defaultProfileImage) {
        //기본 앱 이미지 선택의 경우
        formData.append("profile_image", defaultProfileImage);
      }

      //닉네임, 이미지 안 바뀌는 경우(formData에 아무것도 append x)
      if (Array.from(formData.keys()).length === 0) return;

      const response = await axios.put("/profile/", formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setProfile(response.data); //업데이트된 최신 프로필로 업데이트
      setNewNickName(response.data.nickname || "");
      setDropdownOpen(false); //업데이트 후 드롭다운 닫기
    } catch (err) {
      alert("오류가 발생했습니다.");
    }
  };

  //로그아웃
  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await axios.post("/rest-auth/logout/", null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      localStorage.removeItem("authToken"); //로컬 스토리지서 토큰 삭제
      navigate("/TamcleTalk3");
    } catch (err) {
      localStorage.removeItem("authToken");
      alert("오류가 발생했습니다.");
      navigate("/TamcleTalk3");
    } finally {
      setShowModal(false); //모달 닫기
    }
  };

  const goMenu = () => setMenuOpen((prev) => !prev);

  const goMain = () => {
    navigate(`/`);
  };

  // 플러스 버튼 클릭 시 토글 함수
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const fileInputRef = useRef(null);
  // 카메라 이미지 클릭 시 파일 선택창 열기
  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 선택 후 처리 (예: 업로드 등)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleProfile({
        newProfileImage: file,
        nicknameUpdate: profile.nickname,
      });
      // 여기서 파일 업로드 로직 추가 가능
    }
    setDropdownOpen(false);
  };

  //기본 프로필 이미지 선택
  const handleDefaultImage = (image) => {
    handleProfile({
      defaultProfileImage: image,
      nicknameUpdate: profile.nickname,
    }); //닉네임은 현재값 유지
    setDropdownOpen(false);
  };

  //닉네임 입력값 변경될 때마다 업데이트
  const handleNickname = (e) => {
    setNewNickName(e.target.value);
  };

  //닉네임 저장
  const nicknameSave = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") {
      //인풋에서 포커스 x , 엔터키 눌렀을 시 저장
      return;
    }

    //닉네임이 기존과 다를경우만!!
    if (newNickName !== profile.nickname) {
      handleProfile({ nicknameUpdate: newNickName });
    }
  };

  //현재 프로필 이미지 URL 결정 로직 (표시용)
  const currentProfileImageUrl = profile.profile_image
    ? profile.profile_image
    : `${process.env.PUBLIC_URL}/images/Inpro.png`; // 기본 이미지

  const confirmLogout = () => {
    // 로그아웃 로직
    setShowModal(false);
  };

  const cancelLogout = () => {
    setShowModal(false);
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
        <R.Box1>
          <R.MyPageWord>마이페이지</R.MyPageWord>
        </R.Box1>
        <R.ProfileFrame>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}
            width=" 126px"
          />
        </R.ProfileFrame>
        <R.InPro>
          {" "}
          <img src={currentProfileImageUrl} width=" 68.03999px" />
        </R.InPro>
        <R.Plus onClick={toggleDropdown}>
          <img
            src={`${process.env.PUBLIC_URL}/images/Plus.png`}
            width=" 39px"
            alt="플러스 이미지"
          />
        </R.Plus>

        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {/* 드롭다운 이미지 영역 - dropdownOpen이 true일 때만 보이도록 */}
        {dropdownOpen && (
          <R.DropdownContainer>
            <R.Camera onClick={handleCameraClick}>
              <img
                src={`${process.env.PUBLIC_URL}/images/Camera.png`}
                width="28.483px"
              />
            </R.Camera>
            <R.DropFrame1 onClick={handleCameraClick}>
              <img
                src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}
                width="60px"
              />
            </R.DropFrame1>
            <R.DropPro
              onClick={() =>
                handleDefaultImage(
                  `${process.env.PUBLIC_URL}/images/InPro2.png`
                )
              }
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/InPro2.png`}
                width="28.483px"
              />
            </R.DropPro>
            <R.DropFrame
              onClick={() =>
                handleDefaultImage(
                  `${process.env.PUBLIC_URL}/images/InPro2.png`
                )
              }
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}
                width="60px"
              />
            </R.DropFrame>
            <R.DropFrame2
              onClick={() =>
                handleDefaultImage(
                  `${process.env.PUBLIC_URL}/images/InPro3.png`
                )
              }
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}
                width="60px"
              />
            </R.DropFrame2>
            <R.DropPro2
              onClick={() =>
                handleDefaultImage(
                  `${process.env.PUBLIC_URL}/images/InPro3.png`
                )
              }
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/InPro3.png`}
                width="28.483px"
              />
            </R.DropPro2>
            <R.DropFrame3
              onClick={() =>
                handleDefaultImage(
                  `${process.env.PUBLIC_URL}/images/InPro4.png`
                )
              }
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/ProfileFrame.png`}
                width="60px"
              />
            </R.DropFrame3>
            <R.DropPro3
              onClick={() =>
                handleDefaultImage(
                  `${process.env.PUBLIC_URL}/images/InPro4.png`
                )
              }
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/InPro4.png`}
                width="28.483px"
              />
            </R.DropPro3>
          </R.DropdownContainer>
        )}

        <R.Box1>
          <R.Nick>닉네임</R.Nick>
        </R.Box1>
        <R.Box1>
          <R.NickInput
            placeholder="닉네임 입력(2~10자)"
            value={newNickName} //닉네임 상태와 연결
            onChange={handleNickname} //입력 변경 핸들러
            onBlur={nicknameSave} //포커스 잃을 때 저장
            onKeyDown={nicknameSave} //엔터키 눌러도 저장
          />
        </R.Box1>
      </R.BackBox>
      <R.Box3>
        <R.Box2 onClick={() => navigate("/MyPost")}>
          <R.Go1>작성한 글</R.Go1>
          <R.Go1Btn>
            <img src={`${process.env.PUBLIC_URL}/images/Go.png`} width="33px" />
          </R.Go1Btn>
        </R.Box2>
        <R.Box2 onClick={() => navigate("/MyComment")}>
          <R.Go2>댓글 단 글</R.Go2>
          <R.Go2Btn>
            <img src={`${process.env.PUBLIC_URL}/images/Go.png`} width="33px" />
          </R.Go2Btn>
        </R.Box2>
        <R.Box2 onClick={() => navigate("/MyScrap")}>
          <R.Go3>스크랩한 글</R.Go3>
          <R.Go3Btn>
            <img src={`${process.env.PUBLIC_URL}/images/Go.png`} width="33px" />
          </R.Go3Btn>
        </R.Box2>
        <R.Box2 onClick={() => setShowModal(true)}>
          {" "}
          <R.Go4>로그아웃</R.Go4>
          <R.Go4Btn>
            <img src={`${process.env.PUBLIC_URL}/images/Go.png`} width="33px" />
          </R.Go4Btn>
        </R.Box2>
      </R.Box3>

      {showModal && (
        <R.ModalOverlay>
          <R.ModalContent>
            <R.LogoImg
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              alt="로고"
              width="80.288px"
            />
            <R.ModalText>로그아웃 하시겠습니까?</R.ModalText>
            <R.HorizontalLine />
            <R.ButtonRow>
              <button onClick={handleLogout}>예</button>
              <div className="v-line" />
              <button onClick={cancelLogout}>아니오</button>
            </R.ButtonRow>
          </R.ModalContent>
        </R.ModalOverlay>
      )}
    </R.Background>
  );
}

export default MyPage;
