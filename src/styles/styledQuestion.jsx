import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: #fff;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const BarBox = styled.div`
  flex-shrink: 0;
  position: absolute;
  z-index: 2;
  align-items: flex-start;
  left: 0px;
  top: 70px;
  display: flex;
  width: 100%;
`;

export const Bar = styled.div`
  width: 20%;
  height: 3px;
  background: ${(props) => props.$barColor || "#ccc"};
  opacity: ${(props) =>
    props.$isActive ? 1 : 0}; /* 활성화 상태에 따라 투명도 조절 */
`;

export const TextGroup = styled.div`
  position: absolute;
  top: 160px;
  left: 30px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  z-index: 2;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    top: 160px;
    margin-bottom: 66px;
  }
`;

export const Option = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  top: 240px;
  margin-bottom: 29px;
  cursor: pointer;
`;

export const Illust = styled.div`
  width: 272px;
  height: 588.636px;
  flex-shrink: 0;
  aspect-ratio: 272/588.64;
  margin-top: 60px;
  right: 100px;
`;

export const Logo = styled.div`
  position: relative;
  top: 20px;
  margin-left: 30px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 14px;
  right: 30px;
  cursor: pointer;
  z-index: 2px;
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const LoadingTitle = styled.div`
  position: relative;
  top: 300px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.1)
  );
  background-size: 200% auto;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${shimmer} 2s linear infinite;
`;

export const BackBtn = styled.div`
  position: absolute;
  bottom: 230px;
  left: 20px;
  cursor: pointer;
  z-index: 3;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;
