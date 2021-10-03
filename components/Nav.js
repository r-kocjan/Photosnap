import React, { useRef, useState } from "react";
import styled from "styled-components";

const Nav = ({ active }) => {
  const menuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = (e) => {
    setMenuActive(!menuActive);
    menuRef.current.classList.toggle("active");
    if (menuActive) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <Container>
        <a href="/projekty/photosnap" className="home-link">
          <img src="/photosnap/shared/desktop/logo.svg" alt="logo" />
        </a>
        <Menu>
          <li className={active === "stories" ? "active" : ""}>
            <a href="/projekty/photosnap/stories">Stories</a>
          </li>
          <li className={active === "features" ? "active" : ""}>
            <a href="/projekty/photosnap/features">Features</a>
          </li>
          <li className={active === "pricing" ? "active" : ""}>
            <a href="/projekty/photosnap/pricing">Pricing</a>
          </li>
        </Menu>
        <button className="button-invite" type="button">
          Get an invite
        </button>
      </Container>
      <ContainerMobile>
        <div className="app-header">
          <a href="/projekty/photosnap" className="home-link">
            <img
              src="/photosnap/shared/desktop/logo.svg"
              alt="logo"
              className="logo"
            />
          </a>
          <img
            src={
              menuActive
                ? "/photosnap/shared/mobile/close.svg"
                : "/photosnap/shared/mobile/menu.svg"
            }
            alt="menu"
            className="hamburger"
            onClick={toggleMenu}
          />
        </div>

        <MobileMenu ref={menuRef}>
          <div
            className={`overlay ${menuActive ? "overlay-active" : ""}`}
            onClick={toggleMenu}
          ></div>
          <li>
            <a href="/projekty/photosnap/stories">Stories</a>
          </li>
          <li>
            <a href="/projekty/photosnap/features">Features</a>
          </li>
          <li className="border-bottom">
            <a href="/projekty/photosnap/pricing">Pricing</a>
          </li>
          <button className="button-invite" type="button">
            Get an invite
          </button>
        </MobileMenu>
      </ContainerMobile>
    </>
  );
};

const Container = styled.nav`
  width: 1128px;
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
  .hamburger {
    display: none;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }

  .home-link {
    line-height: 0;
  }
  img {
    cursor: pointer;
  }
  .button-invite {
    padding: 1.3rem 2rem;
    font-family: inherit;
    font-weight: bold;
    text-transform: uppercase;
    background-color: var(--black);
    color: var(--white);
    letter-spacing: 1px;
    border: 0;
    transition: all 167ms;
    cursor: pointer;
    &:hover {
      background-color: var(--light-gray);
      color: var(--black);
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    font-weight: bold;
    font-size: 1.6rem;
  }
  li {
    position: relative;
    padding-bottom: 2px;
    &:hover::after {
      width: 100%;
    }
  }

  .active {
    &::after {
      width: 100%;
    }
  }

  li::after {
    content: "";
    transition: all 167ms;
    width: 0;
    position: absolute;
    height: 2px;

    background: linear-gradient(
      28deg,
      rgb(255, 197, 147),
      rgb(188, 113, 152),
      rgb(90, 119, 255)
    );
    left: 0;
    bottom: 0;
  }
`;

const ContainerMobile = styled.nav`
  padding: 2rem;
  background-color: transparent;
  position: relative;
  @media (min-width: 1200px) {
    display: none;
  }

  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 0;
    /* padding: 2rem 0; */
    height: 6rem;
    .logo {
      width: 17rem;
    }
    .hamburger {
      cursor: pointer;
      width: 2.5rem;
      z-index: 30;
    }
  }
`;

const MobileMenu = styled.ul`
  border-top: 1px solid var(--dark-gray);
  padding: 4rem 0;
  margin-top: 2.5rem;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  transform: translateY(-150%);
  opacity: 0;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;

  gap: 2rem;
  font-weight: bold;
  transition: all 167ms;
  text-align: center;
  .overlay {
    width: 100%;
    height: 100vh;
    z-index: -20;
    position: absolute;
    top: 100%;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: hidden;

    &.overlay-active {
      visibility: visible;
    }
  }
  &.active {
    transform: translateY(0);
    opacity: 1;
    z-index: 10;
  }

  .border-bottom {
    width: 90%;
    border-bottom: 1px solid var(--black);
    padding-bottom: 2.5rem;
  }
  button {
    padding: 1.3rem 2rem;
    font-family: inherit;
    font-weight: bold;
    text-transform: uppercase;
    background-color: var(--black);
    color: var(--white);
    letter-spacing: 1px;
    border: 0;
    transition: all 167ms;
    cursor: pointer;
    margin-top: 1rem;
    width: 90%;
  }
`;

export default Nav;
