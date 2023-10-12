import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import OfficialAnnouncement from "@/components/officialAnnouncement/OfficialAnnouncement";
const ResmiIlanlarPage = () => {
  const links = [{ id: 1, title: "Resmi İlanlar", link: "/resmi-ilanlar" }];

  return (
    <div>
      <Breadcrumb links={links} />
      <OfficialAnnouncement />
    </div>
  );
};

export default ResmiIlanlarPage;
