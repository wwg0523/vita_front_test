import EnterButton from "../componenets/button/EnterButton";
import InputBox from "../componenets/input/inputBox";
import "./Login.css"

export default function Login() {

  return <>
  <div id="loginBox">
    <div id="loginTitle">
      <img src="images/vita_logo_3d.png" id="loginLogo" alt="로고" />
      <div id="titleText">
        <div>더 건강한 삶을 위한 AI</div>
        <div>건강을 위한 스마트 케어</div>
      </div>
    </div>

    <h1 id="LoginTitleText">로그인</h1>

    <div id="mid">
      <InputBox/>
      <InputBox/>

      <EnterButton/>

      <h6>또는</h6>
      
      <div id="snsLogin">
        <EnterButton/>
        <EnterButton/>
        <EnterButton/>
      </div>
      <div id="miniText">
        <h6>회원가입</h6>
        <h6>|</h6>
        <h6>아이디찾기</h6>
        <h6>|</h6>
        <h6>비밀번호 찾기</h6>
      </div>
    </div>
  </div>


  </>
}