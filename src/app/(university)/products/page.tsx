import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
// import CampusChooseArea from "@/components/campus/campus-choose-area";
// import CounterThree from "@/components/counter/counter-three";
import AdmissionArea, {
  AdmissionApplyArea,
  AdmissionCtaArea,
} from "@/components/admission/admission-area";

export const metadata: Metadata = {
  title: "products-Erith",
  icons: {
    icon: "/favicon.png",   
  },
};

export default function UniversityAdmissionOverviewPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Bearing Isolator Labyrinth Seals"
        subtitle="Bearing Protection"
      />
      {/* breadcrumb area end */}

      {/* campus overview area start */}
      {/* <CampusChooseArea /> */}
      {/* campus overview area end */}

      {/* counter area start */}
      {/* <CounterThree /> */}
      {/* counter area end */}

      {/* admission area start */}
      <AdmissionArea />
      {/* admission area end */}

       {/* admission apply area start */}
      <AdmissionApplyArea />
      {/* admission apply area end */}

      {/* admission cta area start */}
      <AdmissionCtaArea />
      {/* admission cta area end */}

      
    </main>
  );
}
