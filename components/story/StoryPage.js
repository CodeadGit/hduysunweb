import Stories from "react-insta-stories";
import "./story.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";

const StoryPage = ({ stories}) => {

  const router = useRouter();

  const formatted = stories?.map((i, idx) => {
    return {
      url:
        i?.media ||
        "https://yt3.googleusercontent.com/Sz83qeBNrt8arxkeFgDeqOxMZQ0YiNR_eLWe-Uv_xa7MV2IkyQvlWheFUScqn4a_7MCU4sGQ-Q=s900-c-k-c0x00ffffff-no-rj",
      type: i.image ? "image" : "video",
      content: ({ action, isPaused }) => {
        return (
          <div className="img-wrapper" key={idx}>
            {i.media && (
              <img src={i.media} className="img-wrapper-img" alt="" />
            )}
            <div className="info-wrapper">
              <h4 className="info-wrapper-title">{i?.title || ""}</h4>
              <p className="info-wrapper-des">{i?.description || ""}</p>
              {i?.url && (
                <Link href={i.url} className="info-wrapper-link" target="_blank">
                  Habere gitmek için tıklayın
                </Link>
              )}
            </div>
          </div>
        );
      },
    };
  });

  const storyContent = {
    //maxWidth: "1200px",
    width: "100%",
    height: "100% !important",
    margin: "auto",
    padding: "0px",
    backgroundImage:
      "linear-gradient(to right,rgba(9,89,133,100) ,rgba(120,170,198,100))",
  };

  const story = {
    width: "50%",
    height: "100% !important",
    margin: "0 auto",
    padding: "0",
    alignSelf: "center",
  };

  return (
    <>
      {formatted.length > 0 && (
        <Stories
          stories={formatted}
          defaultInterval={2500}
          width="100%"
          height="100%"
          loop={true}
          isPaused={true}
          keyboardNavigation={true}
          storyContainerStyles={storyContent}
          storyStyles={story}
          storyContent={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )}
    </>
  );
};

export default StoryPage;

// function getDataFromType(type, hasError) {

// }
