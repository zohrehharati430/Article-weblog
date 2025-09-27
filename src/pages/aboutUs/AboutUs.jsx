import Navbar from "../../components/navbar/Navbar";
import styled from "./about.module.css";
import Flower from "./../../assets/images/article.jpg";
import Footer from "../../components/footer/Footer";
function AboutUs(){
    return(
        <div>
            <Navbar title="بلاگ"/>
            <div className={styled.aboutPage}>
            
            <div className="container">
                <h2>درباره ما</h2>
            <p>
                منظور از متغیر، عبارتی است که به یک شناسه انتساب یافته است و از این رو می‌توان در موارد آتی در برنامه آن را مورد ارجاع قرار داده و استفاده کرد. متغیرها در جاوا اسکریپت هیچ نوع مشخصی ندارند. می‌توان یک نوع به متغیر نسبت داد و سپس می‌توان نوع دیگری برای آن تعیین کرد و هیچ خطا یا مشکلی نیز پیش نمی‌آید.

به همین دلیل است که جاوا اسکریپت در مواردی یک زبان برنامه‌نویسی «فاقد نوع» (untyped) نامیده می‌شود. متغیر باید پیش از استفاده، اعلان شود. 2 روش برای انجام این کار وجود دارد که شامل استفاده از کلیدواژه‌های var ،let یا const است. تفاوت این سه روش در نوع تعامل بعدی با متغیر است.
            </p>
            <h3>گل زیبا</h3>
            <img src={Flower} alt="flower" />
            </div>
            <Footer />
        </div>
        </div>
    )
}
export default AboutUs;