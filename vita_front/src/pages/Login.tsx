import React from "react";
import "./Login.css"
import ButtonEnter from "../componenets/button/ButtonEnter";
import Input from "../componenets/input/Input";

const Login: React.FC=() => {
  const handleClick = () => {
    alert('버튼클릭!');
  };
  return <> 
   <div className="login-box">

    <div className="login-header">
      <img src="images/vita_logo_3d.png" id="loginLogo" alt="로고" />
      <div className="title-text">
        <div>더 건강한 삶을 위한 AI</div>
        <div>건강을 위한 스마트 케어</div>
      </div>
    </div>
    <h1 className ="login-box-title">로그인</h1>
    <div className="login-input-box">
      <Input title="아이디" placeholder= "아이디를 입력해주세요."/>
      <Input title="비밀번호" placeholder= "비밀번호를 입력해주세요."/>
      <ButtonEnter text="로그인" styleID="login-btn" onClick={handleClick}/>
    </div>

      <h6 className="text-small-box">또는</h6>

      <div className="login-sns-box">
        <ButtonEnter text="네이버 로그인" styleID="login-naver" onClick={handleClick}/>
        <ButtonEnter text="카카오 로그인" styleID="login-kakao" onClick={handleClick}/>
        <ButtonEnter text="구글 로그인" styleID="login-google" onClick={handleClick}/>
      </div>
      <div className="text-small-box">
        <h6 className="text-small">회원가입</h6>
        <h6 className="text-small">|</h6>
        <h6 className="text-small">아이디찾기</h6>
        <h6 className="text-small">|</h6>
        <h6 className="text-small">비밀번호 찾기</h6>
      </div>
    
  </div>


  </>
 
};

export default Login;