import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchSvg } from "../svg";
import NavMenus from "./navbar/nav-menus";
// import logo from "@/assets/img/logo/erith-white.png";
import HeaderTopArea from "./header-top/header-top-area";
import logo_black from "@/assets/img/logo/erith_global.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import SearchButton from "./button/search-button";
import OffcanvasButton from "./button/offcanvas-btn";

type HeaderSevenProps = {
  inner?: boolean;
  transparent?: boolean;
};

export default function HeaderSeven({}: HeaderSevenProps) {
  return (
    <>
      <header className="header-area tp-header-white p-relative">
        {/* header top start*/}
        <HeaderTopArea />
        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href="/">
                    <Image
                      className="logo-1"
                      src={logo_black}
                      alt="logo"
                      priority
                    />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 d-none d-xl-block">
                <div className="main-menu" style={{ marginLeft: "-20px" }}>
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>

              <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  {/* Search bar */}
                  <div className=" mr-3">
                    <SearchButton icon={<SearchSvg />} />
                  </div>

                  {/* Contact Us button */}
                  <div className="tp-header-btn d-none d-md-block ml-30">
                    <Link
                      href="/contact"
                      style={{
                        backgroundColor: "#f4d100",
                        color: "#000", // black text
                        padding: "8px 18px",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-block",
                      }}
                    >
                      Get Quote
                    </Link>
                  </div>

                  {/* Mobile menu button */}
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar" />
      {/* mobile offcanvas */}
    </>
  );
}
