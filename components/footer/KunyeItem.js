import Link from "next/link"
import "./kunyeItem.scss";
const KunyeItem = ({item}) => {
 
  const {url, caption} = item;


  return (
    <Link target="_blank" className="footer-link" href={url}>{caption}</Link>
  )
}

export default KunyeItem