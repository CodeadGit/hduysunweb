//import AllCategoriesPage from "@/components/allCategoriesPage/AllCategoriesPage";
import dynamic from "next/dynamic";
const AllCategoriesPage = dynamic(
  () => import("@/components/allCategoriesPage/AllCategoriesPage"),
  { ssr: false }
);
const TümKategoriHaberleriPage = () => {
  return (
    <AllCategoriesPage/>
  )
}

export default TümKategoriHaberleriPage;