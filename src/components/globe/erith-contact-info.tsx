import { LocationFour, HomeSvg } from "../svg";
import Link from "next/link";

const contactInfoData = [
  {
    icon: <LocationFour />,
    title: "Sales Expert",
    description: "Connect With Your Local",
    linkText: "info@erithglobal.com",
    href: "mailto:info@erithglobal.com",
    buttonLink: "Get In Touch",
  },
  {
    icon: <HomeSvg />,
    title: "Around the World",
    description: "Discover Our Locations",
    linkText: "+971 7266 2628",
    // href: '+971 7266 2628'
    buttonLink: "Our Global Presence",
  },
  {
    icon: <HomeSvg />,
    title: "Innovation Happens",
    description: "See Where",
    linkText: "Office No.3,Plot ",
    href: "#",
    buttonLink: "About Our R&D Labs",
  },
];

export default function ErithContactInfoArea() {
  return (
    <section className="tp-contact-info-area tp-contact-p ">
      <div className="container">
        <div className="tp-about-wrap wow fadeInLeft" data-wow-delay=".3s">
          <div className="row justify-content-start">
            <div className="col-lg-12">
              <div className="tp-contact-info-wrapper text-start">
                <h3 className="tp-contact-main-title col-lg-6">
                  {" "}
                  With a presence in over 40 countries, Erith’s regional
                  networks offer specialized solutions tailored to meet the
                  unique challenges of local industries and applications.
                </h3>
              </div>
              <div className="row">
                {contactInfoData.map((item, index) => (
                  <div key={index} className="col-lg-3 col-md-6">
                    <div className="tp-contact-info-item ">
                      <div className="tp-contact-info-icon">
                        <span>{item.icon}</span>
                      </div>

                      <p>{item.description}</p>
                      <h4 className="tp-contact-info-title">{item.title}</h4>
                      {/* <a href={item.href}>{item.linkText}</a> */}
                      <div className="tp-banner-sm-2-btn">
                        <Link
                          // href={item.buttonLink}
                          href="#"
                          className="inline-block px-4 py-2 text-black font-semibold rounded-md transition-all duration-300 hover:opacity-90"
                          style={{
                            backgroundColor: "#f4d100",
                            border: "2px solid #f4d100", // same color border
                          }}
                        >
                          {item.buttonLink}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
