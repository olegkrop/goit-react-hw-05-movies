"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[913],{687:function(t,e,r){r.d(e,{Df:function(){return i},TP:function(){return f},ZF:function(){return p},tx:function(){return v},zv:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(243),o="650ee73e57e26be696a7074fb8f61e89",s="https://api.themoviedb.org/3",i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();console.log(i());var p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,u.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e));case 4:return r=t.sent,t.abrupt("return",r.data.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log(p("Dune"));var f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,u.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log(f("438631"));var l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 4:return r=t.sent,t.abrupt("return",r.data.cast);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log(l("438631"));var v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 4:return r=t.sent,t.abrupt("return",r.data.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log(v("438631"))},913:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),s=r(689),i=r(687),p="MovieCast_container__+aUR4",f="MovieCast_list__ZRqM9",l="MovieCast_item__hB21P",v="MovieCast_actor__image__IEnDC",_="MovieCast_actor__text__oVdbK",h="MovieCast_character__text__dbmWZ",m=r(184),d=function(){var t=(0,s.UO)().movieId,e=(0,o.useState)([]),r=(0,a.Z)(e,2),c=r[0],d=r[1];return(0,o.useEffect)((function(){if(t){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.zv)(t);case 2:r=e.sent,d(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[t]),(0,m.jsx)("div",{className:p,children:(0,m.jsx)("ul",{className:f,children:c.map((function(t){var e=t.profile_path?"http://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg";return(0,m.jsxs)("li",{className:l,children:[(0,m.jsx)("img",{src:e,alt:t.name,className:v}),(0,m.jsx)("p",{className:_,children:t.name}),(0,m.jsxs)("p",{className:h,children:["Character: ",t.character]})]},t.id)}))})})}}}]);
//# sourceMappingURL=913.d9ff47ac.chunk.js.map