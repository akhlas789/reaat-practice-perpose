import { useState } from "react";
import "./cuntry.css";
const Cuntry = ({ cuntry,handaleVisitedCountry }) => {
 
  const [visited, setVisited]= useState(false)

  const handaleClick = ()=>{
    setVisited(!visited)
    handaleVisitedCountry(cuntry)
  }
  
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <div className="text">
        <h2>{cuntry.name.common} </h2>
        <h3>Capital: {cuntry.capital}</h3>
        <p>Population: {cuntry.population}</p>
        <p>Region: {cuntry.region}</p>
        <button onClick={handaleClick}>{visited ?"visited":"Not Visited"}</button>
      </div>
      <img className="img" src={cuntry.flags.png} alt="" />
    </div>
  );
};

export default Cuntry;
