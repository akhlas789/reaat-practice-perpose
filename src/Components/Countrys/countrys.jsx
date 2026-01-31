import React, { use, useState } from "react";
import Cuntry from "../country/cuntry";
import "./countrys.css";

const Countrys = ({ countryPromise }) => {
  const [visitedCountry, setVisitedCiuntry] = useState([]);

  const cuntyData = use(countryPromise);

  const handaleVisitedCountry = (cuntry) => {
    // console.log("handale visited country", cuntry);
    const newVisitedCuntry = [...visitedCountry, cuntry];
    setVisitedCiuntry(newVisitedCuntry);
  };

  return (
    <div className="width_control">
      <h2>Total Country {cuntyData.length}</h2>
      <h3>Total Visited Country: {visitedCountry.length}</h3>
      <ol>
        {
           visitedCountry.map(country =><li>{country.name.common}</li>)
        }
      </ol>
      <div className="countrys">
        {cuntyData.map((cuntry) => (
          <Cuntry
            cuntry={cuntry}
            handaleVisitedCountry={handaleVisitedCountry}
            key={cuntry.cca3}
          ></Cuntry>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
