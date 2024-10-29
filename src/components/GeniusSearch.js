import React, {
  Component
} from "react";
// import Container from "./Container";
import SearchForm from "./Search";
import API from "../utils/Api.js";
import LyricCloud from "./WordCloud";

class GeniusSearch extends Component {
  state = {
    lyrics: {},
    artist: "",
    title: "",
    words: [],
    wordMap: []
  }

  stopwords = new Set("i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall".split(","));

  
  componentDidMount() {
    this.searchSongs("Taylor Swift", "22");
  };

  searchSongs = (artist, title) => {
    API.search(artist, title)
      .then(res => {
        this.setState({
        lyrics: res.data.lyrics
      })
    })
      .then(() => {
        this.createWordsArray()
        console.log(this.state.words)
        
      })
      .then(() => {
        this.createWordMap(this.state.words, this.state.wordMap);
        console.log(this.state.wordMap);
      })
      .catch(err => console.log(err));
  };

  createWordsArray = () => {
    if(this.state.lyrics) {
    let words = this.state.lyrics.split(/[\s.]+/g)
    .map(w => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
    .map(w => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
    .map(w => w.replace(/['’]s$/g, ""))
    .map(w => w.substring(0, 30))
    .map(w => w.toLowerCase())
    .filter(w => w && !this.stopwords.has(w));
    this.setState({words});
    }
  }

  createWordMap = (words, wordMap) => {
    for (const word of words) {
      if (word in wordMap) {
        wordMap[word]++
      } else {
        wordMap[word] = 1
      }
    }
    this.setState({wordMap});
    }

    fontSizeMapper = word => Math.log2(word.value) * 5;
    rotate = word => word.value % 360;

  handleInputChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.searchSongs(this.state.artist, this.state.title);
    this.setState({
      artist: "",
      title: ""
    })
  }

  render() {  
    return (
      <React.Fragment>

        <SearchForm
        artist={this.state.artist}
        title={this.state.title}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        />
      <div>

      <LyricCloud 
        data={this.state.wordMap}
        fontSizeMapper={this.fontSizeMapper}
        rotate={this.rotate}
      />
      </div>
      
     
      

      </React.Fragment>
    )
  }
}

export default GeniusSearch;