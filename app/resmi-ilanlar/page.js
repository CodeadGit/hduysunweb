"use client"
import dynamic from "next/dynamic";
//import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
//import FormalAdverts from "@/components/formalAdvert/FormalAdverts";
const FormalAdverts = dynamic(
  () => import("@/components/formalAdvert/FormalAdverts"),
  { ssr: false }
);
const Breadcrumb = dynamic(
  () => import("@/components/breadcrumb/Breadcrumb"),
  { ssr: false }
);

const ResmiIlanlarPage = ({params}) => {
  const links = [{ id: 1, title: "Resmi İlanlar", link: "/resmi-ilanlar" }];

  return (
    <div>
      <Breadcrumb links={links} />
      <FormalAdverts />
    </div>
  );
};

export default ResmiIlanlarPage;
