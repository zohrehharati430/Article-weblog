
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ArticlePage() {

const [article1,setArticle]=useState([]);
  const params = useParams();
  useEffect(()=>{
   axios.get(`http://localhost:8000/articles/${params.id}`)
   .then((result)=>{
    console.log(result.data);
    setArticle(result.data);
   }) 
   .catch((error)=>{
    console.log(error);
   });
  },[])
  return (
    <>
      <Navbar title="بلاگ" />
      <div className={styled.articleWrapper}>
        <div className="container">
          <h1>{article1.title}</h1>
          <div className={styled.articleInfo}>
            <span>تاریخ:{article1.date}</span>
            <span>نویسنده:{article1.author}</span>
            <span>مدت زمان خواندن:{article1.readingTime} دقیقه</span>
          </div>
          <img src={article1.imageUrl} alt="" />
          <p>{article1.content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ArticlePage;
