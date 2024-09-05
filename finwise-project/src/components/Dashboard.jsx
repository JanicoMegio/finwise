import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Overview from "../components/Overview.jsx";
import Creditcard from "../components/Creditcard.jsx";
import Activities from "../components/Activities.jsx";
import Statistics from "../components/Statistics.jsx";
import Transaction from "../components/Transaction.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import Header from "../components/Header.jsx";
import ScatterGraph from "./ScatterGraph.jsx";


function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Data loaded!" });
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div className="container-fluid">
          <Header />
          <div className="row mb-4">
        
            <Overview />
            <Creditcard />
         
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="card mb-3" id="Statistics-card" >
                <div className="card-body " >
                  <h4 className="card-title">Financial Statistics</h4>
                  <Statistics />
                </div>
              </div>
              <div className="card mb-4" id="Activities-card">
                  <div className="card-body" >
                    <h4 className="card-title">
                      Recent Activities <span className="last-month">(Last Month)</span>
                      <span className="fs-6 float-end">View more</span>
                    </h4>
                    <Activities />
                  </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="card mb-3" id="Wrap-card">
                <div className="card-body card-border" id="Activities-card">
                  <h4 className="card-title"> Scatter Graph
                    <span className="fs-6 float-end">View more</span>
                  </h4>
                  <ScatterGraph />
                </div>
              </div>
              <Transaction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
