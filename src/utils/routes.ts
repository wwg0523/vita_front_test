import React from "react";
import { createBrowserRouter } from "react-router-dom";

import PageLayout from "../componenets/layout/PageLayout.tsx";
import Home from '../pages/Home.tsx';
import SignIn from "../pages/SignIn.tsx";
import MemberLoginSearchID from "../pages/MemberLoginSearchID.tsx";
import MemberLoginSearchPW from "../pages/MemberLoginSearchPW.tsx";
import MemberNew from "../pages/MemberNew01.tsx";

/**
 * createBrowserRouter() : JSON 형식으로 라우팅 설정
*/
const routes = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(PageLayout),
    loader: undefined,
    errorElement: undefined,
    children: [
      {
        index: true,
        element: React.createElement(Home),
      },
      {
        path: "/login",
        element: React.createElement(SignIn),
      },
      {
        path: "/loginSearchID",
        element: React.createElement(MemberLoginSearchID),
      },
      {
        path: "/loginSearchPW",
        element: React.createElement(MemberLoginSearchPW),
      },
      {
        path: "/MemberNew",
        element: React.createElement(MemberNew),
      },
    ]
  },
]);


export default routes;
