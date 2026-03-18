import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Navbar() {
  const [isActive, setActive] = useState(1);
  const navList = [{id: 1, title:'Home', link: '/home'},
    {id: 2, title:'Menu', link: '/menu'},
    {id: 3, title:'Book Table', link:'/book'}
  ]
  const [addshow, removeShow] = useState(false);
  const setNavbarToggle = (e) => {
    if(e.ariaExpanded === 'false') {
      e.setAttribute('aria-expanded', 'true');
      removeShow(true);
    } else {
      e.setAttribute('aria-expanded', 'false');
      removeShow(false);
    }
  }
    return(
      <div className="hero_area" style={{background: '#222831'}}>
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              Feane
            </span>
          </a>

          <button className="navbar-toggler" onClick={(e) => setNavbarToggle(e.target)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className={addshow ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              {navList.map(({id,link,title}) => {
              return <li key={id} onClick={() => setActive(id)} className={isActive == id ? 'nav-item active': 'nav-item'}>
               <NavLink className="nav-link" to={link}>{title}</NavLink>
                </li>
              })}
            </ul>
            <div className="user_option">
              <a href="" className="user_link">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
              <a href="" className="user_link">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a href="" className="order_online">
                Order Online
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </div>
    )
}

export default Navbar