import React, {useState} from "react";
import * as R from "../styles/StyledAddContent";

function AddContent() {
    
    const [text, setText] = useState("");
    
    const maxLength = 300; // 최대 글자수 제한

    const handleText = (e) => {
      if (e.target.value.length <= maxLength) {
        setText(e.target.value);
      }
    
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
            <R.Word>글쓰기</R.Word> <R.X><img src= {`${process.env.PUBLIC_URL}/images/X.png`} width="35px"/></R.X>
           </R.Box1> 

           <R.Box2>
           <R.Title>제목</R.Title>
           <R.TitleInput placeholder="제목을 입력해주세요"></R.TitleInput>
           <R.Content>내용</R.Content>
           <R.ContentTextarea placeholder="내용을 입력해주세요(최대 300자)" value={text} onChange={handleText}></R.ContentTextarea></R.Box2>
          
           <R.Box4><R.Camera><img src= {`${process.env.PUBLIC_URL}/images/Camera.png`} width="27.5px"/></R.Camera>
           {/* 글자수가 0보다 클 때만 보여줌 */}
          {text.length > 0 && (
            <R.Counter>
              {text.length} / {maxLength}
            </R.Counter> )}
            </R.Box4>
           <R.Box3><R.DoneBtn>완료하기</R.DoneBtn></R.Box3>
           </R.BackBox>
       </R.Background>
    );
}

export default AddContent;