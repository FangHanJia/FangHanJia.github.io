webpackJsonp([7],{DcjJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),o=i.n(n),a=i("NYxO"),l=i("zXdv"),c=i("/hYm"),r=i.n(c),s={data:function(){return{loading:!1,blog:{id:"",title:"title",description:"",content:"",createTime:"",updateTime:""}}},computed:o()({},Object(a.b)(["token"])),mounted:function(){var t=this;this.gitalkHandle(),this.loading=!0,this.blog.id=this.$route.params.id,l.a.getSingleNew(this.blog.id).then(function(e){var i=e.data;for(var n in i.files){t.blog.title=n,t.blog.content=t.$markDown(i.files[n].content),t.blog.description=i.description,t.blog.createTime=t.$util.formatUTC(i.created_at),t.blog.updateTime=t.$util.formatUTC(i.updated_at);break}}).then(function(){return t.loading=!1})},methods:{gitalkHandle:function(){new r.a({clientID:"c018f77406f8aefcd7d5",clientSecret:"80729c32a4c165687c825356097836f58963ac2d",repo:"fanghanjia.github.io",owner:"fanghanjia",admin:["fanghanjia"],id:decodeURI(window.location.hash.match(/#(.*?)([?]|$)/)[1])}).render("gitalk-container")},back:function(){this.$router.push("/pc/blog/blogMain")},edit:function(){this.token?this.$router.push("/pc/blog/blogEdit/"+this.blog.id):this.$message({message:"您的权限不足",type:"warning"})},more:function(){this.$router.push("/pc/blog/blogMain")}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"min-height":"600px"}},[i("el-card",{staticStyle:{"min-height":"400px"},attrs:{shadow:"never"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-button",{staticStyle:{padding:"3px 0",float:"left"},attrs:{type:"text",icon:"el-icon-arrow-left"},on:{click:t.back}},[t._v("返回")]),t._v(" "),i("span",{staticStyle:{float:"right"}},[t._v(t._s(t.blog.title))])],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-share"},on:{click:function(e){return t.$share()}}},[t._v("分享")]),t._v(" "),t.token?i("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-edit"},on:{click:t.edit}},[t._v("编辑")]):t._e(),t._v(" "),i("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-more-outline"},on:{click:t.more}},[t._v("更多博客")])],1)])],1)],1),t._v(" "),i("div",{staticStyle:{"font-size":"0.9rem","line-height":"1.5",color:"#606c71"}},[t._v("\n            发布 "+t._s(t.blog.createTime)+"\n            "),i("br"),t._v(" 更新 "+t._s(t.blog.updateTime)+"\n        ")]),t._v(" "),i("div",{staticStyle:{"font-size":"1.1rem","line-height":"1.5",color:"#303133","border-bottom":"1px solid #E4E7ED",padding:"5px 0px 5px 0px"}},[i("pre",{staticStyle:{"font-family":"'微软雅黑'"}},[t._v(t._s(t.blog.description))])]),t._v(" "),i("div",{staticClass:"markdown-body",staticStyle:{"padding-top":"20px"},domProps:{innerHTML:t._s(t.blog.content)}})]),t._v(" "),i("div",{attrs:{id:"gitalk-container"}})],1)},staticRenderFns:[]},g=i("VU/8")(s,d,!1,null,null,null);e.default=g.exports}});
//# sourceMappingURL=7.59940ad44ece28e75983.js.map