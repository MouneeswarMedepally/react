import React from "react";
import './footer.css';
import {FaEnvelope,FaMapMarkerAlt,FaTwitter,FaFacebookF,FaLinkedinIn,FaTelegramPlane} from 'react-icons/fa';
class MyFooter extends React.Component {
  render() {
    return (
      <footer className="myfooter">
        <div className="footer_div">
          <div className="column1">
            <h3>EDYODA</h3>
            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">Contact Us</a>
            <a href="/">Terms Of Us</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="column2">
            <h3>RESOURCES</h3>
            <a href="/">Learning Paths</a>
            <a href="/">Courses</a>
            <a href="/">Learning Videos</a>
            <a href="/">Educators</a>
            <a href="/">Edyoda Stories</a>
            <a href="/">University</a>
          </div>
          <div className="column3">
            <h3>FOR EMPLOYERS</h3>
            <a href="/">Train your Employees</a>
            <h3>QUICK LINKS</h3>
            <a href="/">Learn and Earn</a>
            <a href="/">Become a Learning-Enabler</a>
            <a href="/">Tips for Learning-Enabler</a>
            <a href="/">Request New Topic</a>
            <a href="/">Certification</a>
            <a href="/">Affiliate Program</a>
          </div>
          <div className="column4">
            <h3>CONNECT</h3>
            <address>
              <p className="address_para">
                1st Floor,<br></br>Gopalan Millennium Tower,<br></br>ITPL Main
                Road,Brookefield, <br></br>Bengaluru, Karnataka-560037,{" "}
                <br></br>India
              </p>
              <a className="mail_icon" href="mailto:hello@edyoda.com">
                <FaEnvelope />
                hello@edyoda.com
              </a>
              <br></br>
              <div className="icons">
                <a href="/">
                  <FaMapMarkerAlt />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                 <FaFacebookF />
                </a>
                <a href="/">
                  <FaLinkedinIn />
                </a>
                <a href="/">
                  <FaTelegramPlane />
                </a>
              </div>
              <br></br>© 2022<br></br>
              zekeLabs Technologies Private Limited
            </address>
          </div>
        </div>
      </footer>
    );
  }
}

export default MyFooter;
