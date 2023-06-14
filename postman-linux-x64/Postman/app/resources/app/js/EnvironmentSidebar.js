"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[29],{"./js/containers/apps/requester/sidebar/SidebarFilter.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var s,o=n("../../node_modules/react/index.js"),r=n("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=n("./js/components/base/XPaths/XPath.js"),i=n("./js/components/base/Inputs.js"),d=n("./node_modules/lodash/lodash.js");let l=(0,r.observer)(s=class extends o.Component{constructor(e){super(e),this.handleSearchChange=this.handleSearchChange.bind(this),this.handleSearchCancel=this.handleSearchCancel.bind(this),this.focusSearchBox=this.focusSearchBox.bind(this)}UNSAFE_componentWillMount(){pm.mediator.on("focusSearchBox",this.focusSearchBox)}componentWillUnmount(){pm.mediator.off("focusSearchBox",this.focusSearchBox)}focusSearchBox(){d.invoke(this,"refs.filter.focus")}handleSearchChange(e){this.props.onSearch&&this.props.onSearch(e)}handleSearchCancel(){this.props.onSearch&&this.props.onSearch("")}render(){return o.createElement(a.default,{identifier:"filter"},o.createElement(i.Input,{icon:"icon-action-filter-stroke",ref:"filter",inputStyle:"search",onChange:this.handleSearchChange,onCancel:this.handleSearchCancel,query:this.props.searchQuery,className:this.props.className}))}})||s},"./js/containers/apps/requester/sidebar/SidebarListActions.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var s,o=n("../../node_modules/react/index.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),a=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-add-stroke.js"),i=n("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),d=n("../../node_modules/mobx-react/dist/mobx-react.module.js"),l=n("./js/containers/apps/requester/sidebar/SidebarFilter.js"),c=n("./js/components/base/Buttons.js"),m=n("./js/components/base/Dropdowns.js"),h=n("./js/components/base/XPaths/XPath.js"),u=n("./collaboration/utils/workspace.js");let p=(0,d.observer)(s=class extends o.Component{constructor(e){super(e),this.handleDropdownSelect=this.handleDropdownSelect.bind(this)}handleDropdownSelect(e){this.props.onActionsDropdownSelect&&this.props.onActionsDropdownSelect(e)}getCreateNewButton(e){if(!e)return null;const t=o.createElement(r.default,{className:"create-new__btn",onClick:e.onCreate,tooltip:e.tooltip,isDisabled:e.disabled,icon:o.createElement(a.default,null),type:"tertiary",size:"small"});return e.xPathIdentifier?o.createElement(h.default,{identifier:e.xPathIdentifier},t):t}render(){return o.createElement("div",{className:"requester-left-sidebar__actions-container"},this.getCreateNewButton(this.props.createNewConfig),o.createElement(l.default,{onSearch:this.props.onSearch,className:this.props.className,searchQuery:this.props.searchQuery}),!this.props.rightMetaContainer&&!this.props.moreActions||(0,u.shouldShowForGuestUser)()?"":o.createElement("div",{className:"secondary-actions-container"},this.props.rightMetaContainer,this.props.moreActions?o.createElement(m.Dropdown,{ref:"menu",onSelect:this.handleDropdownSelect,className:"actions-dropdown"},o.createElement(m.DropdownButton,{dropdownStyle:"nocaret",type:"custom"},o.createElement(c.Button,{tooltip:"View more actions"},o.createElement(i.default,{name:"icon-action-options-stroke",className:"dropdown-action-button pm-icon pm-icon-normal"}))),this.props.moreActions):null))}})||s},"./runtime-repl/environment/sidebar/EnvironmentSidebarContainer/EnvironmentSidebarContainer.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var s,o=n("../../node_modules/react/index.js"),r=n("./node_modules/prop-types/index.js"),a=n.n(r),i=n("../../node_modules/mobx-react/dist/mobx-react.module.js"),d=n("./js/components/base/XPaths/XPath.js"),l=n("./runtime-repl/environment/sidebar/EnvironmentSidebarMenu/EnvironmentSidebarMenu.js"),c=n("./runtime-repl/environment/sidebar/EnvironmentSidebarListContainer/EnvironmentSidebarListContainer.js"),m=n("./runtime-repl/environment/sidebar/EnvironmentSidebarModel.js");let h=(0,i.observer)(s=class extends o.Component{render(){return o.createElement("div",{className:"env-sidebar-container"},o.createElement(l.default,{model:this.props.model}),o.createElement(d.default,{identifier:"environment"},o.createElement(c.default,{model:this.props.model})))}})||s;h.propTypes={model:a().instanceOf(m.default).isRequired}},"./runtime-repl/environment/sidebar/EnvironmentSidebarController.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var s=n("../../node_modules/mobx/lib/mobx.module.js"),o=n("./js/stores/StoreManager.js"),r=n("./collaboration/workspace/model/ActiveWorkspaceBaseStore.ts"),a=n("./runtime-repl/environment/sidebar/EnvironmentSidebarModel.js"),i=n("./runtime-repl/environment/_api/EnvironmentStoreV2.js"),d=n("./node_modules/lodash/lodash.js");class l{constructor(){this.model=null,this.adapter=null}async didCreate(){this.model=new a.default,this.model.setLoading&&this.model.setLoading(!0),await(0,s.when)((()=>(0,o.resolveStoreInstance)(r.default).id));const e=(0,o.resolveStoreInstance)(r.default).id;try{await this._loadFromStore(e),this.model.setLoading&&this.model.setLoading(!1)}catch(e){pm.logger.error("EnvironmentSidebarController~didCreate: Failed to fetch environment list:",e)}}async _loadFromStore(e){const t=await(0,i.subscribeMeta)(e,{permissions:this.constructor.environmentPermissions});this.model.hydrateFromStore(t)}beforeDestroy(){d.invoke(this.model,"environmentStore.unsubscribe"),this.model.dispose(),this.model=null,this.adapter&&this.adapter.dispose(),this.adapter=null}}l.environmentPermissions=["edit","delete","share"]},"./runtime-repl/environment/sidebar/EnvironmentSidebarMenu/EnvironmentSidebarMenu.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var s,o=n("../../node_modules/react/index.js"),r=n("../../node_modules/mobx-react/dist/mobx-react.module.js"),a=n("./collaboration/workspace/model/ActiveWorkspacePermissionStore.ts"),i=n("./js/stores/StoreManager.js"),d=n("./js/stores/OnlineStatusStore.js"),l=n("./js/containers/apps/requester/sidebar/SidebarListActions.js"),c=n("./collaboration/workspace/types/PermissionTypes.ts"),m=n("./runtime-repl/environment/_api/EnvironmentInterface.js"),h=n("./runtime-repl/_common/DisabledTooltipConstants.js"),u=n("./node_modules/lodash/lodash.js");let p=(0,r.observer)(s=class extends o.Component{constructor(e){super(e),this.state={isEnvCreateEnabled:!0},this.handleCreate=this.handleCreate.bind(this),this.handleSearchChange=this.handleSearchChange.bind(this)}handleCreate(){this.setState({isEnvCreateEnabled:!1}),this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{this.setState({isEnvCreateEnabled:!0})}),1e3),(0,m.createEnvironment)({openInTab:!0})}handleSearchChange(e){this.props.model&&this.props.model.setSearchQuery(e)}render(){const{userCanSave:e}=(0,i.resolveStoreInstance)(d.default),t=(0,i.resolveStoreInstance)(a.default),n=t&&t.permissions,s=u.get(n,c.WORKSPACE_PERMISSIONS.ADD_ENVIRONMENT_TO_WORKSPACE,!0),r=e&&s&&this.state.isEnvCreateEnabled;return o.createElement(l.default,{createNewConfig:{tooltip:e?s?"Create new environment":h.DISABLED_TOOLTIP_NO_PERMISSION:h.DISABLED_TOOLTIP_IS_OFFLINE,disabled:!r,onCreate:this.handleCreate,xPathIdentifier:"addEnvironment"},onSearch:this.handleSearchChange,searchQuery:this.props.model.searchQuery})}})||s},"./runtime-repl/environment/sidebar/EnvironmentSidebarView.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var s,o=n("../../node_modules/react/index.js"),r=n("./node_modules/prop-types/index.js"),a=n.n(r),i=n("../../node_modules/mobx-react/dist/mobx-react.module.js"),d=n("./js/stores/StoreManager.js"),l=n("./js/stores/SyncStatusStore.js"),c=n("./runtime-repl/environment/sidebar/EnvironmentSidebarContainer/EnvironmentSidebarContainer.js"),m=n("./runtime-repl/_common/components/molecule.js"),h=n("./runtime-repl/environment/sidebar/EnvironmentSidebarModel.js"),u=n("./node_modules/lodash/lodash.js");let p=(0,i.observer)(s=class extends o.Component{render(){const{controller:e}=this.props,{isConsistentlyOffline:t}=(0,d.resolveStoreInstance)(l.default);return t&&u.get(e,"model.isLoading")?o.createElement(m.SidebarOfflineState,null):o.createElement(c.default,{model:e.model})}})||s;p.propTypes={controller:a().shape({model:a().instanceOf(h.default)}).isRequired}}}]);