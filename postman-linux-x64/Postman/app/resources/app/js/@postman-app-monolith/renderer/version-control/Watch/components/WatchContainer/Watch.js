"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[4],{"./version-control/Watch/components/WatchButton/WatchButton.js":function(e,t,n){n.r(t);var s=n("../../node_modules/react/index.js"),o=n("./node_modules/prop-types/index.js"),i=n.n(o),r=n("../../node_modules/@postman/aether/esmLib/src/components/Tooltip/Tooltip.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Button/CounterButton.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Popover/Popover.js"),h=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-view-fill.js"),d=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-action-view-stroke.js"),m=n("../../node_modules/@postman/aether-icons/esmLib/src/Icon/Icon.js"),u=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),p=n("./version-control/Watch/components/WatchersList.js"),g=n("./version-control/Watch/components/WatchPreferences.js"),f=n("./version-control/common/ControlledComboButton/index.js"),b=n("./version-control/common/OutsideClick/index.js"),y=n("./version-control/utils/number.ts");function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},w.apply(this,arguments)}const W=u.createGlobalStyle`
  .watch-button__watch-preferences-popover {
    background-color: ${({theme:e})=>e["background-color-primary"]};
    width: 320px;
    border: none;
    padding: 0;
  }

  .watch-button__watch-preferences-popover .tooltip-wrapper {
    background-color: ${({theme:e})=>e["background-color-primary"]};
  }

  .watch-button__watch-preferences-popover.bs-tooltip-bottom {
    padding-bottom: 0;
  }

  .watch-button__watchers-popover {
    background-color: ${({theme:e})=>e["background-color-primary"]};
    width: 256px;
    border: none;
    padding: 0;
  }

  .watch-button__watchers-popover .tooltip-wrapper {
    background-color: ${({theme:e})=>e["background-color-primary"]};
    padding-bottom: 0;
  }

  .watch-button-wrapper {
    button {
      color: ${({theme:e})=>e["content-color-secondary"]};
      background-color: unset;
      min-width: unset;

      &:hover {
        color: ${({theme:e})=>e["content-color-primary"]};
        background-color: ${({theme:e})=>e["highlight-background-color-primary"]};
      }
    }

    &:hover {
      .controlled-combo-button__separator {
        border-left-color: transparent;
      }
    }
  }
`,v=u.default.div`
  display: flex;

  .model-watch-button {
    display: inline-flex;
    justify-content: space-between;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: ${({theme:e})=>e["border-width-default"]}
      ${({theme:e})=>e["border-style-solid"]}
      ${({theme:e})=>e["border-color-strong"]};
    font-size: ${({theme:e})=>e["text-size-m"]};
    font-weight: ${({theme:e})=>e["text-weight-regular"]};
    color: ${({theme:e})=>e["content-color-primary"]};
    /**
     * Hacky fix to make button look like aether button.Replace with aether button
     * when it supports icon on the right and left together.
     */
    background-color: ${({theme:e})=>e["button-secondary-background-color"]};
  }

  .model-watch-button.is-active {
    background-color: ${({theme:e})=>e["button-secondary-background-color"]};
  }

  .watch-label {
    margin-left: ${({theme:e})=>e["spacing-s"]};
    font-size: ${({theme:e})=>e["text-size-m"]};
    font-weight: ${({theme:e})=>e["text-weight-regular"]};
  }

  .count-btn {
    min-width: ${({theme:e})=>e["size-m"]};
    padding: ${({theme:e})=>e["spacing-s"]};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: ${({theme:e})=>e["text-size-m"]};
    font-weight: ${({theme:e})=>e["text-weight-regular"]};
    color: ${({theme:e})=>e["content-color-primary"]};
    /**
     * Hacky fix to make button look like aether button.Replace with aether button
     * when it supports icon on the right and left together.
     */
  }

  .count-btn.is-active {
    color: ${({theme:e})=>e["content-color-primary"]};
  }

  .caret {
    margin-left: ${({theme:e})=>e["spacing-s"]};
  }

  && svg > path[fill] {
    fill: ${({theme:e})=>e["content-color-secondary"]};
  }

  .is-disabled.is-disabled:hover {
    opacity: 0.4;
    color: ${({theme:e})=>e["content-color-primary"]};
  }
`;function P(e){const{className:t,style:n,model:o,isWatching:i,isFetchingWatchers:u,isFetchingMoreWatchers:P,isFetchingPreferences:E,disableCount:C,restrictPreferencesChange:x,isWatchToggleDisabled:j,isPreferencesEnabled:S,watchersCount:T,privateWatchersCount:L,watchersList:k,lastWatcherElementRef:_,preferences:B,watchPreferencesPopoverDescription:F,countBtnTooltip:I,watchersListFetchErr:$,watchToggleTooltip:M,currentUserId:O,hideLabel:z,onWatchersListOpen:N,onOpenPreferences:D,onClickWatchStateChangeTrigger:R,onPreferenceChange:U,reloadWatchers:q,resetPageId:H,renderWatchPreferencesTitle:A,toggleWatch:G,isProcessingWatchToggle:Y,isFetchingModelWatchStatus:J}=e,[V,K]=s.useState(!1),[Q,X]=s.useState(!1),[Z,ee]=s.useState(!1),[te,ne]=s.useState("watch-button__watchers-popover"),se=s.useRef();(0,s.useEffect)((()=>{K(Z),Z?(D(),R()):Q&&N()}),[Z,Q]),(0,b.useOutsideClick)(se,(()=>{X(!1),H&&H()}));const oe=s.createElement(s.Fragment,null,i?s.createElement(h.default,{size:"small",color:"content-color-secondary"}):s.createElement(d.default,{color:"content-color-secondary",size:"small"}),!e.hideLabel&&s.createElement("div",{className:"watch-label"},i?"Watching":"Watch"),(V&&!x||i)&&s.createElement(m.default,{name:"icon-direction-down",className:"caret",color:"content-color-secondary"}));return s.createElement(s.Fragment,null,s.createElement(v,{className:t,style:n},S?(()=>{const e={primaryButtonText:oe,primaryButtonIcon:i?"icon-action-view-fill":"icon-action-view-stroke",primaryButtonTextHide:z,onPrimaryButtonClick:Z?null:()=>{ee(!0),ne("watch-button__watch-preferences-popover")},isPrimaryButtonLoading:Y,isPrimaryButtonDisabled:j,primaryButtonTooltip:j&&M,useCustomButton:!0,primaryButtonMinWidth:"88px",buttonIconSize:"small"},t={menuButtonText:T||0,isMenuButtonDisabled:C,menuButtonTooltip:C&&I,onMenuButtonClick:Q?null:()=>{X(!0),ne("watch-button__watchers-popover")}},n={isMenuOpen:Q||Z,renderMenuContent:()=>s.createElement(s.Fragment,null,Q&&s.createElement(p.default,{list:k,isLoading:u,isLoadingMore:P,count:T,error:$,reload:q,currentUserId:O,model:o}),!x&&Z&&s.createElement(g.default,{isLoading:E,preferences:B,onPreferenceChange:U,description:F,renderTitle:A})),onMenuClose:()=>{Q&&X(!1),Z&&ee(!1),H&&H()}};return s.createElement(f.default,w({},e,t,n,{className:"watch-button-wrapper",popoverClassName:te}))})():(()=>{const e={primaryButtonIcon:i?"icon-action-view-fill":"icon-action-view-stroke",primaryButtonTextHide:z,onPrimaryButtonClick:()=>G(!i),isPrimaryButtonLoading:Y||J,isPrimaryButtonDisabled:j,primaryButtonTooltip:j&&s.createElement(r.default,{placement:"bottom",content:M,openDelay:2e3}),primaryButtonMinWidth:"88px",buttonIconSize:"small"};z||(e.primaryButtonText=i?"Unwatch":"Watch"),!j&&z&&(e.primaryButtonTooltip=i?"Unwatch":"Watch");return s.createElement(a.default,{type:"primary",text:e.primaryButtonText,onClick:e=>{e.preventDefault(),e.stopPropagation(),G(!i)},count:(0,y.default)(T)||0,isDisabled:j,isLoading:e.isPrimaryButtonLoading,tooltip:e.primaryButtonTooltip,icon:i?"icon-action-view-fill":"icon-action-view-stroke",secondaryButton:s.createElement(c.default,{isDisabled:C,tooltip:I,ref:se,onClick:e=>{e.preventDefault(),e.stopPropagation(),Q?(X(!1),H&&H()):X(!0)}})},s.createElement(l.default,{isOpen:Q,maxWidth:300,placement:"top",padding:"spacing-m",triggerRef:se},s.createElement(p.default,{list:k,lastWatcherElementRef:_,isLoading:u,isLoadingMore:P,count:T,privateWatchersCount:L,error:$,reload:q,currentUserId:O,model:o})))})()),s.createElement(W,null))}P.propTypes={style:i().object,className:i().string,isWatching:i().bool.isRequired,watchersCount:i().number,privateWatchersCount:i().number,onWatchersListOpen:i().func.isRequired,watchersList:i().arrayOf(i().shape({name:i().string.isRequired,profileUrl:i().string.isRequired,profilePicUrl:i().string.isRequired,userId:i().string.isRequired})),isFetchingWatchers:i().bool,isFetchingMoreWatchers:i().bool,onOpenPreferences:i().func,onClickWatchStateChangeTrigger:i().func.isRequired,isFetchingPreferences:i().bool,preferences:i().object,onPreferencesChange:i().func,restrictPreferencesChange:i().bool,watchersListFetchErr:i().oneOfType([i().bool,i().object]),reloadWatchers:i().func,disableCount:i().bool,countBtnTooltip:i().string,isWatchToggleDisabled:i().bool,watchToggleTooltip:i().string,renderWatchPreferencesTitle:i().func,currentUserId:i().string,isPreferencesEnabled:i().bool,isProcessingWatchToggle:i().bool,isFetchingModelWatchStatus:i().bool,toggleWatch:i().func,watchPreferencesPopoverDescription:i().string},t.default=P},"./version-control/Watch/components/WatchContainer/Watch.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var s,o,i,r,a=n("../../node_modules/react/index.js"),c=n("../../node_modules/mobx-react/dist/mobx-react.module.js"),l=n("../../node_modules/mobx/lib/mobx.module.js"),h=n("./node_modules/prop-types/index.js"),d=n.n(h),m=n("./js/stores/CurrentUserInfoStore.js"),u=n("./js/stores/StoreManager.js"),p=n("./js/services/UIEventService.js"),g=n("./growth/foundation/public/features/Checklist/constants/UIEventConstants.js"),f=n("./version-control/Watch/WatchService.js"),b=n("./version-control/Watch/components/WatchButton/WatchButton.js"),y=n("./version-control/Watch/config.js"),w=n("./js/modules/services/AnalyticsService.js"),W=n("./universe/utils/UniverseExperimentSignupUtil.js"),v=n("./node_modules/lodash/lodash.js");function P(e,t,n,s){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(s):void 0})}function E(e,t,n,s,o){var i={};return Object.keys(s).forEach((function(e){i[e]=s[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,s){return s(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}let C=(0,c.observer)((o=class extends a.Component{constructor(e){super(e),P(this,"watcherPreferences",i,this),this.setComponentOnline=v.debounce((()=>{this.setOffline(!1)}),2e3,{leading:!0,trailing:!1}),this.setComponentOffline=v.debounce((()=>{this.setOffline(!0)}),2e3,{leading:!0,trailing:!1}),this.fetchWatchConfig=()=>{(0,f.getWatchConfig)(this.props.model,this.props.modelId,this.props.subEntityType).then((e=>{this.setState({isPreferencesEnabled:e.enabled})})).catch((e=>{this.setState({isPreferencesEnabled:!1})}))},this.fetchPermissions=async()=>{this.setState({isFetchingPermissions:!0,permissionFetchErr:null});const e=(0,u.resolveStoreInstance)(m.default);try{const[t,n]=await Promise.all([(0,f.checkWatchAccess)(this.props.model,this.props.modelId),(0,f.shouldEnableWatchingForUser)("user",e.id,this.props.model,this.props.modelId)]);this.setState({isPublicModel:t.isPublic,isFetchingPermissions:!1,isWatchingEnabled:n.isWatchingEnabled})}catch(e){this.setState({isFetchingPermissions:!1,permissionFetchErr:e.error,isWatchingEnabled:!1})}},this.toggleWatch=(e=!this.state.isWatchingModel)=>("collection"===this.props.model&&e&&p.default.publish(g.COLLECTION_WATCH_TOGGLE_EVENT),new Promise(((t,n)=>{const s=y.default[this.props.model].signInOptions,{isPublicModel:o}=this.state,i=(0,u.resolveStoreInstance)(m.default);i.isLoggedIn?e&&o&&!i.hasPublicProfile?(this.setState({restrictPreferencesChange:!0}),pm.mediator.trigger("showUpdateUserProfileModalV2",{onComplete:()=>{this.setWatchStatus(!0).then((()=>{this.setState({restrictPreferencesChange:!1}),t()}))},onCancel:()=>{this.setState({restrictPreferencesChange:!1}),n()}})):this.setWatchStatus(e).then((()=>{t()})):(this.setState({restrictPreferencesChange:!0}),this.props.redirectLogin?this.props.redirectLogin():(0,W.isUniverseExperimentModalEnabled)()?(0,W.openUniverseExperimentSignupModal)({action:"watch",entity:this.props.modelName||this.props.model,entityType:this.props.model,entityId:this.props.modelId}):pm.mediator.trigger("showSignInModal",{type:s.type,origin:s.origin,continueUrl:s.getContinueURL()}),n())}))),this.fetchWatchingState=()=>{const{model:e,modelId:t}=this.props;this.setState({isFetchingModelWatchStatus:!0,modelWatchStatusFetchError:null}),(0,f.isWatchingModel)(e,t).then((e=>{this.setState({isWatchingModel:e,isFetchingModelWatchStatus:!1})})).catch((e=>{this.setState({isFetchingModelWatchStatus:!1,modelWatchStatusFetchError:e.error})}))},this.fetchWatchersCount=()=>{const{model:e,modelId:t}=this.props;this.setState({isFetchingWatchersCount:!0,watchersCountFetchingErr:void 0}),(0,f.getModelWatchersCount)(e,t).then((e=>{this.setState({watchersCount:e,isFetchingWatchersCount:!1})})).catch((e=>{this.setState({isFetchingWatchersCount:!1,watchersCountFetchingErr:e.error})}))},this.onOpenWatchersList=()=>{this.fetchWatchersList()},this.fetchWatchersList=()=>{const{model:e,modelId:t}=this.props,{pageId:n}=this.state;0!==this.state.watchersCount?(this.setState({isFetchingWatchers:!0}),(0,f.getModelWatchersPaginated)(e,t,n,20).then((({list:e,privateWatchersCount:t,nextPageId:n})=>{this.setState({watchersList:e,privateWatchersCount:t,isFetchingWatchers:!1,pageId:n})})).catch((e=>{this.setState({isFetchingWatchers:!1,watchersListFetchErr:e})}))):this.setState({watchersList:[],isFetchingWatchers:!1})},this.loadMoreWatchers=()=>{const{model:e,modelId:t}=this.props,{pageId:n}=this.state;n&&(this.setState({isFetchingMoreWatchers:!0}),(0,f.getModelWatchersPaginated)(e,t,n).then((({list:e,nextPageId:t})=>{this.setState({watchersList:v.concat(this.state.watchersList,e),pageId:t,isFetchingMoreWatchers:!1})})).catch((e=>{this.setState({isFetchingMoreWatchers:!1,watchersListFetchErr:e})})))},this.lastWatcherElementRef=e=>{this.state.isFetchingMoreWatchers||(this.observer.current&&this.observer.current.disconnect(),this.observer.current=new IntersectionObserver((e=>{e[0].isIntersecting&&this.state.pageId&&this.loadMoreWatchers()})),e&&this.observer.current.observe(e))},this.resetPageId=()=>{this.setState({pageId:""})},this.fetchPreferences=()=>{const{model:e,modelId:t}=this.props;this.state.isWatchingModel&&(this.setState({isFetchingPreferences:!0}),(0,f.getWatcherPreferences)(e,t,this.props.subEntityType).then((({preferences:e,description:t})=>{this.setWatcherPreference(e),this.preferencesDescription=t,this.setState({isFetchingPreferences:!1})})).catch((e=>{this.setState({isFetchingPreferences:!1,preferenceFetchErr:e})})))},this.onWatchStateChangeTrigger=async()=>{this.setState({restrictPreferencesChange:!1});try{if(this.state.isWatchingModel)return;this.setState({isFetchingPreferences:!0}),await this.toggleWatch(!0),this.fetchPreferences()}catch(e){this.setState({isFetchingPreferences:!1,restrictPreferencesChange:!0})}},this.onPreferenceChange=e=>{e.some((e=>e.enabled))?!this.state.isWatchingModel&&this.toggleWatch(!0):this.state.isWatchingModel&&this.toggleWatch(!1),this.updatePreferences(e)},this.updatePreferences=e=>{const t=e.reduce(((e,t)=>(e[t.key]=t.enabled,e)),{});this.setPreferences(t)},this.setPreferences=e=>{const{model:t,modelId:n}=this.props;(0,f.updateWatcherPreferences)(t,n,e)},P(this,"isOffline",r,this),this.observer=a.createRef(),this.state={isWatchingEnabled:!1,isFetchingModelWatchStatus:!1,isWatchingModel:!1,isProcessingWatchToggle:!1,isFetchingWatchersCount:!1,isFetchingWatchers:!0,isFetchingMoreWatchers:!1,isFetchingPreferences:!0,pageId:"",isPublicModel:!1,isFetchingPermissions:!0,isPreferencesEnabled:!1},this.preferencesDescription=""}componentDidMount(){this.fetchInitialData(),this.addOnlineListeners()}fetchInitialData(){(0,u.resolveStoreInstance)(m.default).isLoggedIn?(this.fetchPermissions(),this.fetchWatchingState(),this.fetchWatchConfig()):this.setState({isPublicModel:!0,isWatchingModel:!1,isFetchingPermissions:!1,isWatchingEnabled:!0});Number.isInteger(this.props.count)&&this.props.count>=0?this.setState({watchersCount:this.props.count}):this.fetchWatchersCount()}addOnlineListeners(){window.addEventListener("online",this.setComponentOnline),window.addEventListener("offline",this.setComponentOffline)}componentWillUnmount(){window.removeEventListener("online",this.setComponentOnline),window.removeEventListener("offline",this.setComponentOffline)}handleAnalytics(e,t,n){w.default.addEventV2({category:t,entityId:this.props.modelId,entityType:this.props.model,action:e,label:n,value:1})}setWatchStatus(e){const{modelId:t,model:n}=this.props,s=e?f.watchModel:f.unWatchModel;return this.setState({isProcessingWatchToggle:!0}),s(n,t).then((()=>{this.setState((e=>({isProcessingWatchToggle:!1,isWatchingModel:!e.isWatchingModel})));const t=e?"watch":"unwatch";this.handleAnalytics(t,v.get(this.props,"analyticsOptions.category"),v.get(this.props,"analyticsOptions.label")),this.fetchWatchersCount()})).catch((()=>{this.setState({isProcessingWatchToggle:!1}),pm.toasts.error("Just a faulty wire. Try performing the action again.",{noIcon:!0,title:"Something went wrong. Try again."})}))}setWatcherPreference(e){this.watcherPreferences=e}get preferences(){if(this.watcherPreferences)return Object.entries((0,l.toJS)(this.watcherPreferences)).map((([e,t])=>({...t,key:e})))}setOffline(e){this.isOffline=e}get countBtnTooltip(){const{watchersCountFetchingErr:e,permissionFetchErr:t,watchersCount:n}=this.state;return this.isOffline?"You can take this action once you're back online.":t?t.message:e?e.message:""}get watchToggleButtonTooltip(){const{isProcessingWatchToggle:e,modelWatchStatusFetchError:t,permissionFetchErr:n,isWatchingEnabled:s}=this.state;return this.isOffline?"You can take this action once you're back online.":e?"Please wait while your request is being processed.":n?n.message:t?t.message:s?void 0:"You do not have access to perform this action."}get isWatchToggleDisabled(){const{isProcessingWatchToggle:e,isFetchingModelWatchStatus:t,modelWatchStatusFetchError:n,isFetchingPermissions:s,permissionFetchErr:o,isWatchingEnabled:i}=this.state;return e||t||n||this.isOffline||s||o||!i}get isWatchersCountButtonDisabled(){const{watchersCountFetchingErr:e,isFetchingPermissions:t,permissionFetchErr:n}=this.state;return e||n||t||this.isOffline}render(){const{className:e}=this.props,t=(0,u.resolveStoreInstance)(m.default);return a.createElement(b.default,{isWatching:this.state.isWatchingModel,className:e,watchersCount:this.state.watchersCount,privateWatchersCount:this.state.privateWatchersCount,onWatchersListOpen:this.onOpenWatchersList,isFetchingWatchers:this.state.isFetchingWatchers,isFetchingMoreWatchers:this.state.isFetchingMoreWatchers,watchersList:this.state.watchersList,lastWatcherElementRef:this.lastWatcherElementRef,onOpenPreferences:this.fetchPreferences,onClickWatchStateChangeTrigger:this.onWatchStateChangeTrigger,isFetchingPreferences:this.state.isFetchingPreferences,preferences:this.preferences,isPreferencesEnabled:this.state.isPreferencesEnabled,toggleWatch:this.toggleWatch,hideLabel:this.props.hideLabel,isProcessingWatchToggle:this.state.isProcessingWatchToggle,onPreferenceChange:this.onPreferenceChange,watchPreferencesPopoverDescription:this.preferencesDescription,restrictPreferencesChange:this.state.restrictPreferencesChange,watchersListFetchErr:this.state.watchersListFetchErr,reloadWatchers:this.fetchWatchersList,resetPageId:this.resetPageId,disableCount:this.isWatchersCountButtonDisabled,countBtnTooltip:this.countBtnTooltip,isWatchToggleDisabled:this.isWatchToggleDisabled,watchToggleTooltip:this.watchToggleButtonTooltip,renderWatchPreferencesTitle:y.default[this.props.model].renderWatchPreferencesTitle,currentUserId:t.id,model:this.props.model,isFetchingModelWatchStatus:this.state.isFetchingModelWatchStatus})}},i=E(o.prototype,"watcherPreferences",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E(o.prototype,"setWatcherPreference",[l.action],Object.getOwnPropertyDescriptor(o.prototype,"setWatcherPreference"),o.prototype),E(o.prototype,"preferences",[l.computed],Object.getOwnPropertyDescriptor(o.prototype,"preferences"),o.prototype),r=E(o.prototype,"isOffline",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!navigator.onLine}}),E(o.prototype,"setOffline",[l.action],Object.getOwnPropertyDescriptor(o.prototype,"setOffline"),o.prototype),s=o))||s;C.propTypes={modelId:d().string.isRequired,model:d().oneOf(["collection","pullRequest","api"]).isRequired,className:d().string,hideLabel:d().bool,analyticsOptions:d().object,count:d().number,modelName:d().string}},"./version-control/Watch/components/WatchPreferences.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n("../../node_modules/react/index.js"),o=n("./node_modules/prop-types/index.js"),i=n.n(o),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),l=n("./js/components/base/LoadingIndicator.js"),h=n("./js/components/base/Inputs.js");const d=r.default.div`
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>e["spacing-l"]};

  .entity {
    margin-top: ${({theme:e})=>e["spacing-l"]};
  }

  .entity-top-row {
    display: flex;
    align-items: center;
  }

  .entity-description {
    margin-left: ${({theme:e})=>e["spacing-xl"]};
  }

  .entity-title {
    margin-left: ${({theme:e})=>e["spacing-s"]};
    display: inline-flex;
  }

  .preference-checkbox {
    height: 14px;
    width: 14px;
    min-width: unset;
  }

  .preference-checkbox svg {
    width: 14px;
  }

  .preference-checkbox.is-selected {
    background-color: ${({theme:e})=>e["base-color-brand"]};
    border: none;
    height: 16px;
    width: 16px;
  }

  .preference-checkbox.is-selected svg {
    width: 16px;
  }
`;function m(e){const{isLoading:t,preferences:n,onPreferenceChange:o,description:i,renderTitle:r}=e,[m,u]=s.useState(n);s.useEffect((()=>{u(n)}),[n]);return s.createElement(d,null,t&&s.createElement(l.default,null),!t&&m&&s.createElement("div",null,s.createElement(a.default,{text:r?r(m):"",type:"h4",hasBottomSpacing:!0}),s.createElement(c.default,{text:i,type:"body-medium",color:"content-color-secondary"}),m.map((e=>s.createElement("div",{className:"entity",key:e.key},s.createElement("div",{className:"entity-top-row"},s.createElement(h.Checkbox,{checked:e.enabled,size:"md",className:"preference-checkbox",onChange:()=>(e=>{const t=m.findIndex((t=>t.key===e));t>-1&&(m[t]={...m[t],enabled:!m[t].enabled},u(m.slice()),o(m))})(e.key)}),s.createElement("div",{className:"entity-title"},s.createElement(c.default,{text:e.title,hasBottomSpacing:!0,color:"content-color-primary"}))),s.createElement("div",{className:"entity-description"},s.createElement(c.default,{text:e.description,color:"content-color-secondary",type:"body-small"})))))))}m.propTypes={isLoading:i().bool,preferences:i().arrayOf(i().shape({enabled:i().bool.isRequired,title:i().string.isRequired,description:i().string.isRequired,key:i().string.isRequired})),onPreferenceChange:i().func.isRequired,renderTitle:i().func,description:i().string}},"./version-control/Watch/components/WatchersList.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var s=n("../../node_modules/react/index.js"),o=n("./node_modules/prop-types/index.js"),i=n.n(o),r=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./node_modules/classnames/index.js"),c=n.n(a),l=n("../../node_modules/@postman/aether/esmLib/src/components/Text/Text.js"),h=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),d=n("../../node_modules/@postman/aether/esmLib/src/components/Spinner/Spinner.js"),m=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),u=n("../../node_modules/@postman/aether/esmLib/src/components/Avatar/Avatar.js"),p=n("../../node_modules/@postman/aether/esmLib/src/components/Tooltip/Tooltip.js"),g=n("../../node_modules/@postman/aether-icons/esmLib/src/design-system-icons/icon-descriptive-user-stroke.js"),f=n("./js/utils/PluralizeHelper.js"),b=n("./version-control/Watch/config.js"),y=n("./appsdk/components/link/Link.js"),w=n("./node_modules/lodash/lodash.js");const W=r.default.div`
  cursor: pointer;
  padding: ${({theme:e})=>e["spacing-s"]}
    ${({theme:e})=>e["spacing-xs"]};

  .watcher-item {
    width: 100%;
    .link:hover {
      text-decoration: underline;
    }
  }

  &:hover {
    .link {
      color: ${({theme:e})=>e["content-color-info"]};
    }
  }
`,v=r.createGlobalStyle`
  .user-list-item__tooltip-body.user-list-item__tooltip-body {
    z-index: 10000;
    margin-left: ${({theme:e})=>e["spacing-s"]};
  }
`,P=r.default.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  .watcher-list-container {
    max-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;

    .watchers-list {
      flex: 1;
      overflow-y: auto;

      .anonymous-watchers {
        cursor: pointer;
        .anonymous-watcher-icon {
          width: ${({theme:e})=>e["size-s"]};
          height: ${({theme:e})=>e["size-s"]};
          border-radius: ${({theme:e})=>e["border-radius-max"]};
          background-color: ${({theme:e})=>e["background-color-secondary"]};
        }
      }
    }
  }

  .title {
    font-size: ${({theme:e})=>e["text-size-m"]};
    font-weight: ${({theme:e})=>e["text-weight-medium"]};
    line-height: ${({theme:e})=>e["line-height-m"]};
    color: ${({theme:e})=>e["content-color-secondary"]};
    padding: ${({theme:e})=>e["spacing-xs"]};
  }

  .list-container {
    width: 100%;
  }

  .list-container.loading {
    height: 117px;
  }

  .error-container {
    width: 100%;
    padding: ${({theme:e})=>e["spacing-s"]};
  }

  ul {
    padding: 0;
    margin: 0;
  }

  .loading-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title.loading {
    padding-bottom: ${({theme:e})=>e["spacing-xl"]};
  }

  .title--error {
    padding: 0;
    margin-bottom: ${({theme:e})=>e["spacing-s"]};
  }

  .reload-button {
    margin-top: ${({theme:e})=>e["spacing-s"]};
  }

  .watchers-empty-state {
    padding: ${({theme:e})=>e["spacing-s"]};
    display: block;
    padding-top: ${({theme:e})=>e["spacing-s"]};
  }
`;function E(e){const{list:t,count:n,privateWatchersCount:o,reload:i,error:r,isLoading:a,isLoadingMore:E,currentUserId:C,model:x,lastWatcherElementRef:j}=e;return r&&!a?s.createElement(P,null,s.createElement("div",{className:"error-container"},s.createElement("div",{className:"title title--error"},"Couldn't load watchers"),s.createElement("div",null,s.createElement(l.default,{text:"Just a faulty wire. Try reloading the watchers.",hasBottomSpacing:!0})),s.createElement(h.default,{text:"Reload Watchers",onClick:i,className:"reload-button"}))):s.createElement(P,null,s.createElement("div",{className:c()("list-container",{loading:a})},s.createElement("div",{className:c()("title",{loading:a})},`${n||"No"} ${f.default.pluralize({count:n,singular:"watcher",plural:"watchers"})}`),a&&s.createElement(d.default,{className:"loading-indicator"}),!a&&!w.get(t,"length")&&s.createElement(l.default,{text:`People who watch this ${w.get(b.default,[x,"displayName"],"")} will show up here.`,className:"watchers-empty-state",color:"content-color-primary"}),s.createElement(m.default,{direction:"column",className:"watcher-list-container"},!a&&!!w.get(t,"length")&&s.createElement("ul",{className:"watchers-list"},t.map(((e,n)=>s.createElement(W,{ref:t.length===n+1?j:null,key:w.get(e,"userId")},s.createElement(y.default,{to:w.get(e,"profileUrl","")},s.createElement(m.default,{"data-testid":"watcher-list-item",className:"watcher-item",paddingTop:"spacing-xs",paddingBottom:"spacing-xs",gap:"spacing-s",alignItems:"center",justifyContent:"start"},s.createElement(u.default,{size:"s",userId:w.get(e,"userId",0),src:w.get(e,"profilePicUrl")}),s.createElement(l.default,{isTruncated:!0,className:"link",color:"content-color-primary"},w.get(e,"name")||w.get(e,"username"),C===w.get(e,"userId").toString()&&" (You)")))))),o>0&&s.createElement(l.default,{color:"content-color-primary"},s.createElement(m.default,{padding:"spacing-s",className:"anonymous-watchers",alignItems:"center",gap:"spacing-s"},s.createElement(m.default,{className:"anonymous-watcher-icon",alignItems:"center",justifyContent:"center"},s.createElement(g.default,null)),s.createElement(p.default,{placement:"bottom",content:"Watchers with accounts set to private are kept anonymous."},s.createElement("div",null,o," anonymous"," ",f.default.pluralize({count:o,singular:"watcher",plural:"watchers"})))))),E&&s.createElement(m.default,{justifyContent:"center",padding:"spacing-s"},s.createElement(d.default,{className:"loading-indicator"}))),s.createElement(v,null)))}E.propTypes={isLoading:i().bool,isLoadingMore:i().bool,count:i().number.isRequired,privateWatchersCount:i().number,list:i().arrayOf(i().shape({name:i().string.isRequired,userId:i().string.isRequired,profileUrl:i().string.isRequired,ProfilePicUrl:i().string})),error:i().oneOfType([i().object,i().bool]),reload:i().func.isRequired,currentUserId:i().string}},"./version-control/common/ControlledComboButton/index.js":function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var s=n("../../node_modules/react/index.js"),o=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./js/components/base/Buttons.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Tooltip/Tooltip.js"),a=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),c=n("./js/components/base/Tooltips.js");const l=o.default.div`
  display: inline-flex;

  .controlled-combo-button__primary-button {
    min-width: ${e=>e.hideLabel&&"0"};
    pointer-events: ${e=>e.isPrimaryButtonDisabled&&"none"};
  }

  /** TODO: remove this aether button supports small size icons on medium buttons. */
  .controlled-combo-button__primary-button svg {
    height: ${({theme:e,iconSize:t})=>e["small"===t?"text-size-m":"text-size-xl"]};
    width: ${({theme:e,iconSize:t})=>e["small"===t?"text-size-m":"text-size-xl"]};
  }

  .controlled-combo-button__primary-button i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: ${e=>e.isPrimaryButtonDisabled&&"0.5"};
  }

  .controlled-combo-button__menu-button {
    padding: ${({theme:e})=>e["spacing-s"]};
    min-width: ${({theme:e})=>e["size-m"]};
    background-color: ${e=>e.isPrimaryButtonDisabled&&"transparent"};
    pointer-events: ${e=>e.isPrimaryButtonDisabled&&"none"};
    box-shadow: ${e=>e.isPrimaryButtonDisabled&&"none"};
  }

  .controlled-combo-button__separator {
    border-left: ${({theme:e,isPrimaryButtonDisabled:t})=>t?"transparent":`${e["border-width-default"]} ${e["border-style-solid"]} ${e["splitbutton-tertiary-splitter-color"]}`};
    height: 20px;
    margin-top: 6px;
  }
`;function h(e){const{className:t,popoverClassName:n,useCustomButton:o,isMenuOpen:h,isPrimaryButtonLoading:d,isMenuButtonLoading:m,isPrimaryButtonDisabled:u,comboButtonSize:p,isMenuButtonDisabled:g,primaryButtonText:f,primaryButtonTextHide:b,primaryButtonIcon:y,menuButtonText:w,renderMenuContent:W,primaryButtonTooltip:v,menuButtonTooltip:P,buttonIconSize:E,primaryButtonMinWidth:C,onPrimaryButtonClick:x,onMenuButtonClick:j,onMenuClose:S}=e,T=(0,s.useRef)(),L={text:f,icon:y,type:"secondary",size:p||"medium",tooltip:v&&s.createElement(r.default,{content:v,placement:"bottom"}),isDisabled:u,isLoading:d,onClick:x,className:"controlled-combo-button__primary-button",minWidth:C};o&&(L.tooltip=v);const k={text:w,type:"secondary",size:p||"medium",tooltip:P&&s.createElement(r.default,{content:P,placement:"bottom"}),isDisabled:g,isLoading:m,onClick:j,className:"controlled-combo-button__menu-button"},_={show:h,target:T.current,placement:"bottom-right",onClose:S,closeOnClickOutside:!0,immediate:!0,hideArrow:!0,className:n};return s.createElement(s.Fragment,null,s.createElement(l,{ref:T,className:t,iconSize:E,hideLabel:b,isPrimaryButtonDisabled:u},o?s.createElement(i.Button,{type:L.type,disabled:L.isDisabled,size:p||"small",tooltip:L.tooltip,className:L.className,onClick:L.onClick},L.text):s.createElement(a.default,L),s.createElement("div",{className:"controlled-combo-button__separator"}),s.createElement(a.default,k)),s.createElement(c.Tooltip,_,s.createElement(c.TooltipBody,null,W&&W())))}}}]);