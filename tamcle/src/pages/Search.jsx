import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as R from "../styles/StyledSearch"

function Search(){
    return(
        <R.Background>
        <R.BackBox>
      <R.TopLogo> {/*이것도 박스*/}
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
      <R.SearchArea placeholder="검색어를 입력하세요"></R.SearchArea>
       <R.SearchBtn>
                <img
                  src={`${process.env.PUBLIC_URL}/images/SearchBtn.png`}
                  alt="돋보기 버튼입니다"
                  width="27px"
                />
      </R.SearchBtn>
      </R.Box1>
      <R.Box2><R.Recent>최근 검색어</R.Recent></R.Box2>
      <R.BlockBox><R.Block>낙법요령</R.Block> <R.Block>클라이밍 초보</R.Block> <R.Block>크럭스 암벽화</R.Block></R.BlockBox>
      <R.BackImg></R.BackImg>
      </R.BackBox>

      </R.Background>
      
    );
}

export default Search;