import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import axios, { Axios } from "axios";
function CreateArticle() {
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
      imageUrl:article.imageUrl,
      title:article.title ,
      readingTime: article.readingTime,
      date:article.date ,
      author: article.author,
      content:article.message
    });
  };
  console.log(article);
  return (
    <>
      <Navbar title="بلاگ" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله</h1>
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
    </>
  );
}
export default CreateArticle;
