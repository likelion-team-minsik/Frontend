import * as R from "../styles/StyledTamcleTalk"; // underline 컴포넌트 넣으려면 필요

const posts = [
  {
    profileImg: "Profile.png",
    inProImg: "InPro.png",
    author: "이제돌잡이",
    time: "10분 전",
    commentNum: 3,
    heartNum: 1,
    title: "초보자 암벽화 추천 부탁드려요:)",
    content: (
      <>
        이제 막 클라이밍 입문했는데, 몇 번 해보고 <br />
        너무 재밌어서 암벽화 구매하려고 합니다! <br />
        다들 어떤 브랜드 많이 신나요??
      </>
    ),
    underline: <R.Underline1 />,
    inProImgNum: 0,

    isHearted: false,    // 하트 눌린 상태
    isBookmarked: false, // 북마크 눌린 상태
  },
  {
    profileImg: "Profile.png",
    inProImg: "InPro2.png",
    author: "탐클병아리",
    time: "6시간 전",
    commentNum: 0,
    heartNum: "",
    title: "암벽화 원래 작게 신는 건가요?",
    content: (
      <>
        오늘 1일차인데... 너무 아픔 <br />
        다들 이 고통을 견디는 것이겠죠 <br />
        얼른 적응하고 행클하고 싶네요!!!!
      </>
    ),
    underline: <R.Underline2 />,
    inProImgNum: 1,

    isHearted: true,    // 하트 안 눌린 상태
    isBookmarked: true, // 북마크 안 눌린 상태
  },
  {
    profileImg: "Profile.png",
    inProImg: "InPro.png",
    author: "이제돌잡이",
    time: "10분 전",
    commentNum: 3,
    heartNum: 1,
    title: "초보자 암벽화 추천 부탁드려요:)",
    content: (
      <>
        이제 막 클라이밍 입문했는데, 몇 번 해보고 <br />
        너무 재밌어서 암벽화 구매하려고 합니다! <br />
        다들 어떤 브랜드 많이 신나요??
      </>
    ),
    underline: <R.Underline1 />,
    inProImgNum: 0,

    isHearted: false,    // 하트 눌린 상태
    isBookmarked: false, // 북마크 눌린 상태
  },
];

export default posts;
