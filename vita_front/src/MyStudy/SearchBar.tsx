import "./SearchBar.css";

export default function SearchBar() {


  return <>
   
   

    {/* css position으로 해보기 */}
    <div id = "container">

      <input className="form-control  InputSearch3 " type="text" placeholder="search..." />
      <img className="btn1"src="../assets/images/searchBar/search.png" alt="돋보기아이콘" />
      <button className="btn2"><img src="../assets/images/searchBar/iconVoice.png" alt="보이스" /></button>
      <button className="btn3"><img src="../assets/images/searchBar/searchEnter.png" alt="엔터" /></button>

    </div>




    

    

  
  </>
}