import React from "react";
import styled from "styled-components";
const SingleStory = ({ data }) => {
  return (
    <Card
      className="card"
      style={{
        backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 1)
      ),url(${data.images.desktop})`,
      }}
    >
      <h3 className="heading-3">{data.header}</h3>
      <span>by {data.author}</span>
      <button className="button-read">
        Read Story{" "}
        <img
          src="/photosnap/shared/desktop/arrow-white.svg"
          alt="arrow"
          className="arrow"
        />
      </button>
    </Card>
  );
};

const Card = styled.article`
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
  @media (max-width: 1200px) {
    height: 55rem;
  }
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
`;

export default SingleStory;
