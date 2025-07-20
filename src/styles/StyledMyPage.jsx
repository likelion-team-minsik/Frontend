import { styled } from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이로 지정 */

  justify-content: center;
`;

export const BackBox = styled.div`
  margin: 0 auto;
  position: relative;
  width: 393px;
  height: 100vh;

  display: flex;
  align-items: center; /* 수평 중앙 정렬 */
  flex-direction: column;
`;

export const TopLogo = styled.div`
  /* 이것도 박스 */

  display: flex;
  flex-direction: row;

  width: 333px;
  height: 72px;

  justify-content: space-between;
  align-items: center;
`;

export const WordLogo = styled.div`
  height: 27px;
  border-width: 0.5px;

  width: 161.125px;
  flex-shrink: 0;
  margin-left: -3.5px;
`;

export const PicLogo = styled.div`
  width: 40px;
  height: 43.556px;
  color: #000000;
  cursor: pointer;
`;

export const MyPageWord = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
`;

export const ProfileFrame = styled.div`
  margin-top: 30px;
  width: 126px;
  height: 126px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // 이미지 크기 맞추면서 자르기
    border-radius: 50%;
  }
`;

export const InPro = styled.div`
  margin-top: -100px;
`;

export const Plus = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 끝 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 20px; /* 여백 조절 */

  margin-top: -30px;
  margin-left: 65px;
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

export const Nick = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 26px */
`;

export const NickInput = styled.input`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  background-color: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  border-bottom: 0.5px solid #000;
  outline: none; /* 포커스 테두리 없앰 */
  width: 320px;
  display: inline-flex;
  padding-bottom: 15px;
  align-items: center;
  flex-shrink: 0;
  margin-top: 17px;

  &::placeholder {
    color: #676767;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 20.8px */
  }
`;

export const Box1 = styled.div`
  display: flex;
  width: 393px;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 75px;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  width: 333px;

  align-items: center;
`;
export const Box3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 333px;
  height: 100vh;
  gap: 10px;
  margin-left: 12px;
  bottom: 20px;
`;

export const Go1 = styled.div``;

export const Go2 = styled.div``;

export const Go3 = styled.div``;

export const Go4 = styled.div``;

export const Go1Btn = styled.div``;

export const Go2Btn = styled.div``;

export const Go3Btn = styled.div``;

export const Go4Btn = styled.div``;

export const DropdownContainer = styled.div`
  position: fixed;

  left: 50%;

  margin-top: 450px;

  width: 393px;
  height: 125px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  z-index: 1;

  /* 초기 상태: 가로 중앙, 아래로 숨김 */
  transform: translateX(-50%) translateY(100%);

  /* 드롭다운 열렸을 때: translateY만 0으로 바꿈 */
  &.open {
    transform: translateX(-50%) translateY(0);
  }

  border-top: 0.5px solid #ccc;
  background: #fff;

  gap: 20px;
`;

export const DropFrame = styled.div`
  position: relative;
`;

export const DropPro = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  /* 자식 크기만큼 자신의 중앙을 기준으로 이동 */
  transform: translate(-190%, -50%);
`;

export const DropFrame2 = styled.div`
  position: relative;
`;

export const DropPro2 = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  /* 자식 크기만큼 자신의 중앙을 기준으로 이동 */
  transform: translate(85%, -50%);
`;

export const Camera = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  /* 자식 크기만큼 자신의 중앙을 기준으로 이동 */
  transform: translate(-465%, -50%);

  z-index: 2;
`;

export const DropFrame1 = styled.div`
  position: relative;
`;

export const DropFrame3 = styled.div`
  position: relative;
`;

export const DropPro3 = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  /* 자식 크기만큼 자신의 중앙을 기준으로 이동 */
  transform: translate(380%, -50%);
`;

export const BackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 276.834px;
  height: 137px;
  flex-shrink: 0;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalText = styled.div`
  padding: 20px 0 15px;

  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
`;

export const HorizontalLine = styled.div`
  height: 0.5px;
  background-color: #000;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: stretch; // 버튼과 선이 높이 맞춰지도록!
  height: 50px;

  button {
    flex: 1;
    border: none;
    background: none;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }

  .v-line {
    width: 0.5px;
    background-color: #000;
  }
`;

export const LogoImg = styled.img`
  margin-top: 27.55px;
  margin-bottom: -13px;
`;
