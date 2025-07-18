import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "../styles/styledSearch";
import Menu from "./Menu";

const Search = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goMenu = () => setMenuOpen((prev) => !prev);

  const goMain = () => {
    navigate(`/`);
  };

  return (
    <S.Container>
      {menuOpen && <S.Background onClick={() => setMenuOpen(false)} />}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <S.Logo onClick={goMain}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </S.Logo>
      <S.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
          width="40px"
          height="auto"
        />
      </S.Menu>
      <S.Section>
        <S.Title>Theclimb</S.Title>
        <S.List>
          <a
            className="place1"
            href="https://map.naver.com/p/entry/place/40430629?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182231&locale=ko&svcName=map_pcv5&searchType=place&lng=126.9203014&lat=37.5547340&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            홍대B
          </a>
          <a
            className="place2"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%9D%BC%EC%82%B0/place/37779022?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182232&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%9D%BC%EC%82%B0"
            target="_blank"
            rel="noopener noreferrer"
          >
            일산
          </a>
          <a
            className="place3"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%84%B1%EC%88%98/place/1513361711?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182232&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%84%B1%EC%88%98"
            target="_blank"
            rel="noopener noreferrer"
          >
            성수
          </a>
        </S.List>
        <S.List>
          <a
            className="place4"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%9D%B4%EC%88%98/place/1437729993?placePath=/home?entry=pll&from=nx&fromPanelNum=2&timestamp=202507182232&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%9D%B4%EC%88%98&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            이수
          </a>
          <a
            className="place5"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EB%AC%B8%EB%9E%98/place/1590565356?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182233&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EB%AC%B8%EB%9E%98"
            target="_blank"
            rel="noopener noreferrer"
          >
            문래
          </a>
          <a
            className="place6"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EB%85%BC%ED%98%84/place/1027543168?placePath=/home?entry=pll&from=map&fromPanelNum=2&timestamp=202507182233&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EB%85%BC%ED%98%84&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            논현
          </a>
        </S.List>
        <S.List>
          <a
            className="place7"
            href="https://map.naver.com/p/entry/place/1404431527?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182233&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0191253&lat=37.5211262&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            신사
          </a>
          <a
            className="place8"
            href="https://map.naver.com/p/entry/place/1542945259?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182243&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            사당
          </a>
          <a
            className="place9"
            href="https://map.naver.com/p/entry/place/1193861860?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182244&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            강남
          </a>
        </S.List>
        <S.List>
          <a
            className="place10"
            href="https://map.naver.com/p/entry/place/1687553774?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182244&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            연남
          </a>
          <a
            className="place11"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%8B%A0%EB%A6%BC/place/1977183310?placePath=/home?entry=pll&from=map&fromPanelNum=2&timestamp=202507182234&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%8B%A0%EB%A6%BC&from=nx&fromNxList=true&searchType=place"
            target="_blank"
            rel="noopener noreferrer"
          >
            신림
          </a>
          <a
            className="place12"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%96%91%EC%9E%AC/place/1790045837?c=15.00,0,0,0,dh&isCorrectAnswer=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            양재
          </a>
        </S.List>
        <S.List>
          <a
            className="place13"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%84%9C%EC%9A%B8%EB%8C%80/place/1514054995?c=15.00,0,0,0,dh&isCorrectAnswer=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            서울대
          </a>
          <a
            className="place14"
            href="https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EB%A7%88%EA%B3%A1/place/42928074?c=15.00,0,0,0,dh&isCorrectAnswer=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            마곡
          </a>
        </S.List>
      </S.Section>
      <S.Section>
        <S.Title>Climbing park</S.Title>
        <S.List2>
          <a
            className="park1"
            href="https://map.naver.com/p/entry/place/1275079079?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182235&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0520384&lat=37.4985542&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            한티
          </a>
          <a
            className="park2"
            href="https://map.naver.com/p/entry/place/1051152515?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0581487&lat=37.5422683&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            성수
          </a>
          <a
            className="park3"
            href="https://map.naver.com/p/entry/place/1824779869?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182242&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            강남
          </a>
        </S.List2>
        <S.List2>
          <a
            className="park4"
            href="https://map.naver.com/p/entry/place/1366861942?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182236&locale=ko&svcName=map_pcv5&searchType=place&lng=126.9997942&lat=37.5713969&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            종로
          </a>
          <a
            className="park5"
            href="https://map.naver.com/p/search/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%20%ED%8C%8C%ED%81%AC%20%EC%8B%A0%EB%85%BC%ED%98%84/place/1255877612?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            신논현
          </a>
        </S.List2>
      </S.Section>
      <S.Section>
        <S.Title>Seoulforest</S.Title>
        <S.List2>
          <a className="forest1">뚝섬</a>
          <a
            className="forest2"
            href="https://map.naver.com/p/entry/place/1209582464?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182237&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0842453&lat=37.5108832&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            잠실
          </a>
          <a
            className="forest3"
            href="https://map.naver.com/p/entry/place/1004993421?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182238&locale=ko&svcName=map_pcv5&searchType=place&lng=126.9900498&lat=37.5697051&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            종로
          </a>
        </S.List2>
        <S.List2>
          <a
            className="forest4"
            href="https://map.naver.com/p/entry/place/1013096161?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182240&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            영등포
          </a>
          <a
            className="forest5"
            href="https://map.naver.com/p/entry/place/1156712614?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507182241&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            구로
          </a>
        </S.List2>
      </S.Section>
    </S.Container>
  );
};

export default Search;
