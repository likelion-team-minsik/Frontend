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

    margin-right: 16px;/*메인이랑 맞추기*/
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

export const Sign = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */

    width: 333px;

    margin-top: 35px;
`;

export const Id = styled.div`

    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */


`;

export const IdBox = styled.textarea`

    margin-top: 10px;

    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    background: transparent;  /* 배경 투명 */
    border: none;             /* 테두리 제거 */
    border-bottom: 0.5px solid #000;
    outline: none;            /* 포커스 테두리 제거 */
    resize: none;             /* 크기 조절 바 제거 */

    width: 325px;

    position: relative;
`;

export const Check = styled.div `

    display: inline-flex;
    padding: 7px 13px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 10px;
    background: #F0F0F0;

    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    width: 78px;
    height: 33px;

    position: absolute;
    top: 175px;
    right: 525px;
`;

export const Key = styled.div`

    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */

    margin-top: 10px;
`;

export const KeyBox = styled.textarea`

    margin-top: 10px;

    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    background: transparent;  /* 배경 투명 */
    border: none;             /* 테두리 제거 */
    border-bottom: 0.5px solid #000;
    outline: none;            /* 포커스 테두리 제거 */
    resize: none;             /* 크기 조절 바 제거 */

    width: 325px;
`;

export const ReKey = styled.div`

  color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */

    margin-top: 10px;
`;

export const ReKeyBox = styled.textarea`

    margin-top: 10px;

    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    background: transparent;  /* 배경 투명 */
    border: none;             /* 테두리 제거 */
    border-bottom: 0.5px solid #000;
    outline: none;            /* 포커스 테두리 제거 */
    resize: none;             /* 크기 조절 바 제거 */

    width: 325px;
`;

export const Name = styled.div`

  color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */

    margin-top: 10px;
`;

export const NameBox = styled.textarea`

    margin-top: 10px;

    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    background: transparent;  /* 배경 투명 */
    border: none;             /* 테두리 제거 */
    border-bottom: 0.5px solid #000;
    outline: none;            /* 포커스 테두리 제거 */
    resize: none;             /* 크기 조절 바 제거 */

    width: 325px;
`;

export const Phone = styled.div`

  color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */

    margin-top: 10px;
`;

export const PhoneBox = styled.textarea`

    margin-top: 10px;

    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    background: transparent;  /* 배경 투명 */
    border: none;             /* 테두리 제거 */
    border-bottom: 0.5px solid #000;
    outline: none;            /* 포커스 테두리 제거 */
    resize: none;             /* 크기 조절 바 제거 */

    width: 325px;
`;

export const Mail = styled.div`
  color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */

    margin-top: 10px;
`;
export const Box1 = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 40px;
    margin-left: 9px;

    gap: 2px;
`;

export const MailBox = styled.textarea`

    margin-top: 10px;

    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    background: transparent;  /* 배경 투명 */
    border: none;             /* 테두리 제거 */
    border-bottom: 0.5px solid #000;
    outline: none;            /* 포커스 테두리 제거 */
    resize: none;             /* 크기 조절 바 제거 */

    width: 130px;
`;


export const AtIcon = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */
`;


export const DomainSelect = styled.select`
 
    color: #676767;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 18.2px */

    background: transparent;  /* 배경 투명 */
    border: none;             /* 테두리 제거 */
    border-bottom: 0.5px solid #000;
    outline: none;            /* 포커스 테두리 제거 */
    cursor: pointer;

    width: 130px;
`;

export const Box2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
 

    gap: 27.5px;
`;

export const DoneBtn = styled.div`

    display: flex;
    width: 334px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 10px;
    border: 1px solid #000;

    margin-top: 30px;
    margin-left: 10px;

    width: 330px;
`;