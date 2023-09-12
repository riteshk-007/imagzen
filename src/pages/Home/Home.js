import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";
function Home() {
  return (
    <div className="home">
      <Banner />
      <CardContainer />
    </div>
  );
}

export default Home;
