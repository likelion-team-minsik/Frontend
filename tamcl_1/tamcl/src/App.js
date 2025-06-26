import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Test from "./pages/Test";
import Name from "./pages/Name";
import Q1 from "./pages/Q1";
import Q2 from "./pages/Q2";
import Q3 from "./pages/Q3";
import Q4 from "./pages/Q4";
import Q5 from "./pages/Q5";
import Loading1 from "./pages/Loading1";
import Loading2 from "./pages/Loading2";
import Result1 from "./pages/Result1";
import Result2 from "./pages/Result2";
import Result3 from "./pages/Result3";
import Result4 from "./pages/Result4";
import Intro from "./pages/Intro";
import Search from "./pages/Search";
import Tool from "./pages/Tool";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Name" element={<Name />} />
        <Route path="/Q1" element={<Q1 />} />
        <Route path="/Q2" element={<Q2 />} />
        <Route path="/Q3" element={<Q3 />} />
        <Route path="/Q4" element={<Q4 />} />
        <Route path="/Q5" element={<Q5 />} />
        <Route path="/Loading1" element={<Loading1 />} />
        <Route path="/Loading2" element={<Loading2 />} />
        <Route path="/Result1" element={<Result1 />} />
        <Route path="/Result2" element={<Result2 />} />
        <Route path="/Result3" element={<Result3 />} />
        <Route path="/Result4" element={<Result4 />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Tool" element={<Tool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
