// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "./slider.scss";
// // import { newsArray as list } from '@/context/utils';

// const url = "https://api.slingacademy.com/v1/sample-data/photos?limit=5";

// const SliderComponent = () => {
//   const [photos, setPhotos] = useState([]);

//   const fetchPhotos = async () => {
//     const res = await fetch(url);
//     const data = await res.json();
//     const { photos } = data;
//     setPhotos(photos);
//   };

//   useEffect(() => {
//     fetchPhotos();
//   }, []);

//   // console.log(photos);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {/* {list.map((item) => {
//           const { id, img, title, comments } = item;
//           return (
//             <article key={id}>
//               <img src={img} alt={title} />
//               <h5>{title}</h5>
//               <p>{title}</p>
//               <p className='text'>{comments}</p>
//             </article>
//           );
//         })} */}

//         {photos.map((photo) => {
//           const { id, url, title, description } = photo;
//           return (
//             <article key={id}>
//               <Link href={`/${id}`}>
//                 <img
//                   src={url}
//                   alt={title}
//                   className="image"
//                 />
//               </Link>
//               <h5 className="name">{title}</h5>
//               <p className="title">{title}</p>
//               <p className="text">{description}</p>
//             </article>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// };

// export default SliderComponent;
