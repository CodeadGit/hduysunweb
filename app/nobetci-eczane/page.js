//import NobetciEczaneComp from '@/components/nobetcieczane/NobetciEczane';
import dynamic from 'next/dynamic';
const NobetciEczaneComp = dynamic(
  () => import("@/components/nobetcieczane/NobetciEczane"),
  { ssr: false }
);
const NobetciEczane = () => {
  return (
    <NobetciEczaneComp />
  )
}

export default NobetciEczane;