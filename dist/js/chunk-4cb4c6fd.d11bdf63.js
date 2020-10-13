(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cb4c6fd"],{"1f4d":function(e,t,c){"use strict";var s=c("4db4"),d=c.n(s);d.a},"4db4":function(e,t,c){},f4fa:function(e,t,c){"use strict";c.r(t);var s=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"sun-doc-switch sun-doc-content"},[c("section",[c("h1",[e._v("Switch 开关")]),c("div",{staticClass:"card"},[c("h3",[e._v("引入")]),c("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[c("pre",[c("code",{domProps:{innerHTML:e._s(e.importCode)}})])])]),c("h2",[e._v("代码展示")]),e._l(e.cartList,(function(t,s){return c("div",{key:s,staticClass:"card"},[c("h3",[e._v(e._s(t.title))]),c("p",{domProps:{innerHTML:e._s(t.desc)}}),c("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t.code?c("pre",[c("code",{staticClass:"language-html",domProps:{textContent:e._s(t.code)}})]):e._e(),t.jsCode?c("pre",[c("code",{staticClass:"language-js",domProps:{textContent:e._s(t.jsCode)}})]):e._e()])])})),c("h2",[e._v("API")]),c("div",{staticClass:"card"},[c("h3",[e._v("Props")]),c("table",[e._m(0),c("tbody",e._l(e.propsList,(function(t,s){return c("tr",{key:s},[c("td",[e._v(e._s(t.propName))]),c("td",{domProps:{innerHTML:e._s(t.desc)}}),c("td",[c("span",{staticClass:"info-string"},[e._v(e._s(t.type))])]),c("td",["-"===t.default?c("span",[e._v(e._s(t.default))]):c("code",[e._v(e._s(t.default))])])])})),0)])]),c("div",{staticClass:"card"},[c("h3",[e._v("Events")]),c("table",[e._m(1),c("tbody",e._l(e.eventsList,(function(t,s){return c("tr",{key:s},[c("td",[e._v(e._s(t.eventName))]),c("td",[e._v(e._s(t.desc))]),c("td",[c("span",{staticClass:"info-string"},[e._v(e._s(t.callParams))])])])})),0)])])],2)])},d=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("thead",[c("tr",[c("th",[e._v("参数")]),c("th",[e._v("说明")]),c("th",[e._v("类型")]),c("th",[e._v("默认值")])])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("thead",[c("tr",[c("th",[e._v("事件名")]),c("th",[e._v("说明")]),c("th",[e._v("回调参数")])])])}],o={data:function(){return{importCode:"import Vue from 'vue'; \nimport { Switch } from 'vue-sun-ui'; \n \nVue.use(Switch);",propsList:[{propName:"v-model",desc:"开关选中状态",type:"boolean",default:"false"},{propName:"loading",desc:"\t是否为加载状态\t",type:"boolean",default:"false"},{propName:"disabled",desc:"是否为禁用状态",type:"boolean",default:"false"},{propName:"size",desc:"开关尺寸，默认单位为<code>px</code>",type:"number | string",default:"30px"},{propName:"active-color",desc:"打开时的背景色\t",type:"string",default:"#1989fa"},{propName:"inactive-color",desc:"关闭时的背景色",type:"string",default:"white"}],eventsList:[{eventName:"change",desc:"开关状态切换时触发",callParams:"value: boolean"},{eventName:"click",desc:"点击时触发",callParams:"event: Event"}],cartList:[{title:"基础用法",desc:"通过 <code>v-model</code> 绑定开关的选中状态，<code>true</code> 表示开，<code>false</code> 表示关。",code:'<sun-switch v-model="checked" />',jsCode:"export default {\n  data() {\n    return {\n      checked: true,\n    };\n  },\n};"},{title:"禁用状态",desc:"通过 <code>disabled</code> 属性来禁用开关，禁用状态下开关不可点击。",code:'<sun-switch v-model="checked" disabled />'},{title:"加载状态",desc:"通过 <code>loading</code> 属性设置开关为加载状态，加载状态下开关不可点击。",code:'<sun-switch v-model="checked" loading />'},{title:"自定义大小",desc:"通过 <code>size</code> 属性自定义开关的大小。",code:'<sun-switch v-model="checked" size="24px" />'},{title:"自定义颜色",desc:"<code>active-color</code> 属性表示打开时的背景色，<code>inactive-color</code> 表示关闭时的背景色。",code:'<sun-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />'}]}}},a=o,n=(c("1f4d"),c("2877")),i=Object(n["a"])(a,s,d,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-4cb4c6fd.d11bdf63.js.map