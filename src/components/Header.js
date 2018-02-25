import React from 'react'
import './Header.css'

const Header = () => (
  <header id="header" className="">

    <div id="header-main">

      <div className="container-fluid">

                        <span id="navi-trigger">
                            <span className="navi-trigger-text">
                                <span className="navi-trigger-text-menu navi-trigger-text-inn">MENU</span>
                                <span className="navi-trigger-text-close navi-trigger-text-inn">CLOSE</span>
                            </span>
                            <span className="navi-trigger-inn">
                                <span className="navi-trigger-hamberg-line navi-trigger-hamberg-line1"></span>
                                <span className="navi-trigger-hamberg-line navi-trigger-hamberg-line2"></span>
                                <span className="navi-trigger-hamberg-line navi-trigger-hamberg-line3"></span>
                            </span>
                        </span>


        <div className="navi-logo">

          <div className="logo-wrap">
            <div id="logo">
              <a className="logo-a" href="index.html" title="Air Theme">
                <h1 className="logo-h1 logo-not-show-txt">LotusWare</h1>
                <img className="logo-image logo-dark" src="img/demo/logo_dark.png" alt="Air Theme" />
                <span className="logo-light"><img className="logo-image" src="img/demo/logo_light.png" alt="Air Theme" /></span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>

  </header>

)

export default Header

