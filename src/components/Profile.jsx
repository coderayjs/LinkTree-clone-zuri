import React from "react";
import profileImg from "../img/profile-img.png";
import arrow from "../img/arrow.png";
import tripleDot from "../img/triple-dot.png";



const Profile = () => {
  return(
    <div className="profile">
      <img src={profileImg} alt="profile" className="profile__img" />
      <a href="index.html">
        <img src={arrow} alt="arrow" className="profile__arrow" />
        <img src={tripleDot} alt="triple-dot" className="triple-dot" />
        <h2 id="twitter">
          Raymond Tse
        </h2>
        <h2 id="slack">
          @raymond_tse
        </h2>
      </a>

    </div>
  )
}


export default Profile;