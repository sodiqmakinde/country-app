import React from "react";
import styled from "styled-components";

const Information = ({
  countryName,
  flag,
  capital,
  population,
  nativeName,
  region,
  SubRegion,
  borders,
  languages,
  currency,
  independent,
}) => {
  // const languageEntries = Object.entries(languages);
  return (
    <Info className="">
      <div className="fried">
        <div className="forImg">
          <img src={flag} alt="" />
        </div>
        <div className="together">
          <div className="forInfo">
            {/* =====1 */}
            <div>
              <h3>{countryName}</h3>
              <ul>
                <li>
                  Capital: <span>{capital}</span>
                </li>
                <li>
                  Population: <span>{population}</span>
                </li>
                {/* <li>
                  Native Name: <span>{nativeName}</span>
                </li> */}
                <li>
                  Region: <span>{region}</span>
                </li>
                <li>
                  Sub Region: <span>{SubRegion}</span>
                </li>
              </ul>
            </div>

            {/* =====2 */}
            <div className="bros">
              <ul>
                <li>
                  Independent: <span>{independent ? "Yes" : "No"}</span>
                </li>
                <li>
                  United Nation Member: <span>{currency ? "Yes" : "No"}</span>
                </li>
                {/* <li>
                  Language:{" "}
                  {languageEntries.map(([code, name], index) => (
                    <span key={code}>
                      {name}
                      {index !== languageEntries.length - 1 && ", "}
                    </span>
                  ))}
                </li> */}
              </ul>
            </div>
          </div>

          <div className="spans">
            <h3> Borders:</h3>
            {borders?.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Info>
  );
};

export default Information;

let Info = styled.div`
  .fried {
    margin-top: 60px;
    .spans {
      margin-top: 50px;
      h3 {
        display: inline-block;
        margin-right: 20px;
      }
      span {
        margin: 20px 0;
        margin-right: 10px;
        border: 1px solid var(--black);
        padding: 2px 10px;
        border-radius: 5px;
      }
    }
    @media (max-width: 868px) {
    }
    @media (min-width: 868px) {
      display: flex;
      justify-content: space-between;
      .forImg,
      .together {
        width: 45%;
        img {
          object-fit: cover;
        }
      }

      .forInfo {
        display: flex;
      }
      .bros {
        margin-top: 35px;
        margin-left: 45px;
      }
    }
    .forInfo {
      h3 {
        font-size: 25px;
      }
      ul {
        margin-top: 30px;
        list-style-type: none;
        li {
          font-weight: 800;
          margin-bottom: 15px;
          font-size: 16px;
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
`;
