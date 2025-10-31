import Image from "next/image";
import { Location } from "../svg";
import shape_1 from "@/assets/img/campus/campuses-shape-1.jpg";
import shape_2 from "@/assets/img/campus/campuses-shape-2.jpg";
import Link from "next/link";

// nav items
const navItems = [
  {
    id: "home-tab",
    target: "#home",
    label: "Abu Dhabi - BR",
    ariaControls: "home",
    selected: true,
  },
  {
    id: "profile-tab",
    target: "#profile",
    label: "Head Office",
    ariaControls: "profile",
    selected: false,
  },
  {
    id: "contact-tab",
    target: "#contact",
    label: "Sharjah - BR",
    ariaControls: "contact",
    selected: false,
  },
  {
    id: "Moscow-tab",
    target: "#Moscow",
    label:"Ras Al Khaimah Manufacturing Unit",
    ariaControls: "Moscow",
    selected: false,
  },
  {
    id: "Campus-tab",
    target: "#Campus",
    label: "India",
    ariaControls: "Campus",
    selected: false,
  },
  
];
// tab content data
const tabContentData = [
  {
    id: "home",
    label: "home-tab",
    imgSrc: "/assets/img/live/banner-erith-1.png",
    location: "Office No. 3, Plot #84,Mussafah M40 Abu Dhabi",
    isActive: true,
  },
  {
    id: "profile",
    label: "profile-tab",
    imgSrc: "/assets/img/live/banner-erith-2.jpg",
    location: "P O Box 117451 Office 801, Warsan Tower Barsha Heights Dubai",
    isActive: false,
  },
  {
    id: "contact",
    label: "contact-tab",
    imgSrc: "/assets/img/live/banner-erith-3.jpg",
    location: "P5 ELOB, Office E-22F-20, Hamriyah Free Zone, Sharjah",
    isActive: false,
  },
  {
    id: "Moscow",
    label: "Moscow-tab",
    imgSrc: "/assets/img/live/banner-erith-4.jpg",
    location: "S04 – 5-12 Shed No. 04, Al Hamra Industrial Zone-FZRas Al Khaimah",
    isActive: false,
  },
  {
    id: "Campus",
    label: "Campus-tab",
    imgSrc: "/assets/img/live/banner-erith-5.jpg",
    location: "Old no. 76 New no. 120, Master Complex,Second Floor, Gopathi Narayanaswami Chetty Road,T. Nagar, Chennai, Tamil Nadu 600017.",
    isActive: false,
  },
];

export default function AboutCampus() {
  return (
    <section className="tp-about-campus-area  p-relative pb-120">
      {/* <div className="tp-about-campus-shape">
        <div className="shape-1">
          <Image src={shape_1} alt="shape" />
        </div>
        <div className="shape-2">
          <Image src={shape_2} alt="shape" />
        </div>
      </div> */}
      <div className="container">
        <div className="row" style={{ paddingTop: 50 }}>
          <div className="col-lg-4">
            <div
              className="tp-about-campus-tab wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="tp-about-campus-heading">
                <h4 className="tp-about-campus-title">Branches</h4>
                <p>
                  Erith Specialized Solutions, based in the Middle East, provides advanced engineering products and services across vital sectors. With a diverse presence in 64 countries, we empower partners to excel in niche industrial applications.
                </p>
              </div>
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                {navItems.map((item) => (
                  <li className="nav-item" role="presentation" key={item.id}>
                    <button
                      className={`nav-link ${item.selected ? "active" : ""}`}
                      id={item.id}
                      data-bs-toggle="tab"
                      data-bs-target={item.target}
                      type="button"
                      role="tab"
                      aria-controls={item.ariaControls}
                      aria-selected={item.selected ? "true" : "false"}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="tab-content wow fadeInUp"
              data-wow-delay=".5s"
              id="myTabContent"
            >
              {tabContentData.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${
                    tab.isActive ? "show active" : ""
                  }`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={tab.label}
                >
                  <div className="tp-about-campus-box p-relative">
                    <div className="tp-about-campus-thumb">
                      <Image
                        src={tab.imgSrc}
                        alt={tab.label}
                        width={718}
                        height={482}
                        style={{ height: "auto" }}
                      />
                    </div>
                    <div className="tp-about-campus-content d-flex justify-content-between">
                      <div className="tp-about-campus-location">
                        <span>
                          <Location />
                        </span>
                        <a href="#">{tab.location}</a>
                      </div>
                      <div className="tp-about-campus-btn">
                        <Link className="tp-btn" href="#">
                          Find out More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
