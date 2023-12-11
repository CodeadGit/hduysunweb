import { db } from "@/firebase/firebase.config";
import { collection, doc, getDocs, query } from "firebase/firestore";

const BASE_URL="https://www.herkesduysun.com/"
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>

     ${posts
       .map((category) => {
         return `
          <url>
              <loc>${`${BASE_URL}/${category?.doc}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
                ${
                  category?.urls?.map(u=>{
                  return`
                    <url>
                      <loc>${`${u.url}`}</loc>
                      <lastmod>${new Date().toISOString()}</lastmod>
                    </url>
                    `
                }).join('')}
          </url>
        `
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site

  const fetchCategories = async () => {
    const q = query(collection(db, "Sitemap"));
    try {
      const querySnapshot = await getDocs(q);
      var categoriesList = [];

      querySnapshot.forEach((doc) => {
          categoriesList.push({ ...doc.data(), doc: doc.id });
      });
      return categoriesList;
    } catch (error) {
      console.log(error);
    }
  };
  const request = await fetchCategories();

  const categories = request || [];


  const sitemap = generateSiteMap(categories);



  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;