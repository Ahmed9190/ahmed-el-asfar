(this["webpackJsonpahmed-el-asfar-ts"]=this["webpackJsonpahmed-el-asfar-ts"]||[]).push([[12],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a(35),s=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500;return t?o.b.success(e,{position:"bottom-left",autoClose:a,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):o.b.error(e,{position:"bottom-left",autoClose:a,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},184:function(e,t,a){"use strict";a.r(t);var o=a(33),s=a(0),r=a(217),n=a(145),c=a(32),i=a.n(c),u=(a(185),a(108)),l=a(2);t.default=function(e){var t=e.email,a=e.setIsRightCode,c=e.history.push,p=Object(s.useState)(""),d=Object(o.a)(p,2),f=d[0],b=d[1];return Object(l.jsxs)(r.a,{onSubmit:function(e){e.preventDefault(),i.a.post("/checkResettingCode",{email:t,code:f}).then((function(e){var t=e.data;t?(a(t),c("/account/forgetpassword/3")):Object(u.a)("\u0627\u0644\u0631\u0645\u0632 \u062e\u0627\u0637\u0626 \u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062f\u062e\u0627\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0635\u062d\u064a\u062d",!1)})).catch((function(e){Object(u.a)("\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627 \u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0627\u062e\u0631\u0649",!1)}))},className:"forget-password-page2-form",children:[Object(l.jsx)("span",{children:"\u062a\u0645 \u0627\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u0649 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u0631\u062c\u0627\u0621 \u0643\u062a\u0627\u0628\u062a\u0647"}),Object(l.jsx)(r.a.Group,{controlId:"formBasicEmail",children:Object(l.jsx)(r.a.Control,{className:"inputs-style",type:"number",placeholder:"\u0627\u0644\u0631\u0645\u0632",onChange:function(e){var t=e.target.value;return b(t)},required:!0,autoComplete:"off"})}),Object(l.jsx)(n.a,{variant:"primary",type:"submit",className:"forget-password-page2-button",children:"\u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f"})]})}},185:function(e,t,a){}}]);
//# sourceMappingURL=12.daad902d.chunk.js.map