import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 2739px;
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
  z-index: 1;

  #titleText1 {
    color: #ff5773;
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    position: absolute;
    top: 41px;
    left: 65px;
  }

  #titleText2 {
     color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; 
    position: absolute;
    top: 60px;
    right: 57px;
`;

export const Section = styled.div`
  position: relative;
  margin-left: 31px;
  margin-right: 31px;
  margin-bottom: 55px;
`;

export const Title1 = styled.div`
  position: relative;
  color: #000;
  font-family: Pretendard;
  font-size: 15.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  display: flex;
  top: 45px;
  gap: 8px;
`;

export const SearchImage = styled.div`
  position: relative;
  margin-top: 45px;
`;

export const SubText = styled.div`
  display: flex;
  gap: 115px;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

export const Detail = styled.div`
  width: 334px;
  height: 78px;
  flex-shrink: 0;
  stroke-width: 0.5px;
  stroke: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  z-index: 1;
  top: 50px;

  #detailText {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12.5px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    top: 10px;
    z-index: 2;
    position: absolute;
  }
`;

export const Title2 = styled.div`
  position: relative;
  color: #000;
  font-family: Pretendard;
  font-size: 15.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  display: flex;
  top: 45px;
  margin-bottom: 50px;
`;

export const SubText2 = styled.div`
  display: flex;
  gap: 128px;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

export const Detail2 = styled.div`
  width: 334px;
  height: 78px;
  flex-shrink: 0;
  stroke-width: 0.5px;
  stroke: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  z-index: 1;
  top: 50px;

  #detailText {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12.5px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    top: 18px;
    z-index: 2;
    position: absolute;
  }
`;

export const SubText3 = styled.div`
  display: flex;
  gap: 112px;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

export const SubText4 = styled.div`
  display: flex;
  gap: 115px;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
