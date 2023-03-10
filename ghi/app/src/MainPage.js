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

      {/* Here for you */}
      <div className="px-5 py-5 text-center" style={{ backgroundColor: "#364765" }}>
        <h2 className="display-7 fw-bold text-light">Browse our models</h2>
      </div>
      <div className="px-5 py-5 text-center" style={{ backgroundColor: "#E1DAD8" }}>
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
          <div className="rounded">
            <h2 className="display-7 fw-bold ">
              Why choose us
            </h2>
          </div>
        </div>
      </div>

      {/* Schedule your next appointment */}
      <div className="px-5 py-5" style={{ backgroundColor: "#76819C" }}>
        <div className="container">
          <div className="py-5 bg-white rounded-4 shadow">
            <div className="mx-5 d-flex justify-content-between align-items-center">
              <div>
                <h2 className="display-9 fw-bold" style={{ color: "#364765" }}>
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
                <h2 className="display-9 fw-bold" style={{ color: "#364765" }}>
                  Car shopping made easy
                </h2>
                <p className="lead">
                  Kick back in our newly renovated service lounge and enjoy complimentary Wifi, gourmet coffee, tea, bottled water, HD TV and snacks. We also offer complimentary Lyft service for drop off and delivery within a 10 mile radius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="px-5 py-5" style={{ backgroundColor: "#364765" }}>
        <div className="container">
          <div className="rounded">
            <h2 className="display-7 fw-bold mb-4 text-center text-light">
              Frequently Asked Questions
            </h2>
            <div className="container">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map with Store Hours */}
      <div className="px-5 py-5">
        <div className="container">
          <div className="py-5">
            <div className="mx-5 d-flex justify-content-between align-items-center">
              <div className="py-5 rounded-4 shadow" style={{ backgroundColor: "#76819C" }}>
                <div>
                  <h2 className="display-9 fw-bold" style={{ color: "#364765" }}>
                    Schedule your next service appointment
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
