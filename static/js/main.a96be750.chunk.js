(this.webpackJsonpyotw=this.webpackJsonpyotw||[]).push([[0],{55:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),o=t(23),r=t.n(o),c=t(4),s=t.n(c),l=t(7),d=t(8),u=t(24),p=t.n(u),b=t(28),f=p.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",headers:function(){var n=(new Date).toGMTString(),e=new b.a("SHA-1","TEXT");return e.setHMACKey("zvSZkHtUt4JieFWkdnOyW4iGtt4","TEXT"),e.update("x-date: "+n),{Authorization:'hmac username="79b1459ffeca4aabadd35e191c8fed59", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":n}}()}),m=function(n){return f.get(n?"?".concat(n):"")},g=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return f.get("/".concat(n,"?").concat(e))},h={"\u5168\u53f0":"","\u81fa\u5317\u5e02":"Taipei","\u65b0\u5317\u5e02":"NewTaipei","\u6843\u5712\u5e02":"Taoyuan","\u81fa\u4e2d\u5e02":"Taichung","\u81fa\u5357\u5e02":"Tainan","\u9ad8\u96c4\u5e02":"Kaohsiung","\u57fa\u9686\u5e02":"Keelung","\u65b0\u7af9\u5e02":"Hsinchu","\u65b0\u7af9\u7e23":"HsinchuCounty","\u82d7\u6817\u7e23":"MiaoliCounty","\u5f70\u5316\u7e23":"ChanghuaCounty","\u5357\u6295\u7e23":"NantouCounty","\u96f2\u6797\u7e23":"YunlinCounty","\u5609\u7fa9\u7e23":"ChiayiCounty","\u5609\u7fa9\u5e02":"Chiayi","\u5c4f\u6771\u7e23":"PingtungCounty","\u5b9c\u862d\u7e23":"YilanCounty","\u82b1\u84ee\u7e23":"HualienCounty","\u81fa\u6771\u7e23":"TaitungCounty","\u91d1\u9580\u7e23":"KinmenCounty","\u6f8e\u6e56\u7e23":"PenghuCounty","\u9023\u6c5f\u7e23":"LienchiangCounty"},x=["\u5168\u53f0","\u81fa\u5317\u5e02","\u65b0\u5317\u5e02","\u6843\u5712\u5e02","\u81fa\u4e2d\u5e02","\u81fa\u5357\u5e02","\u9ad8\u96c4\u5e02","\u57fa\u9686\u5e02","\u65b0\u7af9\u5e02","\u65b0\u7af9\u7e23","\u82d7\u6817\u7e23","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u96f2\u6797\u7e23","\u5609\u7fa9\u7e23","\u5609\u7fa9\u5e02","\u5c4f\u6771\u7e23","\u5b9c\u862d\u7e23","\u82b1\u84ee\u7e23","\u81fa\u6771\u7e23","\u91d1\u9580\u7e23","\u6f8e\u6e56\u7e23","\u9023\u6c5f\u7e23"],y=t(2),j=y.b.div.withConfig({displayName:"styles__Container",componentId:"sc-9s5tc6-0"})(["display:flex;padding:10px;margin-top:20px;justify-content:center;"]),v=y.b.form.withConfig({displayName:"styles__FilterForm",componentId:"sc-9s5tc6-1"})(["display:flex;flex-direction:row;"]),C=y.b.input.withConfig({displayName:"styles__Searchbar",componentId:"sc-9s5tc6-2"})(["background-color:white;height:30px;font-size:16px;"]),O=y.b.select.withConfig({displayName:"styles__Select",componentId:"sc-9s5tc6-3"})(["margin-left:10px;"]),w=y.b.option.withConfig({displayName:"styles__Option",componentId:"sc-9s5tc6-4"})(["margin-left:10px;"]),_=y.b.input.withConfig({displayName:"styles__Submit",componentId:"sc-9s5tc6-5"})(["margin-left:10px;background-color:white;font-size:14px;width:40px;text-align:center;"]),k=t(1),N=function(n){var e=n.setData,t=Object(a.useState)("\u5168\u53f0"),i=Object(d.a)(t,2),o=i[0],r=i[1],c=function(){var n=Object(l.a)(s.a.mark((function n(t){var a,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),a=[],i=new URLSearchParams([["$top",50],["format","JSON"]]),"\u5168\u53f0"!==o){n.next=9;break}return n.next=6,m(i.toString());case 6:a=n.sent,n.next=12;break;case 9:return n.next=11,g(h[o],i.toString());case 11:a=n.sent;case 12:e(a.data),console.log("yotest",a.data);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(k.jsx)(j,{children:Object(k.jsxs)(v,{onSubmit:c,children:[Object(k.jsx)(C,{}),Object(k.jsx)(O,{value:o,onChange:function(n){return r(n.target.value)},children:x.map((function(n,e){return Object(k.jsx)(w,{value:n,children:n},e)}))}),Object(k.jsx)(_,{value:"\u9001\u51fa",type:"submit"})]})})},S=y.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1j4d80-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(35rem,1fr));margin:3% 5%;grid-gap:30px;"]),I=y.b.div.withConfig({displayName:"styles__Item",componentId:"sc-1j4d80-1"})(["display:flex;flex-direction:row;background-color:gray;"]),z=y.b.img.withConfig({displayName:"styles__Image",componentId:"sc-1j4d80-2"})(["object-fit:cover;width:350px;align-self:center;"]),T=y.b.div.withConfig({displayName:"styles__DetailCont",componentId:"sc-1j4d80-3"})(["display:flex;flex-direction:column;margin-left:20px;padding:20px;"]),D=y.b.h1.withConfig({displayName:"styles__Name",componentId:"sc-1j4d80-4"})(["margin-bottom:30px;font-size:16px;"]),P=y.b.p.withConfig({displayName:"styles__Description",componentId:"sc-1j4d80-5"})(["font-size:12px;"]),H=function(n){var e=n.data;return Object(k.jsx)(S,{children:e.map((function(n){var e,t,a,i;if(null===n||void 0===n||null===(e=n.Picture)||void 0===e?void 0:e.PictureUrl1)return Object(k.jsxs)(I,{children:[Object(k.jsx)(z,{src:n.Picture.PictureUrl1,alt:n.Picture.PictureDescription1}),Object(k.jsxs)(T,{children:[Object(k.jsx)(D,{children:null===n||void 0===n||null===(t=n.Name)||void 0===t?void 0:t.replaceAll(".","")}),Object(k.jsx)(P,{children:(null!==(a=null===n||void 0===n||null===(i=n.DescriptionDetail)||void 0===i?void 0:i.slice(0,50))&&void 0!==a?a:"")+"..."})]})]},n.ID)}))})},q=function(){var n=Object(a.useState)([]),e=Object(d.a)(n,2),t=e[0],i=e[1];return Object(a.useEffect)((function(){var n=function(){var n=Object(l.a)(s.a.mark((function n(){var e,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams([["$top",50],["format","JSON"]]),n.next=3,m(e.toString());case 3:t=n.sent,i(t.data),console.log(t.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N,{setData:function(n){return i(n)}}),Object(k.jsx)(H,{data:t})]})},A=function(){return Object(k.jsx)(q,{})};var M,U,J=function(){return Object(k.jsx)(A,{})},E=t(12),F=Object(y.a)(M||(M=Object(E.a)(["\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html, body {\n    height: 100%;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: #282631;\n    /* color: #C7C3C0; */\n    font-size: 16px;\n  }\n"]))),K=Object(y.a)(U||(U=Object(E.a)(["\n  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    box-sizing: border-box;\n  }\n  address, caption, cite, code, dfn, em, strong, th, var, b {\n    font-weight: normal;\n    font-style: normal;\n  }\n  abbr, acronym {\n    border: 0;\n  }\n  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n  html {\n    text-size-adjust: 100%;\n    box-sizing: border-box;\n  }\n  body {\n      line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote {\n    &:before,   &:after {\n      content: '';\n      content: none;\n    }\n  }\n  q {\n    &:before,   &:after {\n      content: '';\n      content: none;\n    }\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  caption, th {\n    text-align: left;\n  }\n  textarea {\n    resize: none;\n  }\n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n  button {\n    padding: 0;\n    border: none;\n    background: none;\n  }\n  input, textarea {\n    all: unset;\n  }\n"])));r.a.render(Object(k.jsxs)(i.a.StrictMode,{children:[Object(k.jsx)(K,{}),Object(k.jsx)(F,{}),Object(k.jsx)(J,{})]}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.a96be750.chunk.js.map