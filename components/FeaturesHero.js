import React from "react";
import styled from "styled-components";
const FeaturesHero = () => {
  return (
    <Container>
      <Section>
        <div className="content">
          <div className="divider color">
            <h1 className="heading-1">Features</h1>
            <p className="paragraph">
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photographers who wanted to share
              their stories.
            </p>
          </div>
        </div>
        <div className="image"></div>
      </Section>
    </Container>
  );
};

const Container = styled.section``;

const Section = styled.section`
  display: flex;
  height: 70vh;
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

    .divider {
      padding-left: 10rem;
      position: relative;
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
      }
    }
  }
  .image {
    flex-basis: 60%;
    background-image: url("/photosnap/features/desktop/hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default FeaturesHero;
