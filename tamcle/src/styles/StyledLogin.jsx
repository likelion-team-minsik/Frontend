import { styled } from "styled-components";

export const Background = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    height: 100vh; /* 화면 전체 높이로 지정 */

    justify-content: center;

    position: relative;
`;

export const BackBox = styled.div`

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

`;


export const PicLogo = styled.div`
    width: 40px;
    height: 43.556px;
    color: #000000;
`;

export const BackImg = styled.div`

    width: 393px;
    height: 100%;
    background-image: url('/images/BackImg2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: absolute;

    top: 140px;
    left: 50%;     
    width: 393px;
    height: 100vh;

     transform: translateX(-50%);
`;

export const WordLogoBig = styled.div`

    margin-top: 80px;
`;

export const Box1 = styled.div`
    display:flex;
    width: 333px;
    flex-direction: column;

    margin-top: 40px;
    gap: 10px;

    position: relative;
    z-index: 999;
`; 
export const Id = styled.div`
color: #000;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 20.8px */

`;

export const IdInput = styled.input`
display: inline-flex;
height: 54px;
padding-left: 10px;
align-items: center;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #000;
background: #FFF;
  width: 333px;
`;

export const Key = styled.div`
color: #000;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 20.8px */
`;

export const KeyInput = styled.input`
display: inline-flex;
height: 54px;

align-items: center;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #000;
background: #FFF;

padding-left: 10px;

  width: 333px;

`;

export const LoginBtn = styled.div`

     width: 333px;
    box-sizing: border-box;

    padding: 12px;
    margin-top: 190px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    border: 1px solid #000;

    margin-top: 190px;

    position: relative;
    z-index: 999;
`;

export const Find = styled.div`
color: #676767;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 130%; /* 18.2px */

margin-top: 50px;
`;
