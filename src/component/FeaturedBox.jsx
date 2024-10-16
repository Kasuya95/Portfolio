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
            สวัสดีครับ/ค่ะ! เป็นฟรีแลนซ์ที่เชี่ยวชาญด้าน การเขียนโปรแกรม
            มีประสบการณ์ในการทำงานกับลูกค้าหลากหลายประเภท ทั้งในและนอกประเทศ
            ผม/ฉันเชื่อในคุณภาพและการสร้างสรรค์ที่ตอบโจทย์ความต้องการของลูกค้า
            โดยมุ่งมั่นที่จะให้บริการที่ดีที่สุดและสร้างความสัมพันธ์ที่ดีกับทุกคนที่ได้ร่วมงานกัน
            ถ้าคุณกำลังมองหาคนที่สามารถช่วยพัฒนางานของคุณหรือมีโปรเจ็กต์ที่น่าสนใจ
            อย่าลังเลที่จะติดต่อมานะครับ/ค่ะ ยินดีมากที่จะได้ร่วมงานกับคุณ!
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
          <img src={avatar} alt="avatar"/>
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
