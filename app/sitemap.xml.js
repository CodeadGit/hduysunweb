 
const URL = "https://herkesduysun.com";
 
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://herkesduysun.com/</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://herkesduysun.com/sonDakika</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/gundem</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/tumkategoriler</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/spor</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/kultursanat</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/egitim</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/dunya</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/siyaset</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/ekonomi</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/saglik</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/video-galeri</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/teknoloji</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/otomobil</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/seyahat</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/gastro</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/nobetci-eczane</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/foto-galeri</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/kunye</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/cerez-politikasi</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/gizlilik-politikasi</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/veri-politikasi</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/kullanim-sartnamesi</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/iletisim</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://herkesduysun.com/kvkk</loc>
  <lastmod>2023-11-30T17:49:55+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>

 `;
}
 
export async function getServerSideProps({ res }) {
 
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap();
 
  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();
 
  return {
    props: {},
  };
}
 
export default function SiteMap() {}
