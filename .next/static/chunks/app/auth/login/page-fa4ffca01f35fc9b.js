(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{8165:function(e,t,r){Promise.resolve().then(r.bind(r,6938))},6938:function(e,t,r){"use strict";r.d(t,{default:function(){return f}});var n=r(7437),o=r(6463),i=r(2265),s=r(277),a=r.n(s),l=r(7476),c=r(7138),u=r(6648);function f(){let[e,t]=(0,i.useState)(""),[r,s]=(0,i.useState)(""),[f,d]=(0,i.useState)(!1),p=(0,o.useRouter)();return(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg p-4",children:[(0,n.jsx)("div",{className:"w-full lg:w-1/2 flex items-center justify-center min-h-[50vh] lg:min-h-screen bg-cover bg-center",style:{backgroundImage:"url(/images/Pattern.png)"},children:(0,n.jsxs)("div",{className:"p-8 lg:p-16 text-center bg-red-200 bg-opacity-70 rounded-lg shadow-lg w-5/6 lg:w-4/6 min-h-[200px] lg:min-h-[300px]",children:[(0,n.jsx)("h1",{className:"text-2xl lg:text-3xl pb-4 text-red-800 font-bold",children:"Welcome Back to Trade Connect!"}),(0,n.jsx)("p",{className:"text-red-800 text-sm lg:text-lg",children:"Log in to your account and continue planning your dream event with ease."})]})}),(0,n.jsxs)("div",{className:"w-full lg:w-1/2 flex flex-col items-center justify-center relative",children:[(0,n.jsx)("div",{className:"w-full flex justify-center mb-6",children:(0,n.jsx)(u.default,{src:"/images/trade_connect.svg",alt:"Logo",width:100,height:100,className:"w-20 lg:w-24"})}),(0,n.jsxs)("form",{className:"space-y-6 items-center mx-auto w-full lg:w-3/5 p-8 bg-white shadow-lg rounded-lg",onSubmit:t=>{t.preventDefault(),"user@gmail.com"===e&&"pass"===r?(console.log({username:e,password:r}),a().set(null,"auth","true",{maxAge:86400,path:"/home"}),p.push("/dashboard/home")):alert("Invalid credentials")},children:[(0,n.jsx)("h1",{className:"text-3xl lg:text-4xl text-center font-semibold text-red-800",children:"Log In"}),(0,n.jsx)("p",{className:"text-gray-600 text-center mt-2 lg:text-lg",children:"Sign in to your account on Trade Connect."}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("label",{className:"block text-black font-semibold mb-1",children:"Email"}),(0,n.jsx)("input",{type:"email",placeholder:"johndoe@gmail.com",autoComplete:"off",className:"w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300",onChange:e=>t(e.target.value)})]}),(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("label",{className:"block text-black font-semibold mb-1",children:"Password"}),(0,n.jsx)("input",{type:f?"text":"password",placeholder:"Password",autoComplete:"off",className:"w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300",onChange:e=>s(e.target.value)}),(0,n.jsx)("button",{type:"button",onClick:()=>d(!f),className:"absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500",children:f?(0,n.jsx)(l.rzC,{}):(0,n.jsx)(l.rDJ,{})})]}),(0,n.jsx)("div",{className:"flex justify-end w-full",children:(0,n.jsx)("a",{href:"/auth/forgetpassword",className:"text-sm text-red-500 hover:underline",children:"Forgot Password?"})}),(0,n.jsx)("button",{type:"submit",className:"w-full py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-700 transition",children:"Log In"}),(0,n.jsxs)("p",{className:"text-center text-gray-600 mt-4",children:["Don’t have an account?"," ",(0,n.jsx)(c.default,{href:"/auth/sign-up",className:"text-red-500 hover:underline",children:"Sign Up"})]})]})]})]})}},4160:function(e,t){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var n={},o=e.split(";"),i=(t||{}).decode||r,s=0;s<o.length;s++){var a=o[s],l=a.indexOf("=");if(!(l<0)){var c=a.substring(0,l).trim();if(void 0==n[c]){var u=a.substring(l+1,a.length).trim();'"'===u[0]&&(u=u.slice(1,-1)),n[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,i)}}}return n},t.serialize=function(e,t,r){var i=r||{},s=i.encode||n;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var a=s(t);if(a&&!o.test(a))throw TypeError("argument val is invalid");var l=e+"="+a;if(null!=i.maxAge){var c=i.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(c)}if(i.domain){if(!o.test(i.domain))throw TypeError("option domain is invalid");l+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw TypeError("option path is invalid");l+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(l+="; HttpOnly"),i.secure&&(l+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var r=decodeURIComponent,n=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(5601),o=r.n(n)},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(231),o=r.n(n)},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let n=r(9920),o=r(497),i=r(8173),s=n._(r(1241));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=i.Image},277:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var o=r(4160),i=r(148),s=r(800);function a(e,t){var r,n;return(null===(n=null===(r=null==e?void 0:e.req)||void 0===r?void 0:r.headers)||void 0===n?void 0:n.cookie)?o.parse(e.req.headers.cookie,t):s.isBrowser()?o.parse(document.cookie,t):{}}function l(e,t,r,a){var l,c;if(void 0===a&&(a={}),(null===(l=null==e?void 0:e.res)||void 0===l?void 0:l.getHeader)&&e.res.setHeader){if(null===(c=null==e?void 0:e.res)||void 0===c?void 0:c.finished)return console.warn('Not setting "'+t+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var u=e.res.getHeader("Set-Cookie")||[];"string"==typeof u&&(u=[u]),"number"==typeof u&&(u=[]);var f=i.parse(u,{decodeValues:!1}),d=s.createCookie(t,r,a),p=[];f.forEach(function(e){if(!s.areCookiesEqual(e,d)){var t=o.serialize(e.name,e.value,n({encode:function(e){return e}},e));p.push(t)}}),p.push(o.serialize(t,r,a)),e.res.setHeader("Set-Cookie",p)}if(s.isBrowser()){if(a&&a.httpOnly)throw Error("Can not set a httpOnly cookie in the browser.");document.cookie=o.serialize(t,r,a)}return{}}function c(e,t,r){return l(e,t,"",n(n({},r||{}),{maxAge:-1}))}t.parseCookies=a,t.setCookie=l,t.destroyCookie=c,t.default={set:l,get:a,destroy:c}},800:function(e,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++){var i=r[o];if(e[i]!==t[i])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.areCookiesEqual=t.hasSameProperties=t.createCookie=t.isBrowser=void 0,t.isBrowser=function(){return"undefined"!=typeof window},t.createCookie=function(e,t,n){var o=n.sameSite;!0===o&&(o="strict"),(void 0===o||!1===o)&&(o="lax");var i=r(r({},n),{sameSite:o});return delete i.encode,r({name:e,value:t},i)},t.hasSameProperties=n,t.areCookiesEqual=function(e,t){var o=e.sameSite===t.sameSite;return"string"==typeof e.sameSite&&"string"==typeof t.sameSite&&(o=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),n(r(r({},e),{sameSite:void 0}),r(r({},t),{sameSite:void 0}))&&o}},148:function(e){"use strict";var t={decodeValues:!0,map:!1,silent:!1};function r(e){return"string"==typeof e&&!!e.trim()}function n(e,n){var o,i,s,a,l=e.split(";").filter(r),c=(o=l.shift(),i="",s="",(a=o.split("=")).length>1?(i=a.shift(),s=a.join("=")):s=o,{name:i,value:s}),u=c.name,f=c.value;n=n?Object.assign({},t,n):t;try{f=n.decodeValues?decodeURIComponent(f):f}catch(e){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+f+"'. Set options.decodeValues to false to disable this feature.",e)}var d={name:u,value:f};return l.forEach(function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?d.expires=new Date(n):"max-age"===r?d.maxAge=parseInt(n,10):"secure"===r?d.secure=!0:"httponly"===r?d.httpOnly=!0:"samesite"===r?d.sameSite=n:"partitioned"===r?d.partitioned=!0:d[r]=n}),d}function o(e,o){if(o=o?Object.assign({},t,o):t,!e)return o.map?{}:[];if(e.headers){if("function"==typeof e.headers.getSetCookie)e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var i=e.headers[Object.keys(e.headers).find(function(e){return"set-cookie"===e.toLowerCase()})];i||!e.headers.cookie||o.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=i}}return(Array.isArray(e)||(e=[e]),o.map)?e.filter(r).reduce(function(e,t){var r=n(t,o);return e[r.name]=r,e},{}):e.filter(r).map(function(e){return n(e,o)})}e.exports=o,e.exports.parse=o,e.exports.parseString=n,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!=typeof e)return[];var t,r,n,o,i,s=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,i=!1;l();)if(","===(r=e.charAt(a))){for(n=a,a+=1,l(),o=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(i=!0,a=o,s.push(e.substring(t,n)),t=a):a=n+1}else a+=1;(!i||a>=e.length)&&s.push(e.substring(t,e.length))}return s}},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),s=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[956,231,173,971,23,744],function(){return e(e.s=8165)}),_N_E=e.O()}]);