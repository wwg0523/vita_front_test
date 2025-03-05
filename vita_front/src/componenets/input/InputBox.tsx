import { useState } from "react"
import "./InputBox.css"

export default function InputBox() {
  // const [subTitle,setSubTitle] = useState(null);

  return <>
  <div id="subTitleBox">
    <h3 id="subTitle">아이디</h3>
    <input className="form-control" type="text" placeholder="아이디를 입력해 주세요..."/>
  </div>
  
  </>
}