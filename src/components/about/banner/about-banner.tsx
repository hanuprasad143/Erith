import { RightArrowTwo } from "@/components/svg";
import Link from "next/link";
import HeroSection from "@/components/slider/Heroslider";

type IProps = {
  title: string;
  subtitle: string;
  admission?: boolean;
};

export default function AboutBanner({ title, subtitle, admission }: IProps) {
  return (
    <>
      <section className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix">
        <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
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
                  <h5 className="tp-breadcrumb__title color">
                    About us
                    <br />
                  </h5>

                  <span className="white">
                    We providing the best quality Products.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <HeroSection /> */}
      </section>
      {/* <section className="tp-about-pt fix p-relative pt-30"> */}
      {/* <div
          className="tp-about-bg-main"
          data-background="assets/img/about/about/about-bg.png"
          style={{
            backgroundImage: "url(/assets/img/about/about/about-bg.png)",
          }}
        ></div> */}
      {/* <div className="container">
          <div
            className="tp-about-wrap mb-60 wow fadeInLeft"
            data-wow-delay=".3s"
          > */}
      {/* <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="tp-about-banner mb-80">
                  <span>About Us</span>
                  <h3 className="tp-about-banner-title">
                    We providing the <br /> best quality Products.
                  </h3>
                </div>
              </div>
            </div> */}
      {/* </div>
     
        </div>
      </section> */}
    </>
  );
}
