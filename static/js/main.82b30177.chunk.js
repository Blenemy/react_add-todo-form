(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(3),c=a(7),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},h=function(e){var t=e.todo,a=t.completed,n=t.user,i=t.title,r=t.id;return Object(m.jsxs)("article",{"data-id":r,className:u()({TodoInfo:!0,"TodoInfo--completed":a}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:i}),n&&Object(m.jsx)(j,{user:n})]})},b=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(h,{todo:e},e.id)}))})};var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,l.find((function(e){return e.id===t}))||null)});var t})),p=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)("0"),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)(f),h=Object(s.a)(j,2),p=h[0],O=h[1],x=Object(o.useState)(!1),v=Object(s.a)(x,2),y=v[0],S=v[1];function N(e){return"input"===e?y&&""===a.trim():y&&"0"===d}return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),"0"!==d&&""!==a.trim()){var t=Math.max.apply(Math,Object(r.a)(p.map((function(e){return e.id})))),i=l.find((function(e){return e.name===d}));i&&(O((function(e){return[].concat(Object(r.a)(e),[{id:t+1,userId:i.id,completed:!1,title:a,user:i}])})),u("0"),n(""),S(!1))}else S(!0)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"title",children:["Title:",Object(m.jsx)("input",{id:"title",placeholder:"Enter a title",type:"text","data-cy":"titleInput",value:a,onChange:function(e){n(e.target.value)}})]}),N("input")&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"",children:["User:",Object(m.jsxs)("select",{"data-cy":"userSelect",value:d,onChange:function(e){u(e.target.value)},children:[Object(m.jsx)("option",{value:"0",children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),N("select")&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(b,{todos:p})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.82b30177.chunk.js.map