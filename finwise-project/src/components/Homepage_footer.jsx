import Logo from "../assets/images/Logo.png"

function Homepage_footer(){
    return(
        <footer className="footer text-white">
        <div className="container py-4">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <img src={Logo} alt="Logo" id="footer_logo" className="img-fluid"/>
                    <div className="social-icons d-flex align-items-center">
                        <a href="#" className="me-2 text-white">
                            <i className="bi bi-x"></i>
                        </a>
                        <a href="#" className="me-2 text-white">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="me-2 text-white">
                            <i className="bi bi-youtube"></i>
                        </a>
                        <a href="#" className="me-2 text-white">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="col-12 col-lg-2 col-md-6 mb-4 mb-lg-0">
                    <h6 className="mb-3">About Us</h6>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Features</a></li>
                        <li><a href="#" className="text-white">Plans</a></li>
                        <li><a href="#" className="text-white">Help</a></li>
                        <li><a href="#" className="text-white">Blog</a></li>
                    </ul>
                </div>

                <div className="col-12 col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h6 className="mb-3">Contact Us</h6>
                    <ul className="list-unstyled">
                        <li><a href="mailto:info@FinWise.co" className="text-white">Info@FinWise.co</a></li>
                        <li className="text-white">Wise Software Inc.</li>
                    </ul>
                </div>

                <div className="col-12 col-lg-3 col-md-6">
                    <h6 className="mb-3">Documents</h6>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
}
export default Homepage_footer