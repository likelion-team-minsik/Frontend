import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: #fff;
`;

export const IllustBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
`;

export const Menu = styled.div`
  position: absolute;
  top: 15px;
  right: 30px;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  position: absolute;
  z-index: 3;
  top: -20px;
  right: 0;
  width: 285.558px;
  height: 671.5px;
  flex-shrink: 0;

  #menu1 {
    width: 90%;
    position: absolute;
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    top: 190px;
    cursor: pointer;
  }

  #menu2 {
    width: 90%;
    position: absolute;
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    top: 260px;
    cursor: pointer;
  }

  #menu3 {
    width: 90%;
    position: absolute;
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    top: 330px;
    cursor: pointer;
  }

  #menu4 {
    width: 90%;
    position: absolute;
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    top: 400px;
    cursor: pointer;
  }

  #menu5 {
    width: 90%;
    position: absolute;
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    top: 470px;
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;
