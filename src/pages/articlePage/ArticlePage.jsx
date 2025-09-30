import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { useContext } from "react";
import { AppContext } from "../../App";
function ArticlePage() {
  const {isLogin}=useContext(AppContext)
  const [article1, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        console.log(result.data);
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Navbar title="بلاگ" />
      
      { isLogin ? (
      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <h1>{article1.title}</h1>
              <div className={styled.articleInfo}>
                <span>تاریخ:{article1.date}</span>
                <span>نویسنده:{article1.author}</span>
                <span>مدت زمان خواندن:{article1.readingTime} دقیقه</span>
              </div>
              <img src={article1.imageUrl} alt="" />
              <p>{article1.content}</p>
            </>
          )}
        </div>
      </div>
      ):(
        <p className={styled.aboutExit}> شما باید وارد شوید</p>
      )}
      <Footer />
    </>
  );
}
export default ArticlePage;
