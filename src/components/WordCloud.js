import React, { useContext } from "react";
// import * as cloud from "d3-cloud";
import WordCloud from "react-d3-cloud";
import SearchContext from "../utils/SearchContext";


function LyricCloud() {
const {lyricMap} = useContext(SearchContext);
const fontSizeMapper = word => Math.log2(word.value) * 15;
const rotate = word => ((Math.random() *6 )-3) * 10

// let data = [
//   {text: "bob", value: 2},
//   {text:"kittens", value: 10},
//   {text: "hello", value: 9},
//   {text: "mittens", value: 40},
//   {text: "shittens", value: 100},
//   {text: "mountains", value: 50},
//   {text: "seattle", value: 10},
// ]
  
  return (
  <WordCloud
      data={lyricMap}
      fontSizeMapper={fontSizeMapper}
      font={"Roboto"}
      color={"#000000"}
      width={1000}
      height={800}
      // rotate={rotate}
      /> 
  )
}

export default LyricCloud;