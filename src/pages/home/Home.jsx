import Article from "../../components/article/Article"
import Navbar from "../../components/navbar/Navbar"
import styled from "./home.module.css"
function Home(props){
    return(
       <div className={styled.homeWrapper}>        
        <Navbar title="بلاگ"/>
        <div className="container">
            <h2>مقالات جدید</h2>
            <div className={styled.articles}>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </div>
       </div> 
    )
}
export default Home