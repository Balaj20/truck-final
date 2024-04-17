import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Funding() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section style={{ marginTop: "100px" }}>
        <div
          class="sec-title    wow "
          data-aos="fade-up"
          data-wow-duration="1500ms"
          data-wow-delay="000ms mt-5"
        >
          <div class="text-center align-items-center justify-content-center align-content-center  ">
            <h3 class="sec-title__title">
              <i class="icon-left-arrow sec-title__img"></i>
              Funding Options
              <i class="icon-right-arrow sec-title__img"></i>
            </h3>
            <p style={{ fontSize: "19px" }}>
              {" "}
              <b>You may be eligible to get help </b>paying for the training
              from government programs such as:
            </p>
          </div>

          <div class="m-5 ">
            <h1 style={{ fontWeight: "600", color: "black" }} class="m-3">
              Second Career
            </h1>

            <p class="ps-3" style={{ fontSize: "20px" }}>
              Funding to cover program costs and living expenses for unemployed
              and laid-off workers
            </p>
            <h1 style={{ fontWeight: "600", color: "black" }} class="m-3">
              Workplace Safety Insurance Board
            </h1>

            <p class="ps-3" style={{ fontSize: "20px" }}>
              funding to cover program costs for injured workers
            </p>
            <h1 style={{ fontWeight: "600", color: "black" }} class="m-3">
              Ontario Works
            </h1>

            <p class="ps-3" style={{ fontSize: "20px" }}>
              funding to cover program costs for recipients of Ontario Works
            </p>
            <h1 style={{ fontWeight: "600", color: "black" }} class="m-3">
              Aboriginal Bands
            </h1>

            <p class="ps-3" style={{ fontSize: "20px" }}>
              funding to cover program costs for band members
            </p>

            <p
              class="d-flex ms-auto align-items-center pt-5 ps-2 pe-2 justify-content-center"
              style={{ fontSize: "27px", color: "black" }}
            >
              Employers can apply for funding to help pay for employee training
              through the -
              <a href="" style={{ color: "#5155de" }}>
                <b> CanadaOntario Jobs Grant.</b>
              </a>
            </p>
            <p class="ps-5" style={{ fontSize: "17px" }}>
              We have to include loans under financial assistance
            </p>
            <p class="ps-5" style={{ fontSize: "17px" }}>
              We have 2 companies Windmill and Achev's Accelerating Career
              Advancement program
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
