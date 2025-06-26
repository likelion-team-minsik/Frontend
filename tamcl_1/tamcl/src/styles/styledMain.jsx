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
  top: -5px;
  right: 30px;
  cursor: pointer;
`;
