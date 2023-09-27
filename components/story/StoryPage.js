import React from 'react';
import Stories from 'react-insta-stories';

const StoryPage = ({stories}) => {

const onAllStoriesEndHandler = () =>{
    console.log('stories ended')
};

const storyContent = {
    width: '100%',
    maxWidth: '1200px',
    height: '100%',
    margin: 'auto',  
    // border: "1px solid blue", 
};

console.log(stories)

const formatted = stories.map(i=>{
  return {url:i.media, type: i.image ? "image" : "video"}
});

  return (
    <React.Fragment>
        <Stories 
          stories={formatted}
          defaultInterval={1500}
          width='100%'
          height="100%"
          storyStyles={storyContent}         
          loop={true}
          keyboardNavigation={true}
          currentIndex={()=>{}}
          onAllStoriesEnd={onAllStoriesEndHandler}
          /> 
    </React.Fragment>
  )
}

export default StoryPage;