// import Link from "next/link";
// import { HomeSvg } from "../svg";

type IProps = {
    title: string;
    subtitle: string;
    admission?: boolean;
}

export default function BreadcrumbTwo({ title, subtitle }: IProps) {
  return (
    <section className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix">
     
      <div
        className="tp-breadcrumb__bg overlay"
        style={{backgroundImage:"url(/assets/img/breadcrumb/breadcrumb1.png)" }}
      ></div>
      <div className="container">
         <div className="tp-about-wrap mb-60 wow fadeInLeft" data-wow-delay=".3s">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list inner-after">
                <span className="white">
                  {/* <Link href="/">
                    <HomeSvg/>
                  </Link> */}
                </span>
                {/* {admission && <span className="white">Admission</span>} */}
                <span className="white">{subtitle}</span>
              </div>
              <h3 className="tp-breadcrumb__title color">
                {title}
              </h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
