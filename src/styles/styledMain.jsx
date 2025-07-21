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
  top: 19px;
  margin-left: 30px;
  flex-shrink: 0;
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
  top: 5px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;
