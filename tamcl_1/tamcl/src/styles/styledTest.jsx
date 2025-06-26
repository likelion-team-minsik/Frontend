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
  justify-content: center;
  flex-direction: column;

  #title {
    position: absolute;
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    top: 255px;
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

export const TestBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: right;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  border-radius: 10px;
  border: 1.8px solid #000;
  position: absolute;
  bottom: 383px;
  width: 193px;
  height: 50px;
  cursor: pointer;
`;
