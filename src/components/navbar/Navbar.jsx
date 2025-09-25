import styled from './navbar.module.css'
function Navbar(){
    
  return(
    <div  className={styled.header}>
      <ul>
        <li>لیست مقالات</li>
        <li>مقاله جدید</li>
        <li>درباره</li>
      </ul>
    </div>
  )
}
export default Navbar