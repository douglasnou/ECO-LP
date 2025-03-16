import { About } from "./sections/About";
import { Banner } from "./sections/Banner";
import { Coroata } from "./sections/Coroata";
import { Details } from "./sections/Details";
import { EcoCasaOne } from "./sections/EcoCasaOne";
import { EcoCasaTwo } from "./sections/EcoCasaTwo";
import { EcoVille } from "./sections/EcoVille";
import { KnowMore } from "./sections/KnowMore";
import { Maranhao } from "./sections/Maranhao";
import { Reasons } from "./sections/Reasons";
import { SecondBanner } from "./sections/SecondBanner";
import { SecondDetail } from "./sections/SecondDetail";
import { Security } from "./sections/Security";
import ReactGA from "react-ga4";
import "../src/styles/index.scss";
import { useEffect } from "react";

function App() {

  if(!import.meta.env.VITE_GA_KEY){
    console.log("Chave não encontrada.")
  }

  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_KEY);

    ReactGA.send("pageview");
  }, [])

  return (
    <>
      <Banner />
      <About />
      <Reasons />
      <Details />
      <EcoCasaOne />
      <EcoCasaTwo />
      <SecondBanner />
      <SecondDetail />
      <Coroata />
      <EcoVille />
      <Security />
      <Maranhao />
      <KnowMore />
    </>
  )
}

export default App
