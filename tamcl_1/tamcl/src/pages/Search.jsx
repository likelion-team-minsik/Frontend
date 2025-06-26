import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/styledSearch";

const Search = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  return (
    <S.Container>
      <S.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </S.Logo>
      <S.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </S.Menu>
      <S.Section>
        <S.Title>Theclimb</S.Title>
        <S.List>
          <div className="place1">홍대B</div>
          <div className="place2">일산</div>
          <div className="place3">성수</div>
        </S.List>
        <S.List>
          <div className="place4">이수</div>
          <div className="place5">문래</div>
          <div className="place6">논현</div>
        </S.List>
        <S.List>
          <div className="place7">신사</div>
          <div className="place8">사당</div>
          <div className="place9">강남</div>
        </S.List>
        <S.List>
          <div className="place10">연남</div>
          <div className="place11">신림</div>
          <div className="place12">양재</div>
        </S.List>
        <S.List>
          <div className="place13">서울대</div>
          <div className="place14">마곡</div>
        </S.List>
      </S.Section>
      <S.Section>
        <S.Title>Climbing park</S.Title>
        <S.List2>
          <div className="park1">한티</div>
          <div className="park2">성수</div>
          <div className="park3">강남</div>
        </S.List2>
        <S.List2>
          <div className="park4">종로</div>
          <div className="park5">신논현</div>
        </S.List2>
      </S.Section>
      <S.Section>
        <S.Title>Seoulforest</S.Title>
        <S.List2>
          <div className="forest1">뚝섬</div>
          <div className="forest2">잠실</div>
          <div className="forest3">종로</div>
        </S.List2>
        <S.List2>
          <div className="forest4">영등포</div>
          <div className="forest5">구로</div>
        </S.List2>
      </S.Section>
    </S.Container>
  );
};

export default Search;
