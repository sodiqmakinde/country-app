import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EachCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, showLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
    showLoading(false);
  }, []);

  // const filteredCountries = countries.filter((country) =>
  //   country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedContinent === "" || country.region === selectedContinent)
  );

  return (
    <DisplayCountries className="container">
      <section className="vietam">
        <div className="search_box">
          <span class="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search for a country ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ChooseContinent className="brokers">
          <select
            className="brokers"
            onChange={(e) => setSelectedContinent(e.target.value)}
          >
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">North America</option>
            <option value="Americas">South America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </ChooseContinent>
      </section>
      <div className="fade-in-bottom every">
        {loading ? (
          <div>loading...</div>
        ) : (
          filteredCountries.map((item, index) => (
            <Each className="eachCountry" key={index}>
              <Link to={`about/${item.name.common}`}>
                <img src={item.flags.png} alt="" />

                <div className="pool_side">
                  <h2>{item.name.common}</h2>
                  <ul>
                    <li>
                      Population:{" "}
                      <span>{item.population.toLocaleString()}</span>
                    </li>
                    <li>
                      Continent: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ul>
                </div>
              </Link>
            </Each>
          ))
        )}
      </div>
    </DisplayCountries>
  );
};

export default EachCountries;

let Each = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 5px;
  margin: 20px 0;
  max-width: 400px;
  img {
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    li {
      margin: 5px 0 0 0;
    }
  }
  .pool_side {
    padding: 30px 20px;
  }
`;
let ChooseContinent = styled.div``;
let DisplayCountries = styled.section`
  padding-top: 150px;
  .eachCountry {
    transform: scale(1);
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
  select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: var(--white) !important;
    color: var(--black);
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #f2f2f2;
    }
  }

  .vietam {
    .brokers {
      margin-top: 10px;
    }
  }
  @media (min-width: 608px) {
    .vietam {
      display: flex;
      justify-content: space-between;
    }
    .search_box {
      height: 53px;
      width: 100%;
    }
  }
  .search_box {
    max-width: 320px;
    background-color: var(--white);
    display: flex;
    border-radius: 5px;
    span {
      font-size: 25px;
      margin-right: 10px;
      position: relative;
      top: 13px;
      left: 15px;
      color: var(--pure60);
    }
    input {
      color: var(--black);
      background-color: var(--white);
      border-radius: 5px;
      border: 0;
      outline: none;
      width: 95%;
      font-size: 16px;
      padding: 15px;
    }
  }
`;
