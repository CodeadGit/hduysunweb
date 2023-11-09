import React from "react";
import Stories from "react-insta-stories";
import "./story.scss";
import Link from "next/link";

const StoryPage = ({ stories }) => {
  const formatted = stories?.map((i) => {
    return {
      url:
        i?.media ||
        "https://yt3.googleusercontent.com/Sz83qeBNrt8arxkeFgDeqOxMZQ0YiNR_eLWe-Uv_xa7MV2IkyQvlWheFUScqn4a_7MCU4sGQ-Q=s900-c-k-c0x00ffffff-no-rj",
      type: i.image ? "image" : "video",
      content: ({ action, isPaused }) => {
        return (
          <div className="img-wrapper">
            <img
              src={i?.media}
              style={{
                width: "100%",
                height: "100% !important",
                margin: "0 auto",
                padding: "0",
                alignSelf: "center",
                zIndex: 1,
                position: "relative",
                aspectRatio: 9 / 16,
                objectFit: "contain",
              }}
            />
            <div
              style={{
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "absolute",
                width: "100%",
                top: "60%",
                gap: "1rem",
                height: "10%",
              }}
            >
              <h4
                style={{
                  zIndex: 1000,
                  position: "absolute",
                  width: "100%",
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                {i?.title}
              </h4>
              <p
                style={{
                  zIndex: 1000,
                  width: "100%",
                  whiteSpace: "wrap",
                  color: "white",
                  marginTop: "2.5rem",
                  //top:"20%"
                }}
              >
                {i?.description}
              </p>

              {i?.isNews && (
                <Link
                  href={i.url}
                  style={{
                    zIndex: 1000,
                    color: "white",
                    position: "absolute",
                    marginTop: "4rem",
                    //top:"30%"
                    //  bottom: "3.5rem",
                  }}
                >
                  Link BURADA
                </Link>
              )}
            </div>
          </div>
        );
      },
    };
  });

  console.log(stories);

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
    alignSelf: "center"
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
            justifyContent: "center"
          }}
        />
      )}
    </>
  );
};

export default StoryPage;
