import React, { useState } from "react";
import * as R from "../styles/StyledTamcleTalk";
import { useNavigate } from "react-router-dom";
import posts from "../data/post";


function TamcleTalk() {

  const navigate = useNavigate();

  const handlePostBox = (id) =>{
    navigate(`/CommentArea/${id}`);
  };

  const goAddContent = () => {
    navigate('/AddContent');
  };

    const goSearch = () => {
    navigate('/Search');
  };

    const goQnA = () => {
      navigate('/QnA');
    }

    const goMyPage = () => {
      navigate('/MyPage')
    }

  const [hoveredBlock, setHoveredBlock] = useState(null);

  const [heartIcons, setHeartIcons] = useState(Array(posts.length).fill(true));
  const [bookIcons, setBookIcons] = useState(Array(posts.length).fill(true))

 const ClickHeartIcon = (index) => {
    setHeartIcons((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );

    setPostData(prev => 
    prev.map((post, i) => 
      i === index ? { ...post, isHearted: !post.isHearted } : post
    )
  );
  };

  const ClickBookIcon = (index) => {
    setBookIcons((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const sizes = ["27px", "23.736px", "27px"];

  const [postData, setPostData] = useState(posts);

  return (
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

      <R.OneBox>
        <R.TamcleTalkImg>
          <img
            src={`${process.env.PUBLIC_URL}/images/TamcleTalkImg.png`}
            alt="'탐클톡' 글자입니다."
            width="61px"
          />
        </R.TamcleTalkImg>
        <R.SearchBtn onClick={goSearch}>
          <img
            src={`${process.env.PUBLIC_URL}/images/SearchBtn.png`}
            alt="돋보기 버튼입니다"
            width="27px"
          />
        </R.SearchBtn>
      </R.OneBox>

      <R.BlockBox>
        <R.Block1
          onMouseEnter={() => setHoveredBlock("Block1")}
          onMouseLeave={() => setHoveredBlock(null)}
          onClick={goQnA}
        >
          <img
            src={
              hoveredBlock === "Block1"
                ? `${process.env.PUBLIC_URL}/images/ColorBlock1.png`
                : `${process.env.PUBLIC_URL}/images/Block1.png`
            }
            alt="블럭1입니다."
            width="57.67px"
            height="32.02px"
          />
        </R.Block1>

        <R.Block2
          onMouseEnter={() => setHoveredBlock("Block2")}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <img
            src={
              hoveredBlock === "Block2"
                ? `${process.env.PUBLIC_URL}/images/ColorBlock2.png`
                : `${process.env.PUBLIC_URL}/images/Block2.png`
            }
            alt="블럭2입니다."
            width="63.25px"
            height="32.02px"
          />
        </R.Block2>

        <R.Block3
          onMouseEnter={() => setHoveredBlock("Block3")}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <img
            src={
              hoveredBlock === "Block3"
                ? `${process.env.PUBLIC_URL}/images/ColorBlock3.png`
                : `${process.env.PUBLIC_URL}/images/Block3.png`
            }
            alt="블럭3입니다."
            width="63.25px"
            height="32.02px"
          />
        </R.Block3>

        <R.Block4
          onMouseEnter={() => setHoveredBlock("Block4")}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <img
            src={
              hoveredBlock === "Block4"
                ? `${process.env.PUBLIC_URL}/images/ColorBlock4.png`
                : `${process.env.PUBLIC_URL}/images/Block4.png`
            }
            alt="블럭4입니다."
            width="57.67px"
            height="32.02px"
          />
        </R.Block4>

        <R.Block5
          onMouseEnter={() => setHoveredBlock("Block5")}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <img
            src={
              hoveredBlock === "Block5"
                ? `${process.env.PUBLIC_URL}/images/ColorBlock5.png`
                : `${process.env.PUBLIC_URL}/images/Block5.png`
            }
            alt="블럭5입니다."
            width="57.67px"
            height="32.02px"
          />
        </R.Block5>
      </R.BlockBox>

<R.PostBoxOfBox>
         
         {posts.map((post, index) => (
         <R.PostBox key={index} onClick={()=> handlePostBox(index)}>
              <R.Box1>
                <R.Profile>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${post.profileImg}`}
                    width="50px"
                  />
                 <R.InPro>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/${post.inProImg}`}
                        width={sizes[post.inProImgNum]} 
                    />
                 </R.InPro>
                </R.Profile>
                <R.Box2>
                  <R.Author>{post.author}</R.Author>
                  <R.Time>{post.time}</R.Time>
                </R.Box2>
                <R.Box4>
                 {post.commentNum > 0 && (
                <R.CommentIcon>
                    <img
                    src={`${process.env.PUBLIC_URL}/images/CommentIcon.png`}
                    width="25px"
                    />
                    <R.CommentNum>{post.commentNum}</R.CommentNum>
                </R.CommentIcon>
                )}
                  <R.HeartIcon onClick={(e) => {
                    e.stopPropagation();
                    ClickHeartIcon(index);
                  }}>
                    <img
                      src={
                        heartIcons[index]
                          ? `${process.env.PUBLIC_URL}/images/HeartIcon.png`
                          : `${process.env.PUBLIC_URL}/images/HeartIcon2.png`
                      }
                      width="30px"
                    />
                    <R.HeartNum>{post.heartNum}</R.HeartNum>
                  </R.HeartIcon>
                    <R.BookIcon onClick={(e) => {
                    e.stopPropagation();
                    ClickBookIcon(index);
                  }}>
                    <img
                      src={
                        bookIcons[index]
                          ? `${process.env.PUBLIC_URL}/images/BookIcon.png`
                          : `${process.env.PUBLIC_URL}/images/BookIcon2.png`
                      }
                      width="35px"
                    />
                  </R.BookIcon>
                </R.Box4>
              </R.Box1>

              <R.Box3>
                <R.Title>{post.title}</R.Title>
                <R.Content>{post.content}</R.Content>
                {post.underline}
              </R.Box3>
            </R.PostBox>
          ))}
        </R.PostBoxOfBox>
      <R.Box5><R.AddContent onClick={goAddContent}><img src={`${process.env.PUBLIC_URL}/images/AddContent.png`} width="53.393px"/></R.AddContent> 
      <R.MyPage onClick={goMyPage}><img src={`${process.env.PUBLIC_URL}/images/Mypage.png`} width="53.393px"/></R.MyPage></R.Box5>
      </R.BackBox>
    </R.Background>
  );
}

export default TamcleTalk;
