"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[107],{"./runtime-repl/collection/contextbar/CollectionInfoCBController.js":function(e,i,t){t.r(i),t.d(i,{default:function(){return p}});var o,l,r,n,c,a=t("../../node_modules/mobx/lib/mobx.module.js"),s=t("./runtime-repl/collection/_api/CollectionStoreV2.js");function u(e,i,t,o){t&&Object.defineProperty(e,i,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(o):void 0})}function b(e,i,t,o,l){var r={};return Object.keys(o).forEach((function(e){r[e]=o[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=t.slice().reverse().reduce((function(t,o){return o(e,i,t)||t}),r),l&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(l):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,i,r),r=null),r}let d=(l=b((o=class{constructor(){u(this,"id",l,this),u(this,"createdAt",r,this),u(this,"collection",n,this),u(this,"owner",c,this)}update(e){e&&(e.id&&(this.id=e.id),e.createdAt&&(this.createdAt=e.createdAt),e.owner&&(this.owner=e.owner),e.collection&&(this.collection=e.collection))}}).prototype,"id",[a.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=b(o.prototype,"createdAt",[a.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n=b(o.prototype,"collection",[a.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=b(o.prototype,"owner",[a.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b(o.prototype,"update",[a.action],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o);class p{constructor(){this.info=new d}async didCreate(e){const{uid:i}=e;this.info.update({id:i}),this.collection=await(0,s.subscribeOne)(i,{permissions:this.constructor.collectionPermissions,exclude:["response","request"]}),this.collection&&this.info.update({id:i,createdAt:this.collection.createdAt,owner:this.collection.owner,collection:this.collection})}willDestroy(){this.collection&&this.collection.unsubscribe&&this.collection.unsubscribe()}}p.collectionPermissions=["addMock","addMonitor"]}}]);