import Link from "next/link";
import Image from "next/image";

import { Email } from "../svg";
import FooterSocial from "./footer-social";
import logo from "@/assets/img/logo/erith_global.png";
import logo_black from "@/assets/img/logo/logo-black-2.png";
import { footerLinks } from "@/data/footer-links";

// prop type 
type IProps = {
  style_2?: boolean
}

export default function FooterTwo({ style_2 = false }: IProps) {
  return (
    <footer>


      <div className={`tp-footer-main ${style_2 ? '' : ''} pt-80 pb-55` } style={{backgroundColor:'#F3F4F9'}}>
        <div className="container">
          <div className="row">
            {/* Logo & Intro */}
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-1' : 'tp-footer-col-1'} mb-30`}>
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <Image 
                      src={style_2 ? logo_black : logo} 
                      alt="logo" 
                      priority 
                      style={{ height: "auto" }} 
                    />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>Solutions for a Sustainable Future.</p>
                </div>
                <div className="tp-footer-contact">
                  <span>Got Questions? Call us</span>
                  <a href="tel:+97172662628">+971 7266 2628</a>
                </div>
                <div className="tp-footer-contact-mail">
                  <a href="mailto:info@erithglobal.com">
                    <span><Email /></span>
                    info@erithglobal.com
                  </a>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-2' : 'tp-footer-col-2'} mb-30`}>
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

            {/* Address Section */}
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-3' : 'tp-footer-col-3'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Address</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.contact_info.map((info) => (
                      <li key={info.id}>
                        <Link href={info.link}>{info.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Blog Section */}
            {/* <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-3' : 'tp-footer-col-3'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Recent Blog</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.recent_blog.map((blog) => (
                      <li key={blog.id}>
                        <Link href={blog.link}>{blog.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}

            {/* Newsletter Section */}
            <div className="col-xl-4 col-lg-4 col-sm-8">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-4' : 'tp-footer-col-4'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Our Newsletter</h4>
                <div className="tp-footer-newsletter-wrap">
                  <p>
                    Enter your email and we will send you <br /> more information
                  </p>
                  <form action="#">
                    <div className="tp-footer-newsletter-wrapper mb-30">
                      <div className={`tp-footer-newsletter-input ${style_2 ? 'tp-footer-5-newsletter-input' : ''}`}>
                        <input type="email" placeholder="Your email" />
                      </div>
                      <div className={`${style_2 ? 'tp-footer-5-newsletter-submit' : 'tp-footer-newsletter-submit'}`}>
                        <button className={`${style_2 ? 'tp-btn-4' : 'tp-btn'}`}>Subscribe</button>
                      </div>
                    </div>
                  </form>

                  {/* Footer social links */}
                  <div className="tp-footer-newsletter-social">
                    <FooterSocial />
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`${style_2 ? 'tp-footer-5-bottom' : 'tp-footer-bottom'}`} style={{backgroundColor:'#F3F4F9'}}>
         
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center">
                <span>
                  © {new Date().getFullYear()} <a href="#">Erith Global</a>. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
