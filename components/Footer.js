import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Full>
      <Container>
        <div className="flex-column">
          <img src="/photosnap/shared/desktop/logo-white.svg" alt="logo" />
          <div className="social">
            <ul>
              <a href="#">
                <img src="/photosnap/shared/desktop/facebook.svg" alt="fb" />
              </a>
            </ul>
            <ul>
              <a href="#">
                <img src="/photosnap/shared/desktop/youtube.svg" alt="yt" />
              </a>
            </ul>
            <ul>
              <a href="#">
                <img src="/photosnap/shared/desktop/twitter.svg" alt="tw" />
              </a>
            </ul>
            <ul>
              <a href="#">
                <img src="/photosnap/shared/desktop/pinterest.svg" alt="pin" />
              </a>
            </ul>
            <ul>
              <a href="#">
                <img
                  src="/photosnap/shared/desktop/instagram.svg"
                  alt="insta"
                />
              </a>
            </ul>
          </div>
        </div>
        <ul className="footer-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className="invite">
          <button className="button-invite">
            Get an invite
            <img src="/photosnap/shared/desktop/arrow-white.svg" alt="arrow" />
          </button>
          <span className="copy">Copyright 2021. All Rights Reserved</span>
        </div>
      </Container>
    </Full>
  );
};

const Full = styled.footer`
  background-color: var(--black);
  padding: 7rem 0;
`;
const Container = styled.div`
  width: 1128px;
  margin: 0 auto;
  color: var(--white);
  display: flex;
  /* align-items: flex-start; */
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .social {
    display: flex;
    gap: 1.3rem;

    img {
      width: 2.3rem;
    }
  }
  .footer-menu {
    margin-top: -2px;
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: var(--white);
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 2px;
      transition: all 167ms;
    }
    li:hover a {
      color: #727272;
    }
  }
  .invite {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .button-invite {
    background-color: transparent;
    color: var(--white);
    border: 0;
    font-family: inherit;
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 167ms;
    position: relative;
    padding-bottom: 5px;
    &::after {
      content: "";
      transition: all 167ms;
      width: 63%;
      transform: scaleX(0);
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
    &:hover::after {
      transform: scaleX(1);
    }

    .arrow {
      margin-left: 1rem;
    }
  }
  .copy {
    color: var(--darker-gray);
  }
`;

export default Footer;