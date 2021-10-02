import React from "react";
import styled from "styled-components";
import data from "./FeaturesData";
const AllFeatures = () => {
  return (
    <Container>
      {data.map((feature) => {
        return (
          <div className="feature" key={feature.id}>
            <img src={feature.image} alt="responsive" />
            <h3 className="heading-3">{feature.header}</h3>
            <p className="paragraph dark">{feature.content}</p>
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  padding: 15rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 8rem 4rem;
  @media (max-width: 1200px) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
  }
  img {
    margin-bottom: 5rem;
    height: 6rem;
  }
`;

export default AllFeatures;
