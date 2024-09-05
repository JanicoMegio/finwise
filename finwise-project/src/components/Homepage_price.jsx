function Homepage_price(){
    return(
        <div className="pricing-plan-container">
        <h2 className="text-center">FinWise Plan</h2>
        <div className="d-flex justify-content-center">
            <div className="toggle-group__price">
                <button className="toggle-btn">Monthly</button>
                <button className="toggle-btn">Yearly</button>
            </div>
        </div>

        <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-lg-4">
                <div className="card pricing-card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Standard</h5>
                        <h3 className="price">₱1,899<span className="per-month">/ month</span></h3>
                        <ul className="list-unstyled">
                            <li>Adding one main branch</li>
                            <li>Monthly income up to 50,000</li>
                            <li>Opening 10 accounts</li>
                        </ul>
                        <button className="btn btn-outline-primary py-2 px-5">Standard</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card pricing-card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Pro</h5>
                        <h3 className="price">₱2,989<span className="per-month">/ month</span></h3>
                        <ul className="list-unstyled">
                            <li>All service features</li>
                            <li>Unlimited number of accounts</li>
                            <li>Assistance in integrating FinWise</li>
                        </ul>
                        <button className="btn btn-primary_price py-2 px-5">Pro</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Homepage_price