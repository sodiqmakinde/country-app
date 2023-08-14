import React, { useState } from "react";
import CNavbar from "../components/CNavbar";
import styled from "styled-components";
import EachCountries from "../components/EachCountries";

const Countries = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <PageForCountries className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <CNavbar
        changeMode={toggleMode}
        modeTxt={darkMode ? "Light Mode" : "Dark Mode"}
        icon={darkMode ? "light" : "dark_mode"}
      />
      <section className="girafe">
        <EachCountries />
      </section>
    </PageForCountries>
  );
};

export default Countries;

let PageForCountries = styled.section`
  .every {
    padding-top: 30px;
  }
  .girafe {
    background-color: var(--gray);
  }
  @media (min-width: 608px) {
    .every {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .eachCountry {
      width: 47%;
    }
  }
  @media (min-width: 768px) {
    .eachCountry {
      width: 32%;
    }
  }
  @media (min-width: 1024px) {
    .eachCountry {
      width: 23%;
    }
  }
`;
