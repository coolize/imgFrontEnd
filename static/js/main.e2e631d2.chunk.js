(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(13),i=n.n(a),j=(n(20),n(3)),u=function(e){return Object(c.jsx)("div",{className:"imageloader",children:Object(c.jsx)("form",{children:Object(c.jsxs)("label",{children:["Image URL:",Object(c.jsx)("input",{type:"text",value:e.selectedImageUrl,onChange:e.onImageLoad})]})})})},o=(n(21),function(e){var t=Object(s.useState)({}),n=Object(j.a)(t,2),a=(n[0],n[1]),i=Object(s.useState)(0),u=Object(j.a)(i,2),o=u[0],b=u[1],l=Object(s.useState)(0),d=Object(j.a)(l,2),h=d[0],O=d[1],p=r.a.useRef(null);return Object(c.jsxs)("div",{className:"imgbox",children:[Object(c.jsx)("img",{src:e.ImageURL,ref:p,onLoad:function(){a(p.current),b(p.current.naturalHeight),O(p.current.naturalWidth)}}),Object(c.jsxs)("p",{children:["Height: ",Object(c.jsx)("span",{className:"summary__output",children:o})," pixel"]}),Object(c.jsxs)("p",{children:["Width: ",Object(c.jsx)("span",{className:"summary__output",children:h})," pixel"]})]})}),b=n(14),l=n.n(b).a.create({baseURL:"https://api.staging01.lyrid.io/x/node/express/latest/entry/",auth:{username:"p8E2wBOH6BElYKNG9t1h",password:"2rjh1uXmQbMvb7dB0uhrMyGMYkZrOGXOStWVbQiEDF5wzDw6LV"},withCredentials:!0}),d=(n(40),function(e){var t=Object(s.useState)(""),n=Object(j.a)(t,2),r=n[0],a=n[1];return Object(s.useEffect)((function(){l.get("/sharp/resize/200?url="+e.ImageURL,{responseType:"arraybuffer"}).then((function(e){var t=btoa(new Uint8Array(e.data).reduce((function(e,t){return e+String.fromCharCode(t)}),"")),n="data:"+e.headers["content-type"].toLowerCase()+";base64,"+t;a(n)}))}),[e.ImageURL]),Object(c.jsxs)("div",{className:"transform",children:[Object(c.jsx)("h1",{children:"Transform"}),Object(c.jsxs)("p",{children:["Height:",Object(c.jsx)("input",{defaultValue:"200"})]}),Object(c.jsxs)("p",{children:["Width(optional):",Object(c.jsx)("input",{})]}),Object(c.jsxs)("p",{children:["Format:",Object(c.jsx)("select",{children:["webp","png","jpg"].map((function(e){return Object(c.jsx)("option",{children:e})}))})]}),Object(c.jsxs)("p",{children:["Quality:",Object(c.jsx)("select",{children:["10","20","30","40","50","60","70","80","90","100"].map((function(e){return Object(c.jsx)("option",{children:e})}))})]}),Object(c.jsxs)("p",{children:["Crop?",Object(c.jsx)("input",{type:"checkbox"})]}),Object(c.jsxs)("p",{children:["Gravity:",Object(c.jsx)("select",{children:["center","north","northeast","east","southeast","south","southwest","west","northwest"].map((function(e){return Object(c.jsx)("option",{children:e})}))})]}),Object(c.jsx)("p",{children:Object(c.jsx)("img",{src:r})})]})}),h=(n(41),function(e){var t=Object(s.useState)("https://i.imgur.com/3a0qwRe.jpeg"),n=Object(j.a)(t,2),a=n[0],i=n[1];return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(u,{selectedImageUrl:a,onImageLoad:function(e){i(e.target.value)}}),Object(c.jsxs)("div",{className:"rowC",children:[Object(c.jsx)(o,{ImageURL:a}),Object(c.jsx)(d,{ImageURL:a})]})]})});i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e2e631d2.chunk.js.map