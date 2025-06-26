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

export const Word = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */

    margin-top: 22px;
    margin-left: 5px; /*위 로고랑 맞추기*/
`;

export const Box1 = styled.div`
    width: 333px;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
`;

export const X = styled.div`
`;

// 제목 입력창
export const TitleInput = styled.input`
    width: 333px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    outline: none;
    background: transparent;
    padding: 8px 0;

    color: #676767;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 20.8px */


    border-bottom: 0.5px solid #000;
    padding-bottom: 12px;  

    position: relative; z-index: 10;
`;

// 내용 입력창
export const ContentTextarea = styled.textarea`
    width: 333%;
    font-size: 16px;
    font-weight: 300;
    border: none;
    outline: none;
    background: transparent;
    resize: none;
    padding: 8px 0;
    line-height: 1.5;

    color: #676767;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 20.8px */

    position: relative; z-index: 10;
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
    font-weight: 500;
    line-height: 130%; /* 20.8px */

    margin-top: 20px;
`;

export const Box2 = styled.div`
    margin-top: 40px;

    display: flex;
    flex-direction: column;

    width: 333px;
    gap: 5px;
    align-items: flex-start;

    margin-left: 17px; /*위 로고랑 맞추기*/

`;

export const Camera = styled.div`
    justify-content: flex-start;

    margin-left: 20px;
`;

export const Box4 = styled.div`
    position: absolute;
    bottom: 80px;     
          
    width: 333px;   

   
    display: flex;
    justify-content: space-between;

`;

export const Box3 = styled.div`
    display: flex;
    height: 100vh;
    width: 333px;

    justify-content: center;
    align-items: flex-end;


    position: absolute;
      

`;

export const DoneBtn = styled.div`

    display: flex;
    width: 333px;
    height: 50px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-left: 30px;
`;

export const Counter = styled.div`
    color: #CCC;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 20.8px */


`;