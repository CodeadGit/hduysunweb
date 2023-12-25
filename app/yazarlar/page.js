import dynamic from 'next/dynamic';
//import ColumnistsAuthors from '@/components/columnistsAuthors/ColumnistsAuthors';
const ColumnistsAuthors = dynamic(
  () => import("@/components/columnistsAuthors/ColumnistsAuthors"),
  { ssr: false }
);

const YazarlarPage = () => {
  return (
    <ColumnistsAuthors/>
  )
};

export default YazarlarPage;