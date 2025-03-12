import "./SubTitle.css"

interface SubTitleProps {
title : string;

}

export default function Subtitle({title}: SubTitleProps) {



return (<>
    <div className="login-title-header">
      <div className="login-title-box">
        <img src="\images\vita_logo.png" id="loginLogo" alt="로고" />
        <div className="title-text">
          <span>더 건강한 삶을 위한 AI</span>
          <span>건강을 위한 스마트 케어</span>
        </div>
      </div>
      <span className ="login-box-title">{title}</span>
    </div>
  </>
  )


}
