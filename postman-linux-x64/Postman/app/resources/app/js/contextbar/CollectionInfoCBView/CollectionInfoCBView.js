"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[108,107],{"./integrations/components/context-bar/IntegrationContextBarList.js":function(e,t,o){o.r(t),o.d(t,{IntegrationContextBarList:function(){return A}});var n,s=o("../../node_modules/react/index.js"),i=o("./node_modules/prop-types/index.js"),r=o.n(i),a=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),c=o("./js/components/base/LoadingIndicator.js"),l=o("./onboarding/src/features/Homepage/pages/IntegrationsPage/services/IntegrationService.ts"),d=o("./integrations/components/context-bar/IntegrationItem.js"),m=o("./integrations/components/context-bar/IntegrationInfoMock.js"),u=o("./js/stores/SyncStatusStore.js"),p=o("./js/stores/IntegrationsStore.js"),h=o("./js/stores/StoreManager.js"),g=o("./js/stores/ActiveWorkspaceStore.js"),f=o("../../node_modules/mobx/lib/mobx.module.js"),_=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),E=o("./integrations/components/context-bar/ViewConfig.js"),b=o("./integrations/navigation/constants.js"),I=o("./integrations/constants/IntegrationTargets.ts"),y=o("./integrations/components/context-bar/util.js"),v=o("./js/modules/services/AnalyticsService.js"),k=o("./appsdk/components/link/Link.js"),C=o("./node_modules/lodash/lodash.js");const S=["GitHub","Dropbox"],T=["Slack","PagerDuty"],N=["Datadog","Coralogix"],w={collection:{categories:[I.CLIENT_CATEGORY_COLLECTION_BACKUP]},monitor:{categories:[I.CLIENT_CATEGORY_MONITOR_ANALYTICS,I.CLIENT_CATEGORY_MONITOR_NOTIFICATIONS]}};function M(e,t,o,n,s,i){switch(n){case"collection":return function(e,t,o,n){const s=[];if(C.isEmpty(C.get(e,I.CLIENT_CATEGORY_COLLECTION_BACKUP,[]))){const e=y.default.filterAvailableIntegrationsByCategory(t,I.CATEGORY_BACKUP),i=y.default.generateAddIntegrationHelperText(e,S,2),r=E.default.getCollectionBackupViewConfig(i,o,n);s.push(r)}return s}(e,t,o,s);case"monitor":return function(e,t,o,n){const s=[];if(C.isEmpty(C.get(e,I.CLIENT_CATEGORY_MONITOR_NOTIFICATIONS,[]))){const e=y.default.filterIntegrationsByClientCategories(t,[I.CLIENT_CATEGORY_MONITOR_NOTIFICATIONS]),i=y.default.generateAddIntegrationHelperText(e,T,2),r=E.default.getMonitorNotificationViewConfig(i,o,n);s.push(r)}if(C.isEmpty(C.get(e,I.CLIENT_CATEGORY_MONITOR_ANALYTICS,{}))){const e=y.default.filterIntegrationsByClientCategories(t,[I.CLIENT_CATEGORY_MONITOR_ANALYTICS]),i=y.default.generateAddIntegrationHelperText(e,N,2),r=E.default.getMonitorAnalyticsViewConfig(i,o,n);s.push(r)}return s}(e,i,o,s)}return[]}function j(e){const{entityType:t,entityId:o,configuredIntegrationsByClientCategory:n,integrationServices:i,integrationClasses:r}=e,[a,c]=(0,s.useState)([]),l=(0,h.resolveStoreInstance)(g.default).id;(0,s.useEffect)((()=>{c(M(n,i,l,t,o,r))}),[n,i,r]);const u=C.sortBy(C.uniqBy(C.flatMap(n),(e=>e.id)),(e=>e.name)),p=!C.isEmpty(u);return s.createElement(s.Fragment,null,s.createElement("div",{className:"integration-context-bar-list__integration-list"},u.map((e=>s.createElement(d.default,{key:e.name,integration:e}))),a.map((e=>s.createElement(m.default,{key:e.key,viewConfig:e}))),p&&s.createElement("div",{className:"integration-context-bar-list__browse",onClick:()=>{v.default.addEventV2({category:"integrations",action:"click",label:`integrations_browse_all_${t}`,value:1})}},s.createElement(k.default,{to:{routeIdentifier:b.BROWSE_INTEGRATIONS_IDENTIFIER,queryParams:{category:"all"}}},"Browse integrations"))))}let A=(0,_.observer)(n=class extends s.Component{constructor(e){super(e),this.entityType=e.entityType,this.entityId=e.entityId,this.state={showIntegrations:!0,loading:!1,loaded:!1,error:!1,configuredIntegrationsByClientCategory:{}},this.toggleShowIntegrations=this.toggleShowIntegrations.bind(this),this.updateComponentData=this.updateComponentData.bind(this),this.integrationsStore=(0,h.resolveStoreInstance)(p.default)}updateComponentData(){const e=w[this.entityType].categories;let t=!1;this.fetchConfiguredIntegrationsAutorun=(0,f.autorun)((()=>{if((0,h.resolveStoreInstance)(u.default).isSocketConnected){t||this.setState({loading:!0,loaded:!1});const o=I.INTERNAL_ENTITY_NAME_MAPPING[this.entityType];l.default.getConfiguredIntegrationsByEntityAndClientCategory(o,this.entityId,e).then((e=>{const o=e;this.setState({configuredIntegrationsByClientCategory:o,loaded:!0}),t=!0})).catch((e=>this.setState({error:!0}))).finally((()=>this.setState({loading:!1})))}}))}componentDidMount(){this.updateComponentData()}componentWillUnmount(){this.fetchConfiguredIntegrationsAutorun&&this.fetchConfiguredIntegrationsAutorun()}toggleShowIntegrations(){this.setState((e=>({showIntegrations:!e.showIntegrations})))}render(){const e=!(0,h.resolveStoreInstance)(u.default).isSocketConnected,t=this.integrationsStore.getIntegrationServices(),o=this.integrationsStore.getIntegrationClasses(),n=this.integrationsStore.loadingIntegrationClasses,i=this.integrationsStore.loadingIntegrationServices;return s.createElement("div",{className:"integration-context-bar-list"},s.createElement("div",{className:"integration-context-bar-list__label-wrapper",onClick:this.toggleShowIntegrations},this.state.showIntegrations?s.createElement(a.default,{className:"integration-context-bar-list__label-wrapper-toggle",name:"icon-direction-down"}):s.createElement(a.default,{className:"integration-context-bar-list__label-wrapper-toggle",name:"icon-direction-right"})),s.createElement("div",{className:"integration-context-bar-list__label-wrapper-label",onClick:this.toggleShowIntegrations},"Integrations"),this.state.showIntegrations&&e&&!this.state.loaded&&s.createElement("div",{className:"integration-context-bar-list__status-info"},"You seem to be offline"),this.state.showIntegrations&&!e&&this.state.loading||n||i?s.createElement("div",{className:"integration-context-bar-list__loading"},s.createElement(c.default,null)):null,this.state.showIntegrations&&!e&&!this.state.loading&&this.state.error&&s.createElement("span",{className:"integration-context-bar-list__status-info"},"Unable to fetch integrations"),this.state.showIntegrations&&!this.state.error&&this.state.loaded&&!n&&!i&&s.createElement(j,{configuredIntegrationsByClientCategory:this.state.configuredIntegrationsByClientCategory,entityType:this.entityType,entityId:this.entityId,integrationServices:t,integrationClasses:o}))}})||n;A.propTypes={entityId:r().string.isRequired,entityType:r().oneOf(["collection","monitor"]).isRequired}},"./integrations/components/context-bar/IntegrationInfoMock.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return s}});var n=o("../../node_modules/react/index.js");function s(e){const{viewConfig:t}=e,[o,s]=(0,n.useState)(t.header),[i,r]=(0,n.useState)(t.body),[a,c]=(0,n.useState)(t.footer);return(0,n.useEffect)((()=>{s(t.header),r(t.body),c(t.footer)}),[t]),n.createElement("div",{className:"integration-context-bar-list__info"},n.createElement("div",{key:"header",className:"integration-context-bar-list__info-header"},o&&o),n.createElement("div",{key:"body",className:"integration-context-bar-list__info-body"},i&&i),n.createElement("div",{key:"footer",className:"integration-context-bar-list__info-footer"},t.route()))}},"./integrations/components/context-bar/IntegrationItem.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var n=o("../../node_modules/react/index.js"),s=o("./node_modules/@postman/date-helper/index.js"),i=o.n(s),r=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),a=o("./integrations/navigation/constants.js"),c=o("./js/components/base/Tooltips.js"),l=o("./js/modules/services/AnalyticsService.js"),d=o("./appsdk/components/link/Link.js"),m=o("./node_modules/lodash/lodash.js");const u={created:{class:"integration-status-icon-success",icon:"icon-state-success-stroke"},active:{class:"integration-status-icon-success",icon:"icon-state-success-stroke"},failed:{class:"integration-status-icon-error",icon:"icon-state-info-stroke"}};function p(e){const{integration:t}=e,o=(0,n.useRef)(null),[s,p]=(0,n.useState)(!1);return n.createElement("div",{className:"integration-context-bar-list__item"},n.createElement("div",{className:"integration-context-bar-list__item-icon",onMouseEnter:()=>m.includes(["failed"],t.status)&&p(!0),onMouseLeave:()=>m.includes(["failed"],t.status)&&p(!1),ref:o},n.createElement(r.default,{className:u[t.status].class,name:u[t.status].icon,size:"small"}),n.createElement(c.Tooltip,{show:s,target:o.current,placement:"top",immediate:!0},n.createElement(c.TooltipBody,null,"This integration has ",n.createElement("strong",null,t.status)))),n.createElement("div",{className:"integration-context-bar-list__item-area"},n.createElement("div",{className:"integration-context-bar-list__item-label",title:t.name,onClick:()=>{l.default.addEventV2({category:"integrations",action:"click",label:"integrations_view_run_log_target",value:1})}},n.createElement("span",null,n.createElement(d.default,{to:{routeIdentifier:a.INTEGRATIONS_RUNS_PAGE_IDENTIFIER,routeParams:{integrationId:t.id}}},t.name))),n.createElement("div",null,n.createElement("span",{className:"integration-context-bar-list__item-last-run"},`Last run: ${t.lastRunAt?i().getFormattedDateAndTime(t.lastRunAt):"Not Available"}`))))}},"./integrations/components/context-bar/ViewConfig.js":function(e,t,o){o.r(t);var n=o("./js/modules/services/AnalyticsService.js"),s=o("./runtime-repl/_common/NavigationConstants.js"),i=o("./integrations/constants/IntegrationTargets.ts"),r=o("./integrations/navigation/constants.js"),a=o("../../node_modules/react/index.js"),c=o("./appsdk/components/link/Link.js");class l{constructor(e,t,o,n,s,i,r){this.key=e,this.header=t,this.body=o,this.footer=n,this.workspaceId=s,this.entityType=i,this.entityId=r}route(){}}class d extends l{constructor(e,t,o){super("backup-view-config","Back up your collection",e,"View all options",t,"collection",o)}route(){return n.default.addEventV2({category:"integrations",action:"click",label:"integrations_view_all_collection_backup",value:1}),a.createElement(c.default,{to:{routeIdentifier:r.BROWSE_INTEGRATIONS_IDENTIFIER,queryParams:{category:"backup"}},options:{additionalContext:{selectedWorkspaceId:this.workspaceId,selectedEntityId:this.entityId,selectedEntityType:"collection",redirect:{identifier:s.WORKFLOW_IDENTIFIER.OPEN_COLLECTION_WITH_WS_SELECT,routeParams:{cid:this.entityId},queryParams:{ctx:"info"}}}}},this.footer&&this.footer)}}class m extends l{constructor(e,t,o){super("activity-view-config","Send monitoring results",e,"View all options",t,"monitor",o)}route(){return n.default.addEventV2({category:"integrations",action:"click",label:"integrations_view_all_monitor_notifications",value:1}),a.createElement(c.default,{to:{routeIdentifier:r.BROWSE_INTEGRATIONS_IDENTIFIER,queryParams:{category:i.CATEGORY_NOTIFICATIONS_NAV}},options:{additionalContext:{selectedWorkspaceId:this.workspaceId,selectedEntityId:this.entityId,selectedEntityType:"monitor",redirect:{identifier:"monitor.openWithWsSelect",routeParams:{monitorPath:this.entityId},queryParams:{ctx:"info"}}}}},this.footer&&this.footer)}}class u extends l{constructor(e,t,o){super("analytics-view-config","Send monitor analytics results",e,"View all options",t,"monitor",o)}route(){return n.default.addEventV2({category:"integrations",action:"click",label:"integrations_view_all_monitor_analytics",value:1}),a.createElement(c.default,{to:{routeIdentifier:r.BROWSE_INTEGRATIONS_IDENTIFIER,queryParams:{category:i.CATEGORY_ANALYTICS_NAV}},options:{additionalContext:{selectedWorkspaceId:this.workspaceId,selectedEntityId:this.entityId,selectedEntityType:"monitor",redirect:{identifier:"monitor.openWithWsSelect",routeParams:{monitorPath:this.entityId},queryParams:{ctx:"info"}}}}},this.footer&&this.footer)}}t.default={getCollectionBackupViewConfig:function(e,t,o){return new d(e,t,o)},getMonitorNotificationViewConfig:function(e,t,o){return new m(e,t,o)},getMonitorAnalyticsViewConfig:function(e,t,o){return new u(e,t,o)}}},"./integrations/components/context-bar/util.js":function(e,t,o){o.r(t);var n=o("./node_modules/lodash/lodash.js"),s=o.n(n);t.default={generateAddIntegrationHelperText:function(e,t,o){const n=new Set(e),i=[];for(const e of t)if(n.has(e)&&(i.push(e),n.delete(e)),s().isEqual(i.length,o))break;const r=[...n];for(;!s().isEqual(i.length,o)&&!s().isEmpty(r);)i.push(r.pop());return`\n      To ${i.join(", ")} \n      ${r.length>0?`or ${r.length} other ${r.length>1?"services":"service"}`:""}\n    `},filterAvailableIntegrationsByCategory:function(e,t){return s().map(s().filter(e,(e=>{const o=s().map(e.categories,"name");return s().includes(o,t)})),(e=>e.name))},filterIntegrationsByClientCategories:function(e,t){let o=s().filter(e,(e=>{const o=s().uniq(s().map(e.clientCategories,"key"));return s().find(o,(e=>s().includes(t,e)))}));return s().uniq(s().flatMap(o,(e=>s().map(e.services,"name"))))}}},"./mocks/components/InactiveMockIndicator.js":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("./js/components/base/Tooltips.js");class i extends n.Component{constructor(e){super(e),this.state={tooltipVisible:!1},this.mouseEnter=this.mouseEnter.bind(this),this.mouseLeave=this.mouseLeave.bind(this)}mouseEnter(){this.setState({tooltipVisible:!0})}mouseLeave(){this.setState({tooltipVisible:!1})}render(){return n.createElement("div",{className:"inactive-mock-indicator",ref:"bullet",onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},n.createElement(s.Tooltip,{target:this.refs.bullet,show:this.state.tooltipVisible,delay:0,placement:"bottom"},n.createElement(s.TooltipBody,null,"This mock server has been ",n.createElement("strong",null,"deactivated"),".")))}}t.default=i},"./mocks/components/InfoPaneMockListing.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return C}});var n=o("../../node_modules/react/index.js"),s=o("./node_modules/lodash/lodash.js"),i=o.n(s),r=o("../../node_modules/mobx/lib/mobx.module.js"),a=o("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),c=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),l=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),d=o("./appsdk/components/link/Link.js"),m=o("./js/stores/CurrentUserStore.js"),u=o("./collaboration/workspace/model/ActiveWorkspacePermissionStore.ts"),p=o("./js/stores/StoreManager.js"),h=o("./js/stores/SyncStatusStore.js"),g=o("./js/components/base/LoadingIndicator.js"),f=o("./js/components/base/Buttons.js"),_=o("./mocks/services/MockService.js"),E=o("./mocks/services/MockNavigationService.js"),b=o("./mocks/constants/MockErrors.js"),I=o("./mocks/components/InactiveMockIndicator.js"),y=o("./collaboration/workspace/types/PermissionTypes.ts");function v(e){return n.createElement("div",{className:"info-pane__mock-servers__header-wrapper"},n.createElement("div",{className:"info-pane__mock-servers__header-wrapper__label"},"Mock servers"),"collection"===e.entity&&n.createElement(f.Button,{className:"info-pane__mock-servers__header-wrapper__create-new-mock",onClick:e.handleMockCreate,type:"tertiary",size:"small",disabled:!e.canAddMockToCollection||e.socketConnectionError,tooltip:(t=e.socketConnectionError,o=e.canAddMockToCollection,t?b.OFFLINE_ERROR:o?"Create mock server":b.PERMISSION_ERROR),tooltipPlacement:"left"},n.createElement(l.default,{name:"icon-action-add-stroke",color:"content-color-secondary",size:"small",className:"info-pane__mock-servers__header-wrapper__create-new-mock__icon"}),"New"));var t,o}class k extends n.Component{constructor(e){super(e),this.state={showAll:!1},this.toggleShowAll=this.toggleShowAll.bind(this)}toggleShowAll(){this.setState({showAll:!this.state.showAll})}render(){const e=i().get(this.props,"mocks",[]),t=e.length;return this.props.socketConnectionError?n.createElement("div",{className:"info-pane__mock-servers__error-state"},"Unable to load mock servers"):this.props.fetchingMocks?n.createElement("div",{className:"info-pane__mock-servers__loading"},n.createElement(g.default,null)):this.props.errorFetchingMocks?n.createElement(n.Fragment,null,n.createElement("div",{className:"info-pane__mock-servers__error-state"},"There was an unexpected error while loading mock servers. Please try again."),n.createElement(a.default,{onClick:this.props.handleFetchMocks,type:"secondary",size:"small",text:"Try again"})):0===t?n.createElement("div",{className:"info-pane__mock-servers__empty-state"},"collection"===this.props.entity?"There are no mock servers created for this collection.":"No mock server uses this environment."):n.createElement(n.Fragment,null,e.slice(0,this.state.showAll?t:5).map((e=>n.createElement("div",{key:e.id,className:"info-pane__mock-servers__mock-item"},n.createElement(d.default,{className:"info-pane__mock-servers__mock-item__link",to:{routeIdentifier:"mock.openWithWsSelect",routeParams:{mockId:e.id},queryParams:{}},options:{additionalContext:{origin:this.props.entity+"_info_pane"}},title:e.name},n.createElement(c.default,{type:"link-subtle",className:"info-pane__mock-servers__mock-item__link__name"},e.name)),!1===e.active&&n.createElement("div",{className:"info-pane__mock-servers__mock-item__active"},n.createElement(I.default,null))))),t>5&&(this.state.showAll?n.createElement("div",{onClick:this.toggleShowAll,className:"info-pane__mock-servers__show-all-mocks-label"},"Show less"):n.createElement("div",{onClick:this.toggleShowAll,className:"info-pane__mock-servers__show-all-mocks-label"},"Show ",t-5," more")))}}class C extends n.Component{constructor(e){super(e),this.state={mocks:[],fetchingMocks:!0,errorFetchingMocks:!1,socketConnectionError:!1},this.handleFetchMocks=this.handleFetchMocks.bind(this),this.handleMockCreate=this.handleMockCreate.bind(this),this.canAddMockToCollection=this.canAddMockToCollection.bind(this)}componentDidMount(){this.fetchMockListingDisposer=(0,r.reaction)((()=>(0,p.resolveStoreInstance)(h.default).isSocketConnected),(e=>{e?this.handleFetchMocks():this.setState({socketConnectionError:!0,fetchingMocks:!1})}),{fireImmediately:!0})}componentWillUnmount(){this.fetchMockListingDisposer=null}handleFetchMocks(){let e={};return"collection"===this.props.entity&&this.props.collectionUid?e=i().assign(e,{collection:this.props.collectionUid}):"environment"===this.props.entity&&this.props.environmentUid&&(e=i().assign(e,{environment:this.props.environmentUid})),this.setState({fetchingMocks:!0,errorFetchingMocks:!1,socketConnectionError:!1}),(0,_.getMocks)({...e,inactive:!0}).then((e=>{this.setState({mocks:e,fetchingMocks:!1,errorFetchingMocks:!1})})).catch((e=>{this.setState({mocks:[],fetchingMocks:!1,errorFetchingMocks:!0})}))}handleMockCreate(){E.default.transitionTo("build.mockCreate",{},{collection:this.props.collectionUid},{additionalContext:{origin:"collection_info_pane"}})}canAddMockToCollection(){const e=i().get(this.props,"info.collection"),t=(0,p.resolveStoreInstance)(u.default),o=t&&t.permissions;return!(0,p.resolveStoreInstance)(m.default).isLoggedIn||i().get(e,"permissions.addMock",!0)&&i().get(o,y.WORKSPACE_PERMISSIONS.ADD_MOCK_TO_WORKSPACE,!0)}render(){return n.createElement("div",{className:"info-pane__mock-servers"},n.createElement(v,{canAddMockToCollection:this.canAddMockToCollection(),entity:this.props.entity,handleMockCreate:this.handleMockCreate,socketConnectionError:this.state.socketConnectionError}),n.createElement(k,{fetchingMocks:this.state.fetchingMocks,errorFetchingMocks:this.state.errorFetchingMocks,socketConnectionError:this.state.socketConnectionError,mocks:this.state.mocks,entity:this.props.entity,handleFetchMocks:this.handleFetchMocks}))}}},"./mocks/services/MockRealtimeRequestService.js":function(e,t,o){o.r(t);var n=o("./node_modules/uuid/v4.js"),s=o.n(n),i=o("./js/modules/model-event.js"),r=o("./node_modules/rxjs/_esm5/internal/Observable.js"),a=o("./node_modules/rxjs/_esm5/internal/operators/share.js"),c=o("./node_modules/rxjs/_esm5/internal/operators/filter.js"),l=o("./node_modules/lodash/lodash.js");const d="NEXT",m="ERROR",u="COMPLETE";let p=new r.Observable((e=>{let t;if(!pm||!pm.eventBus)return void pm.logger.error("RemoteRealtimeRequestService~requestListener: Could not fetch. Missing event bus.");let o=o=>{t=o.name,t!==d&&t!==m&&t!==u||e.next(o)};return pm.windowEvents.addListener("realtime-requests",o),()=>{pm.windowEvents.removeListener("realtime-requests",o)}})).pipe((0,a.share)());t.default=function(e,t={},o,n={}){pm.eventBus.channel("realtime-requests");let a=s()();return new r.Observable((s=>{let r=!1;pm.windowEvents.emit("realtime-requests",(0,i.createEvent)("SUBSCRIBE","realtimeRequest",{id:a,subscriptionRequestObject:{subscriptionRequestUrl:e,subscriptionRequestOptions:t},unsubscriptionRequestObject:{unsubscriptionRequestUrl:o,unsubscriptionRequestOptions:n}}));let h=p.pipe((0,c.filter)((e=>l.get(e,"data.id")===a))).subscribe((e=>{e.name===d?s.next(l.get(e,"data.response")):e.name===m?s.error(new Error(l.get(e,"data.error"))):e.name===u&&(r=!0,h.unsubscribe(),s.complete())}),(e=>{s.error(e)}),(()=>{s.complete()}));return function(){r||(pm.windowEvents.emit("realtime-requests",(0,i.createEvent)("UNSUBSCRIBE","realtimeRequest",{id:a,unsubscriptionRequestObject:{unsubscriptionRequestUrl:o,unsubscriptionRequestOptions:n}})),h.unsubscribe())}}))}},"./mocks/services/MockService.js":function(e,t,o){o.r(t),o.d(t,{createMock:function(){return p},deleteMock:function(){return u},getAllRealtimeEvents:function(){return m},getMockConfigOptions:function(){return c},getMocks:function(){return l},updateMock:function(){return d}});var n=o("./node_modules/querystring-browser/querystring.js"),s=o.n(n),i=o("./js/modules/services/RemoteSyncRequestService.js"),r=o("./mocks/services/MockRealtimeRequestService.js"),a=o("./node_modules/lodash/lodash.js");function c(){return i.default.request("/ws/proxy",{method:"post",data:{method:"get",service:"mock",path:"/mocks/config"}}).then((({body:e})=>e))}function l(e={}){let t=`/mocks?${s().stringify(e)}`;return i.default.request("/ws/proxy",{method:"post",data:{service:"mock",method:"get",path:t}}).then((({body:e})=>Promise.resolve(e))).catch((({error:e})=>Promise.reject(e)))}function d(e={}){const t=`/mocks/${e.id}`,o=a.pick(e,["private","name","versionTag","environment"]);if(o.name&&(o.name=o.name.trim()),a.isUndefined(e.delay)||(o.config={delay:a.isNull(e.delay)?e.delay:{...e.delay,duration:Number(e.delay.duration)}}),!a.isUndefined(e.serverResponseId)){let t=o.config?o.config:{};o.config={...t,serverResponseId:e.serverResponseId}}if(!a.isUndefined(e.matchBody)){let t=o.config?o.config:{};o.config={...t,matchBody:e.matchBody}}if(!a.isUndefined(e.matchHeader)){let t=o.config?o.config:{};o.config={...t,matchHeader:e.matchHeader,headers:e.headers}}return i.default.request("/ws/proxy",{method:"post",data:{service:"mock",method:"put",body:o,path:t}}).then((({body:e})=>Promise.resolve(e))).catch((({error:e})=>Promise.reject(e)))}function m(e,t){if(!e&&!t)return void pm.logger.error("MockService~getAllRealtimeEvents: workspaceId or mockId not found");const o="/mocks/subscribe",n="/ws/proxy",s=a.isEmpty(e)?{mock:t}:{workspace:e},i="mock",c={method:"post",data:{body:s,path:o,service:i,method:"post"}},l={method:"post",data:{body:s,path:o,service:i,method:"delete"}};return(0,r.default)(n,c,n,l)}function u(e){if(!e)return void pm.logger.error("MockService~deleteMock: mockId not found");const t=`/mocks/${e}`;return i.default.request("/ws/proxy",{method:"post",data:{service:"mock",method:"delete",path:t}}).then((({body:e})=>Promise.resolve(e))).catch((({error:e})=>Promise.reject(e)))}function p(e,t,o=""){if(!e||!t)return void pm.logger.error("MockService~createMock: workspaceId or mockData not found");let n=`/mocks?workspace=${e}`;return t.name&&(t.name=t.name.trim()),"template"===o&&(n+="&source=template"),i.default.request("/ws/proxy",{method:"post",data:{service:"mock",method:"post",body:t,path:n}}).then((({body:e})=>Promise.resolve(e))).catch((({error:e})=>Promise.reject(e)))}},"./monitors/components/common/MonitorStatusIndicator.js":function(e,t,o){o.r(t);var n=o("../../node_modules/react/index.js"),s=o("./node_modules/classnames/index.js"),i=o.n(s),r=o("./js/components/base/Tooltips.js");class a extends n.Component{constructor(e){super(e),this.state={tooltipVisible:!1},this.mouseEnter=this.mouseEnter.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.getStatus=this.getStatus.bind(this)}mouseEnter(){this.setState({tooltipVisible:!0})}mouseLeave(){this.setState({tooltipVisible:!1})}getClasses(){return i()({"monitor-list-item-health-status":!0,[this.getStatus()]:!!this.getStatus(),[this.props.className]:this.props.className})}getStatus(){return this.props.isPaused?"paused":this.props.isHealthy?"healthy":!1===this.props.isHealthy?"unhealthy":!!this.props.status&&this.props.status}getUptimeStatus(){return this.props.isPaused?n.createElement(r.TooltipBody,null,"This ",this.props.entityType," is ",n.createElement("strong",null,"paused"),"."):!this.props.isPaused&&"up"==this.props.status||"down"==this.props.status?n.createElement(r.TooltipBody,null,"Service is ",n.createElement("strong",null,this.props.status),"."):!this.props.isPaused&&"unknown"==this.props.status&&n.createElement(r.TooltipBody,null,"Service status is ",n.createElement("strong",null,this.props.status),".")}render(){return this.getStatus()?n.createElement("div",{className:this.getClasses(),ref:"bullet",onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},n.createElement(r.Tooltip,{target:this.refs.bullet,show:this.state.tooltipVisible,delay:"0",className:"monitor-list-item-health-tooltip",placement:this.props.placement||"top"},"uptime"===this.props.type?this.getUptimeStatus():n.createElement(r.TooltipBody,null,"This ",this.props.entityType," is ",n.createElement("strong",null,this.getStatus()),"."))):null}}t.default=a},"./monitors/components/context-bar/MonitorContextBarList.js":function(e,t,o){o.r(t),o.d(t,{MonitorContextBarList:function(){return C}});var n,s=o("../../node_modules/react/index.js"),i=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),r=o("./monitors/stores/domain/MasterMonitorStore.js"),a=o("./monitors/services/UrlService.js"),c=o("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),l=o("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),d=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),m=o("./appsdk/components/link/Link.js"),u=o("./js/components/base/LoadingIndicator.js"),p=o("./monitors/components/common/MonitorStatusIndicator.js"),h=o("./collaboration/workspace/model/ActiveWorkspacePermissionStore.ts"),g=o("./js/stores/CurrentUserStore.js"),f=o("./js/stores/StoreManager.js"),_=o("./js/stores/ActiveWorkspaceStore.js"),E=o("./js/components/base/Buttons.js"),b=o("./monitors/utils/messages/index.js"),I=o("./runtime-repl/_common/ModelConstant.js"),y=o("./node_modules/lodash/lodash.js");function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},v.apply(this,arguments)}function k(e){return s.createElement(m.default,{className:"monitor-context-bar-list__item",to:{routeIdentifier:"monitor.openWithWsSelect",routeParams:{monitorPath:a.default.getMonitorPath({monitorName:e.name,monitorId:e.id})}}},s.createElement(c.default,{type:"link-subtle",className:"monitor-context-bar-list__item-label"},e.name),s.createElement("div",{className:"monitor-context-bar-list__item-icon"},s.createElement(p.default,{entityType:"monitor",isHealthy:e._healthy,isPaused:!e.active})))}let C=(0,i.observer)(n=class extends s.Component{constructor(e){super(e),this.masterMonitorStore=new r.default,this.entityId=e.id,this.state={showAllMonitors:!1,loading:!1,error:!1},this.toggleShowAllMonitors=this.toggleShowAllMonitors.bind(this),this.createNewMonitor=this.createNewMonitor.bind(this),this.activeWorkspaceStore=(0,f.resolveStoreInstance)(_.default),this.currentUserStore=(0,f.resolveStoreInstance)(g.default),this.fetchEmptyState=this.fetchEmptyState.bind(this),this.getEntityIdWithoutUserId=this.getEntityIdWithoutUserId.bind(this),this.canCreateMonitor=this.canCreateMonitor.bind(this),this.loadMonitors=this.loadMonitors.bind(this),this.fetchErrorState=this.fetchErrorState.bind(this),this.getTooltipMessage=this.getTooltipMessage.bind(this)}toggleShowAllMonitors(){this.setState({showAllMonitors:!this.state.showAllMonitors})}createNewMonitor(){if(!this.currentUserStore.isLoggedIn)return pm.mediator.trigger("showSignInModal",{title:b.SIGN_IN_MESSAGE.title,subtitle:b.SIGN_IN_MESSAGE.subTitle,origin:`${this.props.entity}_context_bar_monitor_list`});a.default.openCreateMonitorUrl(this.entityId)}loadMonitors(){this.setState({loading:!0}),this.masterMonitorStore.loadJobTemplatesByEntity({entity:this.props.entity,entityId:this.props.id}).then((()=>this.setState({...this.state,loading:!1,error:!1}))).catch((()=>this.setState({error:!0}))).finally((()=>this.setState({loading:!1})))}componentDidMount(){this.loadMonitors()}fetchEmptyState(e){const t="environment",o="collection";return e===t?s.createElement("span",{className:"monitor-context-bar-list__empty-state"},`${b.EMPTY_STATE.noEnvironment} ${t}.`):s.createElement("span",{className:"monitor-context-bar-list__empty-state"},`${b.EMPTY_STATE.noCollection} ${o}.`)}fetchErrorState(){return s.createElement("div",{className:"monitor-context-bar-list__error-state"},s.createElement("span",{className:"monitor-context-bar-list__error-state-message"},b.MONITOR_ACTION_ERROR.load),s.createElement(l.default,{onClick:this.loadMonitors,type:"secondary",size:"small",text:b.TRY_AGAIN,className:"monitor-context-bar-list__error-state-retry-btn"}))}getEntityIdWithoutUserId(){let e=y.get(this,"props.id","").indexOf("-");if(-1!==e)return this.props.id.substr(e+1)}canCreateMonitor(){const e=(0,f.resolveStoreInstance)(h.default).permissions;if(this.props.entity!==I.COLLECTION)return!0;const t=this.props.info.collection;return!this.currentUserStore.isLoggedIn||e&&e.ADD_MONITOR_TO_WORKSPACE&&y.get(t,"permissions.addMonitor",!0)}getTooltipMessage(){return this.masterMonitorStore.isOffline?b.TOOLTIP_TEXT.isOffline:this.canCreateMonitor()?b.MONITOR_ACTION.create:b.PERMISSION_TEXT.WORKSPACE_VIEWER_DISABLED}render(){const e=this.masterMonitorStore.getJobTemplatesByEntity({entity:this.props.entity,entityId:this.props.id}),t=this.state.showAllMonitors?e:e.slice(0,5);return s.createElement("div",{className:"monitor-context-bar-list"},s.createElement("div",{className:"monitor-context-bar-list__label-wrapper"},s.createElement("span",{className:"monitor-context-bar-list__label-wrapper-label"},"Monitors"),this.props.showCreateMonitor?s.createElement(E.Button,{onClick:this.createNewMonitor,type:"tertiary",size:"small",disabled:!this.canCreateMonitor()||this.masterMonitorStore.isOffline,className:"monitor-context-bar-list__label-wrapper-create-new-monitor",tooltip:this.getTooltipMessage(),tooltipPlacement:"left"},s.createElement(d.default,{name:"icon-action-add-stroke",color:"content-color-secondary",size:"small",className:"monitor-context-bar-list__label-wrapper-create-new-monitor-icon"}),"New"):null),this.state.loading&&!t.length&&s.createElement("div",{className:"monitor-context-bar-list__loading"},s.createElement(u.default,null)),this.state.error&&!this.state.loading&&this.fetchErrorState(),!this.state.error&&!this.state.loading&&0===t.length&&this.fetchEmptyState(this.props.entity),s.createElement("div",{className:"monitor-context-bar-list__monitor-list"},t.map((e=>s.createElement(k,v({key:e.id},e,{openMonitor:this.openMonitor}))))),e.length>5?this.state.showAllMonitors?s.createElement("span",{onClick:this.toggleShowAllMonitors,className:"monitor-context-bar-list__show-all-monitors"},b.MONITOR_ACTION.showLess):s.createElement("span",{onClick:this.toggleShowAllMonitors,className:"monitor-context-bar-list__show-all-monitors"},"Show ",e.length-5," more"):null)}})||n},"./runtime-repl/collection/contextbar/CollectionInfoCBController.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var n,s,i,r,a,c=o("../../node_modules/mobx/lib/mobx.module.js"),l=o("./runtime-repl/collection/_api/CollectionStoreV2.js");function d(e,t,o,n){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(n):void 0})}function m(e,t,o,n,s){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=o.slice().reverse().reduce((function(o,n){return n(e,t,o)||o}),i),s&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(s):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}let u=(s=m((n=class{constructor(){d(this,"id",s,this),d(this,"createdAt",i,this),d(this,"collection",r,this),d(this,"owner",a,this)}update(e){e&&(e.id&&(this.id=e.id),e.createdAt&&(this.createdAt=e.createdAt),e.owner&&(this.owner=e.owner),e.collection&&(this.collection=e.collection))}}).prototype,"id",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=m(n.prototype,"createdAt",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=m(n.prototype,"collection",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=m(n.prototype,"owner",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m(n.prototype,"update",[c.action],Object.getOwnPropertyDescriptor(n.prototype,"update"),n.prototype),n);class p{constructor(){this.info=new u}async didCreate(e){const{uid:t}=e;this.info.update({id:t}),this.collection=await(0,l.subscribeOne)(t,{permissions:this.constructor.collectionPermissions,exclude:["response","request"]}),this.collection&&this.info.update({id:t,createdAt:this.collection.createdAt,owner:this.collection.owner,collection:this.collection})}willDestroy(){this.collection&&this.collection.unsubscribe&&this.collection.unsubscribe()}}p.collectionPermissions=["addMock","addMonitor"]},"./runtime-repl/collection/contextbar/CollectionInfoCBView/CollectionInfoCBView.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return y}});var n=o("../../node_modules/react/index.js"),s=o("./node_modules/prop-types/index.js"),i=o.n(s),r=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("../../packages/api-network/private-network/index.js"),c=o("./js/stores/ActiveWorkspaceSessionStore.js"),l=o("./js/stores/CurrentUserStore.js"),d=o("./js/stores/StoreManager.js"),m=o("./js/services/NavigationService.js"),u=o("./runtime-repl/_common/components/molecule.js"),p=o("./appsdk/contextbar/ContextBarViewHeader.js"),h=o("./monitors/components/context-bar/MonitorContextBarList.js"),g=o("./runtime-repl/collection/contextbar/CollectionInfoCBController.js"),f=o("./mocks/components/InfoPaneMockListing.js"),_=o("./integrations/components/context-bar/IntegrationContextBarList.js"),E=o("./appsdk/workbench/WorkbenchService.js"),b=o("./node_modules/lodash/lodash.js");const I=r.default.div`
  padding-top: var(--spacing-l);
`;function y(e){const{controller:t}=e,{info:o={}}=t,{apiId:s}=m.default.getCurrentRouteParams(),i=(0,d.resolveStoreInstance)(c.default).activeEditor,r=E.default.getTabController(i),g=r&&r.model,y=g&&g.actionMenuContext,v=b.get(y,"canEditEntity"),k=(0,d.resolveStoreInstance)(l.default);return n.createElement("div",{className:"collection-info-cb"},n.createElement(p.ContextBarViewHeader,{title:"Collection details",onClose:e.onClose}),n.createElement("div",{className:"collection-info-cb__container"},n.createElement(u.EntityMetaInfoView,{userFriendlyEntityName:"collection",info:o}),!s&&!k.isCurrentUserGuest&&n.createElement(f.default,{collectionUid:o.id,info:o,entity:"collection"}),!s&&!k.isCurrentUserGuest&&n.createElement(h.MonitorContextBarList,{id:o.id,info:o,entity:"collection",showCreateMonitor:!0}),n.createElement(I,null,n.createElement(a.AddToNetworkCTA,{entityId:o.id,entityType:"collection",origin:"collection-cb",canNotEditEntity:!v})),b.includes(["dev","beta","stage","canary","prod"],window.RELEASE_CHANNEL)&&!k.isCurrentUserGuest&&n.createElement(_.IntegrationContextBarList,{entityId:o.id,entityType:"collection"})))}y.propTypes={controller:i().instanceOf(g.default).isRequired,onClose:i().func.isRequired}},"./integrations/constants/IntegrationTargets.ts":function(e,t,o){o.r(t),o.d(t,{CATEGORY_ANALYTICS_NAV:function(){return a},CATEGORY_BACKUP:function(){return c},CATEGORY_NOTIFICATIONS_NAV:function(){return r},CLIENT_CATEGORY_COLLECTION_BACKUP:function(){return n},CLIENT_CATEGORY_MONITOR_ANALYTICS:function(){return s},CLIENT_CATEGORY_MONITOR_NOTIFICATIONS:function(){return i},INTERNAL_ENTITY_NAME_MAPPING:function(){return l}});const n="backup-collection",s="analytics-monitor",i="notifications-monitor",r="notifications",a="analytics",c="Backup",l={monitor:"jobTemplate",collection:"collection"}}}]);