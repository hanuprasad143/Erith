import MainProvider from "@/components/provider/main-provider";
// import HeaderTwo from "@/components/header/header-two";
import HeaderSeven from "@/components/header/header-seven";
import BackToTop from "@/components/back-to-top";
import FooterSeven from "@/components/footer/footer-seven";
// import FooterOne from "@/components/footer/footer-one";
// import FooterTwo from "@/components/footer/footer-two";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderSeven/>
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      {/* <FooterTwo/> */}
      {/* <FooterOne inner={true} /> */}
      <FooterSeven/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
