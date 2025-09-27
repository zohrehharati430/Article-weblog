import { useEffect,useState } from "react";
import Article from "../../components/article/Article"
import Navbar from "../../components/navbar/Navbar"
import styled from "./home.module.css"
import axios  from  "axios";
function Home(props){
    const [articles,setArticles]=useState([],)
    useEffect(()=>{
        //API CALL
        axios.get("http://localhost:8000/articles")
        .then((result)=>{
            console.log(result.data.data);
            setArticles(result.data.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    
    return(
       <div className={styled.homeWrapper}>        
        <Navbar title="بلاگ"/>
        <div className="container">
            <h2>مقالات جدید</h2>
            <div className={styled.articles}>
                {
                    articles.map((result) =>(
                        <Article key={result.id} article={result}/>
                    ))
                }
                
            </div>
        </div>
       </div> 
    )
}
export default Home