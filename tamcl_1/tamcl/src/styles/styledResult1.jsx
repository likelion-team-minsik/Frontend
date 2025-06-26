import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1684px;
  background: #fff;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  position: fix;
  margin-top: 20px;
  margin-left: 30px;
`;

export const Menu = styled.div`
  position: absolute;
  top: -5px;
  right: 30px;
  cursor: pointer;
`;

export const Title = styled.div`
  position: relative;
  stroke-width: 0.5px;
  stroke: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  top: 27px;
  margin-bottom:40px;
  z-index: 1;

  #titleText1 {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    position: absolute;
    top: 52px;
    left: 42px;
    
  }

  #titleText2 {
    color: #ff5773;
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    position: absolute;
    top: 33px;
    left: 108px;
  }

  #titleText3 {
     color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    position: absolute;
    top: 52px;
    right: 45px;
`;

export const Pic = styled.div`
  position: relative;
  top: 16px;
  z-index: 0;
`;

export const Frame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  top: 28px;
`;

export const TextBox1 = styled.div`
  display: flex;
  width: 320px;
  height: 118px;
  padding: 10px;
  justify-content: left;
  align-items: left;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 3.5px solid #ffabb9;
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 25px;

  #frameText {
    flex-direction: column;
    color: #000;
    font-family: Pretendard;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 200%;
    position: relative;
    top: 17px;
    left: 5px;
  }

  #highlight {
    background-color: #ffffc1;
    border-radius: 4px;
  }
`;

export const TextBox2 = styled.div`
  display: flex;
  width: 320px;
  height: 118px;
  padding: 10px;
  justify-content: left;
  align-items: left;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 3.5px solid #ffabb9;
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;

  #frameText {
    flex-direction: column;
    color: #000;
    font-family: Pretendard;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 200%;
    position: relative;
    top: 7px;
    left: 5px;
  }

  #space {
    margin-left: 14px;
  }

  #highlight {
    background-color: #ffffc1;
    border-radius: 4px;
  }
`;

export const Frame2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #introText {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    position: relative;
    top: 345px;
  }
`;

export const Dot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  top: 200px;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 200%;
`;

export const IntroBtn = styled.div`
  position: relative;
  display: flex;
  width: 267px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2.3px solid #000;
  color: #000;
  text-align: right;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  top: 355px;
  cursor: pointer;
`;

export const Post = styled.div`
  position: relative;
  top: 440px;
  width: 393px;
  height: 76px;
  flex-shrink: 0;
  background: #ff5773;

  #btnText {
    color: #fff;
    font-family: "SF Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    position: relative;
    top: 22px;
    left: 15px;
    display: flex;
    width: 260px;
    padding: 0px 31px 0px 15px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-right: 1px solid #fff;
  }
`;

export const ResetBtn = styled.div`
  position: absolute;
  right: 17px;
  top: 18px;
`;
