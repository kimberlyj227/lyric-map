import React, { useContext } from 'react';
// import * as cloud from "d3-cloud";
import WordCloud from 'react-d3-cloud';
import SearchContext from '../utils/SearchContext';

function LyricCloud() {
	const { lyricMap } = useContext(SearchContext);
	const fontSizeMapper = (word) => word.value * 10;
	const rotate = (word) => (Math.random() * 6 - 3) * 10;

	return (
		<WordCloud
			data={lyricMap}
			fontSize={(word) => word.value * 10}
			font={'Roboto'}
			color={'#000000'}
			width={800}
			height={500}
			// rotate={rotate}
			spiral='rectangular'
			rotate={(word) => rotate(word)}
			padding={5}
			random={Math.random}
		/>
	);
}

export default LyricCloud;
