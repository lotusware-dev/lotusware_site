import React from 'react'
import './Header.css'

const Header = () => (
  <div id="menu-panel">
    <div className="menu-panel-inn fullscreen-wrap">
      <nav id="navi">
        <div id="navi-wrap" className="menu-navi-wrap">
          <ul className="menu clearfix">
            <li id="menu-item-246" className="menu-item"><a href="/">Home</a></li>
            <li id="menu-item-246" className="menu-item"><a href="/blog">Blog</a></li>
            <li id="menu-item-256" className="menu-item"><a href="/about">About</a></li>
            <li id="menu-item-247" className="menu-item"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div id="menu-panel-bottom" className="container-fluid">
        <div className="menu-panel-bottom-left col-md-3 col-sm-3 col-xs-3">
          <div className="search-top-btn-class">
            <span className="fa fa-search"/>
            <form className="search_top_form" method="get" action="#">
              <input type="search" id="s" name="s" className="search_top_form_text" placeholder="Type and Hit Enter"/>
            </form>
          </div>
        </div>
        <div className="menu-panel-bottom-right col-md-9 col-sm-9 col-xs-9">
          <div className="socialmeida-mobile">
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
  </div>
)

export default Header

