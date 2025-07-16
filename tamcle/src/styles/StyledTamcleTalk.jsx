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

export const TamcleTalkImg = styled.div  `
    color: black;
    height: 31px;

    margin-bottom: 8px;
    margin-left: 2px;
`;

export const SearchBtn = styled.div `
    color: black;
    height: 27px;

    margin-bottom: 15px;
    margin-right: 2px;
`;

export const OneBox = styled.div`
    display: flex;
    flex-direction: row;

    width: 333px;
    height: 72px;

    justify-content: space-between;
    margin-left: 15px; /*위치 맞추기*/

    align-items: flex-end; /* 자식들을 아래 정렬 */
`;


export const BlockBox = styled.div`
    width: 333px;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
    gap: 10px;
`;

export const Block1 = styled.div`

`;

export const Block2 = styled.div`

`;

export const Block3 = styled.div`


`;
export const Block4 = styled.div`


`;
export const Block5 = styled.div`


`;

export const PostBox = styled.div`

    display: flex;
    flex-direction: column;

    gap: 10px;

    height: 170px;

    padding: 16px;

    width: 333px;
    box-sizing: border-box;
`;

export const Underline1 = styled.div`
  border-bottom: 0.5px solid #FE2C5D;
  width: 333.006px;
  margin-top: 15px;
`;

export const Underline2 = styled.div`
  border-bottom: 0.5px solid  #FEC837;
  width: 333.006px; 
  margin-top: 15px;
`;

export const Profile = styled.div`

    width: 50px;
    height: 50px;
    flex-shrink: 0;

    position: relative;

`;

export const Author = styled.div`

    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
`;

export const Time = styled.div`
    color: #676767;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 15.6px */
`;

export const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
`;

export const Content = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 20.8px */
`;

export const Box1 = styled.div`
    display: flex;

    flex-direction: row;

    width: 333px;
    height: 50px;
    
    align-items: center;

    gap: 10px;

    
    width: 100%;
    box-sizing: border-box;

`;

export const Box2 = styled.div`
    display: flex;

    flex-direction: column;

    gap: 5px;
`;

export const InPro = styled.div`

    position: absolute;

    width: 27px;
    height: 24.923px;
    flex-shrink: 0;
    

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const InPro2 = styled.div`

    position: absolute;

    width: 27px;
    height: 24.923px;
    flex-shrink: 0;
    

  
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Box3 = styled.div`
    width: 333px;
    height: 91px;

    display: flex;
    gap: 7px;
    flex-direction: column;
`;

export const Box4 = styled.div`
    display: flex;
    gap: 5px;

    align-items: center;

    margin-left: auto;
`;

export const CommentIcon = styled.div`

    position: relative;

    height: 32px;

    margin-top: 7px;
    margin-right: 6px;
`;

export const CommentNum = styled.div`

    position: absolute;

    width: 8px;
    height: 14.56px;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 15.6px */

    top: 28%;
    left: 45%;
    transform: translate(-28%, -45%);
`;

export const HeartIcon = styled.div`
    position: relative;

    height: 30px;
`;


export const HeartIcon2 = styled.div`
    position: relative;

    height: 30px;
`;

export const HeartNum = styled.div`
    position: absolute;

    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 15.6px */

    top: 78%;
    left: 118%;
    transform: translate(-78%, -118%);
`;

export const BookIcon = styled.div`

    height: 35px;
`;

export const PostBoxOfBox = styled.div`
    width: 333px;

    box-sizing: border-box;
    height: calc(100vh - 220px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 40px;
    
    margin: 0 auto;
`;

export const AddContent = styled.div`
`;

export const MyPage = styled.div`
`;

export const Box5 = styled.div`

    width: 333px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: -15px;

    position: fixed;
    z-index: 99999;
    bottom: 0;
`;