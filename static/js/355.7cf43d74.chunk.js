"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[355],{687:function(e,t,n){n.d(t,{Df:function(){return i},ZF:function(){return f},tx:function(){return l},zv:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="650ee73e57e26be696a7074fb8f61e89",o="https://api.themoviedb.org/3",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(i());var f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,u.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(f("Dune"));var p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(p("438631"));var v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(v("438631"));var l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(l("438631"))},355:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(791),o=n(460),i=n(687),f="MovieReviews_container__WSgYJ",p="MovieReviews_list__OWmvA",v="MovieReviews_item__zss4K",l="MovieReviews_author__kSBQA",h="MovieReviews_text__Z+nWE",_=n(184),d=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),c=n[0],d=n[1];return(0,s.useEffect)((function(){if(e){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.tx)(e);case 2:n=t.sent,d(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),(0,_.jsx)("div",{className:f,children:c.length?(0,_.jsx)("ul",{className:p,children:c.map((function(e){return(0,_.jsxs)("li",{className:v,children:[(0,_.jsxs)("p",{className:l,children:["Author: ",e.author]}),(0,_.jsx)("p",{className:h,children:e.content})]},e.id)}))}):"We don`t have any reviews for this movie"})}}}]);
//# sourceMappingURL=355.7cf43d74.chunk.js.map