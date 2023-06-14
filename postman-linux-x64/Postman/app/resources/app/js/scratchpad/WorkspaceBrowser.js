"use strict";(self.webpackChunk_postman_app_scratchpad=self.webpackChunk_postman_app_scratchpad||[]).push([[12],{11344:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var a=s(1),r=s(1622),i=s(1222),n=s(1229);function o(){return i.default.transitionTo(n.ALL_WORKSPACES_IDENTIFIER)}function c(){return a.createElement("div",{className:"artemis-workspace-error-state"},a.createElement("div",{className:"artemis-workspace-error-state__background"}),a.createElement("div",{className:"artemis-workspace-error-state__title"},"Something Went Wrong"),a.createElement("div",{className:"artemis-workspace-error-state__description"},"Postman has encountered an error. If this problem persists, contact us at help@postman.com"),a.createElement(r.Button,{className:"artemis-workspace-error-state__switch-btn",type:"primary",onClick:o},"Go to Workspaces"))}},11343:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var a,r,i=s(1),n=s(1017),o=s(1603),c=s(1622),p=s(2446),l=s(1023),d=s(5554),h=s(2759),m=s(1607),k=s.n(m),u=s(1022),w=s(1460),y=s(1545),_=s(1218),f=s(21);let E=(0,o.observer)((r=class extends i.Component{constructor(e){super(e),this.state={selectedWorkspace:null,isJoining:!1,isSharing:!1,joiningWorkspaceId:""},this.workspaceStore=(0,l.getStore)("WorkspaceStore"),this.handleWorkspaceJoin=this.handleWorkspaceJoin.bind(this),this.handleWorkspaceSelect=this.handleWorkspaceSelect.bind(this),this.handleShareEntity=this.handleShareEntity.bind(this),this.handleViewEntity=this.handleViewEntity.bind(this),this.postJoinWorkspace=this.postJoinWorkspace.bind(this)}postJoinWorkspace(e){let t=f.find((0,l.getStore)("ArtemisBlanketStore").state.workspaces,["id",e]);f.set(t,"state.isMember",!0)}handleWorkspaceJoin(e){if(!e)return;let t=(0,u.createEvent)("join","workspace",{model:"workspace",workspace:{id:e}});this.setState({isJoining:!0,joiningWorkspaceId:e}),(0,w.default)(t).then((()=>{this.setState({isJoining:!1,joiningWorkspaceId:""},(()=>this.postJoinWorkspace(e)))})).catch((e=>{this.setState({isJoining:!1,joiningWorkspaceId:""})}))}handleWorkspaceSelect(e){this.setState({selectedWorkspace:f.find(this.props.workspaces,{id:e})})}handleShareEntity(){this.setState({isSharing:!0});let e=(0,l.getStore)("ActiveWorkspaceStore").id,t=[{entityType:this.props.entityType,entityId:this.props.entityId,workspaceId:e}];return _.default.modifyDependencies(t,null,null,{fromId:f.get((0,l.getStore)("ActiveWorkspaceStore"),"id")}).then((()=>Promise.resolve().then((()=>f.isFunction(this.props.postShareHandler)?this.props.postShareHandler(this.props.entityId,e):this.props.viewEntityHandler(this.props.entityId,e))).then((()=>this.setState({isSharing:!1}))).catch((e=>this.setState({isSharing:!1}))))).catch((e=>this.setState({isSharing:!1})))}handleViewEntity(){return f.isFunction(this.props.viewEntityHandler)&&this.props.viewEntityHandler(this.props.entityId,f.get(this.state.selectedWorkspace,"id"))}render(){const e=y.ENTITY_MAP[this.props.entityType],t=this.props.entityName,s=(0,l.getStore)("ActiveWorkspaceStore").name,a=this.props.isCanonicalURL;return this.props.workspaces&&a&&1===this.props.workspaces.length?(f.isFunction(this.props.viewEntityHandler)&&this.props.viewEntityHandler(this.props.entityId,f.get(this.props.workspaces,"[0].id")),null):i.createElement("div",{className:"artemis-workspace-share-entity"},i.createElement("div",{className:"artemis-workspace-share-entity__background"}),!this.props.isCanonicalURL&&i.createElement(i.Fragment,null,i.createElement("div",{className:"artemis-workspace-share-entity__title"},e," not in this workspace"),i.createElement("div",{className:"artemis-workspace-share-entity__description"},"The ",i.createElement("span",{className:"artemis-workspace-share-entity__description-entity-name"},t," "),e," is not present in the",i.createElement("span",{className:"artemis-workspace-share-entity__description-workspace-name"}," ",s)," workspace."),i.createElement(c.Button,{className:"artemis-workspace-share-entity__share-btn",type:"primary",onClick:this.handleShareEntity},this.state.isSharing?i.createElement(h.default,null):`Share ${e} to this workspace`)),!f.isEmpty(this.props.workspaces)&&i.createElement("div",{className:"artemis-workspace-share-entity__workspace-action"},i.createElement("div",{className:"artemis-workspace-share-entity__workspace-action-text"},"or ",i.createElement("br",null),"View ",e," in a ",a?"":"different ","workspace"),i.createElement("div",{className:"artemis-workspace-share-entity__workspace-action-actions"},i.createElement(p.Dropdown,{className:"artemis-workspace-share-entity__dropdown",onSelect:this.handleWorkspaceSelect},i.createElement(p.DropdownButton,{className:"artemis-workspace-share-entity__dropdown-btn",type:"secondary",size:"small"},i.createElement(c.Button,null,f.get(this.state.selectedWorkspace,"name","Select workspace"))),i.createElement(p.DropdownMenu,{fluid:!0,className:"artemis-workspace-share-entity__dropdown-menu"},f.map(this.props.workspaces,(e=>{let t=!f.get(e,"state.isMember",!1);return i.createElement(p.MenuItem,{className:"artemis-workspace-share-entity__workspace-item",key:e.id,refKey:e.id,disabled:t},i.createElement("div",{className:k()("artemis-workspace-share-entity__workspace-list",{unjoined:t})},i.createElement("div",{className:k()("artemis-workspace-share-entity__workspace",{unjoined:t})},i.createElement(d.default,{icon:"icon-entity-workspaces-stroke"}),i.createElement("div",{className:"artemis-workspace-share-entity__workspace-name"},e.name)),t&&(this.state.isJoining&&e.id===this.state.joiningWorkspaceId?i.createElement(h.default,null):i.createElement(c.Button,{className:"artemis-workspace-share-entity__join-btn",type:"text",onClick:()=>{this.handleWorkspaceJoin(e.id)}},"Join"))))})))),i.createElement(c.Button,{className:"artemis-workspace-share-entity__view-btn",type:"secondary",onClick:this.handleViewEntity},"View ",e))))}},S=r.prototype,W="postJoinWorkspace",v=[n.action],g=Object.getOwnPropertyDescriptor(r.prototype,"postJoinWorkspace"),b=r.prototype,N={},Object.keys(g).forEach((function(e){N[e]=g[e]})),N.enumerable=!!N.enumerable,N.configurable=!!N.configurable,("value"in N||N.initializer)&&(N.writable=!0),N=v.slice().reverse().reduce((function(e,t){return t(S,W,e)||e}),N),b&&void 0!==N.initializer&&(N.value=N.initializer?N.initializer.call(b):void 0,N.initializer=void 0),void 0===N.initializer&&(Object.defineProperty(S,W,N),N=null),a=r))||a;var S,W,v,g,b,N},11340:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var a=s(1),r=s(1017),i=s(1622),n=s(11341),o=s(1460),c=s(1023),p=s(1022),l=s(3484),d=s(21);class h extends a.Component{constructor(e){super(e),this.state={isJoining:!1},this.handleBrowseWorkspace=this.handleBrowseWorkspace.bind(this),this.handleWorkspaceJoin=this.handleWorkspaceJoin.bind(this)}handleBrowseWorkspace(){(0,n.openWorkspace)(this.props.workspaceId)}handleWorkspaceJoin(){if(!this.props.workspaceId)return;let e=(0,p.createEvent)("join","workspace",{model:"workspace",workspace:{id:this.props.workspaceId}});this.setState({isJoining:!0}),(0,o.default)(e).then((()=>{this.workspaceStoreReaction=(0,r.reaction)((()=>(0,c.getStore)("WorkspaceStore").find(this.props.workspaceId)),(e=>{if(d.isEmpty(e))return this.setState({isJoining:!1}),this.workspaceStoreReaction&&this.workspaceStoreReaction();this.setState({isJoining:!1},(()=>{l.default.switchWorkspace(e.id).then((()=>((0,c.getStore)("ArtemisBlanketStore").clearState(),this.workspaceStoreReaction&&this.workspaceStoreReaction())))}))}),{fireImmediately:!0})})).catch((e=>{this.setState({isJoining:!1})}))}render(){return a.createElement("div",{className:"artemis-workspace-join"},a.createElement("div",{className:"artemis-workspace-join__background"}),a.createElement("div",{className:"artemis-workspace-join__title"},"Join this workspace"),a.createElement("div",{className:"artemis-workspace-join__description"},"To work with any of the items in this workspace, first join the workspace."),a.createElement(i.Button,{className:"artemis-workspace-join__join-btn",type:"primary",onClick:this.handleWorkspaceJoin,disabled:this.state.isJoining},"Join Workspace"),a.createElement(i.Button,{className:"artemis-workspace-join__browse-btn",type:"text",onClick:this.handleBrowseWorkspace},"Browse Workspace"))}}},11342:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var a=s(1),r=s(1622),i=s(11341),n=s(1023),o=s(21);class c extends a.Component{constructor(e){super(e),this.handleViewWorkspaces=this.handleViewWorkspaces.bind(this)}handleViewWorkspaces(){let e=o.get((0,n.getStore)("CurrentUserStore"),"organizations.[0]")?"team":"personal";(0,i.openWorkspaces)(e)}render(){return a.createElement("div",{className:"artemis-workspace-not-found"},a.createElement("div",{className:"artemis-workspace-not-found__background"}),a.createElement("div",{className:"artemis-workspace-not-found__title"},"Workspace not found"),a.createElement("div",{className:"artemis-workspace-not-found__description"},"We can't find this workspace, make sure this isn't a private/personal workspace or it hasn't been deleted."),a.createElement(r.Button,{className:"artemis-workspace-not-found__view-workspaces-btn",type:"primary",onClick:this.handleViewWorkspaces},"View All Workspaces"))}}},11341:function(e,t,s){s.r(t),s.d(t,{openWorkspace:function(){return r},openWorkspaces:function(){return i}});var a=s(1306);function r(e){(0,a.openAuthenticatedRoute)(`${pm.dashboardUrl}/workspaces/${e}`)}function i(e){(0,a.openAuthenticatedRoute)(`${pm.dashboardUrl}/workspaces?type=${e}`)}},11339:function(e,t,s){s.r(t);var a=s(11340),r=s(11342),i=s(11343),n=s(11344);const o={unjoinedWorkspace:a.default,workspaceNotFound:r.default,entityShare:i.default,error:n.default};t.default=o},11338:function(e,t,s){s.r(t),s.d(t,{default:function(){return n}});var a=s(1),r=s(1023),i=s(11339);class n extends a.Component{constructor(e){super()}render(){const e=(0,r.getStore)("ArtemisBlanketStore"),t=e.identifier,s=i.default[t];if(s)return a.createElement(s,e.state)}}}}]);