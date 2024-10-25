import React from "react";
import Header from "../../components/homepage/header";
import Sidebar from "../../components/navigation/sidebar";
const Home = () => {
  return (
    <>
      <div className="d-flex">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div>
          <Header />
        </div>
      </div>
    </>
  );
};

export default Home;
