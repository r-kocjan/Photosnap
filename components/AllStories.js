import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleStory from "./SingleStory";
import StoriesData from "./StoriesData";
const AllStories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(StoriesData);
  }, []);

  return (
    <Container>
      {data.map((item) => {
        return <SingleStory key={item.id} data={item} />;
      })}
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 25%);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default AllStories;
