//import Kvkk from "@/components/footerPages/Kvkk";
import dynamic from "next/dynamic";
const Kvkk = dynamic(
  () => import("@/components/footerPages/Kvkk"),
  { ssr: false }
);
const KvkkPage = () => {
  return (
    <Kvkk/>
  )
}

export default KvkkPage;