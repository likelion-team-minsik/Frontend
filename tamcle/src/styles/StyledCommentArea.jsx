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
    
    gap: 35px;

`;

export const TopLogo = styled.div` 
    /* 이것도 박스 */

    margin-top: 15px; /*메인 화면(기준)이랑 기본 마진 적용이 다르길래 수정함*/ 
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

export const PostBox = styled.div`

    display: flex;
    flex-direction: column;

    gap: 10px;

    height: 170px;

    padding: 16px;

    width: 333px;
`;

export const Underline1 = styled.div`

`;

export const Underline2 = styled.div`

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
=
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
    

    top: 56%;
    left: 53%;
    transform: translate(-56%, -53%);
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


export const CommentBox = styled.div`
 
    
    gap: 35px;

    width: 333px;

    height: calc(100vh - 220px);
    display: flex;
    flex-direction: column;


    margin: 0 auto;


`;

export const Comment = styled.div`
       
    display: flex;
    flex-direction: column;

    min-height: 170px; 

    padding: 16px;

    width: 333px;

    gap: 10px;

    box-sizing: border-box;

`;

export const CommentAuthor = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
`;

export const CommentContent = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 20.8px */
`;

export const CommentTime = styled.div`
    color: #676767;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 15.6px */

`;

export const CommentImg = styled.div`
`;

export const GrayHeart = styled.div`
`;

export const AddComment = styled.h1`
    color: #676767;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 15.6px */

    margin-left: 30px;
    margin-top: 0.75px;
`;


export const Box6 = styled.div`
    display: flex;
    flex-direction: row;

    width: 333px;
    height: 20px;
`;

export const GrayHeartNum = styled.div`
    width: 8px;
    height: 15px;
    flex-shrink: 0;

    color: #676767;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 15.6px */
    margin-bottom: 0.6px;
`;

export const AddBox = styled.div`

    width: 333px;
    height: 56px;
    flex-shrink: 0;

    display: flex; 
    flex-direction: row;
    align-items: center;
    gap: 10px;

    position: absolute;
    top: 0px;
    left: 0px;

  
`;

export const CommentRec = styled.div`
    position: relative;
    position: fixed;
    bottom: 0;
    width: 393px;
`;

export const CommentVar = styled.div`

    

`;

export const Camera = styled.div`
    margin-left: 10px;
   
`;