import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as M from "../styles/styledMain";
import Menu from "./Menu";

const Main = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goMenu = () => setMenuOpen((prev) => !prev);

  return (
    <M.Container>
      {menuOpen && <M.Background onClick={() => setMenuOpen(false)} />}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <M.Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          width="165px"
          height="auto"
        />
      </M.Logo>
      <M.Menu onClick={goMenu}>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
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
