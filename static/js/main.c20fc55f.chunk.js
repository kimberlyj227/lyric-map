(this["webpackJsonplyric-map"]=this["webpackJsonplyric-map"]||[]).push([[0],{33:function(e,t,n){e.exports=n(89)},38:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),l=n.n(o);n(38),n(39);var c=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"LYRIC CLOUD"),r.a.createElement("p",null,"Search for a song to get your lyric cloud"),r.a.createElement("hr",{className:"my-4"})))};var i=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},s=n(9),u=n(30),h=n(7),m=n(14),d=n(28),f=n.n(d),v=function(e,t){return f.a.get("".concat("https://api.lyrics.ovh/v1/","/").concat(e,"/").concat(t))},p=n(92);n(57);var w=function(e){return r.a.createElement("form",{onSubmit:e.handleFormSubmit},r.a.createElement("div",{className:"form-row justify-content-md-center"},r.a.createElement("div",{className:"form-group col-md-4 "},r.a.createElement("input",{onChange:e.handleInputChange,value:e.artist,name:"artist",type:"text",className:"form-control",placeholder:"Enter Artist Name",id:"artist"})),r.a.createElement("div",{className:"form-group col-md-4 "},r.a.createElement("input",{onChange:e.handleInputChange,value:e.title,name:"title",type:"text",className:"form-control",placeholder:"Enter Song Title",id:"title"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("button",{type:"submit",className:"btn border-0 text-white search"},r.a.createElement(p.a,null)," Search"))))},y=Object(a.createContext)({lyricMap:[]}),b=n(29),g=n.n(b);var E=function(){var e=Object(a.useContext)(y).lyricMap;return r.a.createElement(g.a,{data:e,fontSizeMapper:function(e){return 15*Math.log2(e.value)},font:"Roboto",color:"#000000",width:1e3,height:800})};var j=function(){var e=Object(a.useState)({artist:"",title:"",lyricMap:[]}),t=Object(m.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(!0),c=Object(m.a)(l,2),i=c[0],d=c[1],f=n.artist,p=n.title,b=n.lyricMap,g=new Set("i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall, chorus, 2x, 3x".split(",")),j=function(e){var t=e.split(/[\s.]+/g).map((function(e){return e.replace(/^[\u201c\u2018"\-\u2014()[\]{}]+/g,"")})).map((function(e){return e.replace(/[;:.!?()[\]{},"'\u2019\u201d\-\u2014]+$/g,"")})).map((function(e){return e.replace(/['\u2019]s$/g,"")})).map((function(e){return e.substring(0,30)})).map((function(e){return e.toLowerCase()})).filter((function(e){return e&&!g.has(e)}));console.log(t);var a=t.reduce((function(e,t){var n=e.find((function(e){return e.text===t}));return n?n.value++:e=[].concat(Object(u.a)(e),[{text:t,value:5}]),e}),[]);console.log(a),o(Object(h.a)({},n,{lyricMap:a}))},O=function(e){var t=e.target,a=t.name,r=t.value;o(Object(h.a)({},n,Object(s.a)({},a,r)))},N=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value;o(Object(h.a)({},n,Object(s.a)({},a,r))),v(f,p).then((function(e){var t=e.data.lyrics;console.log(t),j(t)})).catch((function(e){d(!1),o(Object(h.a)({},n,{lyricMap:[]})),console.log(e)})),o(Object(h.a)({},n,{artist:"",title:""}))},C=b.length>0||i?r.a.createElement(E,null):r.a.createElement("h2",null,"No lyrics found!");return r.a.createElement("div",null,r.a.createElement(w,{artist:f,title:p,handleFormSubmit:N,handleInputChange:O}),r.a.createElement(y.Provider,{value:{lyricMap:b,handleFormSubmit:N,handleInputChange:O}},C))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null),r.a.createElement(i,null,r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(85);l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c20fc55f.chunk.js.map