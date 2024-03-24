/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬버튼</button>

      <button onClick={()=>{
        let copy = [...글제목]; // array와 object를 다룰 때는 원본을 보존하는 것이 좋다.
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>수정버튼</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ modal == true ? setModal(false) : setModal(true) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(true) }}>{ a } 
                <span onClick={()=>{
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}>👍</span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal/> : null
      }
      
    </div>
  );
}

function Modal() { // 다른 function 밖에 만들어야 한다.
  return ( // retrun (안에서는 하나의 태그로 시작해서 하나의 태그로 끝나야 한다.)
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
