"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[142],{"../../node_modules/@postman/aether/esmLib/src/components/Stepper/Step.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),a=n.n(s),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),p=r.default.span.withConfig({displayName:"Step__StyledStatusIndicator",componentId:"hb80lw-0"})(["width:12px;height:12px;box-sizing:border-box;border-radius:",";border:",";background-color:",";"],(function(e){return e.theme["border-radius-max"]}),(function(e){return"progress"!==e.status?"".concat(e.theme["border-width-default"]," ").concat(e.theme["border-style-solid"]," ").concat(e.theme["grey-40"]):""}),(function(e){return"progress"===e.status?e.theme["base-color-brand"]:e.theme["background-color-primary"]})),m=r.default.div.withConfig({displayName:"Step__StyledStepWrapper",componentId:"hb80lw-1"})(["display:inline;padding-left:",";& > .aether-step__label{& > .aether-button__text{color:",";&:hover{color:",";}}}"],(function(e){return e.theme["spacing-xs"]}),(function(e){return e.isDisabled?e.theme["content-color-secondary"]:e.theme["content-color-primary"]}),(function(e){return e.isDisabled?e.theme["content-color-secondary"]:e.theme["content-color-link"]})),u=(0,r.default)(l.default).withConfig({displayName:"Step__StyledCustomCurrentStepText",componentId:"hb80lw-2"})(["line-height:1.334;"]);function f(e){var t=e.label,n=e.status,s=e.isDisabled,a=e._stepIndex,r=e._onChange,l=e._isActive,f=e.className;return o.createElement(d.default,{basis:"0px",grow:1,shrink:1,alignItems:"center",className:f,padding:{paddingRight:"spacing-l"}},"completed"===n?o.createElement(i.default,{name:"icon-state-success-stroke-small",color:"content-color-primary",size:"small"}):o.createElement(p,{status:n}),o.createElement(m,{isDisabled:s},l?o.createElement(u,{color:"content-color-primary"},t):o.createElement(c.default,{className:"aether-step__label",isDisabled:s,text:t,type:"plain",onClick:function(){!s&&r&&r(a)}})))}f.defaultProps={className:"",status:"pending",isDisabled:!1,_isActive:!1,_stepIndex:0,_onChange:null},f.propTypes={label:a().string.isRequired,isDisabled:a().bool,_isActive:a().bool,status:a().oneOf(["pending","progress","completed"]),_stepIndex:a().number,_onChange:a().func,className:a().string}},"../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepHeader.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),a=n.n(s),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/Step.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),c=r.default.div.withConfig({displayName:"StepHeader__StyledProgressLine",componentId:"sc-1xnw5na-0"})(["position:relative;width:100%;height:2px;background-color:",";&:after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;height:2px;width:",";max-width:100%;background-color:",";}"],(function(e){return e.theme["border-color-strong"]}),(function(e){return"".concat((e.activeStepIndex+1)/e.totalSteps*100,"%")}),(function(e){return e.theme["stepper-progress-line-background-color"]}));function l(e){var t=0,n=e._activeStepIndex,s=e._onChange,a=e.className,r=e.children,l=o.Children.map(r,(function(e){var a=e;return(0,o.isValidElement)(e)&&[i.default].includes(e.type)?(a=(0,o.cloneElement)(e,{_isActive:t===n,_stepIndex:t,_onChange:s}),t+=1,a):null}));return o.createElement(d.default,{gap:"spacing-s",className:a,direction:"column"},o.createElement(c,{activeStepIndex:n,totalSteps:l.length}),o.createElement(d.default,null,l))}l.defaultProps={className:"",_activeStepIndex:0,_onChange:null},l.propTypes={_activeStepIndex:a().number,_onChange:a().func,className:a().string,children:a().oneOfType([a().arrayOf(a().node),a().node]).isRequired}},"../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepPanel.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),a=n.n(s),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),p=r.default.div.withConfig({displayName:"StepPanel__StyledStepPanelElement",componentId:"sc-7pb8oz-0"})(["display:",";color:",";"],(function(e){return e._isActive?"block":"none"}),(function(e){return e.theme["content-color-primary"]}));function m(e){var t=e._isActive,n=e._index,s=e.heading,a=e.description,r=e.primaryAction,m=e.secondaryAction,u=e.className,f=e.children;return o.createElement(p,{_isActive:t,className:u,key:"STEP_CONTENT ".concat(n)},o.createElement(l.default,{direction:"column",gap:"spacing-xxl"},o.createElement(l.default,{direction:"column",gap:"spacing-l"},s||a?o.createElement(l.default,{direction:"column",gap:"spacing-s"},s?o.createElement(i.default,{type:"h3",text:s}):"",a?o.createElement(c.default,{type:"para"},a):""):"",f),o.createElement(l.default,{gap:"spacing-m",grow:1,shrink:1,justifyContent:"flex-end"},function(e){if(e&&e.type===d.default&&"secondary"===(e.props&&e.props.type))return e;return null}(m),function(e){if(e&&e.type===d.default&&"primary"===(e.props&&e.props.type))return e;return null}(r))))}m.defaultProps={_isActive:!1,heading:"",description:"",primaryAction:null,secondaryAction:null,className:"",_index:null},m.propTypes={_isActive:a().bool,_index:a().number,heading:a().string,description:a().string,primaryAction:function(e){var t=e.primaryAction;if(t){if(t.type!==d.default)return new Error("StepPanel: primaryAction prop only accepts Aether button component.");if("primary"!==(t.props&&t.props.type))return new Error("StepPanel: primaryAction prop only accepts button type primary.")}return null},secondaryAction:function(e){var t=e.secondaryAction;if(t){if(t.type!==d.default)return new Error("StepPanel: secondaryAction prop only accepts Aether button component.");if("secondary"!==(t.props&&t.props.type))return new Error("StepPanel: secondaryAction prop only accepts button type secondary.")}return null},className:a().string,children:a().oneOfType([a().arrayOf(a().node),a().node]).isRequired}},"../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepPanels.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),a=n.n(s),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepPanel.js"),d=r.default.div.withConfig({displayName:"StepPanels__StyledStepPanelContainer",componentId:"sc-1bky6oo-0"})(["padding-top:",";padding-bottom:",";"],(function(e){return e.theme["spacing-xl"]}),(function(e){return e.theme["spacing-xl"]}));function c(e){var t=0,n=e._activeStepIndex,s=e.className,a=e.children,r=o.Children.map(a,(function(e){var s=e;return(0,o.isValidElement)(e)&&[i.default].includes(e.type)?(s=(0,o.cloneElement)(e,{_isActive:t===n,_index:t}),t+=1,s):null}));return o.createElement(d,{className:s},r)}c.defaultProps={_activeStepIndex:0,className:""},c.propTypes={_activeStepIndex:a().number,className:a().string,children:a().oneOfType([a().arrayOf(a().node),a().node]).isRequired}},"../../node_modules/@postman/aether/esmLib/src/components/Stepper/Stepper.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/prop-types/index.js"),a=n.n(s),r=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepHeader.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepPanels.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js");function c(e){var t=e.activeStepIndex,n=e.onChange,s=e.className,a=e.children,c=e["data-testid"],l=e["data-click"],p=o.Children.map(a,(function(e){if((0,o.isValidElement)(e)){if([r.default].includes(e.type))return(0,o.cloneElement)(e,{_activeStepIndex:t,_onChange:n});if([i.default].includes(e.type))return(0,o.cloneElement)(e,{_activeStepIndex:t})}return null}));return o.createElement(d.default,{className:s,direction:"column","data-aether-id":"aether-stepper","data-testid":c,"data-click":l,width:"100%"},p)}c.defaultProps={className:"",onChange:null,"data-testid":"aether-stepper","data-click":""},c.propTypes={activeStepIndex:a().number.isRequired,onChange:a().func,className:a().string,children:a().oneOfType([a().arrayOf(a().node),a().node]).isRequired,"data-testid":a().string,"data-click":a().string}},"./iam/src/TeamSettings/pages/AddNewDomain/AddNewDomain.js":function(e,t,n){n.r(t);var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/CheckBox/Checkbox.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/Stepper.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepHeader.js"),p=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/Step.js"),m=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepPanels.js"),u=n("../../node_modules/@postman/aether/esmLib/src/components/Stepper/StepPanel.js"),f=n("../../node_modules/@postman/aether/esmLib/src/components/TextInput/TextInput.js"),h=n("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),y=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-direction-back.js"),g=n("./js/services/NavigationService.js"),_=n("./iam/src/common/RouteIdentifierConfig.js"),b=n("./iam/src/common/utils/index.js"),x=n("./iam/src/common/hooks/usePostmanGatewayService.js"),v=n("./iam/src/common/components/TxtRecordContainer.js"),S=n("./node_modules/lodash/lodash.js");t.default=()=>{const[e,t]=(0,o.useState)(""),{addToast:n}=(0,s.default)(),[E,j]=(0,o.useState)(!1),[T,w]=(0,o.useState)(""),[C,I]=(0,o.useState)(0),[A,N]=(0,o.useState)(["progress","pending"]),[L,R]=(0,o.useState)(!1);(0,o.useEffect)((()=>(D(),D.cancel)),[e]);const k=t=>{if(S.isEmpty(e))return!!t||void j(!0);const n=(0,b.withoutTrailingAndLeadingWhiteSpace)(e);if(!n.length)return!t&&(w(""),void j(!1));const o=n.split("."),s=o[o.length-1];return o.length<2?!!t||(w("error"),void j(!0)):/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(s)?/\s/.test(s)?!!t||(w("error"),void j(!0)):!t&&(w(""),void j(!1)):!!t||(w("error"),void j(!0))},D=(0,o.useCallback)(S.debounce(k,500),[e]),{serviceStatus:P,callServiceUsingPostmanGateway:F,serviceResponse:O}=(0,x.default)({rawResponse:!0,parsedResponse:!0,fireImmediately:!1,transform:e=>e.json(),onError:e=>{n({title:"Unable to submit request",status:"error",description:S.get(e,"e_lod.context.message","Something went wrong")})},onSuccess:()=>{I(1),N(["completed","progress"])}}),U=null==O?void 0:O.domain,{serviceStatus:H,callServiceUsingPostmanGateway:B}=(0,x.default)({rawResponse:!1,parsedResponse:!0,fireImmediately:!1,onSuccess:e=>{n({status:"info",description:"Domain added"}),g.default.transitionTo(_.DOMAIN_CAPTURE_ROUTE_IDENTIFIER)},onError:e=>{n({status:"info",description:"Domain added"}),g.default.transitionTo(_.DOMAIN_CAPTURE_ROUTE_IDENTIFIER)}}),q=()=>o.createElement(o.Fragment,null,o.createElement(a.default,{direction:"column",gap:"spacing-xl",width:"100%"},o.createElement(v.default,{txtRecord:null==U?void 0:U.txtRecord})),o.createElement(r.default,{isChecked:L,label:"I have added the TXT record to the DNS tool.",onChange:()=>{R(!L)}}));return o.createElement(a.default,{justifyContent:"center",padding:{paddingTop:"spacing-xxl"}},o.createElement(a.default,{width:"480px",gap:"spacing-xxl",direction:"column"},o.createElement(a.default,null,o.createElement(i.default,{type:"plain",icon:o.createElement(y.default,{color:"content-color-link"}),text:"Domains",onClick:e=>{g.default.transitionTo(_.DOMAIN_CAPTURE_ROUTE_IDENTIFIER),e.preventDefault()}})),o.createElement(d.default,{type:"h1",text:"Add Domain"}),o.createElement(c.default,{activeStepIndex:C,onChange:I},o.createElement(l.default,null,o.createElement(p.default,{status:A[0],label:"Enter domain",isDisabled:"pending"===A[0]}),o.createElement(p.default,{status:A[1],label:"Add verification record",isDisabled:"pending"===A[1]})),o.createElement(m.default,null,o.createElement(u.default,{heading:"Enter domain",primaryAction:o.createElement(i.default,{isDisabled:S.isEmpty(e)||E,isLoading:P===x.default.serviceStatus.pending,type:"primary",text:"Generate Verification Record","data-testid":"generate-verification-record-button",onClick:()=>F({method:"POST",path:"/api/domains?e_lod=rcv",service:"identity",body:{domain:e}})}),secondaryAction:o.createElement(i.default,{type:"secondary",text:"Cancel",onClick:e=>{g.default.transitionTo(_.DOMAIN_CAPTURE_ROUTE_IDENTIFIER),e.preventDefault()}})},o.createElement(f.default,{label:o.createElement(h.default,{text:"Domain"}),helperText:"Enter the domain or subdomain of your organization.",placeholder:"e.g. domain.com, sub.domain.com","data-testid":"domain-name-input",value:e,onChange:e=>{t(e.target.value)},onBlur:()=>{let n=(0,b.withoutTrailingAndLeadingWhiteSpace)(e);t(n)},validationStatus:T&&k(!0)?"error":"",validationMessage:"Please enter a valid domain or subdomain"})),o.createElement(u.default,{heading:"Add verification record",primaryAction:o.createElement(i.default,{type:"primary",text:"Verify Domain","data-testid":"domain-verification-button",isLoading:H===x.default.serviceStatus.pending,onClick:()=>B({path:`/api/domains/${null==U?void 0:U.id}/verify`,method:"POST",service:"identity"}),isDisabled:!L}),secondaryAction:o.createElement(i.default,{type:"secondary",text:"Verify Later",onClick:e=>{n({status:"info",description:"Domain added"}),g.default.transitionTo(_.DOMAIN_CAPTURE_ROUTE_IDENTIFIER),e.preventDefault()}})},o.createElement(q,null))))))}},"./iam/src/common/components/TxtRecordContainer.js":function(e,t,n){n.r(t);var o=n("../../node_modules/react/index.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),c=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-state-success-stroke.js"),l=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-copy-stroke.js"),p=n("./js/utils/ClipboardHelper.js");const m=(0,s.default)(a.default)`
  &:disabled {
    color: var(--content-color-success);
    box-shadow: none;
    svg path {
      fill: var(--content-color-success);
    }
  }
`,u=(0,s.default)(r.default)`
  background-color: var(--background-color-tertiary);
  border-radius: var(--border-radius-default);
  padding: var(--spacing-l);

  .copy-button {
    margin-top: calc(var(--spacing-s)*-1);

    span {
      text-decoration: none;
      color: var(--content-color-secondary)
    }
  }

  .txt-record-text {
    width: 100%;
    overflow-wrap: anywhere;
    color: var(--content-color-primary);
  }

  .copied-success-text {
    span {
      text-decoration: none;
      color: var(--content-color-success);
    }
  }
`;t.default=({txtRecord:e})=>{const[t,n]=(0,o.useState)(!1);return o.createElement(u,{direction:"column",gap:"spacing-m",wrap:"wrap"},o.createElement(r.default,{direction:"row",justifyContent:"space-between"},o.createElement(i.default,{type:"h5",text:"TXT Record",className:"heading-text"}),o.createElement(m,{type:"tertiary",text:t?"Copied":"Copy",icon:t?o.createElement(c.default,{type:"outline",color:"content-color-success"}):o.createElement(l.default,{type:"outline"}),className:`copy-button ${t&&"copied-success-text"}`,onClick:()=>{t||(p.default.copy(e),n(!0),setTimeout((()=>{n(!1)}),1e3))}})),o.createElement(d.default,{className:"txt-record-text","data-testid":"text-record-text-field"},e))}},"./iam/src/common/hooks/usePostmanGatewayService.js":function(e,t,n){n.r(t);var o=n("../../node_modules/react/index.js"),s=n("./js/utils/PostmanGatewayService.js");const a={idle:"idle",pending:"pending",done:"done",error:"error"},r={"Content-Type":"application/json"},i=({method:e="GET",path:t,body:n,service:i,rawResponse:d=!1,transform:c=(e=>e),fireImmediately:l=!1,onSuccess:p=(e=>e),parsedResponse:m=!1,onError:u=(e=>e)})=>{const[f,h]=(0,o.useState)(null),[y,g]=(0,o.useState)(null),[_,b]=(0,o.useState)(l?a.pending:a.idle),x=({service:e,method:t,path:n,body:o})=>{b(a.pending);let i=!1;return e&&n?s.default.request("/ws/proxy",{method:"post",headers:r,body:JSON.stringify({service:e,method:t,path:n,body:o})},{returnRawResponse:d,parsedResponse:m}).then((e=>(i=!d||e.ok,e))).then(c).then((e=>{if(!i)throw e;h(e),b(a.done),p(e)})).catch((e=>{g(e),u(e),b(a.error)})):Promise.reject("path or service not supplied")};return(0,o.useEffect)((()=>{l&&x({service:i,method:e,path:t,body:n})}),[l]),{serviceStatus:_,serviceResponse:f,serviceError:y,callServiceUsingPostmanGateway:x}};i.serviceStatus=a,t.default=i}}]);