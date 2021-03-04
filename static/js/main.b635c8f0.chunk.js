(this.webpackJsonpidentity=this.webpackJsonpidentity||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Type",(function(){return Y})),a.d(n,"setGlobalNotification",(function(){return ee})),a.d(n,"unsetGlobalNotification",(function(){return te}));var r={};a.r(r),a.d(r,"Type",(function(){return fe})),a.d(r,"httpRequest",(function(){return Ee}));var o={};a.r(o),a.d(o,"Type",(function(){return ge})),a.d(o,"addNewInput",(function(){return ye})),a.d(o,"createNewForm",(function(){return Ne})),a.d(o,"onBlurInput",(function(){return Ie})),a.d(o,"onChangeInput",(function(){return Te})),a.d(o,"onFormSubmit",(function(){return je})),a.d(o,"clearForm",(function(){return Se})),a.d(o,"formSubmission",(function(){return Ae}));var i=a(0),c=a.n(i),l=a(9),s=a.n(l),u=a(12),d=a(25),m=a(164);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f,E,p,b,v,h,O=a(11),_=a(23),g=a(8),y=a(166),N="@@observable/HTTP_REQUEST",I=Object(y.a)(Object(g.a)({},"@@post/SET_USER_PROFILE",(function(e,t){return t.payload?Object.assign({},e,t.payload):e})),{firstName:"",lastName:"",email:"",phoneNumber:""}),T=Object(y.a)((f={},Object(g.a)(f,"@@notify/SET_GLOBAL_NOTIFICATION",(function(e,t){return t.payload?Object.assign({},e,t.payload,{notify:!0}):e})),Object(g.a)(f,"@@notify/UNSET_GLOBAL_NOTIFICATION",(function(e){return Object.assign({},e,{notify:!1,notifyType:"",notifyMessage:""})})),f),{notify:!1,notifyType:"info",notifyMessage:""}),j=Object(y.a)((E={},Object(g.a)(E,N,(function(e,t){return Object.assign({},e,{isSubmitting:!0})})),Object(g.a)(E,"@@observable/HTTP_REQUEST_FAILURE",(function(e){return Object.assign({},e,{isSubmitting:!1})})),Object(g.a)(E,"@@observable/HTTP_REQUEST_SUCCESS",(function(e){return Object.assign({},e,{isSubmitting:!1})})),E),{isSubmitting:!1}),S=a(26),A=(p={},Object(g.a)(p,"VALID_EMAIL_REGX",/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),Object(g.a)(p,"PASS_LENGTH_REGX",/^.{8,12}$/),Object(g.a)(p,"VALID_PASS_REGEX",/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).*$/),p),L=(b={},Object(g.a)(b,"ENTER_VALID_EMAIL","Please enter a valid email address."),Object(g.a)(b,"PASS_LENGTH_NOT_MET_ERR","Password must be 8 to 12 characters."),Object(g.a)(b,"VALID_PASS_ERR","Must have at least 1 number, 1 uppercase and 1 special character."),Object(g.a)(b,"EMPTY_FIELD_ERR","Please enter a valid "),b),R=(v={},Object(g.a)(v,"email",(function(e){if(!A.VALID_EMAIL_REGX.test(e))return L.ENTER_VALID_EMAIL})),Object(g.a)(v,"password",(function(e){return A.PASS_LENGTH_REGX.test(e)?A.VALID_PASS_REGEX.test(e)?void 0:L.VALID_PASS_ERR:L.PASS_LENGTH_NOT_MET_ERR})),Object(g.a)(v,"default",(function(e){if(0===e.length)return L.EMPTY_FIELD_ERR})),v),P=function(e){return function(t){return t[e]}},C=Object(y.a)((h={},Object(g.a)(h,"@@form-field/ADD_NEW_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r={error:"",fieldId:a.fieldId,hasError:!1,hasValue:!1,validator:a.validator,value:""},o=function(e,t,a){return e.forEach((function(e){e.formId===t&&(e.fields=[a].concat(Object(S.a)(e.fields)))})),e}(e.forms,n,r);return{forms:Object(S.a)(o)}})),Object(g.a)(h,"@@form/CREATE_NEW_FORM",(function(e,t){return{forms:[{fields:[],formId:t.payload.formId,isPristine:!0,isSubmitting:!1,isValid:!1}].concat(Object(S.a)(e.forms))}})),Object(g.a)(h,"@@form-field/ONBLUR_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r=a.fieldId,o=function(e,t,a){return e.forEach((function(e){if(e.formId===t){e.isPristine=!1;var n=e.fields,r=!0;n.forEach((function(e){if(e.fieldId===a){var t=e.value,n=e.validator,o=P(n)(R)(t);o?(e.error=o,e.hasError=!0,r=!1):(e.error="",e.hasError=!1)}})),e.isValid=r}})),e}(e.forms,n,r);return{forms:Object(S.a)(o)}})),Object(g.a)(h,"@@form-field/ONCHANGE_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r=a.fieldId,o=a.value,i=function(e,t,a,n){return e.forEach((function(e){e.formId===t&&(e.isPristine=!1,e.fields.forEach((function(e){e.fieldId===a&&(n.length?(e.hasValue=!0,e.value=n):(e.hasValue=!1,e.value=""))})))})),e}(e.forms,n,r,o);return{forms:Object(S.a)(i)}})),Object(g.a)(h,"@@form/SUBMIT_FORM",(function(e,t){var a=t.payload.formId,n=function(e,t){return e.forEach((function(e){if(e.formId===t){e.isPristine=!1;var a=e.fields,n=!0;a.forEach((function(e){var t=e.value,a=e.validator,r=P(a)(R)(t);r?(e.error=r,e.hasError=!0,n=!1):(e.error="",e.hasError=!1)})),e.isValid=n}})),e}(e.forms,a);return{forms:Object(S.a)(n)}})),Object(g.a)(h,"@@form/CLEAR_FORM",(function(e){return Object.assign({},e,{})})),h),{forms:[]}),U=Object(O.c)({formManager:C,globalNotification:T,observable:j,router:d.d,userProfile:I}),w=a(71),F=a.n(w),D=function(e){return function(t){return function(a){var n=a||{},r=n.type,o=n.payload,i=void 0===o?{}:o,c=i.data,l=i.method,s=i.url,u=i.success,d=Object({NODE_ENV:"production",PUBLIC_URL:"/identity",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_BASE_URL:"https://identity-services.herokuapp.com"}),m=d.REACT_APP_API_BASE_URL,f="production"===d.NODE_ENV?"".concat(m).concat(s):s;return r===N&&F()({method:l,url:f,data:c}).then((function(t){console.log("res::",t,u),u&&e.dispatch({type:u,payload:{data:c,res:t}}),e.dispatch({type:"@@observable/HTTP_REQUEST_SUCCESS",payload:t})})).catch((function(t){e.dispatch({type:"@@observable/HTTP_REQUEST_FAILURE",payload:t})})),t(a)}}},k=function(e){return function(t){return function(a){var n=a||{},r=n.type,o=n.payload,i=void 0===o?{}:o;if("@@observable/HTTP_REQUEST_FAILURE"===r){var c,l=(null===i||void 0===i||null===(c=i.response)||void 0===c?void 0:c.data)||{},s=l.message,u=l.alert;e.dispatch({type:"@@notify/SET_GLOBAL_NOTIFICATION",payload:{notifyType:u||"error",notifyMessage:s||"Something went wrong."}})}return t(a)}}},M=a(51),G=function(e){return function(t){return function(a){var n=a||{},r=n.type,o=n.payload,i=void 0===o?{}:o;if("@@navigate2/APP_ROUTE"===r&&i.challenge){var c=i.challenge;e.dispatch(Object(d.b)(c))}else if("@@observable/HTTP_REQUEST_SUCCESS"===r&&i.data){var l=(null===i||void 0===i?void 0:i.data)||{},s=l.challenge;Object(M.a)(l,["challenge"]);e.dispatch(Object(d.b)(s))}return t(a)}}},B=function(e){return function(t){return function(a){var n=a||{},r=n.type,o=n.payload,i=void 0===o?{}:o,c=i.data,l=i.res;if("CREATE_PASSWORD_CREDENTIAL"===r){var s=l.data,u=s.firstname,d=s.lastname,m=s.phonenumber,f=void 0===m?"":m;if(e.dispatch({payload:{firstName:u,lastName:d,phoneNumber:f},type:"@@post/SET_USER_PROFILE"}),navigator.credentials){var E=new PasswordCredential({id:c.email,name:c.email,password:c.pwd});navigator.credentials.store(E).then((function(){console.log("Storing credential for ",E.id)})).catch((function(e){console.log("Error storing credentials",e)}))}}else if("USER_LOGOUT"===r)navigator.credentials&&navigator.credentials.preventSilentAccess().then((function(){console.log("Silent access prevented. Mediation will be required for next credentials.get() call.")})).catch((function(e){console.log("Error preventing silent access.",e)})),e.dispatch({payload:{firstName:"",lastName:"",phoneNumber:""},type:"@@post/SET_USER_PROFILE"});else if("UPDATE_PROFILE"===r){var p=l.data,b=p.firstname,v=p.lastname,h=p.phonenumber,O=void 0===h?"":h;e.dispatch({payload:{firstName:b,lastName:v,phoneNumber:O},type:"@@post/SET_USER_PROFILE"})}return t(a)}}},H=Object(_.a)({basename:"/identity"}),q=Object(d.c)(H),x=a(17),W=a(18),V=a(20),Q=a(19),X=a(170),z=a(157),$=a(169),Z=Object(z.a)((function(e){return Object($.a)({root:{display:"flex",justifyContent:"center"}})})),K=function(e){var t=e.actions,a=e.onClick,n=e.id,r=e.value,o=Z();return c.a.createElement("div",{className:o.root},c.a.createElement(X.a,{id:n,component:"button",variant:"body2",onClick:function(e){t.unsetGlobalNotification(),"function"===typeof a&&a(e)}},r))},J=a(168),Y={UNSET_GLOBAL_NOTIFICATION:"@@notify/UNSET_GLOBAL_NOTIFICATION",SET_GLOBAL_NOTIFICATION:"@@notify/SET_GLOBAL_NOTIFICATION"},ee=Object(J.a)(Y.SET_GLOBAL_NOTIFICATION),te=Object(J.a)(Y.UNSET_GLOBAL_NOTIFICATION),ae=Object.assign({},n),ne=Object(u.b)((function(){return{}}),(function(e){return{actions:Object(O.b)(ae,e)}}))(K),re=a(76),oe=a.n(re),ie=a(77),ce=a.n(ie),le=a(78),se=a.n(le),ue=a(79),de=a.n(ue),me=function(e){Object(V.a)(a,e);var t=Object(Q.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).autoSignIn=function(){var t=e.props.actions;navigator.credentials&&navigator.credentials.get({mediation:"required",password:!0}).then((function(e){"password"===(null===e||void 0===e?void 0:e.type)&&t.httpRequest({data:{username:e.id,password:e.password},method:"post",url:"/account/login",success:"UPDATE_PROFILE"})})).catch((function(e){console.log("Fetch credentials error",e)}))},e.handleOnLogout=function(){e.props.actions.httpRequest({data:{},method:"post",url:"/account/logout",success:"USER_LOGOUT"})},e}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.userProfileState.firstName||this.autoSignIn()}},{key:"shouldComponentUpdate",value:function(e){return this.props.userProfileState.firstName!==e.userProfileState.firstName}},{key:"componentDidUpdate",value:function(){this.props.userProfileState.firstName||this.autoSignIn()}},{key:"render",value:function(){var e=this.props,t=e.history,a=e.userProfileState.firstName;return c.a.createElement("div",{className:"profile"},c.a.createElement("header",null,c.a.createElement("h1",null,"jsfunfoo { }")),c.a.createElement("section",{className:"breadcrumbs"},c.a.createElement("p",null,"Winter weather safety alert: Important store updates & info."),c.a.createElement(ne,{id:"learnMoreLink",value:"Learn more"})),c.a.createElement("section",{className:"main"},c.a.createElement("section",{className:"left-panel"},c.a.createElement("div",null,c.a.createElement("img",{src:oe.a,alt:"home pic"})),c.a.createElement("div",null,c.a.createElement("img",{src:ce.a,alt:"home pic"})),c.a.createElement("div",null,c.a.createElement("img",{src:se.a,alt:"home pic"})),c.a.createElement("div",null,c.a.createElement("img",{src:de.a,alt:"home pic"}))),c.a.createElement("section",{className:"side-panel"},c.a.createElement("ul",null,a?c.a.createElement("li",null,c.a.createElement("div",{className:"greet-user"},"Welcome ",a)):c.a.createElement("li",null,c.a.createElement(ne,{id:"createAccountLink",value:"Sign in",onClick:function(){return t.push("/login")}})),c.a.createElement("li",null,c.a.createElement(ne,{id:"trackOrderLink",value:"Track orders"})),c.a.createElement("li",null,c.a.createElement(ne,{id:"accountLink",value:"Account"})),c.a.createElement("li",null,c.a.createElement(ne,{id:"helpLink",value:"Help"})),a?c.a.createElement(ne,{id:"signoutLink",value:"Sign out",onClick:this.handleOnLogout}):null))),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021")))}}]),a}(c.a.Component),fe={HTTP_REQUEST:N},Ee=Object(J.a)(fe.HTTP_REQUEST),pe=Object.assign({},r),be=Object(u.b)((function(e){return{userProfileState:e.userProfile}}),(function(e){return{actions:Object(O.b)(pe,e)}}))(me),ve=a(165),he=Object(z.a)((function(e){return Object($.a)({root:{display:"flex",justifyContent:"center",marginBottom:5}})})),Oe=function(e){var t=e.blurHandler,a=e.changeHandler,n=Object(M.a)(e,["blurHandler","changeHandler"]),r=he();return c.a.createElement("div",{className:r.root},c.a.createElement(ve.a,Object.assign({},n,{onBlur:t,onChange:a,variant:"outlined"})))},_e=function(e){Object(V.a)(a,e);var t=Object(Q.a)(a);function a(e){var n;Object(x.a)(this,a),(n=t.call(this,e)).handleOnBlur=function(e){var t=n.props,a=t.actions,r=t.formId,o=t.id;a.onBlurInput({formId:r,fieldId:o})},n.handleOnChange=function(e){var t=n.props,a=t.actions,r=t.formId,o=t.id;a.onChangeInput({formId:r,fieldId:o,value:e.currentTarget.value})};var r=e.formId,o=e.id,i=e.validator;return e.actions.addNewInput({formId:r,fieldId:o,validator:i}),n}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props,t=e.autocomplete,a=e.formId,n=e.formManager,r=e.editable,o=void 0===r||r,i=e.id,l=e.label,s=e.placeholder,u=void 0===s?"":s,d=e.type,m=e.value,f=void 0===m?"":m,E=function(){var e="";return n.forms.forEach((function(t){t.formId===a&&t.fields.forEach((function(t){t.fieldId===i&&t.hasError&&(e=t.error)}))})),e}();return o?c.a.createElement(Oe,Object.assign({},E?{error:!0}:{},{autoComplete:t,type:d,id:i,label:l,placeholder:u,blurHandler:this.handleOnBlur,changeHandler:this.handleOnChange})):c.a.createElement("div",null,c.a.createElement("label",{htmlFor:i},l),c.a.createElement("p",null,f))}}]),a}(c.a.Component),ge={ADD_NEW_INPUT_FIELD:"@@form-field/ADD_NEW_INPUT_FIELD",CREATE_NEW_FORM:"@@form/CREATE_NEW_FORM",CLEAR_FORM:"@@form/CLEAR_FORM",ONBLUR_INPUT_FIELD:"@@form-field/ONBLUR_INPUT_FIELD",ONCHANGE_INPUT_FIELD:"@@form-field/ONCHANGE_INPUT_FIELD",SUBMIT_FORM:"@@form/SUBMIT_FORM"},ye=Object(J.a)(ge.ADD_NEW_INPUT_FIELD),Ne=Object(J.a)(ge.CREATE_NEW_FORM),Ie=Object(J.a)(ge.ONBLUR_INPUT_FIELD),Te=Object(J.a)(ge.ONCHANGE_INPUT_FIELD),je=Object(J.a)(ge.ONCHANGE_INPUT_FIELD),Se=Object(J.a)(ge.CLEAR_FORM),Ae=Object(J.a)(ge.SUBMIT_FORM),Le=Object.assign({},o,n),Re=Object(u.b)((function(e){return{formManager:e.formManager}}),(function(e){return{actions:Object(O.b)(Le,e)}}))(_e),Pe=a(167),Ce=(a(119),Object(z.a)((function(e){return Object($.a)({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}))),Ue=function(e){var t=e.message,a=e.type;return c.a.createElement("div",{className:Ce().root},c.a.createElement(Pe.a,{severity:a},t))},we=function(e){var t=e.children,a=e.notify,n=e.notifyMessage,r=e.notifyType,o=e.title;return c.a.createElement("div",{className:"standard"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("section",{className:"logo"},c.a.createElement("div",null,"jsfunfoo { }")),c.a.createElement("section",{className:"notify"},a?c.a.createElement(Ue,{type:r,message:n}):null),c.a.createElement("main",null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,o)),c.a.createElement("section",{className:"content"},t)),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021"))))},Fe=a(162),De=a(163),ke=Object(z.a)((function(e){return Object($.a)({root:{display:"flex",alignItems:"center",marginBottom:10},wrapper:{margin:e.spacing(1),position:"relative",width:"100%"},button:{color:"#fff",backgroundColor:"#0065ff",width:"100%",padding:12,"&:hover":{backgroundColor:"#013f9e"}},buttonProgress:{color:"#3f51b5",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})),Me=function(e){var t=e.actions,a=e.onClick,n=e.id,r=e.type,o=e.value,i=e.observable.isSubmitting,l=ke();return c.a.createElement("div",{className:l.root},c.a.createElement("div",{className:l.wrapper},c.a.createElement(Fe.a,{color:"primary",className:l.button,disabled:!!i||void 0,id:n,onClick:function(e){t.unsetGlobalNotification(),"function"===typeof a&&a(e)},type:r,value:o,variant:"contained"},o),i&&c.a.createElement(De.a,{size:24,className:l.buttonProgress})))},Ge=Object.assign({},n),Be=Object(u.b)((function(e){return{observable:e.observable}}),(function(e){return{actions:Object(O.b)(Ge,e)}}))(Me),He=Object(z.a)((function(e){return Object($.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"95%"}}})})),qe=function(e){var t=e.children,a=e.id,n=e.submitHandler,r=He();return c.a.createElement("form",{id:a,className:r.root,onSubmit:n,noValidate:!0},t)},xe=function(e){Object(V.a)(a,e);var t=Object(Q.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).handleOnSubmit=function(e){var t=n.props,a=t.actions,r=t.formManager,o=t.id,i=t.onSubmit,c=[],l=!1;e.preventDefault(),a.formSubmission({formId:o}),r.forms.forEach((function(e){e.formId===o&&(l=e.isValid,c=e.fields)}));var s={};c.forEach((function(e){var t,a=e.fieldId,n=e.value;(t=a,function(e){return function(a){return e[t]=a}})(s)(n)})),"function"===typeof i&&i(e,s,l)},e.actions.createNewForm({formId:e.id}),n}return Object(W.a)(a,[{key:"render",value:function(){return c.a.createElement(qe,Object.assign({submitHandler:this.handleOnSubmit},this.props))}}]),a}(c.a.Component),We=Object.assign({},o,n),Ve=Object(u.b)((function(e){return{formManager:e.formManager}}),(function(e){return{actions:Object(O.b)(We,e)}}))(xe),Qe=function(e){Object(V.a)(a,e);var t=Object(Q.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOnSubmit=function(t,a,n){var r=e.props.actions;n&&r.httpRequest({data:{username:a.email_address,password:a.pwd},method:"post",url:"/account/login",success:"UPDATE_PROFILE"})},e}return Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.actions;navigator.credentials&&navigator.credentials.get({mediation:"required",password:!0}).then((function(t){console.log("Fetch credentials",t),"password"===(null===t||void 0===t?void 0:t.type)&&e.httpRequest({data:{username:t.id,password:t.password},method:"post",url:"/account/login",success:"UPDATE_PROFILE"})})).catch((function(e){console.log("Fetch credentials error",e)}))}},{key:"render",value:function(){var e=this.props,t=e.history,a=e.notification,n=a.notify,r=a.notifyMessage,o=a.notifyType,i=t.push;return c.a.createElement(we,{notify:n,notifyMessage:r,notifyType:o,title:"Sign in to your account"},c.a.createElement("div",null,c.a.createElement(Ve,{id:"SIGN_IN",onSubmit:this.handleOnSubmit},c.a.createElement(Re,{autocomplete:"off",formId:"SIGN_IN",id:"email_address",label:"Email address (required)",name:"username",type:"email",validator:"email"}),c.a.createElement(Re,{autocomplete:"off",formId:"SIGN_IN",id:"pwd",label:"Password (required)",name:"password",type:"password",validator:"default"}),c.a.createElement(Be,{type:"submit",id:"sign_in",value:"Sign in"}),c.a.createElement(ne,{id:"createAccountLink",value:"Create account",onClick:function(){return i("/createAccount")}}))))}}]),a}(c.a.Component),Xe=Object.assign({},o,n,r),ze=Object(u.b)((function(e){return{notification:e.globalNotification}}),(function(e){return{actions:Object(O.b)(Xe,e)}}))(Qe),$e=function(e){var t=e.history.push,a="CREATE_ACCOUNT",n=e.notification,r=n.notify,o=n.notifyMessage,i=n.notifyType;return c.a.createElement(we,{notify:r,notifyMessage:o,notifyType:i,title:"Create account"},c.a.createElement("div",null,c.a.createElement(Ve,{id:a,onSubmit:function(t,a,n){n&&e.actions.httpRequest({data:{firstname:a.first_name,lastname:a.last_name,username:a.email_address,password:a.pwd},method:"post",url:"/account/createAccount",success:"CREATE_PASSWORD_CREDENTIAL"})}},c.a.createElement(Re,{formId:a,id:"first_name",label:"First name (required)",type:"text",validator:"default"}),c.a.createElement(Re,{formId:a,id:"last_name",label:"Last name (required)",type:"text",validator:"default"}),c.a.createElement(Re,{autocomplete:"username",formId:a,id:"email_address",label:"Email address (required)",name:"username",type:"email",validator:"email"}),c.a.createElement(Re,{autocomplete:"new-password",formId:a,id:"pwd",label:"Password (required)",name:"password",type:"password",validator:"password"}),c.a.createElement(Be,{type:"submit",id:"create_account",value:"Create Account"}),c.a.createElement(ne,{id:"signInLink",value:"Sign in",onClick:function(){return t("/login")}}))))},Ze=Object.assign({},n,r),Ke=Object(u.b)((function(e){return{notification:e.globalNotification}}),(function(e){return{actions:Object(O.b)(Ze,e)}}))($e),Je=(a(120),function(e){var t=e.children,a=e.notifyMessage,n=e.notifyType,r=e.title;return c.a.createElement("div",{className:"profile"},c.a.createElement("header",null,c.a.createElement("h1",null,"{ .js }")),c.a.createElement("section",{className:"breadcrumbs"},c.a.createElement("h2",null,r)),a?c.a.createElement("section",{className:"notification"},c.a.createElement("div",{className:"message ".concat(n)},a)):null,c.a.createElement("section",{className:"main"},t),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021")))}),Ye=(a(121),function(e){Object(V.a)(a,e);var t=Object(Q.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={nameEditable:!1,emailEditable:!1,phoneEditable:!1},e.toggleEditName=function(t,a){e.setState({nameEditable:a})},e.toggleEditEmail=function(t,a){e.setState({emailEditable:a})},e.toggleEditPhone=function(t,a){e.setState({phoneEditable:a})},e.handleOnLogout=function(){e.props.actions.httpRequest({data:{},method:"post",url:"/account/logout",success:"USER_LOGOUT"})},e}return Object(W.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.userProfileState,n=t.notification,r=a.firstName,o=a.lastName,i=a.email,l=a.phoneNumber,s=n.notify,u=n.notifyMessage,d=n.notifyType;return c.a.createElement(Je,{notify:s,notifyMessage:u,notifyType:d,title:"Welcome ".concat(r)},c.a.createElement("div",{className:"editProfile"},c.a.createElement("div",null,c.a.createElement(ne,{id:"logoutLink",value:"Logout",onClick:this.handleOnLogout})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(Re,{editable:this.state.nameEditable,id:"first_name",label:"First name (required)",type:"text",value:r}),c.a.createElement(Re,{editable:this.state.nameEditable,id:"last_name",label:"Last name (required)",type:"text",value:o}),c.a.createElement("div",{className:"buttons"},this.state.nameEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditName",value:"Cancel",onClick:function(t){return e.toggleEditName(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updateName",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editName",value:"Edit",onClick:function(t){return e.toggleEditName(t,!0)}},"Edit"))))),c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(Re,{editable:this.state.emailEditable,id:"email_address",label:"Email address (required)",type:"email",value:i}),c.a.createElement("div",{className:"buttons"},this.state.emailEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditEmail",value:"Cancel",onClick:function(t){return e.toggleEditEmail(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updateEmail",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editEmail",value:"Edit",onClick:function(t){return e.toggleEditEmail(t,!0)}},"Edit"))))),c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(Re,{editable:this.state.phoneEditable,id:"phone_number",label:"Phone number (required)",type:"email",value:l}),c.a.createElement("div",{className:"buttons"},this.state.phoneEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditPhone",value:"Cancel",onClick:function(t){return e.toggleEditPhone(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updatePhone",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editPhoneNumber",value:"Edit",onClick:function(t){return e.toggleEditPhone(t,!0)}},"Edit"))))))))}}]),a}(c.a.Component)),et=Object.assign({},n,r),tt=Object(u.b)((function(e){return{notification:e.globalNotification,userProfileState:e.userProfile}}),(function(e){return{actions:Object(O.b)(et,e)}}))(Ye),at=function(){return c.a.createElement(m.d,null,c.a.createElement(m.a,{exact:!0,from:"/",to:"/home"}),c.a.createElement(m.b,{exact:!0,path:"/home",component:be,key:"account-home"}),c.a.createElement(m.b,{exact:!0,path:"/login",component:ze,key:"acount-signin"}),c.a.createElement(m.b,{exact:!0,path:"/createAccount",component:Ke,key:"acount-create-account"}),c.a.createElement(m.b,{exact:!0,path:"/user/profile",component:tt,key:"acount-user-profile"}))},nt=(a(122),function(){var e=window.__REDUX_STATE__||{};window.__REDUX_STATE__&&delete window.__REDUX_STATE__;var t=[G,D,k,q,B],a=(0,O.d)(O.a.apply(void 0,t));return Object(O.e)(U,e,a)}());s.a.render(c.a.createElement(u.a,{store:nt},c.a.createElement(d.a,{history:H,store:nt},c.a.createElement(m.c,{history:H},c.a.createElement(at,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a.p+"static/media/home-1.01e6eb45.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/home-2.7dbed7e2.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/home-3.78f06cfd.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/home-4.5aad7231.jpg"},90:function(e,t,a){e.exports=a(123)}},[[90,1,2]]]);
//# sourceMappingURL=main.b635c8f0.chunk.js.map