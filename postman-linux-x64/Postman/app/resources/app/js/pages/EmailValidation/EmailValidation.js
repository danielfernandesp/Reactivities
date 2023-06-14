"use strict";(self.webpackChunk_postman_app_renderer=self.webpackChunk_postman_app_renderer||[]).push([[146],{"./iam/src/TeamSettings/pages/EmailValidation/EmailValidation.js":function(e,t,n){n.r(t);var a=n("../../node_modules/react/index.js"),s=n("./js/services/NavigationService.js"),o=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/Success.js"),i=n("../../node_modules/@postman/aether/esmLib/src/components/Heading/Heading.js"),l=n("../../node_modules/@postman/aether/esmLib/src/components/Illustration/illustrations/UnableToLoad.js"),c=n("../../node_modules/@postman/aether/esmLib/src/components/Button/Button.js"),m=n("./js/modules/services/AuthHandlerService.js"),d=n("./js/stores/StoreManager.js"),u=n("./js/stores/CurrentUserStore.js"),p=n("./growth/foundation/public/amplitude/AmplitudeService.js"),f=n("./iam/src/common/components/CenteredLoader.js"),g=n("./iam/src/common/api/IAMservice.js");const h=new URLSearchParams(location.search).get("token");t.default=()=>{const[e,t]=(0,a.useState)({}),[n,j]=(0,a.useState)(!0),E=(0,d.resolveStoreInstance)(u.default),y=E&&E.isLoggedIn;(0,a.useEffect)((()=>{if(!h)return j(!1);!async function(){const e=await(0,g.ValidateEmail)(h);e&&e.body&&t(e.body),j(!1)}(),p.Ampli.emailVerifiedPageViewed((0,p.getAmpliPageViewedProperties)())}),[]);return n?a.createElement(f.default,null):a.createElement(o.default,{direction:"column",justifyContent:"center",alignItems:"center",height:"100vh"},(()=>{const t=e&&e.status,n=e&&e.email;switch(t){case"SUCCESS":case"ALREADY_VERIFIED":return a.createElement(o.default,{direction:"column",justifyContent:"center",alignItems:"center","data-testid":"email-verification-success"},a.createElement(r.default,null),a.createElement(o.default,{direction:"column",justifyContent:"center",alignItems:"center",padding:"spacing-l"},a.createElement(i.default,{type:"h4",text:`Your email ${n}`,color:"content-color-primary"}),a.createElement(i.default,{type:"h4",text:`has ${""+("ALREADY_VERIFIED"===t?"already":"")} been verified`,color:"content-color-primary"})));default:return a.createElement(o.default,{direction:"column",justifyContent:"center",alignItems:"center"},a.createElement(l.default,null),a.createElement(o.default,{direction:"column",justifyContent:"center",alignItems:"center",padding:"spacing-l"},a.createElement(i.default,{type:"h4",text:e.error||"There was an error validating your email",color:"content-color-primary"})))}})(),a.createElement(c.default,{type:"primary",size:"medium",text:y?"Go To Postman":"Sign In",minWidth:"101px",onClick:()=>{const t=e&&e.email;if(!y||t!==E.email)return m.default.initiateLogin({email:t,continueUrl:pm.artemisUrl,queryParams:{addAccount:"1"}});s.default.transitionTo("home")}}))}},"./iam/src/common/components/CenteredLoader.js":function(e,t,n){n.r(t);var a=n("../../node_modules/react/index.js"),s=n("../../node_modules/@postman/aether/esmLib/src/components/ResponsiveContainer/ResponsiveContainer.js"),o=n("../../node_modules/@postman/aether/esmLib/src/components/Flex/Flex.js"),r=n("../../node_modules/@postman/aether/esmLib/src/components/Spinner/Spinner.js");t.default=({minHeight:e,size:t="small"})=>a.createElement(s.default,{type:"row"},a.createElement(s.default,{type:"column",span:12,minHeight:e||"100vh"},a.createElement(o.default,{width:"100%",justifyContent:"center",alignItems:"center",padding:"spacing-xxl"},a.createElement(r.default,{size:t}))))}}]);