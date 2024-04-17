import React from "react";

const Home = () => {
  return (
    <>
      <section className="main-slider-two" id="home" width="">
        <div
          className="main-slider-two__carousel drivschol-owl__carousel owl-carousel"
          data-owl-options='{
		"loop": true,
		"animateOut": "slideOutDown",
		"animateIn": "fadeIn",
		"items": 1,
		"autoplay": true,
		"autoplayTimeout": 7000,
		"smartSpeed": 1000,
		"nav": false,
        "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"],
		"dots": true,
		"margin": 0
	    }'
        >
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.png)",
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-two__content">
                      <h5 className="main-slider-two__sub-title">
                        <span>
                          Get trained, licensed, and job-ready in a high-demand
                          industry with
                          <br /> rewarding opportunities.
                        </span>
                      </h5>
                      <h2 className="main-slider-two__title">
                        Truck Training Academy of Stoney Creek: <br />
                        Your Gateway to a Fulfilling Trucking Career
                      </h2>
                      <div className="main-slider-two__btn">
                        <a
                          href="/getting_started"
                          onClick="{ () => {window.location.href = '/getting_started'}}"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider-two__layer">
                <img src="assets/images/backgrounds/slider-2-shape-2.png" />
                <img
                  className="main-slider-two__layer__shape"
                  src="assets/images/backgrounds/slider-2-shape-3.png"
                />
              </div>
              <div className="main-slider-two__layer-two">
                <img src="assets/images/resources/car-2-1.png" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.png)",
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-two__content">
                      <h5 className="main-slider-two__sub-title">
                        <span>
                          Get trained, licensed, and job-ready in a high-demand
                          industry with
                          <br /> rewarding opportunities.
                        </span>
                      </h5>
                      <h2 className="main-slider-two__title">
                        Truck Training Academy of Stoney Creek: <br />
                        Your Gateway to a Fulfilling Trucking Career
                      </h2>
                      <div className="main-slider-two__btn">
                        <a
                          href="services.html"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider-two__layer">
                <img src="assets/images/backgrounds/slider-2-shape-2.png" />
                <img
                  className="main-slider-two__layer__shape"
                  src="assets/images/backgrounds/slider-2-shape-3.png"
                />
              </div>
              <div className="main-slider-two__layer-two">
                <img src="assets/images/blog/truck2.png" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.png)",
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-two__content">
                      <h5 className="main-slider-two__sub-title">
                        <span></span>
                      </h5>
                      <h2 className="main-slider-two__title">
                        Truck Training Academy of Stoney Creek: <br />
                        Your Gateway to a Fulfilling Trucking Career
                      </h2>

                      <div className="main-slider-two__btn">
                        <a
                          href="services.html"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider-two__layer">
                <img src="assets/images/backgrounds/slider-2-shape-2.png" />
                <img
                  className="main-slider-two__layer__shape"
                  src="assets/images/backgrounds/slider-2-shape-3.png"
                />
              </div>
              <div className="main-slider-two__layer-two">
                <img src="assets/images/blog/truck3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="develop-skill develop-skill--two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <div
                                style={{backgroundImage: "url(assets/images/backgrounds/service-bg-2-1.jpg)" , height:'700px' , backgroundSize:'contain',backgroundRepeat:"no-repeat"}}>
                           </div> */}
              <div>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="assets/images/backgrounds/service-bg-2-1.jpg"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="develop-skill__right">
                <div className="develop-skill__right__head">
                  <div
                    className="sec-title   wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <h6 className="sec-title__tagline">
                      <i className="icon-left-arrow sec-title__img"></i>
                      Develop Skill
                      <i className="icon-right-arrow sec-title__img"></i>
                    </h6>

                    <h3 className="sec-title__title">Why Choose TTA? </h3>
                  </div>
                  <p className="develop-skill__right__head__text">
                    Unlock a rewarding career path with Truck Training Academy
                    of Stoney Creek (TTA). Our comprehensive training programs
                    equip you with the skills and knowledge to become a
                    confident and qualified commercial truck driver, opening
                    doors to a fulfilling future on the open road.
                  </p>
                </div>
                <div className="develop-skill__right__content">
                  <div
                    className="develop-skill__right__content__item  wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="develop-skill__right__content__item__icon">
                      <div className="icon">
                        <i className="icon-online-learning-1-1"></i>
                      </div>
                    </div>
                    <div className="develop-skill__right__content__item__content">
                      <h4 className="develop-skill__right__content__item__content__title">
                        Online Traffic School
                      </h4>
                      <p className="develop-skill__right__content__item__content__text">
                        There are many variations of passages of Lorem Ipsum
                        avagtilable, but the majority{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    className="develop-skill__right__content__item  wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="develop-skill__right__content__item__icon">
                      <div className="icon">
                        <i className="icon-instructor-1-1"></i>
                      </div>
                    </div>
                    <div className="develop-skill__right__content__item__content">
                      <h4 className="develop-skill__right__content__item__content__title">
                        Expert Instructor
                      </h4>

                      <p className="develop-skill__right__content__item__content__text">
                        There are many variations of passages of Lorem Ipsum
                        avagtilable, but the majority{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="develop-skill__shape-one">
          <img src="assets/images/shapes/about-cercle-1-1.png" />
        </div>
        <div className="develop-skill__shape-two">
          <img src="assets/images/shapes/about-cercle-1-2.png" />
        </div>
        <div className="develop-skill__shape-three">
          <img src="assets/images/shapes/about-cercle-1-3.png" />
        </div>
        <div className="develop-skill__shape-fore">
          <img src="assets/images/shapes/about-cercle-1-4.png" />
        </div>
      </section>
      <section className="service-two">
        <div
          className="service-two__bg"
          style={{
            height: "max-content",
            backgroundImage:
              "url(assets/images/backgrounds/service-bg-2-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="sec-title  text-center wow fadeInUp"
                data-wow-duration="300ms"
              >
                <h6 className="sec-title__tagline">
                  <i className="icon-left-arrow sec-title__img"></i>
                  Benefits
                  <i className="icon-right-arrow sec-title__img"></i>
                </h6>

                <h3 className="sec-title__title">
                  We’re Offering the Best <br /> Benefits to You
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <a
                  href="service-details.html"
                  className="service-two__single__image"
                >
                  <img src="assets/images/service/service-2-1.png" />
                </a>
                <div className="service-two__single__icon">
                  <i className="icon-Expert"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    <a href="service-details.html">
                      Industry-Leading Instruction
                    </a>
                  </h4>
                  <p className="service-two__single__content__text">
                    Our team of experienced and certified instructors guide you
                    through every step of the training process, ensuring you
                    receive the highest quality education.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="500ms"
              >
                <a
                  href="service-details.html"
                  className="service-two__single__image"
                >
                  <img src="assets/images/service/service-2-2.png" />
                </a>
                <div className="service-two__single__icon">
                  <i className="icon-certificate-1"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    <a href="service-details.html">
                      Job-Ready Skills Guidelines
                    </a>
                  </h4>
                  <p className="service-two__single__content__text">
                    Develop the practical skills and theoretical knowledge
                    needed to excel in the trucking industry. You'll graduate
                    prepared to handle any situation on the road.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="700ms"
              >
                <a
                  href="service-details.html"
                  className="service-two__single__image"
                >
                  <img src="assets/images/service/service-2-3.png" />
                </a>
                <div className="service-two__single__icon">
                  <i className="icon-license-1"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    <a href="service-details.html">Flexible Training Options</a>
                  </h4>
                  <p className="service-two__single__content__text">
                    Choose from a variety of programs designed to fit your
                    schedule and learning style, whether you're a recent high
                    school graduate, seeking a career change, or an experienced
                    driver looking to expand your qualifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="800ms"
              >
                <a
                  href="service-details.html"
                  className="service-two__single__image"
                >
                  <img src="assets/images/service/service-2-4.png" />
                </a>
                <div className="service-two__single__icon">
                  <i className="icon-safety"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    <a href="service-details.html">Career Support Services</a>
                  </h4>
                  <p className="service-two__single__content__text">
                    We go beyond training. Our dedicated team assists you with
                    resume writing, job search strategies, and industry
                    connections to help you land your dream trucking job.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-two__single  wow fadeInUp"
                data-wow-delay="800ms"
              >
                <a
                  href="service-details.html"
                  className="service-two__single__image"
                >
                  <img src="assets/images/blog/blog-1-1.png" />
                </a>
                <div className="service-two__single__icon">
                  <i className="icon-safety"></i>
                </div>
                <div className="service-two__single__content">
                  <h4 className="service-two__single__content__title">
                    <a href="service-details.html">Modern Training Equipment</a>
                  </h4>
                  <p className="service-two__single__content__text">
                    Train on late-model commercial vehicles, ensuring you're
                    familiar with the latest technology and prepared for
                    real-world scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-one">
        <div
          className="testimonials-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/Untitled design (1).png)",
          }}
        ></div>
        <div className="container">
          <div
            className="sec-title2  text-center wow fadeInUp"
            data-wow-duration="300ms"
          >
            <h6 className="sec-title2__tagline">
              <img
                src="assets/images/shapes/shape_left2.svg"
                className="sec-title2__img"
              />
              Our Feedbacks
              <img
                src="assets/images/shapes/shape_right2.svg"
                className="sec-title2__img"
              />
            </h6>

            <h3 className="sec-title2__title">
              See What Students are <br /> Talking About?
            </h3>
          </div>
          <div
            className="testimonials-one__carousel drivschol-owl__carousel drivschol-owl__carousel--with-shadow drivschol-owl__carousel--basic-nav owl-carousel"
            data-owl-options='{
			"items": 1,
			"margin": 30,
			"loop": true,
			"smartSpeed": 700,
			"nav": true,
			"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
			"dots": false,
			"autoplay": true,
			"responsive": {
				"0": {
					"items": 1
				},
				"767": {
					"items": 1,
					"margin": 30
				},
				"992": {
					"items": 3,
					"margin": 30
				}
			}
		}'
          >
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__inner">
                  <div className="testimonials-card__top">
                    <div className="testimonials-card__top__icon">
                      <i className="icon-quite"></i>
                    </div>
                    <div className="testimonials-card__top__rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p className="testimonials-card__top__designation">
                      {" "}
                      "The flexible training options at TTA allowed me to pursue
                      my CDL while working part-time. The instructors were
                      patient and knowledgeable, and the career services team
                      helped me tailor my resume for the trucking industry."{" "}
                    </p>
                  </div>
                  <div className="testimonials-card__author">
                    <div className="testimonials-card__author__image">
                      <img src="assets/images/resources/testi-1-3.jpg" />
                    </div>
                    <div className="testimonials-card__author__content">
                      <h5 className="testimonials-card__author__name">
                        <a href="team.html">Jane Doe</a>
                      </h5>
                      <span className="testimonials-card__author__degeneration">
                        TTA graduate and owner-operator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__inner">
                  <div className="testimonials-card__top">
                    <div className="testimonials-card__top__icon">
                      <i className="icon-quite"></i>
                    </div>
                    <div className="testimonials-card__top__rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p className="testimonials-card__top__designation">
                      There are many variations of passages of Loriem Ipsum ies
                      available, but the majority have suffered alteturr adtion
                      form by injected humour
                    </p>
                  </div>
                  <div className="testimonials-card__author">
                    <div className="testimonials-card__author__image">
                      <img src="assets/images/resources/testi-1-2.jpg" />
                    </div>
                    <div className="testimonials-card__author__content">
                      <h5 className="testimonials-card__author__name">
                        <a href="team.html">Kathryn Murphy</a>
                      </h5>
                      <span className="testimonials-card__author__degeneration">
                        Student
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__inner">
                  <div className="testimonials-card__top">
                    <div className="testimonials-card__top__icon">
                      <i className="icon-quite"></i>
                    </div>
                    <div className="testimonials-card__top__rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p className="testimonials-card__top__designation">
                      "TTA's program prepared me with the skills and confidence
                      to land a fantastic job with a reputable carrier right
                      after graduation. I'm grateful for the support and
                      guidance I received from the instructors."
                    </p>
                  </div>
                  <div className="testimonials-card__author">
                    <div className="testimonials-card__author__image">
                      <img src="assets/images/resources/testi-1-1.jpg" />
                    </div>
                    <div className="testimonials-card__author__content">
                      <h5 className="testimonials-card__author__name">
                        <a href="team.html">John Smith</a>
                      </h5>
                      <span className="testimonials-card__author__degeneration">
                        TTA graduate and current long-haul driver
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <section className="benefits-one">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5">
              <div className="benefits-one__left">
                <div className="benefits-one__left__content">
                  <div className="benefits-one__left__content__head">
                    <div
                      className="sec-title  text-start wow fadeInUp"
                      data-wow-duration="300ms"
                    >
                      <h6 className="sec-title__tagline">
                        <i className="icon-left-arrow sec-title__img"></i>
                        Our Benefits
                        <i className="icon-right-arrow sec-title__img"></i>
                      </h6>

                      <h3 className="sec-title__title">
                        Data-Driven Highlights
                      </h3>
                    </div>
                  </div>
                  <p
                    className="benefits-one__left__content__text  wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    Graduation success rate 100%, employment placement rate 100%
                    We are not doing any placements. We are helping our
                    graduates with job assistance and industry contacts. We
                    might drop the % relating to the job placements.
                  </p>

                  <div className="benefits-one__left__content__box">
                    <ul className="benefits-one__left__content__box__list list-unstyled">
                      <li className="benefits-one__left__content__box__list__item">
                        {" "}
                        Don’t Over Speeding
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        {" "}
                        Be Extra Careful in Bad Weather
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        {" "}
                        Don't Follow Too Closely
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        {" "}
                        Avoid All Distractions
                      </li>
                      <li className="benefits-one__left__content__box__list__item">
                        {" "}
                        Wear Your Seat Belt
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div
                className="benefits-one__thumb  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="benefits-one__thumb__item">
                  <img src="assets/images/resources/car-2-1.png" />
                </div>
                <div className="benefits-one__thumb__cta">
                  <span className="benefits-one__thumb__cta__text">
                    <img src="assets/images/shapes/location-car.png" /> We’re
                    near to your locations, Start learn driving course
                  </span>
                  <a
                    href="/getting_started"
                    onClick="{ () => {window.location.href = '/getting_started'}}"
                    className="benefits-one__thumb__cta__btn drivschol-btn"
                  >
                    Start Learning
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="benefits-one__element">
          <svg
            width="68"
            height="552"
            viewBox="0 0 68 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="507"
              transform="matrix(-1 0 0 1 68 45)"
              fill="#393b6d"
            />
            <rect
              width="24"
              height="550"
              transform="matrix(-1 0 0 1 24 0)"
              fill="#393b6d"
            />
          </svg>
        </span>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-two__left  wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="about-two__left__item text-end">
                  <div className="about-two__left__item__img__one">
                    <img src="assets/images/resources/about-2-1.png" />
                  </div>
                  <div className="about-two__left__item__img__two text-start">
                    <img src="assets/images/resources/about-l-2-2.png" />
                  </div>
                  <div className="about-two__left__item__img__shape">
                    <svg
                      width="171"
                      height="167"
                      viewBox="0 0 171 167"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M70.5 69L-3.01609e-06 69L0 138L70.5 138L141 138L141 69L141 -6.16331e-06L70.5 -3.08165e-06L70.5 69Z"
                        fill="#393b6d"
                      />
                      <path
                        d="M171 27L171 167L27 167L27 95.5992L97.5591 95.5992L97.5591 27L171 27ZM168.118 164.198L168.118 29.8017L100.441 29.8017L100.441 98.4008L29.8817 98.4008L29.8817 164.198L168.118 164.198Z"
                        fill="#393b6d"
                      />
                      <path
                        d="M0.744079 54.347L0.74408 58.5308L60.412 58.5308L60.412 54.347L0.744079 54.347Z"
                        fill="#393b6d"
                      />
                      <path
                        d="M0.744079 43.7051L0.74408 47.8889L60.412 47.8889L60.412 43.7051L0.744079 43.7051Z"
                        fill="#393b6d"
                      />
                      <path
                        d="M0.744079 33.063L0.74408 37.2468L60.412 37.2468L60.412 33.063L0.744079 33.063Z"
                        fill="#393b6d"
                      />
                      <path
                        d="M0.744079 22.4212L0.74408 26.605L60.412 26.605L60.412 22.4212L0.744079 22.4212Z"
                        fill="#393b6d"
                      />
                      <path
                        d="M0.744079 11.7791L0.74408 15.9629L60.412 15.9629L60.412 11.7791L0.744079 11.7791Z"
                        fill="#393b6d"
                      />
                      <path
                        d="M0.744079 1.26363L0.74408 5.32104L60.412 5.32104L60.412 1.26362L0.744079 1.26363Z"
                        fill="#393b6d"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-two__right">
                <div className="about-two__right__head">
                  <div className="about-two__right__head__title">
                    <div
                      className="sec-title  text-start wow fadeInUp"
                      data-wow-duration="300ms"
                    >
                      <h6 className="sec-title__tagline">
                        <i className="icon-left-arrow sec-title__img"></i>
                        Get to Know Us
                        <i className="icon-right-arrow sec-title__img"></i>
                      </h6>

                      <h3 className="sec-title__title">
                        Ready to shift gears and drive your future? Enroll in a
                        TTA program today and take the first step towards a
                        rewarding career in the trucking industry!
                      </h3>
                    </div>
                  </div>
                  <p
                    className="about-two__right__head__text  wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    There are many variations of passages of Lorem Ipsum
                    avagtilable, but the majority have suffered alteration in
                    some{" "}
                  </p>
                </div>

                <div className="about-two__right__award">
                  <div
                    className="about-two__right__award__item  wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="about-two__right__item__icon">
                      <i className="icon-trophy-2"></i>
                    </div>
                    <div className="about-two__right__item__content">
                      <h4 className="about-two__right__item__content__title">
                        Award Wining Time
                      </h4>

                      <p className="about-two__right__item__content__text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <div
                    className="about-two__right__award__item  wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="about-two__right__item__icon">
                      <i className="icon-interest-rate-1"></i>
                    </div>
                    <div className="about-two__right__item__content">
                      <h4 className="about-two__right__item__content__title">
                        Higest Success Rates
                      </h4>

                      <p className="about-two__right__item__content__text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="about-two__right__author  wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="about-two__right__link">
                    <a
                      href="/getting_started"
                      onClick="{ () => {window.location.href = '/getting_started'}}"
                      className="about-two__right__link__btn drivschol-btn drivschol-btn--black"
                    >
                      {" "}
                      Enroll Now
                    </a>
                  </div>
                  <div className="about-two__right__author__item">
                    <div className="about-two__right__author__item__img">
                      <img src="assets/images/shapes/about-author-2-1.png" />
                    </div>
                    <div className="about-two__right__author__item__content">
                      <div className="about-two__right__author__signature">
                        <img src="assets/images/shapes/signature.png" />
                      </div>

                      <span className="about-two__right__author__designation">
                        CEO & Co founder
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-three contact__three__home-two">
        <div className="container-fluid p-0 m-0">
          <div className="contact-three__inner">
            <div
              className="contact-three__inner__bg jarallax"
              style={{
                backgroundImage:
                  "url(assets/images/resources/conntact-2-1.png)",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="row p-0 m-0">
              <div className="col-md-6 p-0 m-0">
                <div
                  className="contact-three__content  wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div
                    className="sec-title  text-start wow fadeInUp"
                    data-wow-duration="300ms"
                  >
                    <h6 className="sec-title__tagline">
                      <i className="icon-left-arrow sec-title__img"></i>
                      Get in Touch
                      <i className="icon-right-arrow sec-title__img"></i>
                    </h6>

                    <h3 className="sec-title__title">
                      Feel Free to Write us Anytime
                    </h3>
                  </div>
                  <form
                    className="contact-three__form contact-form-validated form-one wow fadeInUp"
                    data-wow-duration="1500ms"
                    action="https://pixydrops.com/drivschol/inc/sendemail.php"
                  >
                    <div className="form-one__group">
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="form-one__control">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                        />
                      </div>

                      <div className="form-one__control">
                        <input type="text" name="phone" placeholder="Phone" />
                      </div>

                      <div className="form-one__control">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>

                      <div className="form-one__control form-one__control__full">
                        <textarea
                          name="message"
                          placeholder="Write a message"
                        ></textarea>
                      </div>

                      <div className="form-one__control">
                        <button
                          type="submit"
                          className="drivschol-btn drivschol-btn--base2"
                        >
                          <span>Get in Touch</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 p-0 m-0">
                <div
                  className="contact-three__location wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="contact-three__location__content">
                    <div className="contact-three__location__content__icon">
                      <svg
                        viewBox="0 0 55 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.3407 7.80439C41.3081 2.77164 34.6167 0 27.4994 0C20.3821 0 13.6905 2.77164 8.6579 7.80439C3.62515 12.8373 0.853516 19.5286 0.853516 26.6457C0.853516 41.0437 14.4672 53.0193 21.781 59.4529C22.7974 60.347 23.6751 61.1191 24.3743 61.7722C25.2504 62.5906 26.375 62.9999 27.4992 62.9999C28.6238 62.9999 29.7481 62.5906 30.6243 61.7722C31.3236 61.119 32.2013 60.347 33.2176 59.4529C40.5314 53.0192 54.1451 41.0437 54.1451 26.6457C54.145 19.5286 51.3735 12.8373 46.3407 7.80439ZM30.7801 56.6821C29.7414 57.5958 28.8445 58.3849 28.105 59.0755C27.7653 59.3926 27.2332 59.3928 26.8934 59.0755C26.154 58.3846 25.257 57.5957 24.2183 56.682C17.3424 50.6336 4.5437 39.375 4.5437 26.6459C4.5437 13.9882 14.8414 3.69055 27.4991 3.69055C40.1567 3.69055 50.4544 13.9882 50.4544 26.6459C50.4546 39.375 37.6559 50.6336 30.7801 56.6821Z"
                          fill="#393b6d"
                        />
                        <path
                          d="M27.5023 13.8926C21.0274 13.8926 15.7598 19.1601 15.7598 25.635C15.7598 32.1098 21.0274 37.3773 27.5023 37.3773C33.9771 37.3773 39.2447 32.1098 39.2447 25.635C39.2447 19.1601 33.9771 13.8926 27.5023 13.8926ZM27.5023 33.6868C23.0624 33.6868 19.4502 30.0746 19.4502 25.6348C19.4502 21.1951 23.0624 17.5829 27.5023 17.5829C31.9422 17.5829 35.5542 21.1951 35.5542 25.6348C35.5542 30.0746 31.9422 33.6868 27.5023 33.6868Z"
                          fill="#393b6d"
                        />
                      </svg>
                    </div>
                    <h5 className="contact-three__location__content__text">
                      2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                    </h5>
                    <div className="contact-three__location__content__line">
                      <svg
                        width="468"
                        height="40"
                        viewBox="0 0 468 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="468" height="14" fill="#DA0D0E" />
                        <rect
                          x="120"
                          y="26"
                          width="348"
                          height="14"
                          fill="#DA0D0E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="contact-three__location__map">
                    <div className="google-map google-map__contact">
                      <iframe
                        title="template google map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                        className="map__contact"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <br />
      <section className="cta-two ">
        <div
          className="cta-two__bg"
          style={{ backgroundImage: "url(assets/images/resources/cta.svg)" }}
        >
          {" "}
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className="cta-two__thumb  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <img src="assets/images/resources/cta-car-2-1.png" />
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="cta-two__content  wow fadeInUp"
                data-wow-delay="500ms"
              >
                <h3 className="cta-two__title">
                  Book Your First Driving Lesson Today
                </h3>

                <a
                  href="contact.html"
                  className="drivschol-btn cta-two__btn drivschol-btn--base2"
                >
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-two__shape-line">
          <img src="assets/images/shapes/line-cta.png" />
        </div>
      </section>
    </>
  );
};
export default Home;
