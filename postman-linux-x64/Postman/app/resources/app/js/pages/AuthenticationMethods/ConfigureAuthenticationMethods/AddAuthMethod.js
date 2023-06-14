"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[143],{"./iam/src/TeamSettings/pages/AuthenticationMethods/ConfigureAuthenticationMethods/AddAuthMethod.js":function(e,t,n){n.r(t);var a=n("../../node_modules/react/index.js"),o=n("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Spinner/Spinner.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/ResponsiveContainer/ResponsiveContainer.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Breadcrumb/Breadcrumb.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),m=n("../../node_modules/@postman/aether/esmLib/src/components/Dropdown/SingleSelect/SingleSelect.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/TextInput/TextInput.js"),u=n("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),p=n("../../node_modules/@postman/aether/esmLib/src/components/ButtonGroup/ButtonGroup.js"),h=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),E=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),g=n("./node_modules/lodash/lodash.js"),T=n.n(g),f=n("./js/services/NavigationService.js"),_=n("./iam/src/common/RouteIdentifierConfig.js"),I=n("./iam/src/TeamSettings/services/TeamAPIService.js");const b=[{id:_.AUTHENTICATION_ROUTE_IDENTIFIER,name:"Authentication"},{id:_.ADD_AUTHENTICATION_METHOD_ROUTE_IDENTIFIER,name:"Add authentication method"}];t.default=()=>{const[e,t]=(0,a.useState)(),[n,g]=(0,a.useState)([]),[S,v]=(0,a.useState)(!0),[A,j]=(0,a.useState)(!1),[y,x]=(0,a.useState)(""),{addToast:C}=(0,o.default)();(0,a.useEffect)((()=>{(0,I.getSSOProviders)().then((e=>{v(!1),g(T().get(e,"body.providers")),t(1===T().get(e,"body.providers",[]).length?T().get(e,"body.providers[0]"):null)}))}),[]);return a.createElement(a.Fragment,null,S?a.createElement(s.default,{height:"100%",justifyContent:"center",alignItems:"center"},a.createElement(r.default,null)):a.createElement(i.default,{type:"row",overflow:"visible",padding:"spacing-xxl spacing-zero"},a.createElement(i.default,{span:4,overflow:"unset"}," ",a.createElement("div",null)),a.createElement(i.default,{type:"column",span:4,maxWidth:"500px",overflow:"unset"},a.createElement(s.default,{direction:"column",gap:"spacing-xl"},a.createElement(s.default,{width:"100%",padding:{paddingBottom:"spacing-s"}},a.createElement(d.Breadcrumb,{onItemClick:e=>{f.default.transitionTo(e.id)}},b.map((e=>a.createElement(d.BreadcrumbItem,{itemData:e,key:e.id},e.name))))),a.createElement(l.default,{type:"h1",isTruncated:!0,text:"Add authentication method",tooltip:"Add authentication method"}),a.createElement(m.default,{isLoading:S,onChange:e=>{t(e)},options:n,value:e,placeholder:"Select...",label:"Authentication type",helperText:"Select the SSO provider whose authentication you wish to configure."}),a.createElement(c.default,{placeholder:"Enter a name",value:y,onChange:e=>x(e.target.value),label:a.createElement(u.default,{text:"Authentication name"}),helperText:"Enter a user friendly name for this authentication method."}),a.createElement(p.default,null,a.createElement(h.default,{isDisabled:!(y&&e),isLoading:A,type:"primary",onClick:()=>{j(!0),(0,I.createAuthScheme)(y,e.value).then((e=>{const t=T().get(e,"body.auth.uid");f.default.transitionTo(_.EDIT_AUTHENTICATION_METHOD_DETAILS_ROUTE_IDENTIFIER,{uid:t})})).catch((e=>{C({status:"error",title:"Something went wrong",description:T().get(e,"error.message","An error occurred while creating the auth scheme. Try again after some time.")})})).finally((()=>{j(!1)}))},text:"Continue"}),a.createElement(h.default,{type:"secondary",onClick:()=>{f.default.transitionTo(_.AUTHENTICATION_ROUTE_IDENTIFIER)},text:"Cancel"})),a.createElement(E.default,{color:"content-color-secondary"},"Configure identity provider details in the next step.")))))}}}]);