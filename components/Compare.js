import React from "react";
import styled from "styled-components";
const Compare = () => {
  return (
    <Container>
      <h1 className="heading-1">Compare</h1>
      <CompareBox>
        <div className="grid header">
          <span>The Features</span>
          <span className="ta-right">Basic</span>
          <span className="ta-right">Pro</span>
          <span className="ta-right">Business</span>
        </div>
        <div className="grid">
          <span>Unlimited story posting</span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
        <div className="grid">
          <span>Unlimited photo upload</span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
        <div className="grid">
          <span>Embedding custom content</span>
          <span className="ta-right"></span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
        <div className="grid">
          <span>Customize metadata</span>
          <span className="ta-right"></span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
        <div className="grid">
          <span>Advanced Metrics</span>
          <span className="ta-right"></span>
          <span className="ta-right"></span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
        <div className="grid">
          <span>Photo Downloads</span>
          <span className="ta-right"></span>
          <span className="ta-right"></span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
        <div className="grid">
          <span>Search Engine Indexing</span>
          <span className="ta-right"></span>
          <span className="ta-right"></span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
        <div className="grid">
          <span>Custom Analytics</span>
          <span className="ta-right"></span>
          <span className="ta-right"></span>
          <span className="ta-right">
            <img src="/photosnap/pricing/desktop/check.svg" alt="check" />
          </span>
        </div>
      </CompareBox>
    </Container>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 15rem;
`;

const CompareBox = styled.div`
  width: 80%;
  margin: 0 auto;

  .grid {
    display: grid;
    grid-template-columns: 34% 22% 22% 22%;

    text-align: left;
    padding: 2.3rem;
    border-bottom: 1px solid var(--dark-gray);
    span {
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .ta-right {
      text-align: right;
    }
  }
  .header {
    border-bottom: 2px solid var(--black);
  }
`;

export default Compare;
