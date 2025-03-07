import React from "react";
import ButtonEnter from "../componentsJJS/buttons/ButtonEnter";
import Input from "../componentsJJS/inputs/Input";
import InputHeader from "../componentsJJS/inputs/InputHeader";
import "./MemberLogin.css"
import { NavLink } from "react-router-dom";
import StepProgress from "../componentsJJS/inputs/StepProgress";

const MemberNew: React.FC=() => {
  const handleClick = () => {
    alert('버튼클릭!');
  };
  return <> 
    <div className="frame-box">

   <InputHeader title={"회원가입"}/>
   <StepProgress/>
    
    <div className="login-input-box">
      <Input title="이메일" placeholder= "아이디를 입력해주세요."/>
      <Input title="비밀번호" placeholder= "비밀번호를 입력해주세요."/>
      <Input title="비밀번호 확인" placeholder= "비밀번호를 입력해주세요."/>
      <ButtonEnter text="다음단계로 이동" styleID="login-btn" onClick={handleClick}/>
    </div>



      <div className="text-small-box">
        <NavLink className="text-small" to="/login">로그인</NavLink>
        <span className="text-small">|</span>
        <NavLink className="text-small" to="/loginSearchID">아이디 찾기</NavLink>
        <span className="text-small">|</span>
        <NavLink className="text-small" to="/loginSearchPW">비밀번호 찾기</NavLink>
      </div>
    
    </div>


  </>
 
};

export default MemberNew;