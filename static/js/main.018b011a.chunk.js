(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],{23:function(e,c,t){},4:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(2),n=t.n(s),r=t(15),i=t.n(r),o=(t(23),t(5)),l=t.n(o),d=t(16),j=t(6),u=(t(4),function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsxs)("div",{className:"jumbo",children:[Object(a.jsxs)("h1",{className:"display-1 text-white",children:[Object(a.jsx)("span",{className:"material-icons",children:"fastfood"}),"Food Recipee"]}),Object(a.jsxs)("div",{className:"input-group w-50 mx-auto",children:[Object(a.jsx)("input",{type:"text",className:"form-control",value:e.search,onChange:e.onInputChange,placeholder:"Enter Recipe Name"}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("button",{onClick:e.onSearch,className:"input-group-text",style:{width:"100px"},children:Object(a.jsx)("span",{className:"material-icons mx-auto",style:{fontSize:"30px"},children:"search"})})})]})]})})})})}),p=function(e){var c=e.recipes;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"card-columns mt-3",children:c.map((function(e){return Object(a.jsxs)("div",{className:"card mb-3 text-center",children:[Object(a.jsx)("img",{className:"img-fluid shadow-sm",style:{width:"100%",borderRadius:"5px"},src:e.recipe.image}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("h5",{children:e.recipe.label})}),Object(a.jsx)("ul",{className:"list-group list-group-flush",children:e.recipe.ingredientLines.map((function(e){return Object(a.jsx)("li",{className:"list-group-item ",children:e})}))})]})}))})})},h=t(17),m=t.n(h);var b=function(){var e=Object(s.useState)("chicken"),c=Object(j.a)(e,2),t=c[0],n=c[1],r=Object(s.useState)([]),i=Object(j.a)(r,2),o=i[0],h=i[1];Object(s.useEffect)((function(){b()}),[]);var b=function(){var e=Object(d.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("98597ba6","&app_key=").concat("54515b0fd8c02d0a83e082a7e2924152"));case 2:c=e.sent,h(c.data.hits),console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{search:t,onInputChange:function(e){n(e.target.value)},onSearch:function(){b()}}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(p,{recipes:o})})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.018b011a.chunk.js.map