(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},327:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>l,routeModule:()=>p,tree:()=>c}),s(2232),s(7764),s(1888);var a=s(3191),n=s(8716),r=s(7922),i=s.n(r),o=s(5231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);s.d(t,d);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2232)),"C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,1888)),"C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\page.js"],u="/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1434:(e,t,s)=>{Promise.resolve().then(s.bind(s,655)),Promise.resolve().then(s.t.bind(s,2481,23))},655:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var a=s(326),n=s(434),r=s(282),i=s.n(r),o=s(5047);function d(){let e=(0,o.useRouter)();return a.jsx("button",{onClick:()=>{i().destroy(null,"auth",{path:"/"}),e.push("/home")},style:{width:"100%",padding:"8px"},children:"Logout"})}var c=s(6226);let l=[{component:n.default,name:"Dashboard",to:"/dashboard/home",activeIcon:"/images/category.svg"},{component:n.default,name:"Search Vendors",to:"/dashboard/search",activeIcon:"/images/people.svg"},{component:n.default,name:"Messages",to:"/dashboard/messages",activeIcon:"/images/directbox-notif.svg"},{component:n.default,name:"Subscription",to:"/dashboard/subscription",activeIcon:"/images/wallet-money.svg"},{component:n.default,name:"Transactions",to:"/dashboard/transactions",activeIcon:"/images/gift.svg"},{component:n.default,name:"Notification",to:"/dashboard/notifications",activeIcon:"/images/notification.svg"},{component:n.default,name:"Settings",to:"/dashboard/settings",activeIcon:"/images/setting-2.svg"}],u=()=>{let e=(0,o.usePathname)();return a.jsx("div",{className:"border m-3 border-[#EBEBEB] rounded-[10px] h-full",children:(0,a.jsxs)("aside",{className:" flex flex-col",children:[a.jsx(c.default,{src:"/images/trade_connect.svg",width:95,height:90,className:"self-center py-5"}),a.jsx("nav",{className:"flex flex-col p-4",children:l.map((t,s)=>{let r=e===t.to||e.includes(t.to),i=s===l.length-2;return(0,a.jsxs)("div",{children:[a.jsx("div",{className:`${r?"bg-[#992B1C]":""} rounded-md`,children:a.jsx(n.default,{href:t.to,children:(0,a.jsxs)("span",{className:`flex px-3 gap-3 py-2 rounded-md mx-4 my-2 ${r?"bg-utilityBrand":""}`,children:[a.jsx(c.default,{src:t.activeIcon,width:24,height:24}),a.jsx("p",{className:r?"text-white":"text-black",children:t.name})]})},t.name)}),i&&a.jsx("div",{className:"border-b border-[#8E8E8E]"})]},s)})}),a.jsx("div",{className:"pt-44",children:a.jsx(d,{})})]})})}},2232:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(9510),n=s(8693),r=s(339),i=s(451);function o(){return(0,a.jsxs)("div",{children:[a.jsx(n.Z,{}),a.jsx(r.Z,{}),a.jsx(i.Z,{})]})}},339:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(9510);s(1159);let n=({children:e})=>a.jsx("div",{children:e})},451:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(9510),n=s(7710);let r=()=>(0,a.jsxs)("header",{className:"flex justify-between items-center p-4 bg-white ",children:[a.jsx("h1",{className:"text-xl text-black",children:"Welcome Jane \uD83D\uDC4B\uD83C\uDFFD"}),a.jsx("div",{className:"flex gap-4",children:a.jsx(n.default,{src:"/images/header-icons.svg",alt:"header-icons",width:400,height:400})})]}),i=(0,s(8570).createProxy)(String.raw`C:\Users\PAVILION X360 OS 11\Documents\FRONTEND PROJECRS\Trade Connect\tradeconnect\app\dashboard\_components\sideBar.jsx#default`),o=({children:e})=>(0,a.jsxs)("div",{className:"flex h-screen w-full bg-white",children:[a.jsx("div",{className:"fixed left-0 top-0 h-full w-72",children:a.jsx(i,{})}),(0,a.jsxs)("main",{className:"ml-72 flex-1 flex flex-col",children:[a.jsx("div",{className:"sticky top-0 w-full z-10",children:a.jsx(r,{})}),a.jsx("section",{className:"flex-1 overflow-y-auto p-4",children:e})]})]})},8693:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(9510);s(1159);let n=({children:e})=>a.jsx("div",{children:a.jsx("div",{children:e})})}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,356,481,710,650],()=>s(327));module.exports=a})();