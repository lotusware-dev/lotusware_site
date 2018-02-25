import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer id="footer" className="footer-cols-layout">

    <div className="footer-info">
      <div className="footer-container">
        <div className="span6">
          <div id="logo-footer">
            <a href="http://themes.uiueux.com/air/" title="Air Theme">
              <img className="logo-footer-img" src="img/demo/logo_dark.png" alt="Air Theme" />
            </a>
          </div>
        </div>

        <div className="span6">
          <div className="footer-social">
            <ul className="socialmeida clearfix">

              <li className="socialmeida-li">
                <a title="Facebook" href="https://www.facebook.com/uiueux" className="socialmeida-a">
                  <span className=""></span> <span className="socialmeida-text">Facebook</span>
                </a>
              </li>

              <li className="socialmeida-li">
                <a title="Twitter" href="https://twitter.com/uiueux" className="socialmeida-a">
                  <span className=""></span> <span className="socialmeida-text">Twitter</span>
                </a>
              </li>

              <li className="socialmeida-li">
                <a title="Behance" href="https://www.behance.net/bwsm" className="socialmeida-a">
                  <span className=""></span> <span className="socialmeida-text">Behance</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid back-top-wrap"><div id="back-top"></div></div>

  </footer>
)

export default Footer
