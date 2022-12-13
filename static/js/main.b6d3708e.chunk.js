(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(7),r=c(15),o=c(6),i=c(13),l=c(14),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(4),b=function(e){return{type:"filter/SET_QUERY",payload:e}},f=function(e){return{type:"filter/SET_STATUS",payload:e}},m={query:"",status:"all"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"todos/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},v=Object(o.combineReducers)({currentTodo:j,filter:O,todos:p}),y=Object(o.createStore)(v,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),N=c(3),g=c(0);c(23),c(24);function T(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var E=s.b,w=s.c,S=c(5),k=c.n(S),C=c(1),_=function(){var e=E(),t=w((function(e){return e.currentTodo})),c=function(e){return(null===t||void 0===t?void 0:t.id)===e},n=w((function(e){var t=e.filter,c=e.todos,n=t.query.toLowerCase();return c.filter((function(e){switch(t.status){case"active":return!e.completed;case"completed":return e.completed;default:return e}})).filter((function(e){return e.title.toLowerCase().includes(n)}))}));return 0===n.length?Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:n.map((function(t){var n=t.id,a=t.title,s=t.completed;return Object(C.jsxs)("tr",{"data-cy":"todo",className:k()({"has-background-info-light":c(n)}),children:[Object(C.jsx)("td",{className:"is-vcentered",children:n}),Object(C.jsx)("td",{className:"is-vcentered",children:s&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:k()({"has-text-danger":!s,"has-text-success":s}),children:a})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(d(t))},children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:k()("far",{"fa-eye":!c(n),"fa-eye-slash":c(n)})})})})})]},n)}))})]})},R=function(){var e=E(),t=w((function(e){return e.filter})),c=t.query,n=t.status;return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(t){e(f(t.target.value))},children:[Object(C.jsx)("option",{value:"all",children:"All"}),Object(C.jsx)("option",{value:"active",children:"Active"}),Object(C.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){e(b(t.target.value))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(C.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(b(""))}})})]})]})},q=(c(26),function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})}),A=function(){var e=Object(g.useState)(null),t=Object(N.a)(e,2),c=t[0],n=t[1],a=E(),s=w((function(e){return e.currentTodo}));if(!s)throw new Error("There is no todo");var r=s.id,o=s.title,i=s.completed,l=s.userId;Object(g.useEffect)((function(){(function(e){return T("/users/".concat(e))})(l).then(n).catch((function(){throw new Error("There is no user whith such id")}))}),[s]);return Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),c?Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(r)}),Object(C.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return a(u())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:o}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(C.jsx)("strong",{className:k()({"has-text-success":i,"has-text-danger":!i}),children:i?"Done":"Planned"})," by ",Object(C.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]}):Object(C.jsx)(q,{})]})},L=function(){var e=Object(g.useState)(!1),t=Object(N.a)(e,2),c=t[0],n=t[1],a=E(),s=null!==w((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){n(!0),T("/todos").then((function(e){return a(x(e))})).catch((function(){throw new Error("There is no todos")})).finally((function(){return n(!1)}))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(R,{})}),Object(C.jsx)("div",{className:"block",children:c?Object(C.jsx)(q,{}):Object(C.jsx)(_,{})})]})})}),s&&Object(C.jsx)(A,{})]})},U=function(){return Object(C.jsx)(s.a,{store:y,children:Object(C.jsx)(r.a,{children:Object(C.jsx)(L,{})})})};a.a.render(Object(C.jsx)(U,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b6d3708e.chunk.js.map