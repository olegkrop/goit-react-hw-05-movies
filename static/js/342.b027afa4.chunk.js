"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[342],{687:function(e,r,t){t.d(r,{Df:function(){return s},ZF:function(){return f},tx:function(){return v},zv:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(243),o="650ee73e57e26be696a7074fb8f61e89",i="https://api.themoviedb.org/3",s=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(s());var f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(r));case 4:return t=e.sent,e.abrupt("return",t.data.results);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();console.log(f("Dune"));var l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,u.Z.get("".concat(i,"/movie/").concat(r,"?api_key=").concat(o));case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();console.log(l("438631"));var p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,u.Z.get("".concat(i,"/movie/").concat(r,"/credits?api_key=").concat(o));case 4:return t=e.sent,e.abrupt("return",t.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();console.log(p("438631"));var v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,u.Z.get("".concat(i,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 4:return t=e.sent,e.abrupt("return",t.data.results);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();console.log(v("438631"))},342:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(861),a=t(885),c=t(757),u=t.n(c),o=t(791),i=t(192);var s=t(460);function f(e){return void 0===e&&(e=""),new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((function(r,t){var n=e[t];return r.concat(Array.isArray(n)?n.map((function(e){return[t,e]})):[[t,n]])}),[]))}function l(e,r){var t=f(e);if(r){var n,a=function(e,r){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,i.Z)(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){o=!0,c=e},f:function(){try{u||null==t.return||t.return()}finally{if(o)throw c}}}}(r.keys());try{var c=function(){var e=n.value;t.has(e)||r.getAll(e).forEach((function(r){t.append(e,r)}))};for(a.s();!(n=a.n()).done;)c()}catch(u){a.e(u)}finally{a.f()}}return t}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var p,v;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(p||(p={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(v||(v={}));var h=t(687),m={form:"SearchMovies_form__Aa9iv",container:"SearchMovies_container__+9bis",button:"SearchMovies_button__tDOhz",list:"SearchMovies_list__S8euj"},d=t(184),y=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],i=function(e){var r=o.useRef(f(e)),t=o.useRef(!1),n=(0,s.TH)(),a=o.useMemo((function(){return l(n.search,t.current?null:r.current)}),[n.search]),c=(0,s.s0)(),u=o.useCallback((function(e,r){var n=f("function"===typeof e?e(a):e);t.current=!0,c("?"+n,r)}),[c,a]);return[a,u]}(),p=(0,a.Z)(i,2),v=p[0],y=p[1],b=v.get("query");(0,o.useEffect)((function(){if(b){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.ZF)(b);case 2:r=e.sent,c(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[b]);var _=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),t=r.currentTarget,y({query:t.elements.searchMovie.value}),t.reset();case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:m.container,children:[(0,d.jsxs)("form",{className:m.form,onSubmit:_,children:[(0,d.jsx)("input",{className:"SearchForm__input",name:"searchMovie",type:"text",autoComplete:"off",autoFocus:!0,placeholder:b||"Search movies"}),(0,d.jsx)("button",{type:"submit",className:m.button,children:"Search"})]}),(0,d.jsx)("ul",{className:m.list,children:t.map((function(e){return(0,d.jsxs)("li",{className:m.trendingMovies__item,children:["to=","".concat(e.id),"className=",m.trendingMovies__name,e.title]},e.id)}))})]})}}}]);
//# sourceMappingURL=342.b027afa4.chunk.js.map