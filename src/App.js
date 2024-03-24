/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [글제목1, b] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  
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
            <div className="list" >
              <h4 onClick={()=>{ setModal(true); setTitle(i) }}>{ a } 
                <span onClick={(e)=>{ 
                  e.stopPropagation() // 이벤트 버블링 막아줌
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}>👍</span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{ 
        입력값변경(e.target.value);
        console.log(입력값);
      }}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} color="#d7dcf5" 글제목={글제목}/> : null
      }
      
      <Modal2></Modal2>

    </div>
  );
}

function Modal(props) { // 다른 function 밖에 만들어야 한다.
  return ( // retrun (안에서는 하나의 태그로 시작해서 하나의 태그로 끝나야 한다.)
    <div className="modal" style={{background : props.color}}>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{ props.글제목변경(['여자코트 추천','강남 우동맛집','파이썬독학']) }}>글수정</button>
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render(){
    return (
      <div>안녕 { this.state.age }
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
