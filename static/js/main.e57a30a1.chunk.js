(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),a=n(2),o=n(1),i=n.n(o),r=(n(13),n(14),n(15),n(16),n(0)),l=function(){return Object(r.jsx)("div",{className:"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},u=i.a.memo((function(e){var t=e.userPost,n=e.selectedPostId,c=e.selectPost;return Object(r.jsxs)("div",{className:"PostsList",children:[Object(r.jsx)("h2",{children:"Posts:"}),Object(r.jsx)("ul",{className:"PostsList__list",children:t.length?t.map((function(e){return Object(r.jsxs)("li",{className:"PostsList__item",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("b",{children:["[User #",e.userId,"]: \xa0"]}),e.title]}),Object(r.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(n!==e.id?e.id:0)},children:n!==e.id?"Open":"Close"})]},e.id)})):Object(r.jsx)(l,{})})]})})),j=n(8),b=n(7),d="https://mate.academy/students-api";n(18);var m=i.a.memo((function(e){var t=e.createComment,n=e.postId,c=Object(o.useState)(""),s=Object(a.a)(c,2),i=s[0],l=s[1],u=Object(o.useState)(""),j=Object(a.a)(u,2),b=j[0],m=j[1],h=Object(o.useState)(""),O=Object(a.a)(h,2),f=O[0],p=O[1],x=Object(o.useCallback)((function(e){e.preventDefault(),i&&b&&f&&function(e,t,n,c){return fetch("".concat(d,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({postId:e,name:t,email:n,body:c})}).then((function(e){return e.json()}))}(n,i,b,f).then((function(e){return t(e)})),l(""),m(""),p("")}),[n,i,b,f]);return Object(r.jsxs)("form",{className:"NewCommentForm",onSubmit:x,children:[Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("input",{type:"text",name:"name",value:i,onChange:function(e){return l(e.target.value)},placeholder:"Your name",className:"NewCommentForm__input"})}),Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("input",{type:"text",name:"email",value:b,onChange:function(e){return m(e.target.value)},placeholder:"Your email",className:"NewCommentForm__input"})}),Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("textarea",{name:"body",value:f,onChange:function(e){return p(e.target.value)},placeholder:"Type comment here",className:"NewCommentForm__input"})}),Object(r.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})})),h=(n(19),i.a.memo((function(e){var t=e.selectedPostId,n=Object(o.useState)(null),c=Object(a.a)(n,2),s=c[0],i=c[1],l=Object(o.useState)([]),u=Object(a.a)(l,2),h=u[0],O=u[1],f=Object(o.useState)(!0),p=Object(a.a)(f,2),x=p[0],v=p[1],_=Object(o.useCallback)((function(e){var t;(t=e,fetch("".concat(d,"/posts/").concat(t)).then((function(e){return e.json()}))).then((function(e){return i(e)}))}),[]),N=Object(o.useCallback)((function(e){var t;(t=e,fetch("".concat(d,"/comments?postId=").concat(t)).then((function(e){return e.json()}))).then((function(e){return O(e)}))}),[]),C=Object(o.useCallback)((function(e){O((function(t){return[].concat(Object(b.a)(t),[Object(j.a)({id:Math.floor(1e6*Math.random())},e)])}))}),[]),P=Object(o.useCallback)((function(e){!function(e){fetch("".concat(d,"/comments/").concat(e),{method:"DELETE"}).then((function(e){return e.json()}))}(e),O((function(t){return t.filter((function(t){return t.id!==e}))}))}),[]);return Object(o.useEffect)((function(){i(null),O([]),N(t),_(t)}),[t,_,N]),Object(r.jsxs)("div",{className:"PostDetails",children:[Object(r.jsx)("h2",{children:"Post details:"}),s&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{className:"PostDetails__post",children:Object(r.jsx)("p",{children:s.body})}),Object(r.jsxs)("section",{className:"PostDetails__comments",children:[h.length?Object(r.jsx)("button",{type:"button",className:"button",onClick:function(){return v(!x)},children:"".concat(x?"Hide":"Show"," ").concat(h.length," comments")}):"There are no comments yet!",x&&Object(r.jsx)("ul",{className:"PostDetails__list",children:h.map((function(e){return Object(r.jsxs)("li",{className:"PostDetails__list-item",children:[Object(r.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return P(e.id)},children:"X"}),Object(r.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(r.jsx)(m,{postId:t,createComment:C})})})]})]})}))),O=function(){var e=Object(o.useState)("0"),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)(0),i=Object(a.a)(s,2),l=i[0],j=i[1],b=Object(o.useState)([]),m=Object(a.a)(b,2),O=m[0],f=m[1],p=Object(o.useCallback)((function(e){j(e)}),[]);return Object(o.useEffect)((function(){var e;"0"!==n?(e=n,fetch("".concat(d,"/posts?userId=").concat(e)).then((function(e){return e.json()}))).then((function(e){f(e)})):fetch("".concat(d,"/posts")).then((function(e){return e.json()})).then((function(e){return f(e)}))}),[n]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App__header",children:Object(r.jsxs)("label",{children:["Select a user: \xa0",Object(r.jsxs)("select",{className:"App__user-selector",value:n,onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{value:"0",children:"All users"}),Object(r.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(r.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(r.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(r.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(r.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(r.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(r.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(r.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(r.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(r.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(r.jsxs)("main",{className:"App__main",children:[Object(r.jsx)("div",{className:"App__sidebar",children:Object(r.jsx)(u,{userPost:O,selectedPostId:l,selectPost:p})}),Object(r.jsx)("div",{className:"App__content",children:Object(r.jsx)(h,{selectedPostId:l})})]})]})};s.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e57a30a1.chunk.js.map