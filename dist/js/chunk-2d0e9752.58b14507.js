(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9752"],{"8e2a":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sun-doc-message sun-doc-content"},[t("section",[t("h1",[e._v("Message 消息提示")]),e._m(0),t("div",{staticClass:"card"},[t("h3",[e._v("引入")]),e._m(1),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("pre",[t("code",{domProps:{innerHTML:e._s(e.importCode)}})])])]),t("h2",[e._v("代码展示")]),e._l(e.cartList,(function(s,a){return t("div",{key:a,staticClass:"card"},[t("h3",[e._v(e._s(s.title))]),t("p",{domProps:{innerHTML:e._s(s.desc)}}),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("pre",[t("code",{staticClass:"language-js",domProps:{textContent:e._s(s.code)}})])])])})),t("h2",[e._v("API")]),t("div",{staticClass:"card"},[t("h3",[e._v("方法")]),t("table",[e._m(2),t("tbody",e._l(e.methodList,(function(s,a){return t("tr",{key:a},[t("td",[e._v(e._s(s.propName))]),t("td",{domProps:{innerHTML:e._s(s.desc)}}),t("td",[t("span",{staticClass:"info-string"},[e._v(e._s(s.type))])]),t("td",["-"===s.default?t("span",[e._v(e._s(s.default))]):t("code",[e._v(e._s(s.default))])])])})),0)])]),t("div",{staticClass:"card"},[t("h3",[e._v("Options")]),t("table",[e._m(3),t("tbody",e._l(e.optionList,(function(s,a){return t("tr",{key:a},[t("td",[e._v(e._s(s.propName))]),t("td",{domProps:{innerHTML:e._s(s.desc)}}),t("td",[t("span",{staticClass:"info-string"},[e._v(e._s(s.type))])]),t("td",["-"===s.default?t("span",[e._v(e._s(s.default))]):t("code",[e._v(e._s(s.default))])])])})),0)])])],2)])},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"card"},[t("h3",[e._v("介绍")]),t("div",[e._v(" 在页面顶部展示消息提示，支持函数调用。 ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v(" 引入"),t("code",[e._v("Message")]),e._v("可以使用"),t("code",[e._v("Vue.use(Message)")]),e._v("在所有实例添加"),t("code",[e._v("$message")]),e._v("方法，也可以单独使用"),t("code",[e._v("Message")]),e._v("方法。 ")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")]),t("th",[e._v("返回值")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])])}],o={data:function(){return{importCode:"import Vue from 'vue';\nimport { Message } from 'vue-sun-ui';\n\nVue.use(Message);\nthis.$message('提示消息')",methodList:[{propName:"Message",desc:"展示提示\t",type:"options | message",default:"message 实例"},{propName:"Message.success",desc:"展示成功消息",type:"options | message",default:"message 实例"},{propName:"Message.error",desc:"展示错误消息",type:"options | message",default:"message 实例"},{propName:"Message.info",desc:"展示信息提示",type:"options | message",default:"message 实例"},{propName:"Message.warning",desc:"展示警告消息",type:"options | message",default:"message 实例"},{propName:"Message.loading",desc:"展示加载消息",type:"options | message",default:"message 实例"},{propName:"Message.clear",desc:"关闭消息",type:"-",default:"void"}],optionList:[{propName:"type",desc:"类型，可选值为 <code>success</code> <code>error</code> <code>info</code><code>warning</code><code>loading</code>",type:"string",default:"success"},{propName:"message",desc:"展示文案，支持通过 \\n 换行",type:"string",default:"center"},{propName:"duration",desc:"展示时长(ms)",type:"number | string",default:"1500"},{propName:"color",desc:"字体和图标的颜色",type:"string",default:"-"},{propName:"icon",desc:"之定义图标",type:"string",default:"-"},{propName:"border",desc:"是否显示边框",type:"boolean",default:"false"},{propName:"position",desc:"展示的位置，可选值有 <code>center</code>、<code>bottom</code>",type:"string",default:"top"},{propName:"onClick",desc:"点击时的回调函数",type:"Function",default:"-"},{propName:"onOpened",desc:"完全展示后的回调函数",type:"Function",default:"-"},{propName:"onClose",desc:"关闭时的回调函数",type:"Function",default:"-"}],cartList:[{title:"基础用法",code:"Message('通知内容');"},{title:"消息类型",desc:"支持 <code>success</code>、<code>error</code>、<code>info</code>、<code>warning</code>、<code>loading</code> 五种通知类型，默认为 success。",code:"// 成功消息\nMessage({ type: 'success', message: '通知内容' });\n\n// 危险消息\nMessage({ type: 'error', message: '通知内容' });\n\n// 信息消息\nMessage({ type: 'info', message: '通知内容' });\n\n// 警告消息\nMessage({ type: 'warning', message: '通知内容' });\n\n// 加载消息\nMessage({ type: 'loading', message: '通知内容' });"},{title:"自定义配置",desc:"自定义消息通知的展示颜色、时长和图标。",code:"// 自定义颜色\nMessage({\n  message: '自定义颜色',\n  color: 'pink',\n});\n\n// 自定义时长\nMessage({\n  message: '自定义时长',\n  duration: 3000,\n});\n\n// 自定义图标\nMessage({\n  message: '自定义图标',\n  icon: 'plus',\n});"}]}}},d=o,c=t("2877"),r=Object(c["a"])(d,a,n,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0e9752.58b14507.js.map