import React from "react";
import WordCloud from "react-d3-cloud";


function LyricCloud(props) {

  return (
  <WordCloud
      data={props.data}
      fontSizeMapper={props.fontSizeMapper}
      rotate={props.rotate}
      /> 
  )
}

export default LyricCloud;