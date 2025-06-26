import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState, useEffect } from "react";

import TamcleTalk from "./pages/TamcleTalk"
import Main from "./pages/Main"
import CommentArea from "./pages/CommentArea"
import AddContent from "./pages/AddContent";
import Search from "./pages/Search";
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
        <Route path="/TamcleTalk" element={<TamcleTalk />} />
        <Route path="/CommentArea/:id" element={<CommentArea />} />
        <Route path="/AddContent" element={<AddContent />}/>
        <Route path="/Search" element={<Search />}/>
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
