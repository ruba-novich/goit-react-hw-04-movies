(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{40:function(e,t,i){e.exports={MovieListTitle:"MoviePreview_MovieListTitle__102v1",MovieListImg:"MoviePreview_MovieListImg__3HFqA"}},41:function(e,t,i){e.exports={MovieItem:"MoviesList_MovieItem__DgovZ",MovieListItem:"MoviesList_MovieListItem__1M-eb",MovieList:"MoviesList_MovieList__1EKL3"}},42:function(e,t,i){e.exports={MovieDetails:"Movies_MovieDetails__3-Ech",MoviePageBlock:"Movies_MoviePageBlock__MjmZ2",MoviePageImg:"Movies_MoviePageImg__3Y5c8",MoviePageImgBlock:"Movies_MoviePageImgBlock__3oE_Z",MoviePageNoimg:"Movies_MoviePageNoimg__2pjef",MoviePageMenu:"Movies_MoviePageMenu__63XjI",MovieTitle:"Movies_MovieTitle__76jlj",DetailsItem:"Movies_DetailsItem__2NitM",Details:"Movies_Details__61fto"}},44:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));i(0);var o=i(9),s=i(2),a=i(40),n=i.n(a),c=i(1),v=function(e){var t=e.movie;return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:n.a.MovieListImg,src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:t.original_title}),Object(c.jsx)("p",{className:n.a.MovieListTitle,children:t.title})]})},r=i(41),M=i.n(r),l=Object(s.g)((function(e){var t=e.movies,i=e.match,s=e.location,a=i.url.includes("movies")?"":"movies";return Object(c.jsx)("ul",{className:M.a.MovieList,children:t.map((function(e){return Object(c.jsx)("li",{className:M.a.MovieItem,children:Object(c.jsx)(o.b,{className:M.a.MovieListItem,to:{pathname:"".concat(i.url).concat(a,"/").concat(e.id),state:{from:s}},children:Object(c.jsx)(v,{movie:e})})},e.id)}))})}))},76:function(e,t,i){"use strict";i.r(t);var o=i(37),s=i.n(o),a=i(38),n=i(15),c=i(16),v=i(18),r=i(17),M=i(39),l=i.n(M),m=i(0),_=i(44),u=i(42),f=i.n(u),g=i(1),j=function(e){Object(v.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(n.a)(this,i);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={movies:[]},e}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"4f82ed1427d5ffdf5673256bc4f7ef74",e.next=3,l.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("4f82ed1427d5ffdf5673256bc4f7ef74"));case 3:t=e.sent,this.setState({movies:t.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return Object(g.jsx)("ul",{className:f.a.MovieList,children:Object(g.jsx)(_.a,{movies:e})})}}]),i}(m.Component);t.default=j}}]);
//# sourceMappingURL=4.e6c14e9b.chunk.js.map