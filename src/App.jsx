import { Suspense } from "react";
import "./App.css";
import Countrys from "./Components/Countrys/countrys";

const countryFetching = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3",
  );
  return res.json();
};


function App() {
  const countryPromise = countryFetching();
  return (
    <>
      <Suspense fallback={<p>country data is loading</p>}>
        <Countrys countryPromise={countryPromise}></Countrys>
      </Suspense>
    </>
  );
}

export default App;
