import Link from "next/link";
import Image from "next/image";
import { RightArrowTwo,} from "../svg";

// icons
import ser_icon_1 from "@/assets/img/icon/service/icon1.png";
import ser_icon_2 from "@/assets/img/icon/service/icon2.png";
import ser_icon_3 from "@/assets/img/icon/service/icon3.png";
import ser_icon_4 from "@/assets/img/icon/service/icon4.png";
// import ser_shape from "@/assets/img/shape/service/services-shape-1.png";

// service data
const service_data = [
  {
    id: 1,
    icon: ser_icon_1,
    title: "Innovation & Growth",
    text: "We drive innovation through research, advanced technologies, and sustainable practices that ensure business growth.",
  },
  {
    id: 2,
    icon: ser_icon_2,
    title: "Global Partnerships",
    text: "We collaborate with organizations worldwide, creating long-term value through trusted global alliances.",
  },
  {
    id: 3,
    icon: ser_icon_3,
    title: "Technology Solutions",
    text: "From cloud to AI, we deliver cutting-edge technology solutions that empower enterprises to scale efficiently.",
  },
  {
    id: 4,
    icon: ser_icon_4,
    title: "Sustainability & Impact",
    text: "We integrate eco-friendly practices and responsible business strategies to create lasting positive impact for communities and the environment.",
  },
];

export default function ServiceOne() {
  return (
    <section
      className="service-area tp-service-bg mt-125"
      // style={{ backgroundImage: `url(/assets/img/bg/services-bg1.png)` }}
    >
      <div className="container">
        <div className="row">
          {service_data.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div
                className="tp-service-item text-start  wow fadeInUp"
                data-wow-delay={`.${item.id}s`}
              >
                <div className="tp-service-wrap">
                  <div className="tp-service-icon">
                    <span>
                      <Image src={item.icon} alt="service-icon" />
                    </span>
                  </div>
                  <h4 className="tp-service-title">
                    <Link
                      href="#"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></Link>
                  </h4>
                  <div className="tp-service-btn">
                    <Link href="#">
                      <span>
                        <RightArrowTwo />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="tp-service-content">
                  <p className="text-black">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="tp-service-all text-center">
              <span className="text-black">
                Trusted by Leading Enterprises Worldwide{" "}
                <Link href="/university-about">
                  Best University <RightSmArrowTwo />
                </Link>
              </span>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="tp-service-shape">
        <div
          className="tp-service-shape-1 wow bounceIn"
          data-wow-duration="1.5s"
          data-wow-delay=".4s"
        >
          <Image
            src={ser_shape}
            alt="service-shape"
          />
        </div>
      </div> */}
    </section>
  );
}
