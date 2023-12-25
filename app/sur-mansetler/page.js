//import SubHeadlineNews from '@/components/subHeadlineNews/SubHeadlineNews';
import dynamic from 'next/dynamic';
const SubHeadlineNews = dynamic(
  () => import("@/components/subHeadlineNews/SubHeadlineNews"),
  { ssr: false }
);
const SurmansetlerPage = () => {
  return (
    <div>
      <SubHeadlineNews/>
    </div>
  )
}

export default SurmansetlerPage;
