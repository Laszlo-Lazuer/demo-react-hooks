(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(13)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(3),r=a.n(c),l=(a(11),a(4)),i=a(1);a(12);function u(e){var t=e.addTodo,a=Object(o.useState)(""),c=Object(i.a)(a,2),r=c[0],l=c[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),l(""))}},n.a.createElement("input",{type:"text",className:"input",value:r,onChange:function(e){return l(e.target.value)}}))}function s(e){var t=e.todo;return n.a.createElement("div",{className:"todo"},t.text)}var d=function(){var e=Object(o.useState)([{text:"Learn about React"},{text:"Meet friend for lunch"},{text:"Build really cool todo app"}]),t=Object(i.a)(e,2),a=t[0],c=t[1];return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"todo-list"},n.a.createElement("h1",null,"React hooks CRUD ToDo Example"),n.a.createElement("h3",null,"Followed Tutorial from Scotch.io + structure cleanup"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components"},"Build a React To-Do App with React Hooks (No Class Components)")),a.map(function(e,t){return n.a.createElement(s,{key:t,index:t,todo:e})}),n.a.createElement(u,{addTodo:function(e){var t=[].concat(Object(l.a)(a),[{text:e}]);c(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.20958d83.chunk.js.map