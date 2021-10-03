import React from "react";
import styled from "styled-components";
const FeaturedStory = () => {
  return (
    <Container>
      {/* <img src="/photosnap/stories/mobile/moon-of-appalacia.jpg" alt="" /> */}
      <div className="header-image"></div>
      <Content>
        <span className="featured">Last Month's Featured Story</span>
        <h1 className="heading-1 white">Hazy Full Moon Of Appalachia</h1>
        <span className="date">
          March 2nd 2020 <a href="#"> by John Appleseed</a>
        </span>
        <p className="paragraph">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains", especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button className="button-invite-arrow">
          READ THE STORY
          <img
            src="/photosnap/shared/desktop/arrow-white.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
      </Content>
    </Container>
  );
};

const Container = styled.header`
  height: 80vh;
  background-image: url("/photosnap/stories/desktop/moon-of-appalacia.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 10rem 11rem;
  @media (max-width: 1200px) {
    height: 70vh;
    padding: 2rem 7rem;
  }
  @media (max-width: 768px) {
    background-image: none;
    width: 100%;
    padding: 0;
    height: auto;
  }
  .header-image {
    @media (min-width: 768px) {
      display: none;
    }
    height: 35rem;
    background-image: url("/photosnap/stories/desktop/moon-of-appalacia.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    width: 100%;
  }
`;

const Content = styled.article`
  color: var(--white);
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 768px) {
    background-color: var(--black);
    width: 100%;
    justify-content: flex-start;
    padding: 6rem 3rem;
  }

  .featured {
    margin-bottom: 2rem;
    display: block;
  }
  h1 {
    padding-right: 20rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  .date {
    margin-bottom: 2rem;
    display: block;
    color: var(--light-gray);
    a {
      margin-left: 2rem;
      color: var(--white);
    }
  }
  .paragraph {
    color: var(--dark-gray);
  }
`;

export default FeaturedStory;
