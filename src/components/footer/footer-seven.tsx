"use client";
import Image from "next/image";
import Link from "next/link";
import { Email } from "../svg";
import FooterSocial from "./footer-social";
// import logo from "@/assets/img/logo/logo-black-2.png";
// import logo_white from "@/assets/img/logo/logo-white.png";
import { footerLinks } from "@/data/footer-links";
import erithglobal_black from "@/assets/img/logo/erith_global.png";

type Props = {
  dashboard_footer?: boolean;
  bgClr?: string;
  style_2?: boolean;
  inner?: boolean;
};

export default function FooterSeven({
  bgClr,
  dashboard_footer,
  style_2 = false,
}: Props) {
  // Inline style for vertical separator
  const columnStyle = {
    borderRight: bgClr ? "none" : "1px solid #ccc",
  };

  return (
    <>
      <style jsx global>{`
        /* Override ONLY text colors to black - preserves all other styles */
        .tp-footer-widget-content p {
          color: #000000 !important;
        }

        .tp-footer-widget ul li a {
          color: #55585b !important;
        }

        .tp-footer-contact > span {
          color: #55585b !important;
        }

        .tp-footer-contact > a {
          color: #000000 !important;
        }

        .tp-footer-contact-mail a {
          color: #55585b !important;
        }

        .tp-footer-widget-title {
          color: #000000 !important;
        }

        .tp-footer-copyright span {
          color: #55585b !important;
        }

        .tp-footer-copyright a {
          color: #55585b !important;
        }

        .tp-footer-newsletter-wrap p {
          color: #55585b !important;
        }

        /* Yellow hover color */
        .tp-footer-widget ul li a:hover {
          color: #f4d100 !important;
        }

        .tp-footer-contact > a:hover {
          color: #f4d100 !important;
        }

        .tp-footer-contact-mail a:hover {
          color: #f4d100 !important;
        }

        .tp-footer-copyright a:hover {
          color: #f4d100 !important;
        }
      `}</style>

      <footer>
        <div
          className={`tp-footer-main ${
            dashboard_footer ? "tpd-dashboard-footer" : "tp-footer-inner"
          } pt-80 pb-55`}
          style={
            bgClr
              ? { backgroundColor: bgClr }
              : dashboard_footer
              ? { backgroundColor: "#0a1c3a" }
              : {}
          }
        >
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
                style={columnStyle}
              >
                <div className="tp-footer-widget tp-footer-col-1 mb-30">
                  <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                    <Link href="/">
                      <Image
                        src={
                          dashboard_footer
                            ? erithglobal_black
                            : erithglobal_black
                        }
                        alt="logo"
                        style={{ height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="tp-footer-widget-content">
                    <p className="tp-footer-widget-title">
                      Solutions for a Sustainable Future.
                    </p>
                  </div>

                  <div className="tp-footer-contact-mail mb-10">
                    <span>Got Questions? Call us</span>
                    <br />
                    <a href="tel:97172662628">+971 7266 2628</a>
                  </div>
                  <div className="tp-footer-contact-mail">
                    <a href="mailto:info@erithglobal.com">
                      <span>
                        <Email />
                      </span>
                      info@erithglobal.com
                    </a>
                  </div>
                  <div className="tp-footer-newsletter-social tp-footer-inner-social mt-15">
                    <FooterSocial />
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div
                  className={`tp-footer-widget ${
                    style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"
                  } mb-30`}
                >
                  <h4 className="tp-footer-widget-title mb-20">Products</h4>
                  <div className="tp-footer-widget-link">
                    <ul>
                      {footerLinks.products.map((link) => (
                        <li key={link.id}>
                          <Link href={link.link}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5">
                <div className="tp-footer-widget tp-footer-col-3 mb-30">
                  <h4 className="tp-footer-widget-title mb-15">Industry</h4>
                  <div className="tp-footer-widget-link">
                    <ul>
                      <li>
                        <a href="#">Oil and Gas</a>
                      </li>
                      <li>
                        <a href="#">Infrastructure</a>
                      </li>
                      <li>
                        <a href="#">Food Pharma Bevarage</a>
                      </li>
                      <li>
                        <a href="#">Semi Conductors</a>
                      </li>
                      <li>
                        <a href="#">Marine</a>
                      </li>
                      <li>
                        <a href="#">Petro Chemical</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4 (last column, no border) */}
              <div className="col-xl-4 col-lg-3 col-md-7 col-sm-7">
                <div className="tp-footer-widget tp-footer-col-3 mb-30">
                  <h4 className="tp-footer-widget-title mb-15">Address</h4>
                  <div className="tp-footer-widget-link">
                    <ul>
                      <li>
                        <a href="#">
                          Office No.3, Plot #84 Mussafah M40, Abu Dhabi
                        </a>
                      </li>
                      <li>
                        <a href="#">info@erithglobal.com</a>
                      </li>
                      <li>
                        <a href="#">+971 7266 2628</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-footer-widget tp-footer-5-col-4 mb-30">
                  <h4 className="tp-footer-widget-title mb-15">
                    Our Newsletter
                  </h4>
                  <div className="tp-footer-newsletter-wrap">
                    <p>
                      Enter your email and we will send you <br /> more
                      information
                    </p>
                    <form action="#">
                      <div
                        className={`tp-footer-newsletter-wrapper ${
                          dashboard_footer ? "" : "tp-footer-inner-input"
                        } mb-30`}
                      >
                        <div className="tp-footer-newsletter-input">
                          <input type="email" placeholder="Your email" />
                        </div>
                        <div
                          className={`${
                            dashboard_footer
                              ? "tp-footer-newsletter-submit"
                              : "tp-footer-5-newsletter-submit"
                          }`}
                        >
                          <button
                            className={`${
                              dashboard_footer ? "tp-btn" : "tp-btn-inner"
                            }`}
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            dashboard_footer
              ? "tp-footer-bottom tpd-dashboard-footer-bottom"
              : "tp-footer-5-bottom tp-footer-inner-bottom"
          }`}
          style={bgClr ? { backgroundColor: bgClr } : {}}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="tp-footer-copyright text-center">
                  <span>
                    © {new Date().getFullYear()} <a href="#">Erith Global,</a>{" "}
                    All rights reserved.
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tp-footer-copyright text-center">
                  <span>
                    <a href="#">Terms & Conditions</a>
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tp-footer-copyright text-center">
                  <span>
                    <a href="#">Privacy Policy</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
