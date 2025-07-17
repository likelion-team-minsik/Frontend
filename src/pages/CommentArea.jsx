import React, {useState} from "react";
import { useParams } from "react-router-dom";
import posts from "../data/post";
import comments from "../data/comment";
import * as R from "../styles/StyledCommentArea";
import { Box1 } from "../styles/StyledTamcleTalk";

function CommentArea() {
  const { id } = useParams();
  const post = posts[parseInt(id)];

  const [heartIcons, setHeartIcons] = useState(post?.isHearted);
  const [bookIcons, setBookIcons] = useState(post?.isBookmarked);


const clickedHeart = () => {

  setHeartIcons((prev) => !prev);
};

const clickedBookIcons = () => {
    setBookIcons((prev) => !prev);
}


  const sizes = ["27px", "23.736px", "27px"];
  const cmsizes = ["27px", "27px", "25px"];

  const filteredComments = comments.filter(comment=> comment.postId === parseInt(id));


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
      <R.PostBox>
    <R.Box1>
        <R.Profile>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/${post.profileImg}`}
                          width="50px"
                        />
                       <R.InPro>
                          <img
                              src={`${process.env.PUBLIC_URL}/images/${post.inProImg}`}
                              width={cmsizes[post.inProImgNum]} 
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
                        <R.HeartIcon onClick={clickedHeart}>
                          <img
                            src={
                              heartIcons
                                ? `${process.env.PUBLIC_URL}/images/HeartIcon.png`
                                : `${process.env.PUBLIC_URL}/images/HeartIcon2.png`
                            }
                            width="30px"
                          />
                          <R.HeartNum>{post.heartNum}</R.HeartNum>
                        </R.HeartIcon>
                        <R.BookIcon onClick={clickedBookIcons}>
                          <img
                            src={
                              bookIcons
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

      <R.CommentBox>
          {filteredComments.map((comment, index) => (
          <R.Comment key={index} style={{marginBottom: comment.image !== 0 ? "70px" : "-50px"}}>
            <R.Box1>
             <R.Profile>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/${comment.profileImg}`}
                          width="50px"
                        />
                       <R.InPro>
                          <img
                              src={`${process.env.PUBLIC_URL}/images/${comment.inProImg}`}
                              width={sizes[comment.inProImgNum]} 
                          />
                       </R.InPro>
            </R.Profile>
            <R.Box2>
            <R.CommentAuthor>{comment.author}</R.CommentAuthor>
            <R.CommentTime>{comment.time}</R.CommentTime>
            </R.Box2>
            </R.Box1>
            <R.CommentContent>{comment.content}</R.CommentContent>
              {comment.image !== 0 && (
              <R.CommentImg>
                <img src={`${process.env.PUBLIC_URL}/images/${comment.image}`} width="103"/>
              </R.CommentImg>
            )}
              <R.Box6> <R.GrayHeart>
              <img
                src={
                  comment.HeartNum == 0
                    ? `${process.env.PUBLIC_URL}/images/GrayHeart0.png`
                    : `${process.env.PUBLIC_URL}/images/GrayHeart.png`
                }
                width="17px"
              />
            </R.GrayHeart>
            {comment.HeartNum != 0 && <R.GrayHeartNum>{comment.HeartNum}</R.GrayHeartNum>}
             <R.AddComment>답글쓰기</R.AddComment>
            </R.Box6>
          </R.Comment>
        ))}
      </R.CommentBox>
      <R.CommentRec><img src={`${process.env.PUBLIC_URL}/images/CommentRec.png`} width="393px"/>
      <R.AddBox>
        <R.Camera><img src={`${process.env.PUBLIC_URL}/images/Camera.png`} width="27.5px"/></R.Camera>
        <R.CommentVar><img src={`${process.env.PUBLIC_URL}/images/CommentVar.png`} width="295px"/></R.CommentVar>
        </R.AddBox></R.CommentRec>
      </R.BackBox>
      </R.Background>
      
    );
}

export default CommentArea;
