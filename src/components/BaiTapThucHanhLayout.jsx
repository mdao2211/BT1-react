const BaiTapThucHanhLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="py-5 bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa,
            ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          <a className="btn btn-primary btn-lg" href="#!">
            Call to action!
          </a>
        </div>
      </header>

      {/* Card Deck */}
      <div className="container py-5">
        <div className="row g-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="col-md-3">
              <div className="card h-100">
                <img
                  src={`https://via.placeholder.com/500x325?text=500x325`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                  <a href="#!" className="btn btn-primary mt-auto">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 bg-dark mt-auto">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright © Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BaiTapThucHanhLayout;
