webpackJsonp([28],{"/cMq":function(t,e){},zmcw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("aA9S"),r=n.n(o),i={props:{onOk:{type:Function,default:function(){}}},data:function(){return{nodeId:null,source:[],target:[],node:{javascript:null},hasTarget:!1,hasSource:!1}},methods:{open:function(t,e){this.target=e.filter(function(e){return e.getModel().source===t.id}).map(function(t){return t.getModel().id})||[],this.source=e.filter(function(e){return e.getModel().target===t.id}).map(function(t){return t.getModel().id})||[],this.hasTarget=this.target.length>0,this.hasSource=this.source.length>0;var n=t.data||{};this.nodeId="（上游节点："+this.source+"；下游节点："+this.target+"）",this.node.javascript=n.javascript,this.$refs.editConditionDialog.open()},confirm:function(){var t=this;this.$refs.form.validate(function(e){e&&(t.onOk&&t.onOk(r()({},t.node)),t.$refs.editConditionDialog.close())})}},components:{"v-dialog":function(){return n.e(20).then(n.bind(null,"j9Pd"))}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{ref:"editConditionDialog",attrs:{title:"配置条件："+t.nodeId,ok:t.confirm,width:1e3}},[n("el-form",{ref:"form",staticClass:"edit-node-dialog",attrs:{slot:"body",model:t.node,"label-width":"8em"},slot:"body"},[n("el-form-item",{attrs:{label:"条件处理脚本:"}},[n("el-input",{attrs:{placeholder:(t.hasSource?"您可以使用（"+t.source.map(function(t){return"$"+t}).join("，")+"）来获取上游返回值":"")+"，\n"+(t.hasTarget?"并选择["+t.target.map(function(t){return" '"+t+"' "}).join(",")+"]中任意一个或者多个作为返回值，表示下游执行哪条线路":"")+"\n如不做任何处理，下游每条分支都将被运行，没有下游则说明都不执行，举例：\n\nif (xx === yy) {\n    return ["+(t.hasTarget?" '"+t.target[0]+"' ":"")+"]\n} else {\n    return [ "+t.target.map(function(t){return" '"+t+"' "}).join(",")+" ]\n}",rows:15,type:"textarea"},model:{value:t.node.javascript,callback:function(e){t.$set(t.node,"javascript",e)},expression:"node.javascript"}})],1)],1)],1)],1)},staticRenderFns:[]};var s=n("C7Lr")(i,a,!1,function(t){n("/cMq")},null,null);e.default=s.exports}});
//# sourceMappingURL=28.a51dcabdf8f18a9b3638.js.map