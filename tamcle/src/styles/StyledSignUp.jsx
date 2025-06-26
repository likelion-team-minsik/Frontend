import { styled } from "styled-components";


export const BackImg = styled.div`
    width: 393px;
    height: 100%;
    background-image: url('/images/BackImg2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: absolute;

    top: 170px;
    left: 50%;     
    width: 393px;
    height: 100vh;

     transform: translateX(-50%);
`;

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

    margin-top: 14px;

    margin-right: 16px;
    
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

export const Title = styled.div`

color: #000;
font-family: Pretendard;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 31.2px */

width: 333px;

margin-top: 30px;
`;


export const CenterLogo = styled.div`
    
`;

export const Box1 = styled.div`

    height: 852px;
    width: 393px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;



`;

export const No = styled.div`

    display: flex;
    width: 140px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 10px;
    border: 1px solid #000;

    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Good = styled.div`

   display: flex;
    width: 140px;
    padding: 14px;
    justify-content: center;
    align-items: center;
  

    border-radius: 10px;
    border: 1px solid #000;

    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    position: relative;  /* 인덱스 쓰려면 relative 필요 */
     z-index: 10;         /* z-index로 클릭 가능하게 올리기 */
`;

export const Box2 = styled.div`
    display: flex;
    flex-direction: row;

    gap: 10px;

    margin-bottom: -40px;

`;