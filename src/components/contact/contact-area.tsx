import ContactForm from "../form/contact-form";
// import Link from "next/link";
// import { HomeSvg } from "../svg";

type IProps = {
  title?: string;
  subtitle?: string;
  admission?: boolean;
};

export default function ContactArea({ title, subtitle, admission }: IProps) {
  return (
    <>
      {/* ===== Banner Section ===== */}
      <section className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix">
        <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/banner-erith.png)" }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content">
                <div className="tp-breadcrumb__list inner-after">
                  {/* <span className="white">
                  <Link href="/">
                    <HomeSvg/>
                  </Link>
                </span> */}
                  {admission && <span className="white">Admission</span>}
                  {title && <h3 className="tp-breadcrumb__title color"></h3>}
                  {subtitle && <span className="white"></span>}
                  <h3 className="tp-breadcrumb__title color">Get In Touch</h3>
                  <span className="white">
                    We Are Here To Answer Any Questions You May Have
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tp-contact-area tp-contact-p fix p-relative pt-10 pb-20">
        {/* <div className="tp-contact-bg" style={{ backgroundImage: "url(/assets/img/live/erith-2.jpeg)" }}></div> */}
        {/* <div className="tp-contact-shape">
        <span>
          <svg
            width="1920"
            height="559"
            viewBox="0 0 1920 559"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1958.7 6.55286C1332.03 310.106 2369.35 119.238 2232.58 220.873C2018.48 379.976 692.5 607.75 254.5 538.145C-27.1058 493.393 1387 130.595 -280 395.595"
              stroke="url(#paint0_linear_2756_1168)"
              strokeWidth="14"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2756_1168"
                x1="92.1912"
                y1="171.542"
                x2="1827.4"
                y2="294.717"
                gradientUnits="userSpaceOnUse"
              ></linearGradient>
            </defs>
          </svg>
        </span>
      </div> */}
        <div className="tp-contact-shape-2">
          {/* <img src="/assets/img/live/contact-shape-2.svg" alt="shape" /> */}
        </div>
        <div className="container">
          <div
            className="tp-about-wrap mb-60 wow fadeInLeft"
            data-wow-delay=".3s"
          >
            <div className="row justify-content-start">
              <div className="col-lg-12">
                <div className="tp-contact-wrap p-relative">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
