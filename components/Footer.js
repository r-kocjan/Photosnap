import React from "react";

import styled from "styled-components";
const Footer = () => {
  return (
    <Full>
      <Container>
        <div className="flex-column">
          <a href="/projekty/photosnap">
            <img src="/photosnap/shared/desktop/logo-white.svg" alt="logo" />
          </a>

          <ul className="social">
            <li>
              <a href="#">
                <img src="/photosnap/shared/desktop/facebook.svg" alt="fb" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/photosnap/shared/desktop/youtube.svg" alt="yt" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/photosnap/shared/desktop/twitter.svg" alt="tw" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/photosnap/shared/desktop/pinterest.svg" alt="pin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/photosnap/shared/desktop/instagram.svg"
                  alt="insta"
                />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-menu">
          <li>
            <a href="/projekty/photosnap">Home</a>
          </li>
          <li>
            <a href="/projekty/photosnap/stories">Stories</a>
          </li>
          <li>
            <a href="/projekty/photosnap/features">Features</a>
          </li>
          <li>
            <a href="/projekty/photosnap/pricing">Pricing</a>
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
  @media (max-width: 1200px) {
    width: 90%;
    position: relative;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .social {
    display: flex;
    gap: 1.3rem;
    @media (max-width: 1200px) {
      margin-top: 12rem;
    }
    li:hover img {
      transform: scale(1.3);
    }
    img {
      width: 2.3rem;
      transition: all 167ms;
    }
  }
  .footer-menu {
    margin-top: -2px;
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 1200px) {
      flex-direction: row;
      position: absolute;
      left: 0;
      margin: 0;
      top: 30%;
    }
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
    align-items: flex-end;
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
      width: 77%;
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
