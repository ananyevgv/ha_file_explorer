(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4e01c08"],{"0bc6":function(t,e,i){},"480e":function(t,e,i){"use strict";i("7db0");var n=i("7560");e["a"]=n["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},e0c7:function(t,e,i){"use strict";var n=i("5530"),s=(i("0bc6"),i("7560")),a=i("58df");e["a"]=Object(a["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(n["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},e449:function(t,e,i){"use strict";i("99af"),i("7db0"),i("a630"),i("caad"),i("c975"),i("a9e3"),i("2532"),i("3ca3"),i("498a");var n=i("ade3"),s=i("2909"),a=i("5530"),o=(i("ee6f"),i("480e")),c=i("4ad4"),r=i("16b7"),l=i("b848"),u=i("75eb"),h=i("f573"),d=i("e4d3"),f=i("a236"),v=i("f2e7"),m=i("7560"),p=i("a293"),b=i("dc22"),g=i("58df"),x=i("d9bd"),T=i("80d2"),A=Object(g["a"])(l["a"],r["a"],u["a"],h["a"],d["a"],f["a"],v["a"],m["a"]);e["a"]=A.extend({name:"v-menu",directives:{ClickOutside:p["a"],Resize:b["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(T["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(T["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(T["g"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(T["g"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(T["g"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(T["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(x["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==T["s"].tab){if(t.keyCode===T["s"].down)this.nextTile();else if(t.keyCode===T["s"].up)this.prevTile();else{if(t.keyCode!==T["s"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=c["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(a["a"])(Object(a["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=h["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(s["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(a["a"])(Object(a["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(a["a"])(Object(a["a"])(Object(a["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(n["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown:function(t){var e=this;if(t.keyCode===T["s"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[T["s"].up,T["s"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},e4d3:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},ee6f:function(t,e,i){},f122:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("AppBar",{attrs:{color:"deep-purple",title:"云备份"}}),i("v-card",{attrs:{elevation:"2"}},[i("v-list",{attrs:{subheader:"","two-line":""}},[i("v-subheader",{attrs:{inset:""},on:{click:t.loadData}},[t._v("文件列表")]),t._l(t.fileList,(function(e){return i("v-list-item",{key:e.name},[i("v-list-item-avatar",[i("v-icon",{class:e.color,attrs:{dark:""},domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name.replace("HomeAssistant/","")))]),i("v-list-item-subtitle",[i("span",{staticClass:"text--disabled"},[t._v(t._s(e.edit))]),i("span",{staticClass:"font-weight-light"},[t._v(" — "+t._s(t._f("fileSizeFormat")(e.sizeName)))])])],1),i("v-list-item-action",[i("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",s,!1),n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[i("v-list",[i("v-list-item",{on:{click:function(i){return t.restoreClick(e)}}},[i("v-list-item-title",[t._v("还原")])],1),i("v-list-item",{on:{click:function(i){return t.deleteClick(e)}}},[i("v-list-item-title",[t._v("删除")])],1),i("v-list-item",{attrs:{href:e.url,target:"_blank"}},[i("v-list-item-title",[t._v("下载文件")])],1)],1)],1)],1)],1)}))],2)],1),i("RestoreDialog",{ref:"RestoreDialog"})],1)},s=[],a=(i("99af"),i("d81d"),i("b0c0"),i("a9e3"),i("d3b7"),i("5530")),o=i("2f62"),c={components:{RestoreDialog:function(){return i.e("chunk-41ad3002").then(i.bind(null,"b828"))}},data:function(){return{fileList:[]}},activated:function(){this.loadData()},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["fetchApi"])),{},{loadData:function(){var t=this;this.fetchApi({type:"qn-list"}).then((function(e){var i=e.data;console.log(i),t.fileList=i.list.items.map((function(t){return{name:t.key,edit:new Date(Number(String(t.putTime).substr(0,13))).toLocaleString(),sizeName:t.fsize,color:"blue",icon:"mdi-file",url:"".concat(i.download).concat(t.key)}}))}))},restoreClick:function(t){console.log(t),this.$refs["RestoreDialog"].show(t.url)},deleteClick:function(t){var e=this;this.fetchApi({type:"qn-delete",key:t.name}).then((function(t){var i=t.msg;e.$toast(i),e.loadData()}))}})},r=c,l=i("2877"),u=i("6544"),h=i.n(u),d=i("8336"),f=i("b0af"),v=i("a523"),m=i("132d"),p=i("8860"),b=i("da13"),g=i("1800"),x=i("8270"),T=i("5d23"),A=i("e449"),k=i("e0c7"),C=Object(l["a"])(r,n,s,!1,null,"d9412948",null);e["default"]=C.exports;h()(C,{VBtn:d["a"],VCard:f["a"],VContainer:v["a"],VIcon:m["a"],VList:p["a"],VListItem:b["a"],VListItemAction:g["a"],VListItemAvatar:x["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMenu:A["a"],VSubheader:k["a"]})}}]);
//# sourceMappingURL=chunk-b4e01c08.23f002d2.js.map