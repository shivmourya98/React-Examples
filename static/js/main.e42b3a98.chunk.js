(this["webpackJsonpreact-table-example"]=this["webpackJsonpreact-table-example"]||[]).push([[0],{66:function(e,t,a){},67:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=(a(66),a(67),a(33)),o=a(26),l=a(47),d=a(4),j=a(112),b=a(22),h=a(130),x=a(121),u=a(122),O=a(123),p=a(126),g=a(44),f=a(125),m=a(124),w=a(53),y=a.n(w),v=a(54),S=a.n(v),k=a(55),C=a.n(k),N=a(127),R=a(128),E=a(129),B=a(48),I=a.n(B),U=a(49),F=a.n(U),P=a(116),T=a(120),L=a(119),z=a(114),G=a(117),A=a(118),D=a(3),H=Object(j.a)({color:{color:"red"},table:{minWidth:650},t:{"& .th":{backgroundColor:"#fff",overflow:"hidden"},"& .tr":{backgroundColor:"#fff",overflow:"hidden"},"& .sticky":{overflow:"auto",position:"sticky",zIndex:1,width:"fit-content"}}});function J(e,t,a,n,r){return{name:e,calories:t,fat:a,carbs:n,protein:r}}var W=[J("Frozen yoghurt",159,6,24,4),J("Ice cream sandwich",237,9,37,4.3),J("Eclair",262,16,24,6),J("Cupcake",305,3.7,67,4.3),J("Gingerbread",356,16,49,3.9)];var M=function(){var e=H(),t=Object(n.useState)(0),a=Object(o.a)(t,2),r=(a[0],a[1],Object(n.useState)(5)),i=Object(o.a)(r,2),c=(i[0],i[1],Object(n.useState)([{currency:"EUR",amount:1e4,date:"2020-01-01"},{currency:"EUR",amount:11e3,date:"2020-02-01"},{currency:"GBP",amount:12e3,date:"2020-01-01"},{currency:"EUR",amount:1e4,date:"2020-01-01"},{currency:"EUR",amount:11e3,date:"2020-02-01"},{currency:"EUR",amount:1e4,date:"2020-01-01"},{currency:"EUR",amount:11e3,date:"2020-02-01"},{currency:"GBP",amount:12e3,date:"2020-01-01"},{currency:"EUR",amount:1e4,date:"2020-01-01"},{currency:"EUR",amount:11e3,date:"2020-02-01"}])),s=Object(o.a)(c,2);return s[0],s[1],Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{className:e.color,children:"Testing"}),Object(D.jsx)("div",{style:{width:"100%",position:"relative"},children:Object(D.jsx)(z.a,{style:{height:"200px"},className:e.color,children:Object(D.jsxs)(P.a,{stickyHeader:!0,"aria-label":"simple table",children:[Object(D.jsx)(G.a,{className:"th",children:Object(D.jsxs)(A.a,{children:[Object(D.jsx)(L.a,{style:{width:"180px",position:"absolute",left:0,background:"#fafafa",zIndex:3},children:"Dessert (100g serving)"}),Object(D.jsx)(L.a,{style:{width:"200px",position:"absolute",left:"180px",background:"#fafafa",zIndex:3,borderRight:"1px solid",borderColor:"rgba(224, 224, 224, 1)"},children:"Calories"}),Object(D.jsx)(L.a,{style:{width:"300px"},children:"Fat\xa0(g)"}),Object(D.jsx)(L.a,{style:{width:"300px"},children:"Carbs\xa0(g)"}),Object(D.jsx)(L.a,{style:{width:"300px"},children:"Protein\xa0(g)"})]})}),Object(D.jsx)(T.a,{children:W.map((function(e){return Object(D.jsxs)(A.a,{className:"tr",children:[Object(D.jsx)(L.a,{scope:"row",style:{width:"180px",position:"absolute",left:"0px",background:"white"},children:e.name}),Object(D.jsx)(L.a,{style:{width:"200px",position:"absolute",left:"180px",background:"white",borderRight:"1px solid",borderColor:"rgba(224, 224, 224, 1)"},children:e.calories}),Object(D.jsx)(L.a,{style:{width:"300px"},children:e.fat}),Object(D.jsx)(L.a,{style:{width:"300px"},children:e.carbs}),Object(D.jsx)(L.a,{style:{width:"300px"},children:e.protein})]},e.name)}))})]})})})]})},q=Object(j.a)({color:{color:"green"}});var K=function(){var e=q();return Object(D.jsx)("h1",{className:e.color,children:"Testing"})},Q=240,V=Object(j.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Q,"px)"),marginLeft:Q,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Q,flexShrink:0},drawerPaper:{width:Q},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240,marginTop:64,textAlign:"left"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function X(){var e=V(),t=Object(b.a)(),a=r.a.useState(!1),n=Object(o.a)(a,2),i=n[0],c=n[1];return Object(D.jsxs)("div",{className:e.root,children:[Object(D.jsx)(x.a,{}),Object(D.jsx)(u.a,{position:"fixed",className:Object(d.a)(e.appBar,Object(s.a)({},e.appBarShift,i)),children:Object(D.jsxs)(O.a,{children:[Object(D.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(d.a)(e.menuButton,i&&e.hide),children:Object(D.jsx)(y.a,{})}),Object(D.jsx)(g.a,{variant:"h6",noWrap:!0,children:"React-Table-Example"})]})}),Object(D.jsxs)(h.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper},children:[Object(D.jsx)("div",{className:e.drawerHeader,children:Object(D.jsx)(m.a,{onClick:function(){c(!1)},children:"ltr"===t.direction?Object(D.jsx)(S.a,{}):Object(D.jsx)(C.a,{})})}),Object(D.jsx)(f.a,{}),Object(D.jsx)(p.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(D.jsxs)(N.a,{button:!0,children:[Object(D.jsx)(R.a,{children:t%2===0?Object(D.jsx)(I.a,{}):Object(D.jsx)(F.a,{})}),Object(D.jsx)(E.a,{primary:e})]},e)}))}),Object(D.jsx)(f.a,{}),Object(D.jsx)(p.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(D.jsxs)(N.a,{button:!0,children:[Object(D.jsx)(R.a,{children:t%2===0?Object(D.jsx)(I.a,{}):Object(D.jsx)(F.a,{})}),Object(D.jsx)(E.a,{primary:e})]},e)}))})]}),Object(D.jsxs)("main",{className:Object(d.a)(e.content,Object(s.a)({},e.contentShift,i)),children:[Object(D.jsx)(K,{}),Object(D.jsx)(M,{})]})]})}var Y=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(X,{})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[75,1,2]]]);
//# sourceMappingURL=main.e42b3a98.chunk.js.map