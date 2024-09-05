import Image from "../assets/images/JaneDoe.jpg";

function Header() {
  return (
    <div className="row mt-5 pt-3 mb-3 mt-md-2 pt-md-2 align-items-center justify-content-center">
    <div className="col-6 col-md-8">
        <input type="text" className="form-control search-input"  placeholder="Search for.... " id="search"/>
    </div>
      <div className="col-3 col-md-2 py-1 px-0">
        <img
          src={Image}
          className="rounded-circle img-fluid Image-01 float-end"
          alt=""
        />
      </div>
      <div className="col-3 col-md-2 py-1">
        <h5 className="name mb-1">Jane Doe</h5>
        <h6 className="name-title text-muted">Finance</h6>
      </div>
    </div>
  );
}
export default Header;
