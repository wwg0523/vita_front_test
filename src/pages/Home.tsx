import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../componentsJJS/inputs/SearchBar";
import "./Home.css"

export default function Home () {
  const location = useLocation();
 
  useEffect( () => {
    console.log(location.pathname);
  }, [] );

  return ( <>
    <div className="home-box">

      {/* 메인로고 */}
      <div className="main-container">
          <img src="/images/vita_logo_main.png" className="main-logo" alt="메인로고" />
          <p className="main-title"> Healthcare AI Chat-Bot </p>
      </div>

      {/* 검색창 컴포넌트 */}
      <SearchBar/>
      
    </div>

  </> );
};