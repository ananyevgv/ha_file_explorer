(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfbfc824"],{"0bc6":function(t,e,i){},"0fd9":function(t,e,i){"use strict";var n=i("ade3"),a=i("5530"),s=(i("caad"),i("2532"),i("99af"),i("b64b"),i("ac1f"),i("5319"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0"),i("159b"),i("4b85"),i("2b0e")),o=i("d9f7"),r=i("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(i,n){return i[t+Object(r["x"])(n)]=e(),i}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},p=u("alignContent",(function(){return{type:String,default:null,validator:m}})),g={align:Object.keys(h),justify:Object.keys(v),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,i){var n=b[t];if(null!=i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return n+="-".concat(i),n.toLowerCase()}}var y=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:m}},p),render:function(t,e){var i=e.props,a=e.data,s=e.children,r="";for(var c in i)r+=String(i[c]);var l=y.get(r);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var n=i[t],a=x(e,t,n);a&&l.push(a)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n["a"])(t,"align-".concat(i.align),i.align),Object(n["a"])(t,"justify-".concat(i.justify),i.justify),Object(n["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),y.set(r,l)}(),t(i.tag,Object(o["a"])(a,{staticClass:"row",class:l}),s)}})},"480e":function(t,e,i){"use strict";i("7db0");var n=i("7560");e["a"]=n["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"4bd4":function(t,e,i){"use strict";var n=i("5530"),a=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),o=i("3206");e["a"]=Object(a["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4ec9":function(t,e,i){"use strict";var n=i("6d61"),a=i("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"57c1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("AppBar",{attrs:{color:"light-blue",title:"插件列表"}}),i("v-container",[i("v-list",{attrs:{subheader:"","two-line":""}},[i("v-subheader",{attrs:{inset:""}},[t._v("我的插件")]),t._l(t.mylist,(function(e){return i("v-list-item",{key:e.title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"green lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",[i("a",{staticClass:"text-decoration-none",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1),i("v-list-item-action",[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[i("v-list",t._l(t.items,(function(n,a){return i("v-list-item",{key:a},[i("v-list-item-title",{on:{click:function(i){return t.pullClick(e,n.title)}}},[t._v(t._s(n.title))])],1)})),1)],1)],1)],1)})),i("v-divider",{attrs:{inset:""}}),i("v-subheader",{attrs:{inset:""}},[t._v("收藏插件")]),t._l(t.list,(function(e){return i("v-list-item",{key:e.title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"blue lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",[i("a",{staticClass:"text-decoration-none",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1),i("v-list-item-action",[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[i("v-list",t._l(t.items,(function(n,a){return i("v-list-item",{key:a},[i("v-list-item-title",{on:{click:function(i){return t.pullClick(e,n.title)}}},[t._v(t._s(n.title))])],1)})),1)],1)],1)],1)})),i("v-divider",{attrs:{inset:""}}),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"red lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),i("v-list-item-content",[i("v-form",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"自定义组件名称",required:""},model:{value:t.pull.domain,callback:function(e){t.$set(t.pull,"domain","string"===typeof e?e.trim():e)},expression:"pull.domain"}})],1),i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-text-field",{attrs:{type:"url",label:"GitHub项目地址",required:""},model:{value:t.pull.url,callback:function(e){t.$set(t.pull,"url","string"===typeof e?e.trim():e)},expression:"pull.url"}})],1)],1)],1)],1),i("v-list-item-action",[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}])},[i("v-list",t._l(t.items,(function(e,n){return i("v-list-item",{key:n},[i("v-list-item-title",{on:{click:function(i){return t.gitClick(e.title)}}},[t._v(t._s(e.title))])],1)})),1)],1)],1)],1)],2),i("v-card",{staticStyle:{padding:"20px"},attrs:{elevation:"2"}},[i("v-card-text",{staticClass:"text--primary"},[i("p",{staticClass:"text-h6"},[t._v(" 注意：不会用千万别点下面的按钮，否则可能造成数据异常 ")]),t._v(" 修改pip的镜像源、github的域名解析、修改hacs的资源下载链接 ")]),i("v-card-actions",[i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.updateSourceClick("pip")}}},[t._v(" pip ")]),i("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.updateSourceClick("github")}}},[t._v(" GitHub ")]),i("v-btn",{attrs:{color:"orange",text:""},on:{click:function(e){return t.updateSourceClick("hacs")}}},[t._v(" HACS ")])],1)],1)],1)],1)},a=[],s=i("5530"),o=(i("ac1f"),i("5319"),i("2f62")),r={data:function(){return{mylist:[{domain:"ha_cloud_music",name:"网易云音乐",url:"https://github.com/shaonianzhentan/ha_cloud_music"},{domain:"conversation",name:"语音小助手",url:"https://github.com/shaonianzhentan/conversation"},{domain:"ha_baidu_map",name:"百度地图",url:"https://github.com/shaonianzhentan/ha_baidu_map"},{domain:"ha_sidebar",name:"侧边栏管理",url:"https://github.com/shaonianzhentan/ha_sidebar"},{domain:"ha_file_explorer",name:"文件管理",url:"https://github.com/shaonianzhentan/ha_file_explorer"},{domain:"ha_qqmail",name:"QQ邮箱通知",url:"https://github.com/shaonianzhentan/ha_qqmail"},{domain:"xiaomi_tv",name:"小米电视",url:"https://github.com/shaonianzhentan/xiaomi_tv"},{domain:"hf_weather",name:"和风天气",url:"https://github.com/shaonianzhentan/hf_weather"}],list:[{domain:"sonoff",name:"SonoffLAN - 易微联",url:"https://github.com/AlexxIT/SonoffLAN"},{domain:"xiaomi_miio_airconditioningcompanion",name:"小米空调伴侣",url:"https://github.com/syssi/xiaomi_airconditioningcompanion"},{domain:"hacs",name:"HACS - 插件商店",url:"https://github.com/hacs/integration"},{domain:"havcs",name:"HAVCS - 智能音箱服务",url:"https://github.com/cnk700i/havcs"},{domain:"nodered",name:"hass-node-red",url:"https://github.com/zachowj/hass-node-red"},{domain:"ble_monitor",name:"米家蓝牙设备监听",url:"https://github.com/custom-components/ble_monitor"},{domain:"xiaomi_miot",name:"Xiaomi Miot - 小米云端设备",url:"https://github.com/al-one/hass-xiaomi-miot"}],pull:{domain:"",url:""},items:[{title:"github.com.cnpmjs.org"},{title:"hub.fastgit.org"},{title:"github.com"}]}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["fetchApi"])),{},{gitClick:function(t){this.pullClick(this.pull,t)},pullClick:function(t,e){var i=this,n=t.domain,a=t.url;if(!n||!a)return this.$toast("请输入组件名称和项目地址");console.log(e),this.fetchApi({type:"update",domain:n,url:a.replace("https://github.com/","https://".concat(e,"/"))}).then((function(t){0===t.code&&i.$toast(t.msg)}))},updateSourceClick:function(t){var e=this;top.confirm("会修改系统里相关文件配置，不懂千万别确定")&&this.fetchApi({type:"update-source",url:t}).then((function(t){e.$toast(t.msg)}))}})},c=r,l=i("2877"),u=i("6544"),d=i.n(u),h=i("8336"),f=i("b0af"),v=i("99d9"),m=i("ade3"),p=(i("a9e3"),i("b64b"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0"),i("caad"),i("159b"),i("2ca0"),i("4b85"),i("2b0e")),g=i("d9f7"),b=i("80d2"),x=["sm","md","lg","xl"],y=function(){return x.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),_=function(){return x.reduce((function(t,e){return t["offset"+Object(b["x"])(e)]={type:[String,Number],default:null},t}),{})}(),k=function(){return x.reduce((function(t,e){return t["order"+Object(b["x"])(e)]={type:[String,Number],default:null},t}),{})}(),C={col:Object.keys(y),offset:Object.keys(_),order:Object.keys(k)};function O(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var w=new Map,j=p["a"].extend({name:"v-col",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},_),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,n=e.data,a=e.children,s=(e.parent,"");for(var o in i)s+=String(i[o]);var r=w.get(s);return r||function(){var t,e;for(e in r=[],C)C[e].forEach((function(t){var n=i[t],a=O(e,t,n);a&&r.push(a)}));var n=r.some((function(t){return t.startsWith("col-")}));r.push((t={col:!n||!i.cols},Object(m["a"])(t,"col-".concat(i.cols),i.cols),Object(m["a"])(t,"offset-".concat(i.offset),i.offset),Object(m["a"])(t,"order-".concat(i.order),i.order),Object(m["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),w.set(s,r)}(),t(i.tag,Object(g["a"])(n,{class:r}),a)}}),T=i("a523"),A=i("ce7e"),S=i("4bd4"),I=i("132d"),$=i("8860"),V=i("da13"),z=i("1800"),B=i("8270"),L=i("5d23"),E=i("e449"),H=i("0fd9"),M=i("e0c7"),D=i("8654"),W=Object(l["a"])(c,n,a,!1,null,"2fac8267",null);e["default"]=W.exports;d()(W,{VBtn:h["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCol:j,VContainer:T["a"],VDivider:A["a"],VForm:S["a"],VIcon:I["a"],VList:$["a"],VListItem:V["a"],VListItemAction:z["a"],VListItemAvatar:B["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VMenu:E["a"],VRow:H["a"],VSubheader:M["a"],VTextField:D["a"]})},6566:function(t,e,i){"use strict";var n=i("9bf2").f,a=i("7c73"),s=i("e2cc"),o=i("0366"),r=i("19aa"),c=i("2266"),l=i("7dd0"),u=i("2626"),d=i("83ab"),h=i("f183").fastKey,f=i("69f3"),v=f.set,m=f.getterFor;t.exports={getConstructor:function(t,e,i,l){var u=t((function(t,n){r(t,u,e),v(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&c(n,t[l],{that:t,AS_ENTRIES:i})})),f=m(e),p=function(t,e,i){var n,a,s=f(t),o=g(t,e);return o?o.value=i:(s.last=o={index:a=h(e,!0),key:e,value:i,previous:n=s.last,next:void 0,removed:!1},s.first||(s.first=o),n&&(n.next=o),d?s.size++:t.size++,"F"!==a&&(s.index[a]=o)),t},g=function(t,e){var i,n=f(t),a=h(e);if("F"!==a)return n.index[a];for(i=n.first;i;i=i.next)if(i.key==e)return i};return s(u.prototype,{clear:function(){var t=this,e=f(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,i=f(e),n=g(e,t);if(n){var a=n.next,s=n.previous;delete i.index[n.index],n.removed=!0,s&&(s.next=a),a&&(a.previous=s),i.first==n&&(i.first=a),i.last==n&&(i.last=s),d?i.size--:e.size--}return!!n},forEach:function(t){var e,i=f(this),n=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),s(u.prototype,i?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&n(u.prototype,"size",{get:function(){return f(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",a=m(e),s=m(n);l(t,e,(function(t,e){v(this,{type:n,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},"6d61":function(t,e,i){"use strict";var n=i("23e7"),a=i("da84"),s=i("94ca"),o=i("6eeb"),r=i("f183"),c=i("2266"),l=i("19aa"),u=i("861d"),d=i("d039"),h=i("1c7e"),f=i("d44e"),v=i("7156");t.exports=function(t,e,i){var m=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),g=m?"set":"add",b=a[t],x=b&&b.prototype,y=b,_={},k=function(t){var e=x[t];o(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:function(t,i){return e.call(this,0===t?0:t,i),this})},C=s(t,"function"!=typeof b||!(p||x.forEach&&!d((function(){(new b).entries().next()}))));if(C)y=i.getConstructor(e,t,m,g),r.REQUIRED=!0;else if(s(t,!0)){var O=new y,w=O[g](p?{}:-0,1)!=O,j=d((function(){O.has(1)})),T=h((function(t){new b(t)})),A=!p&&d((function(){var t=new b,e=5;while(e--)t[g](e,e);return!t.has(-0)}));T||(y=e((function(e,i){l(e,y,t);var n=v(new b,e,y);return void 0!=i&&c(i,n[g],{that:n,AS_ENTRIES:m}),n})),y.prototype=x,x.constructor=y),(j||A)&&(k("delete"),k("has"),m&&k("get")),(A||w)&&k(g),p&&x.clear&&delete x.clear}return _[t]=y,n({global:!0,forced:y!=b},_),f(y,t),p||i.setStrong(y,t,m),y}},e0c7:function(t,e,i){"use strict";var n=i("5530"),a=(i("0bc6"),i("7560")),s=i("58df");e["a"]=Object(s["a"])(a["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(n["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},e449:function(t,e,i){"use strict";var n=i("ade3"),a=i("2909"),s=i("5530"),o=(i("a9e3"),i("7db0"),i("a630"),i("3ca3"),i("99af"),i("498a"),i("caad"),i("2532"),i("ee6f"),i("480e")),r=i("4ad4"),c=i("16b7"),l=i("b848"),u=i("f573"),d=i("e4d3"),h=i("a236"),f=i("f2e7"),v=i("7560"),m=i("a293"),p=i("dc22"),g=i("58df"),b=i("d9bd"),x=i("80d2"),y=Object(g["a"])(l["a"],c["a"],u["a"],d["a"],h["a"],f["a"],v["a"]);e["a"]=y.extend({name:"v-menu",directives:{ClickOutside:m["a"],Resize:p["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(x["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(x["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(x["g"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(x["g"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(x["g"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(x["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==x["s"].tab){if(t.keyCode===x["s"].down)this.nextTile();else if(t.keyCode===x["s"].up)this.prevTile();else if(t.keyCode===x["s"].end)this.lastTile();else if(t.keyCode===x["s"].home)this.firstTile();else{if(t.keyCode!==x["s"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=r["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(s["a"])(Object(s["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=u["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(a["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(s["a"])(Object(s["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(s["a"])(Object(s["a"])(Object(s["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(n["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===x["s"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[x["s"].up,x["s"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},e4d3:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-cfbfc824.0ce7418d.js.map