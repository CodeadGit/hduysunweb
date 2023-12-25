import dynamic from "next/dynamic";
import AllCategoriesPage from "@/components/allCategoriesPage/AllCategoriesPage";
const AllCategoriesPage = dynamic(
  () => import("@/components/allCategoriesPage/AllCategoriesPage"),
  { ssr: false }
);
const AllCategoriesPageInd = () => {
  return <AllCategoriesPage />;
};

export default AllCategoriesPageInd;
