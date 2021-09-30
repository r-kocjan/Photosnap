import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <Container>
      <img src="/photosnap/shared/desktop/logo.svg" alt="logo" />
      <Menu>
        <li>
          <a href="#">Stories</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
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
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    background-color: #000;
    left: 0;
    bottom: 0;
  }
`;

export default Nav;
