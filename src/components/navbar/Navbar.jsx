import { useContext } from "react";
import styled from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
function Navbar(props) {
   const {isLogin,setIsLogin}=useContext(AppContext)
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div>
          
        </div>
        <div className={styled.header}>
          <h3>{props.title} {isLogin ? <span>زهره هراتی</span> : ""}</h3>
          <ul>
            <li>
              <Link to="/login"> ورود </Link>
            </li>
            <li>
              <Link to="/"> لیست مقالات</Link>
            </li>
            <li>
              <Link to="/create-article">مقاله جدید</Link>{" "}
            </li>
            <li>
              <Link to="/about">درباره</Link>
            </li>
            <li>
              <span onClick={()=>setIsLogin(false)}>خروج</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
