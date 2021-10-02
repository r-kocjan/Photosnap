import React from "react";
import styled from "styled-components";
const Beta = () => {
  return (
    <Full>
      <Container>
        <h1 className="heading-1 white">
          We're in beta. Get your invite today!
        </h1>
        <button className="button-invite-arrow">
          Get an invite
          <img
            src="/photosnap/shared/desktop/arrow-white.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
      </Container>
    </Full>
  );
};

const Full = styled.section`
  background-image: url("/photosnap/shared/desktop/bg-beta.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
`;

const Container = styled.div`
  width: 1128px;
  margin: 0 auto;
  padding: 7rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    width: 35%;
    margin: 0;
  }
`;

export default Beta;