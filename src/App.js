/*eslint-disable*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
 
  let [글제목, 글제목변경] = useState( ['할아버지 코트 추천','여자 코트 추천','유행하는 아이템'] );
  let [좋아요, 좋아요변경] = useState(0)
  let posts = '강남 고기 맛집';

  let [modal, modal변경] = useState( false )
  let [newpost, newpost작성] = useState( false )

  var 어레이 =[2,3,4] ;
  어레이.map(function(a) {
   return a*10
  });



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

  function newpost열기닫기(){
    //만약에 newPost가 true 이면 false로 업데이트
    if(newpost == true) newpost작성(false)
    else newpost작성(true)
    //만약에 newPost가 false 이면 true로 업데이트
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
        <h3 onClick={()=>{modal변경(!modal)}}>{ 글제목[2] }<button onClick={ 제목바꾸기정렬 }>가나다순정렬</button></h3>
        <p>2월19일 발행</p>
        <hr/>
        <button onClick={()=>{newpost열기닫기()}}>새글작성</button>
      </div> 


     {
       글제목.map(function (글) {
         return (
          <div className="list">
           <h3>{ 글 }<span onClick={()=>{좋아요변경(좋아요+1)}}>♡</span>{ 좋아요 }</h3>
           <p>2월17일 발행</p>
           <hr/>
          </div> 
         )
      })
      
     }

     {
       newpost === true
       ? <Newpost />
       : null
     }

    {
      modal === true
      ? <Modal></Modal>
      : null
    }
    
    </div>
  );
}

function Newpost(){
 return(
   <div className="newpost">
     <h2>POST제목</h2>
     <p>새글작성하기</p>
   </div>
 ) 
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
