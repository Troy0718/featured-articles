function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            大叔出任務
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  大叔接招
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  精選文章
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  購物車
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jack Huang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
