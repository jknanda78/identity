(this.webpackJsonpidentity=this.webpackJsonpidentity||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Type",(function(){return $})),a.d(n,"setGlobalNotification",(function(){return Z})),a.d(n,"unsetGlobalNotification",(function(){return K}));var r={};a.r(r),a.d(r,"Type",(function(){return se})),a.d(r,"httpRequest",(function(){return ue}));var i={};a.r(i),a.d(i,"Type",(function(){return ge})),a.d(i,"addNewInput",(function(){return ye})),a.d(i,"createNewForm",(function(){return Ne})),a.d(i,"onBlurInput",(function(){return Ie})),a.d(i,"onChangeInput",(function(){return Te})),a.d(i,"onFormSubmit",(function(){return je})),a.d(i,"clearForm",(function(){return Se})),a.d(i,"formSubmission",(function(){return Ae}));var o=a(0),c=a.n(o),l=a(9),s=a.n(l),u=a(12),d=a(21),m=a(164);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f,E,b,p,v,O,h=a(11),_=a(19),g=a(8),y=a(166),N="@@observable/HTTP_REQUEST",I=Object(y.a)(Object(g.a)({},"@@post/SET_USER_PROFILE",(function(e,t){return t.payload?Object.assign({},e,t.payload):e})),{firstName:"",lastName:"",email:"",phoneNumber:""}),T=Object(y.a)((f={},Object(g.a)(f,"@@notify/SET_GLOBAL_NOTIFICATION",(function(e,t){return t.payload?Object.assign({},e,t.payload,{notify:!0}):e})),Object(g.a)(f,"@@notify/UNSET_GLOBAL_NOTIFICATION",(function(e){return Object.assign({},e,{notify:!1,notifyType:"",notifyMessage:""})})),f),{notify:!1,notifyType:"info",notifyMessage:""}),j=Object(y.a)((E={},Object(g.a)(E,N,(function(e,t){return Object.assign({},e,{isSubmitting:!0})})),Object(g.a)(E,"@@observable/HTTP_REQUEST_FAILURE",(function(e){return Object.assign({},e,{isSubmitting:!1})})),Object(g.a)(E,"@@observable/HTTP_REQUEST_SUCCESS",(function(e){return Object.assign({},e,{isSubmitting:!1})})),E),{isSubmitting:!1}),S=a(22),A=(b={},Object(g.a)(b,"VALID_EMAIL_REGX",/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),Object(g.a)(b,"PASS_LENGTH_REGX",/^.{8,12}$/),Object(g.a)(b,"VALID_PASS_REGEX",/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).*$/),b),L=(p={},Object(g.a)(p,"ENTER_VALID_EMAIL","Please enter a valid email address."),Object(g.a)(p,"PASS_LENGTH_NOT_MET_ERR","Password must be 8 to 12 characters."),Object(g.a)(p,"VALID_PASS_ERR","Must have at least 1 number, 1 uppercase and 1 special character."),Object(g.a)(p,"EMPTY_FIELD_ERR","Please enter a valid "),p),R=(v={},Object(g.a)(v,"email",(function(e){if(!A.VALID_EMAIL_REGX.test(e))return L.ENTER_VALID_EMAIL})),Object(g.a)(v,"password",(function(e){return A.PASS_LENGTH_REGX.test(e)?A.VALID_PASS_REGEX.test(e)?void 0:L.VALID_PASS_ERR:L.PASS_LENGTH_NOT_MET_ERR})),Object(g.a)(v,"default",(function(e){if(0===e.length)return L.EMPTY_FIELD_ERR})),v),P=function(e){return function(t){return t[e]}},C=Object(y.a)((O={},Object(g.a)(O,"@@form-field/ADD_NEW_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r={error:"",fieldId:a.fieldId,hasError:!1,hasValue:!1,validator:a.validator,value:""},i=function(e,t,a){return e.forEach((function(e){e.formId===t&&(e.fields=[a].concat(Object(S.a)(e.fields)))})),e}(e.forms,n,r);return{forms:Object(S.a)(i)}})),Object(g.a)(O,"@@form/CREATE_NEW_FORM",(function(e,t){return{forms:[{fields:[],formId:t.payload.formId,isPristine:!0,isSubmitting:!1,isValid:!1}].concat(Object(S.a)(e.forms))}})),Object(g.a)(O,"@@form-field/ONBLUR_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r=a.fieldId,i=function(e,t,a){return e.forEach((function(e){if(e.formId===t){e.isPristine=!1;var n=e.fields,r=!0;n.forEach((function(e){if(e.fieldId===a){var t=e.value,n=e.validator,i=P(n)(R)(t);i?(e.error=i,e.hasError=!0,r=!1):(e.error="",e.hasError=!1)}})),e.isValid=r}})),e}(e.forms,n,r);return{forms:Object(S.a)(i)}})),Object(g.a)(O,"@@form-field/ONCHANGE_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r=a.fieldId,i=a.value,o=function(e,t,a,n){return e.forEach((function(e){e.formId===t&&(e.isPristine=!1,e.fields.forEach((function(e){e.fieldId===a&&(n.length?(e.hasValue=!0,e.value=n):(e.hasValue=!1,e.value=""))})))})),e}(e.forms,n,r,i);return{forms:Object(S.a)(o)}})),Object(g.a)(O,"@@form/SUBMIT_FORM",(function(e,t){var a=t.payload.formId,n=function(e,t){return e.forEach((function(e){if(e.formId===t){e.isPristine=!1;var a=e.fields,n=!0;a.forEach((function(e){var t=e.value,a=e.validator,r=P(a)(R)(t);r?(e.error=r,e.hasError=!0,n=!1):(e.error="",e.hasError=!1)})),e.isValid=n}})),e}(e.forms,a);return{forms:Object(S.a)(n)}})),Object(g.a)(O,"@@form/CLEAR_FORM",(function(e){return Object.assign({},e,{})})),O),{forms:[]}),F=Object(h.c)({formManager:C,globalNotification:T,observable:j,router:d.d,userProfile:I}),U=a(71),w=a.n(U),D=function(e){return function(t){return function(a){var n=a||{},r=n.type,i=n.payload,o=void 0===i?{}:i,c=o.data,l=o.method,s=o.url,u=o.success,d=Object({NODE_ENV:"production",PUBLIC_URL:"/identity",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_BASE_URL:"https://identity-services.herokuapp.com"}),m=d.REACT_APP_API_BASE_URL,f="production"===d.NODE_ENV?"".concat(m).concat(s):s;return r===N&&w()({method:l,url:f,data:c}).then((function(t){e.dispatch({type:"@@observable/HTTP_REQUEST_SUCCESS",payload:t}),u&&e.dispatch({type:u,payload:{data:c,res:t}})})).catch((function(t){e.dispatch({type:"@@observable/HTTP_REQUEST_FAILURE",payload:t})})),t(a)}}},k=function(e){return function(t){return function(a){var n=a||{},r=n.type,i=n.payload,o=void 0===i?{}:i;if("@@observable/HTTP_REQUEST_FAILURE"===r){var c,l=(null===o||void 0===o||null===(c=o.response)||void 0===c?void 0:c.data)||{},s=l.message,u=l.alert;e.dispatch({type:"@@notify/SET_GLOBAL_NOTIFICATION",payload:{notifyType:u||"error",notifyMessage:s||"Something went wrong."}})}return t(a)}}},M=a(51),G=function(e){return function(t){return function(a){var n=a||{},r=n.type,i=n.payload,o=void 0===i?{}:i;if("@@navigate2/APP_ROUTE"===r&&o.challenge){var c=o.challenge;e.dispatch(Object(d.b)(c))}else if("@@observable/HTTP_REQUEST_SUCCESS"===r&&o.data){var l=(null===o||void 0===o?void 0:o.data)||{},s=l.challenge;Object(M.a)(l,["challenge"]);e.dispatch(Object(d.b)(s))}return t(a)}}},H=function(e){return function(t){return function(a){var n=a||{},r=n.type,i=n.payload,o=void 0===i?{}:i,c=o.data,l=o.res;if("CREATE_PASSWORD_CREDENTIAL"===r){if(navigator.credentials){var s=new PasswordCredential({id:c.email,name:c.email,password:c.pwd});navigator.credentials.store(s).then((function(){console.log("Storing credential for ",s.id)})).catch((function(e){console.log("Error storing credentials",e)}))}}else if("USER_LOGOUT"===r)navigator.credentials&&navigator.credentials.preventSilentAccess().then((function(){console.log("Silent access prevented. Mediation will be required for next credentials.get() call.")})).catch((function(e){console.log("Error preventing silent access.",e)})),e.dispatch({payload:{firstName:"",lastName:"",phoneNumber:""},type:"@@post/SET_USER_PROFILE"});else if("UPDATE_PROFILE"===r){var u=l.data,d=u.firstname,m=u.lastname,f=u.phonenumber;e.dispatch({payload:{firstName:d,lastName:m,phoneNumber:f},type:"@@post/SET_USER_PROFILE"})}return t(a)}}},B=Object(_.a)({basename:"/identity"}),q=Object(d.c)(B),x=a(170),V=a(157),W=a(169),Q=Object(V.a)((function(e){return Object(W.a)({root:{display:"flex",justifyContent:"center"}})})),X=function(e){var t=e.actions,a=e.onClick,n=e.id,r=e.value,i=Q();return c.a.createElement("div",{className:i.root},c.a.createElement(x.a,{id:n,component:"button",variant:"body2",onClick:function(e){t.unsetGlobalNotification(),"function"===typeof a&&a(e)}},r))},z=a(168),$={UNSET_GLOBAL_NOTIFICATION:"@@notify/UNSET_GLOBAL_NOTIFICATION",SET_GLOBAL_NOTIFICATION:"@@notify/SET_GLOBAL_NOTIFICATION"},Z=Object(z.a)($.SET_GLOBAL_NOTIFICATION),K=Object(z.a)($.UNSET_GLOBAL_NOTIFICATION),J=Object.assign({},n),Y=Object(u.b)((function(){return{}}),(function(e){return{actions:Object(h.b)(J,e)}}))(X),ee=a(76),te=a.n(ee),ae=a(77),ne=a.n(ae),re=a(78),ie=a.n(re),oe=a(79),ce=a.n(oe),le=function(e){var t=e.actions,a=e.history,n=e.userProfileState.firstName,r=a.push;return console.log("line18:"),navigator.credentials&&navigator.credentials.get({mediation:"required",password:!0}).then((function(e){console.log("line25:credential::",e),"password"===(null===e||void 0===e?void 0:e.type)&&t.httpRequest({credentials:e,method:"post",url:"/account/login"})})).catch((function(e){console.log("Fetch credentials error",e)})),c.a.createElement("div",{className:"profile"},c.a.createElement("header",null,c.a.createElement("h1",null,"jsfunfoo { }")),c.a.createElement("section",{className:"breadcrumbs"},c.a.createElement("p",null,"Winter weather safety alert: Important store updates & info."),c.a.createElement(Y,{id:"learnMoreLink",value:"Learn more"})),c.a.createElement("section",{className:"main"},c.a.createElement("section",{className:"left-panel"},c.a.createElement("div",null,c.a.createElement("img",{src:te.a,alt:"home pic"})),c.a.createElement("div",null,c.a.createElement("img",{src:ne.a,alt:"home pic"})),c.a.createElement("div",null,c.a.createElement("img",{src:ie.a,alt:"home pic"})),c.a.createElement("div",null,c.a.createElement("img",{src:ce.a,alt:"home pic"}))),c.a.createElement("section",{className:"side-panel"},c.a.createElement("ul",null,n?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,n),c.a.createElement("li",null,c.a.createElement(Y,{id:"trackOrderLink",value:"Track orders"})),c.a.createElement("li",null,c.a.createElement(Y,{id:"accountLink",value:"Account"})),c.a.createElement("li",null,c.a.createElement(Y,{id:"helpLink",value:"Help"}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement(Y,{id:"createAccountLink",value:"Sign in",onClick:function(){return r("/login")}})),c.a.createElement("li",null,c.a.createElement(Y,{id:"trackOrderLink",value:"Track orders"})),c.a.createElement("li",null,c.a.createElement(Y,{id:"accountLink",value:"Account"})),c.a.createElement("li",null,c.a.createElement(Y,{id:"helpLink",value:"Help"})))))),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021")))},se={HTTP_REQUEST:N},ue=Object(z.a)(se.HTTP_REQUEST),de=Object.assign({},r),me=Object(u.b)((function(e){return{userProfileState:e.userProfile}}),(function(e){return{actions:Object(h.b)(de,e)}}))(le),fe=a(31),Ee=a(32),be=a(36),pe=a(34),ve=a(165),Oe=Object(V.a)((function(e){return Object(W.a)({root:{display:"flex",justifyContent:"center",marginBottom:5}})})),he=function(e){var t=e.blurHandler,a=e.changeHandler,n=Object(M.a)(e,["blurHandler","changeHandler"]),r=Oe();return c.a.createElement("div",{className:r.root},c.a.createElement(ve.a,Object.assign({},n,{onBlur:t,onChange:a,variant:"outlined"})))},_e=function(e){Object(be.a)(a,e);var t=Object(pe.a)(a);function a(e){var n;Object(fe.a)(this,a),(n=t.call(this,e)).handleOnBlur=function(e){var t=n.props,a=t.actions,r=t.formId,i=t.id;a.onBlurInput({formId:r,fieldId:i})},n.handleOnChange=function(e){var t=n.props,a=t.actions,r=t.formId,i=t.id;a.onChangeInput({formId:r,fieldId:i,value:e.currentTarget.value})};var r=e.formId,i=e.id,o=e.validator;return e.actions.addNewInput({formId:r,fieldId:i,validator:o}),n}return Object(Ee.a)(a,[{key:"render",value:function(){var e=this.props,t=e.autocomplete,a=e.formId,n=e.formManager,r=e.editable,i=void 0===r||r,o=e.id,l=e.label,s=e.placeholder,u=void 0===s?"":s,d=e.type,m=e.value,f=void 0===m?"":m,E=function(){var e="";return n.forms.forEach((function(t){t.formId===a&&t.fields.forEach((function(t){t.fieldId===o&&t.hasError&&(e=t.error)}))})),e}();return i?c.a.createElement(he,Object.assign({},E?{error:!0}:{},{autoComplete:t,type:d,id:o,label:l,placeholder:u,blurHandler:this.handleOnBlur,changeHandler:this.handleOnChange})):c.a.createElement("div",null,c.a.createElement("label",{htmlFor:o},l),c.a.createElement("p",null,f))}}]),a}(c.a.Component),ge={ADD_NEW_INPUT_FIELD:"@@form-field/ADD_NEW_INPUT_FIELD",CREATE_NEW_FORM:"@@form/CREATE_NEW_FORM",CLEAR_FORM:"@@form/CLEAR_FORM",ONBLUR_INPUT_FIELD:"@@form-field/ONBLUR_INPUT_FIELD",ONCHANGE_INPUT_FIELD:"@@form-field/ONCHANGE_INPUT_FIELD",SUBMIT_FORM:"@@form/SUBMIT_FORM"},ye=Object(z.a)(ge.ADD_NEW_INPUT_FIELD),Ne=Object(z.a)(ge.CREATE_NEW_FORM),Ie=Object(z.a)(ge.ONBLUR_INPUT_FIELD),Te=Object(z.a)(ge.ONCHANGE_INPUT_FIELD),je=Object(z.a)(ge.ONCHANGE_INPUT_FIELD),Se=Object(z.a)(ge.CLEAR_FORM),Ae=Object(z.a)(ge.SUBMIT_FORM),Le=Object.assign({},i,n),Re=Object(u.b)((function(e){return{formManager:e.formManager}}),(function(e){return{actions:Object(h.b)(Le,e)}}))(_e),Pe=a(167),Ce=(a(119),Object(V.a)((function(e){return Object(W.a)({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}))),Fe=function(e){var t=e.message,a=e.type;return c.a.createElement("div",{className:Ce().root},c.a.createElement(Pe.a,{severity:a},t))},Ue=function(e){var t=e.children,a=e.notify,n=e.notifyMessage,r=e.notifyType,i=e.title;return c.a.createElement("div",{className:"standard"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("section",{className:"logo"},c.a.createElement("div",null,"jsfunfoo { }")),c.a.createElement("section",{className:"notify"},a?c.a.createElement(Fe,{type:r,message:n}):null),c.a.createElement("main",null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,i)),c.a.createElement("section",{className:"content"},t)),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021"))))},we=a(162),De=a(163),ke=Object(V.a)((function(e){return Object(W.a)({root:{display:"flex",alignItems:"center",marginBottom:10},wrapper:{margin:e.spacing(1),position:"relative",width:"100%"},button:{color:"#fff",backgroundColor:"#0065ff",width:"100%",padding:12,"&:hover":{backgroundColor:"#013f9e"}},buttonProgress:{color:"#3f51b5",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})),Me=function(e){var t=e.actions,a=e.onClick,n=e.id,r=e.type,i=e.value,o=e.observable.isSubmitting,l=ke();return c.a.createElement("div",{className:l.root},c.a.createElement("div",{className:l.wrapper},c.a.createElement(we.a,{color:"primary",className:l.button,disabled:!!o||void 0,id:n,onClick:function(e){t.unsetGlobalNotification(),"function"===typeof a&&a(e)},type:r,value:i,variant:"contained"},i),o&&c.a.createElement(De.a,{size:24,className:l.buttonProgress})))},Ge=Object.assign({},n),He=Object(u.b)((function(e){return{observable:e.observable}}),(function(e){return{actions:Object(h.b)(Ge,e)}}))(Me),Be=Object(V.a)((function(e){return Object(W.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"95%"}}})})),qe=function(e){var t=e.children,a=e.id,n=e.submitHandler,r=Be();return c.a.createElement("form",{id:a,className:r.root,onSubmit:n,noValidate:!0},t)},xe=function(e){Object(be.a)(a,e);var t=Object(pe.a)(a);function a(e){var n;return Object(fe.a)(this,a),(n=t.call(this,e)).handleOnSubmit=function(e){var t=n.props,a=t.actions,r=t.formManager,i=t.id,o=t.onSubmit,c=[],l=!1;e.preventDefault(),a.formSubmission({formId:i}),r.forms.forEach((function(e){e.formId===i&&(l=e.isValid,c=e.fields)}));var s={};c.forEach((function(e){var t,a=e.fieldId,n=e.value;(t=a,function(e){return function(a){return e[t]=a}})(s)(n)})),"function"===typeof o&&o(e,s,l)},e.actions.createNewForm({formId:e.id}),n}return Object(Ee.a)(a,[{key:"render",value:function(){return c.a.createElement(qe,Object.assign({submitHandler:this.handleOnSubmit},this.props))}}]),a}(c.a.Component),Ve=Object.assign({},i,n),We=Object(u.b)((function(e){return{formManager:e.formManager}}),(function(e){return{actions:Object(h.b)(Ve,e)}}))(xe),Qe=function(e){var t=e.actions,a=e.history,n=e.notification,r=n.notify,i=n.notifyMessage,o=n.notifyType,l=a.push;navigator.credentials&&navigator.credentials.get({mediation:"required",password:!0}).then((function(e){console.log("Fetch credentials",e),"password"===(null===e||void 0===e?void 0:e.type)&&t.httpRequest({credentials:e,method:"post",url:"/account/login",success:"UPDATE_PROFILE"})})).catch((function(e){console.log("Fetch credentials error",e)}));return c.a.createElement(Ue,{notify:r,notifyMessage:i,notifyType:o,title:"Sign in to your account"},c.a.createElement("div",null,c.a.createElement(We,{id:"SIGN_IN",onSubmit:function(e,a,n){n&&t.httpRequest({data:{username:a.email_address,password:a.pwd},method:"post",url:"/account/login",success:"UPDATE_PROFILE"})}},c.a.createElement(Re,{autocomplete:"off",formId:"SIGN_IN",id:"email_address",label:"Email address (required)",name:"username",type:"email",validator:"email"}),c.a.createElement(Re,{autocomplete:"off",formId:"SIGN_IN",id:"pwd",label:"Password (required)",name:"password",type:"password",validator:"default"}),c.a.createElement(He,{type:"submit",id:"sign_in",value:"Sign in"}),c.a.createElement(Y,{id:"createAccountLink",value:"Create account",onClick:function(){return l("/createAccount")}}))))},Xe=Object.assign({},i,n,r),ze=Object(u.b)((function(e){return{notification:e.globalNotification}}),(function(e){return{actions:Object(h.b)(Xe,e)}}))(Qe),$e=function(e){var t=e.history.push,a="CREATE_ACCOUNT",n=e.notification,r=n.notify,i=n.notifyMessage,o=n.notifyType;return c.a.createElement(Ue,{notify:r,notifyMessage:i,notifyType:o,title:"Create account"},c.a.createElement("div",null,c.a.createElement(We,{id:a,onSubmit:function(t,a,n){n&&e.actions.httpRequest({data:{firstname:a.first_name,lastname:a.last_name,username:a.email_address,password:a.pwd},method:"post",url:"/account/createAccount",success:"CREATE_PASSWORD_CREDENTIAL"})}},c.a.createElement(Re,{formId:a,id:"first_name",label:"First name (required)",type:"text",validator:"default"}),c.a.createElement(Re,{formId:a,id:"last_name",label:"Last name (required)",type:"text",validator:"default"}),c.a.createElement(Re,{autocomplete:"username",formId:a,id:"email_address",label:"Email address (required)",name:"username",type:"email",validator:"email"}),c.a.createElement(Re,{autocomplete:"new-password",formId:a,id:"pwd",label:"Password (required)",name:"password",type:"password",validator:"password"}),c.a.createElement(He,{type:"submit",id:"create_account",value:"Create Account"}),c.a.createElement(Y,{id:"signInLink",value:"Sign in",onClick:function(){return t("/login")}}))))},Ze=Object.assign({},n,r),Ke=Object(u.b)((function(e){return{notification:e.globalNotification}}),(function(e){return{actions:Object(h.b)(Ze,e)}}))($e),Je=(a(120),function(e){var t=e.children,a=e.notifyMessage,n=e.notifyType,r=e.title;return c.a.createElement("div",{className:"profile"},c.a.createElement("header",null,c.a.createElement("h1",null,"{ .js }")),c.a.createElement("section",{className:"breadcrumbs"},c.a.createElement("h2",null,r)),a?c.a.createElement("section",{className:"notification"},c.a.createElement("div",{className:"message ".concat(n)},a)):null,c.a.createElement("section",{className:"main"},t),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021")))}),Ye=(a(121),function(e){Object(be.a)(a,e);var t=Object(pe.a)(a);function a(){var e;Object(fe.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nameEditable:!1,emailEditable:!1,phoneEditable:!1},e.toggleEditName=function(t,a){e.setState({nameEditable:a})},e.toggleEditEmail=function(t,a){e.setState({emailEditable:a})},e.toggleEditPhone=function(t,a){e.setState({phoneEditable:a})},e.handleOnLogout=function(){e.props.actions.httpRequest({data:{},method:"post",url:"/account/logout"})},e}return Object(Ee.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.userProfileState,n=t.notification,r=a.firstName,i=a.lastName,o=a.email,l=a.phoneNumber,s=n.notify,u=n.notifyMessage,d=n.notifyType;return c.a.createElement(Je,{notify:s,notifyMessage:u,notifyType:d,title:"Welcome ".concat(r)},c.a.createElement("div",{className:"editProfile"},c.a.createElement("div",null,c.a.createElement(Y,{id:"logoutLink",value:"Logout",onClick:this.handleOnLogout})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(Re,{editable:this.state.nameEditable,id:"first_name",label:"First name (required)",type:"text",value:r}),c.a.createElement(Re,{editable:this.state.nameEditable,id:"last_name",label:"Last name (required)",type:"text",value:i}),c.a.createElement("div",{className:"buttons"},this.state.nameEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditName",value:"Cancel",onClick:function(t){return e.toggleEditName(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updateName",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editName",value:"Edit",onClick:function(t){return e.toggleEditName(t,!0)}},"Edit"))))),c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(Re,{editable:this.state.emailEditable,id:"email_address",label:"Email address (required)",type:"email",value:o}),c.a.createElement("div",{className:"buttons"},this.state.emailEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditEmail",value:"Cancel",onClick:function(t){return e.toggleEditEmail(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updateEmail",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editEmail",value:"Edit",onClick:function(t){return e.toggleEditEmail(t,!0)}},"Edit"))))),c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(Re,{editable:this.state.phoneEditable,id:"phone_number",label:"Phone number (required)",type:"email",value:l}),c.a.createElement("div",{className:"buttons"},this.state.phoneEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditPhone",value:"Cancel",onClick:function(t){return e.toggleEditPhone(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updatePhone",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editPhoneNumber",value:"Edit",onClick:function(t){return e.toggleEditPhone(t,!0)}},"Edit"))))))))}}]),a}(c.a.Component)),et=Object.assign({},n,r),tt=Object(u.b)((function(e){return{notification:e.globalNotification,userProfileState:e.userProfile}}),(function(e){return{actions:Object(h.b)(et,e)}}))(Ye),at=function(){return c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:me,key:"account-home"}),c.a.createElement(m.a,{exact:!0,path:"/login",component:ze,key:"acount-signin"}),c.a.createElement(m.a,{exact:!0,path:"/createAccount",component:Ke,key:"acount-create-account"}),c.a.createElement(m.a,{exact:!0,path:"/user/profile",component:tt,key:"acount-user-profile"}))},nt=(a(122),function(){var e=window.__REDUX_STATE__||{};window.__REDUX_STATE__&&delete window.__REDUX_STATE__;var t=[G,D,k,q,H],a=(0,h.d)(h.a.apply(void 0,t));return Object(h.e)(F,e,a)}());s.a.render(c.a.createElement(u.a,{store:nt},c.a.createElement(d.a,{history:B,store:nt},c.a.createElement(m.b,{history:B},c.a.createElement(at,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a.p+"static/media/home-1.01e6eb45.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/home-2.7dbed7e2.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/home-3.78f06cfd.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/home-4.5aad7231.jpg"},90:function(e,t,a){e.exports=a(123)}},[[90,1,2]]]);
//# sourceMappingURL=main.4645ab7d.chunk.js.map