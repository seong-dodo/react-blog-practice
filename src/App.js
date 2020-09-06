/*eslint-disable*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
 
  let [글제목, 글제목변경] = useState( ['할아버지 코트 추천','여자 코트 추천','유행하는 아이템'] );
  let [좋아요, 좋아요변경] = useState(0)
  let posts = '강남 고기 맛집';

  let [modal, modal변경] = useState( false )


  function 제목바꾸기(){
    var newArray = [...글제목] ;
    newArray[1] = '강남 우동 맛집' ;
    글제목변경( newArray )
  }

  
  function 제목바꾸기정렬(){
    var newArray = ['할아버지 코트 추천','여자 코트 추천','유행하는 아이템'] ;
    newArray.sort() ;
    글제목변경( newArray )
    
  }

  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }<span onClick={()=>{좋아요변경(좋아요+1)}}>♡</span>{ 좋아요 }</h3>
        <p>2월17일 발행</p>
        <hr/>
      </div> 
      <div className="list">
        <h3>{ 글제목[1] }<button onClick={ 제목바꾸기 }>next</button></h3>
        <p>2월18일 발행</p>
        <hr/>
      </div> 
      <div className="list">
        <h3 onClick={()=>{modal변경(true)}}>{ 글제목[2] }<button onClick={ 제목바꾸기정렬 }>가나다순정렬</button></h3>
        <p>2월19일 발행</p>
        <hr/>
      </div> 

    {
      modal === true
      ? <Modal></Modal>
      : null
    }
    
    </div>
  );
}


function Modal(){
return(
   <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
   </div>
)  
}

export default App;
