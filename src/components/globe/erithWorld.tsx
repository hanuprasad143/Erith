"use client";
import React from "react";
import Image from "next/image";
// import Pricing from "@/components/pricing/Pricing";
// import BannerArea from "../banner/banner-area";
import ErithContactInfoArea from "./erith-contact-info";

const PricingPage = () => {
  return (
    <section className="pricing-wrapper pricing-1 style-2 section-padding pt-0 ">
      {/* Decorative Shapes */}
      <div className="shape">
        <div className="light-shape" />
        <Image
          className="shape-1"
          src="/assets/img/anand_erith_globe.png"
          alt="dotted globe"
          width={700}
          height={617}
        />
      </div>

      {/* Content Container */}
      <div className="container">
        {/* Pricing Component */}
        {/* <Pricing /> */}

        <div className="row justify-content-start">
          <div className="col-xl-8 col-lg-10">
            <div
              className="tp-section text-start wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h5 className="tp-section-3-subtitle">
                Global Company, Regional Focus, Local Presence
              </h5>
              {/* <p className="tp-section-3-title">
                With a presence in over 40 countries, Erith’s regional networks
                offer specialized solutions tailored to meet the unique
                challenges of local industries and applications.
              </p> */}
            </div>
          </div>
          <ErithContactInfoArea />
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
