import Link from "next/link";
import Image from "next/image";
import { RightArrow, RightArrowThree } from "../svg";
import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
import { university_classic_event_data } from "@/data/event-data";
import HoverImgItem from "./hover-img-item";
import img1 from "@/assets/img/event/fire-protection.jpg";
import img2 from "@/assets/img/event/fluid-handling.jpg";
import img3 from "@/assets/img/event/sealing-solutions.jpg";

const images = [img1, img2, img3];

export default function EventArea() {
  return (
    <section className="event-area  pt-85 pb-110">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-end">
          <div className="col-xl-5 col-md-8">
            <div
              className="tp-event-section mb-60 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="tp-section">
                <h3 className="tp-section-2-title">
                  Our Products{" "}
                  {/* <span>
                    Products{" "}
                    <Image
                      className="tp-underline-shape-3 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span> */}
                </h3>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-md-4">
            <div className="tp-event-btn text-md-end mb-70">
              <Link className="tp-btn" href="/products">
                See More Products
                <span>
                  <RightArrow />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
          {university_classic_event_data.map((item, index) => (
            <div key={item.id} className="tp-event-item">
              <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-md-2">
                  <div className="tp-event-list">
                    <div className="tp-hover-reveal-bg-wrapper">
                      <Image
                        src={images[index % images.length]} // cycles through img1, img2, img3
                        alt={item.title || "Event Image"}
                        className="tp-hover-reveal-bg-img"
                        width={400}
                        height={400}
                        priority
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-md-9">
                  <div className="tp-event-content">
                    <h3 className="tp-event-title">
                      <HoverImgItem title={item.title} />
                    </h3>
                    <div className="tp-event-info">
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow Column */}
                <div className="col-md-1">
                  <div className="tp-event-arrow text-lg-end">
                    <Link href="#">
                      <span>
                        <RightArrowThree />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
