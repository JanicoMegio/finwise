import Features_image_2 from "../assets/images/Financial Statistics Card.png";

function Homepaeg_section_2() {
  return (
    <section
      className="hero-section d-flex align-items-center"
      id="hero_section_2"
    >
      <div className="container" id="container_section1">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img
              src={Features_image_2}
              alt="section image"
              className="img-fluid"
              id="feature_image_2"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="jumbotron p-5">
              <h1 className="display-5">Calculation of profits margins and expenses</h1>
              <p className="lead">
                Both for the whole business and for individual branches (store, coffee shop or studio). Easy to track your real financial flows and analyze income and expenses. The easier way to understand how much you've earned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Homepaeg_section_2;
