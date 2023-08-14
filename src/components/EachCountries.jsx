import React, { useEffect, useState } from "react";
import styled from "styled-components";

const EachCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, showLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
    showLoading(false);
  }, []);

   const filteredCountries = countries.filter((country) =>
     country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
   );


  return (
    <DisplayCountries className="container">
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className=" every">
        {loading ? (
          <div>loading...</div>
        ) : (
          filteredCountries.map((item, index) => (
            <Each className="eachCountry" key={index}>
              <img src={item.flags.png} alt="" />

              <div className="pool_side">
                <h2>{item.name.common}</h2>
                <ul>
                  <li>
                    Population: <span>{item.population.toLocaleString()}</span>
                  </li>
                  <li>
                    Region: <span>{item.region}</span>
                  </li>
                  <li>
                    Capital: <span>{item.capital}</span>
                  </li>
                </ul>
              </div>
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

let DisplayCountries = styled.section`
padding-top: 150px;
`;
