import React from "react";
import ButtonEnter from "../componentsJJS/buttons/ButtonEnter";
import Input from "../componentsJJS/inputs/Input";
import InputHeader from "../componentsJJS/inputs/InputHeader";
import "./MemberLogin.css"
import { NavLink } from "react-router-dom";

const MemberLoginSearchID: React.FC=() => {
  const handleClick = () => {
    alert('버튼클릭!');
  };
  return <> 
    <div className="frame-box">

   <InputHeader title={"아이디 찾기"}/>
    
    <div className="login-input-box">
      <Input title="이메일 입력" placeholder= "이메일을 입력해주세요."/>
      <ButtonEnter text="아이디 찾기" styleID="login-btn" onClick={handleClick}/>
    </div>


    <div className="text-small-box">
        <NavLink className="text-small" to="/MemberNew">회원가입</NavLink>
        <span className="text-small">|</span>
        <NavLink className="text-small" to="/loginSearchPW">비밀번호 찾기</NavLink>
      </div>
  
    </div>


  </>
 
};

export default MemberLoginSearchID;