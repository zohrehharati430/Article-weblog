import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import axios, { Axios } from "axios";
import { useContext } from "react";
import { AppContext } from "../../App";
import Footer from "../../components/footer/Footer";
function CreateArticle() {
  const {isLogin}=useContext(AppContext)
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    readingTime: "",
    message: "",
    imageUrl: "",
  });
  const handleChangeArticle = (e) => {
    console.log(e.target.name, e.target.value);
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };
  const handleCreateNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: 7,
      imageUrl: article.imageUrl,
      title: article.title,
      readingTime: article.readingTime,
      date: article.date,
      author: article.author,
      content: article.message,
    });
  };
  console.log(isLogin);
  return (
    <>
      <Navbar title="بلاگ" />
      
      
      {isLogin ? (
        <div className={styled.createArticlePage}>
          <div className="container">
            <h2>ساخت مقاله</h2>
            <Input
              label="عنوان"
              name="title"
              handleChange={handleChangeArticle}
              type="text"
            />
            <Input
              label="تاریخ"
              name="date"
              handleChange={handleChangeArticle}
              type="text"
            />
            <Input
              label="نویسنده"
              name="author"
              handleChange={handleChangeArticle}
              type="text"
            />
            <Input
              label="مدت زمان خواندن"
              name="readingTime"
              handleChange={handleChangeArticle}
              type="text"
            />
            <Input
              label="آدرس عکس"
              name="imageUrl"
              handleChange={handleChangeArticle}
              type="text"
            />

            <Textarea label="متن" handleChange={handleChangeArticleMessage} />
            <div className={styled.buttonWrapper}>
              <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
            </div>
          </div>
        </div>
      ) : (
        <p className={styled.aboutExit}> شما باید وارد شوید</p>
      )}
      <Footer />
    </>
  );
}
export default CreateArticle;
