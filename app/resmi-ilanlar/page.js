"use client"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import FormalAdverts from "@/components/formalAdvert/FormalAdverts";
import { useParams } from "next/navigation";

const ResmiIlanlarPage = ({params}) => {
  const links = [{ id: 1, title: "Resmi İlanlar", link: "/resmi-ilanlar" }];

  console.log(params.eng)

  return (
    <div>
      <Breadcrumb links={links} />
      <FormalAdverts />
    </div>
  );
};

export default ResmiIlanlarPage;
