import { styled } from "styled-components";

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

export const Bar1 = styled.div`
  width: 79px;
  height: 3px;
  flex-shrink: 0;
  background: #ff8b9a;
  position: absolute;
  z-index: 2;
  align-items: flex-start;
  left: 0px;
  top: 50px;
`;

export const Bar2 = styled.div`
  width: 79px;
  height: 3px;
  flex-shrink: 0;
  background: #8be6ff;
  position: absolute;
  z-index: 2;
  align-items: flex-start;
  left: 0px;
  top: 50px;
  margin-left: 79px;
`;

export const Bar3 = styled.div`
  width: 79px;
  height: 3px;
  flex-shrink: 0;
  background: #fff58b;
  position: absolute;
  z-index: 2;
  align-items: flex-start;
  left: 0px;
  top: 50px;
  margin-left: 158px;
`;

export const Bar4 = styled.div`
  width: 79px;
  height: 3px;
  flex-shrink: 0;
  background: #a88bff;
  position: absolute;
  z-index: 2;
  align-items: flex-start;
  left: 0px;
  top: 50px;
  margin-left: 237px;
`;

export const Bar5 = styled.div`
  width: 79px;
  height: 3px;
  flex-shrink: 0;
  background: #8bffc5;
  position: absolute;
  z-index: 2;
  align-items: flex-start;
  left: 0px;
  top: 50px;
  margin-left: 316px;
`;

export const TextGroup = styled.div`
  position: absolute;
  top: 160px;
  left: 80px;
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

  #optionA {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    top: 240px;
    margin-bottom: 29px;
    cursor: pointer;
  }

  #optionB {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 29px;
    cursor: pointer;
  }

  #optionC {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 29px;
    cursor: pointer;
  }

  #optionD {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
  }
`;

export const Illust = styled.div`
  width: 272px;
  height: 588.636px;
  flex-shrink: 0;
  aspect-ratio: 272/588.64;
  margin-top: 40px;
  right: 100px;
`;

export const Logo = styled.div`
  position: fix;
  margin-top: 20px;
  margin-left: 30px;
  z-index: 4;
`;

export const Menu = styled.div`
  position: absolute;
  top: -5px;
  right: 30px;
  cursor: pointer;
  z-index: 3;
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
