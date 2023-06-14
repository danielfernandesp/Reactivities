"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[45],{"../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoMonitor.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var s=o("../../node_modules/react/index.js"),i=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/Illustration.js");function r(){return s.createElement(i.default,{name:"illustration-no-monitor"})}},"./js/containers/apps/requester/sidebar/SidebarFilter.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var s,i=o("../../node_modules/react/index.js"),r=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),n=o("./js/components/base/XPaths/XPath.js"),a=o("./js/components/base/Inputs.js"),l=o("./node_modules/lodash/lodash.js");let d=(0,r.observer)(s=class extends i.Component{constructor(e){super(e),this.handleSearchChange=this.handleSearchChange.bind(this),this.handleSearchCancel=this.handleSearchCancel.bind(this),this.focusSearchBox=this.focusSearchBox.bind(this)}UNSAFE_componentWillMount(){pm.mediator.on("focusSearchBox",this.focusSearchBox)}componentWillUnmount(){pm.mediator.off("focusSearchBox",this.focusSearchBox)}focusSearchBox(){l.invoke(this,"refs.filter.focus")}handleSearchChange(e){this.props.onSearch&&this.props.onSearch(e)}handleSearchCancel(){this.props.onSearch&&this.props.onSearch("")}render(){return i.createElement(n.default,{identifier:"filter"},i.createElement(a.Input,{icon:"icon-action-filter-stroke",ref:"filter",inputStyle:"search",onChange:this.handleSearchChange,onCancel:this.handleSearchCancel,query:this.props.searchQuery,className:this.props.className}))}})||s},"./js/containers/apps/requester/sidebar/SidebarListActions.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var s,i=o("../../node_modules/react/index.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),n=o("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-add-stroke.js"),a=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),l=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),d=o("./js/containers/apps/requester/sidebar/SidebarFilter.js"),c=o("./js/components/base/Buttons.js"),m=o("./js/components/base/Dropdowns.js"),p=o("./js/components/base/XPaths/XPath.js"),h=o("./collaboration/utils/workspace.js");let u=(0,l.observer)(s=class extends i.Component{constructor(e){super(e),this.handleDropdownSelect=this.handleDropdownSelect.bind(this)}handleDropdownSelect(e){this.props.onActionsDropdownSelect&&this.props.onActionsDropdownSelect(e)}getCreateNewButton(e){if(!e)return null;const t=i.createElement(r.default,{className:"create-new__btn",onClick:e.onCreate,tooltip:e.tooltip,isDisabled:e.disabled,icon:i.createElement(n.default,null),type:"tertiary",size:"small"});return e.xPathIdentifier?i.createElement(p.default,{identifier:e.xPathIdentifier},t):t}render(){return i.createElement("div",{className:"requester-left-sidebar__actions-container"},this.getCreateNewButton(this.props.createNewConfig),i.createElement(d.default,{onSearch:this.props.onSearch,className:this.props.className,searchQuery:this.props.searchQuery}),!this.props.rightMetaContainer&&!this.props.moreActions||(0,h.shouldShowForGuestUser)()?"":i.createElement("div",{className:"secondary-actions-container"},this.props.rightMetaContainer,this.props.moreActions?i.createElement(m.Dropdown,{ref:"menu",onSelect:this.handleDropdownSelect,className:"actions-dropdown"},i.createElement(m.DropdownButton,{dropdownStyle:"nocaret",type:"custom"},i.createElement(c.Button,{tooltip:"View more actions"},i.createElement(a.default,{name:"icon-action-options-stroke",className:"dropdown-action-button pm-icon pm-icon-normal"}))),this.props.moreActions):null))}})||s},"./monitors/components/common/DisabledTooltipWrapper.js":function(e,t,o){o.r(t);var s=o("../../node_modules/react/index.js"),i=o("./monitors/components/common/TooltipWithButton.js"),r=o("./js/components/base/Tooltips.js"),n=o("./monitors/stores/domain/MonitorPermissionStore.js"),a=o("./js/services/NavigationService.js"),l=o("./collaboration/navigation/constants.js"),d=o("./monitors/utils/messages/index.js");class c extends s.Component{constructor(e){super(e),this.state={tooltipVisible:!1},this.tooltipTimeout,this.monitorPermissionStore=new n.default,this.mouseEnter=this.mouseEnter.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.hideTooltipImmediately=this.hideTooltipImmediately.bind(this)}hideTooltipImmediately(){this.setState({tooltipVisible:!1}),document.getElementsByClassName("is-hidden")[0].click()}mouseEnter(){this.tooltipTimeout&&clearTimeout(this.tooltipTimeout),this.setState({tooltipVisible:!0})}mouseLeave(){this.tooltipTimeout&&clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout((()=>{this.setState({tooltipVisible:!1})}),400)}onRequestAccessClick(e,t){a.default.transitionTo(l.ACCESS_REQUEST_CREATE_BUILD_IDENTIFIER,null,{entityId:e,entityName:t,entityType:"monitor",type:"grant_role"}),this.hideTooltipImmediately()}getTooltipBody(){return this.props.isOffline?d.TOOLTIP_TEXT.isOffline:this.props.tooltipText?this.props.tooltipText:s.createElement(i.default,{className:"monitor-request-access-tooltip",message:d.PERMISSION_TEXT.REQUEST_ACCESS_MSG,onClick:()=>this.onRequestAccessClick(this.props.monitorId,this.props.monitorName),buttonText:d.TOOLTIP_TEXT.requestAccess})}render(){return s.createElement("span",{className:`${this.props.wrapperPrefix}-tooltip-wrapper`,ref:"tooltipWrapper",onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},this.props.children,this.props.showTooltip&&s.createElement(r.Tooltip,{target:this.refs.tooltipWrapper,show:this.state.tooltipVisible,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,delay:0},s.createElement(r.TooltipBody,null,this.getTooltipBody())))}}c.defaultProps={wrapperPrefix:"monitor"},t.default=c},"./monitors/components/common/MonitorList.js":function(e,t,o){o.r(t);var s,i=o("../../node_modules/react/index.js"),r=o("./monitors/components/common/MonitorListItem.js"),n=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=o("./monitors/stores/domain/MonitorPermissionStore.js"),l=o("./js/components/base/XPaths/XPath.js"),d=o("./js/stores/StoreManager.js"),c=o("./js/stores/CurrentUserStore.js"),m=o("./js/components/base/keymaps/KeyMaps.js"),p=o("./monitors/stores/domain/MonitorContainerStore.js"),h=o("./monitors/constants.js"),u=o("./node_modules/lodash/lodash.js");const b=new Map;let f=(0,n.observer)(s=class extends i.Component{constructor(e){super(e),this.monitorPermissionStore=new a.default,this.monitorContainerStore=new p.default,this.listItemRefs={},this.focusNext=this.focusNext.bind(this),this.focusPrev=this.focusPrev.bind(this),this.deleteItem=this.deleteItem.bind(this),this.renameItem=this.renameItem.bind(this),this.openMonitorTabDebounced=u.debounce((e=>{this.props.openMonitorTab(e.id,e.name)}),300)}render(){let e=this.props.items.map(((e,t)=>{let o;const s=e.id===this.props.activeMonitorId||void 0,n=this.monitorContainerStore.isCollectionInWorkspace(e.collection),a=!this.monitorPermissionStore.isUserLoggedIn()||this.monitorPermissionStore.can("delete",e.id),m=!this.monitorPermissionStore.isUserLoggedIn()||this.monitorPermissionStore.can("edit",e.id);o="collection-based"!==e.type&&e.type?!this.monitorPermissionStore.isUserLoggedIn()||this.monitorPermissionStore.can("edit",e.id):!this.monitorPermissionStore.isUserLoggedIn()||this.monitorPermissionStore.can("edit",e.id)&&n,b.set(e.id,{canRename:o,canDelete:a});let p=!n,u=(0,d.resolveStoreInstance)(c.default),f=!this.monitorPermissionStore.isUserLoggedIn()||!!u.team&&!u.isCurrentUserPartner&&!u.isCurrentUserGuest;return e.type===h.UPTIME_MONITOR_TYPE&&(p=!1,f=!this.monitorPermissionStore.isUserLoggedIn()||!1),i.createElement(l.default,{identifier:e.id,key:t},i.createElement(r.default,{ref:t=>{this.listItemRefs[e.id]=t},data:e,key:t,selected:s,initiateMonitorDelete:this.props.initiateMonitorDelete,handleMonitorRename:this.props.handleMonitorRename,showLockIcon:m,canRename:o,canDelete:a,canManageRoles:f,isCollectionMoved:p,isOffline:this.props.isOffline,type:e.type}))}));return i.createElement(m.default,{keyMap:pm.shortcuts.getShortcuts(),handlers:this.getKeyMapHandlers()},i.createElement("div",{className:"monitor-listing"},e))}getKeyMapHandlers(){return{nextItem:pm.shortcuts.handle("nextItem",this.focusNext),prevItem:pm.shortcuts.handle("prevItem",this.focusPrev),delete:pm.shortcuts.handle("delete",this.deleteItem),rename:pm.shortcuts.handle("rename",this.renameItem)}}focusNext(e){e&&e.preventDefault(),this.focusItem(1)}focusPrev(e){e&&e.preventDefault(),this.focusItem(-1)}focusItem(e){const{items:t,activeMonitorId:o}=this.props;if(!o)return;if(u.isEmpty(t))return;const s=t[(u.findIndex(t,(e=>e.id===o))+e)%t.length];this.props.handleMonitorFocus(s.id),this.openMonitorTabDebounced(s)}deleteItem(){const e=this.props.activeMonitorId;if(!b.get(e).canDelete)return;const t=this.props.items,o=u.find(t,(t=>t.id===e));this.props.initiateMonitorDelete(o.id,o.name)}renameItem(){const e=this.props.activeMonitorId;b.get(e).canRename&&u.invoke(this.listItemRefs,[e,"handleEditName"])}})||s;t.default=f},"./monitors/components/common/MonitorListEmpty.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return a}});var s=o("../../node_modules/react/index.js"),i=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoMonitor.js"),r=o("./appsdk/sidebar/SidebarEmptyState/SidebarEmptyState.js"),n=o("./monitors/utils/messages/index.js");class a extends s.Component{constructor(e){super(e)}getTooltipText(e){return this.props.isOffline?n.TOOLTIP_TEXT.isOffline:e?n.PERMISSION_TEXT.WORKSPACE_VIEWER_DISABLED:void 0}render(){const e=this.props.canAddMonitor;return s.createElement(r.default,{illustration:s.createElement(i.default,null),title:n.EMPTY_STATE.noMonitorsSetup,message:n.EMPTY_STATE.monitorCollectionRun,action:{label:n.MONITOR_ACTION.create,handler:this.props.createNewMonitor,tooltip:this.getTooltipText(!e)},hasPermissions:!this.props.isOffline&&e})}}},"./monitors/components/common/MonitorListItem.js":function(e,t,o){o.r(t);var s,i=o("../../node_modules/react/index.js"),r=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),n=o("./js/containers/apps/requester/sidebar/SidebarListItem.js"),a=o("./js/components/base/Dropdowns.js"),l=o("./monitors/components/common/MonitorStatusIndicator.js"),d=o("./js/modules/services/ManageRolesModalService.js"),c=o("./monitors/components/common/DisabledTooltipWrapper.js"),m=o("./monitors/stores/domain/MonitorPermissionStore.js"),p=o("./monitors/components/common/MonitorMetaIcons.js"),h=o("./monitors/services/UrlService.js"),u=o("./js/controllers/ShortcutsList.js"),b=o("./monitors/utils/messages/index.js"),f=o("./monitors/constants.js"),M=(o("./js/services/NavigationService.js"),o("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),S=o("./onboarding/src/common/LaunchDarkly.js"),g=o("../../node_modules/@postman/aether/esmLib/src/components/Menu/MenuItem.js"),E=o("./js/utils/TabOpeningUtil.js"),I=o("./js/constants/TabOpeningConstants.js"),j=o("./appsdk/workbench/WorkbenchService.js"),T=o("./js/stores/StoreManager.js"),y=o("./js/stores/CurrentUserStore.js"),v=o("./node_modules/lodash/lodash.js");const _=M.default.div`
  height: 16px;
  width: 16px;
`;let O=(0,r.observer)(s=class extends i.Component{constructor(e){super(e),this.isUptimeEnabled=S.launchDarkly.getFlag(f.UPTIME_MONITORS_ALLOWED_LD_FLAG,!1),this.handleDropdownActionSelect=this.handleDropdownActionSelect.bind(this),this.handleEditName=this.handleEditName.bind(this),this.containerRef=this.containerRef.bind(this),this.handleRenameSubmit=this.handleRenameSubmit.bind(this),this.getRightMetaComponent=this.getRightMetaComponent.bind(this),this.getMonitorMetaIcons=this.getMonitorMetaIcons.bind(this),this.monitorPermissionStore=new m.default,this.getAetherMenuItems=this.getAetherMenuItems.bind(this)}getClassNames(){let e={"monitor-listing-list-item":!0,"monitor-listing-list-item-focussed":this.props.selected};return v.keys(v.pickBy(e,v.identity)).join(" ")}containerRef(e){this.listItem=e}getMonitorRouteConfig(){const e={routeIdentifier:"build.monitor",routeParams:{monitorPath:h.default.getMonitorPath({monitorName:this.props.data.name,monitorId:this.props.data.id})}};return v.get(this.props,"data.type","")===f.UPTIME_MONITOR_TYPE&&Object.assign(e,{queryParams:{timePeriod:f.DEFAULT_TIME_FRAME}}),e}handleRenameSubmit(e){v.get(this.props,"data.name")!==e&&this.props.handleMonitorRename({monitorId:this.props.data.id,name:e})}handleEditName(){v.invoke(this.listItem,"editText")}showSignInModal(e){return pm.mediator.trigger("showSignInModal",{type:"generic",subtitle:b.SIGN_IN_MESSAGE.subTitle,origin:`monitors_sidebar_${e}_action`})}handleDropdownActionSelect(e){if(!this.monitorPermissionStore.isUserLoggedIn())return this.showSignInModal(e);switch(e){case"delete":return void this.props.initiateMonitorDelete(this.props.data.id,this.props.data.name);case"manage-roles":return void(0,d.manageRolesOnMonitor)(this.props.data.id);case"rename":return void this.handleEditName();case I.ACTION_OPEN_IN_NEW_BROWSER_TAB:const{routeIdentifier:e,routeParams:t}=this.getMonitorRouteConfig();return void(0,E.openInNewBrowserTab)(e,t)}}getActions(){let e=(0,T.resolveStoreInstance)(y.default).isCurrentUserGuest,t=[j.default.isUseBrowserTabsActive()&&{type:I.ACTION_OPEN_IN_NEW_BROWSER_TAB,label:"Open In New Tab",shortcut:"openInNewBrowserTab",isEnabled:!this.props.isOffline},{type:"rename",label:"Rename",shortcut:"rename",isEnabled:this.props.canRename,disabledMsg:e&&b.PERMISSION_TEXT.DEFAULT_DISABLED_MSG,xpathLabel:"rename"},{type:"manage-roles",label:"Manage Roles",isEnabled:this.props.canManageRoles,disabledMsg:e?b.PERMISSION_TEXT.DEFAULT_DISABLED_MSG:b.SIGN_IN_MESSAGE.default,xpathLabel:"manageRoles"},{type:"delete",label:"Delete",shortcut:"delete",isEnabled:this.props.canDelete,disabledMsg:e&&b.PERMISSION_TEXT.DEFAULT_DISABLED_MSG,xpathLabel:"delete"}].filter(Boolean);if(this.props.data.type===f.UPTIME_MONITOR_TYPE){const e=[I.ACTION_OPEN_IN_NEW_BROWSER_TAB,"rename","delete"];return t.filter((t=>e.includes(t.type)))}return t}getMenuItems(){return v.chain(this.getActions()).map((e=>i.createElement(a.MenuItem,{key:e.type,refKey:e.type,disabled:!e.isEnabled||this.props.isOffline},i.createElement(c.default,{showTooltip:(!e.isEnabled||this.props.isOffline)&&!(0,T.resolveStoreInstance)(y.default).isCurrentUserPartner,tooltipText:e.disabledMsg||this.props.isCollectionMoved&&b.PERMISSION_TEXT.COLLECTION_MOVED_MSG,isOffline:this.props.isOffline,monitorId:this.props.data.id,monitorName:this.props.data.name,wrapperPrefix:"monitor-sidebar"},i.createElement("span",{className:"monitor-action-item"},i.createElement("div",{className:"dropdown-menu-item-label"},e.label),e.shortcut&&i.createElement("div",{className:"dropdown-menu-item-shortcut"},(0,u.getShortcutByName)(e.shortcut))))))).value()}getAetherMenuItems(){return v.chain(this.getActions()).map((e=>{const t=!e.isEnabled||this.props.isOffline,o=e.disabledMsg||this.props.isCollectionMoved&&b.PERMISSION_TEXT.COLLECTION_MOVED_MSG;return i.createElement(g.default,{key:e.type,shortcutLabel:e.shortcut&&(0,u.getShortcutByName)(e.shortcut),onClick:()=>this.handleDropdownActionSelect(e.type),type:"delete"===e.type?"destructive":"default",isDisabled:t,tooltip:(()=>t?this.props.isOffline?b.TOOLTIP_TEXT.isOffline:o||b.PERMISSION_TEXT.REQUEST_ACCESS_MSG:null)()},e.label)})).value()}dropdownOptions(){const e=this.getMenuItems();return i.createElement(a.DropdownMenu,{className:"monitors-dropdown-menu","align-right":!0},e)}getRightMetaComponent(e,t){const o=e||t?"":"actions-hidden",s=j.default.isUseBrowserTabsActive()?"use-browser-tabs":"",r=e&&this.props.type===f.UPTIME_MONITOR_TYPE&&!this.isUptimeEnabled?"actions-hidden":"";return i.createElement(l.default,{entityType:"monitor",isPaused:this.props.data.isPaused,status:this.props.data.status,isHealthy:this.props.data.isHealthy,type:this.props.type,className:`${o} ${r} ${s}`})}getMonitorMetaIcons(){return i.createElement(p.default,{isEditable:this.props.showLockIcon})}render(){return i.createElement(n.default,{text:v.get(this.props,"data.name",""),icon:v.get(this.props,"data.type","")===f.UPTIME_MONITOR_TYPE?f.UPTIME_ICON:i.createElement(_,null),ref:this.containerRef,isSelected:this.props.selected,onRename:this.handleRenameSubmit,moreActions:v.get(this.props,"data.type","")!==f.UPTIME_MONITOR_TYPE||this.isUptimeEnabled?this.dropdownOptions():null,onActionsDropdownSelect:this.handleDropdownActionSelect,rightMetaComponent:this.getRightMetaComponent,statusIndicators:this.getMonitorMetaIcons,routeConfig:this.getMonitorRouteConfig(),moreActionsForAetherMenu:v.get(this.props,"data.type","")===f.UPTIME_MONITOR_TYPE&&!this.isUptimeEnabled||!j.default.isUseBrowserTabsActive()?null:this.getAetherMenuItems()})}})||s;t.default=O},"./monitors/components/common/MonitorMetaIcons.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var s=o("../../node_modules/react/index.js"),i=o("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js");class r extends s.Component{constructor(e){super(e)}render(){return s.createElement(s.Fragment,null,!0===this.props.isPublic&&s.createElement(i.default,{name:"icon-state-published-stroke",color:"content-color-tertiary",className:"monitor-meta-icon",size:"small",title:"Shared in a public workspace"}),!this.props.isPublic&&!0===this.props.canTeamView&&s.createElement(i.default,{name:"icon-descriptive-team-stroke",color:"content-color-tertiary",className:"monitor-meta-icon",size:"small",title:"Shared with team"}),!1===this.props.isEditable&&s.createElement(i.default,{name:"icon-state-locked-stroke",color:"content-color-tertiary",className:"monitor-meta-icon",size:"small",title:"Read only"}))}}},"./monitors/components/common/MonitorStatusIndicator.js":function(e,t,o){o.r(t);var s=o("../../node_modules/react/index.js"),i=o("./node_modules/classnames/index.js"),r=o.n(i),n=o("./js/components/base/Tooltips.js");class a extends s.Component{constructor(e){super(e),this.state={tooltipVisible:!1},this.mouseEnter=this.mouseEnter.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.getStatus=this.getStatus.bind(this)}mouseEnter(){this.setState({tooltipVisible:!0})}mouseLeave(){this.setState({tooltipVisible:!1})}getClasses(){return r()({"monitor-list-item-health-status":!0,[this.getStatus()]:!!this.getStatus(),[this.props.className]:this.props.className})}getStatus(){return this.props.isPaused?"paused":this.props.isHealthy?"healthy":!1===this.props.isHealthy?"unhealthy":!!this.props.status&&this.props.status}getUptimeStatus(){return this.props.isPaused?s.createElement(n.TooltipBody,null,"This ",this.props.entityType," is ",s.createElement("strong",null,"paused"),"."):!this.props.isPaused&&"up"==this.props.status||"down"==this.props.status?s.createElement(n.TooltipBody,null,"Service is ",s.createElement("strong",null,this.props.status),"."):!this.props.isPaused&&"unknown"==this.props.status&&s.createElement(n.TooltipBody,null,"Service status is ",s.createElement("strong",null,this.props.status),".")}render(){return this.getStatus()?s.createElement("div",{className:this.getClasses(),ref:"bullet",onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},s.createElement(n.Tooltip,{target:this.refs.bullet,show:this.state.tooltipVisible,delay:"0",className:"monitor-list-item-health-tooltip",placement:this.props.placement||"top"},"uptime"===this.props.type?this.getUptimeStatus():s.createElement(n.TooltipBody,null,"This ",this.props.entityType," is ",s.createElement("strong",null,this.getStatus()),"."))):null}}t.default=a},"./monitors/components/common/TooltipWithButton.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var s=o("../../node_modules/react/index.js"),i=o("./js/components/base/Buttons.js");function r(e){return s.createElement("div",{className:e.className},s.createElement("div",{className:"msg"},e.message),s.createElement(i.Button,{type:"primary",size:"small",onClick:e.onClick},e.buttonText))}},"./monitors/components/sidebar/MonitorSidebarError.js":function(e,t,o){o.r(t);var s=o("../../node_modules/react/index.js"),i=o("./js/components/base/Buttons.js"),r=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/UnableToLoad.js"),n=o("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),a=o("./monitors/utils/messages/index.js");class l extends s.Component{render(){return s.createElement("div",{className:"monitor-sidebar-error-view"},s.createElement("div",{className:"monitor-sidebar-error-view__illustration"},s.createElement(r.default,null)),s.createElement("div",{className:"monitor-sidebar-error-view__title"},s.createElement(n.default,{type:"h4",color:"content-color-secondary",text:a.MONITOR_ACTION_ERROR.load})),s.createElement("div",null,s.createElement(i.Button,{className:"btn-small monitor-sidebar-error-view__button",type:"secondary",onClick:this.props.handleRefresh},a.TRY_AGAIN)))}}t.default=l},"./monitors/components/sidebar/MonitorSidebarMenu.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return l}});var s,i=o("../../node_modules/react/index.js"),r=o("./js/containers/apps/requester/sidebar/SidebarListActions.js"),n=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=o("./monitors/utils/messages/index.js");let l=(0,n.observer)(s=class extends i.Component{constructor(e){super(e),this.handleSearch=this.handleSearch.bind(this)}getTooltipText(e,t){return e?a.PERMISSION_TEXT.WORKSPACE_VIEWER_DISABLED:t?a.TOOLTIP_TEXT.isOffline:a.CREATE_NEW_MONITOR}handleSearch(e){this.props.store.setSearchQuery(e)}render(){return i.createElement("div",null,i.createElement(r.default,{createNewConfig:{tooltip:this.getTooltipText(!this.props.canAddMonitor,this.props.isOffline),disabled:!this.props.canAddMonitor||this.props.isOffline,onCreate:this.props.createNewMonitor,xPathIdentifier:"addMonitor"},onSearch:this.handleSearch,searchQuery:this.props.store.searchQuery}))}})||s},"./monitors/containers/MonitorSidebarContainer.js":function(e,t,o){o.r(t);var s,i=o("../../node_modules/react/index.js"),r=o("../../node_modules/mobx-react/dist/mobx-react.module.js"),n=o("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoMonitor.js"),a=o("./monitors/components/common/MonitorList.js"),l=o("./monitors/components/sidebar/MonitorSidebarMenu.js"),d=o("./collaboration/workspace/model/ActiveWorkspacePermissionStore.ts"),c=o("./js/stores/CurrentUserStore.js"),m=o("./js/stores/StoreManager.js"),p=o("./js/stores/ActiveWorkspaceStore.js"),h=o("./monitors/components/common/MonitorListEmpty.js"),u=o("./appsdk/sidebar/SidebarNoResultsFound/SidebarNoResultsFound.js"),b=o("./appsdk/sidebar/SidebarLoadingState/SidebarLoadingState.js"),f=o("./monitors/components/sidebar/MonitorSidebarError.js"),M=o("./js/components/base/XPaths/XPath.js"),S=o("./appsdk/workbench/TabService.js"),g=o("./monitors/constants.js"),E=o("./monitors/services/UrlService.js"),I=o("./js/components/network/NetworkTrouble.js"),j=o("./monitors/utils/helpers.js");let T=(0,r.observer)(s=class extends i.Component{constructor(e){super(e),this.store=e.controller.store,this.activeWorkspaceStore=(0,m.resolveStoreInstance)(p.default),this.openCreateMonitorTab=this.openCreateMonitorTab.bind(this),this.openMonitorTab=this.openMonitorTab.bind(this),this.initiateMonitorDelete=this.initiateMonitorDelete.bind(this),this.handleMonitorDelete=this.handleMonitorDelete.bind(this),this.handleMonitorRename=this.handleMonitorRename.bind(this),this.handleMonitorFocus=this.handleMonitorFocus.bind(this),this.refreshMonitorList=this.refreshMonitorList.bind(this)}openMonitorTab(e,t){this.props.controller.openMonitorTab(e,t)}showSignInModal(){return pm.mediator.trigger("showSignInModal",{type:"generic",subtitle:"You need an account to continue exploring Postman.",origin:"monitors_sidebar_create_button"})}openCreateMonitorTab(){if(!(0,m.resolveStoreInstance)(c.default).isLoggedIn)return this.showSignInModal();this.props.controller.openCreateMonitorTab()}initiateMonitorDelete(e,t){const o=this.store.masterMonitorStore.getJobTemplateConfiguration(e).createdAt,s=this.store.masterMonitorStore.getJobTemplateType(e),i=(0,j.extractDaysFromGivenDate)(o)<=2;pm.mediator.trigger("showDeleteMonitorModal",{id:e,name:t,type:s,showFeedbackBlock:"collection-based"===s&&i},(()=>{this.handleMonitorDelete(e,t)}),{origin:"sidebar"})}handleMonitorDelete(e,t){pm.toasts.success("Monitor deleted.");const o=E.default.getMonitorPath({monitorId:e,monitorName:t});S.default.closeByRoute(g.MONITOR_WORKBENCH_URL,{monitorPath:o}),S.default.closeByRoute(g.MONITOR_EDIT_URL,{monitorPath:o})}handleMonitorRename({monitorId:e,name:t}){this.props.controller.updateMonitorName({monitorId:e,name:t})}handleMonitorFocus(e){this.store.setActiveMonitorId(e)}refreshMonitorList(){this.store.refreshSidebarList()}getRenderedComponent(){const e=(0,m.resolveStoreInstance)(d.default).permissions,t=!(0,m.resolveStoreInstance)(c.default).isLoggedIn||e&&e.ADD_MONITOR_TO_WORKSPACE;let o;return!this.store.isOffline||this.store.values.length||this.store.loaded?(o=this.store.error?i.createElement(f.default,{handleRefresh:this.refreshMonitorList}):this.store.loaded&&!this.store.loading||this.store.values.length?this.store.values.length||this.store.searchQuery?this.store.filteredItems.length?i.createElement(M.default,{identifier:"monitor"},i.createElement(a.default,{items:this.store.filteredItems,activeMonitorId:this.store.activeMonitorId,canAddMonitor:t,createNewMonitor:this.openCreateMonitorTab,openMonitorTab:this.openMonitorTab,initiateMonitorDelete:this.initiateMonitorDelete,handleMonitorRename:this.handleMonitorRename,handleMonitorFocus:this.handleMonitorFocus,isOffline:this.store.isOffline})):i.createElement(u.default,{searchQuery:this.store.searchQuery,illustration:i.createElement(n.default,null)}):i.createElement(h.default,{canAddMonitor:t,createNewMonitor:this.openCreateMonitorTab,isOffline:this.store.isOffline}):i.createElement(b.default,null),i.createElement("div",null,i.createElement(l.default,{canAddMonitor:t,createNewMonitor:this.openCreateMonitorTab,store:this.store,isOffline:this.store.isOffline}),o)):i.createElement(I.default,{origin:"sidebar",entity:"monitor"})}render(){return i.createElement("div",{className:"monitor-sidebar-tab-content"},this.getRenderedComponent())}})||s;t.default=T},"./monitors/controllers/MonitorSidebarController.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var s=o("./monitors/stores/domain/MonitorSidebarStore.js"),i=o("./js/stores/ActiveWorkspaceSessionStore.js"),r=o("./js/stores/EditorStore.js"),n=o("./js/stores/StoreManager.js"),a=o("./js/stores/ActiveWorkspaceStore.js"),l=o("./monitors/services/UrlService.js"),d=o("../../node_modules/mobx/lib/mobx.module.js"),c=o("./js/utils/uid-helper.js"),m=o("./monitors/stores/domain/MonitorContainerStore.js"),p=o("./monitors/constants.js"),h=o("./node_modules/lodash/lodash.js");class u{didCreate(){this.store=new s.default,this.currentWorkspaceId=(0,n.resolveStoreInstance)(a.default).id,this.monitorContainerStore=new m.default,this.store.refreshSidebarList(!1),this.activeTabDisposer=(0,d.reaction)((()=>{const e=(0,n.resolveStoreInstance)(r.default).find((0,n.resolveStoreInstance)(i.default).activeEditor),t=(0,c.decomposeUID)(h.last(h.split(h.get(e,"resource",void 0),"/"))).modelId.split("~");return t.length>=1?t.pop():void 0}),(e=>{this.store.setActiveMonitorId(e)}),{fireImmediately:!0})}openMonitorTab(e,t){l.default.gotoMonitorUrl({monitorId:e,monitorName:t})}openCreateMonitorTab(){l.default.openCreateMonitorUrl()}async updateMonitorName({monitorId:e,name:t}){let o=null;o=this.store.masterMonitorStore.getJobTemplateType(e)===p.UPTIME_MONITOR_TYPE?[{op:"replace",path:"/name",value:t}]:{name:t},await this.store.masterMonitorStore.updateMonitorConfiguration({monitorId:e,body:o})}beforeDestroy(){this.activeTabDisposer(),this.store.masterMonitorStore.realtimeManager.unsubscribe({model:"workspace",modelId:this.currentWorkspaceId}),this.store=null}}},"./monitors/stores/domain/MonitorContainerStore.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var s,i,r,n,a=o("../../node_modules/mobx/lib/mobx.module.js"),l=o("./monitors/stores/domain/MasterMonitorStore.js"),d=o("./js/stores/StoreManager.js"),c=o("./js/stores/SyncStatusStore.js"),m=o("./node_modules/lodash/lodash.js");function p(e,t,o,s){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(s):void 0})}function h(e,t,o,s,i){var r={};return Object.keys(s).forEach((function(e){r[e]=s[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=o.slice().reverse().reduce((function(o,s){return s(e,t,o)||o}),r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}let u=(i=h((s=class{constructor(){p(this,"loading",i,this),p(this,"loaded",r,this),p(this,"error",n,this),this.masterMonitorStore=new l.default,this.hydrate()}get collectionIds(){return m.get(this.masterMonitorStore.containerCollectionsStore,"ids")}get environmentIds(){return m.get(this.masterMonitorStore.containerEnvironmentsStore,"ids")}isCollectionInWorkspace(e){return(m.get(this.masterMonitorStore.containerCollectionsStore,"ids")||[]).includes(e)}async getAllCollectionsAndEnvironments(){this.update({loading:!0,loaded:!1});try{await Promise.allSettled([this.masterMonitorStore.initCollectionList(),this.masterMonitorStore.initEnvironmentList()]),this.update({loading:!1,loaded:!0})}catch(e){this.update({loading:!1,loaded:!1,error:e})}}hydrate(){return(0,d.resolveStoreInstance)(c.default).onSyncAvailable().then((()=>this.getAllCollectionsAndEnvironments()))}update(e){m.has(e,"loading")&&(this.loading=e.loading),m.has(e,"loaded")&&(this.loaded=e.loaded),m.has(e,"error")&&(this.error=e.error)}}).prototype,"loading",[a.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),r=h(s.prototype,"loaded",[a.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),n=h(s.prototype,"error",[a.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h(s.prototype,"update",[a.action],Object.getOwnPropertyDescriptor(s.prototype,"update"),s.prototype),s)},"./monitors/stores/domain/MonitorPermissionStore.js":function(e,t,o){o.r(t),o.d(t,{default:function(){return a}});var s=o("./js/stores/StoreManager.js"),i=o("./js/stores/CurrentUserStore.js"),r=o("./monitors/stores/domain/MasterMonitorStore.js"),n=(o("./monitors/constants.js"),o("./node_modules/lodash/lodash.js"));class a{constructor(){return a.instance||(this.masterMonitorStore=new r.default,a.instance=this),a.instance}isUserLoggedIn(){return(0,s.resolveStoreInstance)(i.default).isLoggedIn}can(e,t){const o=this.masterMonitorStore.getJobTemplateMetadata(t);return!(!o||!o.permissions)&&n.get(o.permissions,e,!1)}}},"./monitors/stores/domain/MonitorSidebarStore.js":function(e,t,o){o.r(t);var s,i,r,n,a,l,d=o("../../node_modules/mobx/lib/mobx.module.js"),c=o("./js/stores/StoreManager.js"),m=o("./js/stores/ActiveWorkspaceStore.js"),p=o("./monitors/stores/domain/MasterMonitorStore.js"),h=o("./node_modules/lodash/lodash.js");function u(e,t,o,s){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(s):void 0})}function b(e,t,o,s,i){var r={};return Object.keys(s).forEach((function(e){r[e]=s[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=o.slice().reverse().reduce((function(o,s){return s(e,t,o)||o}),r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}let f=(b((s=class{constructor(){u(this,"loading",i,this),u(this,"loaded",r,this),u(this,"error",n,this),u(this,"activeMonitorId",a,this),u(this,"searchQuery",l,this),this.masterMonitorStore=new p.default}get isOffline(){return this.masterMonitorStore.isOffline}get values(){return this.masterMonitorStore.activeWorkspaceMonitorsMetadata.map((e=>({isHealthy:e._healthy,status:e.status,type:e.type,isPaused:!e.active,id:e.id,name:e.name,collection:e.collection})))}async refreshSidebarList(e=!0){if((0,c.resolveStoreInstance)(m.default).id){e&&this.setLoading(!0),this.setError(!1);try{await this.masterMonitorStore.loadActiveWorkspaceJobTemplates(),this.masterMonitorStore.setSidebarOpenState(!0),this.setLoading(!1),this.setLoaded(!0)}catch(e){this.setError(!0),this.setLoading(!1)}}}setSearchQuery(e){this.searchQuery=e}setError(e){this.error=e}setLoading(e){this.loading=e}setLoaded(e){this.loaded=e}setActiveMonitorId(e){this.activeMonitorId=e}get filteredItems(){const e=this.searchQuery.trim();if(!e)return this.values;let t=e.toLowerCase();return h.filter(this.values,(e=>h.includes(e.name&&h.toLower(e.name),t)))}}).prototype,"isOffline",[d.computed],Object.getOwnPropertyDescriptor(s.prototype,"isOffline"),s.prototype),b(s.prototype,"values",[d.computed],Object.getOwnPropertyDescriptor(s.prototype,"values"),s.prototype),i=b(s.prototype,"loading",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),r=b(s.prototype,"loaded",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),n=b(s.prototype,"error",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),a=b(s.prototype,"activeMonitorId",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),l=b(s.prototype,"searchQuery",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b(s.prototype,"setSearchQuery",[d.action],Object.getOwnPropertyDescriptor(s.prototype,"setSearchQuery"),s.prototype),b(s.prototype,"setError",[d.action],Object.getOwnPropertyDescriptor(s.prototype,"setError"),s.prototype),b(s.prototype,"setLoading",[d.action],Object.getOwnPropertyDescriptor(s.prototype,"setLoading"),s.prototype),b(s.prototype,"setLoaded",[d.action],Object.getOwnPropertyDescriptor(s.prototype,"setLoaded"),s.prototype),b(s.prototype,"setActiveMonitorId",[d.action],Object.getOwnPropertyDescriptor(s.prototype,"setActiveMonitorId"),s.prototype),b(s.prototype,"filteredItems",[d.computed],Object.getOwnPropertyDescriptor(s.prototype,"filteredItems"),s.prototype),s);t.default=f}}]);