import Input from "../../components/input/Input";
import styled from "./login.module.css";
import { AppContext } from "../../App";
import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function Login() {
  const { setIsLogin } = useContext(AppContext);
  return (
    <>
      <Navbar title="بلاگ" />
      <div className={styled.login}>
        <h2>ورود به سایت</h2>

        <Input label="نام کاربری" name="username" type="text" />
        <Input label="رمز عبور" name="password" type="text" />
        <button onClick={() => setIsLogin(true)}>Login</button>
      </div>
      <Footer />
    </>
  );
}
export default Login;
