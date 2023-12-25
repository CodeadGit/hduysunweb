//import CerezPolitikasi from "@/components/footerPages/CerezPolitikasi";
import dynamic from "next/dynamic";
const CerezPolitikasi = dynamic(
  () => import("@/components/footerPages/CerezPolitikasi"),
  { ssr: false }
);
const CerezPolitikasiPage = () => {
  return <CerezPolitikasi />;
};

export default CerezPolitikasiPage;
