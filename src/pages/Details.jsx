import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CNavbar from "../components/CNavbar";
import styled from "styled-components";
import Information from "../components/Information";

const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const matchingCountry = data.find((c) => c.name.common === name);
        setCountry(matchingCountry);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [name]);

  console.log(country);

  if (!country) {
    return (
      <div className="loaders_height">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    // <div>
    //   <h1>Name: {country.name.common}</h1>
    //   <p>Capital: {country.capital}</p>
    //   <p>Population: {country.population}</p>
    //   {/* Display other country details */}
    // </div>
    <Container className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <CNavbar
        changeMode={toggleMode}
        modeTxt={darkMode ? "Light Mode" : "Dark Mode"}
        icon={darkMode ? "light" : "dark_mode"}
      />
      <section className="container">
        <section className="host">
          <Link to="/">
            <h4>
              <span class="material-symbols-outlined">arrow_back</span> Back
            </h4>
          </Link>
        </section>
        <Information
          countryName={country.name.common}
          flag={country.flags.png}
          borders={country.borders}
          capital={country.capital}
          population={country.population.toLocaleString()}
          nativeName={country.nativeName}
          region={country.region}
          SubRegion={country.subregion}
          independent={country.independent}
          language={country.languages}
        />
      </section>
    </Container>
  );
};

export default Details;

let Container = styled.section`
  .container {
    .host {
      padding-top: 120px;
    }
    h4 {
      display: inline-block;
      box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
      padding: 5px 20px;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      transition: 0.3s;
      span {
        // display: none;
        left: 2px;
        transform: translateX(10px);
        top: 4px;
        opacity: 0;
        position: absolute;
        transition: 0.3s;
        margin-right: 5px;
      }
      &:hover {
        box-shadow: none;
        padding-left: 40px;
        span {
          opacity: 1;
          transform: translateX(4px);
        }
      }
    }
  }
`;
