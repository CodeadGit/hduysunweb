"use client";
import ColumnistsAuthorsDetail from "@/components/columnistsAuthors/columnistsAuthorsDetail/ColumnistsAuthorsDetail";
import { db } from "@/firebase/firebase.config";
import { CircularProgress } from "@mui/material";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const YazarDetayPage = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);
  const [authorLoading, setAuthorLoading] = useState(true);

  var idArray = String(params.eng).split("-");
  var idForThisAuthor = idArray.at(-1);
  var titleArray = idArray.slice(0, -1).join(" ").toString();

  useEffect(() => {
    const fetchAuthors = async () => {
      const qp = query(collection(db, "koseyazilari"));
      const qa = doc(db, "Columnists", idForThisAuthor);
      getDoc(qa)
        .then((data) => setAuthor(data.data()))
        .then(() => setAuthorLoading(false));
      try {
        const querySnapshot = await getDocs(qp);
        var columnistsData = [];
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            if (doc.data().authorid === idForThisAuthor && doc.data().active) {
              columnistsData.push({ ...doc.data(), doc: doc.id });
            }
          });
        }
        setPosts(columnistsData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAuthors();
  }, []);

  {
    /*
  useEffect(()=>{
    const fetchData = async () => {
      const q = query(collection(db, "Comments"), orderBy("createdAt", "desc"));

      try {
        const querySnapshot = await getDocs(q);
        var commentList = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().confirmed === false && !doc.data().denied) {
            commentList.push(doc.data());
          }
        });

        setAllComments(commentList);
        setAllCommentsLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
},[updating])
*/
  }

  // var {datePublished} = posts;

  // var timePublished = new Date(datePublished * 1000);
  // var options = { year: "numeric", month: "numeric", day: "2-digit" };
  // var formattedDate = timePublished.toLocaleString("tr-TR", options);

  if (loading || authorLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <ColumnistsAuthorsDetail
        posts={posts}
        author={author}
        idForThisAuthor={idForThisAuthor}
        // formattedDate={formattedDate}
      />
    </div>
  );
};

export default YazarDetayPage;
