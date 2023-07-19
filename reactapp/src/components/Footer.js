import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './Footer.css';

function Footer() {
    return (
      <div style={{background:"rgb(49, 48, 53)", color:"white"}}>
<footer className="footer">
        <div className="background">
          <div className="row1">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="#">PAYMENT</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                <a href="https://twitter.com/"><i className="fab fa-twitter" /></a>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
</div>
    );
  }
  
  export default Footer;