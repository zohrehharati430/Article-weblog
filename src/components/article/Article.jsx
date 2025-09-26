import styled from "./article.module.css"
import articled from "./../../assets/images/article.jpg"
function Article(){
    return(
        <div className={styled.articleWrapper}>
            <img src={articled} />
            <h3>متغییرها در جاوااسکریپت</h3>
        <p>خواندن 5 دقیقه ای</p>
        </div>
    )
}

export default Article