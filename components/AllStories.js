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
`;

export default AllStories;
