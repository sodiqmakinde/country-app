import React from "react";
import styled from "styled-components";

const CNavbar = ({ changeMode, modeTxt, icon }) => {
  return (
    <Navigation>
      <div className="container">
        <h5> &#127758; Explore Nations</h5>
        <article onClick={(e) => changeMode(e)}>
          <span class="material-symbols-outlined">{icon}</span>
          <p>{modeTxt}</p>
        </article>
      </div>
    </Navigation>
  );
};

export default CNavbar;

let Navigation = styled.section`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: var(--white) !important;
  position: fixed;
  z-index: 100;
  width: 100%;
  h5 {
    padding-left: 20px;
  }
  p {
    transform: scale(1);
    cursor: pointer !important;
    transition: 0.3s;
    padding-right: 20px;
    &:hover {
      transform: scale(0.98);
    }
  }
  @media (max-width: 502px) {
    p {
      display: none;
    }
    span {
      margin-right: 30px !important;
    }
  }

  article {
    display: flex !important;
    align-items: center;
    color: var(--black) !important;
    span {
      margin-right: 5px;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
  h5 {
    font-size: 25px;
  }
`;
