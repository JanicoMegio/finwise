function Overview() {
  return (
    <div className="col-12 col-xl-6">
      <div className="">
        <div className="d-flex">
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="card" id="balance">
                <div className="card-body" >
                  <h5 className="card-title">Balance</h5>
                  <h2 className="card-subtitle mb-4 py-3 "><span>&#8369;</span>79,000.00</h2>
                  <p className="card-text float-end">
                    12.8 %
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-2">
              <div className="card" id="savings">
                <div className="card-body">
                  <h5 className="card-title">Savings</h5>
                  <h2 className="card-subtitle mb-4 py-3"><span>&#8369;</span> 35,679.00</h2>
                  <p className="card-text float-end">
                    3.8%
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-2">
              <div className="card" id="income">
                <div className="card-body">
                  <h5 className="card-title">Income</h5>
                  <h2 className="card-subtitle mb-4 py-3"><span>&#8369;</span> 45,789.00</h2>
                  <p className="card-text float-end">
                   2.8%
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="col-md-6 p-2">
              <div className="card" id="expenses">
                <div className="card-body">
                  <h5 className="card-title">Expenses</h5>
                  <h2 className="card-subtitle mb-4 py-3"><span>&#8369;</span> 15,249.00</h2>
                  <p className="card-text float-end">
                    2.4%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
