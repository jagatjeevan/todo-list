(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(14),i=n.n(a),o=(n(23),n(3)),s=n(4),l=n(6),u=n(5),d=n(18),h=n(7),f=n.n(h),j="none",v="search",b="create";var p=n(0);function g(e){var t=e.mode===j?"Press `/` to search and `N` to create a new item.":"Press `Esc` to cancel.";return Object(p.jsx)("p",{className:"info",children:t})}var O=n(9),m=n(10);var x=Object(m.a)(Object(m.c)("value","setValue",(function(e){return console.log("got props",e),e.value||""})),Object(m.b)({handleKeyUp:function(e){var t=e.addNew,n=e.setValue;return function(e){var c=e.target.value.trim();e.keyCode===f.a.KEY_RETURN&&c&&(t(c),n(""))}},handleChange:function(e){var t=e.setValue;return function(e){t(e.target.value)}}}))((function(e){var t=e.value,n=e.handleChange,c=e.handleKeyUp;return Object(p.jsx)("input",{autoFocus:!0,type:"text",className:"form-control add-todo",value:t,onKeyUp:c,onChange:n,placeholder:"Add New"})}));function y(e){var t=e.query,n=e.setSearchQuery;return Object(p.jsx)("input",{type:"text",autoFocus:!0,className:"form-control search",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Search"})}function w(e){var t=e.mode,n=e.addNew,c=e.query,r=e.setSearchQuery;switch(t){case b:return Object(p.jsx)(x,{addNew:n});case v:return Object(p.jsx)(y,{query:c,setSearchQuery:r});default:return null}}function k(e){return Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:"Things To Do"}),Object(p.jsx)(w,Object(O.a)({},e))]})}var S=n(2);function N(e,t){var n={};return t.forEach((function(t){n[t]=e[t].bind(e)})),n}function C(e,t){return r.a.Children.map(e,(function(e){return r.a.cloneElement(e,t)}))}var E="active",L="completed";function F(e){var t=function(){var e;return e={},Object(S.a)(e,"all","All"),Object(S.a)(e,E,"Active"),Object(S.a)(e,L,"Completed"),Object(S.a)(e,"synced","Synced"),e}(),n=e.filter,c=e.changeFilter,r=function(e){return e===n?"selected":""};return Object(p.jsx)("ul",{className:"filters list-unstyled clearfix",children:Object.keys(t).map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){return c(e)},className:r(e),children:t[e]})},e)}))})}function A(e){var t=e.mode,n=e.changeMode,c=function(){return t===b},r=function(){return t===v};return Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{title:"Add New",className:"button add "+(c()?"selected":""),onClick:function(){return n(c()?j:b)}}),Object(p.jsx)("a",{title:"Search",className:"button search "+(r()?"selected":""),onClick:function(){return n(r()?j:v)}})]})}function U(e){var t=e.count,n=e.filter,c=e.changeFilter;return Object(p.jsxs)("footer",{className:"clearfix",children:[Object(p.jsx)("div",{className:"pull-left buttons",children:Object(p.jsx)(A,Object(O.a)({},e))}),Object(p.jsx)("div",{className:"pull-left",children:"".concat(t," items left")}),Object(p.jsx)("div",{className:"pull-right",children:Object(p.jsx)(F,{filter:n,changeFilter:c})})]})}var K=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={checked:c.props.checked},c}return Object(s.a)(n,[{key:"handleChange",value:function(e){var t=e.target.checked;this.setState({checked:t}),this.props.onChange(t)}},{key:"render",value:function(){return Object(p.jsx)("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleChange.bind(this)})}}]),n}(c.Component);function W(e){var t=e.data,n=e.changeStatus,c="todo-item ui-state-default "+(!0===t.completed?"completed":"pending");return Object(p.jsx)("li",{className:c,children:Object(p.jsx)("div",{className:"checkbox",children:Object(p.jsxs)("label",{children:[Object(p.jsx)(K,{checked:t.completed,onChange:function(e){return n(t.id,e)}})," ",t.text]})})})}function M(e){var t=e.items,n=e.changeStatus;return 0===t.length?Object(p.jsx)("p",{className:"alert alert-info",children:"There are no items."}):Object(p.jsx)("ul",{className:"list-unstyled",children:t.map((function(e){return Object(p.jsx)(W,{data:e,changeStatus:n},e.id)}))})}function T(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),r=n[0],a=n[1],i=e.data,o=i.list,s=i.filter,l=i.mode,u=i.query,h=e.actions,f=h.addNew,j=h.changeFilter,v=h.changeStatus,b=h.changeMode,O=h.setSearchQuery,m=o.length,x=function(e,t){var n=t.trim().toLowerCase();return e.filter((function(e){var t,c;return t=e.text.toLowerCase(),c=n,-1!==t.indexOf(c)}))}(function(e,t){switch(t){case L:return e.filter((function(e){return!0===e.completed}));case E:return e.filter((function(e){return!0!==e.completed}));default:return e}}(o,s),u),y=navigator.onLine;function w(e){console.log(e),y?(a(""),console.log("It is online")):(a("offline"),console.log("It is offline"))}return window.addEventListener("online",w),window.addEventListener("offline",w),Object(p.jsx)("div",{className:"container ".concat(r),children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"todolist",children:[Object(p.jsx)(k,{addNew:f,mode:l,query:u,setSearchQuery:O}),Object(p.jsx)(M,{items:x,changeStatus:v}),Object(p.jsx)(U,{count:m,filter:s,changeFilter:j,mode:l,changeMode:b}),Object(p.jsx)(g,{mode:l})]})})})}var q=n(17),P=n.n(q);var Q=1;var R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={query:"",mode:b,filter:"all",list:[{id:1,text:"Learn Javascript",completed:!1},{id:2,text:"Learn React",completed:!1},{id:3,text:"Build a React App",completed:!1}]},e}return Object(s.a)(n,[{key:"render",value:function(){var e=C(this.props.children,{data:this.state,actions:N(this,["addNew","changeFilter","changeStatus","changeMode","setSearchQuery"])});return Object(p.jsx)("div",{children:e})}},{key:"addNew",value:function(e){var t=function(e,t){var n=Object.assign({id:[{id:1,text:"Learn Javascript",completed:!1},{id:2,text:"Learn React",completed:!1},{id:3,text:"Build a React App",completed:!1}].length+Q++},t);return e.concat([n])}(this.state.list,{text:e,completed:!1});this.setState({list:t})}},{key:"changeFilter",value:function(e){this.setState({filter:e})}},{key:"changeStatus",value:function(e,t){var n=function(e,t,n){var c=e.findIndex((function(e){return e.id===t}));return P()(e,Object(S.a)({},c,{completed:{$set:n}}))}(this.state.list,e,t);this.setState({list:n})}},{key:"changeMode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;this.setState({mode:e})}},{key:"setSearchQuery",value:function(e){this.setState({query:e||""})}}]),n}(c.Component),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("keydown",this.handleKeyUp.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyUp)}},{key:"handleKeyUp",value:function(e){var t=this.props.data.mode,n=function(e,t){switch(e){case j:if(t===h.KEY_SLASH)return v;if(t===h.KEY_N)return b;break;default:if(t===h.KEY_ESCAPE)return j}return e}(t,e.keyCode);n!==t&&(e.preventDefault(),this.props.actions.changeMode(n))}},{key:"render",value:function(){return Object(p.jsx)("div",{children:C(this.props.children,this.props)})}}]),n}(c.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)(R,{children:Object(p.jsx)(B,{children:Object(p.jsx)(T,{})})})}}]),n}(c.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(29),n(30);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Y(t,e)}))}}(),_()}},[[31,1,2]]]);
//# sourceMappingURL=main.c2c06971.chunk.js.map