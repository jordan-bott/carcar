function MainPage() {
  return (
    <>
      <div className="px-5 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">CarCar</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
      </div>

      {/* Browse models */}
      <div className="px-5 py-5 text-center" style={{ backgroundImage: "linear-gradient(140deg, #E8E0D1 0%, #CEA461 50%, #B97A63 75%)" }}>
        <h2 className="display-7 fw-bold text-light">Browse our models</h2>
      </div>

      {/* Here for you */}
      <div className="px-5 py-5 text-center" style={{ backgroundColor: "#E8E0D1" }}>
        <div className="container">
          <div className="py-5 bg-white rounded-4 shadow">
            <h2 className="display-7 fw-bold" style={{ color: "#B69C91" }}>
              At home or in-store,
              <br />
              we're here for you
            </h2>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="px-5 py-5 text-center">
        <div className="container">
          <h2 className="display-7 fw-bold mb-4">
            Why choose us
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card shadow" style={{ backgroundColor: "#E8E0D1", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Daphne</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-white">
              <div className="card shadow" style={{ backgroundColor: "#B97A63", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Velma</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow" style={{ backgroundColor: "#E8E0D1", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Scooby Doo</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-white">
              <div className="card shadow" style={{ backgroundColor: "#B97A63", border: "none" }}>
                <div className="card-body mx-2 my-3">
                  <p className="lead fst-italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis quo incidunt
                    accusamus aperiam. Ratione, optio? Incidunt iste cumque nihil optio sapiente, ex facilis, excepturi a
                    accusamus dolore perferendis minus."
                  </p>
                  <div className="card-text text-end">
                    <h5 className="card-title">- Shaggy</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule your next appointment */}
      <div className="px-5 py-5" style={{ backgroundImage: "linear-gradient(180deg, #CEA461, #B97A63 70%, white)" }}>
        <div className="container">
          <div className="py-5 bg-white rounded-4 shadow">
            <div className="mx-5 d-flex justify-content-between align-items-center">
              <div>
                <h2 className="display-9 fw-bold" style={{ color: "#CEA461" }}>
                  Schedule your next service appointment
                </h2>
                <p className="lead">
                  Kick back in our newly renovated service lounge and enjoy complimentary Wifi, gourmet coffee, tea, bottled water, HD TV and snacks. We also offer complimentary Lyft service for drop off and delivery within a 10 mile radius.
                </p>
              </div>
              <img className="img-fluid w-50" src="https://static.vecteezy.com/system/resources/previews/004/404/780/original/female-automotive-mechanic-repair-car-free-vector.jpg" />
            </div>
            <div className="mx-5 mt-3 d-flex justify-content-between align-items-center">
              <img className="img-fluid w-50" src="https://img.freepik.com/premium-vector/car-showroom-manager-giving-details-about-car-couple_701961-2078.jpg" />
              <div>
                <h2 className="display-9 fw-bold" style={{ color: "#B97A63" }}>
                  Car shopping made easy
                </h2>
                <p className="lead">
                  Kick back in our newly renovated service lounge and enjoy complimentary Wifi, gourmet coffee, tea, bottled water, HD TV and snacks. We also offer complimentary Lyft service for drop off and delivery within a 10 mile radius.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="container my-5 pt-2">
          <div>
            <h2 className="display-7 fw-bold mb-4 text-center text-white">
              Frequently Asked Questions
            </h2>
            <div className="container">
              <div className="accordion" id="questions">
                {/* Question 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-one">
                      What are your store hours?
                    </button>
                  </h2>
                  <div id="question-one" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
                {/* Question 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-two">
                      What should I look for when I test drive a car?
                    </button>
                  </h2>
                  <div id="question-two" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
                {/* Question 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-three">
                      What kind of services do you offer at your CarCar service center?
                    </button>
                  </h2>
                  <div id="question-three" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
                {/* Question 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#question-four">
                      Do you offer express service?
                    </button>
                  </h2>
                  <div id="question-four" className="accordion-collapse collapse" data-bs-parent="#questions">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi nobis harum itaque doloremque,
                      vitae rem fuga deserunt laudantium in mollitia. Odit vitae voluptatem, harum excepturi aut ipsum natus
                      esse quibusdam ab reprehenderit, dolore voluptates veritatis error tenetur consequatur quis voluptas
                      minima sit officia quisquam voluptatum. Totam?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map with Store Hours */}
      <div className="px-5 pb-5" >
        <div className="container">
          <div className="py-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="py-5 rounded-4 shadow" style={{ backgroundColor: "#E8E0D1" }}>
                <div className="mx-5">
                  <h2 className="display-9 fw-bold" style={{ color: "#867C79" }}>
                    Contact Info
                  </h2>
                  <p className="lead">
                    Kick back in our newly renovated service lounge and enjoy complimentary Wifi, gourmet coffee, tea, bottled water, HD TV and snacks. We also offer complimentary Lyft service for drop off and delivery within a 10 mile radius.
                  </p>
                </div>
              </div>
              <img className="img-fluid w-50" src="https://static.vecteezy.com/system/resources/previews/004/404/780/original/female-automotive-mechanic-repair-car-free-vector.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
