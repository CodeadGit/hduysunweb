//import VeriPolitikasi from '@/components/footerPages/VeriPolitikasi';
import dynamic from 'next/dynamic';
const VeriPolitikasi = dynamic(
  () => import("@/components/footerPages/VeriPolitikasi"),
  { ssr: false }
);

const VeriPolitikasiPage = () => {
  return (
    <VeriPolitikasi/>
  )
}

export default VeriPolitikasiPage;