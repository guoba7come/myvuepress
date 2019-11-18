(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{22:function(t,s,a){t.exports=a.p+"assets/img/error.1ab33a1a.png"},23:function(t,s,a){t.exports=a.p+"assets/img/config1.5e933fa2.png"},24:function(t,s,a){t.exports=a.p+"assets/img/config2.88430d77.png"},25:function(t,s,a){t.exports=a.p+"assets/img/config3.97834fdc.png"},26:function(t,s,a){t.exports=a.p+"assets/img/config4.ac0b8225.png"},27:function(t,s,a){t.exports=a.p+"assets/img/location.788f9b86.png"},28:function(t,s,a){t.exports=a.p+"assets/img/config5.21ba288b.png"},29:function(t,s,a){t.exports=a.p+"assets/img/config6.0e669b7f.png"},42:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"current_page"},[e("div",{staticClass:"article"},[e("h2",{attrs:{id:"安装环境和项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装环境和项目"}},[t._v("#")]),t._v(" 安装环境和项目")]),t._v(" "),e("h3",{attrs:{id:"生成项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成项目"}},[t._v("#")]),t._v(" 生成项目")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ mkdir vuepress-blog && cd vuepress-blog\n$ yarn create vuepress\n")])])]),e("p",[t._v("选择"),e("code",[t._v("blog")])]),t._v(" "),e("p",[e("strong",[t._v("运行")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ yarn dev\n")])])]),e("p",[e("strong",[t._v("报错")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(22),alt:"error"}})]),t._v(" "),e("p",[e("strong",[t._v("原因")])]),t._v(" "),e("p",[t._v("没有安装依赖文件")]),t._v(" "),e("p",[e("strong",[t._v("安装依赖文件")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ yarn install\n")])])]),e("h2",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.vuepress.cn/guide/deploy.html#github-%E9%A1%B5%E9%9D%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"部署github环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署github环境"}},[t._v("#")]),t._v(" 部署github环境")]),t._v(" "),e("p",[t._v("登录"),e("code",[t._v("github")]),t._v(", "),e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("生成"),e("code",[t._v("new")]),t._v("项目, 文件名"),e("code",[t._v("myblog")])]),t._v(" "),e("p",[t._v("选择"),e("code",[t._v("MIT License")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(23),alt:"config1"}})]),t._v(" "),e("h3",{attrs:{id:"生成-sh文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成-sh文件"}},[t._v("#")]),t._v(" 生成.sh文件")]),t._v(" "),e("p",[t._v("在根目录新建"),e("code",[t._v("deploy.sh")]),t._v("文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#!/usr/bin/env sh\n\n# 终止一个错误\nset -e\n\n# 构建\nyarn build :build\n\n# 进入生成的构建文件夹\ncd blog/.vuepress/dist\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果你想要部署到 \ngit push -f git@github.com:guoba7come/myblog.git master:gh-pages\n\n# 链接远程仓库\ngit remote add origin https://github.com/guoba7come/myblog.git\n\n# 拉取远程仓库的文件\ngit pull --rebase origin master\n\n# 同步更新代码\ngit push -u origin master\n\ncd -\n")])])]),e("p",[t._v("注意：在构建处，"),e("code",[t._v("yarn build :build")]),t._v(", 注意空格位置")]),t._v(" "),e("h3",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),e("p",[t._v("打开终端，cd 到当前文件，输入：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ sh deploy.sh\n")])])]),e("p",[t._v("在"),e("code",[t._v("github")]),t._v("上的项目"),e("code",[t._v("settings")]),t._v("选项中打开的项目样式错误，则为没有设置正确的"),e("code",[t._v("base")]),t._v(",")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("blog/.vuepress/config")]),t._v("添加属性"),e("code",[t._v("base: '/myblog'")])]),t._v(" "),e("p",[e("code",[t._v("base")]),t._v("为"),e("code",[t._v("github")]),t._v("上的项目名")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/myblog/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("链接远程仓库的地址在项目的下载处得到")]),t._v(" "),e("p",[e("img",{attrs:{src:a(24),alt:"config2"}})]),t._v(" "),e("p",[t._v("在终端中需要输入"),e("code",[t._v("github")]),t._v("的"),e("code",[t._v("Username")]),t._v("和"),e("code",[t._v("Password")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(25),alt:"config3"}})]),t._v(" "),e("p",[t._v("发布成功后可在"),e("code",[t._v("setting")]),t._v("中，"),e("code",[t._v("options")]),t._v("下"),e("code",[t._v("GitHub Pages")]),t._v("中浏览。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(26),alt:"config4"}})]),t._v(" "),e("h3",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("p",[t._v("每次更新都在终端中执行"),e("code",[t._v(".sh")]),t._v("文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ sh deloy.sh\n")])])]),e("h2",{attrs:{id:"github项目私有秘钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github项目私有秘钥"}},[t._v("#")]),t._v(" github项目私有秘钥")]),t._v(" "),e("h3",{attrs:{id:"安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[t._v("#")]),t._v(" 安装git")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("注意：在"),e("code",[t._v("mac")]),t._v("中需要在系统偏好设置中安全性与隐私中设置允许")]),t._v(" "),e("h3",{attrs:{id:"创建ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建ssh"}},[t._v("#")]),t._v(" 创建SSH")]),t._v(" "),e("p",[e("code",[t._v("mac")]),t._v(": 在终端中输入 "),e("code",[t._v("$ cd ~/.ssh")]),t._v("进入该目录")]),t._v(" "),e("p",[e("code",[t._v("window")]),t._v(": 点击"),e("code",[t._v("Git bash")]),t._v("打开命令窗口")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ ssh-keygen -t rsa -C xxxxx@xx.com\n")])])]),e("p",[t._v("然后3次回车\n将生成的"),e("code",[t._v("id_rsa.pub")]),t._v("文件打开，拷贝其中的公钥内容。\n地址："),e("code",[t._v("/Users/apple/.ssh/id_rsa.pub")]),t._v("\n在终端中会有路径地址：\n"),e("img",{attrs:{src:a(27),alt:"location"}})]),t._v(" "),e("h3",{attrs:{id:"放置公钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#放置公钥"}},[t._v("#")]),t._v(" 放置公钥")]),t._v(" "),e("p",[t._v("登录"),e("code",[t._v("github")]),t._v("中，进入项目中的"),e("code",[t._v("settings")]),t._v("选项中")]),t._v(" "),e("p",[t._v("选择"),e("code",[t._v("Deploy Keys")]),t._v(", 点击"),e("code",[t._v("Add deploy key")]),t._v("按钮")]),t._v(" "),e("p",[t._v("将之前的"),e("code",[t._v("id_rsa.pub")]),t._v("内容拷贝到其中，"),e("code",[t._v("title")]),t._v("随便写")]),t._v(" "),e("p",[e("img",{attrs:{src:a(28),alt:"config5"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(29),alt:"config6"}})]),t._v(" "),e("p",[t._v("注意：选中"),e("code",[t._v("Allow write access")]),t._v("选项，否则部署文件时报错，原因为秘钥被标记为只读")])]),t._v(" "),e("div",{staticClass:"silder"},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#安装环境和项目"}},[t._v("安装环境和项目")]),e("ul",[e("li",[e("a",{attrs:{href:"#生成项目"}},[t._v("生成项目")])])])]),e("li",[e("a",{attrs:{href:"#部署"}},[t._v("部署")]),e("ul",[e("li",[e("a",{attrs:{href:"#部署github环境"}},[t._v("部署github环境")])]),e("li",[e("a",{attrs:{href:"#生成-sh文件"}},[t._v("生成.sh文件")])]),e("li",[e("a",{attrs:{href:"#发布"}},[t._v("发布")])]),e("li",[e("a",{attrs:{href:"#更新"}},[t._v("更新")])])])]),e("li",[e("a",{attrs:{href:"#github项目私有秘钥"}},[t._v("github项目私有秘钥")]),e("ul",[e("li",[e("a",{attrs:{href:"#安装git"}},[t._v("安装git")])]),e("li",[e("a",{attrs:{href:"#创建ssh"}},[t._v("创建SSH")])]),e("li",[e("a",{attrs:{href:"#放置公钥"}},[t._v("放置公钥")])])])])])]),e("p")])])])}),[],!1,null,null,null);s.default=r.exports}}]);