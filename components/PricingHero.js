import React from "react";
import styled from "styled-components";
const PricingHero = () => {
  return (
    <Container>
      <Section>
        <div className="content">
          <div className="divider color">
            <h1 className="heading-1">Pricing</h1>
            <p className="paragraph">
              Create your stories, Photosnap is a platform for photographers and
              visual storytellers. It's the simple way to create and share your
              photos.
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
  @media (max-width: 1200px) {
    height: 50vh;
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
    .divider {
      padding-left: 10rem;
      position: relative;
      @media (max-width: 1200px) {
        padding-left: 6rem;
      }
    }
    .color {
      &::before {
        content: "";
        left: 0;
        width: 7px;
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
    background-image: url("/photosnap/pricing/desktop/hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1200px) {
      flex-basis: 30%;
      background-image: url("/photosnap/pricing/tablet/hero.jpg");
    }
  }
`;

export default PricingHero;
