(this["webpackJsonpahmed-el-asfar-ts"]=this["webpackJsonpahmed-el-asfar-ts"]||[]).push([[13],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(35),r=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500;return t?s.b.success(e,{position:"bottom-left",autoClose:a,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):s.b.error(e,{position:"bottom-left",autoClose:a,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},186:function(e,t,a){"use strict";a.r(t);var s=a(36),r=a(3),o=a(33),n=a(0),c=a(32),i=a.n(c),u=a(217),l=a(145),d=(a(187),a(108)),p=a(2);t.default=function(e){var t=e.id,a=e.history.push,c=Object(n.useState)({}),f=Object(o.a)(c,2),b=f[0],m=f[1];Object(n.useEffect)((function(){var e=document.querySelectorAll("input")[1];b.confirmPassword!==b.password?e.setCustomValidity("\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u0629"):e.setCustomValidity("")}),[b]);return Object(p.jsxs)(u.a,{onSubmit:function(e){e.preventDefault();var s=b.password;i.a.post("/setNewPassword",{password:s,id:t}).then((function(e){e.data;a("/account/signin"),Object(d.a)("\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",!0)})).catch((function(e){Object(d.a)("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627 \u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0627\u062e\u0631\u0649",!1)}))},className:"forget-password-page3-form",children:[[{placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",type:"password",name:"password"},{placeholder:"\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",type:"password",name:"confirmPassword"}].map((function(e,t){var a=Object.assign({},e);return Object(p.jsx)(u.a.Group,{controlId:"formBasicEmail",children:Object(p.jsx)(u.a.Control,Object(r.a)(Object(r.a)({},a),{},{className:"inputs-style",autoFocus:0===t,required:!0,onChange:function(e){var t=e.target,a=t.value,o=t.name;return m((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},o,a))}))}}))},t)})),Object(p.jsx)(l.a,{variant:"primary",type:"submit",className:"forget-password-page1-button-style",children:"\u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f"})]})}},187:function(e,t,a){}}]);
//# sourceMappingURL=13.087d0ff4.chunk.js.map