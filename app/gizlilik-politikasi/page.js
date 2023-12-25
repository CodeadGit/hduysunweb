//import GizlilikPolitikasi from "@/components/footerPages/GizlilikPolitikasi";
import dynamic from "next/dynamic";
const GizlilikPolitikasi = dynamic(
  () => import("@/components/footerPages/GizlilikPolitikasi"),
  { ssr: false }
);
const GizlilikPolitikasiPage = () => {
  return <GizlilikPolitikasi />;
};

export default GizlilikPolitikasiPage;
