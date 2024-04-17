import React, { useState } from "react";
import { div, useNavigate } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const onClickggleMobileMenu = () => setIsMobileMenuOpen((pre) => !pre);
  const navigate = useNavigate()

  return (
    <header className="navbar-header">
      <div className="deksonClickp-only-header">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo">
              <div onClick={() => {
                navigate('/home')
                setIsMobileMenuOpen(false)
              }}>
                <img
                  src="assets/images/logo4.png"
                  alt="Drivschol HTML"
                  width="171"
                />
              </div>
            </div>
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="megamenu megamenu-clickable megamenu-clickable--onClickggler">
                  <a
                    href="#"
                    onClick={() => {
                      navigate("/")

                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div onClick={() => {
                    navigate('/training')

                    setIsMobileMenuOpen(false)
                  }}>Training Programs</div>
                </li>
                <li>
                  <div onClick={() => {
                    navigate('/training')

                    setIsMobileMenuOpen(false)
                  }}>Seminar Content</div>
                </li>
                <li>
                  <div onClick={() => {
                    navigate('/training')

                    setIsMobileMenuOpen(false)
                  }}>About Us</div>
                </li>
                <li className="dropdown">
                  <div onClick={
                    () => setOpenDropdown(!openDropdown)
                  }>Getting Started</div>
                  {openDropdown && <ul className="sub-menu">
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          navigate("/")

                          setIsMobileMenuOpen(false)
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <div onClick={() => {
                        navigate('/training')

                        setIsMobileMenuOpen(false)
                      }}>License Class A</div>
                    </li>
                    <li>
                      <div onClick={() => {
                        navigate('/training')

                        setIsMobileMenuOpen(false)
                      }}>Funding</div>
                    </li>
                  </ul>}
                </li>
                <li>
                  <div onClick={() => {
                    navigate('/training')

                    setIsMobileMenuOpen(false)
                  }}>Contact</div>
                </li>
              </ul>
            </nav>
            <div className="main-header__right main-header__right--two">
              <div>
                <butonClickn
                  className="p-2 me-3 d-none d-sm-block"
                  style={{
                    backgroundColor: "#00b2d2",
                    borderRadius: "8px",
                    border: "none",
                    color: "white",
                    padding: "10px 20px",
                  }}
                >
                  <div style={{
                    color: 'white',
                  }}>Enroll Now!</div>
                </butonClickn>
              </div>
              <div
                className="mobile-nav__btn mobile-nav__onClickggler"
                onClick={onClickggleMobileMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mobile-only-header width-fit"
        style={{
          opacity: isMobileMenuOpen ? "1" : "0",
          visibility: isMobileMenuOpen ? "visible" : "hidden",
          transition: "opacity 0.6s ease, visibility 0.3s ease",
        }}
      >
        <div className="brand">
          <div>
            <img
              src="assets/images/logo4.png"
              alt="Drivschol HTML"
              width="171"
            />
          </div>
        </div>

        <div className="nav-items">
          <ul className="main-menu__list">
            <li className="megamenu megamenu-clickable megamenu-clickable--onClickggler">
              <a
                href="#"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Home
              </a>
            </li>
            <li>
              <div onClick={() => {
                navigate("/training_programmes")
                setIsMobileMenuOpen(false)
              }
              }>Training Programs</div>
            </li>
            <li>
              <div onClick={() => {

                navigate("/seminar")
                setIsMobileMenuOpen(false)

              }
              }>Seminar Content</div>
            </li>
            <li>
              <div onClick={() => {

                navigate("/aboutus")
                setIsMobileMenuOpen(false)

              }
              }>About Us</div>
            </li>
            <li className="dropdown">
              <div onClick={
                    () => setOpenDropdown(!openDropdown)
                  }>Getting Started</div>
              {openDropdown && <ul className="sub-menu">
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div onClick={
                    () => {

                      navigate("/license")
                      setIsMobileMenuOpen(false)
                    }
                  }>License Class A</div>
                </li>
                <li>
                  <div onClick={
                    () => {

                      navigate("/funding")
                      setIsMobileMenuOpen(false)
                    }
                  }>Funding</div>
                </li>
              </ul>}
            </li>
            <li>
              <div onClick={

                () => {

                  navigate("/contact")
                  setIsMobileMenuOpen(false)
                }
              }>Contact</div>
            </li>
          </ul>
        </div>

        <div className="info-area">
          <ul className="mobile-nav__contact ">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailonClick:tta@cogeco.net">tta@cogeco.net</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:(905) 573-3635">(905) 573-3635</a>
            </li>
          </ul>
        </div>

        <div className="social-area">
          <a href="https://facebook.com">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com">
            <i className="icon-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://pinterest.com">
            <i className="icon-pinterest" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com">
            <i className="icon-Instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
