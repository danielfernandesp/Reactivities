"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[144],{"../../node_modules/@postman/aether/esmLib/src/components/FileUploader/FileUploader.js":function(e,t,n){n.r(t);var a=n("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("../../node_modules/react/index.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("../../node_modules/prop-types/index.js"),r=n.n(o),l=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),u=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),m=s.default.input.attrs({type:"file"}).withConfig({displayName:"FileUploader__StyledInputFile",componentId:"yxf6ba-0"})(["height:0.1px;opacity:0;width:0.1px;z-index:-1;&:focus + label{box-shadow:",";outline:none;}"],(function(e){return e.theme["shadow-focus"]})),p=s.default.label.withConfig({displayName:"FileUploader__StyledFileUploaderLabel",componentId:"yxf6ba-1"})(["user-select:none;color:",";font-size:",";width:max-content;height:",";vertical-align:middle;line-height:",";display:inline-block;padding:",";border:",";border-color:",";box-sizing:border-box;border-radius:",";margin-top:",";&:hover{cursor:",";border-color:",";}"],(function(e){return e.isDisabled?e.theme["content-color-tertiary"]:e.theme["content-color-primary"]}),(function(e){return e.theme["text-size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return"calc(".concat(e.theme["line-height-xxl"]," - 2px)")}),(function(e){return"".concat(e.theme["spacing-zero"]," ").concat(e.theme["spacing-m"])}),(function(e){return e.theme["button-outline-border"]}),(function(e){return e.theme["button-outline-border-color"]}),(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["spacing-s"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return!e.isDisabled&&e.theme["button-outline-hover-border-color"]})),f=s.default.div.withConfig({displayName:"FileUploader__StyleFileListWrapper",componentId:"yxf6ba-2"})(["width:320px;height:32px;border-radius:",";padding-left:",";display:flex;justify-content:space-between;align-items:'center';background-color:",";& .aether-remove-uploaded-file-btn{border-top-left-radius:0;border-bottom-left-radius:0;}color:",";"],(function(e){return e.theme["border-radius-default"]}),(function(e){return e.theme["spacing-m"]}),(function(e){return e.theme["background-color-secondary"]}),(function(e){return e.theme["content-color-primary"]})),h=s.default.div.withConfig({displayName:"FileUploader__StyledFileNameContainer",componentId:"yxf6ba-3"})(["display:flex;align-items:center;width:258px;"]);var g=i.forwardRef((function(e,t){var n=e.initialList,s=e.label,o=e.helperText,r=e.actionLabel,g=e.id,y=e.name,b=e.className,E=e.isDisabled,v=e.multiple,S=e.onChange,x=e.accept,T=e.autoFocus,L=e["data-testid"],_=e["data-click"],w=(0,i.useState)(!v&&Array.isArray(n)?n:[]),I=(0,a.default)(w,2),A=I[0],j=I[1],C=(0,i.useRef)(null);C=t||C;var R=(0,i.useRef)(null);return i.createElement(l.default,{direction:"column"},function(e){return"string"==typeof e?i.createElement(d.default,{size:"medium"},e):e&&i.isValidElement(e)&&e.type===d.default?i.cloneElement(e,{size:"medium"}):null}(s),o&&i.createElement(c.default,{type:"_input-meta-text",color:"content-color-secondary",lineLengthType:"none"},o),i.createElement(m,{id:g,ref:C,onChange:function(e){var t=e.target,n=t&&t.files;0!==n.length?(j(Object.values(n).map((function(e){return{name:e.name}}))),R.current=n,S&&!E&&S(n)):C.current.files=R.current},multiple:v,disabled:E,accept:x,name:y,className:b,"data-testid":L,"data-click":_,autoFocus:T}),i.createElement(p,{"data-aether-id":"aether-label",htmlFor:g,isDisabled:E},r),A.length>0&&i.createElement(l.default,{direction:"column",padding:{paddingTop:"spacing-l"},gap:"spacing-xs"},A.map((function(e){return i.createElement(f,{className:"aether-file-list-wrapper","data-aether-id":"aether-fileUploader",key:e.name},i.createElement(h,null,i.createElement(c.default,{type:"body-medium",isTruncated:!0},e.name)),i.createElement(u.default,{className:"aether-remove-uploaded-file-btn",onClick:function(){!function(e){for(var t=C.current&&C.current.files,n=new DataTransfer,a=0;a<t.length;a+=1){var i=t[a];e!==i.name&&n.items.add(i)}j(A.filter((function(t){return e!==t.name}))),C.current.files=n.files,S&&!E&&S(C.current.files)}(e.name)},type:"tertiary",icon:"icon-action-close-stroke"}))}))))}));g.defaultProps={initialList:void 0,helperText:"",actionLabel:"Add Files",isDisabled:!1,multiple:!1,accept:"*",name:"",className:"",autoFocus:!1,"data-testid":"aether-file-uploader","data-click":""},g.propTypes={initialList:r().arrayOf(r().object),label:r().oneOfType([r().string,r().instanceOf(d.default)]).isRequired,onChange:r().func.isRequired,helperText:r().string,actionLabel:r().node,id:r().string.isRequired,name:r().string,className:r().string,isDisabled:r().bool,multiple:r().bool,accept:r().string,autoFocus:r().bool,"data-testid":r().string,"data-click":r().string},g.displayName="FileUploader",t.default=g},"./iam/src/TeamSettings/pages/AuthenticationMethods/ConfigureAuthenticationMethods/ConfigureAuthDetails.js":function(e,t,n){n.r(t);var a=n("../../node_modules/react/index.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/CheckBox/Checkbox.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),o=n("../../node_modules/@postman/aether/esmLib/src/components/ResponsiveContainer/ResponsiveContainer.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Breadcrumb/Breadcrumb.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),u=n("../../node_modules/@postman/aether/esmLib/src/components/ButtonGroup/ButtonGroup.js"),m=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),p=n("./iam/src/common/RouteIdentifierConfig.js"),f=n("./js/services/NavigationService.js"),h=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),g=n("./iam/src/TeamSettings/pages/AuthenticationMethods/ConfigureAuthenticationMethods/ServiceProviderDetails.js"),y=n("./iam/src/TeamSettings/pages/AuthenticationMethods/ConfigureAuthenticationMethods/IdentityProviderDetails.js"),b=n("./iam/src/common/styled-components/StyledLoader.js"),E=n("./iam/src/TeamSettings/services/TeamAPIService.js"),v=n("./iam/src/common/utils/index.js"),S=n("./node_modules/lodash/lodash.js");const x=h.default.div`
  border-bottom: var(--border-width-default) var(--border-style-solid) var(--border-color-default);
  width: 100%;
`,T=(0,h.default)(i.default)`
  & > span {
  width: 100%;
  }
`,L=[{id:p.AUTHENTICATION_ROUTE_IDENTIFIER,name:"Authentication"},{id:p.EDIT_AUTHENTICATION_METHOD_ROUTE_IDENTIFIER,name:"Edit authentication method"},{id:p.EDIT_AUTHENTICATION_METHOD_DETAILS_ROUTE_IDENTIFIER,name:"Configure identity provider"}];t.default=()=>{const[e,t]=(0,a.useState)(!0),[n,i]=(0,a.useState)(!1),[h,_]=(0,a.useState)({}),[w,I]=(0,a.useState)(""),[A,j]=(0,a.useState)(""),[C,R]=(0,a.useState)(""),[U,P]=(0,a.useState)(""),[k,F]=(0,a.useState)(!1),[D,M]=(0,a.useState)(!1),N=f.default.getCurrentRouteParams().uid,{addToast:O}=(0,s.default)(),B=({_certificate:e,_idPIssuer:t,_ssoUrl:a})=>{const i={allowSignUp:n,idpCertificate:e||C,idpIssuer:t||A,idpURL:a||w,name:S.get(h,"name"),requestSigning:{enabled:k}};return(0,E.authSchemes)("PUT",N,i)};return(0,a.useEffect)((()=>{!async function(){try{const e=await(0,E.authSchemes)("GET",N);_(S.get(e,"body.auth")),t(!1)}catch(e){t(!1)}}()}),[]),(0,a.useEffect)((()=>{I(S.get(h,"config.identityProvider.url")),j(S.get(h,"config.identityProvider.issuer")),R(S.get(h,"config.identityProvider.certificate")),P(S.get(h,"config.identityProvider.relayState")),F(S.get(h,"config.identityProvider.requestSigning.enabled")),i(S.get(h,"allowSignUp"))}),[h]),e?a.createElement(b.default,null):a.createElement(o.default,{type:"row","overflow-y":"scroll",padding:"spacing-xxl spacing-zero"},a.createElement(o.default,{span:3,overflow:"unset"}," ",a.createElement("br",null)),a.createElement(o.default,{span:6,maxWidth:"container-width-medium",overflow:"unset"},a.createElement(r.default,{direction:"column",gap:"spacing-xl"},a.createElement(r.default,{width:"100%",padding:{paddingBottom:"spacing-s"}},a.createElement(l.Breadcrumb,{onItemClick:e=>{f.default.transitionTo(e.id)}},L.map((e=>a.createElement(l.BreadcrumbItem,{itemData:e,key:e.id},e.name))))),a.createElement(r.default,{direction:"column",gap:"spacing-s"},a.createElement(d.default,{type:"h1",isTruncated:!0,text:"Configure identity provider",tooltip:"Configure identity provider"}),a.createElement(c.default,{text:"Enter the service provider details into your identity provider's SSO form and use the generated URLs and certificate to fill in the identity provider details.",size:"large",type:"secondary"})),a.createElement(o.default,{type:"row",overflow:"visible",gap:"spacing-zero"},a.createElement(o.default,{span:6,overflow:"unset"},a.createElement(g.default,{serviceProviderDetails:S.get(h,"config.serviceProvider"),signSAMLRequests:k,setSignSAMLRequests:F})),a.createElement(o.default,{span:6,overflow:"unset"},a.createElement(y.default,{ssoUrl:w,setSsoUrl:I,idPIssuer:A,setIdPIssuer:j,certificate:C,setCertificate:R,relayState:U,setRelayState:P,auth_id:N,name:S.get(h,"name"),updateAuthSchemes:B}))),a.createElement(x,null),a.createElement(r.default,{justifyContent:"space-between"},a.createElement(r.default,{width:"55%"},a.createElement(T,{isChecked:n,label:"Automatically add new users using this authentication method to my team.",onChange:()=>{i(!n)}})),a.createElement(u.default,null,a.createElement(m.default,{type:"secondary",onClick:()=>{f.default.transitionTo(p.AUTHENTICATION_ROUTE_IDENTIFIER)},text:"Configure Later"}),a.createElement(m.default,{isLoading:D,isDisabled:!(w&&(0,v.isLinkValid)(w,"website")&&A&&(0,v.isLinkValid)(A,"website")&&C),type:"primary",onClick:()=>{if(w===S.get(h,"config.identityProvider.url")&&A===S.get(h,"config.identityProvider.issuer")&&C===S.get(h,"config.identityProvider.certificate")&&n===S.get(h,"allowSignUp")&&k==S.get(h,"config.identityProvider.requestSigning.enabled"))return f.default.transitionTo(p.AUTHENTICATION_ROUTE_IDENTIFIER);M(!0),B({}).then((e=>{f.default.transitionTo(p.AUTHENTICATION_ROUTE_IDENTIFIER),O({status:"success",title:"Authentication configured",description:`Users will now be able to authenticate via ${S.get(h,"name")}.`})})).catch((e=>{O({status:"error",title:"Something went wrong",description:S.get(e,"error.message","An error occurred while updating the auth scheme. Try again after some time.")})})).finally((()=>{M(!1)}))},text:"Save Authentication"}))))))}},"./iam/src/TeamSettings/pages/AuthenticationMethods/ConfigureAuthenticationMethods/IdentityProviderDetails.js":function(e,t,n){n.r(t);var a=n("../../node_modules/react/index.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),o=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/FileUploader/FileUploader.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/TextInput/TextInput.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),u=n("../../node_modules/@postman/aether/esmLib/src/components/TextArea/TextArea.js"),m=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-delete-stroke.js"),p=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),f=n("./iam/src/common/utils/index.js"),h=n("./iam/src/TeamSettings/services/TeamAPIService.js"),g=n("./node_modules/lodash/lodash.js");const y=(0,p.default)(i.default)`
  width: fit-content;
`,b=p.default.div`
  width: 100%;
  text-align: center;
  border-bottom: var(--border-width-default) var(--border-style-solid) var(--border-color-default);
  margin: var(--spacing-l) 0;
`,E=p.default.span`
  font-size: var(--text-size-m);
  background: var(--background-modal-primary);
  padding: 0 var(--spacing-m);
  color: var(--content-color-secondary);
`;t.default=({ssoUrl:e,setSsoUrl:t,idPIssuer:n,setIdPIssuer:p,certificate:v,setCertificate:S,relayState:x,setRelayState:T,auth_id:L,name:_,updateAuthSchemes:w})=>{const[I,A]=(0,a.useState)(!1),[j,C]=(0,a.useState)(!1),[R,U]=(0,a.useState)(!1),{addToast:P}=(0,s.default)();return a.createElement(o.default,{direction:"column",gap:"spacing-l",padding:{paddingLeft:"spacing-xxl"}},a.createElement(r.default,{type:"h2",isTruncated:!0,text:"Identity provider details",tooltip:"Identity provider details",hasBottomSpacing:!0}),a.createElement(l.default,{isDisabled:R,label:"Identity provider metadata file",helperText:"Upload a metadata file to configure the identity provider in one step.",id:"custom-title-file-uploader",actionLabel:"Upload",accept:".xml",onChange:e=>{let n=e[0];if(n)try{const e=new FileReader,a=new DOMParser;e.readAsText(n),e.onload=function(e){const n=e.target.result,i=(0,f.parseMetadataFile)(a,n),s=i._ssoUrl,o=i._idPIssuer,r=i._certificate;t(s),p(o),S(r),U(!0),w({_ssoUrl:s,_idPIssuer:o,_certificate:r}).then((()=>{P({status:"success",title:"Authentication configured",description:`Users will now be able to authenticate via ${_}.`})})).catch((e=>{P({status:"error",title:"Something went wrong",description:g.get(e,"error.message","An error occurred while updating the auth scheme. Try again after some time.")})})).finally((()=>{U(!1)}))}}catch(e){P({title:"Something went wrong.",description:g.get(e,"error.message")||"An error occurred while uploading the identity provider metadata file. Please try again in sometime, or contact support.",status:"error"})}}}),a.createElement(o.default,{alignItems:"center"},a.createElement(b,null),a.createElement(E,null,"OR"),a.createElement(b,null)),a.createElement(d.default,{value:e,label:a.createElement(c.default,{text:"SSO URL"}),helperText:"This is the URL to which Postman sends a SAML request to start the login sequence.",onChange:e=>{t(e.target.value)},validationStatus:e&&!(0,f.isLinkValid)(e,"website")&&"error",validationMessage:"Please enter a valid URL"}),a.createElement(d.default,{value:n,label:a.createElement(c.default,{text:"Identity provider issuer"}),helperText:"This is the URL that uniquely identifies your SAML identity provider. SAML assertions sent to Postman must match this value exactly in the <saml:Issuer> attribute of SAML assertions.",onChange:e=>{p(e.target.value)},validationStatus:n&&!(0,f.isLinkValid)(n,"website")&&"error",validationMessage:"Please enter a valid URL"}),a.createElement(u.default,{placeholder:"X.509 Certificate",value:v,label:a.createElement(c.default,{text:"X.509 Certificate"}),helperText:"The authentication certificate issued by your identity provider.",onChange:e=>{S(e.target.value)}}),a.createElement(o.default,{direction:"column",gap:"spacing-s"},a.createElement("div",null,x?a.createElement(d.default,{value:x,enableCopy:!0,label:a.createElement(c.default,{type:"primary",text:"Relay state"}),helperText:"In an IdP initiated single sign on scenario, this parameter should be sent along with the SAML Response."}):a.createElement(a.Fragment,null,a.createElement(c.default,{text:"Relay state"}),a.createElement(c.default,{size:"small",text:"In an IdP initiated single sign on scenario, this parameter should be sent along with the SAML Response.",type:"secondary"}))),a.createElement(o.default,{gap:"spacing-m"},a.createElement(y,{isLoading:I,type:"secondary",onClick:()=>{A(!0),(0,h.updateRelayState)("POST",L).then((e=>{P({description:"Relay state generated.",status:"success"}),T(g.get(e,"body.relayState"))})).catch((e=>{P({title:"Something went wrong.",description:g.get(e,"error.message")||"An error occurred while generating a relay state. Please try again in sometime, or contact support.",status:"error"})})).finally((()=>{A(!1)}))},text:x?"Regenerate Relay State":"Generate Relay State"}),x&&a.createElement(i.default,{icon:a.createElement(m.default,null),isLoading:j,onClick:()=>{(async()=>{C(!0);try{const e=await(0,h.deleteRelayState)(L),t=await e.text();if(!e.ok||"OK"!==t)throw Error(t);T(""),C(!1),P({description:"Relay state deleted.",status:"success"})}catch(e){T(""),C(!1),P({description:e||"Relay state deleted.",status:"success"})}})()},tooltip:"Delete relay state"}))))}},"./iam/src/TeamSettings/pages/AuthenticationMethods/ConfigureAuthenticationMethods/ServiceProviderDetails.js":function(e,t,n){n.r(t);var a=n("../../node_modules/react/index.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),o=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/TextInput/TextInput.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/CheckBox/Checkbox.js"),c=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),u=n("./appsdk/components/link/Link.js"),m=n("./node_modules/lodash/lodash.js");const p=(0,c.default)(i.default)`
  width: fit-content;
`;t.default=({serviceProviderDetails:e,signSAMLRequests:t,setSignSAMLRequests:n})=>a.createElement(s.default,{direction:"column",gap:"spacing-l",padding:{paddingRight:"spacing-xxl"},border:{borderRight:"border-width-default",borderColor:"border-color-default"}},a.createElement(o.default,{type:"h2",isTruncated:!0,text:"Service provider details (Postman)",tooltip:"Service provider details (Postman)",hasBottomSpacing:!0}),a.createElement(r.default,{value:m.get(e,"entityID"),enableCopy:!0,label:a.createElement(l.default,{text:"Entity ID"}),helperText:"This entity is the issuer in SAML requests generated by Postman, and is also the expected audience of any inbound SAML Responses."}),a.createElement(r.default,{value:m.get(e,"loginURL"),enableCopy:!0,label:a.createElement(l.default,{type:"primary",text:"Login URL"}),helperText:"A shortcut URL to initiate Single Sign On."}),a.createElement(r.default,{value:m.get(e,"acsURL"),enableCopy:!0,label:a.createElement(l.default,{text:"ACS URL"}),helperText:"The SAML Assertion Consumer Service (ACS) URL is the location to which the SAML assertion is sent with an HTTP POST call."}),a.createElement(s.default,{direction:"column",gap:"spacing-xs"},a.createElement("div",null,a.createElement(l.default,{text:"Encryption certificate"}),a.createElement(l.default,{text:"Public key certificate used to digitally encrypt the SAML assertion.",type:"secondary"})),a.createElement(u.default,{to:m.get(e,"certificateUrl"),target:"_blank"},a.createElement(p,{type:"secondary",text:"Download"}))),a.createElement(s.default,{direction:"column",gap:"spacing-s"},a.createElement("div",null,a.createElement(l.default,{text:"Sign SAML requests",fieldType:"optional"}),a.createElement(l.default,{text:"For an added layer of security, Postman will sign authentication requests sent to the identity provider. Just download the certificate below and send it to your identity provider during setup so they can verify the signature.",type:"secondary"})),a.createElement(d.default,{isChecked:t,label:"Sign SAML requests",onChange:()=>{n(!t)}}),a.createElement(u.default,{to:m.get(e,"certificate.signing.url"),target:"_blank"},a.createElement(p,{isDisabled:!t,type:"secondary",text:"Download"}))))},"./iam/src/common/styled-components/StyledLoader.js":function(e,t,n){n.r(t);var a=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Spinner/Spinner.js");const s=(0,a.default)(i.default)`
  height: 90vh;
  display: grid;
  place-content: center;
`;t.default=s}}]);