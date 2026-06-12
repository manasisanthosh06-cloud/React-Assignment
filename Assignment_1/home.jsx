function Home() {
  return (
    <div>
      <h1 className="mb-4">Welcome to My Website</h1>

      <p>
        Welcome to our React-based website. This application demonstrates
        navigation using React Router and responsive design using Bootstrap.
      </p>

      <p>
        Our mission is to build modern, scalable, and user-friendly web
        applications that provide a great experience across desktop, tablet,
        and mobile devices.
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Modern Technology</h5>
              <p className="card-text">
                Built using React, Vite, and Bootstrap.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Responsive Design</h5>
              <p className="card-text">
                Works seamlessly on desktop and mobile devices.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Easy Navigation</h5>
              <p className="card-text">
                Navigate between pages using React Router.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
