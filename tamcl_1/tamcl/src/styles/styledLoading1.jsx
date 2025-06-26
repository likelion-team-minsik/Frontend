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
  top: 300px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  background: linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
