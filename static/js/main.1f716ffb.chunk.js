(this.webpackJsonpyotw=this.webpackJsonpyotw||[]).push([[0],{61:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(30),o=n.n(r),c=n(3),s=n(5),l=n.n(s),d=n(8),u=n(4),p=n(13),m=n.n(p),h=n(34),x=function(){var e=(new Date).toGMTString(),t=new h.a("SHA-1","TEXT");return t.setHMACKey("zvSZkHtUt4JieFWkdnOyW4iGtt4","TEXT"),t.update("x-date: "+e),{Authorization:'hmac username="79b1459ffeca4aabadd35e191c8fed59", algorithm="hmac-sha1", headers="x-date", signature="'+t.getHMAC("B64")+'"',"X-Date":e}},f=m.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",headers:x()}),b=m.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel",headers:x()}),g=m.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity",headers:x()}),v=m.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant",headers:x()}),j=function(e){return f.get(e?"?".concat(e):"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return f.get("/".concat(e,"?").concat(t))},y=function(e){return b.get(e?"?".concat(e):"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return b.get("/".concat(e,"?").concat(t))},C=function(e){return g.get(e?"?".concat(e):"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return g.get("/".concat(e,"?").concat(t))},A=function(e){return v.get(e?"?".concat(e):"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return v.get("/".concat(e,"?").concat(t))},_={"\u5168\u53f0":"","\u81fa\u5317\u5e02":"Taipei","\u65b0\u5317\u5e02":"NewTaipei","\u6843\u5712\u5e02":"Taoyuan","\u81fa\u4e2d\u5e02":"Taichung","\u81fa\u5357\u5e02":"Tainan","\u9ad8\u96c4\u5e02":"Kaohsiung","\u57fa\u9686\u5e02":"Keelung","\u65b0\u7af9\u5e02":"Hsinchu","\u65b0\u7af9\u7e23":"HsinchuCounty","\u82d7\u6817\u7e23":"MiaoliCounty","\u5f70\u5316\u7e23":"ChanghuaCounty","\u5357\u6295\u7e23":"NantouCounty","\u96f2\u6797\u7e23":"YunlinCounty","\u5609\u7fa9\u7e23":"ChiayiCounty","\u5609\u7fa9\u5e02":"Chiayi","\u5c4f\u6771\u7e23":"PingtungCounty","\u5b9c\u862d\u7e23":"YilanCounty","\u82b1\u84ee\u7e23":"HualienCounty","\u81fa\u6771\u7e23":"TaitungCounty","\u91d1\u9580\u7e23":"KinmenCounty","\u6f8e\u6e56\u7e23":"PenghuCounty","\u9023\u6c5f\u7e23":"LienchiangCounty"},F=["\u5168\u90e8\u5730\u5340","\u5317\u90e8","\u4e2d\u90e8","\u5357\u90e8","\u6771\u90e8","\u96e2\u5cf6"],k={"\u5168\u90e8\u5730\u5340":[],"\u5317\u90e8":["\u5168\u90e8","\u81fa\u5317\u5e02","\u65b0\u5317\u5e02","\u57fa\u9686\u5e02","\u65b0\u7af9\u5e02","\u6843\u5712\u5e02","\u65b0\u7af9\u7e23","\u5b9c\u862d\u7e23"],"\u4e2d\u90e8":["\u5168\u90e8","\u81fa\u4e2d\u5e02","\u82d7\u6817\u7e23","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u96f2\u6797\u7e23"],"\u5357\u90e8":["\u5168\u90e8","\u9ad8\u96c4\u5e02","\u81fa\u5357\u5e02","\u5609\u7fa9\u5e02","\u5609\u7fa9\u7e23","\u5c4f\u6771\u7e23","\u6f8e\u6e56\u7e23"],"\u6771\u90e8":["\u5168\u90e8","\u82b1\u84ee\u7e23","\u81fa\u6771\u7e23"],"\u96e2\u5cf6":["\u5168\u90e8","\u91d1\u9580\u7e23","\u9023\u6c5f\u7e23"]},S=30,P=n(19);function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),r=Object(i.useState)(!0),o=Object(u.a)(r,2),c=o[0],s=o[1],p=Object(i.useState)(!1),m=Object(u.a)(p,2),h=m[0],x=m[1],f=Object(i.useState)([]),b=Object(u.a)(f,2),g=b[0],v=b[1],j=Object(i.useState)(!1),w=Object(u.a)(j,2),y=w[0],O=w[1];return Object(i.useEffect)((function(){v([])}),[e,t]),Object(i.useEffect)((function(){s(!0),x(!1);var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(n);case 3:t=e.sent,v((function(e){return[].concat(Object(P.a)(e),Object(P.a)(t.data))})),O(t.data.length===S),s(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),t=setTimeout((function(){e()}),500);return function(){clearTimeout(t)}}),[e,t,n]),{loading:c,error:h,data:g,hasMore:y}}var T,q=n(2),z=q.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1dkhwe8-0"})(["display:flex;flex-direction:column;align-items:center;"]),D=(q.b.div.withConfig({displayName:"styles__HeaderCont",componentId:"sc-1dkhwe8-1"})(["position:relative;"]),q.b.img.withConfig({displayName:"styles__HeaderBackgroundImg",componentId:"sc-1dkhwe8-2"})(["width:100vw;height:80vh;object-fit:cover;"]),q.b.h1.withConfig({displayName:"styles__Title",componentId:"sc-1dkhwe8-3"})(["position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);font-size:3rem;letter-spacing:0.6px;color:#FFFFFF;text-shadow:-3px 4px 4px #0D3457;&::after{content:' GO';color:#FFD965;}"]),q.b.input.withConfig({displayName:"styles__Searchbar",componentId:"sc-1dkhwe8-4"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:white;box-shadow:inset -2px 1px 0px #00000015,-3px 3px 7px #0A4F8B;border-radius:8px;letter-spacing:0.4px;color:rgba(87,87,87,0.4);text-align:center;padding:7px 0;width:30vw;font-size:1rem;&::placeholder{color:rgba(87,87,87,0.4);}@media (max-width:992px){width:40vw;}@media (max-width:768px){width:50vw;}@media (max-width:600px){width:60vw;}"]),q.b.div.withConfig({displayName:"styles__FilterCont",componentId:"sc-1dkhwe8-5"})(["display:flex;padding:10px;justify-content:center;background-color:#B2E4FF;"]),q.b.div.withConfig({displayName:"styles__FilterBtnCont",componentId:"sc-1dkhwe8-6"})(["position:absolute;top:70%;left:50%;transform:translate(-50%,0);display:grid;grid-template-columns:repeat(auto-fit,5em);grid-gap:10px;width:80%;justify-content:center;"]),q.b.div.withConfig({displayName:"styles__GridCont",componentId:"sc-1dkhwe8-7"})(["display:grid;grid-template-columns:repeat(4,minmax(5rem,1fr));margin:3% 0px;grid-gap:27px;padding-bottom:5%;max-width:1440px;@media (max-width:1512px){padding:0 3% 5%;}@media (max-width:1200px){grid-template-columns:repeat(3,minmax(5rem,1fr));}@media (max-width:768px){grid-template-columns:repeat(2,minmax(5rem,1fr));}@media (max-width:600px){grid-template-columns:repeat(1,minmax(5rem,1fr));}"])),B=n.p+"static/media/taipei-banner.239b84d2.png",E=n(0),M=function(){var e=Object(i.useState)("\u5168\u53f0"),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("\u5168\u90e8\u5730\u5340"),o=Object(u.a)(r,2),c=o[0],s=o[1],p=Object(i.useState)(""),m=Object(u.a)(p,2),h=m[0],x=m[1],f=Object(i.useState)(1),b=Object(u.a)(f,2),g=b[0],v=b[1],y=function(){var e="";return"\u5168\u90e8\u5730\u5340"!==c&&"\u5168\u53f0"===n?(e+=0!==h.length?" and contains(NAME,'".concat(h,"') and ("):" and (",k[c].slice(1).map((function(t,n){e+=(0!==n?" or ":"")+"contains(City,'".concat(t,"')")})),e+=")"):e+=0!==h.length?" and contains(NAME,'".concat(h,"')"):"",e},O=function(){var e=Object(d.a)(l.a.mark((function e(t){var i,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],a=y(),r=new URLSearchParams([["$top",S],["$filter","Picture/PictureUrl1 ne null".concat(a)],["$skip",(t-1)*S],["$format","JSON"]]),"\u5168\u53f0"!==n){e.next=9;break}return e.next=6,j(r.toString());case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,w(_[n],r.toString());case 11:i=e.sent;case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=U(h,"".concat(n,",").concat(c),g,O),I=C.data,A=C.hasMore,N=C.loading,F=Object(i.useRef)(),P=Object(i.useCallback)((function(e){N||(F.current&&F.current.disconnect(),F.current=new IntersectionObserver((function(e){e[0].isIntersecting&&A&&v((function(e){return e+1}))})),e&&F.current.observe(e))}),[N,A]);return Object(E.jsxs)(z,{children:[Object(E.jsx)(Be,{headerImage:B,searchValue:h,handleSearch:function(e){return function(e){x(e.target.value),v(1)}(e)},regionSelect:c,regionFilter:function(e){return t=e,a("\u5168\u53f0"),s(t),void v(1);var t},countrySelect:n,countryFilter:function(e){return a(e),void v(1)}}),Object(E.jsx)(D,{children:I.map((function(e,t){var n,i,a,r;if(!((null===e||void 0===e||null===(n=e.Picture)||void 0===n?void 0:n.PictureUrl1.includes("210.69"))||(null===e||void 0===e||null===(i=e.Picture)||void 0===i?void 0:i.PictureUrl1.includes("travel.nantou.gov.tw"))||(null===e||void 0===e||null===(a=e.Picture)||void 0===a?void 0:a.PictureUrl1.includes("cloud.culture.tw"))||(null===e||void 0===e||null===(r=e.Picture)||void 0===r?void 0:r.PictureUrl1.includes("northguan-nsa"))||(null===e||void 0===e?void 0:e.Name.includes("Test"))))return Object(E.jsx)(be,{ref:I.length-3===t?P:null,data:e},t)}))})]})},R=q.b.div.withConfig({displayName:"styles__Container",componentId:"sc-j5kyt9-0"})(["display:flex;flex-direction:column;align-items:center;"]),H=q.b.div.withConfig({displayName:"styles__GridCont",componentId:"sc-j5kyt9-1"})(["display:grid;grid-template-columns:repeat(4,minmax(5rem,1fr));margin:3% 0px;grid-gap:27px;max-width:1440px;@media (max-width:1512px){padding:0 3% 5%;}@media (max-width:1200px){grid-template-columns:repeat(3,minmax(5rem,1fr));}@media (max-width:768px){grid-template-columns:repeat(2,minmax(5rem,1fr));}@media (max-width:600px){grid-template-columns:repeat(1,minmax(5rem,1fr));}"]),J=function(){var e=Object(i.useState)("\u5168\u53f0"),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("\u5168\u90e8\u5730\u5340"),o=Object(u.a)(r,2),c=o[0],s=o[1],p=Object(i.useState)(""),m=Object(u.a)(p,2),h=m[0],x=m[1],f=Object(i.useState)(1),b=Object(u.a)(f,2),g=b[0],v=b[1],j=function(){var e="";return"\u5168\u90e8\u5730\u5340"!==c&&"\u5168\u53f0"===n?(e+=0!==h.length?" and contains(NAME,'".concat(h,"') and ("):" and (",k[c].slice(1).map((function(t,n){e+=(0!==n?" or ":"")+"contains(City,'".concat(t,"')")})),e+=")"):e+=0!==h.length?" and contains(NAME,'".concat(h,"')"):"",e},w=function(){var e=Object(d.a)(l.a.mark((function e(t){var i,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],a=j(),r=new URLSearchParams([["$top",S],["$filter","Picture/PictureUrl1 ne null".concat(a)],["$skip",(t-1)*S],["$format","JSON"]]),"\u5168\u53f0"!==n){e.next=9;break}return e.next=6,y(r.toString());case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,O(_[n],r.toString());case 11:i=e.sent;case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=U(h,"".concat(n,",").concat(c),g,w),I=C.data,A=C.hasMore,N=C.loading,F=Object(i.useRef)(),P=Object(i.useCallback)((function(e){N||(F.current&&F.current.disconnect(),F.current=new IntersectionObserver((function(e){e[0].isIntersecting&&A&&v((function(e){return e+1}))})),e&&F.current.observe(e))}),[N,A]);return Object(E.jsxs)(R,{children:[Object(E.jsx)(Be,{headerImage:B,searchValue:h,handleSearch:function(e){return function(e){x(e.target.value),v(1)}(e)},regionSelect:c,regionFilter:function(e){return t=e,a("\u5168\u53f0"),s(t),void v(1);var t},countrySelect:n,countryFilter:function(e){return a(e),void v(1)}}),Object(E.jsx)(H,{children:I.map((function(e,t){var n,i,a,r;if(!((null===e||void 0===e||null===(n=e.Picture)||void 0===n?void 0:n.PictureUrl1.includes("210.69"))||(null===e||void 0===e||null===(i=e.Picture)||void 0===i?void 0:i.PictureUrl1.includes("travel.nantou.gov.tw"))||(null===e||void 0===e||null===(a=e.Picture)||void 0===a?void 0:a.PictureUrl1.includes("cloud.culture.tw"))||(null===e||void 0===e||null===(r=e.Picture)||void 0===r?void 0:r.PictureUrl1.includes("northguan-nsa"))||(null===e||void 0===e?void 0:e.Name.includes("Test"))))return Object(E.jsx)(be,{ref:I.length-3===t?P:null,data:e},t)}))})]})},L=q.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1o1fpbp-0"})(["display:flex;flex-direction:column;align-items:center;"]),V=q.b.div.withConfig({displayName:"styles__GridCont",componentId:"sc-1o1fpbp-1"})(["display:grid;grid-template-columns:repeat(4,minmax(5rem,1fr));margin:3% 0px;grid-gap:27px;max-width:1440px;@media (max-width:1512px){padding:0 3% 5%;}@media (max-width:1200px){grid-template-columns:repeat(3,minmax(5rem,1fr));}@media (max-width:768px){grid-template-columns:repeat(2,minmax(5rem,1fr));}@media (max-width:600px){grid-template-columns:repeat(1,minmax(5rem,1fr));}"]),Y=function(){var e=Object(i.useState)("\u5168\u53f0"),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("\u5168\u90e8\u5730\u5340"),o=Object(u.a)(r,2),c=o[0],s=o[1],p=Object(i.useState)(""),m=Object(u.a)(p,2),h=m[0],x=m[1],f=Object(i.useState)(1),b=Object(u.a)(f,2),g=b[0],v=b[1],j=function(){var e="";return"\u5168\u90e8\u5730\u5340"!==c&&"\u5168\u53f0"===n?(e+=0!==h.length?" and contains(NAME,'".concat(h,"') and ("):" and (",k[c].slice(1).map((function(t,n){e+=(0!==n?" or ":"")+"contains(City,'".concat(t,"')")})),e+=")"):e+=0!==h.length?" and contains(NAME,'".concat(h,"')"):"",e},w=function(){var e=Object(d.a)(l.a.mark((function e(t){var i,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],a=j(),r=new URLSearchParams([["$top",S],["$filter","Picture/PictureUrl1 ne null".concat(a)],["$skip",(t-1)*S],["$format","JSON"]]),"\u5168\u53f0"!==n){e.next=9;break}return e.next=6,C(r.toString());case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,I(_[n],r.toString());case 11:i=e.sent;case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=U(h,"".concat(n,",").concat(c),g,w),O=y.data,A=y.hasMore,N=y.loading,F=Object(i.useRef)(),P=Object(i.useCallback)((function(e){N||(F.current&&F.current.disconnect(),F.current=new IntersectionObserver((function(e){e[0].isIntersecting&&A&&v((function(e){return e+1}))})),e&&F.current.observe(e))}),[N,A]);return Object(E.jsxs)(L,{children:[Object(E.jsx)(Be,{headerImage:B,searchValue:h,handleSearch:function(e){return function(e){x(e.target.value),v(1)}(e)},regionSelect:c,regionFilter:function(e){return t=e,a("\u5168\u53f0"),s(t),void v(1);var t},countrySelect:n,countryFilter:function(e){return a(e),void v(1)}}),Object(E.jsx)(V,{children:O.map((function(e,t){var n,i,a,r;if(!((null===e||void 0===e||null===(n=e.Picture)||void 0===n?void 0:n.PictureUrl1.includes("210.69"))||(null===e||void 0===e||null===(i=e.Picture)||void 0===i?void 0:i.PictureUrl1.includes("travel.nantou.gov.tw"))||(null===e||void 0===e||null===(a=e.Picture)||void 0===a?void 0:a.PictureUrl1.includes("cloud.culture.tw"))||(null===e||void 0===e||null===(r=e.Picture)||void 0===r?void 0:r.PictureUrl1.includes("northguan-nsa"))||(null===e||void 0===e?void 0:e.Name.includes("Test"))))return Object(E.jsx)(be,{ref:O.length-3===t?P:null,data:e},t)}))})]})},G=q.b.div.withConfig({displayName:"styles__Container",componentId:"sc-24ifzq-0"})(["display:flex;flex-direction:column;align-items:center;"]),Q=q.b.div.withConfig({displayName:"styles__GridCont",componentId:"sc-24ifzq-1"})(["display:grid;grid-template-columns:repeat(4,minmax(5rem,1fr));margin:3% 0px;grid-gap:27px;max-width:1440px;@media (max-width:1512px){padding:0 3% 5%;}@media (max-width:1200px){grid-template-columns:repeat(3,minmax(5rem,1fr));}@media (max-width:768px){grid-template-columns:repeat(2,minmax(5rem,1fr));}@media (max-width:600px){grid-template-columns:repeat(1,minmax(5rem,1fr));}"]),W=function(){var e=Object(i.useState)("\u5168\u53f0"),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("\u5168\u90e8\u5730\u5340"),o=Object(u.a)(r,2),c=o[0],s=o[1],p=Object(i.useState)(""),m=Object(u.a)(p,2),h=m[0],x=m[1],f=Object(i.useState)(1),b=Object(u.a)(f,2),g=b[0],v=b[1],j=function(){var e="";return"\u5168\u90e8\u5730\u5340"!==c&&"\u5168\u53f0"===n?(e+=0!==h.length?" and contains(NAME,'".concat(h,"') and ("):" and (",k[c].slice(1).map((function(t,n){e+=(0!==n?" or ":"")+"contains(City,'".concat(t,"')")})),e+=")"):e+=0!==h.length?" and contains(NAME,'".concat(h,"')"):"",e},w=function(){var e=Object(d.a)(l.a.mark((function e(t){var i,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],a=j(),r=new URLSearchParams([["$top",S],["$filter","Picture/PictureUrl1 ne null".concat(a)],["$skip",(t-1)*S],["$format","JSON"]]),"\u5168\u53f0"!==n){e.next=9;break}return e.next=6,A(r.toString());case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,N(_[n],r.toString());case 11:i=e.sent;case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=U(h,"".concat(n,",").concat(c),g,w),O=y.data,C=y.hasMore,I=y.loading,F=Object(i.useRef)(),P=Object(i.useCallback)((function(e){I||(F.current&&F.current.disconnect(),F.current=new IntersectionObserver((function(e){e[0].isIntersecting&&C&&v((function(e){return e+1}))})),e&&F.current.observe(e))}),[I,C]);return Object(E.jsxs)(G,{children:[Object(E.jsx)(Be,{headerImage:B,searchValue:h,handleSearch:function(e){return function(e){x(e.target.value),v(1)}(e)},regionSelect:c,regionFilter:function(e){return t=e,a("\u5168\u53f0"),s(t),void v(1);var t},countrySelect:n,countryFilter:function(e){return a(e),void v(1)}}),Object(E.jsx)(Q,{children:O.map((function(e,t){var n,i,a,r;if(!((null===e||void 0===e||null===(n=e.Picture)||void 0===n?void 0:n.PictureUrl1.includes("210.69"))||(null===e||void 0===e||null===(i=e.Picture)||void 0===i?void 0:i.PictureUrl1.includes("travel.nantou.gov.tw"))||(null===e||void 0===e||null===(a=e.Picture)||void 0===a?void 0:a.PictureUrl1.includes("cloud.culture.tw"))||(null===e||void 0===e||null===(r=e.Picture)||void 0===r?void 0:r.PictureUrl1.includes("northguan-nsa"))||(null===e||void 0===e?void 0:e.Name.includes("Test"))))return Object(E.jsx)(be,{ref:O.length-3===t?P:null,data:e},t)}))})]})},K=n(9),X=q.b.header.withConfig({displayName:"styles__Header",componentId:"sc-1fftxtg-0"})(["display:flex;padding:0 12% 0 5%;width:100%;justify-content:space-between;align-items:center;height:50px;position:fixed;background:",";transition:800ms background-color ease;z-index:99;"],(function(e){return e.scrollNav?"#B2E4FF":"transparent"})),Z=Object(q.b)(K.c).withConfig({displayName:"styles__Logo",componentId:"sc-1fftxtg-1"})(["color:white;font-size:20px;"]),$=(q.b.img.withConfig({displayName:"styles__Icon",componentId:"sc-1fftxtg-2"})(["width:95px;height:28px;"]),q.b.div.withConfig({displayName:"styles__NavBtnCont",componentId:"sc-1fftxtg-3"})(["display:flex;"])),ee=Object(q.b)(K.c).withConfig({displayName:"styles__NavBtn",componentId:"sc-1fftxtg-4"})(["color:white;font-size:20px;padding:2px 0;&:not(:last-child){margin-right:20px;}&.","{border-bottom:3px solid #FFFF6F;color:#FFFF6F;}"],(function(e){return e.activeclassname})),te=function(){var e,t=Object(c.e)(),n=Object(i.useState)(t.pathname.includes(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.ID)),a=Object(u.a)(n,2),r=a[0],o=a[1],s=function(){window.scrollY>=100?o(!0):o(!1)};return Object(i.useEffect)((function(){var e;t.pathname.includes(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.ID)||window.addEventListener("scroll",s)}),[]),Object(E.jsxs)(X,{scrollNav:r,children:[Object(E.jsx)(Z,{to:"/",children:"YoTW"}),Object(E.jsxs)($,{children:[Object(E.jsx)(ee,{to:"scenicSpots",activeclassname:"active",children:"\u666f\u9ede"}),Object(E.jsx)(ee,{to:"restaurant",activeclassname:"active",children:"\u9910\u98f2"}),Object(E.jsx)(ee,{to:"hotels",activeclassname:"active",children:"\u65c5\u5bbf"}),Object(E.jsx)(ee,{to:"activities",activeclassname:"active",children:"\u6d3b\u52d5"})]})]})},ne=n(12),ie=(q.b.div(T||(T=Object(ne.a)([""]))),q.b.div.withConfig({displayName:"styles__Container",componentId:"sc-k5dqlx-0"})(["position:absolute;top:57%;left:50%;transform:translate(-50%,0);display:flex;flex-direction:column;width:30vw;@media (max-width:992px){width:40vw;}@media (max-width:768px){width:50vw;}@media (max-width:600px){width:60vw;}"])),ae=q.b.button.withConfig({displayName:"styles__SelectBtn",componentId:"sc-k5dqlx-1"})(["background-color:white;box-shadow:inset -2px 1px 0px #00000015,-3px 3px 7px #0A4F8B;border-radius:8px;letter-spacing:0.4px;color:rgba(87,87,87,0.4);text-align:center;padding:7px 0;font-size:1rem;cursor:pointer;font-weight:900;&::before{content:'\\25BC';margin-right:2rem;font-weight:900;}&::after{content:'\\25BC';margin-left:2rem;font-weight:900;}"]),re=q.b.div.withConfig({displayName:"styles__Menu",componentId:"sc-k5dqlx-2"})(["display:flex;flex-direction:column;margin-top:5px;"]),oe=q.b.button.withConfig({displayName:"styles__DropdownItem",componentId:"sc-k5dqlx-3"})(["cursor:pointer;background-color:",";color:black;text-align:center;box-shadow:inset -2px 1px 0px #00000015,-3px 3px 7px #0A4F8B;border-radius:8px;letter-spacing:0.4px;color:rgba(87,87,87,0.4);padding:7px 0;font-size:1rem;&:not(:last-child){margin-bottom:5px;}@media(hover:hover) and (pointer:fine){&:hover{background-color:",";}}"],(function(e){return e.isActive?"lightblue":"white"}),(function(e){return e.isActive?"lightblue":"lightgray"})),ce=function(e){var t=e.currentItem,n=e.data,i=e.setFilterData,a=e.isOpen,r=e.setIsOpen;return Object(E.jsxs)(ie,{children:[Object(E.jsx)(ae,{onClick:function(){return r((function(e){return!e}))},children:t}),a&&Object(E.jsx)(re,{children:n.map((function(e,n){return Object(E.jsx)(oe,{onClick:function(e){return t=e.target.innerText,r((function(e){return!e})),void i(t);var t},isActive:t===e,children:e},n)}))})]})},se=Object(q.b)(K.b).withConfig({displayName:"style__Item",componentId:"sc-13kpu2i-0"})(["display:flex;flex-direction:column;padding:17px;border-radius:6px;box-shadow:-3px 3px 6px #70735D6E;border:1px solid #70735DA3;margin:",";background-color:white;"],(function(e){var t=e.margin;return t||""})),le=q.b.img.withConfig({displayName:"style__Image",componentId:"sc-13kpu2i-1"})(["width:100%;height:100%;max-height:260px;object-fit:cover;margin-bottom:15px;border-radius:6px;"]),de=q.b.div.withConfig({displayName:"style__DetailCont",componentId:"sc-13kpu2i-2"})(["width:",";@media (max-width:1200px){width:",";}@media (max-width:768px){width:",";}@media (max-width:600px){width:",";}"],(function(e){return e.isDetailPage?"19vw":""}),(function(e){return e.isDetailPage?"25vw":""}),(function(e){return e.isDetailPage?"40vw":""}),(function(e){return e.isDetailPage?"50vw":""})),ue=q.b.h1.withConfig({displayName:"style__Name",componentId:"sc-13kpu2i-3"})(["margin-bottom:17px;font-size:1.25rem;letter-spacing:0.48px;color:#575757;"]),pe=q.b.div.withConfig({displayName:"style__Line",componentId:"sc-13kpu2i-4"})(["display:flex;"]),me=q.b.img.withConfig({displayName:"style__Icon",componentId:"sc-13kpu2i-5"})(["height:1rem;object-fit:contain;margin-right:5px;"]),he=q.b.p.withConfig({displayName:"style__Content1",componentId:"sc-13kpu2i-6"})(["font-size:1rem;letter-spacing:0.36px;color:#70735D;margin-bottom:12px;"]),xe=q.b.p.withConfig({displayName:"style__Content2",componentId:"sc-13kpu2i-7"})(["font-size:1rem;letter-spacing:0.36px;color:#575757;"]),fe=a.a.forwardRef((function(e,t){var n,i,a,r,o,s,l=e.data,d=e.margin,u=Object(c.e)(),p=(null===l||void 0===l?void 0:l.Description)||(null===l||void 0===l?void 0:l.DescriptionDetail);p=(null===(n=p)||void 0===n?void 0:n.length)>50?(null!==(i=null===(a=p)||void 0===a?void 0:a.slice(0,50))&&void 0!==i?i:"")+"...":p;var m="Sun 24 hours\uff1bMon 24 hours\uff1bTue 24 hours\uff1bWed 24 hours\uff1bThu 24 hours\uff1bFri 24 hours\uff1bSat 24 hours"===(null===l||void 0===l?void 0:l.OpenTime)?"\u5168\u5929\u5019\u958b\u653e":null!==(r=null===l||void 0===l?void 0:l.OpenTime)&&void 0!==r?r:"\u67e5\u7121\u6642\u9593\u8cc7\u8a0a";return Object(E.jsxs)(se,{ref:t,to:l.ID,state:l,margin:null!==d&&void 0!==d?d:"",children:[Object(E.jsx)(le,{src:l.Picture.PictureUrl1,alt:l.Picture.PictureDescription1}),Object(E.jsxs)(de,{isDetailPage:u.pathname.includes(null===u||void 0===u||null===(o=u.state)||void 0===o?void 0:o.ID),children:[Object(E.jsx)(ue,{children:null===l||void 0===l||null===(s=l.Name)||void 0===s?void 0:s.replaceAll(".","")}),Object(E.jsxs)(pe,{children:[Object(E.jsx)(me,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAWCAYAAAAmaHdCAAAABHNCSVQICAgIfAhkiAAAAi5JREFUOE+VlMFLG0EUxt8zmiqICT2UBKSNh0KLFI0BoaCYg731IBR66aHU/gFaPNUcXAvakxgvvQlevCnoTdBDQFEv0VgqlApW2sKG9tDdUkibmn19MzI6uzumdmAOM2/nt9/7Zt5DCIzE6/0UkjcChFlA6JZhghIgFQgb5sov0yfBM6hvJKaKFiJOBD/S14RoMWhS3zuHJKb3FnjxtB5AxYhooZzLPFNrCUlOF0cBcPYqAA00ySBLrDFu7cdbmugj5x/XIfdvtoKYYmx/+gm7PH2DwKn8wQ7HSjtoUrH85PY5QB0UoOGlY/jxu6ax6IU9nskje1HgnAZUZKw/CWN9CWNmM1tlmNm0L2J8a3auJ82QooOAMRUxqVCxHVbzaPHI9wN7vAc5nT3Sd9ef34HOGy1GJe6vGtydfftvSD0lh18r8GD+fRgS9CT/8BY8vnfdqGTtgwvDy8d67IDT6Q7dTnssChucUtu1SAjU++YQvrhVzVias3OZUflOmqPeiW6uAL0abIdYcwTaeH52qvJWRDr64BLoELUkX+xVaiYki85UyBergv9TO1zVq/w+htRZXxUnp4p5QBwxuqo2NQVGCPeSbM0DJ4LEMmlI+URALoteOa3RUmNjw7tgT/EpOTOZVhDoOzegEhAV5N+QG5TnpfhjV/mgq/VBREBWdVQe7gqkdVCpYlZUbTDdEESBWFFea1KXAny3YzJTGg2YOgW0vuXSpcsMNyqpezuG4F8y0OEXp4ETvwAAAABJRU5ErkJggg=="}),Object(E.jsx)(he,{children:null===l||void 0===l?void 0:l.Address})]}),Object(E.jsxs)(pe,{children:[Object(E.jsx)(me,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAoBJREFUOE+dVT1MU1EU/u57fW1RaZl0a3Ggm5SBbsQubCSocXNAYnRwACE6SKOLJGUyFjBh8Q9NnEwEErY6oGx1aMMGS3Fzs0VNX3/e9ZxbXnnv9ZUQT9Lk3XvP+e53znfuqUAPqy7p04CWlhIjQmCE3ei7SN9FCGsj8ri16RcqvJvVrH5dCu0FHQz2ukyBA2UhrflIprXh9HMBHi0FchLiwWlA3jMhZa4/05y39zuA/wN2AiKX+xeac7xWgJwmhPaZv/XYVegXh1H//rJDJjT+HFokhtaPHdT3PgBmpTsJad3g9BVgJWuUqdhx48oUwhOvlHNjbx217XvtwFAUgVgaIjyAYGoG9cIqnb93gXJNowuNy+JYzbd8euH+AUQ03nGsbd9VgbwXTM0S8ySa+5swhqdgfltE82DLzZRYimrWeEeJ3+aTvpufEBia7DjJShm/1xJqzcxbhzvQ42lK/ati+udNygOIdWJoFGk3adfv3K18F0M77TDV0vpZQiBxDRZd1tzfcrFUfUqAlP6JMSALwyz+fhx3MdAoZf1SElxrc/eZqqu5u+jy6QLkoPN3CkDtF47WhnwVZR82IzHpC9hJ2b4qNPYUQfq5lHZXq9eq5BLF6cUicGoKNP9IMWVmobEn1KOrqiRdJpUo+jQNAdU2XrNBWe06tU9odJbkHlBu9cIKzC90kdO4bXhtN7YfKL+S4OiMb4pm/qFiy0YKH0YzjcGup+cXyar3Tbx2NT372Y3fRnQ8PV6fZThwTVkwfjnMjBmyCXiGg83qLKDeDJxgbXCPqQELLcfDwrdwx5tcMwFr7tQB6wRQIw0ajTU1/tudDJRoVFPf0l+AZ1Lbsf8AkxcPh0QtLYcAAAAASUVORK5CYII="}),Object(E.jsx)(he,{children:(null===l||void 0===l?void 0:l.Fax)||m})]}),Object(E.jsx)(xe,{children:p})]})]},l.ID)}));fe.displayName="ResultItem";var be=fe,ge=q.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1jne0oq-0"})(["display:flex;flex-direction:column;"]),ve=q.b.div.withConfig({displayName:"styles__Frame",componentId:"sc-1jne0oq-1"})(["display:flex;padding:4.6vh 6.5vw;margin-top:50px;@media (max-width:992px){flex-direction:column;}"]),je=q.b.div.withConfig({displayName:"styles__DetailCont",componentId:"sc-1jne0oq-2"})(["display:flex;flex-direction:column;justify-content:flex-end;"]),we=q.b.div.withConfig({displayName:"styles__TravelCont",componentId:"sc-1jne0oq-3"})(["padding:0 6.7vw;margin-bottom:7.2%;"]),ye=q.b.div.withConfig({displayName:"styles__Line",componentId:"sc-1jne0oq-4"})(["display:flex;&:not(:last-child){margin-bottom:25px;}"]),Oe=q.b.img.withConfig({displayName:"styles__Img",componentId:"sc-1jne0oq-5"})(["object-fit:cover;width:55vw;margin-left:73px;border-radius:8px;@media (max-width:992px){width:100%;margin-left:0px;margin-top:30px;}"]),Ce=q.b.h1.withConfig({displayName:"styles__Title1",componentId:"sc-1jne0oq-6"})(["font-size:2rem;letter-spacing:0.6px;color:#575757;margin-bottom:30px;"]),Ie=q.b.h2.withConfig({displayName:"styles__Title2",componentId:"sc-1jne0oq-7"})(["font-size:1rem;letter-spacing:0.48px;color:#575757;margin-bottom:10px;"]),Ae=q.b.p.withConfig({displayName:"styles__Paragraph",componentId:"sc-1jne0oq-8"})(["font-size:1rem;letter-spacing:0.48px;color:#70735D;"]),Ne=(q.b.img.withConfig({displayName:"styles__Icon",componentId:"sc-1jne0oq-9"})(["width:31px;height:25px;margin-right:20px;"]),q.b.div.withConfig({displayName:"styles__RecommendCont",componentId:"sc-1jne0oq-10"})(["padding:5vh 7.2vw;background-color:#FFD965;"])),_e=q.b.h1.withConfig({displayName:"styles__RecommendHeader",componentId:"sc-1jne0oq-11"})(["font-size:1.5rem;letter-spacing:0.6px;color:#283880;margin-bottom:5vh;text-align:center;"]),Fe=q.b.div.withConfig({displayName:"styles__ItemsBlock",componentId:"sc-1jne0oq-12"})(["display:flex;overflow:scroll;padding:5px;"]),ke=function(){var e=Object(c.e)().state,t=e.Name,n=e.Address,i=e.Phone,a=e.OpenTime,r=e.TicketInfo,o=e.DescriptionDetail,s=e.Picture,u=e.TravelInfo,p=e.Position,m=[{text:n},{text:i},{text:"Sun 24 hours\uff1bMon 24 hours\uff1bTue 24 hours\uff1bWed 24 hours\uff1bThu 24 hours\uff1bFri 24 hours\uff1bSat 24 hours"===a?"\u5168\u5929\u5019\u958b\u653e":null!==a&&void 0!==a?a:"\u67e5\u7121\u6642\u9593\u8cc7\u8a0a"},{text:r},{text:o}],h=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],i=new URLSearchParams([["$top",S],["$filter","Picture/PictureUrl1 ne null"],["$skip",(t-1)*S],["$format","JSON"],["$spatialFilter","nearby(".concat(p.PositionLat,", ").concat(p.PositionLon,", 3000)")]]),e.next=4,y(i.toString());case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=U("","",1,h).data;return Object(E.jsxs)(ge,{children:[Object(E.jsxs)(ve,{children:[Object(E.jsxs)(je,{children:[Object(E.jsx)(Ce,{children:t}),m.map((function(e,t){return Object(E.jsx)(ye,{children:Object(E.jsx)(Ae,{children:e.text})},t)}))]}),Object(E.jsx)(Oe,{src:s.PictureUrl1,alt:s.PictureDescription1})]}),u&&Object(E.jsxs)(we,{children:[Object(E.jsx)(Ie,{children:"\u4ea4\u901a\u65b9\u5f0f"}),Object(E.jsx)(Ae,{children:u})]}),Object(E.jsxs)(Ne,{children:[Object(E.jsx)(_e,{children:"\u63a8\u85a6\u65c5\u5bbf"}),Object(E.jsx)(Fe,{children:x.map((function(e,t){return Object(E.jsx)(be,{data:e,margin:"0 40px 0 0"},t)}))})]})]})},Se=q.b.button.withConfig({displayName:"styles__Button",componentId:"sc-2f2v6w-0"})(["display:",";cursor:pointer;text-align:center;padding:5px;font-size:1rem;box-shadow:-3px 3px 6px #00000029;border-radius:9px;background-color:",";color:",";font-weight:900;@media (hover:hover) and (pointer:fine){&:hover{background-color:#283880;color:white;}}"],(function(e){return e.isFilterMenuOpen?"none":""}),(function(e){return e.isActive?"#283880":"#FFD965"}),(function(e){return e.isActive?"white":"#283880"})),Pe=function(e){var t=e.currentItem,n=e.data,i=e.setFilterData,a=e.isFilterMenuOpen;return Object(E.jsx)(Se,{onClick:function(e){return function(e){var t=e.target.innerText;i("\u5168\u90e8"!==t?e.target.innerText:"\u5168\u53f0")}(e)},isActive:t===n||"\u5168\u53f0"===t&&"\u5168\u90e8"===n,isFilterMenuOpen:a,children:n})},Ue=q.b.div.withConfig({displayName:"styles__HeaderCont",componentId:"sc-1qqga4u-0"})(["position:relative;"]),Te=q.b.img.withConfig({displayName:"styles__HeaderBackgroundImg",componentId:"sc-1qqga4u-1"})(["width:100vw;height:70vh;object-fit:cover;"]),qe=q.b.h1.withConfig({displayName:"styles__Title",componentId:"sc-1qqga4u-2"})(["position:absolute;top:35%;left:50%;transform:translate(-50%,-50%);font-size:3rem;letter-spacing:0.6px;color:#FFFFFF;text-shadow:-3px 4px 4px #0D3457;&::after{content:' ","';color:#FFD965;}@media (max-width:600px){font-size:2rem;}"],(function(e){return e.value})),ze=q.b.input.withConfig({displayName:"styles__Searchbar",componentId:"sc-1qqga4u-3"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:white;box-shadow:inset -2px 1px 0px #00000015,-3px 3px 7px #0A4F8B;border-radius:8px;letter-spacing:0.4px;text-align:center;padding:7px 0;width:30vw;font-size:1rem;&::placeholder{color:rgba(87,87,87,0.4);font-weight:900;}@media (max-width:992px){width:40vw;}@media (max-width:768px){width:50vw;}@media (max-width:600px){width:60vw;}"]),De=(q.b.div.withConfig({displayName:"styles__FilterCont",componentId:"sc-1qqga4u-4"})(["display:flex;padding:10px;justify-content:center;background-color:#B2E4FF;"]),q.b.div.withConfig({displayName:"styles__FilterBtnCont",componentId:"sc-1qqga4u-5"})(["position:absolute;top:70%;left:50%;transform:translate(-50%,0);display:grid;grid-template-columns:repeat(auto-fit,5em);grid-gap:10px;width:80%;justify-content:center;"])),Be=function(e){var t=e.headerImage,n=e.searchValue,a=void 0===n?"":n,r=e.handleSearch,o=void 0===r?function(){}:r,s=e.regionSelect,l=void 0!==s&&s,d=e.regionFilter,p=void 0===d?function(){}:d,m=e.countrySelect,h=void 0!==m&&m,x=e.countryFilter,f=void 0===x?function(){}:x,b=Object(i.useState)(!1),g=Object(u.a)(b,2),v=g[0],j=g[1],w=Object(c.e)();return Object(E.jsxs)(Ue,{children:[Object(E.jsx)(Te,{src:t,alt:"headerImage"}),Object(E.jsx)(qe,{value:function(){switch(w.pathname.slice(1)){case"scenicSpots":return"GO";case"hotels":return"LIVE";case"activities":return"PLAY";case"restaurant":return"EAT";default:return"YOTW"}}(),children:"Where you"}),Object(E.jsx)(ze,{type:"text",value:a,placeholder:"\u641c\u5c0b",onChange:function(e){return o(e)}}),Object(E.jsx)(ce,{currentItem:l,data:F,setFilterData:function(e){return p(e)},isOpen:v,setIsOpen:function(e){return j(e)}}),Object(E.jsx)(De,{children:k[l].map((function(e,t){return Object(E.jsx)(Pe,{data:e,currentItem:h,setFilterData:function(e){return f(e)},isFilterMenuOpen:v},t)}))})]})},Ee=q.b.div.withConfig({displayName:"styles__HeaderCont",componentId:"sc-1vu0m33-0"})(["position:relative;"]),Me=q.b.img.withConfig({displayName:"styles__HeaderBackgroundImg",componentId:"sc-1vu0m33-1"})(["width:100vw;height:70vh;object-fit:cover;"]),Re=q.b.h1.withConfig({displayName:"styles__Title",componentId:"sc-1vu0m33-2"})(["position:absolute;top:35%;left:50%;transform:translate(-50%,-50%);font-size:3rem;letter-spacing:0.6px;color:#FFFFFF;text-shadow:-3px 4px 4px #0D3457;text-align:center;&::after{content:'YOTW';color:#FFD965;}@media (max-width:1200px){font-size:2.5rem;}@media (max-width:600px){font-size:2rem;}"]),He=function(){return Object(E.jsxs)(Ee,{children:[Object(E.jsx)(Me,{src:B,alt:"headerImage"}),Object(E.jsx)(Re,{children:"Enjoy your trip with "})]})},Je=q.b.div.withConfig({displayName:"styles__Container",componentId:"sc-yzbukd-0"})(["display:flex;flex-direction:column;align-items:center;"]),Le=(q.b.div.withConfig({displayName:"styles__Frame",componentId:"sc-yzbukd-1"})([""]),q.b.img.withConfig({displayName:"styles__Image",componentId:"sc-yzbukd-2"})(["width:40%;"]),q.b.img.withConfig({displayName:"styles__Icon",componentId:"sc-yzbukd-3"})(["width:41px;"]),function(){return Object(E.jsx)(Je,{})}),Ve=function(){return Object(E.jsx)(Y,{})},Ye=function(){return Object(E.jsx)(ke,{})},Ge=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(He,{}),Object(E.jsx)(Le,{})]})},Qe=function(){return Object(E.jsx)(J,{})},We=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(W,{})})},Ke=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(M,{})})};var Xe,Ze,$e=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(te,{}),Object(E.jsxs)(c.c,{children:[Object(E.jsx)(c.a,{path:"/",element:Object(E.jsx)(Ge,{})}),Object(E.jsx)(c.a,{path:"scenicSpots",element:Object(E.jsx)(Ke,{})}),Object(E.jsx)(c.a,{path:"scenicSpots/:scenicSpotId",element:Object(E.jsx)(Ye,{})}),Object(E.jsx)(c.a,{path:"hotels",element:Object(E.jsx)(Qe,{})}),Object(E.jsx)(c.a,{path:"hotels/:scenicSpotId",element:Object(E.jsx)(Ye,{})}),Object(E.jsx)(c.a,{path:"activities",element:Object(E.jsx)(Ve,{})}),Object(E.jsx)(c.a,{path:"activities/:scenicSpotId",element:Object(E.jsx)(Ye,{})}),Object(E.jsx)(c.a,{path:"restaurant",element:Object(E.jsx)(We,{})}),Object(E.jsx)(c.a,{path:"restaurant/:scenicSpotId",element:Object(E.jsx)(Ye,{})})]})]})},et=Object(q.a)(Xe||(Xe=Object(ne.a)(["\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html, body {\n    height: 100%;\n    font-family: '\u83ef\u5eb7\u9ed1\u9ad4 Std','Roboto','Helvetica Neue', Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 16px;\n    /* font-weight: 600; */\n    line-height: 1.2;\n    background-color: #F8F8F8;\n  }\n"]))),tt=Object(q.a)(Ze||(Ze=Object(ne.a)(["\n  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    box-sizing: border-box;\n  }\n  address, caption, cite, code, dfn, em, strong, th, var, b {\n    font-weight: normal;\n    font-style: normal;\n  }\n  abbr, acronym {\n    border: 0;\n  }\n  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n  html {\n    text-size-adjust: 100%;\n    box-sizing: border-box;\n  }\n  body {\n      line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote {\n    &:before,   &:after {\n      content: '';\n      content: none;\n    }\n  }\n  q {\n    &:before,   &:after {\n      content: '';\n      content: none;\n    }\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  caption, th {\n    text-align: left;\n  }\n  textarea {\n    resize: none;\n  }\n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n  button {\n    padding: 0;\n    border: none;\n    background: none;\n  }\n  input, textarea {\n    all: unset;\n  }\n"])));o.a.render(Object(E.jsxs)(a.a.StrictMode,{children:[Object(E.jsx)(tt,{}),Object(E.jsx)(et,{}),Object(E.jsx)(K.a,{basename:"/YoTW",children:Object(E.jsx)($e,{})})]}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1f716ffb.chunk.js.map