"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{733:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return w},default:function(){return b}});var r,a,c,u,o=e(439),i=e(791),s=e(529),p=e(689),f=e(168),d=e(934),h=d.Z.li(r||(r=(0,f.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);\n"]))),l=d.Z.img(a||(a=(0,f.Z)(["\n  width: 100%;\n"]))),x=d.Z.p(c||(c=(0,f.Z)(["\n  font-weight: 200;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n"]))),m=e(184);function g(n){var t=n.actor,e=t.profile_path,r=t.name,a=t.character;return(0,m.jsx)(m.Fragment,{children:e&&(0,m.jsxs)(h,{children:[(0,m.jsx)(l,{src:"".concat("https://image.tmdb.org/t/p/w500")+e,alt:r}),(0,m.jsx)(x,{style:{fontSize:"20px"},children:r}),(0,m.jsxs)(x,{children:["Character: ",a]})]})})}var v=d.Z.ul(u||(u=(0,f.Z)(["\n  padding: 30px 0;\n  text-decoration: none;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  grid-gap: 20px;\n  border-bottom: 1px solid black;\n  border-image: 1px solid black;\n"]))),w=function(){var n=(0,i.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId,c=(0,i.useState)(null),u=(0,o.Z)(c,2),f=u[0],d=u[1];return(0,i.useEffect)((function(){(0,s.Wd)(Number(a)).then((function(n){return r(n.data.cast)})).catch((function(n){return d(n.message)}))}),[a]),(0,m.jsxs)(m.Fragment,{children:[f&&"Something wrong, reload the page...",(0,m.jsx)(v,{children:e.map((function(n){return(0,m.jsx)(g,{actor:n},n.id)}))})]})},b=w},529:function(n,t,e){e.d(t,{Df:function(){return f},TP:function(){return x},UN:function(){return h},Wd:function(){return g},tx:function(){return w}});var r=e(861),a=e(687),c=e.n(a),u=e(263),o="d94f1660bc08f9c6e6ef31fbeee3057f",i="https://api.themoviedb.org/3/",s="trending/movie/day",p="search/movie";function f(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i).concat(s,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i).concat(p,"?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=733.95a10041.chunk.js.map