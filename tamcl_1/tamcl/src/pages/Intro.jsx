import React from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/styledIntro";

const Intro = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  return (
    <I.Container>
      <I.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </I.Logo>
      <I.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </I.Menu>
      <I.Section1>
        <I.Title1>클라이밍이란?</I.Title1>
        <I.TitleImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/titleImage.png`}
            alt="titleImage"
            width="18px"
            height="auto"
          />
        </I.TitleImage>
        <I.IntroImage1>
          <img
            src={`${process.env.PUBLIC_URL}/images/introImage1.jpg`}
            alt="introImage1"
            width="333px"
            height="222px"
          />
        </I.IntroImage1>
        <I.TextBox1>
          <div>
            클라이밍은 손과 발을 사용해 인공 벽이나 자연 암벽을 오르
            <br />는 스포츠입니다. 단순히 '힘'이 아닌,{" "}
            <span id="red">
              균형, 기술, 문제 해결
              <br />력
            </span>
            이 요구되는 운동이에요.
          </div>
        </I.TextBox1>
      </I.Section1>
      <I.Section2>
        <I.Title2>인도어 vs 아웃도어</I.Title2>
        <I.IntroImage2>
          <img
            src={`${process.env.PUBLIC_URL}/images/introImage2.svg`}
            alt="introImage2"
            width="333px"
            height="203px"
          />
        </I.IntroImage2>
        <I.TextBox2>
          <div id="text1">
            <span style={{ letterSpacing: "3px" }}>• </span> 인도어 클라이밍:
            실내 암장에서 즐기는 방식.
            <br />
            <span id="space"></span>날씨에 상관없이 누구나 체험 가능.
          </div>
          <div id="text2">
            <span style={{ letterSpacing: "3px" }}>• </span> 아웃도어 클라이밍:
            자연 암벽에서 진행.
            <br />
            <span id="space"></span>경험이 쌓인 후에 도전하는 것을 추천!
          </div>
        </I.TextBox2>
      </I.Section2>
      <I.Section3>
        <I.Title3>주요 종목</I.Title3>
        <I.IntroImage3>
          <img
            src={`${process.env.PUBLIC_URL}/images/introImage3.svg`}
            alt="introImage3"
            width="333px"
            height="auto"
          />
        </I.IntroImage3>
        <I.TextBox3>
          <div id="text1">
            <span style={{ letterSpacing: "3px" }}>• </span> 볼더링: 낮은 벽,
            짧고 강한 루트를 맨손으로 오름
            <br />
            <span id="space"></span>(탐클 성향 테스트도 이 방식 중심).
          </div>
          <div id="text2">
            <span style={{ letterSpacing: "3px" }}>• </span>리드 클라이밍:
            로프를 이용해 높은 벽을 오르는 방식.
          </div>
          <div id="text3">
            <span style={{ letterSpacing: "3px" }}>• </span>스피드 클라이밍:
            누가 더 빨리 오르나를 겨루는 경기.
          </div>
        </I.TextBox3>
      </I.Section3>
      <I.Section4>
        <I.Title4>클라이밍의 매력</I.Title4>
        <I.TitleImage4>
          <img
            src={`${process.env.PUBLIC_URL}/images/sparkle.png`}
            alt="titleImage4"
            width="22px"
            height="auto"
          />
        </I.TitleImage4>
        <I.IntroImage4>
          <img
            src={`${process.env.PUBLIC_URL}/images/introImage4.svg`}
            alt="introImage4"
            width="333px"
            height="171.083px"
          />
        </I.IntroImage4>
        <I.TextBox4>
          <div id="text1">
            <span style={{ letterSpacing: "3px" }}>• </span>
            <span id="bold">문제를 푼다는 느낌</span>
            <br />
            <span id="space"></span>- 단순히 벽을 오르는 것이 아니라,
            <br />
            <span id="space"></span>“어떤 순서로 잡을까?”, “몸을 어떻게 써야
            하지?”
            <br />
            <span id="space"></span>같은 생각을 하게 돼요.
            <br />
            <span id="space"></span>- 그래서 ‘신체 퍼즐 게임’ 같다는 표현도 자주
            쓰입니다.
          </div>
          <div id="text2">
            <span style={{ letterSpacing: "3px" }}>• </span>
            <span id="bold">즐기면서 운동</span>
            <br />
            <span id="space"></span>- 전신을 사용하는 유산소+근력 복합
            운동이지만,
            <br />
            <span id="space"></span>‘재밌어서’ 운동하는 느낌!
            <br />
            <span id="space"></span>- 꾸준히 하면 체형 교정, 자세 개선 효과도
            있어요.
          </div>
          <div id="text3">
            <span style={{ letterSpacing: "3px" }}>• </span>
            <span id="bold">몰입감과 성취감</span>
            <br />
            <span id="space"></span>- 한 루트를 완등했을 때의 쾌감은 중독적!
            <br />
            <span id="space"></span>- 실패해도 다음에 더 잘할 수 있다는 ‘도전의
            맛’이 있습니다.
          </div>
        </I.TextBox4>
      </I.Section4>
      <I.Section5>
        <I.Title5>초보자가 알아야 할 기본 정보</I.Title5>
        <I.TitleImage5>
          <img
            src={`${process.env.PUBLIC_URL}/images/light.png`}
            alt="titleImage5"
            width="19px"
            height="auto"
          />
        </I.TitleImage5>
        <I.IntroImage5>
          <img
            src={`${process.env.PUBLIC_URL}/images/introImage5.svg`}
            alt="introImage5"
            width="333px"
            height="203px"
          />
        </I.IntroImage5>
        <I.TextBox5>
          <div id="text1">
            <span style={{ letterSpacing: "3px" }}>• </span>클라이밍화(암벽화):
            바닥이 미끄럽지 않고 발끝 감각이
            <br />
            <span id="space"></span>살아있는 전용 신발.
          </div>
          <div id="text2">
            <span style={{ letterSpacing: "3px" }}>• </span>초크: 손에 땀이 많을
            경우, 미끄러짐 방지를 위해 사용하
            <br />
            <span id="space"></span>는 가루.
          </div>
          <div id="text3">
            <span style={{ letterSpacing: "3px" }}>• </span>편한 복장: 너무
            헐렁하지 않으면서도 움직임이 편한 운
            <br />
            <span id="space"></span>동복 추천.
          </div>
        </I.TextBox5>
      </I.Section5>
      <I.Section6>
        <I.Title6>기본 매너 & 에티켓</I.Title6>
        <I.TitleImage6>
          <img
            src={`${process.env.PUBLIC_URL}/images/magnifier.png`}
            alt="titleImage6"
            width="19px"
            height="auto"
          />
        </I.TitleImage6>
        <I.TextBox6>
          <div id="line">
            <span id="red">1. 루트가 겹치는지 꼭 확인해요!</span>
          </div>
          <div id="line">2. 다른 사람 등반 시 벽 밑에서 기다려요.</div>
          <div id="line">
            3. 너무 큰 소리는 다른 클라이머에게 방해될 수 있어요.
          </div>
          <div id="line">
            4. 초크를 벽에 ‘털지’ 말고, 손 안에서 조용히 사용하는 센스!
          </div>
          <div id="line">5. 매트위에 앉거나 물건을 올려놓지 마세요.</div>
        </I.TextBox6>
        <I.ViewMore6>더보기)</I.ViewMore6>
      </I.Section6>
      <I.Section7>
        <I.Title7>초보자용 클라이밍 용어 설명</I.Title7>
        <I.TitleImage7>
          <img
            src={`${process.env.PUBLIC_URL}/images/writing.png`}
            alt="titleImage7"
            width="19px"
            height="auto"
          />
        </I.TitleImage7>
        <I.IntroImage7>
          <img
            src={`${process.env.PUBLIC_URL}/images/introImage7.png`}
            alt="introImage7"
            width="336px"
            height="486.609px"
          />
        </I.IntroImage7>
      </I.Section7>
      <I.Section8>
        <I.Title8>홀드</I.Title8>
        <I.Table8>
          <I.LineText1>
            <div className="space1">홀드 이름</div>
            <div className="space2">난이도</div>
            <div>설명</div>
          </I.LineText1>
          <div id="line1"></div>
          <I.LineText2>
            <div id="bold" className="space1">
              저그 (Jug)
            </div>
            <div className="space2" id="bold">
              ★☆☆
            </div>
            <div>움푹 파여 손 전체로 쉽게 잡힘.</div>
          </I.LineText2>
          <div id="line2"></div>
          <I.LineText3>
            <div id="bold" className="space1">
              볼륨 (Volume)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div className="lineHeight">
              큼직한 입체 구조물.
              <br />
              다양한 방식으로 활용 가능.
            </div>
          </I.LineText3>
          <div id="line3"></div>
          <I.LineText4>
            <div id="bold" className="space1">
              슬로퍼 (Sloper)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div className="lineHeight">
              둥글고 미끄러운 표면.
              <br />
              손바닥 마찰과 균형 감각이 중요.
            </div>
          </I.LineText4>
          <div id="line3"></div>
          <I.LineText5>
            <div id="bold" className="space1">
              핀치 (Pinch)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div className="lineHeight">
              손가락과 엄지로
              <br />
              집게처럼 조여 잡는 형태.(악력중요)
            </div>
          </I.LineText5>
          <div id="line3"></div>
          <I.LineText6>
            <div id="bold" className="space1">
              언더컷 (Undercut)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div className="lineHeight">
              아래에서 위로 떠받치듯 잡는 형태.
              <br />
              팔과 몸 전체로 밀어 올려야 해서 기술적.
            </div>
          </I.LineText6>
          <div id="line3"></div>
          <I.LineText7>
            <div id="bold" className="space1">
              크림프 (Crimp)
            </div>
            <div className="space2" id="bold">
              ★★★
            </div>
            <div className="lineHeight">
              아주 얇은 턱.
              <br />
              손가락 첫 마디로만 걸 수 있어 큰 힘이 필요.
            </div>
          </I.LineText7>
          <div id="line3"></div>
          <I.LineText8>
            <div id="bold" className="space1">
              포켓 (Pocket)
            </div>
            <div className="space2" id="bold">
              ★★★
            </div>
            <div className="lineHeight">
              손가락 한두 개만 들어갈 수 있는 구멍 형태.
              <br />
              정교한 손 조절 필요.
            </div>
          </I.LineText8>
          <div id="line3"></div>
        </I.Table8>
        <I.ViewMore8>더보기)</I.ViewMore8>
      </I.Section8>
      <I.Section9>
        <I.Title9>무브 & 행위</I.Title9>
        <I.Table9>
          <I.LineText1>
            <div className="space1">무브 이름</div>
            <div className="space2">난이도</div>
            <div>설명</div>
          </I.LineText1>
          <div id="line1"></div>
          <I.LineText2>
            <div id="bold" className="space1">
              밸런스 (Balance)
            </div>
            <div className="space2" id="bold">
              ★☆☆
            </div>
            <div>몸의 중심을 유지하며 균형 잡기.</div>
          </I.LineText2>
          <div id="line2"></div>
          <I.LineText3>
            <div id="bold" className="space1">
              버디 (Buddy)
            </div>
            <div className="space2" id="bold">
              ★☆☆
            </div>
            <div className="lineHeight">
              함께 같은 루트를 오르며 서로를 도전하게
              <br />
              하고 지지하는 등반 파트너.
            </div>
          </I.LineText3>
          <div id="line3"></div>
          <I.LineText9_4>
            <div id="bold" className="space1">
              슬랩 (Slab)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div>벽이 뒤로 누운 구조.</div>
          </I.LineText9_4>
          <div id="line3"></div>
          <I.LineText9_5>
            <div id="bold" className="space1">
              오버행 (Overhang)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div>앞으로 튀어나온 벽.</div>
          </I.LineText9_5>
          <div id="line3"></div>
          <I.LineText9_6>
            <div id="bold" className="space1">
              힐훅 (Heel Hook)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div>뒤꿈치를 홀드에 걸어 몸을 끌어당기는 기술.</div>
          </I.LineText9_6>
          <div id="line3"></div>
          <I.LineText9_7>
            <div id="bold" className="space1">
              다이나믹 (Dynamic)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div>점프하거나 빠르게 손을 바꾸는 동작.</div>
          </I.LineText9_7>
          <div id="line3"></div>
          <I.LineText9_8>
            <div id="bold" className="space1">
              코디네이션 <br />
              (Coordination)
            </div>
            <div className="space2" id="bold">
              ★★☆
            </div>
            <div className="space2">여러 동작을 리듬감 있게 조합하는 기술.</div>
          </I.LineText9_8>
          <div id="line3"></div>
        </I.Table9>
        <I.ViewMore9>더보기)</I.ViewMore9>
      </I.Section9>
    </I.Container>
  );
};

export default Intro;
