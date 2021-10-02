import React from "react";
import styled from "styled-components";
const FeaturesSection = () => {
  return (
    <Container>
      <div className="feature">
        <img
          src="/photosnap/features/desktop/responsive.svg"
          alt="responsive"
        />
        <h3 className="heading-3">100% Responsive</h3>
        <p className="paragraph dark">
          No matter which device you're on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>
      <div className="feature">
        <img
          src="/photosnap/features/desktop/no-limit.svg"
          alt="responsive"
          className="smaller"
        />
        <h3 className="heading-3">No Photo Upload Limit</h3>
        <p className="paragraph dark">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>
      <div className="feature">
        <img src="/photosnap/features/desktop/embed.svg" alt="responsive" />
        <h3 className="heading-3">Available to Embed</h3>
        <p className="paragraph dark">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  display: flex;
  padding: 15rem 0;
  align-items: center;
  text-align: center;
  gap: 4rem;

  @media (max-width: 1200px) {
    width: 60%;
    flex-direction: column;
    row-gap: 10rem;
  }

  img {
    margin-bottom: 7rem;
    height: 5rem;
    @media (max-width: 1200px) {
      margin-bottom: 4rem;
    }
  }
`;

export default FeaturesSection;
