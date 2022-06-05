var v=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))y.call(t,a)&&u(e,a,t[a]);return e},h=(e,t)=>k(e,w(t));import{d as p,n as b,x as D,a as f,o as g,c as $,w as o,b as r,h as c,t as d,i as m,e as B}from"./index.daa050d6.js";import{_ as V,l as _}from"./AppLayout.75c78307.js";const x=B("div",{id:"editor"},null,-1),K=p({data(){return{name:""}},computed:i({},b(["absolutePath"])),created(){},mounted(){this.loadData(),document.addEventListener("keydown",this.saveKeydown,!1)},beforeRouteLeave(){document.removeEventListener("keydown",this.saveKeydown)},methods:{loadData(){const{name:e}=this.$route.params;if(!e)return this.$router.replace("/");this.name=e;const t=this.absolutePath(e),a=document.querySelector("#editor");a.innerHTML="",this.api.service.getHassFileContent(t).then(({code:n,data:s})=>{n>0||(a.textContent=s,window.editor=window.ace.edit("editor",{theme:"ace/theme/chrome",mode:D(this.name)}),document.body.scrollIntoView())})},cancelClick(){this.$router.back()},saveClick(){const e=this.absolutePath(this.name);let t=window.editor.getValue();this.api.service.setHassFileContent(e,t).then(a=>{this.$toast(a.msg)})},saveKeydown(e){e.ctrlKey&&e.key==="s"&&(this.$toast("\u6B63\u5728\u4FDD\u5B58\u4E2D..."),this.saveClick(),e.preventDefault())}}}),H=p(h(i({},K),{name:"editor",setup(e){return(t,a)=>{const n=f("va-chip"),s=f("va-button");return g(),$(V,{class:"views-editor"},{left:o(()=>[r(n,{flat:"",color:"#fff"},{default:o(()=>[c(d(t.name),1)]),_:1})]),right:o(()=>[r(s,{color:"#fff",flat:"",rounded:!1,onClick:t.saveClick},{default:o(()=>[c(d(m(_).save),1)]),_:1},8,["onClick"]),r(s,{color:"#fff",flat:"",rounded:!1,onClick:t.cancelClick},{default:o(()=>[c(d(m(_).cancel),1)]),_:1},8,["onClick"])]),default:o(()=>[x]),_:1})}}}));export{H as default};
