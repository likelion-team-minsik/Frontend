
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Test from "./pages/Test";
import Name from "./pages/Name";
import Q1 from "./pages/Q1";
import Q2 from "./pages/Q2";
import Q3 from "./pages/Q3";
import Q4 from "./pages/Q4";
import Q5 from "./pages/Q5";
import Loading from "./pages/Loading";
import Result1 from "./pages/Result1";
import Result2 from "./pages/Result2";
import Result3 from "./pages/Result3";
import Result4 from "./pages/Result4";
import Intro from "./pages/Intro";
import Search from "./pages/Search";
import Tool from "./pages/Tool";


import TamcleTalk1 from "./pages/TamcleTalk1"
import TamcleTalk2 from "./pages/TamcleTalk2"
import TamcleTalk3 from "./pages/TamcleTalk3"
import CommentArea from "./pages/CommentArea"
import AddContent from "./pages/AddContent";
import Search2 from "./pages/Search2";
import QnA from "./pages/QnA";
import SignUp from "./pages/SignUp";
import SignUp2 from "./pages/SignUp2";
import SignDone from "./pages/SignDone";
import MyPage from "./pages/MyPage";
import MyComment from "./pages/MyComment";
import MyScrap from "./pages/MyScrap";
import MyPost from "./pages/MyPost";
import Login from "./pages/Login"; 
import './reset.css'; 


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
        <Route path="/Loading" element={<Loading />} />
        <Route path="/Result1" element={<Result1 />} />
        <Route path="/Result2" element={<Result2 />} />
        <Route path="/Result3" element={<Result3 />} />
        <Route path="/Result4" element={<Result4 />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Tool" element={<Tool />} />

        
        <Route path="/TamcleTalk1" element={<TamcleTalk1 />} />
        <Route path="/TamcleTalk2" element={<TamcleTalk2 />} />
        <Route path="/TamcleTalk3" element={<TamcleTalk3 />} />
        <Route path="/CommentArea/:id" element={<CommentArea />} />
        <Route path="/AddContent" element={<AddContent />}/>
        <Route path="/Search2" element={<Search2 />}/>
        <Route path="/QnA" element={<QnA />}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/SignUp2" element={<SignUp2/>}/>
        <Route path="/SignDone" element={<SignDone/>}/>
        <Route path="/MyPage" element={<MyPage/>}/>
        <Route path="/MyPost" element={<MyPost/>}/>
        <Route path="/MyScrap" element={<MyScrap/>}/>
        <Route path="/MyComment" element={<MyComment/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
