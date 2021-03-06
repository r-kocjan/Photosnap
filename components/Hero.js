import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Container>
      <Section>
        <div className="content">
          <div className="divider color">
            <h1 className="heading-1">Create and share your photo stories.</h1>
            <p className="paragraph">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <button className="button-invite" type="button">
              Get an invite
              <img
                src="/photosnap/shared/desktop/arrow-white.svg"
                alt="arrow"
                className="arrow"
              />
            </button>
          </div>
        </div>
        <div className="image"></div>
      </Section>
      <Section>
        <div className="content reversed white">
          <div className="divider">
            <h1 className="heading-1">Beautiful stories every time</h1>
            <p className="paragraph dark">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <button className="button-invite black" type="button">
              Get an invite
              <img
                src="/photosnap/shared/desktop/arrow.svg"
                alt="arrow"
                className="arrow arrow-black"
              />
            </button>
          </div>
        </div>
        <div className="image image-2"></div>
      </Section>
      <Section>
        <div className="content white">
          <div className="divider">
            <h1 className="heading-1">Designed for everyone</h1>
            <p className="paragraph dark">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <button className="button-invite black" type="button">
              Get an invite
              <img
                src="/photosnap/shared/desktop/arrow.svg"
                alt="arrow"
                className="arrow"
              />
            </button>
          </div>
        </div>
        <div className="image image-3"></div>
      </Section>
    </Container>
  );
};

const Container = styled.main``;

const Section = styled.section`
  display: flex;
  height: 80vh;
  @media (max-width: 1200px) {
    height: 60vh;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 80vh;
  }
  .content {
    flex-basis: 40%;
    color: var(--white);
    background-color: var(--black);
    padding: 10rem;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 1200px) {
      flex-basis: 70%;
    }
    @media (max-width: 768px) {
      order: 2;
      padding: 2rem 3rem;
      flex-basis: 60%;
      position: relative;
    }
    .divider {
      padding-left: 10rem;
      position: relative;
      @media (max-width: 1200px) {
        padding-left: 6rem;
      }
      @media (max-width: 768px) {
        padding: 0;
        position: initial;
      }
    }
    .color {
      &::before {
        content: "";
        left: 0;
        width: 5px;
        height: 100%;

        background: linear-gradient(
          28deg,
          rgb(255, 197, 147),
          rgb(188, 113, 152),
          rgb(90, 119, 255)
        );

        position: absolute;

        @media (max-width: 768px) {
          top: 0;
          left: 3rem;
          width: 40%;
          height: 5px;
        }
      }
    }

    .button-invite {
      margin-top: 3rem;
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
        width: 73%;
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
      .arrow-black {
      }
    }
    .black {
      color: var(--black);
    }
  }
  .reversed {
    order: 2;
  }
  .white {
    background-color: var(--white);
    color: var(--black);
  }
  .image {
    flex-basis: 60%;
    background-image: url("/photosnap/home/desktop/create-and-share.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1200px) {
      flex-basis: 30%;
      background-image: url("/photosnap/home/tablet/create-and-share.jpg");
      background-position: center;
    }
    @media (max-width: 768px) {
      flex-basis: 40%;
      background-image: url("/photosnap/home/mobile/create-and-share.jpg");
    }
  }
  .image-2 {
    background-image: url("/photosnap/home/desktop/beautiful-stories.jpg");
    @media (max-width: 1200px) {
      background-image: url("/photosnap/home/tablet/beautiful-stories.jpg");
    }
    @media (max-width: 768px) {
      background-image: url("/photosnap/home/mobile/beautiful-stories.jpg");
    }
  }
  .image-3 {
    background-image: url("/photosnap/home/desktop/designed-for-everyone.jpg");
    @media (max-width: 1200px) {
      background-image: url("/photosnap/home/tablet/designed-for-everyone.jpg");
    }
    @media (max-width: 768px) {
      background-image: url("/photosnap/home/mobile/designed-for-everyone.jpg");
    }
  }
`;

export default Hero;
