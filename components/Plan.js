import React, { useRef, useState } from "react";
import styled from "styled-components";
const Plan = () => {
  const dotRef = useRef(null);
  const monthlyRef = useRef(null);
  const yearlyRef = useRef(null);
  const basicRef = useRef(null);
  const proRef = useRef(null);
  const businessRef = useRef(null);
  const basicPriceRef = useRef(null);
  const proPriceRef = useRef(null);
  const businessPriceRef = useRef(null);

  const [timeYearly, setTimeYearly] = useState(false);

  const switchTime = () => {
    dotRef.current.classList.toggle("select-yearly");
    monthlyRef.current.classList.toggle("span-active");
    yearlyRef.current.classList.toggle("span-active");
    if (timeYearly) {
      basicPriceRef.current.textContent = "$19.00";
      proPriceRef.current.textContent = "$39.00";
      businessPriceRef.current.textContent = "$99.00";
    } else {
      basicPriceRef.current.textContent = "$190.00";
      proPriceRef.current.textContent = "$390.00";
      businessPriceRef.current.textContent = "$990.00";
    }
    setTimeYearly(!timeYearly);
  };

  const changePlan = (e) => {
    basicRef.current.classList.remove("card-active");
    proRef.current.classList.remove("card-active");
    businessRef.current.classList.remove("card-active");
    e.target.closest(".card").classList.add("card-active");
  };

  return (
    <Container>
      <div className="change-duration">
        <span className="span-active" ref={monthlyRef}>
          Monthly
        </span>
        <div className="select" onClick={switchTime}>
          <div className="select-dot" ref={dotRef}></div>
        </div>
        <span ref={yearlyRef}>Yearly</span>
      </div>
      <div className="cards">
        <div className="card" ref={basicRef}>
          <h3 className="heading-3">Basic</h3>
          <p className="paragraph dark">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <h1 className="heading-1" ref={basicPriceRef}>
            $19.00
          </h1>
          <span>per month</span>
          <button className="button-pick" onClick={changePlan}>
            Pick Plan
          </button>
        </div>
        <div className="card card-active" ref={proRef}>
          <h3 className="heading-3">Pro</h3>
          <p className="paragraph dark">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <h1 className="heading-1" ref={proPriceRef}>
            $39.00
          </h1>
          <span>per month</span>
          <button className="button-pick" onClick={changePlan}>
            Pick Plan
          </button>
        </div>
        <div className="card" ref={businessRef}>
          <h3 className="heading-3">Business</h3>
          <p className="paragraph dark">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <h1 className="heading-1" ref={businessPriceRef}>
            $99.00
          </h1>
          <span>per month</span>
          <button className="button-pick" onClick={changePlan}>
            Pick Plan
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  padding: 8rem 0;
  padding-bottom: 15rem;
  text-align: center;

  @media (max-width: 1200px) {
    width: 90%;
  }

  .change-duration {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 8rem;
    span {
      font-size: 1.7rem;
      color: var(--darker-gray);
      font-weight: bold;
      transition: all 167ms;
    }
    .span-active {
      color: var(--black);
    }
  }
  .select {
    width: 6.5rem;
    height: 3rem;
    background-color: var(--light-gray);
    border-radius: 10rem;
    position: relative;
    cursor: pointer;

    transition: all 167ms;
    &:hover {
      background-color: var(--black);
    }
    &:hover .select-dot {
      background-color: var(--white);
    }
    .select-dot {
      height: 2.2rem;
      width: 2.2rem;
      background-color: var(--black);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transition: all 167ms;
      left: 10%;
      transform: translateY(-50%);
    }
    .select-yearly {
      left: 57%;
    }
  }
  .cards {
    display: flex;
    align-items: center;
    gap: 3rem;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    .card {
      text-align: center;
      background-color: var(--light-gray);
      padding: 7rem 4rem;
      padding-bottom: 5rem;
      transition: all 167ms;
      position: relative;

      @media (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: left;
        align-items: center;
        padding: 4rem;
      }

      &:hover {
        box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
      }
      &::before {
        content: "";
        width: 100%;
        transform: scaleX(0);
        height: 6px;
        position: absolute;
        transition: all 250ms;
        background: linear-gradient(
          28deg,
          rgb(255, 197, 147),
          rgb(188, 113, 152),
          rgb(90, 119, 255)
        );
        left: 0;
        top: 0;
        @media (max-width: 1200px) {
          height: 100%;
          width: 6px;
          transform: scale(1, 0);
        }
      }

      p {
        margin-bottom: 3rem;
      }
      h1 {
        margin: 0;
        @media (max-width: 1200px) {
          grid-column: 2;
          grid-row: 1;
          text-align: right;
          letter-spacing: 0;
        }
      }
      span {
        display: block;
        margin-bottom: 3rem;
        color: var(--darker-gray);
        @media (max-width: 1200px) {
          text-align: right;
          margin-top: -4rem;
        }
      }
      .button-pick {
        width: 100%;
        padding: 1rem;
        font-family: inherit;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.6rem;
        border: 0;
        background-color: var(--black);
        color: var(--white);
        letter-spacing: 2px;
        transition: all 167ms;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          color: var(--black);
        }
      }
    }
    .card-active {
      background-color: var(--black);
      color: var(--white);
      transition: all 250ms;
      transform: scale(1.08);
      @media (max-width: 1200px) {
        transform: scale(1.06);
      }
      .button-pick {
        background-color: var(--white);
        color: var(--black);
        &:hover {
          background-color: var(--dark-gray);
        }
      }
      &::before {
        transform: scaleX(1);
        @media (max-width: 1200px) {
          transform: scale(1, 1);
        }
      }
    }
  }
`;

export default Plan;
