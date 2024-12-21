import React, { useState, useEffect } from 'react';
import API from '../utils/Api.js';
import SearchForm from './Search';
import SearchContext from '../utils/SearchContext.js';
import LyricCloud from '../components/WordCloud';

function LyricSearch() {
	const [songState, setSongState] = useState({
		artist: '',
		title: '',
		lyricMap: []
	});

	const [initState, setInitState] = useState(true);

	const { artist, title, lyricMap } = songState;

	const stopWords = new Set(
		"i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall,chorus,x,2x,3x,x2,x4,x3,x5,1,2,3,4,5".split(
			','
		)
	);

	const searchSongs = (a, t) => {
		API.search(a, t)
			.then((res) => {
				const l = res.data.lyrics;
				createLyricMap(l);
			})
			.catch((err) => {
				setInitState(false);
				setSongState({ artist: '', title: '', lyricMap: [] });
				console.log(err);
			});
	};

	const createLyricMap = (words) => {
		// splits lyrics and replaces punctuation and filters unwanted words
		let data = words
			.split(/[\s.]+/g)
			.map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ''))
			.map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ''))
			.map((w) => w.replace(/['’]s$/g, ''))
			.map((w) => w.substring(0, 30))
			.map((w) => w.toLowerCase())
			.filter((w) => w && !stopWords.has(w));

		const countObj = data.reduce((counts, word) => {
			let match = counts.find((count) => count.text === word);
			if (match) {
				match.value++;
			} else {
				counts = [...counts, { text: word, value: 1 }];
			}
			return counts;
		}, []);

		setSongState({ ...songState, lyricMap: countObj });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSongState({ ...songState, [name]: value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		searchSongs(artist, title);
		// setSongState({...songState, artist: "", title: ""})
	};

	const handleReset = () => {
		setInitState(true);
		setSongState({ artist: '', title: '', lyricMap: [] });
	};

	const render =
		lyricMap.length > 0 || initState ? (
			<LyricCloud />
		) : (
			<h2 className='mt-3'>No lyrics found!</h2>
		);

	return (
		<div className='mt-5 mb-3'>
			{initState && (
				<SearchForm
					artist={artist}
					title={title}
					handleFormSubmit={handleFormSubmit}
					handleInputChange={handleInputChange}
					handleReset={handleReset}
				/>
			)}

			<SearchContext.Provider value={{ lyricMap, handleFormSubmit, handleInputChange }}>
				{render}
			</SearchContext.Provider>
		</div>
	);
}

export default LyricSearch;
