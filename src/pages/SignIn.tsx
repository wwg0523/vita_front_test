import React from "react";
import ButtonEnter from "../componentsJJS/buttons/ButtonEnter";
import Input from "../componentsJJS/inputs/Input";
import SubTitle from "../componentsJJS/inputs/SubTitle";
import { NavLink } from "react-router-dom";
import "./Sign.css";

const MemberLogin: React.FC=() => {
  const handleClick = () => {
    alert('버튼클릭!');
  };
  return <> 
    <div className="sign-box">
    sign-box--

   <SubTitle title={"로그인"}/>
    
    <div className="login-input-box">
      <Input title="아이디" subtitle="최소 8자 이상, 대문자와 소문자, 숫자 및 특수 문자 포함" placeholder= "아이디를 입력해주세요."/>
      <Input title="비밀번호" subtitle="" placeholder= "비밀번호를 입력해주세요."/>
      <ButtonEnter text="로그인" styleID="login-btn" onClick={handleClick}/>
    </div>

      <h6 className="text-small-box">또는</h6>

      <div className="login-sns-box">
        <ButtonEnter text="네이버 로그인" styleID="login-naver" onClick={handleClick}/>
        <ButtonEnter text="카카오 로그인" styleID="login-kakao" onClick={handleClick}/>
        <ButtonEnter text="구글 로그인" styleID="login-google" onClick={handleClick}/>
      </div>
      <div className="text-small-box">
        <NavLink className="text-small" to="/MemberNew">회원가입</NavLink>
        <span className="text-small">|</span>
        <NavLink className="text-small" to="/loginSearchID">아이디 찾기</NavLink>
        <span className="text-small">|</span>
        <NavLink className="text-small" to="/loginSearchPW">비밀번호 찾기</NavLink>
      </div>
    
    </div>


  </>
 
};

export default MemberLogin;