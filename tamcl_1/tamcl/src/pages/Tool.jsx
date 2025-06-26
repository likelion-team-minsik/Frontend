import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as T from "../styles/styledTool";

const Tool = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    setName(storedName);
  }, []);

  return (
    <T.Container>
      <T.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </T.Logo>
      <T.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </T.Menu>
      <T.Box>
        <T.Title>
          <img
            src={`${process.env.PUBLIC_URL}/images/text.svg`}
            alt="title"
            width="303.167px"
            height="150.5px"
          />
          <div id="titleText">
            <span id="titleText1">도전형</span>
            <span id="titleText2">st 참고 장비</span>
          </div>
        </T.Title>
      </T.Box>
      <T.Section>
        <T.Title1>
          클라이머 룩의 정석, 등판 백프린팅
          <img
            src={`${process.env.PUBLIC_URL}/images/eyes.png`}
            alt="titleImage1"
            width="24.111px"
            height="auto"
          />
        </T.Title1>
        <T.SearchImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/search1.svg`}
            alt="searchImage1"
            width="334.21px"
            height="250px"
          />
        </T.SearchImage>
        <T.SubText>
          <div>MOODEN</div>
          <div>TONEBLEND</div>
        </T.SubText>
        <T.Detail>
          <img
            src={`${process.env.PUBLIC_URL}/images/text2.svg`}
            alt="detailtext1"
            width="334.21px"
            height="250px"
          />
          <div id="detailText">
            클라이머들은 백프린팅 티를 많이 선호해요
            <br />
            등반할 때 주로 보이는 부분은 뒷모습!
            <br />
            등반 시 나를 한층 더 매력적으로 만들어줘요
          </div>
        </T.Detail>
      </T.Section>
      <T.Section>
        <T.Title2>움직임은 편하게, 스타일은 꽉 차게!</T.Title2>
        <T.SearchImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/search2.svg`}
            alt="searchImage2"
            width="auto"
            height="250px"
          />
        </T.SearchImage>
        <T.SubText2>
          <div>CLIMIT</div>
          <div>CHOIB</div>
        </T.SubText2>
        <T.Detail2>
          <img
            src={`${process.env.PUBLIC_URL}/images/text2.svg`}
            alt="detailtext1"
            width="334.21px"
            height="250px"
          />
          <div id="detailText">
            등반 시 도드라지는 엉덩이가 조금 부담스럽다면?
            <br />
            오버핏 티로 자연스럽게 커버해보세요:)
          </div>
        </T.Detail2>
      </T.Section>
      <T.Section>
        <T.Title2>거침없이 돌파하는 {name}님에겐, 이 바지가 딱!</T.Title2>
        <T.SearchImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/search3.svg`}
            alt="searchImage3"
            width="auto"
            height="250px"
          />
        </T.SearchImage>
        <T.SubText3>
          <div>CruxShop</div>
          <div>AscendHub</div>
        </T.SubText3>
        <T.Detail2>
          <img
            src={`${process.env.PUBLIC_URL}/images/text2.svg`}
            alt="detailtext1"
            width="334.21px"
            height="250px"
          />
          <div id="detailText">
            이리저리 날뛰는 다이나믹 무브를 즐기는 도전형 클라이머
            <br />
            자유로운 무브&쓸림 방지에 특화된 클라이밍 바지를 추천해요
          </div>
        </T.Detail2>
      </T.Section>
      <T.Section>
        <T.Title2>이 초크백이 가볍고 부담 없어요 :)</T.Title2>
        <T.SearchImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/search4.svg`}
            alt="searchImage4"
            width="auto"
            height="167px"
          />
        </T.SearchImage>
        <T.SubText4>
          <div>CruxShop</div>
          <div>AscendHub</div>
        </T.SubText4>
        <T.Detail>
          <img
            src={`${process.env.PUBLIC_URL}/images/text2.svg`}
            alt="detailtext1"
            width="334.21px"
            height="250px"
          />
          <div id="detailText">
            손이 촉촉 땀이 많으신 편인가요?
            <br />
            그렇다면 초크와 초크백은 선택이 아닌 필수!
            <br />
            클라이밍 실력을 뒷받혀줄 믿음직한 지원군들
          </div>
        </T.Detail>
      </T.Section>
      <T.Section>
        <T.Title2>우당탕 도전형의 손가락을 지켜줄 필수템 – 테이프!</T.Title2>
        <T.SearchImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/search5.svg`}
            alt="searchImage5"
            width="auto"
            height="334px"
          />
        </T.SearchImage>
        <T.SubText4>
          <div>HoldHouse</div>
        </T.SubText4>
        <T.Detail>
          <img
            src={`${process.env.PUBLIC_URL}/images/text2.svg`}
            alt="detailtext1"
            width="334.21px"
            height="250px"
          />
          <div id="detailText">
            어느 순간 그들의 손은 퉁퉁퉁 사후르가 되고 마는데 ... <br />
            그럼에도 쉽게 포기하지 않는 도전형
            <br />
            테이핑을 하고 멋들어지게 다시 도전!
          </div>
        </T.Detail>
      </T.Section>
    </T.Container>
  );
};

export default Tool;
