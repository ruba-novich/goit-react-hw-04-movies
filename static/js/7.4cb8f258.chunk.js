(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{75:function(t,e,c){t.exports={ActorList:"Cast_ActorList__1iYq1",ActorItem:"Cast_ActorItem__2wm9p",ActorImg:"Cast_ActorImg__1vsUj"}},80:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return d}));var a=c(37),r=c.n(a),n=c(38),s=c(15),i=c(16),o=c(18),u=c(17),h=c(0),p=c(43),m=c(75),j=c.n(m),l=c(1),d=function(t){Object(o.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(s.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={cast:[]},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=Object(n.a)(r.a.mark((function t(){var e,c,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,c="".concat(e,"/credits"),t.next=4,Object(p.a)(c);case 4:a=t.sent,this.setState({cast:a.data.cast});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.cast;return Object(l.jsx)("ul",{className:j.a.ActorList,children:t.map((function(t){var e=t.id,c=t.profile_path,a=t.name,r=t.character;return Object(l.jsxs)("li",{className:j.a.ActorItem,children:[Object(l.jsx)("div",{children:c?Object(l.jsx)("img",{className:j.a.ActorImg,src:"https://image.tmdb.org/t/p/w200".concat(c),alt:a}):Object(l.jsx)("p",{children:"No img"})}),Object(l.jsx)("h2",{children:a}),Object(l.jsxs)("p",{children:["Character: ",r]})]},e)}))})}}]),c}(h.Component)}}]);
//# sourceMappingURL=7.4cb8f258.chunk.js.map