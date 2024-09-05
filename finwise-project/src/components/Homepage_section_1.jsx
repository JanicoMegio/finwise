import Features_image from "../assets/images/Features.png"
function Homepaeg_section_1() {
    return(
    <section className="hero-section d-flex align-items-center" id="hero_section_1">
        <div className="container" id="container_section1">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="jumbotron p-5">
                        <h1 className="display-5">It is clear and convenient</h1>
                        <p className="lead">Detailed, operation and actually applied analytics of your business. 
                            Easy and gamified filling process, any manager can handle it. Informative graphics and clear analytics.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <img src={Features_image} alt="section image" className="img-fluid" id="feature_image"/>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Homepaeg_section_1