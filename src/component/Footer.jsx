import React from "react";

const Footer = () => {
  return (<footer className="footer">
    <div className="top-footer">
      <p>Thunva Artkonghan.</p>
    </div>
    <div className="middle-footer">
      <div className="footer-menu">
        <div className="footer_menu_list">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Project">Project</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </div>
    <div className="footer-social-icons">
      <div className="icon">
        <a href="https://www.instagram.com/ft_0504">
          <i className="uil uil-instagram"></i>
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

    <div className="bottom-footer">
      Copyright <a href="Home" style={{textDecoration: "none"}}>©Thunva</a>{""} 
      -All Right Reserved</div>

  </footer>
  )
};
export default Footer;
