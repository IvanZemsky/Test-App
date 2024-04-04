"use strict";(self.webpackChunks_quest_2=self.webpackChunks_quest_2||[]).push([[396],{396:(e,s,t)=>{t.r(s),t.d(s,{default:()=>B});var a=t(60);const r={testCardBorder:"TestCard_testCardBorder__TWVGp",testCard:"TestCard_testCard__T4N1m",imgWrap:"TestCard_imgWrap__Fa5iL",testImg:"TestCard_testImg__SsxJ5",name:"TestCard_name__enVoe",desc:"TestCard_desc__eYPc7",startBtn:"TestCard_startBtn__vdjli"};var n=t(12),l=t(496);const c=(0,a.memo)((e=>{let{test:s}=e;const{id:t,name:a,desc:c,cover:i}=s;return(0,l.jsx)("div",{className:r.testCardBorder,children:(0,l.jsxs)("div",{className:r.testCard,children:[(0,l.jsx)("div",{className:r.imgWrap,children:(0,l.jsx)("img",{className:r.testImg,src:i,alt:"Cover of the test: ".concat(a)})}),(0,l.jsxs)("div",{className:r.info,children:[(0,l.jsx)("h2",{className:r.name,children:a}),(0,l.jsx)("p",{className:r.desc,children:c})]}),(0,l.jsx)(n.cH,{className:r.startBtn,to:"/tests/".concat(t),children:"\u041d\u0430\u0447\u0430\u0442\u044c"})]})})})),i={testCards:"Tests_testCards__bYhlD",testsContent:"Tests_testsContent__u5LrQ"},d=()=>(0,l.jsxs)("div",{children:["\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e ",":("]});var o=t(624),_=t(420);const m={panel:"TestsPanel_panel__mHnvH",content:"TestsPanel_content__j0sdp"},v="TestsSearch_testsSearch__lf5+8";var h=t(416);const u=e=>{let{searchInputValue:s,setSearchInputValue:t}=e;const a=(0,o.OY)(),r=(0,o.w1)((e=>e.filter.filters.searchText));return(0,l.jsx)("input",{type:"text",className:v,placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:e=>a((0,h.Wo)(e.target.value)),value:r})},g="CategoryList_categories__lurC7",x="Category_categoryText__dn2Zq",j="Category_categoryRadio__jjO74",C="Category_category__yy3QZ",p=e=>{let{category:s}=e;const t=(0,o.OY)(),a=(0,o.w1)((e=>e.filter.filters.category)),r=s.value===a;return(0,l.jsxs)("div",{className:C,children:[(0,l.jsx)("input",{className:j,type:"radio",id:s.value,name:"category",value:s.value,defaultChecked:r,onChange:()=>{return e=s.value,void t((0,h.S0)(e));var e}}),(0,l.jsx)("label",{className:x,htmlFor:s.value,children:s.name})]})};function y(){return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"40",hanging:"40",children:(0,l.jsx)("path",{d:"M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2zm0 7A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9zM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5zM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9z"})})}const N="AllCategoriesBtn_categoriesBtn__p0ita",w=()=>(0,l.jsx)("button",{className:N,children:(0,l.jsx)(y,{})}),f=[{name:"\u0412\u0441\u0435",value:"all"},{name:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",value:"programming"},{name:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430",value:"math"},{name:"\u042f\u0437\u044b\u043a\u0438",value:"languages"},{name:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f",value:"history"}],T=()=>(0,l.jsxs)("div",{className:g,children:[f.map((e=>(0,l.jsx)(p,{category:e},e.value))),(0,l.jsx)(w,{})]}),A=()=>(0,l.jsx)("div",{className:m.panel,children:(0,l.jsxs)("div",{className:[m.content,"wrapper"].join(" "),children:[(0,l.jsx)(u,{}),(0,l.jsx)(T,{})]})}),B=()=>{const{previews:e,error:s,isLoading:t}=function(){const e=(0,o.w1)((e=>e.filter.filters.searchText)),s=(0,o.w1)((e=>e.filter.filters.category));let t=[];const{data:a,error:r,isLoading:n}=_.q.useFetchPreviewsByCategoryQuery(s);var l,c;return a&&(l=e,c=["name","desc"],t=a.filter((e=>{const s=l.toLowerCase();return c.reduce(((t,a)=>t||e[a].toLowerCase().includes(s)),!1)}))),{previews:t,error:r,isLoading:n}}();return(0,l.jsxs)("main",{className:i.tests,children:[(0,l.jsx)(A,{}),(0,l.jsx)("div",{className:[i.testsContent,"wrapper"].join(" "),children:(0,l.jsx)("div",{className:i.testCards,children:e?e.map((e=>(0,l.jsx)(c,{test:e},e.id))):(0,l.jsx)(d,{})})})]})}}}]);
//# sourceMappingURL=396.2b7e5d3c.chunk.js.map