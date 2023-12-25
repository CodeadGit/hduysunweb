//import KullanimSartnamesi from "@/components/footerPages/KullanimSartnamesi";
import dynamic from "next/dynamic";
const KullanimSartnamesi = dynamic(
  () => import("@/components/footerPages/KullanimSartnamesi"),
  { ssr: false }
);
const KullanimSartnamesiPage = () => {
  return <KullanimSartnamesi />;
};

export default KullanimSartnamesiPage;
