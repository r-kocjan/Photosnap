import React from "react";
import styled from "styled-components";
const StoriesSection = () => {
  return (
    <Container>
      <div className="card card-1">
        <h3 className="heading-3">The Mountains</h3>
        <span>by John Appleseed</span>
        <button className="button-read">
          Read Story{" "}
          <img
            src="/photosnap/shared/desktop/arrow-white.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
      <div className="card card-2">
        <h3 className="heading-3">Sunset Cityscapes</h3>
        <span>by Benjamin Cruz</span>
        <button className="button-read">
          Read Story{" "}
          <img
            src="/photosnap/shared/desktop/arrow-white.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
      <div className="card card-3">
        <h3 className="heading-3">18 Days Voyage</h3>
        <span>by Alexei Borodin</span>
        <button className="button-read">
          Read Story{" "}
          <img
            src="/photosnap/shared/desktop/arrow-white.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
      <div className="card card-4">
        <h3 className="heading-3">Architecturals</h3>
        <span>by Samantha Brooke</span>
        <button className="button-read">
          Read Story{" "}
          <img
            src="/photosnap/shared/desktop/arrow-white.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 25%);

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 3rem;
    color: var(--white);
    transition: all 167ms;
    position: relative;
    cursor: pointer;
    &:hover {
      transform: translateY(-4%);
    }
    &::after {
      position: absolute;
      transition: all 350ms;

      content: "";
      width: 100%;
      transform: scaleX(0);
      height: 6px;
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
    span {
      margin-bottom: 2rem;
      border-bottom: 1px solid #ababab;
      padding-bottom: 2rem;
    }
    .button-read {
      background: transparent;
      color: var(--white);
      font-family: inherit;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .card-1 {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 1)
      ),
      url("/photosnap/stories/desktop/mountains.jpg");
  }
  .card-2 {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 1)
      ),
      url("/photosnap/stories/desktop/cityscapes.jpg");
  }
  .card-3 {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 1)
      ),
      url("/photosnap/stories/desktop/18-days-voyage.jpg");
  }
  .card-4 {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 1)
      ),
      url("/photosnap/stories/desktop/architecturals.jpg");
  }
`;

export default StoriesSection;
