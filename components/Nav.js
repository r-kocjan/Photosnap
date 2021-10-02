import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <a href="/projekty/photosnap" className="home-link">
        <img src="/photosnap/shared/desktop/logo.svg" alt="logo" />
      </a>

      <Menu>
        <li>
          <a href="/projekty/photosnap/stories">Stories</a>
        </li>
        <li>
          <a href="/projekty/photosnap/features">Features</a>
        </li>
        <li>
          <a href="/projekty/photosnap/pricing">Pricing</a>
        </li>
      </Menu>
      <button className="button-invite" type="button">
        Get an invite
      </button>
    </Container>
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

export default Nav;
