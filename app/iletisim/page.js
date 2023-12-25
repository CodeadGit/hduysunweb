//import BizeUlasin from "@/components/footerPages/BizeUlasin";
import dynamic from "next/dynamic";
const BizeUlasin = dynamic(
  () => import("@/components/footerPages/BizeUlasin"),
  { ssr: false }
);
const BizeUlasinPage = () => {
  return (
    <BizeUlasin/>
  )
}

export default BizeUlasinPage;