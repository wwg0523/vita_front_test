/**
 * 컴포넌트 : 서랍 메뉴
 */

import { NavLink } from "react-router-dom";

export default function DrawableMenu() {
  return (<>
    <div className="app-drawable-menu-wrap">
      <aside className="app-drawable-menu" id="drawable-menu">
        <div className="container"> DRAWABLE </div>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>

      </aside>
    </div>
  </>);
}