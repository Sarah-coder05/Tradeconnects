(()=>{var e={};e.id=633,e.ids=[633],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4615:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>o}),s(4102),s(7764),s(1888);var a=s(3191),n=s(8716),r=s(7922),i=s.n(r),l=s(5231),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);s.d(t,d);let o=["",{children:["dashboard",{children:["subscription",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4102)),"C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\dashboard\\subscription\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,1888)),"C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\PAVILION X360 OS 11\\Documents\\FRONTEND PROJECRS\\Trade Connect\\tradeconnect\\app\\dashboard\\subscription\\page.jsx"],u="/dashboard/subscription/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/dashboard/subscription/page",pathname:"/dashboard/subscription",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},5976:(e,t,s)=>{Promise.resolve().then(s.bind(s,8125))},655:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var a=s(326),n=s(434),r=s(282),i=s.n(r),l=s(5047);function d(){let e=(0,l.useRouter)();return a.jsx("button",{onClick:()=>{i().destroy(null,"auth",{path:"/"}),e.push("/home")},style:{width:"100%",padding:"8px"},children:"Logout"})}var o=s(6226);let c=[{component:n.default,name:"Dashboard",to:"/dashboard/home",activeIcon:"/images/category.svg"},{component:n.default,name:"Search Vendors",to:"/dashboard/search",activeIcon:"/images/people.svg"},{component:n.default,name:"Messages",to:"/dashboard/messages",activeIcon:"/images/directbox-notif.svg"},{component:n.default,name:"Subscription",to:"/dashboard/subscription",activeIcon:"/images/wallet-money.svg"},{component:n.default,name:"Transactions",to:"/dashboard/transactions",activeIcon:"/images/gift.svg"},{component:n.default,name:"Notification",to:"/dashboard/notifications",activeIcon:"/images/notification.svg"},{component:n.default,name:"Settings",to:"/dashboard/settings",activeIcon:"/images/setting-2.svg"}],u=()=>{let e=(0,l.usePathname)();return a.jsx("div",{className:"border m-3 border-[#EBEBEB] rounded-[10px] h-full",children:(0,a.jsxs)("aside",{className:" flex flex-col",children:[a.jsx(o.default,{src:"/images/trade_connect.svg",width:95,height:90,className:"self-center py-5"}),a.jsx("nav",{className:"flex flex-col p-4",children:c.map((t,s)=>{let r=e===t.to||e.includes(t.to),i=s===c.length-2;return(0,a.jsxs)("div",{children:[a.jsx("div",{className:`${r?"bg-[#992B1C]":""} rounded-md`,children:a.jsx(n.default,{href:t.to,children:(0,a.jsxs)("span",{className:`flex px-3 gap-3 py-2 rounded-md mx-4 my-2 ${r?"bg-utilityBrand":""}`,children:[a.jsx(o.default,{src:t.activeIcon,width:24,height:24}),a.jsx("p",{className:r?"text-white":"text-black",children:t.name})]})},t.name)}),i&&a.jsx("div",{className:"border-b border-[#8E8E8E]"})]},s)})}),a.jsx("div",{className:"pt-44",children:a.jsx(d,{})})]})})}},8125:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(326),n=s(6226);let r=()=>(0,a.jsxs)("header",{className:"flex justify-between items-center p-4 bg-white ",children:[a.jsx("h1",{className:"text-xl text-black",children:"Welcome Jane \uD83D\uDC4B\uD83C\uDFFD"}),a.jsx("div",{className:"flex gap-4",children:a.jsx(n.default,{src:"/images/header-icons.svg",alt:"header-icons",width:400,height:400})})]});var i=s(655);let l=({children:e})=>(0,a.jsxs)("div",{className:"flex h-screen w-full bg-white",children:[a.jsx("div",{className:"fixed left-0 top-0 h-full w-72",children:a.jsx(i.default,{})}),(0,a.jsxs)("main",{className:"ml-72 flex-1 flex flex-col",children:[a.jsx("div",{className:"sticky top-0 w-full z-10",children:a.jsx(r,{})}),a.jsx("section",{className:"flex-1 overflow-y-auto p-4",children:e})]})]});var d=s(7577);let o=function(){let e=["14 Days Trial","Access to Basic Vendor List","Limited Messaging Per Day","Limited Vendor Engagements","Access to Vendors Rating and Reviews"],t=[{type:"monthly",options:[{title:"Free Plan",price:0,featureDescription:"Basic features included in the free plan.",features:[...e]},{title:"Standard Plan",price:10,featureDescription:"Everything in the free plan plus additional standard features.",features:[...e,"Priority Support","Enhanced Vendor Search"]},{title:"Premium Plan",price:20,featureDescription:"Everything in the standard plan plus all premium features.",features:[...e,"Unlimited Messaging","Advanced Vendor Analytics"]}]},{type:"annually",options:[{title:"Free Plan",price:0,featureDescription:"Basic features included in the free plan.",features:[...e]},{title:"Standard Plan",price:100,featureDescription:"Everything in the free plan plus additional standard features.",features:[...e,"Priority Support","Enhanced Vendor Search"]},{title:"Premium Plan",price:200,featureDescription:"Everything in the standard plan plus all premium features.",features:[...e,"Unlimited Messaging","Advanced Vendor Analytics"]}]}],[s,r]=(0,d.useState)("monthly"),i=t.find(e=>e.type===s);return a.jsx(l,{children:(0,a.jsxs)("div",{className:"py-10",children:[(0,a.jsxs)("h1",{className:"text-center font-medium text-xl text-black",children:["We have got the ",a.jsx("span",{className:"text-[#992B1C]",children:"Perfect"})," Plan for you!"]}),(0,a.jsxs)("div",{className:"flex gap-4 mb-6 my-7",children:[a.jsx("button",{onClick:()=>r("monthly"),className:`p-2 ${"monthly"===s?"bg-[#992B1C] text-white":"bg-gray-200 text-black"} rounded-md `,children:"Monthly"}),a.jsx("button",{onClick:()=>r("annually"),className:`p-2 ${"annually"===s?"bg-[#992B1C] text-white":"bg-gray-200 text-black"} rounded-md `,children:"Annually"})]}),a.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3",children:i.options.map((e,t)=>(0,a.jsxs)("div",{className:"border p-4 rounded-md",children:[a.jsx("div",{children:a.jsx("p",{className:"font-semibold",children:e.title})}),a.jsx("div",{className:"text-lg font-bold my-2",children:(0,a.jsxs)("p",{children:["$",e.price," ",(0,a.jsxs)("span",{className:"text-sm font-normal",children:["Per ","monthly"===s?"Month":"Year"]})]})}),(0,a.jsxs)("div",{children:[a.jsx("p",{className:"font-semibold",children:"Features"}),a.jsx("p",{children:e.featureDescription})]}),a.jsx("div",{className:"mt-4",children:e.features.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx(n.default,{src:"/images/grommet-icons_status-good.svg",alt:"feature icon",width:24,height:24}),a.jsx("p",{children:e})]},t))}),a.jsx("div",{className:"flex bg-[#992B1C] p-3 rounded-md mt-4 cursor-pointer w-max",children:a.jsx("p",{className:"text-white text-center w-full",children:"Get Started"})})]},t))})]})})}},4102:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(8570).createProxy)(String.raw`C:\Users\PAVILION X360 OS 11\Documents\FRONTEND PROJECRS\Trade Connect\tradeconnect\app\dashboard\subscription\page.jsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,356,481,650],()=>s(4615));module.exports=a})();