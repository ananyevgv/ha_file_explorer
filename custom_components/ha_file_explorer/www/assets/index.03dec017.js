var J=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var M=(l,t,s)=>t in l?J(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,L=(l,t)=>{for(var s in t||(t={}))X.call(t,s)&&M(l,s,t[s]);if(q)for(var s of q(t))Y.call(t,s)&&M(l,s,t[s]);return l},z=(l,t)=>Q(l,W(t));import{d as A,r as x,a as n,o as p,c as g,w as e,b as a,e as E,f as P,g as I,F as N,h as _,u as S,t as c,i,j,k as B,l as Z,m as D,n as H,p as R,_ as ee}from"./index.daa050d6.js";import{l as r,_ as te}from"./AppLayout.75c78307.js";const ae={class:"va-table"},ne=["href"],le={key:1},oe=_(" OK "),se=A({name:"VersionInfo",props:["ok"],setup(l){const t=l;S();const s="File Explorer",d=x(!0),b=new URLSearchParams(location.search),V=x([{name:"Version",value:b.get("v")||"dev"},{name:"Author",value:"shaonianzhentan"},{name:"Link",value:"https://github.com/shaonianzhentan/ha_file_explorer",type:"link"},{name:"UI",value:"https://vuestic.dev",type:"link"},{name:"Icon",value:"https://unpkg.com/@mdi/font@latest/preview.html",type:"link"},{name:"Bilibili",value:"https://space.bilibili.com/39523884",type:"link"},{name:"HA notes",value:"https://ha.jiluxinqing.com",type:"link"}]),m=async()=>{t.ok({})};return(v,y)=>{const f=n("va-button"),h=n("va-modal");return p(),g(h,{modelValue:d.value,"onUpdate:modelValue":y[0]||(y[0]=o=>d.value=o),title:s,"hide-default-actions":!0},{footer:e(()=>[a(f,{onClick:m},{default:e(()=>[oe]),_:1})]),default:e(()=>[E("table",ae,[E("tbody",null,[(p(!0),P(N,null,I(V.value,o=>(p(),P("tr",{key:o.name},[E("td",null,c(o.name),1),E("td",null,[o.type==="link"?(p(),P("a",{key:0,href:o.value,target:"_blank"},c(o.value),9,ne)):(p(),P("span",le,c(o.value),1))])]))),128))])])]),_:1},8,["modelValue"])}}}),ie={},G=A(z(L({},ie),{name:"CreateFile",props:["type","ok","cancel","app"],setup(l){const t=l,s=S(),d=t.type==="file",b=d?r.file:r.folder,V=t.app(),m=x(""),v=x(!0),y=()=>{t.cancel()},f=async()=>{if(!m.value)return;const h=s.getters.absolutePath(m.value);let o=await j.service.createHassFile(d?"file":"folder",h);V.$toast(o.msg),!(o.code>0)&&(s.dispatch("reloadFileList"),t.ok({}))};return(h,o)=>{const u=n("va-input"),$=n("va-button"),C=n("va-modal");return p(),g(C,{modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=w=>v.value=w),title:i(b),"hide-default-actions":!0},{footer:e(()=>[a($,{outline:"",onClick:y,style:{"margin-right":"20px"}},{default:e(()=>[_(c(i(r).cancel),1)]),_:1}),a($,{onClick:f,style:{"margin-left":"20px"}},{default:e(()=>[_(c(i(r).confirm),1)]),_:1})]),default:e(()=>[a(u,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=w=>m.value=w),modelModifiers:{trim:!0},placeholder:i(r).newName(i(b))},null,8,["modelValue","placeholder"])]),_:1},8,["modelValue","title"])}}})),ce={},K=A(z(L({},ce),{name:"UploadFile",props:["type","ok","cancel","app"],setup(l){const t=l,s=S(),d=t.type==="file",b=`${r.upload} ${d?r.file:r.folder}`,V=t.app(),m=x([]),v=x(!0),y=o=>{const u=[];for(let $ of o.target.files)u.push($);m.value=u},f=()=>{t.cancel()},h=async()=>{m.value.length!==0&&Promise.all(m.value.map(o=>{const u=s.getters.absolutePath(d?o.name:o.webkitRelativePath);return j.service.uploadFile(u,o)})).then(o=>{V.$toast(`\u6210\u529F\u4E0A\u4F20${o.length}\u6587\u4EF6`),s.dispatch("reloadFileList"),t.ok({})})};return(o,u)=>{const $=n("va-progress-bar"),C=n("va-alert"),w=n("va-file-upload"),F=n("va-button"),k=n("va-modal");return p(),g(k,{modelValue:v.value,"onUpdate:modelValue":u[1]||(u[1]=U=>v.value=U),title:b,"hide-default-actions":!0},{footer:e(()=>[a(F,{disabled:i(s).state.loading,outline:"",onClick:f,style:{"margin-right":"20px"}},{default:e(()=>[_(c(i(r).cancel),1)]),_:1},8,["disabled"]),a(F,{disabled:i(s).state.loading,onClick:h,style:{"margin-left":"20px"}},{default:e(()=>[_(c(i(r).confirm),1)]),_:1},8,["disabled"])]),default:e(()=>[i(s).state.loading?(p(),g($,{key:0,indeterminate:""})):B("",!0),a(C,{color:"danger",class:"mb-4"},{default:e(()=>[_(c(i(r).uploadTips),1)]),_:1}),d?(p(),g(w,{key:1,disabled:i(s).state.loading,modelValue:m.value,"onUpdate:modelValue":u[0]||(u[0]=U=>m.value=U)},null,8,["disabled","modelValue"])):(p(),P("input",{key:2,type:"file",onChange:y,webkitdirectory:""},null,32))]),_:1},8,["modelValue"])}}})),re={},O=A(z(L({},re),{name:"RenameFile",props:["type","name","ok","cancel","app"],setup(l){const t=l,s=S(),d=t.type==="file",b=d?r.file:r.folder,V=Z(()=>{if(d)return t.name;const u=s.getters.absolutePath(t.name).split("/");return u.splice(u.length-1,1),u[u.length-1]}),m=t.app(),v=x(""),y=x(!0),f=()=>{t.cancel()},h=async()=>{if(!v.value)return;let o=s.getters.absolutePath(t.name),u=s.getters.absolutePath(v.value);if(!d){const C=o.split("/");C.splice(C.length-1,1),o=C.join("/"),C[C.length-1]=v.value,u=C.join("/")}let $=await j.service.rename(o,u);m.$toast($.msg),!($.code>0)&&(s.dispatch("reloadFileList",d?"":u),t.ok({}))};return(o,u)=>{const $=n("va-alert"),C=n("va-input"),w=n("va-button"),F=n("va-modal");return p(),g(F,{modelValue:y.value,"onUpdate:modelValue":u[1]||(u[1]=k=>y.value=k),title:i(b),"hide-default-actions":!0},{footer:e(()=>[a(w,{outline:"",onClick:f,style:{"margin-right":"20px"}},{default:e(()=>[_(c(i(r).cancel),1)]),_:1}),a(w,{onClick:h,style:{"margin-left":"20px"}},{default:e(()=>[_(c(i(r).confirm),1)]),_:1})]),default:e(()=>[a($,{outline:""},{default:e(()=>[_(c(i(r).currentName)+"\uFF1A"+c(i(V)),1)]),_:1}),a(C,{modelValue:v.value,"onUpdate:modelValue":u[0]||(u[0]=k=>v.value=k),modelModifiers:{trim:!0},placeholder:i(r).newName(i(b))},null,8,["modelValue","placeholder"])]),_:1},8,["modelValue","title"])}}})),ue={computed:L(L({},D(["fileList"])),H(["absolutePath"])),methods:z(L({},R(["reloadFileList"])),{deleteClick(l){parent.confirm(r.deleteConfirm(l))&&this.api.service.deleteHassFile(this.absolutePath(l)).then(t=>{this.reloadFileList(),this.$toast(t.msg)})},renameClick(l){this.$dialog(O,{type:"file",name:l})},editClick(l){this.$router.push({name:"editor",params:{name:l}})},addClick(){this.$dialog(G,{type:"file"})},uploadClick(){this.$dialog(K,{type:"file"})}})},de=A(z(L({},ue),{name:"FileList",setup(l){return(t,s)=>{const d=n("va-button"),b=n("va-button-group"),V=n("va-button-dropdown"),m=n("va-card-title"),v=n("mdi-icon"),y=n("va-avatar"),f=n("va-list-item-section"),h=n("va-list-item-label"),o=n("va-chip"),u=n("va-list-item"),$=n("va-list"),C=n("va-card-content"),w=n("va-card");return p(),g(w,null,{default:e(()=>[a(m,null,{default:e(()=>[_(c(i(r).file)+" ",1),a(V,{outline:"",size:"small"},{default:e(()=>[a(b,{size:"small"},{default:e(()=>[a(d,{onClick:t.uploadClick},{default:e(()=>[_(c(i(r).upload),1)]),_:1},8,["onClick"]),a(d,{onClick:t.addClick},{default:e(()=>[_(c(i(r).add),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),a(C,null,{default:e(()=>[a($,{style:{"padding-top":"0"}},{default:e(()=>[(p(!0),P(N,null,I(t.fileList,(F,k)=>(p(),g(u,{key:k},{default:e(()=>[a(f,{avatar:""},{default:e(()=>[a(y,{color:"var(--va-primary)"},{default:e(()=>[a(v,{name:F.icon},null,8,["name"])]),_:2},1024)]),_:2},1024),a(f,null,{default:e(()=>[a(h,null,{default:e(()=>[_(c(F.name),1)]),_:2},1024),a(h,{caption:""},{default:e(()=>[_(c(F.time)+" ",1),F.size?(p(),g(o,{key:0,flat:"",size:"small"},{default:e(()=>[_(c(F.size),1)]),_:2},1024)):B("",!0)]),_:2},1024)]),_:2},1024),a(f,{icon:""},{default:e(()=>[a(V,{size:"small"},{default:e(()=>[a(b,{outline:"",size:"small"},{default:e(()=>[a(d,{onClick:U=>t.renameClick(F.name)},{default:e(()=>[_(c(i(r).rename),1)]),_:2},1032,["onClick"]),a(d,{onClick:U=>t.deleteClick(F.name)},{default:e(()=>[_(c(i(r).delete),1)]),_:2},1032,["onClick"]),a(d,{onClick:U=>t.editClick(F.name)},{default:e(()=>[_(c(i(r).edit),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}}));const _e=["src","onError"],pe={data(){return{brands:new Array}},computed:L(L({},D(["folderList","path"])),H(["pathList"])),methods:z(L({},R(["getFileList"])),{showClick(l){this.getFileList(l.name)},addClick(){this.$dialog(G,{type:"dir"})},uploadClick(){this.$dialog(K,{type:"dir"})},deleteClick(){const{pathList:l}=this,{name:t}=l[l.length-1];parent.confirm(`\u786E\u5B9A\u5220\u9664\u6587\u4EF6\u5939\u3010${t}\u3011\uFF1F`)&&this.api.service.deleteHassFile(this.path).then(s=>{this.getFileList(l.length-2),this.$toast(s.msg)})},renameClick(){this.$dialog(O,{type:"dir",name:""})},loadSrc(l){return this.brands.includes(l)?"https://brands.home-assistant.io/_/homeassistant/icon.png":l},loadIcon(l,t){this.brands.push(t),l.target.src="https://brands.home-assistant.io/_/homeassistant/icon.png"}})},me=A(z(L({},pe),{name:"FolderList",setup(l){return(t,s)=>{const d=n("va-button"),b=n("va-button-group"),V=n("va-button-dropdown"),m=n("va-card-title"),v=n("mdi-icon"),y=n("va-avatar"),f=n("va-list-item-section"),h=n("va-list-item-label"),o=n("va-chip"),u=n("va-icon"),$=n("va-list-item"),C=n("va-list"),w=n("va-card-content"),F=n("va-card");return p(),g(F,null,{default:e(()=>[a(m,null,{default:e(()=>[_(c(i(r).folder)+" ",1),a(V,{outline:"",size:"small"},{default:e(()=>[a(b,{size:"small"},{default:e(()=>[t.pathList.length>1?(p(),g(d,{key:0,onClick:t.renameClick},{default:e(()=>[_(c(i(r).rename),1)]),_:1},8,["onClick"])):B("",!0),a(d,{onClick:t.uploadClick},{default:e(()=>[_(c(i(r).upload),1)]),_:1},8,["onClick"]),t.pathList.length>1?(p(),g(d,{key:1,onClick:t.deleteClick},{default:e(()=>[_(c(i(r).delete),1)]),_:1},8,["onClick"])):B("",!0),a(d,{onClick:t.addClick},{default:e(()=>[_(c(i(r).add),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),a(w,null,{default:e(()=>[a(C,{style:{"padding-top":"0"}},{default:e(()=>[(p(!0),P(N,null,I(t.folderList,(k,U)=>(p(),g($,{key:U},{default:e(()=>[a(f,{avatar:""},{default:e(()=>[k.iconType=="img"?(p(),P("img",{key:0,class:"brands",src:t.loadSrc(k.icon),onError:T=>t.loadIcon(T,k.icon)},null,40,_e)):(p(),g(y,{key:1,color:"var(--va-primary)"},{default:e(()=>[a(v,{name:k.icon},null,8,["name"])]),_:2},1024))]),_:2},1024),a(f,null,{default:e(()=>[a(h,null,{default:e(()=>[_(c(k.name),1)]),_:2},1024),a(h,{caption:""},{default:e(()=>[_(c(k.time)+" ",1),k.size?(p(),g(o,{key:0,flat:"",size:"small"},{default:e(()=>[_(c(k.size),1)]),_:2},1024)):B("",!0)]),_:2},1024)]),_:2},1024),a(f,{icon:""},{default:e(()=>[a(u,{name:"remove_red_eye",color:"gray",onClick:T=>t.showClick(k)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}}));var ve=ee(me,[["__scopeId","data-v-6c86ffe1"]]);const fe={class:"row"},he={class:"flex md6"},ke={class:"flex md6"},ge={computed:L({},H(["pathList"])),created(){this.changePathClick(0)},methods:z(L({},R(["getFileList"])),{changePathClick(l){this.getFileList(l)},versionClick(){this.$dialog(se)}})},$e=A(z(L({},ge),{name:"index",setup(l){return(t,s)=>{const d=n("va-button"),b=n("va-breadcrumbs-item"),V=n("va-breadcrumbs"),m=n("va-card-title"),v=n("va-card"),y=n("va-backtop");return p(),g(te,{class:"views-index"},{left:e(()=>[a(d,{color:"#fff",flat:"",rounded:!1,onClick:t.versionClick},{default:e(()=>[_(c(i(r).name),1)]),_:1},8,["onClick"])]),right:e(()=>[]),default:e(()=>[a(v,null,{default:e(()=>[a(m,null,{default:e(()=>[a(V,null,{default:e(()=>[(p(!0),P(N,null,I(t.pathList,(f,h)=>(p(),g(b,{label:f.name,key:h,onClick:o=>t.changePathClick(h)},null,8,["label","onClick"]))),128))]),_:1})]),_:1})]),_:1}),E("div",fe,[E("div",he,[a(ve)]),E("div",ke,[a(de)])]),a(y,{target:"#va-app-bar-shadow","vertical-offset":"20px","horizontal-offset":"20px","visibility-height":1,speed:50})]),_:1})}}}));export{$e as default};
