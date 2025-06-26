import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/styledMain";

const Main = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/Menu`);
  };

  return (
    <M.Container>
      <M.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/로고.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </M.Logo>
      <M.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/메뉴.svg`}
          alt="menu"
          width="42px"
          height="auto"
        />
      </M.Menu>
      <M.Box>
        <M.Illust>
          <img
            src={`${process.env.PUBLIC_URL}/images/main.svg`}
            width="272px"
            height="588.636px"
          />
        </M.Illust>
      </M.Box>
    </M.Container>
  );
};

export default Main;
