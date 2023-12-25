//import Kunye from '@/components/footerPages/Kunye';
import dynamic from 'next/dynamic';
const Kunye = dynamic(
  () => import("@/components/footerPages/Kunye"),
  { ssr: false }
);
const KunyePage = () => {
  return (
    <Kunye/>
  )
}

export default KunyePage;