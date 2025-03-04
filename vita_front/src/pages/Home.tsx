/**
 * 
 */
// import React from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../MyStudy/SearchBar";


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
    <div className="flex-container">
      <img src="/assets/images/VitaLogo.png" className="MainLogo" alt="메인로고" />
      <h1> Healthcare AI Chat-Bot </h1>
      <SearchBar/>
    </div>
      

    </>
    
  )
};