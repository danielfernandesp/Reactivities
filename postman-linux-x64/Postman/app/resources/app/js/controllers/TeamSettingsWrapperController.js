"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[130],{"./iam/src/TeamSettings/controllers/TeamSettingsWrapperController.js":function(e,t,r){r.r(t);var a,i,o,s,n,l,c,p,d=r("../../node_modules/mobx/lib/mobx.module.js"),u=r("./appsdk/pages/BasePageController.js"),h=r("./integrations/services/ConnectedAccountsService.js"),g=r("./onboarding/src/features/Homepage/pages/IntegrationsPage/services/IntegrationService.ts"),y=r("./iam/src/TeamSettings/store/InstalledAppsStore.js"),b=r("./onboarding/src/features/Homepage/pages/IntegrationsPage/services/UserService.ts"),m=r("./js/services/NavigationService.js"),f=r("./js/utils/NavigationUtil.js"),v=r("./iam/src/common/RouteIdentifierConfig.js"),I=r("./js/stores/StoreManager.js"),A=r("./iam/src/TeamSettings/store/TokenScannerStore.js"),w=r("./iam/src/TeamSettings/manifest.js"),S=r("./node_modules/lodash/lodash.js");function T(e,t,r,a){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function D(e,t,r,a,i){var o={};return Object.keys(a).forEach((function(e){o[e]=a[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,a){return a(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let O=(a=class extends u.default{constructor(...e){super(...e),T(this,"service",i,this),T(this,"slackTeamName",o,this),T(this,"createdBy",s,this),T(this,"serviceNameToBeCreated",n,this),T(this,"installedAppIdToUpdate",l,this),T(this,"appId",c,this),T(this,"shouldRenderAPIGitView",p,this)}setService(e){this.service=e}setShouldRenderAPIGitView(e){this.shouldRenderAPIGitView=e}setSlackTeamName(e){this.slackTeamName=e}setCreatedBy(e){this.createdBy=e}didCreate(){const{currentURL:e}=m.default;(0,d.reaction)((()=>e.get()),(e=>{let t=(0,I.resolveStoreInstance)(A.default),r=m.default.getRoutesForURL((0,f.getUrlParts)(e).pathUrl);if(r&&Array.isArray(r)){var a,i;r=r[0];const e=[v.TOKEN_SCANNER_ROUTE_IDENTIFIER,v.TOKEN_SCANNER_FINDINGS_ROUTE_IDENTIFIER,v.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER].includes(null===(a=r)||void 0===a?void 0:a.name);var o;if(e)t.setShowSecretLeakDetailsView(!1),(null===(o=r)||void 0===o?void 0:o.name)===v.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER&&t.getCustomAlertData();else if((null===(i=r)||void 0===i?void 0:i.name)===v.TOKEN_SCANNER_INDIVIDUAL_FINDING_ROUTE_IDENTIFIER){var s,n;const e=m.default.getActiveQueryParams().get();t.setShowSecretLeakDetailsView(!0),t.fetchElementsValueHelpData(null===(s=r)||void 0===s?void 0:s.routeParams.checksumId,e.workspaceId),t.fetchIndividualTokenLeakDetails(null===(n=r)||void 0===n?void 0:n.routeParams.checksumId,e.workspaceId)}t.isSecretScannerDashboardEnabled&&S.isNull(t.activeTokenLeaksCount)&&t.hydrateTokenLeaksCountMeta(e)}}),{fireImmediately:!0})}didActivate({queryParams:e,additionalContext:t}){const{currentURL:r}=m.default;(0,d.reaction)((()=>r.get()),(async e=>{let r=m.default.getRoutesForURL(e);if(r&&Array.isArray(r)){var a,i,o;r=r[0];const{routeParams:e}=r,s=S.find(w.default.pages,(e=>{var t;return(null===(t=r)||void 0===t?void 0:t.name)===e.name}));if((null==s?void 0:s.title)&&(document.title=s.title),(null===(a=r)||void 0===a?void 0:a.name)===v.VIEW_CONNECTED_ACCOUNT_ROUTE_IDENTIFIER_IDENTIFIER){const a=(0,I.resolveStoreInstance)(y.default);await a.initList(),this.connectedAccountId=e.id;if(a.find(this.connectedAccountId))return void this.setShouldRenderAPIGitView(!0);this.setShouldRenderAPIGitView(!1);let i=S.get(t,"service"),o=S.get(t,"extraData");this.setService(i),this.setSlackTeamName(o),h.default.fetchConfiguredConnectedAccounts().then((e=>{var t,a;let i=S.find(S.get(e,"data"),["id",(null===(t=r)||void 0===t||null===(a=t.routeParams)||void 0===a?void 0:a.id)||r.id]),o=S.isEmpty(i)?"your slack team":S.get(i,"data.teamName"),s=S.get(i,"createdBy");this.setSlackTeamName(o),g.default.getServiceDetails(S.get(i,"service")).then((e=>{let t=S.get(e,["body","data","name"]);this.setService(t),b.default.fetchUserInfo(s,((e,t)=>{e&&pm.logger.error("Error occurred while fetching user meta for installed apps",e),this.setCreatedBy(S.get(t,["body","users",s]))}))})).catch((e=>{pm.logger.error("Error occurred while fetching service name",e)}))})).catch((e=>{pm.logger.error("Error occurred while fetching installed apps",e)}))}(null===(i=r)||void 0===i?void 0:i.name)===v.CREATE_CONNECTED_ACCOUNT_ROUTE_IDENTIFIER&&this.updateServiceNameToBeCreated(e.appId),(null===(o=r)||void 0===o?void 0:o.name)===v.UPDATE_CONNECTED_ACCOUNT_ROUTE_IDENTIFIER&&this.updateInstalledAppIdToUpdate(e.id)}}),{fireImmediately:!0})}updateServiceNameToBeCreated(e){this.serviceNameToBeCreated=e}updateInstalledAppIdToUpdate(e){this.installedAppIdToUpdate=e}},i=D(a.prototype,"service",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=D(a.prototype,"slackTeamName",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=D(a.prototype,"createdBy",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n=D(a.prototype,"serviceNameToBeCreated",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=D(a.prototype,"installedAppIdToUpdate",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=D(a.prototype,"appId",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=D(a.prototype,"shouldRenderAPIGitView",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D(a.prototype,"setService",[d.action],Object.getOwnPropertyDescriptor(a.prototype,"setService"),a.prototype),D(a.prototype,"setShouldRenderAPIGitView",[d.action],Object.getOwnPropertyDescriptor(a.prototype,"setShouldRenderAPIGitView"),a.prototype),D(a.prototype,"setSlackTeamName",[d.action],Object.getOwnPropertyDescriptor(a.prototype,"setSlackTeamName"),a.prototype),D(a.prototype,"setCreatedBy",[d.action],Object.getOwnPropertyDescriptor(a.prototype,"setCreatedBy"),a.prototype),D(a.prototype,"updateServiceNameToBeCreated",[d.action],Object.getOwnPropertyDescriptor(a.prototype,"updateServiceNameToBeCreated"),a.prototype),D(a.prototype,"updateInstalledAppIdToUpdate",[d.action],Object.getOwnPropertyDescriptor(a.prototype,"updateInstalledAppIdToUpdate"),a.prototype),a);t.default=O},"./iam/src/TeamSettings/services/TokenScannerService.js":function(e,t,r){r.r(t);var a=r("./iam/src/TeamSettings/services/HTTPGatewayService.js"),i=r("./node_modules/lodash/lodash.js");const o=e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:`/dashboard/value-help/workspaces?resolved=${e}`}});t.default={getAlerts:()=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/team/regexes"}}),createAlert:e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"post",path:"/team/regexes",body:e}}),deleteAlert(e){const{id:t}=e;return a.HTTPGatewayService.request({data:{service:"sentinel",method:"delete",path:`/team/regexes/${t}`}})},updateAlert:e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"put",path:`/team/regexes/${e.id}`,body:{...e}}}),fetchTokenLeaksCountInfo:()=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/dashboard/leaks/counts"}}),fetchLeakListingValueHelpData:()=>Promise.all([a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/dashboard/value-help/visibility-status"}}),a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:"/dashboard/value-help/regex-names"}}),o(!1),o(!0)]).then((([e,t,r,a])=>({visibilityTypes:e.body.data,secretTypes:t.body.data,unresolvedWorkspaces:r.body.data,resolvedWorkspaces:a.body.data}))),fetchElementsValueHelpData:(e,t)=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:`/dashboard/value-help/${e}/elements?workspaceId=${t}`}}),fetchTokenLeaksListing(e=0,t={},r=!1){let o=`/dashboard/leaks?skip=${e}`;r&&(o+="&resolved=true");const s={data:{service:"sentinel",method:"get",path:o}};return i.isEmpty(t)||(s.headers={"x-filter-options":t}),a.HTTPGatewayService.request(s)},fetchTokenLeakDetails(e,t,r,o={}){let s=`/dashboard/leaks/${e}?workspaceId=${t}`;r&&(s+=`&skip=${r}`);const n={data:{service:"sentinel",method:"get",path:s}};return i.isEmpty(o)||(n.headers={"x-filter-options":JSON.stringify(o)}),a.HTTPGatewayService.request(n)},fetchPostmanAPIKeyStatus:e=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"get",path:`/dashboard/leaks/${e}/status`}}),resolveTokenLeakFinding:(e,t)=>a.HTTPGatewayService.request({data:{service:"sentinel",method:"put",path:`/${e}/resolutions`,body:t}})}},"./iam/src/TeamSettings/store/InstalledAppsStore.js":function(e,t,r){r.r(t),r.d(t,{default:function(){return V}});var a,i,o,s,n,l,c,p,d,u,h,g,y=r("../../node_modules/mobx/lib/mobx.module.js"),b=r("./integrations/constants/integrationsConstants.ts"),m=r("../../node_modules/@postman/aether/esmLib/src/components/Toast/ToastManager.js"),f=r("./js/stores/BaseListStore.js"),v=r("./integrations/services/InstalledAppService.ts"),I=r("./onboarding/src/features/Homepage/pages/IntegrationsPage/services/UserService.ts"),A=r("./node_modules/util/util.js"),w=r.n(A),S=r("./api-dev/services/APIDevService.js"),T=r("./integrations/git/services/OnPrem/OnPremOAuthService.js"),D=r("./api-dev/services/APIPermissionService.js"),O=r("./js/stores/StoreManager.js"),E=r("./js/stores/CurrentUserStore.js"),_=r("./api-dev/constants/APIRepositoryConstants.js"),P=r("./node_modules/lodash/lodash.js");function k(e,t,r,a){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function L(e,t,r,a,i){var o={};return Object.keys(a).forEach((function(e){o[e]=a[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,a){return a(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}const j="CREATE_ON_PREM_GIT_INSTALLED_APP",C="MANAGE_ON_PREM_GIT_INSTALLED_APP",N="MANAGE_ON_PREM_GIT_INSTALLED_APP",R="VIEW_ON_PREM_GIT_INSTALLED_APP",z=pm.logger.getContext("InstalledAppStore","integrations");async function U(e){const t=w().promisify(I.default.fetchUserInfo),r=[],a=[],i={};for(const t of e)i[t.createdBy]={};for(const e in i)r.push(t(e)),a.push(e);const o=await Promise.all(r);for(const e in o){const t=a[e],r=o[e];i[t]=P.get(r,["body","users",t])}for(const t of e)t.createdBy=i[t.createdBy];return e}const x=[b.GITHUB_ONPREM_CLASS_ID,b.GITLAB_ONPREM_CLASS_ID];let F=(i=L((a=class{constructor(e){this.id=null,this.classId=null,this.createdBy=null,this.lastUpdatedBy=null,this.createdAt=null,this.updatedAt=null,this.type=b.API_GIT_TYPE,k(this,"data",i,this),k(this,"isLoading",o,this),k(this,"hasFetchedIntegrations",s,this),k(this,"integrations",n,this),this.id=e.id,this.update(e)}setName(e){this.name=P.find(b.SERVICE_OAUTH_CONFIG,(t=>t.installedAppClass===e)).userFriendlyServiceName}get teamMembersCount(){const e=new Set;if(!P.isArray(this.integrations))return 0;for(const t of this.integrations)e.add(P.get(t,"createdBy.id"));return e.size}async fetchAuthInstance(){try{const e=P.find(b.SERVICE_OAUTH_CONFIG,(e=>e.installedAppClass===this.classId)).authenticationClass,t=await v.default.getInstalledApp(this.id,{populateAuthClasses:e});return P.head(t.authInstances)}catch(e){return pm.logger.error("InstalledAppStore~fetchAuthInstance",e,{context:z}),{}}}setHasFetchedIntegrations(e){this.hasFetchedIntegrations=e}async fetchIntegrations(){if(!this.hasFetchedIntegrations){this.setHasFetchedIntegrations(!0),this.setIsLoading(!0);try{this.setIntegrations([]);let{integrations:e}=await v.default.listIntegrations(this.id,b.API_GIT_TYPE);e=await U(e),e=await async function(e){const t=S.default.bulkFetchAPIs,r=P.map(e,(e=>e.api)),a=await t(r);for(const t of e)t.apiName=P.get(a[t.api],"name");return e}(e),this.setIntegrations(e)}catch(e){(0,m.toast)({status:"error",description:P.get(e,"error.message")||"Something went wrong when fetching list of integrations"}),pm.logger.error("InstalledAppStore~fetchIntegrations",e,{context:z})}finally{this.setIsLoading(!1)}}}setIntegrations(e){this.integrations=e}update(e){this.classId=e.classId,this.setName(this.classId),this.lastUpdatedBy=e.lastUpdatedBy,this.createdAt=e.createdAt,this.updatedAt=e.updatedAt,this.data=e.data,P.isObject(this.createdBy)||(this.createdBy=e.createdBy)}setIsLoading(e){this.isLoading=e}}).prototype,"data",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=L(a.prototype,"isLoading",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),s=L(a.prototype,"hasFetchedIntegrations",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),n=L(a.prototype,"integrations",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L(a.prototype,"teamMembersCount",[y.computed],Object.getOwnPropertyDescriptor(a.prototype,"teamMembersCount"),a.prototype),L(a.prototype,"setHasFetchedIntegrations",[y.action],Object.getOwnPropertyDescriptor(a.prototype,"setHasFetchedIntegrations"),a.prototype),L(a.prototype,"setIntegrations",[y.action],Object.getOwnPropertyDescriptor(a.prototype,"setIntegrations"),a.prototype),L(a.prototype,"update",[y.action],Object.getOwnPropertyDescriptor(a.prototype,"update"),a.prototype),L(a.prototype,"setIsLoading",[y.action],Object.getOwnPropertyDescriptor(a.prototype,"setIsLoading"),a.prototype),a),V=(l=class extends f.default{constructor(){super(F),k(this,"isLoading",c,this),k(this,"canCreate",p,this),k(this,"canUpdate",d,this),k(this,"canDelete",u,this),k(this,"canFind",h,this),k(this,"isFeatureEnabled",g,this)}async initList(){try{await pm.billing.onPlanFeaturesLoad();const e=_.BILLED_FEATURE_NAMES.reduce(((e,t)=>e=e&&P.get(pm,["billing","plan","features",t,"value"])),!0),t=T.default.isOAuthIntegrationFlagEnabled();return this.setIsFeatureEnabled(t&&e),this.isFeatureEnabled?(this.clear(),await this.fetchPermissions(),this.canFind&&await this.fetchInstalledApps(),this.values):void this.setIsLoading(!1)}catch(e){pm.logger.error("InstalledAppStore~initList",e,{context:z})}}setPermissions(e,t,r,a){this.canCreate=e,this.canUpdate=t,this.canDelete=r,this.canFind=a}setIsFeatureEnabled(e){this.isFeatureEnabled=e}async fetchPermissions(){const e=(0,O.resolveStoreInstance)(E.default),t=e.id,r=e.teamId,a=await D.default.fetchPermissions({[`${j}`]:{entityType:"user",entityId:t,permission:j,objectType:"team",objectId:r},[`${C}`]:{entityType:"user",entityId:t,permission:C,objectType:"team",objectId:r},[`${N}`]:{entityType:"user",entityId:t,permission:N,objectType:"team",objectId:r},[`${R}`]:{entityType:"user",entityId:t,permission:R,objectType:"team",objectId:r}});this.setPermissions(a[`${j}`].allowed,a[`${C}`].allowed,a[`${N}`].allowed,a[`${R}`].allowed)}async fetchInstalledApps(){this.setIsLoading(!0);try{this.clear();let e=await v.default.listInstalledApps();e=P.filter(e,(e=>P.includes(x,e.classId))),e=await U(e),this.add(e)}catch(e){(0,m.toast)({status:"error",description:P.get(e,"error.message")||"Something went wrong when fetching Apps"}),pm.logger.error("InstalledAppStore~fetchInstalledApps",e,{context:z})}finally{this.setIsLoading(!1)}}async create(e,t,r,a){const i={classId:e,data:{appName:t,customDomain:r},authInstances:[a]};try{let e=await v.default.createInstalledApp(i);e=P.head(await U([e])),this.add(e)}catch(e){if(pm.logger.error("InstalledAppStore~create",e,{context:z}),"invalidParamsError"===P.get(e,"error.name"))throw e;(0,m.toast)({status:"error",description:"invalidParamsError"===P.get(e,"error.name")?P.get(e,"error.message"):"Something went wrong when creating the App"})}}async update(e,t,r,a){const i={data:{appName:t},authInstances:[a]};try{const t=await v.default.updateInstalledApp(e,i);super.update(t)}catch(e){(0,m.toast)({status:"error",description:"invalidParamsError"===P.get(e,"error.name")?P.get(e,"error.message"):"Something went wrong when updating the App"}),pm.logger.error("InstalledAppStore~update",e,{context:z})}}async delete(e){try{await v.default.deleteInstalledApp(e),this.remove(e)}catch(e){(0,m.toast)({status:"error",description:"invalidParamsError"===P.get(e,"error.name")?P.get(e,"error.message"):"Something went wrong when deleting the App"}),pm.logger.error("InstalledAppStore~delete",e,{context:z})}}setIsLoading(e){this.isLoading=e}clear(){super.clear()}},c=L(l.prototype,"isLoading",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),p=L(l.prototype,"canCreate",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=L(l.prototype,"canUpdate",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u=L(l.prototype,"canDelete",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=L(l.prototype,"canFind",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=L(l.prototype,"isFeatureEnabled",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),L(l.prototype,"setPermissions",[y.action],Object.getOwnPropertyDescriptor(l.prototype,"setPermissions"),l.prototype),L(l.prototype,"setIsFeatureEnabled",[y.action],Object.getOwnPropertyDescriptor(l.prototype,"setIsFeatureEnabled"),l.prototype),L(l.prototype,"setIsLoading",[y.action],Object.getOwnPropertyDescriptor(l.prototype,"setIsLoading"),l.prototype),l)},"./iam/src/TeamSettings/store/TokenScannerStore.js":function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var a,i,o,s,n,l,c,p,d,u,h,g,y,b,m,f,v,I,A,w,S=r("../../node_modules/mobx/lib/mobx.module.js"),T=r("./node_modules/lodash/lodash.js"),D=r.n(T),O=r("./iam/src/TeamSettings/services/TokenScannerService.js"),E=r("./iam/src/TeamSettings/store/TokenScannerStore.js"),_=r("./js/stores/SyncStatusStore.js"),P=r("./js/stores/StoreManager.js"),k=r("./js/stores/CurrentUserStore.js"),L=r("./js/services/NavigationService.js"),j=r("./js/modules/services/AnalyticsService.js"),C=r("./iam/src/common/RouteIdentifierConfig.js");function N(e,t,r,a){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function R(e,t,r,a,i){var o={};return Object.keys(a).forEach((function(e){o[e]=a[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,a){return a(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}const z="E_POSTMAN_TEAM_REGEX",U="E_POSTMAN_DEFAULT_REGEX",x="E_POSTMAN_LIMIT_REACHED";let F=(i=R((a=class{constructor(){N(this,"alerts",i,this),N(this,"category",o,this),N(this,"verificationStatus",s,this),N(this,"loading",n,this),N(this,"updating",l,this),N(this,"creating",c,this),N(this,"verifying",p,this),N(this,"deleting",d,this),N(this,"error",u,this),N(this,"customAlertLimit",h,this),N(this,"errorDetails",g,this),N(this,"showSecretLeakDetailsView",y,this),this.scannableElements=[],N(this,"showSecretScannerNavBarIndicator",b,this),N(this,"showSecretScannerPopupHelp",m,this),N(this,"activeTokenLeaksCount",f,this),N(this,"individualLeakData",v,this),N(this,"individualLeakError",I,this),N(this,"showIndividualLeakData",A,this),N(this,"activeLeakListTab",w,this),this.currentUser=(0,P.resolveStoreInstance)(k.default)}updateState(e,t,r){this.loading=e,this.error=t,this.errorDetails=r}updatingAlert(e){this.updating.push(e)}verifyingAlert(e){this.verifying=e}verifiedRegex(e){this.verificationStatus={...e}}updateAlertList(e,t){this.alerts=e,this.updating=D().filter(this.updating,(e=>t!==e))}errorUpdatingAlert(e,t){this.updating=[],this.error=e,this.errorDetails=t}updateLimit(e){this.customAlertLimit=e}updateCategory(e){this.category=e}deletingAlert(e){this.deleting.push(e)}errorDeletingAlert(e,t){this.error=e,this.errorDetails=t,this.deleting=[]}deletedAlert(e,t){this.alerts=e,this.deleting=D().filter(this.deleting,(e=>t!==e))}creatingAlert(e){this.creating=e}errorCreatingAlert(e,t){this.creating=e,this.errorDetails=t}createdAlert(e){this.creating=e}updateCustomAlertsData(e,t,r){this.alerts=e,this.updating=[],this.customAlertLimit=t,this.category=r,this.loading=!1,this.error=!1,this.errorDetails=""}get totalCustomAlert(){return this.alerts&&0!==this.alerts.length?this.alerts.filter((e=>"default"!==D().get(e,"meta.source","default"))).length:null}get canManageAlerts(){const e=D().get(this.currentUser,"organizations.0.roles","");return D().includes(e,"admin")&&D().includes(e,"user")||D().includes(e,"community-manager")}get isSupportUser(){const e=D().get(this.currentUser,"organizations.0.roles","");return!D().includes(e,"user")&&!D().includes(e,"community-manager")}get isHydrating(){return D().isUndefined(pm.billing.plan.features)||D().isNull(this.currentUser.organizations)}get isTokenScannerEnabled(){return D().get(pm,"billing.plan.features.apisec_custom_tokens_enabled.value",!1)}get isSecretScannerDashboardEnabled(){return D().get(pm,"billing.plan.features.secret_scanner_dashboard_enabled.value",!1)}clearVerificationStatus(){this.verificationStatus={}}clearVerificationStatusField(e){this.verificationStatus={...this.verificationStatus,[e]:void 0}}getCustomAlertData(){return this.updateState(!0,!1,""),O.default.getAlerts().then((e=>{const t=D().get(e,"body.regexes"),r=D().get(e,"body.customAlertLimit");if(200===e.status){let e=D().uniq(t.map((e=>e.category)));return this.updateCustomAlertsData(t,r,e),t}this.updateState(!1,!0,e.body.error)})).catch((e=>{pm.logger.error("Error in fetching custom alert list",e),pm.toasts.error("Something went wrong in fetching data.")}))}fetchCustomAlertData(){(0,P.resolveStoreInstance)(_.default).onSyncAvailable({timeout:8e3}).then((()=>this.getCustomAlertData())).catch((()=>{this.updateState(!1,!1,"")}))}updateCustomAlertData(e,t){this.updatingAlert(e.id);const r=(0,P.resolveStoreInstance)(E.default);return O.default.updateAlert(e).then((a=>{if(200!==a.status)this.updateState(!1,!0,a);else if(D().has(e,["regex"])&&D().has(e,["sampleToken"]))if(a.body.safe&&a.body.match&&a.body.valid){const i=D().get(a,"body.regex.id"),o=D().map(r.alerts,(e=>e.id===a.body.regex.id?{...a.body.regex}:e),{});this.updateAlertList(o,i),this.verifiedRegex({safe:a.body.safe,match:a.body.match,valid:a.body.valid}),pm.toasts.success(!0,{noIcon:!0,title:"Alert Updated"}),t&&L.default.transitionTo(C.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER),j.default.addEventV2({category:"token_scanner",action:"updated_custom_alert",entityType:"custom_alert",entityId:e.id})}else this.errorUpdatingAlert(!0,a.body.error),this.verifiedRegex({safe:a.body.safe,match:a.body.match,valid:a.body.valid});else{const i=D().get(a,"body.regex.id"),o=D().map(r.alerts,(e=>e.id===a.body.regex.id?{...a.body.regex}:e),{});this.updateAlertList(o,i),pm.toasts.success(!0,{noIcon:!0,title:"Alert Updated"}),t&&L.default.transitionTo(C.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER),j.default.addEventV2({category:"token_scanner",action:"updated_custom_alert",entityType:"custom_alert",entityId:e.id})}})).catch((e=>{pm.logger.error("Error in updating alert",e),pm.toasts.error("Something went wrong in updating alert.",{noIcon:!0,title:"Error updating Alert"})}))}deleteAlert(e){const{id:t}=e,r=(0,P.resolveStoreInstance)(E.default);return this.deletingAlert(t),O.default.deleteAlert({id:t}).then((e=>{if(200!==e.status){this.errorDeletingAlert(!0,e.body.error);let t=e.body.error;t||(t="Try again — it should work next time around."),pm.toasts.error(t,{noIcon:!0,title:"Couldn't delete the alert"})}else{let e=D().filter(r.alerts,(e=>e.id!==t),{});this.deletedAlert(e,t),pm.toasts.success(!0,{noIcon:!0,title:"Alert deleted"});const a=this.getTeamRegexesCount(this.alerts);j.default.addEventV2({category:"token_scanner",action:"deleted_custom_alert",entityType:"custom_alert",entityId:t,value:a,label:a===this.customAlertLimit?"custom_alert_limit_reached":"custom_alert_limit_not_reached"})}})).catch((e=>{this.errorDeletingAlert(!0,"Something went wrong"),pm.toasts.error("An error occurred while deleting the custom alert. Please try again.",{noIcon:!0,title:"Couldn't delete the alert"})}))}createAlert(e){return this.creatingAlert(!0),O.default.createAlert(e).then((e=>{if(200!==e.status){this.errorCreatingAlert(!1,e.body.error);let t=e.body.error;t||(t="An error occurred while creating the custom alert. Please try again."),pm.toasts.error(t,{noIcon:!0,title:"Couldn't create the alert"})}else if(e.body.safe&&e.body.match&&e.body.valid)this.createdAlert(!1),this.verifiedRegex({safe:e.body.safe,match:e.body.match,valid:e.body.valid}),pm.toasts.success(!0,{noIcon:!0,title:"New custom alert created"}),L.default.transitionTo(C.TOKEN_SCANNER_ALERTS_ROUTE_IDENTIFIER);else{this.verifiedRegex({safe:e.body.safe,match:e.body.match,valid:e.body.valid}),this.errorCreatingAlert(!1,e.body.error);const t={category:"token_scanner",action:"add_failed_custom_alert",entityType:"custom_alert"};e.valid?e.safe?e.match||j.default.addEventV2({label:"added_regex_not_matched",...t}):j.default.addEventV2({label:"added_unsafe_regex",...t}):j.default.addEventV2({label:"added_invalid_regex",...t})}})).catch((e=>{[z,U].includes(e.error_code)&&this.verifiedRegex({safe:!0,match:!0,valid:!0,unique:!1}),e.error_code===x&&this.verifiedRegex({safe:!0,match:!0,valid:!0,unique:!0}),this.errorCreatingAlert(!1,"Something went wrong");const t={noIcon:!0,title:"Couldn't create the alert"};e.error_code===x&&pm.toasts.error("An error occurred while creating the custom alert. Please try again.",t)}))}setShowSecretLeakDetailsView(e){this.showSecretLeakDetailsView=e}setActiveTokenLeakTab(e){this.activeLeakListTab=e}setActiveTokenLeaksCount(e){this.activeTokenLeaksCount=e}setIndividualLeaksDetailsData(e){this.individualLeakData=e,this.loading=!1}get individualLeakDetails(){return this.individualLeakData}hydrateTokenLeaksCountMeta(e){const t=document.cookie.split("; ").find((e=>e.startsWith("secret_scanner_popup_visited"))),r=t&&t.split("=")[1];return O.default.fetchTokenLeaksCountInfo().then((t=>{const a=D().get(t,"body.data.unresolved");this.activeTokenLeaksCount=a,a>0&&!e&&(this.showSecretScannerNavBarIndicator=!0,this.showSecretScannerPopupHelp=!r)}))}fetchElementsValueHelpData(e,t){return O.default.fetchElementsValueHelpData(e,t).then((e=>{this.scannableElements=D().get(e,"body.data")}))}fetchIndividualTokenLeakDetails(e,t,r,a){return D().isUndefined(r)&&D().isUndefined(a)&&(this.loading=!0),this.individualLeakError=null,O.default.fetchTokenLeakDetails(e,t,r,a).then((e=>{r?this.individualLeakDetails.data.push(...D().get(e,"body.data")):a?(this.individualLeakDetails.meta.totalOccurrencesInWorkspace=D().get(e,"body.meta.totalOccurrencesInWorkspace"),this.individualLeakDetails.data=D().get(e,"body.data")):this.setIndividualLeaksDetailsData(D().get(e,"body"))})).catch((e=>{this.individualLeakError=e,this.loading=!1}))}getTeamRegexesCount(e){let t=0;return D().forEach(e,(e=>{"team"===e.meta.source&&t++})),t}}).prototype,"alerts",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=R(a.prototype,"category",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=R(a.prototype,"verificationStatus",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),n=R(a.prototype,"loading",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),l=R(a.prototype,"updating",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=R(a.prototype,"creating",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),p=R(a.prototype,"verifying",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=R(a.prototype,"deleting",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),u=R(a.prototype,"error",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=R(a.prototype,"customAlertLimit",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=R(a.prototype,"errorDetails",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),y=R(a.prototype,"showSecretLeakDetailsView",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=R(a.prototype,"showSecretScannerNavBarIndicator",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=R(a.prototype,"showSecretScannerPopupHelp",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=R(a.prototype,"activeTokenLeaksCount",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=R(a.prototype,"individualLeakData",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),I=R(a.prototype,"individualLeakError",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=R(a.prototype,"showIndividualLeakData",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w=R(a.prototype,"activeLeakListTab",[S.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),R(a.prototype,"updateState",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"updateState"),a.prototype),R(a.prototype,"updatingAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"updatingAlert"),a.prototype),R(a.prototype,"verifyingAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"verifyingAlert"),a.prototype),R(a.prototype,"verifiedRegex",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"verifiedRegex"),a.prototype),R(a.prototype,"updateAlertList",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"updateAlertList"),a.prototype),R(a.prototype,"errorUpdatingAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"errorUpdatingAlert"),a.prototype),R(a.prototype,"updateLimit",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"updateLimit"),a.prototype),R(a.prototype,"updateCategory",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"updateCategory"),a.prototype),R(a.prototype,"deletingAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"deletingAlert"),a.prototype),R(a.prototype,"errorDeletingAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"errorDeletingAlert"),a.prototype),R(a.prototype,"deletedAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"deletedAlert"),a.prototype),R(a.prototype,"creatingAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"creatingAlert"),a.prototype),R(a.prototype,"errorCreatingAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"errorCreatingAlert"),a.prototype),R(a.prototype,"createdAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"createdAlert"),a.prototype),R(a.prototype,"updateCustomAlertsData",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"updateCustomAlertsData"),a.prototype),R(a.prototype,"totalCustomAlert",[S.computed],Object.getOwnPropertyDescriptor(a.prototype,"totalCustomAlert"),a.prototype),R(a.prototype,"canManageAlerts",[S.computed],Object.getOwnPropertyDescriptor(a.prototype,"canManageAlerts"),a.prototype),R(a.prototype,"isSupportUser",[S.computed],Object.getOwnPropertyDescriptor(a.prototype,"isSupportUser"),a.prototype),R(a.prototype,"isHydrating",[S.computed],Object.getOwnPropertyDescriptor(a.prototype,"isHydrating"),a.prototype),R(a.prototype,"isTokenScannerEnabled",[S.computed],Object.getOwnPropertyDescriptor(a.prototype,"isTokenScannerEnabled"),a.prototype),R(a.prototype,"isSecretScannerDashboardEnabled",[S.computed],Object.getOwnPropertyDescriptor(a.prototype,"isSecretScannerDashboardEnabled"),a.prototype),R(a.prototype,"clearVerificationStatus",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"clearVerificationStatus"),a.prototype),R(a.prototype,"clearVerificationStatusField",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"clearVerificationStatusField"),a.prototype),R(a.prototype,"getCustomAlertData",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"getCustomAlertData"),a.prototype),R(a.prototype,"fetchCustomAlertData",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"fetchCustomAlertData"),a.prototype),R(a.prototype,"updateCustomAlertData",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"updateCustomAlertData"),a.prototype),R(a.prototype,"deleteAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"deleteAlert"),a.prototype),R(a.prototype,"createAlert",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"createAlert"),a.prototype),R(a.prototype,"setShowSecretLeakDetailsView",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"setShowSecretLeakDetailsView"),a.prototype),R(a.prototype,"setActiveTokenLeakTab",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"setActiveTokenLeakTab"),a.prototype),R(a.prototype,"setActiveTokenLeaksCount",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"setActiveTokenLeaksCount"),a.prototype),R(a.prototype,"setIndividualLeaksDetailsData",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"setIndividualLeaksDetailsData"),a.prototype),R(a.prototype,"individualLeakDetails",[S.computed],Object.getOwnPropertyDescriptor(a.prototype,"individualLeakDetails"),a.prototype),R(a.prototype,"hydrateTokenLeaksCountMeta",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"hydrateTokenLeaksCountMeta"),a.prototype),R(a.prototype,"fetchElementsValueHelpData",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"fetchElementsValueHelpData"),a.prototype),R(a.prototype,"fetchIndividualTokenLeakDetails",[S.action],Object.getOwnPropertyDescriptor(a.prototype,"fetchIndividualTokenLeakDetails"),a.prototype),a)}}]);