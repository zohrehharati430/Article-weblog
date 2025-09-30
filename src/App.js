
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import Home from "./pages/home/Home";
import { createContext} from "react"; 
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import { useState } from "react";
export const AppContext = createContext(null)
function App() {
  const [isLogin,setIsLogin]=useState(false);
  return (
    <div>
      <AppContext.Provider value={{ isLogin ,setIsLogin}}>
  <Routes>
   
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/article/:id" element={<ArticlePage />} />
    <Route path="/create-article" element={<CreateArticle />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</AppContext.Provider>

    </div>
  );
}


export default App;
