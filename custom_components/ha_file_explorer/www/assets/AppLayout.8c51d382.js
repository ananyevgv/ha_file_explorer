var B=Object.defineProperty,k=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var c=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(e,t)=>{for(var a in t||(t={}))N.call(t,a)&&c(e,a,t[a]);if(d)for(var a of d(t))A.call(t,a)&&c(e,a,t[a]);return e},p=(e,t)=>k(e,y(t));import{n as $,d as S,a as n,o as x,f as Q,b as o,w as u,s as i,h as m,t as _,i as h,e as l,v as T,x as V}from"./index.c7ccf3e4.js";const v={ru:{name:"Файловый менеджер",file:"файл",folder:"папка",upload:"выгрузить",add:"добавить",delete:"удалить",rename:"Переименовать",edit:"правка",browse:"Просмотр",entities:"объект",command:"команда",save:"сохранить",cancel:"отменить",confirm:"потвердить",currentName:"Текушее имя",uploadTips:"Примечание: файлы с таким же именем будут перезаписаны",newName(e){return`New ${e} Name`},deleteConfirm(e){return`OK to delete this file\u3010${e}\u3011\uFF1F`}},en:{name:"File Explorer",file:"File",folder:"Folder",upload:"Upload",add:"Add",delete:"Delete",rename:"Rename",edit:"Edit",browse:"Browse",entities:"Entities",command:"Command",save:"Save",cancel:"Cancel",confirm:"Confirm",currentName:"Current Name",uploadTips:"Note: files with the same name will be overwritten",newName(e){return`New ${e} Name`},deleteConfirm(e){return`OK to delete this file\u3010${e}\u3011\uFF1F`}},cn:{name:"\u6587\u4EF6\u7BA1\u7406",file:"\u6587\u4EF6",folder:"\u6587\u4EF6\u5939",upload:"\u4E0A\u4F20",add:"\u65B0\u589E",delete:"\u5220\u9664",rename:"\u91CD\u547D\u540D",edit:"\u7F16\u8F91",browse:"\u6D4F\u89C8",entities:"\u5B9E\u4F53",command:"\u547D\u4EE4",save:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",confirm:"\u786E\u5B9A",currentName:"\u5F53\u524D\u540D\u79F0",uploadTips:"\u6CE8\u610F\uFF1A\u76F8\u540C\u540D\u79F0\u6587\u4EF6\u4F1A\u88AB\u8986\u76D6",newName(e){return`\u65B0${e}\u540D\u79F0`},deleteConfirm(e){return`\u786E\u5B9A\u5220\u9664\u6587\u4EF6\u3010${e}\u3011\uFF1F`}}};let f="en";try{const e=parent.document.querySelector("home-assistant");e&&e.hass.language.includes("zh-")&&(f="cn")}catch{}const F=f==="cn"?v.cn:v.en;const z={class:"wrapper"},L=l("div",{class:"spacer"},null,-1),q={id:"va-app-bar-shadow"},K={class:"loading"},O={computed:r({},$(["loading"])),methods:{showQuickBarClick(e){this.api.showQuickBar(e)},menuClick(){this.api.fireEvent("hass-toggle-menu")}}},j=S(p(r({},O),{name:"AppLayout",setup(e){return(t,a)=>{const w=n("mdi-icon"),s=n("va-button"),g=n("va-button-group"),C=n("va-button-dropdown"),E=n("va-app-bar"),b=n("va-progress-bar");return x(),Q("div",z,[o(E,{"shadow-on-scroll":"","shadow-color":"primary",target:"#va-app-bar-shadow",style:{"z-index":"1","--va-app-bar-height":"56px"}},{default:u(()=>[o(s,{round:!0,onClick:t.menuClick,style:{"margin-left":"20px"}},{default:u(()=>[o(w,{name:"mdi-home-assistant",style:{color:"white"}})]),_:1},8,["onClick"]),i(t.$slots,"left"),L,i(t.$slots,"right"),o(C,{style:{"margin-right":"10px"}},{default:u(()=>[o(g,null,{default:u(()=>[o(s,{onClick:a[0]||(a[0]=D=>t.showQuickBarClick("e"))},{default:u(()=>[m(_(h(F).entities),1)]),_:1}),o(s,{onClick:a[1]||(a[1]=D=>t.showQuickBarClick("c"))},{default:u(()=>[m(_(h(F).command),1)]),_:1})]),_:1})]),_:1})]),_:3}),l("div",q,[i(t.$slots,"default"),l("div",K,[T(o(b,{indeterminate:""},null,512),[[V,t.loading]])])])])}}}));export{j as _,F as l};
