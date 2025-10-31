import React from "react";
import AchievementCounter1 from "../achievement/achievement";
import Link from "next/link";

const RequestCallStyle1 = () => {
  return (
    <>
      <div
        className="request-call-back-area text-light default-padding mb-30 position-relative"
        style={{
          backgroundImage: `url(/assets/img/banner/industry.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Black overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // adjust 0.6 for more/less darkness
            zIndex: 1,
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-center">
            <div className="col-lg-6">
              <h2 className="title">
               Looking for precision-engineered solutions and services?
                {/* <br />
                services designed with exceptional precision? */}
              </h2>
              <Link
                className="btn circle btn-light mt-30 mt-md-15 mt-xs-10 btn-md radius animation"
                href="/contact"
              >
                Request a Call back
              </Link>
            </div>
            <div className="col-lg-6 text-end">
              <AchievementCounter1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCallStyle1;
