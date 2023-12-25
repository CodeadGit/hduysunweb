//import HeadlineNews from '@/components/headlineNewsPage/HeadlineNews'
import dynamic from 'next/dynamic'
const HeadlineNews = dynamic(
  () => import("@/components/headlineNewsPage/HeadlineNews"),
  { ssr: false }
);
const MansetlerPage = () => {
  return (
    <div>
      <HeadlineNews/>
    </div>
  )
}

export default MansetlerPage
