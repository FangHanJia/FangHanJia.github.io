webpackJsonp([8],{"3Nl4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Dd8w"),n=i.n(o),r=i("NYxO"),l=i("bPQH"),s=i("zXdv"),a={components:{TokenDialog:l.a},data:function(){return{form:{title:"",description:"",content:""},ruleValidate:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{type:"string",max:32,message:"标题长度不大于32字符",trigger:"change"}],description:[{required:!0,message:"请输入博客描述",trigger:"blur"}],content:[{required:!0,message:"请输入博客正文",trigger:"blur"}]},submitButton:{loading:!1,disabled:!1},mavonEditorToolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,htmlcode:!0,trash:!0,alignleft:!0,aligncenter:!0,alignright:!0,preview:!0}}},computed:n()({},Object(r.b)(["token"])),mounted:function(){var t=this;this.token||(this.$nextTick(function(){t.$message({message:"您的权限不足!",type:"error"})}),this.$router.push("/pc/blog/blogMain"))},methods:{imgAdd:function(t,e){this.$refs.md.$img2Url(t,e.miniurl)},onSubmit:function(){var t=this;this.token?this.submitHandle():this.$refs.tokenDialog.open(function(){t.submitHandle()})},submitHandle:function(){var t=this;this.$refs.form.validate(function(e){e&&(t.submitButton.loading=!0,t.submitButton.disabled=!0,s.a.addBlog(t.form).then(function(e){console.log(e);var i=e.data;t.$message({message:"发表成功",type:"success"}),t.$router.push("/pc/blog/details/"+i.id)}).then(function(){t.submitButton.loading=!1,t.submitButton.disabled=!1}))})}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"min-height":"600px"}},[i("el-card",{staticStyle:{"margin-bottom":"20px"},attrs:{shadow:"never"}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",rules:t.ruleValidate}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"简要说明",prop:"description"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"博客正文",prop:"content"}},[i("mavon-editor",{ref:"md",staticStyle:{"max-height":"500px"},attrs:{subfield:!1,toolbars:t.mavonEditorToolbars},on:{imgAdd:t.imgAdd},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:t.submitButton.loading,disabled:t.submitButton.disabled},on:{click:t.onSubmit}},[t._v("发表")]),t._v(" "),i("el-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1)],1),t._v(" "),i("token-dialog",{ref:"tokenDialog"})],1)},staticRenderFns:[]},d=i("VU/8")(a,u,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=8.6050cef102a2b758c2a1.js.map