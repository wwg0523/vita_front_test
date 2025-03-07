import "./SearchBar.css";

export default function SearchBar() {


  return <>
    <form action="#" className="container">
      <input type="text" className="search form-control rounded-pill" id="search" placeholder="search..." required/>
      
      <div className="icon">
        <button className="icon1"><img src="\public\images\search_voice.png" alt="마이크"/></button>
        <button className="icon2"><img src="\public\images\search_tool.svg" alt="돋보기"/></button>
        <button className="icon3"><img src="\public\images\search_enter.svg" alt="엔터"/></button>
      </div>
    </form>




  
  </>
}