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

    position: relative;
   
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


export const SearchBtn = styled.div `
    color: black;
    height: 27px;

    margin-top: -10px;
    margin-left: 270px;
`;

export const SearchArea = styled.textarea`
    background: transparent;   
    border: none;           
    outline: none;             

    width: 333px;

    color: #CCC;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    resize: none;
    padding-left: 0;

    position: absolute;
    z-index: 999;
`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 10px;
    width: 333px;
    height: 50px;

    border-bottom: 0.5px solid #000;
    background: #FFF;
    padding: 13px;
    justify-content: space-between;

`;

export const Box2 = styled.div`
    display: flex; 
    margin-top: 20px;
    justify-content: flex-start;

    width: 393px;

`;

export const Recent = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */


    margin-left: 30px;

`;

export const Block = styled.div`

    display: flex;
    padding: 6.51px 13px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 5px;
    background: #F0F0F0;

    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const BlockBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 10px;
    margin-top: 10px;

    width: 333px;

`;

export const BackImg = styled.div`

    width: 393px;
    height: 100%;
    background-image: url('/images/BackImg1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: absolute;

    top: 200px;
    left: 50%;     
    width: 393px;
    height: 100vh;

     transform: translateX(-50%);

`;