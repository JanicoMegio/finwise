import credit from '../assets/images/credit.png'
function Creditcard(){
    return(
        <div className="col-12 col-xl-6" >
            <div className="card-outer">
              <h4 id='mycard'>My Cards</h4>
              <div className="d-flex">
                <div className="card" id='card-inner'>
                  <div className="card-body">
                    <img className="img-fluid" src={credit} alt="CreditCard" id='creditcard'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default Creditcard