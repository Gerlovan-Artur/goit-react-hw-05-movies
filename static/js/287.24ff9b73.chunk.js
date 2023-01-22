"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[287],{491:function(n,t,e){e.d(t,{Y:function(){return x},H:function(){return m}});var r,c,a,o,i=e(168),u=e(934),s=e(87),p=u.Z.img(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: auto;\n"]))),f=u.Z.div(c||(c=(0,i.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);\n  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),d=u.Z.p(a||(a=(0,i.Z)(["\n  height: 30px;\n  font-weight: 200;\n  padding: 10px 10px 5px;\n  display: flex;\n  align-items: center;\n"]))),h=(0,u.Z)(s.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: black;\n"]))),l=e(184),x="https://image.tmdb.org/t/p/w500";function m(n){var t=n.movie,e=t.poster_path,r=t.title,c=t.name,a=t.id,o=t.vote_average,i=n.location;return(0,l.jsx)("li",{children:(0,l.jsx)(h,{to:"/movies/".concat(a),state:{from:i},children:(0,l.jsxs)(f,{children:[(0,l.jsx)(p,{src:e?"".concat(x)+e:"https://static7.depositphotos.com/1021974/739/i/950/depositphotos_7397821-stock-photo-cinema.jpg",alt:r||c}),(0,l.jsx)(d,{style:{fontSize:"20px"},children:r||c}),(0,l.jsxs)(d,{children:["Rate: ",o.toFixed(1)," / 10"]})]})})})}},47:function(n,t,e){e.d(t,{e:function(){return s}});var r,c=e(689),a=e(491),o=e(168),i=e(934).Z.ul(r||(r=(0,o.Z)(["\n    text-decoration: none;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-gap: 30px;\n    margin: 30px auto;\n"]))),u=e(184);function s(n){var t=n.movies,e=(0,c.TH)();return(0,u.jsx)(i,{children:t.map((function(n){return(0,u.jsx)(a.H,{movie:n,location:e},n.id)}))})}},529:function(n,t,e){e.d(t,{Df:function(){return f},TP:function(){return x},UN:function(){return h},Wd:function(){return v},tx:function(){return Z}});var r=e(861),c=e(687),a=e.n(c),o=e(263),i="d94f1660bc08f9c6e6ef31fbeee3057f",u="https://api.themoviedb.org/3/",s="trending/movie/day",p="search/movie";function f(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(s,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(p,"?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},287:function(n,t,e){e.r(t),e.d(t,{Home:function(){return f},default:function(){return d}});var r,c=e(439),a=e(168),o=e(934).Z.h1(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n"]))),i=e(791),u=e(47),s=e(529),p=e(184),f=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(null),f=(0,c.Z)(a,2),d=f[0],h=f[1];return(0,i.useEffect)((function(){(0,s.Df)().then((function(n){return r(n.data.results)})).catch((function(n){return h(n.message)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{children:"Trending today"}),d&&"Something wrong, reload the page",(0,p.jsx)(u.e,{movies:e})]})},d=f}}]);
//# sourceMappingURL=287.24ff9b73.chunk.js.map