import Image from "next/image";
import React, { CSSProperties } from "react";
import thumb_1 from "@/assets/img/about/about-thumb1.png";
import CounterItem from "../counter/counter-item";
import Link from "next/link";

const imgStyle: CSSProperties = {
  height: "auto",
  width: "100%",
  objectFit: "cover",
};

const experienceStyle: CSSProperties = {
  display: "inline-block",
  position: "absolute",
  right: "-55px", // moved slightly left
  bottom: "120px", // moved slightly up
  padding: "7px 36px 20px 24px",
  borderRadius: "6px",
  border: "1px solid rgba(1, 15, 28, 0.1)",
  background: "rgba(246, 244, 238, 0.6)",
  backdropFilter: "blur(10px)",
  minWidth: "224px",
};

const experienceTextStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const AboutStyle1 = () => {
  return (
    <div
      className="about-style-one-area default-padding"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="row align-center">
          {/* Left Side Text */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-style-one">
              <div className="h4 sub-heading">About Us</div>
              <h2 className="title mb-25">
                Explore diverse industry focused services ensuring operational
                reliability, safety, and efficiency.
              </h2>
              <p>
                Erith, headquartered in the vibrant heart of the Middle East,
                stands as a premier engineering solutions company, renowned for
                its expertise in high-end engineered products and solutions.
                Established in August 2020 and with a versatile global workforce
                spanning 75 countries across the Middle East and Africa, we
                provide niche applications that cater to significant industries.
              </p>
              <div className="owner-info">
                <div className="left-info">
                  <h4>Richard Edwin</h4>
                  <span>CEO</span>
                </div>
                <Link href="/about" className="tp-btn">
                  Get More
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-xl-6 col-lg-6" style={{ position: "relative" }}>
            <div className="about-thumb">
              <Image
                src={thumb_1}
                alt="about-thumb"
                style={{ borderRadius: "10px" }}
              />
            </div>

            {/* Experience Box */}
            <div style={experienceStyle}>
              <div style={experienceTextStyle}>
                <h3
                  style={{
                    margin: 0,
                    color: "#000",
                    fontSize: "90px",
                    lineHeight: "1",
                  }}
                >
                  <CounterItem min={0} max={25} />
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#000",
                    fontSize: "18px",
                    lineHeight: "1.2",
                  }}
                >
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStyle1;
