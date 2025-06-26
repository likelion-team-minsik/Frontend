import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as R from "../styles/StyledQnA";

function QnA(){

    const [OpenIndex, setOpenIndex] = useState(null)

    
    const toggleAnswer = (index) => {
      setOpenIndex(OpenIndex === index ? null : index);
      /*지금 열려 있는 질문(openIndex)이 방금 클릭한 질문 번호(index) 와 같다면 → null, 다르면 열기 */
    };

    return(
        <R.Background>
                <R.BackBox>
              <R.TopLogo>
                <R.WordLogo>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Word.png`}
                    alt="왼쪽 상단 글자 로고입니다."
                    width=" 161.125px"
                  />
                </R.WordLogo>
                <R.PicLogo>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Pic.png`}
                    alt="오른쪽 상단 그림 로고입니다."
                    width="40px"
                  />
                </R.PicLogo>
              </R.TopLogo>
              <R.Box1>
              <R.Q1 onClick={()=> toggleAnswer(1)}><span>1. </span>탐클은 무엇인가요?</R.Q1>
                  {OpenIndex === 1 && (
            <R.Answer>탐클은 입문자가 쉽고 재미있게 클라이밍을 시작하고 꾸준히 즐길 수 있도록, 나에게 딱 맞는 스타일과 루트, 추천 장비 등의 정보를 제공하는 웹 사이트입니다.</R.Answer>
              )}
              <R.Q2 onClick={()=> toggleAnswer(2)}><span>2. </span>클라이밍이 뭐예요? 어떻게 시작하나요?</R.Q2>
              {OpenIndex === 2 && ( 
                <R.Answer>클라이밍은 벽이나 암벽을 손과 발을 이용해 올라가는 스포츠입니다. 처음엔 실내 암벽장(암벽 체육관)부터 시작하는 게 좋아요.</R.Answer>
              )}
              <R.Q3 onClick={()=> toggleAnswer(3)}><span>3. </span>필요한 장비는 뭐가 있나요</R.Q3>
               {OpenIndex === 3 && ( 
                <R.Answer>기본적으로 클라이밍화, 초크(손에 땀을 줄여주는 가루), 하네스(안전벨트), 로프가 필요하지만, 볼더링은 클라이밍화와 초크만 있으면 충분한 경우가 많아요.</R.Answer>
              )}
              <R.Q4 onClick={()=> toggleAnswer(4)}><span>4. </span>클라이밍화는 어떻게 고르나요?</R.Q4>
               {OpenIndex === 4 && ( 
                <R.Answer>발에 딱 맞게 너무 크거나 작지 않은 걸로 선택하세요. 처음엔 편한 착용감을 주는 걸 추천합니다.</R.Answer>
              )}
              <R.Q5 onClick={()=> toggleAnswer(5)}><span>5. </span>초크는 왜 필요한가요?</R.Q5>
               {OpenIndex === 5 && ( 
                <R.Answer>손에 땀이 나면 잡는 힘이 약해지기 때문에, 초크를 사용해 손을 건조하게 유지하면 그립이 좋아져요.</R.Answer>
              )}
              <R.Q6 onClick={()=> toggleAnswer(6)}><span>6. </span>클라이밍을 하면 어떤 근육이 발달하나요?</R.Q6>
               {OpenIndex === 6 && ( 
                <R.Answer>팔, 등, 복근, 다리 등 전신 근육이 발달하지만 특히 팔과 등 근육이 많이 쓰여요.</R.Answer>
              )}
              <R.Q7 onClick={()=> toggleAnswer(7)}><span>7. </span>부상 위험은 없나요? 어떻게 예방하나요?</R.Q7>
               {OpenIndex === 7 && ( 
                <R.Answer>무리한 동작이나 준비운동 부족이 부상을 초래할 수 있어요. 항상 워밍업과 스트레칭을 하고, 천천히 몸에 맞게 연습하세요.</R.Answer>
              )}
              <R.Q8 onClick={()=> toggleAnswer(8)}><span>8. </span>클라이밍 체력은 어떻게 키우나요?</R.Q8>
               {OpenIndex === 8 && ( 
                <R.Answer>꾸준한 클라이밍과 함께 근력 운동, 스트레칭, 유산소 운동을 병행하면 좋아요.</R.Answer>
              )}
              <R.Q9 onClick={()=> toggleAnswer(9)}><span>9. </span>실내 클라이밍과 야외 클라이밍은 어떻게 다른가요?</R.Q9>
               {OpenIndex === 9 && ( 
                <R.Answer>실내는 안전하고 날씨 영향을 받지 않으며, 다양한 난이도 코스가 준비돼 있어요. 야외는 자연 암벽에서 하며 더 위험하지만 자연과의 교감이 커요.</R.Answer>
              )}
              <R.Q10 onClick={()=> toggleAnswer(10)}><span>10. </span>초보자가 자주 하는 실수는 뭔가요?</R.Q10>
               {OpenIndex === 10 && ( 
                <R.Answer>팔 힘만 많이 쓰려 하고 다리 힘을 덜 쓰는 경우가 많아요. 다리를 적극 활용하는 것이 중요해요.</R.Answer>
              )}
              <R.Q11 onClick={()=> toggleAnswer(11)}><span>11. </span>혼자 연습해도 되나요?</R.Q11>
               {OpenIndex === 11 && ( 
                <R.Answer>처음엔 초보자는 안전을 위해 반드시 경험 있는 사람이나 강사와 함께 연습하는 걸 추천합니다</R.Answer>
              )}
              </R.Box1>
            </R.BackBox>
        </R.Background>
    );
}

export default QnA;