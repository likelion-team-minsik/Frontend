import { styled } from "styled-components";

export const Background = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    height: 100vh; /* 화면 전체 높이로 지정 */

    justify-content: center;

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

    margin-top: 7.5px;
    margin-right: 15px;
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

/*여기부터 백버튼 + 작성한 글 + 돋보기*/
export const Box1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 16px;
    margin-right: 15px;

    width: 343px;
`;

export const BackBtn = styled.div`
`;

export const Title = styled.div`
color: #000;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 31.2px */

margin-right: 170px;
`;

export const Glass = styled.div`
`;

/*여기까지~*/

export const PostBoxOfBox = styled.div`

    margin-top: 5px;

    width:393px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const PostBox = styled.div`
width: 280px;
border-bottom: 0.5px solid black;
padding: 30px;


margin-left: 29px;
`;

/*박스2에 프로필프레임 프로필사진 이름 시간*/
export const Box2 = styled.div`

    width: 393px;
    display: flex;
    flex-direction: row;
    margin-left: -30px;
`;

export const Frame = styled.div`
    position: relative;
`;

export const Inpro = styled.div`
    postion: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-150%, 30%);

    index: 999;
`;
/*박스3에 이름 시간 세로로*/
export const Box3 = styled.div`
    display: flex;
    gap: 7px;
    margin-top: 5px;
    margin-top: 5px;
    margin-left: -15px;

    flex-direction: column;
    width: 200px;
    height: 20px;
`; 

export const Name = styled.div`
color: #000;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 20.8px */
`;

export const Time =styled.div`
color: #676767;
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: 130%; /* 15.6px */
`;

export const PostTitle =styled.div`
color: #000;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 130%;
margin-top: 10px;
margin-left: -28px;
`;

export const Content = styled.div`

color: #000;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 130%; /* 20.8px */

margin-top: 10px;
margin-left: -28px;
`;

/*여기까지*/



