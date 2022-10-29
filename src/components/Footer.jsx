import zuri from "../img/zuri.png";
import zuriimpress from "../img/zuri-ingressive-img.png";



const Footer = () => {
return(
  <div className="foot">
    <div className="foot-body">
    <img src={zuri} alt="zuri" className="zuri__img" />
       <p id="hng-text"> HNG Internship 9 FrontEnd Task</p>
        <img src={zuriimpress} alt="zuriimpress" className="zuri__impress" />
    </div>
  </div>

)



}


export default Footer;