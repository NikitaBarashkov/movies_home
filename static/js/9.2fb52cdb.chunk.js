"use strict";(self.webpackChunkmovies_app=self.webpackChunkmovies_app||[]).push([[9],{8009:function(e,n,a){a.r(n),a.d(n,{default:function(){return q}});var r=a(4942),s=a(9439),t=a(5048),i=a(7689),o=a(2791),l=a(1694),u=a.n(l),c=a(5942),m="ChangeFormButton_btn__+QK3d",g="ChangeFormButton_btn__active__R4sgw",h=a(184),d=function(e){var n=e.text,a=e.onClick,s=e.active;return(0,h.jsx)("button",{type:"button",className:u()(m,(0,r.Z)({},g,s)),onClick:a,children:n})},p=a(2357),_=a(2325),x=a(2134),f=function(e,n,a){var r=(0,t.v9)((function(e){return e.users.users})),s=(0,t.I0)(),i=(0,x.s)().resetSearchGoal;return function(t){t.preventDefault(),0!==r.length&&r.some((function(a){return a.username===e||a.email===n}))?s((0,_.sy)({isWrong:!0,wrongValue:"This name or email is already registered"})):(s((0,_.vp)(e)),s((0,p.cn)({username:e,email:n,password:a})),i())}},v=function(){var e=(0,o.useState)(""),n=(0,s.Z)(e,2),a=n[0],r=n[1],t=(0,o.useState)(""),i=(0,s.Z)(t,2),l=i[0],u=i[1],c=(0,o.useState)(""),m=(0,s.Z)(c,2),g=m[0],h=m[1];return{username:a,changeUsername:function(e){return r(String(e.target.value).trim())},email:l,changeEmail:function(e){return u(String(e.target.value).trim())},password:g,changePassword:function(e){return h(String(e.target.value).trim())}}},j="SignUpForm_form__xz79d",w="SignUpForm_fieldset__kLszR",S="SignUpForm_input__lQhOm",N="SignUpForm_label__rqNlo",b="SignUpForm_btn__submit__zK-Au",F="SignUpForm_warning_title__XeRqj",C=function(){var e=(0,t.v9)((function(e){return e.authorization.invalidLogUp})),n=v(),a=n.username,r=n.changeUsername,s=n.email,i=n.changeEmail,o=n.password,l=n.changePassword,u=f(a,s,o);return(0,h.jsx)("form",{className:j,onSubmit:u,children:(0,h.jsxs)("fieldset",{className:w,children:[(0,h.jsx)("label",{className:N,htmlFor:"name",children:"Your name:"}),(0,h.jsx)("input",{className:S,type:"text",id:"name",placeholder:"name",autoFocus:!0,required:!0,value:a,onChange:r,minLength:"3",maxLength:"10"}),(0,h.jsx)("label",{className:N,htmlFor:"email",children:"Your email:"}),(0,h.jsx)("input",{className:S,type:"email",id:"email",placeholder:"email@gmail.com",required:!0,value:s,onChange:i}),(0,h.jsx)("label",{className:N,htmlFor:"password",children:"Your password:"}),(0,h.jsx)("input",{className:S,type:"password",id:"password",placeholder:"password",required:!0,value:o,onChange:l,minLength:"5",maxLength:"10"}),(0,h.jsx)("button",{className:b,children:"Sign Up"}),e.isWrong&&(0,h.jsx)("p",{className:F,children:e.wrongValue})]})})},U=function(e,n){var a=(0,t.I0)(),r=(0,t.v9)((function(e){return e.users.users})),s=(0,x.s)().resetSearchGoal;return function(t){t.preventDefault();var i=r.find((function(n){return n.username===e||n.email===e}));i?i.password===n?(a((0,_.vp)(i.username)),s()):a((0,_.VQ)({isWrong:!0,wrongValue:"Incorrect password"})):a((0,_.VQ)({isWrong:!0,wrongValue:"There is no such username or email"}))}},L=function(){var e=(0,t.v9)((function(e){return e.authorization.invalidLogIn})),n=v(),a=n.username,r=n.changeUsername,s=n.password,i=n.changePassword,o=U(a,s);return(0,h.jsx)("form",{className:j,onSubmit:o,children:(0,h.jsxs)("fieldset",{className:w,children:[(0,h.jsx)("label",{className:N,htmlFor:"name",children:"Your name or email:"}),(0,h.jsx)("input",{className:S,type:"text",id:"name",placeholder:"name or email",autoFocus:!0,required:!0,value:a,onChange:r,minLength:"3",maxLength:"10"}),(0,h.jsx)("label",{className:N,htmlFor:"password",children:"Your password:"}),(0,h.jsx)("input",{className:S,type:"password",id:"password",placeholder:"password",required:!0,value:s,onChange:i,minLength:"5",maxLength:"10"}),(0,h.jsx)("button",{className:b,children:"Sign In"}),e.isWrong&&(0,h.jsx)("p",{className:F,children:e.wrongValue})]})})},I="SignInPage_main__f5gEs",k="SignInPage_main__light__dP98H",y="SignInPage_container__vofol",P="SignInPage_title__1bmaM",q=function(){var e=(0,c.F)().isLight,n=(0,o.useState)(!0),a=(0,s.Z)(n,2),l=a[0],m=a[1],g=(0,t.v9)((function(e){return e.authorization.currentUser.isAuth})),p=function(){return m(!l)},_=l?(0,h.jsx)(C,{}):(0,h.jsx)(L,{});return g?(0,h.jsx)(i.Fg,{to:"/"}):(0,h.jsx)("main",{className:u()(I,(0,r.Z)({},k,e)),children:(0,h.jsxs)("section",{className:y,children:[(0,h.jsx)(d,{text:"Sign Up",onClick:p,active:l}),(0,h.jsx)(d,{text:"Sign In",onClick:p,active:!l}),(0,h.jsxs)("h1",{className:P,children:["Enter the necessary data to ",l?"register":"sign in"]}),_]})})}}}]);
//# sourceMappingURL=9.2fb52cdb.chunk.js.map