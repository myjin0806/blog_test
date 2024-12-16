import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
function Home(){
  return(
    <h2>메인페이지입니다</h2>
  )
}
function About(){
  return(
    <h2>어바웃 페이지입니다</h2>
  )
}
function Contect(){
  return(
    <h2>콘텍트 페이지입니다</h2>
  )
}


function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">홈</a>|
        <a href="/about">어바웃</a>|
        <a href="/contect">콘텍트</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contect" element={<Contect/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
