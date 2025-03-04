import "./SearchBar.css";

export default function SearchBar() {


  return <>

    {/* css position으로 해보기 */}
    <div id = "container">
      <div id="inputText">
        <input id="inputSearch"className="InputSearch form-control" type="text" placeholder="search..." />
        <img className="btnTool"src="/images/search_tool.svg" alt="돋보기" />
      </div>
      <button className="btnVoice"><img src="/images/search_voice.png" alt="마이크" /></button>
      <button className="btnEnter"><img src="/images/search_enter.svg" alt="엔터" /></button>

    </div>
  
  </>
}