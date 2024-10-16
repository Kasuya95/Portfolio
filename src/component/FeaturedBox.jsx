import React from "react";
import avatar from "../assets/images/Profile.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Thunva Artkonghan</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            Hello! I’m a freelance programmer with expertise in various programming languages. I have experience working with clients from different industries, both locally and internationally. I believe in delivering quality work that meets clients' needs, with a focus on creativity and innovation. My goal is to provide the best service possible and build strong relationships with everyone I work with. If you're looking for someone to help develop your project or have an interesting project in mind, don’t hesitate to reach out! I’d be thrilled to collaborate with you!
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download Cv <i className="uil uil-cloud-download"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/ft_0504">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100024504471796">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Kasuya95">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scoll Down</p>
        </a>
      </div>
    </section>
  );
};
export default FeaturedBox;
