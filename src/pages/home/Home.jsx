import { useContext, useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { AppContext } from "../../App";
function Home(props) {
  const {isLogin}=useContext(AppContext)
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //API CALL
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        console.log(result.data);
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="بلاگ" />

      <div className="container">
        <h2>مقالات جدید</h2>
        {/*shart? dorost:ghalat */}
        {isLoading ? (
          <Spinner />
        ) : isLogin ? (
          <div className={styled.articles}>
            {articles.map((result) => (
              <Link to={`/article/${result.id}`}>
                <Article key={result.id} data={result} />
              </Link>
            ))}
          </div>
        ) : (
          <p className={styled.aboutExit}> شما باید وارد شوید</p>
        )}

        <Footer />
      </div>
    </div>
  );
}
export default Home;
