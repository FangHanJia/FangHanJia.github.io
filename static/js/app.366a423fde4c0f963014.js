webpackJsonp([9],{BVnY:function(t,e){},CMvz:function(t,e){},Hl2I:function(t,e){},IcnI:function(t,e,n){"use strict";var o,r=n("7+uW"),i=n("NYxO"),a={state:{githubUsername:"",blogTitle:"",blogDescribe:"",htmlTitle:"",fontColor:"",useBackgroundImage:!1,backgroundColorLeft:"",backgroundColorRight:"",audioUrl:"",mini:!1,webSites:[],audioAutoPlay:!1},mutations:{SET_CONFIGURATION:function(t,e){t.githubUsername=e.githubUsername||"GitHub-Fanghanjia",t.blogTitle=e.blogTitle||t.githubUsername,t.blogDescribe=e.blogDescribe||"欢迎来到"+t.githubUsername+"的个人博客。",t.htmlTitle=e.htmlTitle||t.githubUsername+"的博客",t.fontColor=e.fontColor||"#ffffff",t.useBackgroundImage=e.useBackgroundImage||!1,t.backgroundColorLeft=e.backgroundColorLeft||"#155799",t.backgroundColorRight=e.backgroundColorRight||"#159957",t.audioUrl=e.audioUrl||"",t.mini=e.mini||!1,t.webSites=e.webSites||[],t.audioAutoPlay=e.audioAutoPlay||!1,t.blogSource=e.blogSource||!1}},actions:{initData:function(t){var e=t.commit,n=void 0;(n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("GET","../../../static/configuration.json",!1),n.send(),e("SET_CONFIGURATION",JSON.parse(n.responseText))}}},u=n("jn0r"),c=function(t){return Object(u.a)({url:"/user?access_token="+t})},l=function(){var t=T.state.configuration.githubUsername;return Object(u.a)({url:"/users/"+t})},s={state:{location:null,name:null,avatarUrl:null},mutations:{SET_LOCATION:function(t,e){t.location=e},SET_AVATARURL:function(t,e){t.avatarUrl=e},SET_NAME:function(t,e){t.name=e}},actions:{getUserInfo:function(t){var e=t.commit;l().then(function(t){var n=t.data;e("SET_LOCATION",n.location),e("SET_AVATARURL",n.avatar_url),e("SET_NAME",n.name)})}}},f=n("lbHh"),d=n.n(f),m=function(t,e,n){return n?d.a.set(t,e,{expires:n}):d.a.set(t,e)},p=function(t){return d.a.remove(t)},g={state:{token:function(t){return d.a.get(t)}("TOKEN_KEY")},mutations:{SET_TOKEN:function(t,e){t.token=e,m("TOKEN_KEY",e,30)},REMOVE_TOKEN:function(t){t.token=null,p("TOKEN_KEY")}},actions:{authentication:function(t,e){var n=t.commit;c(e).then(function(t){var o=t.data;T.state.configuration.githubUsername==o.login?(n("SET_TOKEN",e),r.default.prototype.$notify({title:"成功",message:"Token绑定成功",type:"success"})):r.default.prototype.$message({message:"Token不一致",type:"error"})})},cancelToken:function(t){(0,t.commit)("REMOVE_TOKEN"),r.default.prototype.$message({message:"Token注销成功",type:"info"})}}},h=n("bOdI"),b=n.n(h),v=(o={token:function(t){return t.token.token},githubUsername:function(t){return t.configuration.githubUsername},blogTitle:function(t){return t.configuration.blogTitle},blogDescribe:function(t){return t.configuration.blogDescribe},htmlTitle:function(t){return t.configuration.htmlTitle},fontColor:function(t){return t.configuration.fontColor},useBackgroundImage:function(t){return t.configuration.useBackgroundImage},backgroundColorLeft:function(t){return t.configuration.backgroundColorLeft},backgroundColorRight:function(t){return t.configuration.backgroundColorRight},audioUrl:function(t){return t.configuration.audioUrl},mini:function(t){return t.configuration.mini},audioAutoPlay:function(t){return t.configuration.audioAutoPlay},webSites:function(t){return t.configuration.webSites}},b()(o,"audioUrl",function(t){return t.configuration.audioUrl}),b()(o,"blogSource",function(t){return t.configuration.blogSource}),b()(o,"location",function(t){return t.user.location}),b()(o,"avatarUrl",function(t){return t.user.avatarUrl}),b()(o,"name",function(t){return t.user.name}),o);r.default.use(i.a);var w=new i.a.Store({modules:{configuration:a,user:s,token:g},getters:v}),T=e.a=w},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={name:"App",created:function(){var t=this;this.$store.dispatch("initData"),this.$store.dispatch("getUserInfo"),window.onresize=function(){var e=t.$util.getWindowSize(),n=t.$route.path.split("/");"pc"==n[1]&&e.height>1.2*e.width&&t.$router.push("/mobile/mHome"),"mobile"==n[1]&&e.height<=1.2*e.width&&t.$router.push("/"),console.log(n[1])}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")(r,i,!1,function(t){n("BVnY")},null,null).exports,u=n("YaEn"),c=n("IcnI"),l={getWindowSize:function(){var t={};return t.width=window.innerWeight||document.documentElement.clientWidth||document.body.clientWidth,t.height=window.innerWeight||document.documentElement.clientHeight||document.body.clientHeight,t},formatNumber:function(t){var e=parseInt(t),n=parseInt(e/60),o=parseInt(e%60);return(n<10?"0":"")+n+":"+(o<10?"0":"")+o},formatUTC:function(t){var e=function(t){return t>=10?t:"0"+t},n=t.split(/[^0-9]/),o=new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5]),r=new Date(o.getTime()+288e5);return e(r.getFullYear())+"-"+e(r.getMonth()+1)+"-"+e(r.getDate())+" "+e(r.getHours())+":"+e(r.getMinutes())+":"+e(r.getSeconds())},copy:function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select();var n=void 0;try{n=document.execCommand("copy")}catch(t){}return document.body.removeChild(e),n},parseHeaders:function(t){try{for(var e=t.link.split(","),n=0;n<e.length;n++){var o=e[n];if(!(o.indexOf('rel="last"')<0))for(var r=o.split(/[\?&]/),i=0;i<r.length;i++){var a=r[i].split("=");if("page"==a[0])return parseInt(a[1])}}}catch(t){}return 0}},s=n("jn0r"),f=(n("ZsCP"),n("Fd2+")),d=(n("CMvz"),n("zL8q")),m=n.n(d),p=(n("tvR6"),n("OS1Z")),g=n.n(p);n("pw1w"),n("Hl2I");o.default.use(f.a),o.default.use(m.a),o.default.use(g.a),o.default.prototype.$util=l,o.default.prototype.$requestHttp=s.a,o.default.prototype.$markDown=function(t){return g.a.markdownIt.render(t)},o.default.prototype.$share=function(t){t?t=(window.location+"").split("#")[0]+"#"+t:t=window.location;l.copy(t)?o.default.prototype.$confirm("链接已复制,去分享给好友吧！","分享",{showCancelButton:!1,showClose:!1,type:"success"}):o.default.prototype.$confirm("链接复制失败,可能由于浏览器不兼容！","分享",{showCancelButton:!1,showClose:!1,type:"warning"})},o.default.config.productionTip=!1,new o.default({el:"#app",router:u.b,store:c.a,components:{App:a},template:"<App/>"})},YaEn:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("7+uW"),r=n("/ocq");o.default.use(r.a);var i=[{path:"/",redirect:"/pc/pHome"},{path:"/pc/pHome",redirect:"/pc/pHome/new",component:function(t){return Promise.all([n.e(1),n.e(0)]).then(function(){var e=[n("sfhk")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"pHome",meta:{type:"user",icon:"el-icon-star-off",title:"最新动态"},children:[{path:"new",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("8BV/")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"new",meta:{title:"最新动态"}}]},{path:"/pc/blog",redirect:"/pc/blog/blogMain",component:function(t){return Promise.all([n.e(1),n.e(0)]).then(function(){var e=[n("sfhk")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blog",meta:{type:"user",icon:"el-icon-edit-outline",title:"博客列表"},children:[{path:"blogMain",component:function(t){return Promise.all([n.e(2),n.e(0)]).then(function(){var e=[n("WxwT")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blogMain",meta:{title:"博客列表"}},{path:"blogDetails/:id",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("DcjJ")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blogDetails",meta:{title:"博客详情"}},{path:"blogAdd",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("3Nl4")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blogAdd",meta:{title:"发表博客"}},{path:"blogEdit/:id",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("3X5T")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blogEdit",meta:{title:"博客编辑"}}]},{path:"/mobile/mHome",component:function(t){return n.e(7).then(function(){var e=[n("Cokh")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"mHome",meta:{title:"首页"}}],a=new r.a({routes:i});a.beforeEach(function(t,e,n){document.title=t.meta.title,n()}),e.b=a},ZsCP:function(t,e){},jn0r:function(t,e,n){"use strict";var o=n("//Fk"),r=n.n(o),i=n("mtWM"),a=n.n(i),u=n("7+uW"),c=n("IcnI"),l=a.a.create({baseURL:"https://api.github.com",timeout:8e3});l.interceptors.request.use(function(t){var e=c.a.state.token.token;if(e){var n="?";t.url.indexOf("?")>=0&&(n="&"),t.url=t.url+n+"access_token="+e+"&v="+Date.now()}else{var o="?";t.url.indexOf("?")>=0&&(o="&"),t.url=t.url+o+"v="+Date.now()}return t},function(t){}),l.interceptors.response.use(function(t){t.data;return t},function(t){var e=void 0;switch(t.response.status){case 401:e="Token错误";break;default:e=t.response.data.message}return u.default.prototype.$message({message:e,type:"error"}),r.a.reject("error")}),e.a=l},pw1w:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.366a423fde4c0f963014.js.map