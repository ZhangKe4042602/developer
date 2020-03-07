webpackJsonp([8],{"87x2":function(e,t){},mwO3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("0Njg"),n=r("R2SV"),s=r("LLxk"),i={name:"interfacesDetail",data:function(){return{mockUrl:a.I,originMockUrl:a.K,data:null,formatDate:n.c,returns:null,parameters:null,generatedReturns:null,versioned:[],currentVersioned:null,marks:null,username:Object(s.f)(),columns:[{field:"deprecated",header:"废弃",sort:"deprecated",html:!0,width:80,formatter:function(e,t,r){return r?"是".fontcolor("red"):"否"}},{field:"url",header:"URL地址",sort:"url",width:320},{field:"modifyTime",header:"上次更新时间",sort:"modify_time",width:200,formatter:function(e,t,r){return Object(n.c)(r)}}]}},computed:{},methods:{claimVersioned:function(){var e=this.$refs.dg.getSelected();null!=e&&e.length>0?(this.currentVersioned=e[0],this.versionedReturns=JSON.parse(this.currentVersioned.returns),this.versionedGeneratedReturns=Object(n.e)(this.versionedReturns),this.versionedParameters=JSON.parse(this.currentVersioned.parameters)):this.currentVersioned=null,this.$refs.historyDialog.close()},listVersioned:function(){this.$refs.historyDialog.open()},init:function(){var e=this,t=this.$route.params.id;Object(a.t)(t).then(function(t){e.data=t,e.returns=JSON.parse(e.data.returns),e.generatedReturns=Object(n.e)(e.returns),e.parameters=JSON.parse(e.data.parameters)}),Object(a.D)(t).then(function(t){e.versioned=t||[]}),Object(a.s)(t).then(function(t){e.marks=t})},linkTo:function(e,t){this.$router.push("/test/"+e.id+"/"+t)},addMark:function(){var e=this;this.$prompt("添加备注","",{inputType:"textarea",inputPlaceholder:"请输入备注信息",inputValidator:function(e){return(e||"").trim().length>0||"请输入备注信息"}}).then(function(t){var r=e.$route.params.id,n=t.value;Object(a.c)(r,n).then(function(t){e.marks.unshift({user:e.username,createTime:(new Date).getTime(),mark:n})})}).catch(function(e){})}},components:{"v-datagrid":function(){return r.e(26).then(r.bind(null,"mW4C"))},"v-jsonformatter":function(){return r.e(28).then(r.bind(null,"9YOq"))},"v-parameter":function(){return r.e(30).then(r.bind(null,"Kq1y"))},"v-dialog":function(){return r.e(27).then(r.bind(null,"j9Pd"))}},mounted:function(){this.init()}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"detail"},[r("h4",{staticClass:"title"},[e._v("接口详情 　　\n    "),e.versioned.length>0?r("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-timer",title:"查看历史版本",size:"small"},on:{click:e.listVersioned}}):e._e()],1),e._v(" "),r("hr"),e._v(" "),e.data?r("el-form",{attrs:{"label-width":"9em"}},[r("el-form-item",{attrs:{label:"接口名称："}},[r("div",[e._v(e._s(e.data.name)),e.data.deprecated?r("b",{staticStyle:{color:"red"}},[e._v("（已废弃）")]):e._e()]),e._v(" "),e.currentVersioned?r("div",{staticClass:"history"},[e._v(e._s(e.currentVersioned.name)),e.currentVersioned.deprecated?r("b",{staticStyle:{color:"red"}},[e._v("（已废弃）")]):e._e()]):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"控制器："}},[r("div",[e._v(e._s(e.data.controller))]),e._v(" "),e.currentVersioned?r("div",{staticClass:"history"},[e._v(e._s(e.currentVersioned.controller))]):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"访问类型："}},[r("div",[e._v(e._s(e.data.method))]),e._v(" "),e.currentVersioned?r("div",{staticClass:"history"},[e._v(e._s(e.currentVersioned.method))]):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"所属项目："}},[r("div",[e._v(e._s(e.data.end.name))]),e._v(" "),e.currentVersioned?r("div",{staticClass:"history"},[e._v(e._s(e.currentVersioned.end.name))]):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"header参数说明："}},[r("div",[r("i",{staticStyle:{color:"red"}},[e._v("header名："+e._s(e.data.end.header)),r("br"),e._v(e._s(e.data.end.mark))])]),e._v(" "),e.currentVersioned?r("div",{staticClass:"history"},[r("i",[e._v("header名："+e._s(e.currentVersioned.end.header)),r("br"),e._v(e._s(e.currentVersioned.end.mark))])]):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"所属模块："}},[r("div",[e._v(e._s(e.data.java.name))]),e._v(" "),e.currentVersioned?r("div",{staticClass:"history"},[e._v(e._s(e.currentVersioned.java.name))]):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"开发地址："}},[r("div",[r("a",{attrs:{target:"_blank"},on:{click:function(t){return e.linkTo(e.data,"devDomain")}}},[e._v(e._s(""+e.data.java.devDomain+e.data.url))])]),e._v(" "),r("span",[e._v("mock地址："),r("a",{attrs:{href:e.originMockUrl(e.data.java.devDomain,e.data.url),target:"_blank"}},[e._v(e._s(e.originMockUrl(e.data.java.devDomain,e.data.url)))])])]),e._v(" "),r("el-form-item",{attrs:{label:"测试地址："}},[r("div",[r("a",{attrs:{target:"_blank"},on:{click:function(t){return e.linkTo(e.data,"testDomain")}}},[e._v(e._s(""+e.data.java.testDomain+e.data.url))])]),e._v(" "),r("span",[e._v("mock地址："),r("a",{attrs:{href:e.originMockUrl(e.data.java.testDomain,e.data.url),target:"_blank"}},[e._v(e._s(e.originMockUrl(e.data.java.testDomain,e.data.url)))])])]),e._v(" "),r("el-form-item",{attrs:{label:"预发地址："}},[r("div",[r("a",{attrs:{target:"_blank"},on:{click:function(t){return e.linkTo(e.data,"prevDomain")}}},[e._v(e._s(""+e.data.java.prevDomain+e.data.url))])]),e._v(" "),r("span",[e._v("mock地址："),r("a",{attrs:{href:e.originMockUrl(e.data.java.prevDomain,e.data.url),target:"_blank"}},[e._v(e._s(e.originMockUrl(e.data.java.prevDomain,e.data.url)))])])]),e._v(" "),r("el-form-item",{attrs:{label:"生产地址："}},[r("div",[r("a",{attrs:{target:"_blank"},on:{click:function(t){return e.linkTo(e.data,"onlineDomain")}}},[e._v(e._s(""+e.data.java.onlineDomain+e.data.url))])]),e._v(" "),r("span",[e._v("mock地址："),r("a",{attrs:{href:e.originMockUrl(e.data.java.onlineDomain,e.data.url),target:"_blank"}},[e._v(e._s(e.originMockUrl(e.data.java.onlineDomain,e.data.url)))])])]),e._v(" "),r("el-form-item",{attrs:{label:"备用mock地址："}},[r("div",[r("a",{attrs:{href:e.mockUrl(e.data.hash),target:"_blank"}},[e._v(e._s(e.mockUrl(e.data.hash)))])]),e._v(" "),e.currentVersioned?r("div",{staticClass:"history"},[r("a",{attrs:{href:e.mockUrl(e.currentVersioned.hash),target:"_blank"}},[e._v(e._s(e.mockUrl(e.currentVersioned.hash)))])]):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"创建时间："}},[e._v(e._s(e.formatDate(e.data.createTime)))]),e._v(" "),r("el-form-item",{attrs:{label:"更新时间："}},[e._v(e._s(e.formatDate(e.data.modifyTime)))]),e._v(" "),r("el-form-item",{attrs:{label:"接口参数："}},[r("v-parameter",{attrs:{json:e.parameters||[]}}),e._v(" "),e.currentVersioned?r("v-parameter",{staticClass:"history",attrs:{json:e.versionedParameters||[]}}):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"接口说明："}},[r("div",{domProps:{innerHTML:e._s(e.data.mark||"无")}}),e._v(" "),e.currentVersioned?r("div",{staticClass:"history",domProps:{innerHTML:e._s(e.currentVersioned.mark||"无")}}):e._e()]),e._v(" "),r("el-form-item",{attrs:{label:"返回值："}},[e.currentVersioned?r("div",[e.generatedReturns?r("v-jsonformatter",{staticStyle:{width:"48%",display:"inline-block"},attrs:{json:e.generatedReturns}}):e._e(),e._v(" "),e.currentVersioned&&e.versionedGeneratedReturns?r("v-jsonformatter",{staticClass:"history",staticStyle:{width:"48%",display:"inline-block"},attrs:{json:e.versionedGeneratedReturns}}):e._e()],1):r("div",[e.generatedReturns?r("v-jsonformatter",{attrs:{json:e.generatedReturns}}):e._e()],1)]),e._v(" "),r("el-form-item",{attrs:{label:"备注："}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addMark}},[e._v("添加备注")]),e._v(" "),e._l(e.marks,function(t,a){return e.marks&&e.marks.length>0?r("div",{key:a},[r("span",{staticClass:"user"},[e._v("["+e._s(t.user===e.username?"我":t.user)+"]")]),e._v("　\n        "),r("span",{staticClass:"date"},[e._v("["+e._s(e.formatDate(t.createTime))+"]：")]),e._v("　\n        "),r("span",{staticClass:"mark"},[e._v(e._s(t.mark))])]):e._e()})],2)],1):e._e(),e._v(" "),r("v-dialog",{ref:"historyDialog",attrs:{title:"选择一个历史版本进行对比",width:800,ok:e.claimVersioned}},[r("div",{attrs:{slot:"body"},slot:"body"},[r("v-datagrid",{ref:"dg",attrs:{loadData:e.versioned,checkable:!0,singleCheck:!0,columns:e.columns,pageable:!1}})],1)])],1)},staticRenderFns:[]};var l=r("C7Lr")(i,o,!1,function(e){r("87x2")},"data-v-db613fc0",null);t.default=l.exports}});
//# sourceMappingURL=8.b86de2236686711d8931.js.map