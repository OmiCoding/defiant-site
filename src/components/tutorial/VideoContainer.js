import React from "react"

import {
  VideoWrapper,
  Video,
  VideoDimensions,
} from "../../../styles/tutorial/TutorialStyles"

import defiantVid from "../../../assets/defiant-video.mp4"

function VideoContainer() {
  return (
    <VideoWrapper>
      <VideoDimensions>
        <Video controls>
          <source src={defiantVid} type="video/mp4" />
        </Video>
      </VideoDimensions>
    </VideoWrapper>
  )
}

export default VideoContainer
