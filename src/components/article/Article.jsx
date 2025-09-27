import styled from "./article.module.css"
import articled from "./../../assets/images/article.jpg"
function Article(props){
    console.log(props.data);
    return(
        <div className={styled.articleWrapper}>
            <img src={props.data.imageUrl} />
            <h3>{props.data.title}</h3>
             <p>خواندن{props.data.readingTime} دقیقه ای</p>
        </div>
    )
}

export default Article