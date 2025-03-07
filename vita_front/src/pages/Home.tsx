/**
 * 
 */
// import React from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../componenets/input/SearchBar";
import "./Home.css"


export default function Home () {

  const location = useLocation();
  
  /* App.useEffect( ... )
  */
  useEffect( () => {
    
    console.log(location.pathname);
  }, [] );


  return (
    <>

    {/* HOME */}
    <div className="main-container">

      {/* 메인로고 */}
      <div className="flex-container">
          <img src="/images/vita_logo_3d.png" className="main-logo" alt="메인로고" />
          <h1> Healthcare AI Chat-Bot </h1>
      </div>

      {/* 검색창 컴포넌트 */}
      <SearchBar/>
      
    </div>

    </>
    
  )
};