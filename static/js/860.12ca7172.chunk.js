"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[860],{687:function(n,e,r){r.d(e,{Df:function(){return o},tx:function(){return v},zv:function(){return l}});var t=r(861),a=r(757),c=r.n(a),u=r(243),s="650ee73e57e26be696a7074fb8f61e89",i="https://api.themoviedb.org/3",o=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();console.log(o());var f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",[]);case 2:return n.next=4,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();console.log(f("Dune"));var p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",null);case 2:return n.next=4,u.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(s));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();console.log(p("438631"));var l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",null);case 2:return n.next=4,u.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s));case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();console.log(l("438631"));var v=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",null);case 2:return n.next=4,u.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();console.log(v("438631"))},860:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t=r(861),a=r(152),c=r(757),u=r.n(c),s=r(791),i=r(687),o="TrendingMovies_container__Vakis",f="TrendingMovies_title__-nJit",p="TrendingMovies_list__RbZcl",l="TrendingMovies_item__oTryW",v=r(184),d=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),r=e[0],c=e[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Df)();case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("h1",{className:f,children:"Trending today"}),(0,v.jsx)("ul",{className:p,children:r.map((function(n){return(0,v.jsx)("li",{className:l,children:n.title},n.id)}))})]})}}}]);
//# sourceMappingURL=860.12ca7172.chunk.js.map