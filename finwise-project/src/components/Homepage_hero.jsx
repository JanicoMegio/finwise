import HeroImage from "../assets/images/Dashboard.png";
function Homepage_hero() {
  return (
    <section className="hero-section d-flex align-items-center" id="hero_section__">
        <div className="container" id="hero_container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="jumbotron p-5">
                        <h1 className="display-4" id="header__">Financial and management accounting for business</h1>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <img src={HeroImage} alt="Hero Image" className="img-fluid w-100" id="HeroImage"/>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Homepage_hero;
