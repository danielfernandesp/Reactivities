"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[150],{"../../node_modules/@postman/aether/esmLib/src/components/Form/Form.js":function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var a=r("../../node_modules/@babel/runtime/helpers/esm/extends.js"),o=r("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("../../node_modules/react/index.js"),n=r("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),s=r("../../node_modules/prop-types/index.js"),l=r.n(s),c=r("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),d=r("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),p=r("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),u=r("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),h=["heading","description","width","onSubmit","preventDefault","primaryAction","secondaryAction","children"],m=n.default.form.withConfig({displayName:"Form__StyledForm",componentId:"ak4rok-0"})(["width:",";"],(function(e){return e.width}));function y(e){var t=e.heading,r=e.description,n=e.width,s=e.onSubmit,l=e.preventDefault,y=e.primaryAction,g=e.secondaryAction,b=e.children,f=(0,o.default)(e,h);return i.createElement(m,(0,a.default)({width:n},f,{"data-aether-id":"aether-form",onSubmit:function(e){l&&e.preventDefault(),s&&s(e)}}),i.createElement(c.default,{gap:"spacing-xxl",direction:"column"},i.createElement(c.default,{gap:"spacing-xl",direction:"column"},(t||r)&&i.createElement(c.default,{gap:"spacing-xs",direction:"column"},t?i.createElement(p.default,{type:"h1",text:t,"data-testid":"aether-form-heading"}):null,r?i.createElement(u.default,{type:"lead","data-testid":"aether-form-description"},r):null),b),i.createElement(c.default,{gap:"spacing-s"},function(e){if(e&&e.type===d.default&&"primary"===(e.props&&e.props.type))return e;return null}(y),function(e){if(e&&e.type===d.default&&"secondary"===(e.props&&e.props.type))return e;return null}(g))))}y.defaultProps={heading:"",description:"",width:"100%",primaryAction:null,secondaryAction:null,preventDefault:!0,onSubmit:null,"data-testid":"aether-form","data-click":""},y.propTypes={heading:l().string,description:l().string,width:l().string,onSubmit:l().func,preventDefault:l().bool,primaryAction:function(e){var t=e.primaryAction;if(t){if(t.type!==d.default)return new Error("Form: primaryAction prop only accepts Aether button component.");if("primary"!==(t.props&&t.props.type))return new Error("Form: primaryAction prop only accepts button type primary.")}return null},secondaryAction:function(e){var t=e.secondaryAction;if(t){if(t.type!==d.default)return new Error("Form: secondaryAction prop only accepts Aether button component.");if("secondary"!==(t.props&&t.props.type))return new Error("Form: secondaryAction prop only accepts button type secondary.")}return null},children:l().oneOfType([l().arrayOf(l().node),l().node]).isRequired,"data-testid":l().string,"data-click":l().string}},"./iam/src/TeamSettings/pages/TokenScanner/TokenScannerAddForm.js":function(e,t,r){r.r(t);var a=r("../../node_modules/react/index.js"),o=r("../../node_modules/mobx-react/dist/mobx-react.module.js"),i=(r("./node_modules/lodash/lodash.js"),r("../../node_modules/@postman/aether/esmLib/src/components/Spinner/Spinner.js")),n=r("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),s=r("../../node_modules/@postman/aether/esmLib/src/components/Form/Form.js"),l=r("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),c=r("../../node_modules/@postman/aether/esmLib/src/components/TextInput/TextInput.js"),d=r("../../node_modules/@postman/aether/esmLib/src/components/Label/Label.js"),p=r("../../node_modules/@postman/aether/esmLib/src/components/Dropdown/SingleSelect/SingleSelect.js"),u=r("../../node_modules/@postman/aether/esmLib/src/components/BlankState/BlankState.js"),h=r("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoEnvironment.js"),m=r("./iam/src/TeamSettings/store/TokenScannerStore.js"),y=r("./js/services/NavigationService.js"),g=r("./js/stores/StoreManager.js"),b=r("./iam/src/common/RouteIdentifierConfig.js");class f extends a.Component{constructor(e){super(e),this.state={tokenName:"",regexPattern:"",sampleToken:"",selectedCategory:null},this.tokenScannerStore=(0,g.resolveStoreInstance)(m.default),this.handleErrorMessage=this.handleErrorMessage.bind(this),this.invalidRegexMessage="Invalid regex. Please try again.",this.isRegexSafeValidationMessage="This regex may be vulnerable to ReDoS. Try adding a different regex.",this.isMatchValidationMessage="Sample secret does not match the regex. Please check your regex or secret and try again.",this.isDuplicateRegexMessage="An alert is already setup for the entered regex by this team. Please try a different regex."}componentDidMount(){this.tokenScannerStore.getCustomAlertData()}componentWillUnmount(){this.tokenScannerStore.clearVerificationStatus()}handleErrorMessage(e){return!1===e.valid?this.invalidRegexMessage:!1===e.safe?this.isRegexSafeValidationMessage:!1===e.unique?this.isDuplicateRegexMessage:""}render(){const{creating:e,category:t,customAlertLimit:r,isSupportUser:o,loading:m,canManageAlerts:g,verificationStatus:f,totalCustomAlert:v,isHydrating:S,isTokenScannerEnabled:A}=this.tokenScannerStore,{tokenName:k,regexPattern:w,sampleToken:T,selectedCategory:D}=this.state,_=t.map((e=>({label:e,value:e}))),E=g&&A&&!o&&null!==v&&v<r,L=v===r;return S||(m||g&&null===v)?a.createElement(i.default,{size:"large"}):E?a.createElement(n.default,{direction:"column",alignSelf:"center",padding:"spacing-xxl",width:"35%"},a.createElement(s.default,{heading:"Create Alert",name:"add-custom-alert",primaryAction:a.createElement(l.default,{type:"primary",isDisabled:!(k&&w&&T&&D)||!1===(null==f?void 0:f.match)||!1===(null==f?void 0:f.safe)||!1===(null==f?void 0:f.valid)||!1===(null==f?void 0:f.unique),text:"Create Alert",isLoading:e,onClick:e=>{e.preventDefault(),this.tokenScannerStore.createAlert({tokenName:this.state.tokenName,regex:this.state.regexPattern,category:this.state.selectedCategory.value,enabled:!0,sampleToken:this.state.sampleToken})}}),secondaryAction:a.createElement(l.default,{type:"secondary",text:"Cancel",onClick:()=>{y.default.transitionTo(b.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER)}})},a.createElement(c.default,{label:a.createElement(d.default,{text:"Name"}),placeholder:"Enter alert name",value:k,onChange:e=>{this.setState({tokenName:e.target.value})}}),a.createElement(p.default,{isClearable:!0,isSearchable:!0,allowCreateNewOption:!0,label:a.createElement(d.default,{text:"Type"}),options:_,value:D,placeholder:"Select secret type",onChange:e=>{this.setState({selectedCategory:{label:null==e?void 0:e.value,value:null==e?void 0:e.value}})}}),a.createElement(c.default,{label:a.createElement(d.default,{text:"Regex"}),placeholder:"Enter a regex to generate secret (?<=\\.) {2,}(?=[A-Z])",validationStatus:!1===f.safe||!1===f.valid||!1===f.unique?"error":null,value:w,validationMessage:this.handleErrorMessage(f),onChange:e=>{!1===f.safe&&this.tokenScannerStore.clearVerificationStatusField("safe"),!1===f.valid&&this.tokenScannerStore.clearVerificationStatusField("valid"),!1===f.match&&this.tokenScannerStore.clearVerificationStatusField("match"),!1===f.unique&&this.tokenScannerStore.clearVerificationStatusField("unique"),this.setState({regexPattern:e.target.value})}}),a.createElement(c.default,{label:a.createElement(d.default,{text:"Sample value"}),placeholder:"Enter a sample value to validate the regex",validationStatus:!1===f.match?"error":null,validationMessage:!1===f.match?this.isMatchValidationMessage:null,value:T,onChange:e=>{!1===f.match&&this.tokenScannerStore.clearVerificationStatusField("match"),this.setState({sampleToken:e.target.value})}}))):a.createElement(u.default,{title:L?`Your team can add upto ${r} alerts`:"You don't have permissions to view this page",description:L?"You've hit the limit for the number of custom Alerts allowed per team":"You do not have permissions to Add Custom Token"},a.createElement(h.default,null))}}t.default=(0,o.observer)(f)},"./iam/src/TeamSettings/services/TokenScannerService.js":function(e,t,r){r.r(t);var a=r("./iam/src/TeamSettings/services/HTTPGatewayService.js"),o=r("./node_modules/lodash/lodash.js");const i=e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:`/dashboard/value-help/workspaces?resolved=${e}`}});t.default={getAlerts:()=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/team/regexes"}}),createAlert:e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"post",path:"/team/regexes",body:e}}),deleteAlert(e){const{id:t}=e;return a.HTTPGatewayService.request({data:{service:"sentinel",method:"delete",path:`/team/regexes/${t}`}})},updateAlert:e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"put",path:`/team/regexes/${e.id}`,body:{...e}}}),fetchTokenLeaksCountInfo:()=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/dashboard/leaks/counts"}}),fetchLeakListingValueHelpData:()=>Promise.all([a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/dashboard/value-help/visibility-status"}}),a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/dashboard/value-help/regex-names"}}),i(!1),i(!0)]).then((([e,t,r,a])=>({visibilityTypes:e.body.data,secretTypes:t.body.data,unresolvedWorkspaces:r.body.data,resolvedWorkspaces:a.body.data}))),fetchElementsValueHelpData:(e,t)=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:`/dashboard/value-help/${e}/elements?workspaceId=${t}`}}),fetchTokenLeaksListing(e=0,t={},r=!1){let i=`/dashboard/leaks?skip=${e}`;r&&(i+="&resolved=true");const n={data:{service:"sentinel",method:"get",path:i}};return o.isEmpty(t)||(n.headers={"x-filter-options":t}),a.HTTPGatewayService.request(n)},fetchTokenLeakDetails(e,t,r,i={}){let n=`/dashboard/leaks/${e}?workspaceId=${t}`;r&&(n+=`&skip=${r}`);const s={data:{service:"sentinel",method:"get",path:n}};return o.isEmpty(i)||(s.headers={"x-filter-options":JSON.stringify(i)}),a.HTTPGatewayService.request(s)},fetchPostmanAPIKeyStatus:e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:`/dashboard/leaks/${e}/status`}}),resolveTokenLeakFinding:(e,t)=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"put",path:`/${e}/resolutions`,body:t}})}},"./iam/src/TeamSettings/store/TokenScannerStore.js":function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var a,o,i,n,s,l,c,d,p,u,h,m,y,g,b,f,v,S,A,k,w=r("../../node_modules/mobx/lib/mobx.module.js"),T=r("./node_modules/lodash/lodash.js"),D=r.n(T),_=r("./iam/src/TeamSettings/services/TokenScannerService.js"),E=r("./iam/src/TeamSettings/store/TokenScannerStore.js"),L=r("./js/stores/SyncStatusStore.js"),O=r("./js/stores/StoreManager.js"),j=r("./js/stores/CurrentUserStore.js"),x=r("./js/services/NavigationService.js"),C=r("./js/modules/services/AnalyticsService.js"),P=r("./iam/src/common/RouteIdentifierConfig.js");function I(e,t,r,a){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function R(e,t,r,a,o){var i={};return Object.keys(a).forEach((function(e){i[e]=a[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,a){return a(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}const N="E_POSTMAN_TEAM_REGEX",V="E_POSTMAN_DEFAULT_REGEX",z="E_POSTMAN_LIMIT_REACHED";let M=(o=R((a=class{constructor(){I(this,"alerts",o,this),I(this,"category",i,this),I(this,"verificationStatus",n,this),I(this,"loading",s,this),I(this,"updating",l,this),I(this,"creating",c,this),I(this,"verifying",d,this),I(this,"deleting",p,this),I(this,"error",u,this),I(this,"customAlertLimit",h,this),I(this,"errorDetails",m,this),I(this,"showSecretLeakDetailsView",y,this),this.scannableElements=[],I(this,"showSecretScannerNavBarIndicator",g,this),I(this,"showSecretScannerPopupHelp",b,this),I(this,"activeTokenLeaksCount",f,this),I(this,"individualLeakData",v,this),I(this,"individualLeakError",S,this),I(this,"showIndividualLeakData",A,this),I(this,"activeLeakListTab",k,this),this.currentUser=(0,O.resolveStoreInstance)(j.default)}updateState(e,t,r){this.loading=e,this.error=t,this.errorDetails=r}updatingAlert(e){this.updating.push(e)}verifyingAlert(e){this.verifying=e}verifiedRegex(e){this.verificationStatus={...e}}updateAlertList(e,t){this.alerts=e,this.updating=D().filter(this.updating,(e=>t!==e))}errorUpdatingAlert(e,t){this.updating=[],this.error=e,this.errorDetails=t}updateLimit(e){this.customAlertLimit=e}updateCategory(e){this.category=e}deletingAlert(e){this.deleting.push(e)}errorDeletingAlert(e,t){this.error=e,this.errorDetails=t,this.deleting=[]}deletedAlert(e,t){this.alerts=e,this.deleting=D().filter(this.deleting,(e=>t!==e))}creatingAlert(e){this.creating=e}errorCreatingAlert(e,t){this.creating=e,this.errorDetails=t}createdAlert(e){this.creating=e}updateCustomAlertsData(e,t,r){this.alerts=e,this.updating=[],this.customAlertLimit=t,this.category=r,this.loading=!1,this.error=!1,this.errorDetails=""}get totalCustomAlert(){return this.alerts&&0!==this.alerts.length?this.alerts.filter((e=>"default"!==D().get(e,"meta.source","default"))).length:null}get canManageAlerts(){const e=D().get(this.currentUser,"organizations.0.roles","");return D().includes(e,"admin")&&D().includes(e,"user")||D().includes(e,"community-manager")}get isSupportUser(){const e=D().get(this.currentUser,"organizations.0.roles","");return!D().includes(e,"user")&&!D().includes(e,"community-manager")}get isHydrating(){return D().isUndefined(pm.billing.plan.features)||D().isNull(this.currentUser.organizations)}get isTokenScannerEnabled(){return D().get(pm,"billing.plan.features.apisec_custom_tokens_enabled.value",!1)}get isSecretScannerDashboardEnabled(){return D().get(pm,"billing.plan.features.secret_scanner_dashboard_enabled.value",!1)}clearVerificationStatus(){this.verificationStatus={}}clearVerificationStatusField(e){this.verificationStatus={...this.verificationStatus,[e]:void 0}}getCustomAlertData(){return this.updateState(!0,!1,""),_.default.getAlerts().then((e=>{const t=D().get(e,"body.regexes"),r=D().get(e,"body.customAlertLimit");if(200===e.status){let e=D().uniq(t.map((e=>e.category)));return this.updateCustomAlertsData(t,r,e),t}this.updateState(!1,!0,e.body.error)})).catch((e=>{pm.logger.error("Error in fetching custom alert list",e),pm.toasts.error("Something went wrong in fetching data.")}))}fetchCustomAlertData(){(0,O.resolveStoreInstance)(L.default).onSyncAvailable({timeout:8e3}).then((()=>this.getCustomAlertData())).catch((()=>{this.updateState(!1,!1,"")}))}updateCustomAlertData(e,t){this.updatingAlert(e.id);const r=(0,O.resolveStoreInstance)(E.default);return _.default.updateAlert(e).then((a=>{if(200!==a.status)this.updateState(!1,!0,a);else if(D().has(e,["regex"])&&D().has(e,["sampleToken"]))if(a.body.safe&&a.body.match&&a.body.valid){const o=D().get(a,"body.regex.id"),i=D().map(r.alerts,(e=>e.id===a.body.regex.id?{...a.body.regex}:e),{});this.updateAlertList(i,o),this.verifiedRegex({safe:a.body.safe,match:a.body.match,valid:a.body.valid}),pm.toasts.success(!0,{noIcon:!0,title:"Alert Updated"}),t&&x.default.transitionTo(P.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER),C.default.addEventV2({category:"token_scanner",action:"updated_custom_alert",entityType:"custom_alert",entityId:e.id})}else this.errorUpdatingAlert(!0,a.body.error),this.verifiedRegex({safe:a.body.safe,match:a.body.match,valid:a.body.valid});else{const o=D().get(a,"body.regex.id"),i=D().map(r.alerts,(e=>e.id===a.body.regex.id?{...a.body.regex}:e),{});this.updateAlertList(i,o),pm.toasts.success(!0,{noIcon:!0,title:"Alert Updated"}),t&&x.default.transitionTo(P.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER),C.default.addEventV2({category:"token_scanner",action:"updated_custom_alert",entityType:"custom_alert",entityId:e.id})}})).catch((e=>{pm.logger.error("Error in updating alert",e),pm.toasts.error("Something went wrong in updating alert.",{noIcon:!0,title:"Error updating Alert"})}))}deleteAlert(e){const{id:t}=e,r=(0,O.resolveStoreInstance)(E.default);return this.deletingAlert(t),_.default.deleteAlert({id:t}).then((e=>{if(200!==e.status){this.errorDeletingAlert(!0,e.body.error);let t=e.body.error;t||(t="Try again — it should work next time around."),pm.toasts.error(t,{noIcon:!0,title:"Couldn't delete the alert"})}else{let e=D().filter(r.alerts,(e=>e.id!==t),{});this.deletedAlert(e,t),pm.toasts.success(!0,{noIcon:!0,title:"Alert deleted"});const a=this.getTeamRegexesCount(this.alerts);C.default.addEventV2({category:"token_scanner",action:"deleted_custom_alert",entityType:"custom_alert",entityId:t,value:a,label:a===this.customAlertLimit?"custom_alert_limit_reached":"custom_alert_limit_not_reached"})}})).catch((e=>{this.errorDeletingAlert(!0,"Something went wrong"),pm.toasts.error("An error occurred while deleting the custom alert. Please try again.",{noIcon:!0,title:"Couldn't delete the alert"})}))}createAlert(e){return this.creatingAlert(!0),_.default.createAlert(e).then((e=>{if(200!==e.status){this.errorCreatingAlert(!1,e.body.error);let t=e.body.error;t||(t="An error occurred while creating the custom alert. Please try again."),pm.toasts.error(t,{noIcon:!0,title:"Couldn't create the alert"})}else if(e.body.safe&&e.body.match&&e.body.valid)this.createdAlert(!1),this.verifiedRegex({safe:e.body.safe,match:e.body.match,valid:e.body.valid}),pm.toasts.success(!0,{noIcon:!0,title:"New custom alert created"}),x.default.transitionTo(P.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER);else{this.verifiedRegex({safe:e.body.safe,match:e.body.match,valid:e.body.valid}),this.errorCreatingAlert(!1,e.body.error);const t={category:"token_scanner",action:"add_failed_custom_alert",entityType:"custom_alert"};e.valid?e.safe?e.match||C.default.addEventV2({label:"added_regex_not_matched",...t}):C.default.addEventV2({label:"added_unsafe_regex",...t}):C.default.addEventV2({label:"added_invalid_regex",...t})}})).catch((e=>{[N,V].includes(e.error_code)&&this.verifiedRegex({safe:!0,match:!0,valid:!0,unique:!1}),e.error_code===z&&this.verifiedRegex({safe:!0,match:!0,valid:!0,unique:!0}),this.errorCreatingAlert(!1,"Something went wrong");const t={noIcon:!0,title:"Couldn't create the alert"};e.error_code===z&&pm.toasts.error("An error occurred while creating the custom alert. Please try again.",t)}))}setShowSecretLeakDetailsView(e){this.showSecretLeakDetailsView=e}setActiveTokenLeakTab(e){this.activeLeakListTab=e}setActiveTokenLeaksCount(e){this.activeTokenLeaksCount=e}setIndividualLeaksDetailsData(e){this.individualLeakData=e,this.loading=!1}get individualLeakDetails(){return this.individualLeakData}hydrateTokenLeaksCountMeta(e){const t=document.cookie.split("; ").find((e=>e.startsWith("secret_scanner_popup_visited"))),r=t&&t.split("=")[1];return _.default.fetchTokenLeaksCountInfo().then((t=>{const a=D().get(t,"body.data.unresolved");this.activeTokenLeaksCount=a,a>0&&!e&&(this.showSecretScannerNavBarIndicator=!0,this.showSecretScannerPopupHelp=!r)}))}fetchElementsValueHelpData(e,t){return _.default.fetchElementsValueHelpData(e,t).then((e=>{this.scannableElements=D().get(e,"body.data")}))}fetchIndividualTokenLeakDetails(e,t,r,a){return D().isUndefined(r)&&D().isUndefined(a)&&(this.loading=!0),this.individualLeakError=null,_.default.fetchTokenLeakDetails(e,t,r,a).then((e=>{r?this.individualLeakDetails.data.push(...D().get(e,"body.data")):a?(this.individualLeakDetails.meta.totalOccurrencesInWorkspace=D().get(e,"body.meta.totalOccurrencesInWorkspace"),this.individualLeakDetails.data=D().get(e,"body.data")):this.setIndividualLeaksDetailsData(D().get(e,"body"))})).catch((e=>{this.individualLeakError=e,this.loading=!1}))}getTeamRegexesCount(e){let t=0;return D().forEach(e,(e=>{"team"===e.meta.source&&t++})),t}}).prototype,"alerts",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=R(a.prototype,"category",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),n=R(a.prototype,"verificationStatus",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),s=R(a.prototype,"loading",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),l=R(a.prototype,"updating",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=R(a.prototype,"creating",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=R(a.prototype,"verifying",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=R(a.prototype,"deleting",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),u=R(a.prototype,"error",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=R(a.prototype,"customAlertLimit",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=R(a.prototype,"errorDetails",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),y=R(a.prototype,"showSecretLeakDetailsView",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=R(a.prototype,"showSecretScannerNavBarIndicator",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=R(a.prototype,"showSecretScannerPopupHelp",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=R(a.prototype,"activeTokenLeaksCount",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=R(a.prototype,"individualLeakData",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),S=R(a.prototype,"individualLeakError",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=R(a.prototype,"showIndividualLeakData",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),k=R(a.prototype,"activeLeakListTab",[w.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),R(a.prototype,"updateState",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"updateState"),a.prototype),R(a.prototype,"updatingAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"updatingAlert"),a.prototype),R(a.prototype,"verifyingAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"verifyingAlert"),a.prototype),R(a.prototype,"verifiedRegex",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"verifiedRegex"),a.prototype),R(a.prototype,"updateAlertList",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"updateAlertList"),a.prototype),R(a.prototype,"errorUpdatingAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"errorUpdatingAlert"),a.prototype),R(a.prototype,"updateLimit",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"updateLimit"),a.prototype),R(a.prototype,"updateCategory",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"updateCategory"),a.prototype),R(a.prototype,"deletingAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"deletingAlert"),a.prototype),R(a.prototype,"errorDeletingAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"errorDeletingAlert"),a.prototype),R(a.prototype,"deletedAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"deletedAlert"),a.prototype),R(a.prototype,"creatingAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"creatingAlert"),a.prototype),R(a.prototype,"errorCreatingAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"errorCreatingAlert"),a.prototype),R(a.prototype,"createdAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"createdAlert"),a.prototype),R(a.prototype,"updateCustomAlertsData",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"updateCustomAlertsData"),a.prototype),R(a.prototype,"totalCustomAlert",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"totalCustomAlert"),a.prototype),R(a.prototype,"canManageAlerts",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"canManageAlerts"),a.prototype),R(a.prototype,"isSupportUser",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"isSupportUser"),a.prototype),R(a.prototype,"isHydrating",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"isHydrating"),a.prototype),R(a.prototype,"isTokenScannerEnabled",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"isTokenScannerEnabled"),a.prototype),R(a.prototype,"isSecretScannerDashboardEnabled",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"isSecretScannerDashboardEnabled"),a.prototype),R(a.prototype,"clearVerificationStatus",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"clearVerificationStatus"),a.prototype),R(a.prototype,"clearVerificationStatusField",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"clearVerificationStatusField"),a.prototype),R(a.prototype,"getCustomAlertData",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"getCustomAlertData"),a.prototype),R(a.prototype,"fetchCustomAlertData",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"fetchCustomAlertData"),a.prototype),R(a.prototype,"updateCustomAlertData",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"updateCustomAlertData"),a.prototype),R(a.prototype,"deleteAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"deleteAlert"),a.prototype),R(a.prototype,"createAlert",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"createAlert"),a.prototype),R(a.prototype,"setShowSecretLeakDetailsView",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"setShowSecretLeakDetailsView"),a.prototype),R(a.prototype,"setActiveTokenLeakTab",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"setActiveTokenLeakTab"),a.prototype),R(a.prototype,"setActiveTokenLeaksCount",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"setActiveTokenLeaksCount"),a.prototype),R(a.prototype,"setIndividualLeaksDetailsData",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"setIndividualLeaksDetailsData"),a.prototype),R(a.prototype,"individualLeakDetails",[w.computed],Object.getOwnPropertyDescriptor(a.prototype,"individualLeakDetails"),a.prototype),R(a.prototype,"hydrateTokenLeaksCountMeta",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"hydrateTokenLeaksCountMeta"),a.prototype),R(a.prototype,"fetchElementsValueHelpData",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"fetchElementsValueHelpData"),a.prototype),R(a.prototype,"fetchIndividualTokenLeakDetails",[w.action],Object.getOwnPropertyDescriptor(a.prototype,"fetchIndividualTokenLeakDetails"),a.prototype),a)}}]);