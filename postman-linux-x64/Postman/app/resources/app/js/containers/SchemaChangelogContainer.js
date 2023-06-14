"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[105],{"../../packages/api-design/schema-changelog/src/components/EmptyChangelog.js":function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var n=s("../../node_modules/react/index.js"),a=s("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoReport.js"),o=s("./js/external-navigation/ExternalNavigationService.js"),r=s("./js/components/base/Buttons.js"),i=s("./js/constants/AppUrlConstants.js");class c extends n.Component{constructor(e){super(e),this.openLink=this.openLink.bind(this)}openLink(e){e&&(0,o.openExternalLink)(e)}render(){return n.createElement("div",{className:"entity-empty__wrapper"},n.createElement("div",{className:"entity-empty changelog_empty"},n.createElement(a.default,null),n.createElement("div",{className:"entity-empty__title"},"No changes yet"),n.createElement("div",{className:"entity-empty__subtitle"},"Any changes made to your schema show up in the changelog. Edit your schema by going to the Define tab of your API."),n.createElement(r.Button,{type:"text",onClick:this.openLink.bind(this,i.SCHEMA_CHANGELOG),className:"learn-more-link create-new-monitor__body__input__helptext__link"},"Learn more about schema changelog")))}}},"../../packages/api-design/schema-changelog/src/components/NoSchemaFound.js":function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var n=s("../../node_modules/react/index.js"),a=s("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/NoReport.js"),o=s("./js/external-navigation/ExternalNavigationService.js"),r=s("./js/components/base/Buttons.js"),i=s("./js/constants/AppUrlConstants.js");class c extends n.Component{constructor(e){super(e),this.openLink=this.openLink.bind(this)}openLink(e){e&&(0,o.openExternalLink)(e)}render(){return n.createElement("div",{className:"entity-empty__wrapper"},n.createElement("div",{className:"entity-empty no_schema_found"},n.createElement(a.default,null),n.createElement("div",{className:"entity-empty__title"},"No schema found"),n.createElement("div",{className:"entity-empty__subtitle"},"Add API schema by going to the Define tab of your API. You can create a schema from scratch, import one locally or from code repository."),n.createElement(r.Button,{type:"text",onClick:this.openLink.bind(this,i.DEFINE_SCHEMA),className:"learn-more-link"},"Learn more about defining APIs")))}}},"../../packages/api-design/schema-changelog/src/components/SchemaChangelog.js":function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var n,a=s("../../node_modules/react/index.js"),o=s("../../node_modules/mobx-react/dist/mobx-react.module.js"),r=s("../../node_modules/@postman/date-helper/index.js"),i=s.n(r),c=s("./js/components/base/Avatar.js"),l=s("./js/stores/GateKeeperStore.js"),h=s("./js/stores/StoreManager.js"),d=s("./js/stores/SyncStatusStore.js"),g=s("../../packages/api-design/schema-changelog/src/components/OfflineChangelog.js"),m=s("../../packages/api-design/schema-changelog/src/components/ErrorChangelog.js"),p=s("../../packages/api-design/schema-changelog/src/components/EmptyChangelog.js"),u=s("../../packages/api-design/schema-changelog/src/components/NoSchemaFound.js"),f=s("./js/components/base/LoadingIndicator.js"),_=s("./js/components/activity-feed/ActivityItemComponents.js"),E=s("../../packages/api-design/schema-changelog/src/components/DiffStrap.js"),S=s("../../packages/api-design/schema-changelog/src/components/DiffText.js"),y=s("./js/components/base/Buttons.js"),v=s("../../packages/api-design/schema-changelog/src/constants/SchemaErrors.js"),j=s("./js/components/base/Icons/IntegrationIcon.js"),C=s("../../node_modules/lodash/lodash.js");let R=(0,o.observer)(n=class extends a.Component{constructor(e){super(e),this.handleScroll=this.handleScroll.bind(this),this.handleScrollDebounced=C.debounce(this.handleScroll,100),this.scrollMoreLoaderIntoView=this.scrollMoreLoaderIntoView.bind(this),this.getRestoreTooltip=this.getRestoreTooltip.bind(this)}getDiffs(e){let t=e.diff.line.split("\n"),s=[],n=[];return t.forEach(((e,s)=>{e.includes("No newline at end of file")&&t.splice(s,1)})),t.forEach(((e,t)=>{"@"===e.charAt(0)&&n.push(t)})),n.forEach(((e,a)=>{a===n.length?s.push(t.slice(e,t.length)):s.push(t.slice(e,n[a+1]))})),s}getActorName(e){return"integration"===C.get(e,"createdBy.type")?a.createElement("div",{className:"changelog__header__action-description__actor-name"},"Integration"):C.get(e,"createdBy.isAccessible")?a.createElement(_.User,{id:C.get(e,"createdBy.id"),name:C.get(e,"createdBy.name")||C.get(e,"createdBy.username")}):a.createElement("div",{className:"changelog__header__action-description__actor-name"},C.get(e,"createdBy.name"))}getActorIcon(e){return"integration"===C.get(e,"createdBy.type")?a.createElement("div",{className:"changelog__actor-icon"},a.createElement(j.default,{className:"changelog__actor-icon__content"})):C.get(e,"createdBy.isAccessible")?a.createElement(_.ProfilePic,{id:C.get(e,"createdBy.id")}):a.createElement("div",{className:"changelog__actor-icon"},a.createElement(c.default,{size:"medium",userId:C.get(e,"createdBy.id"),customPic:C.get(e,"createdBy.profilePicUrl")}))}getActionText(e){return"create"===e?" created a new schema.":"update"===e?" made the following changes:":"restore"===e?" restored an older revision of the schema.":void 0}handleScroll(){const e=this.refs.contentRef;!this.props.changelogsExhausted&&!this.props.fetchingMoreLogs&&(0,h.resolveStoreInstance)(d.default).isSocketConnected&&e&&e.scrollHeight-(e.scrollTop+e.offsetHeight)<=5&&this.props.onFetchMoreChangelog()}scrollMoreLoaderIntoView(){const e=this.refs.moreLoader;e&&e.scrollIntoView()}getRestoreTooltip(){return(0,h.resolveStoreInstance)(d.default).isSocketConnected?this.props.updateSchemaPermission?"":v.PERMISSION_ERROR:v.OFFLINE_ERROR}render(){const e=!(0,h.resolveStoreInstance)(l.default).isSyncEnabled||this.props.error;return this.props.loading||this.props.schemaLoading?a.createElement("div",{className:"changelog_loader"},a.createElement(f.default,null)):this.props.isOffline?a.createElement(g.default,null):e?a.createElement(m.default,{onRetry:this.props.onRetry}):this.props.noSchema?a.createElement(u.default,null):0===C.get(this.props,"revisions.length",0)&&this.props.changelogsExhausted?a.createElement(p.default,null):a.createElement("div",{className:"changelog__wrapper",ref:"contentRef",onScroll:this.handleScrollDebounced},(this.props.revisions||[]).map(((e,t)=>{let s=this.getDiffs(e),n=i().getFormattedDateAndTime(e.createdAt);return a.createElement("div",{key:t,className:"changelog"},a.createElement(_.Header,null,this.getActorIcon(e),a.createElement("div",{className:"changelog__header"},a.createElement("div",{className:"changelog__header__date"},n),a.createElement("div",{className:"changelog__header__action-description"},this.getActorName(e),a.createElement("span",null,this.getActionText(e.action))))),C.map(s,((e,t)=>{let s;return s=e.length>11?e.slice(0,11):e,a.createElement("div",{className:"changelog-content-container",key:t},a.createElement("div",{className:"changelog-content-container__content",onClick:()=>{this.props.onExpand(e,this.props.apiName)}},a.createElement(E.default,{diff:s}),a.createElement(S.default,{diff:s}),a.createElement("div",{className:"changelog-content-container__content__shadow"})))})),C.has(e,"allowedActions.restore")&&e.allowedActions.restore&&a.createElement("div",{className:"changelog-restore"},this.props.isRestoring&&this.props.restoreEntity===e.id?a.createElement("div",{className:"changelog-restore__loading"},a.createElement(f.default,null)):a.createElement(y.Button,{className:"changelog-restore__button",type:"text",onClick:()=>{this.props.onRestoreSchema(e.id)},disabled:!this.props.updateSchemaPermission||!(0,h.resolveStoreInstance)(d.default).isSocketConnected,tooltip:this.getRestoreTooltip(),tooltipImmediate:!0},"Restore")))})),!this.props.changelogsExhausted&&this.props.fetchingMoreLogs&&a.createElement("div",{ref:"moreLoader",className:"changelog__more-loader"},a.createElement(f.default,null)))}})||n},"../../packages/api-design/schema-changelog/src/containers/SchemaChangelogContainer.js":function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var n,a=s("../../node_modules/react/index.js"),o=s("../../node_modules/mobx-react/dist/mobx-react.module.js"),r=s("../../node_modules/lodash/lodash.js"),i=s.n(r),c=s("./js/stores/ActiveWorkspaceStore.js"),l=s("./js/stores/CurrentUserStore.js"),h=s("./js/stores/StoreManager.js"),d=s("./js/stores/SyncStatusStore.js"),g=s("../../node_modules/mobx/lib/mobx.module.js"),m=s("../../node_modules/classnames/index.js"),p=s.n(m),u=s("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),f=s("../../packages/api-design/schema-changelog/src/services/ChangelogService.js"),_=s("../../packages/api-design/schema-changelog/src/constants/SchemaErrors.js"),E=s("../../packages/api-design/schema-changelog/src/components/SchemaChangelog.js"),S=s("./api-dev/services/APIPermissionService.js"),y=s("./js/modules/services/AnalyticsService.js"),v=s("./js/components/base/Buttons.js"),j=s("./appsdk/contextbar/ContextBarViewHeader.js");let C=(0,o.observer)(n=class extends a.Component{constructor(e){super(e),this.state={revisions:[],loading:!0,error:!1,isRestoring:!1,restoreEntity:null,changelogsCursor:null,fetchingMoreLogs:!1,noSchema:!1,isOffline:!1},this.handleRestoreSchema=this.handleRestoreSchema.bind(this),this.handleRefresh=this.handleRefresh.bind(this),this.handleRetry=this.handleRetry.bind(this),this.handleFetchChangelog=this.handleFetchChangelog.bind(this),this.handleFetchMoreChangelog=this.handleFetchMoreChangelog.bind(this),this.getRefreshIconText=this.getRefreshIconText.bind(this)}componentDidMount(){this.disposeChangelogReaction=(0,g.reaction)((()=>i().get(this.props,"contextData.id")&&i().get(this.props,"contextData.versionId")&&!i().get(this.props,"contextData.schemaLoading")&&i().get(this.props,"contextData.schemaId")&&(0,h.resolveStoreInstance)(d.default).isSocketConnected),(e=>{(0,h.resolveStoreInstance)(d.default).isSocketConnected||!this.state.loading&&!this.state.error?(i().get(this.props,"contextData.schemaId")||this.setState({loading:!1,noSchema:!0,isOffline:!1}),e&&(this.setState({loading:!0,noSchema:!1,error:!1,isOffline:!1}),this.handleFetchChangelog(),y.default.addEventV2({category:"schema",action:"view_changelog",entityId:i().get(this.props,"contextData.schemaId")}))):this.setState({loading:!1,isOffline:!0})}),{fireImmediately:!0})}componentWillUnmount(){i().isFunction(this.disposeChangelogReaction)&&this.disposeChangelogReaction(),i().isFunction(this.disposeSocketReaction)&&this.disposeSocketReaction()}handleFetchChangelog(){const e=i().get(this.props,"contextData",{}).schemaId;e?(0,f.fetchChangelog)(e).then((e=>{this.setState({revisions:i().get(e,"data"),loading:!1,changelogsCursor:i().get(e,"meta.cursor.next")})})).catch((e=>{this.setState({loading:!1,error:!0}),pm.toasts.error(i().get(e,"message")||_.ERROR_FETCHING_CHANGELOG)})):pm.toasts.error(_.ERROR_FETCHING_CHANGELOG)}handleFetchMoreChangelog(){const e=this.state.changelogsCursor,t=i().get(this.props,"contextData",{}).schemaId;this.setState({fetchingMoreLogs:!0},(()=>{i().invoke(this.refs,"changelog.scrollMoreLoaderIntoView")})),(0,f.fetchChangelog)(t,e).then((e=>{this.setState({revisions:[...this.state.revisions,...i().get(e,"data")],fetchingMoreLogs:!1,changelogsCursor:i().get(e,"meta.cursor.next")})})).catch((e=>{this.setState({fetchingMoreLogs:!1,error:!0}),pm.toasts.error(i().get(e,"message")||_.ERROR_FETCHING_CHANGELOG)}))}handleRefresh(){this.setState({loading:!0,error:!1}),this.handleFetchChangelog()}handleRestoreSchema(e=null){if(!(0,h.resolveStoreInstance)(l.default).isLoggedIn)return pm.mediator.trigger("showSignInModal",{type:"schema",subtitle:_.NOT_SIGNED_IN_ERROR,origin:"schema_changelog_restore"});if(!(0,h.resolveStoreInstance)(c.default).isMember)return pm.mediator.trigger("openUnjoinedWorkspaceModal");if(y.default.addEventV2({category:"schema",action:"initiate_restore",entityId:i().get(this.props,"contextData.schemaId")}),this.setState({isRestoring:!0,restoreEntity:e}),e){const t=i().get(this.props,"contextData",{}).schemaId;(0,f.restoreSchema)(t,e).then((()=>{y.default.addEventV2({category:"schema",action:"successful_restore",entityId:t}),this.setState({isRestoring:!1},(()=>{this.handleRefresh()})),pm.toasts.success("Schema restored.")})).catch((e=>{this.setState({isRestoring:!1,restoreEntity:null}),y.default.addEventV2({category:"schema",action:"fail_restore",entityId:t}),pm.toasts.error(i().get(e,"message")||_.SCHEMA_RESTORE_FAILED)}))}}handleExpand(e,t){const s={diff:e,apiName:t};y.default.addEventV2({category:"schema",action:"expand_changelog",entityId:i().get(this.props,"contextData.schemaId")}),pm.mediator.trigger("showSchemaChangelogModal",s)}handleRetry(){this.setState({loading:!0,error:!1}),this.handleFetchChangelog()}getRefreshTextClass(){return p()({"schema-changelog-container__refresh-button":!0,"schema-changelog-container__refresh-button__loading":this.state.loading})}getRefreshIconText(){return(0,h.resolveStoreInstance)(d.default).isSocketConnected?this.state.loading||this.state.fetchingMoreLogs||i().get(this.props,"contextData.schemaLoading")?"Please wait...":this.state.noSchema?"No schema found":"Fetch newer changelogs":_.OFFLINE_ERROR}render(){const e=i().get(this.props,"contextData.id"),t=i().get(this.props,"contextData.permissions"),s=S.default.hasPermission(t,"updateSchema","api",e);return a.createElement(a.Fragment,null,a.createElement(j.ContextBarViewHeader,{title:this.props.title,onClose:this.props.onClose},a.createElement(v.Button,{className:this.getRefreshTextClass(),tooltip:this.getRefreshIconText(),tooltipImmediate:!0,type:"tertiary",onClick:this.handleRefresh,disabled:this.state.loading||this.state.fetchingMoreLogs||this.state.noSchema||!(0,h.resolveStoreInstance)(d.default).isSocketConnected},a.createElement(u.default,{name:"icon-action-refresh-stroke"}))),a.createElement("div",{className:"schema-changelog-container__content"},a.createElement(E.default,{ref:"changelog",apiName:i().get(this.props,"contextData.name"),changelogsExhausted:!this.state.changelogsCursor,error:this.state.error,fetchingMoreLogs:this.state.fetchingMoreLogs,isRestoring:this.state.isRestoring,isOffline:this.state.isOffline,loading:this.state.loading,noSchema:this.state.noSchema,restoreEntity:this.state.restoreEntity,revisions:this.state.revisions,schemaLoading:i().get(this.props,"contextData.schemaLoading"),updateSchemaPermission:s,onExpand:this.handleExpand,onRetry:this.handleRetry,onRestoreSchema:this.handleRestoreSchema,onFetchMoreChangelog:this.handleFetchMoreChangelog})))}})||n}}]);