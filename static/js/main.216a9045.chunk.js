(this.webpackJsonptransform3dvisualizer=this.webpackJsonptransform3dvisualizer||[]).push([[0],{10:function(A,e,t){},12:function(A,e,t){"use strict";t.r(e);var c=t(1),s=t.n(c),j=t(4),r=t.n(j),i=(t(9),t(2)),n=(t(10),t(0)),g=function(){var A=Object(c.useState)(1600),e=Object(i.a)(A,2),t=e[0],s=e[1],j=Object(c.useState)(0),r=Object(i.a)(j,2),g=r[0],I=r[1],a=Object(c.useState)(0),B=Object(i.a)(a,2),k=B[0],d=B[1],C=Object(c.useState)(0),o=Object(i.a)(C,2),l=o[0],R=o[1],O=Object(c.useState)(0),h=Object(i.a)(O,2),q=h[0],E=h[1],S=Object(c.useState)(0),b=Object(i.a)(S,2),x=b[0],p=b[1],F=Object(c.useState)(0),w=Object(i.a)(F,2),V=w[0],Q=w[1],u=Object(c.useState)(!1),y=Object(i.a)(u,2),K=y[0];y[1];return console.log(q),console.log(x),console.log(g),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"header",children:"Transform 3D Visualizer"}),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsxs)("div",{className:"values",children:[Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)("h2",{children:" Translate "}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("h3",{children:"X:"}),Object(n.jsx)("input",{type:"number",placeholder:"0",onChange:function(A){return E(A.target.value)}}),Object(n.jsx)("h5",{children:"px"})]}),Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("h3",{children:"Y:"}),Object(n.jsx)("input",{type:"number",placeholder:"0",onChange:function(A){return p(A.target.value)}}),Object(n.jsx)("h5",{children:"px"})]}),Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("h3",{children:"Z:"}),Object(n.jsx)("input",{type:"number",placeholder:"0",onChange:function(A){return Q(A.target.value)}}),Object(n.jsx)("h5",{children:"px"})]})]})]}),Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)("h2",{children:" Rotate "}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("h3",{children:"X:"}),Object(n.jsx)("input",{type:"number",placeholder:"0",onChange:function(A){return I(A.target.value)}}),Object(n.jsx)("h5",{children:"deg"})]}),Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("h3",{children:"Y:"}),Object(n.jsx)("input",{type:"number",placeholder:"0",onChange:function(A){return d(A.target.value)}}),Object(n.jsx)("h5",{children:"deg"})]}),Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("h3",{children:"Z:"}),Object(n.jsx)("input",{type:"number",placeholder:"0",onChange:function(A){return R(A.target.value)}}),Object(n.jsx)("h5",{children:"deg"})]})]})]}),Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)("h2",{children:" Perspective "}),Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("h3",{style:{color:"#12121E"},children:"Z:"}),Object(n.jsx)("input",{type:"number",placeholder:"1600",onChange:function(A){return s(A.target.value)}}),Object(n.jsx)("h5",{children:"px | Do not change perspective if you don't know how it works."})]})]}),Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)("h2",{children:"Css code"}),Object(n.jsxs)("div",{className:" css-code",children:[Object(n.jsxs)("p",{children:[".element {",Object(n.jsx)("div",{}),"transform: perspective(",t,"px) rotateX(",g,"deg) rotateY(",k,"deg) rotateZ(",l,"deg) translateX(",q,"px) translateY(",x,"px) translateZ(",V,"px);",Object(n.jsx)("div",{}),"}"]}),Object(n.jsx)("div",{})]})]})]}),Object(n.jsxs)("div",{className:"visualizer",style:{transformStyle:"".concat(K?"preserve-3d":"flat")},children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",style:{width:"40rem",height:"30rem",transform:"perspective(".concat(t>0?t:1600,"px) \n                        rotateX(").concat(""!==g?g:0,"deg) \n                        rotateY(").concat(""!==k?k:0,"deg) \n                        rotateZ(").concat(""!==l?l:0,"deg) \n                        translateX(").concat(""!==q?q:0,"px) \n                        translateY(").concat(""!==x?x:0,"px) \n                        translateZ(").concat(""!==V?V:0,"px)"),transition:"all ease 1600ms"}}),Object(n.jsx)("div",{className:"border"})]}),Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsxs)("h4",{children:["Contribute to project on ",Object(n.jsx)("a",{target:"_blank",href:"https://github.com/ObaidNadeem/Transform-3D-Visualizer",children:" GITHUB "})," "]}),Object(n.jsxs)("h4",{children:["Developed by ",Object(n.jsx)("a",{target:"_blank",href:"https://obaidnadeem.surge.sh",children:"Obaid Nadeem"})]})]})]})]})};var I=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(g,{})})},a=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(e){var t=e.getCLS,c=e.getFID,s=e.getFCP,j=e.getLCP,r=e.getTTFB;t(A),c(A),s(A),j(A),r(A)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),a()},9:function(A,e,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.216a9045.chunk.js.map