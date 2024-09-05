import Maya from '../assets/images/icons/maya.png';
import Gcash from '../assets/images/icons/gcash.png';
import Gotyme from '../assets/images/icons/gotyme.png';
import Paypal from '../assets/images/icons/paypal.png';

function Transaction() {
  return (
    <div className="card last-transactions">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Last Transaction</h4>
        <a href="#" className="view-all fs-6">
          View all
        </a>
      </div>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush" id='transaction-list'>
          <li className="list-group-item transaction-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className=" me-3">
                  <img src={Paypal} alt="" className='avatar'/>
                </div>
                <div>
                  <h5 className="mb-1">PayPal</h5>
                  <small className="text-muted">Received</small>
                </div>
              </div>
              <div className="text-end">
                <h5 className="mb-1"><span> + </span>₱ 5,000.00</h5>
                <small className="text-muted">1min ago</small>
              </div>
            </div>
          </li>
          <li className="list-group-item transaction-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className=" me-3">
                <img src={Maya} alt="" className='avatar'/>
                </div>
                <div>
                  <h5 className="mb-1">Maya</h5>
                  <small className="text-muted">Payment</small>
                </div>
              </div>
              <div className="text-end">
                <h5 className="mb-1"><span> - </span>₱ 1,500.00</h5>
                <small className="text-muted">5mins ago</small>
              </div>
            </div>
          </li>
          <li className="list-group-item transaction-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className=" me-3">
                <img src={Gcash} alt="" className='avatar'/>
                </div>
                <div>
                  <h5 className="display-9 mb-1">Gcash</h5>
                  <small className="text-muted">Subscription</small>
                </div>
              </div>
              <div className="text-end">
                <h5 className="mb-1"><span> - </span>₱ 350.89</h5>
                <small className="text-muted">30mins ago</small>
              </div>
            </div>
          </li>
          <li className="list-group-item transaction-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className=" me-3">
                <img src={Gotyme} alt="" className='avatar'/>
                </div>
                <div>
                  <h5 className="mb-1">GoTyme</h5>
                  <small className="text-muted">Received</small>
                </div>
              </div>
              <div className="text-end">
                <h5 className="mb-1"><span  > + </span>₱ 11,780.00</h5>
                <small className="text-muted">3hours ago</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Transaction;
