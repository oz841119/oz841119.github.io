(function(t){function s(s){for(var i,n,c=s[0],r=s[1],o=s[2],v=0,p=[];v<c.length;v++)n=c[v],Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&p.push(e[n][0]),e[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(s);while(p.length)p.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var t,s=0;s<l.length;s++){for(var a=l[s],i=!0,c=1;c<a.length;c++){var r=a[c];0!==e[r]&&(i=!1)}i&&(l.splice(s--,1),t=n(n.s=a[0]))}return t}var i={},e={app:0},l=[];function n(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)n.d(a,i,function(s){return t[s]}.bind(null,i));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var o=0;o<c.length;o++)s(c[o]);var u=r;l.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"0433":function(t,s,a){},"09d2":function(t,s,a){},1768:function(t,s,a){t.exports=a.p+"img/line.5fca10c3.jpg"},"1af8":function(t,s,a){},"250f":function(t,s,a){"use strict";a("34a0")},"25a6":function(t,s,a){"use strict";a("1af8")},"2ae1":function(t,s,a){"use strict";a("0433")},"30e7":function(t,s,a){},"34a0":function(t,s,a){},"3a01":function(t,s,a){t.exports=a.p+"img/admin2.207f139d.png"},"4da3":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("Page")],1)},l=[],n=(a("4da3"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("transition",{attrs:{name:"slide-fade"}},[a("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.isNavBar,expression:"isNavBar"}]})],1),a("TitlePage"),a("Skill"),a("Portfolio"),a("Contact")],1)}),c=[],r=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navBar"},[a("nav",{staticClass:"main"},[a("h2",[t._v("RESUME")]),a("ul",{staticClass:"selection"},[a("li",{staticClass:"selectionLi"},[a("a",{attrs:{href:"#"}},[t._v("封面")])]),a("li",{staticClass:"selectionLi"},[a("a",{attrs:{href:"#skill"}},[t._v("技能")])]),a("li",{staticClass:"selectionLi"},[a("a",{attrs:{href:"#portfolio"}},[t._v("作品")])]),a("li",{staticClass:"selectionLi"},[a("a",{attrs:{href:"#contact"}},[t._v("與我聯絡")])])])])])}],u={},v=u,p=(a("ab55"),a("2877")),h=Object(p["a"])(v,r,o,!1,null,"3eef6ebe",null),m=h.exports,d=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"titlePage"},[i("main",{staticClass:"main"},[i("div",{staticClass:"content"},[i("title",{staticClass:"title"},[i("h1",{staticClass:"name"},[t._v("陳奕里"),i("span",{staticClass:"birthday"},[t._v("1995.11.19")])]),i("h3",{staticClass:"f2edv"},[t._v("網頁前端工程師")])]),i("p",[t._v("行銷系畢業，基於想要具備高強度的專業技術，並看中軟體開發技術能力更能反應在工作前景上，所以選擇轉職為前端工程師。自身也對軟體開發有著不小的興趣及好奇心，認為軟體開發的世界有無窮的學習空間及技術的頻繁迭代，更能夠憑藉自身對於技術追求獲取得高的報酬及成就。")]),i("div",{staticClass:"buttonWrap"},[i("a",{staticClass:"contactMe",attrs:{href:"#contact"}},[t._v("與我聯絡"),i("i",{staticClass:"uil uil-message mesIcon"})]),i("a",{staticClass:"contactMe ml8 dlCV",attrs:{href:"./static/YiliChen_resume.pdf",download:""}},[t._v("下載履歷"),i("i",{staticClass:"uil uil-folder-download mesIcon"})])])]),i("div",{staticClass:"imgWrap"},[i("img",{attrs:{src:a("609e"),alt:""}})])])])}],g={created:function(){var t=this;this.toggleScreen(),window.onresize=function(){t.toggleScreen()}},data:function(){return{isMobile:!1}},methods:{toggleScreen:function(){document.documentElement.clientWidth<600&&(this.isMobile=!0)}}},C=g,_=(a("c11b"),Object(p["a"])(C,d,f,!1,null,"7efe42a0",null)),b=_.exports,w=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about",attrs:{id:"skill"}},[a("h1",{staticClass:"title"},[a("svg",{staticClass:"skillIcon",attrs:{t:"1646908584614",viewBox:"0 0 1025 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5100",width:"200",height:"200"}},[a("path",{attrs:{d:"M254.037315 745.648h267.208c11.52 19.344 24.616 37.304 39.44 53.536h-306.64v-53.536z m0-84.688h231.312a358.4 358.4 0 0 1-10.112-53.504h-221.2v53.504z m0-138.16H475.941315c2.304-18.288 5.712-36.256 10.72-53.496H254.021315v53.496h0.024z m431.304 358.72v46.8c0 22.384-16.76 40.6-37.336 40.6h-560.56c-20.608 0-37.304-18.216-37.304-40.6V250.08l185.76-167.68v178H138.101315v53.504h147.12V53.504h362.784c20.608 0 37.336 18.216 37.336 40.528v160.072c15.896-5.4 32.424-9.024 49.36-11.56v-148.48C734.725315 42.24 695.813315 0 648.037315 0H250.021315L0.821315 224.944v703.336c0 51.84 38.872 94.072 86.656 94.072h560.56c47.792 0 86.696-42.16 86.696-94.072v-35.28c-16.936-2.496-33.464-6.12-49.36-11.48h-0.032zM187.053315 469.336h-63.68v53.504h63.68v-53.504z m-63.648 329.84h63.68v-53.528h-63.68v53.536z m63.648-191.68h-63.68v53.496h63.68v-53.504z m717.744-120.336l-39.168-32.56-99.576 140.904-89.52-74.44-30.096 42.488 128.728 107.04 129.632-183.432zM1024.821315 567.824c0-149.056-111.76-270.256-249.176-270.256-137.344 0-249.08 121.24-249.08 270.256 0 149.024 111.76 270.264 249.08 270.264 137.376 0 249.144-121.2 249.144-270.264H1024.821315z m-49.36 0c0 119.464-89.624 216.8-199.848 216.8-110.16 0-199.896-97.264-199.896-216.8 0-119.528 89.56-216.792 199.896-216.792 110.224 0 199.856 97.264 199.856 216.8z","p-id":"5101"}})]),t._v(" 技能 ")]),a("main",{staticClass:"main"},[a("section",{staticClass:"js"},[a("div",{staticClass:"titleSub"},[a("div",[a("svg",{staticClass:"icon",attrs:{t:"1646902344799",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2575",width:"200",height:"200"}},[a("path",{attrs:{d:"M128 128h768v768H128V128m201.813333 641.706667c17.066667 36.266667 50.773333 66.133333 108.373334 66.133333 64 0 107.946667-34.133333 107.946666-108.8v-246.613333h-72.533333V725.333333c0 36.693333-14.933333 46.08-38.4 46.08-24.746667 0-34.986667-17.066667-46.506667-37.12l-58.88 35.413334m255.146667-7.68c21.333333 41.813333 64.426667 73.813333 131.84 73.813333 68.266667 0 119.466667-35.413333 119.466667-100.693333 0-60.16-34.56-87.04-96-113.493334l-17.92-7.68c-31.146667-13.226667-44.373333-22.186667-44.373334-43.52 0-17.493333 13.226667-31.146667 34.56-31.146666 20.48 0 34.133333 8.96 46.506667 31.146666l55.893333-37.12c-23.466667-40.96-56.746667-56.746667-102.4-56.746666-64.426667 0-105.813333 40.96-105.813333 95.146666 0 58.88 34.56 86.613333 86.613333 108.8l17.92 7.68c33.28 14.506667 52.906667 23.466667 52.906667 48.213334 0 20.48-19.2 35.413333-49.066667 35.413333-35.413333 0-55.893333-18.346667-71.253333-43.946667l-58.88 34.133334z",fill:"#FFCA28","p-id":"2576"}})])]),a("span",[t._v("JavaScript")])]),t._m(0)]),a("section",{staticClass:"htmlCss"},[a("div",{staticClass:"titleSub"},[a("div",[a("svg",{staticClass:"icon",attrs:{t:"1646894640396",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2093",width:"200",height:"200"}},[a("path",{attrs:{d:"M89.088 59.392l62.464 803.84c1.024 12.288 9.216 22.528 20.48 25.6L502.784 993.28c6.144 2.048 12.288 2.048 18.432 0l330.752-104.448c11.264-4.096 19.456-14.336 20.48-25.6l62.464-803.84c1.024-17.408-12.288-31.744-29.696-31.744H118.784c-17.408 0-31.744 14.336-29.696 31.744z",fill:"#FC490B","p-id":"2094"}}),a("path",{attrs:{d:"M774.144 309.248h-409.6l12.288 113.664h388.096l-25.6 325.632-227.328 71.68-227.328-71.68-13.312-169.984h118.784v82.944l124.928 33.792 123.904-33.792 10.24-132.096H267.264L241.664 204.8h540.672z",fill:"#FFFFFF","p-id":"2095"}})]),a("svg",{staticClass:"icon",attrs:{t:"1646902372867",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3426",width:"200",height:"200"}},[a("path",{attrs:{d:"M88.064 27.648l77.824 871.424L512 996.352l346.112-97.28 77.824-871.424z",fill:"#2196F3","p-id":"3427"}}),a("path",{attrs:{d:"M771.072 312.32l-10.24 109.568-29.696 328.704L512 811.008l-220.16-60.416-14.336-172.032h107.52l7.168 89.088L512 700.416l119.808-32.768 16.384-148.48-375.808 1.024-11.264-101.376 395.264-4.096 8.192-108.544-413.696 1.024-7.168-101.376h536.576z",fill:"#FAFAFA","p-id":"3428"}})])]),a("span",[t._v("HTML/CSS (Layout)")])]),t._m(1)]),a("section",{staticClass:"other"},[a("div",{staticClass:"titleSub"},[a("div",[a("svg",{staticClass:"icon",attrs:{t:"1646902418191",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4461",width:"200",height:"200"}},[a("path",{attrs:{d:"M707.2 79.9H238.6c-11.6 0-21 9.4-21 21V923c0 11.6 9.4 21 21 21h704.9V316.3L707.2 79.9",fill:"#FFFFFF","p-id":"4462"}}),a("path",{attrs:{d:"M943.6 960h-705c-20.4 0-37-16.6-37-37V100.9c0-20.4 16.6-37 37-37h468.6c4.2 0 8.3 1.7 11.3 4.7L954.9 305c3 3 4.7 7.1 4.7 11.3V944c0 8.9-7.2 16-16 16z m-705-864.1c-2.7 0-5 2.2-5 5V923c0 2.7 2.2 5 5 5h689V323l-227-227h-462z",fill:"#00365B","p-id":"4463"}}),a("path",{attrs:{d:"M943.6 316.3H707.2V79.9z",fill:"#FFFFFF","p-id":"4464"}}),a("path",{attrs:{d:"M943.6 332.3H707.2c-8.8 0-16-7.2-16-16V79.9c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5L954.9 305c4.6 4.6 5.9 11.5 3.5 17.4-2.5 6-8.3 9.9-14.8 9.9z m-220.4-32H905L723.2 118.6v181.7z",fill:"#00365B","p-id":"4465"}}),a("path",{attrs:{d:"M104.7 414.2h698.8c22.4 0 40.6 19.8 40.6 44.3v301.4c0 24.5-18.2 44.3-40.6 44.3H104.7c-22.4 0-40.6-19.8-40.6-44.3V458.5c-0.1-24.5 18.1-44.3 40.6-44.3z",fill:"#369FB6","p-id":"4466"}}),a("path",{attrs:{d:"M211 602.5m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z",fill:"#FFFFFF","p-id":"4467"}}),a("path",{attrs:{d:"M453 602.5m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z",fill:"#FFFFFF","p-id":"4468"}}),a("path",{attrs:{d:"M695 602.5m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z",fill:"#FFFFFF","p-id":"4469"}})])]),a("span",[t._v("Other")])]),t._m(2)])])])},x=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"list"},[a("li",[a("span",{staticClass:"listName"},[t._v("| Vue.js")]),a("br"),a("span",{staticClass:"listNameContent"},[a("span",[t._v("VueRouter")]),a("span",[t._v("Vuex")]),a("span",[t._v("使用Vue CLI建置專案")])])]),a("li",[a("span",{staticClass:"listName"},[t._v("| AJAX")])]),a("li",[a("span",{staticClass:"listName"},[t._v("| API串接")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"list"},[a("li",[a("span",{staticClass:"listName"},[t._v("| CSS預處理器 ")]),a("span",{staticClass:"listNameContent"},[t._v("SCSS / SASS")])]),a("li",[a("span",{staticClass:"listName"},[t._v("| RWD響應式頁面 ")])]),a("li",[a("span",{staticClass:"listName"},[t._v("| Element UI建構後台系統")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"list"},[a("li",[a("span",{staticClass:"listName"},[t._v("| Git")]),a("span",{staticClass:"listNameContent"},[t._v("基本單人向使用")])]),a("li",[a("span",{staticClass:"listName"},[t._v("| Firebase")]),a("span",{staticClass:"listNameContent"},[t._v("作為後端數據庫")])]),a("li",[a("span",{staticClass:"listName"},[t._v("| 主要開發工具")]),a("br"),a("span",{staticClass:"listNameContent"},[a("span",[t._v("MacOS")]),a("span",[t._v("VSCode")])])]),a("li",[a("span",{staticClass:"listName"},[t._v("| 其他軟體")]),a("span",{staticClass:"listNameContent"},[t._v("PhotoShop")]),a("span",{staticClass:"listNameContent"},[t._v("Responsivesively App")])])])}],F={},I=F,M=(a("89e6"),Object(p["a"])(I,w,x,!1,null,"9caae15a",null)),A=M.exports,S=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"portfolio",attrs:{id:"portfolio"}},[a("h1",{staticClass:"title"},[a("svg",{staticClass:"portfolioIcon",attrs:{t:"1646911668007",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6542",width:"200",height:"200"}},[a("path",{attrs:{d:"M298.666667 256V170.666667a42.666667 42.666667 0 0 1 42.666666-42.666667h341.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333h128a42.666667 42.666667 0 0 1 42.666667 42.666667v170.666666a42.666667 42.666667 0 0 1-85.333333 0V341.333333H213.333333v213.333334h177.92a128.042667 128.042667 0 0 1 241.493334 0H810.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v256a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667v-128a42.666667 42.666667 0 0 1 85.333333 0v85.333334h512v-170.666667h-135.253333a128.042667 128.042667 0 0 1-241.493334 0H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h128z m213.333333 384a42.666667 42.666667 0 1 0 0-85.333333 42.666667 42.666667 0 0 0 0 85.333333zM384 213.333333v42.666667h256V213.333333H384z","p-id":"6543"}})]),t._v(" 作品 ")]),a("main",{staticClass:"main"},[a("Carousel",{attrs:{imgArr:t.focusMuscleImgArr,item:t.item[0]}}),a("Carousel",{attrs:{imgArr:t.focusMuscleAdminImgArr,item:t.item[1]}})],1)])},z=[],E=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"carousel"},[a("div",{staticClass:"focusMuscleWrap"},[a("div",{staticClass:"imgWrap"},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.isImgHeader,expression:"!isImgHeader"}],staticClass:"uil uil-angle-left-b arrowIconL",on:{click:function(s){return t.toggleCarousle("left")}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.isImgTail,expression:"!isImgTail"}],staticClass:"uil uil-angle-right-b arrowIconR",on:{click:function(s){return t.toggleCarousle("right")}}}),a("transition",{attrs:{name:t.toggleImg}},[a("img",{key:t.imgArr[t.imgArrIndex],staticClass:"portfolioImg",attrs:{src:t.imgArr[t.imgArrIndex],alt:""}})]),a("img",{staticClass:"fakeWrapOfImg",attrs:{src:t.imgArr[t.imgArrIndex],alt:""}})],1)]),a("div",{staticClass:"contentWrap"},[a("Content",["focusmuscle"==t.item?a("div",[a("h3",[a("a",{attrs:{target:"break",href:"https://oz841119.github.io/focus-muscle/"}},[t._v("FocusMuscle "),a("i",{staticClass:"uil uil-link linkIcon"})]),a("a",{staticClass:"gitIconLink",attrs:{target:"break",href:"https://github.com/oz841119/focus-muscle"}},[a("i",{staticClass:"uil uil-github-alt mr4"})])]),a("div",{staticClass:"skill"},[a("span",[t._v("Vue2")]),t._v(" / "),a("span",[t._v("Firebase RESTful API")]),t._v(" / "),a("span",[t._v("原生AJAX")]),t._v(" / "),a("span",[t._v("RWD")])]),a("div",{staticClass:"introduce"},[a("p",[t._v("一個基於Vue的單頁面應用，點選對應的肌群(SVG-Path)將顯示適合的訓練動作。")]),a("p",[t._v("使用者可以針對肌群提供建議的訓練動作，後端審核後即可顯示在頁面上。")])])]):t._e(),"admin"==t.item?a("div",[a("h3",[a("a",{attrs:{target:"break",href:"https://focus-muscle.web.app/"}},[t._v("後台管理系統 "),a("i",{staticClass:"uil uil-link linkIcon"})]),a("a",{staticClass:"gitIconLink",attrs:{target:"break",href:"https://github.com/oz841119/focus-muscle-admin"}},[a("i",{staticClass:"uil uil-github-alt mr4"})])]),a("div",{staticClass:"skill"},[a("span",[t._v("Vue2")]),t._v(" / "),a("span",[t._v("VueRouter")]),t._v(" / "),a("span",[t._v("Vuex")]),t._v(" / "),a("span",[t._v("Firebase")]),t._v(" / "),a("span",[t._v("Element UI")])]),a("div",{staticClass:"introduce"},[a("p",[t._v("FocusMuscle的後台管理系統。用以針對訓練動作進行CRUD，包括帳號登入，路由攔截等。")]),a("p",[t._v("基於功能實現，在登入頁面同時實現註冊帳號功能，但在實際的多數管理系統是不需要的。")])])]):t._e()])],1)])},k=[],H=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._t("default")],2)},N=[],V={},L=V,y=(a("d4b2"),Object(p["a"])(L,H,N,!1,null,"31aabb42",null)),O=y.exports,B={components:{Content:O},props:["imgArr","item"],data:function(){return{isImgHeader:!0,isImgTail:!1,imgArrIndex:0,toggleImg:"toggleLeft"}},methods:{toggleCarousle:function(t){"right"==t&&(this.imgArrIndex+=1,this.toggleImg="toggleLeft"),"left"==t&&(this.imgArrIndex-=1,this.toggleImg="toggleRight")}},watch:{imgArrIndex:{handler:function(){0==this.imgArrIndex?this.isImgHeader=!0:this.isImgHeader=!1,this.imgArrIndex==this.imgArr.length-1?this.isImgTail=!0:this.isImgTail=!1}}}},j=B,P=(a("250f"),Object(p["a"])(j,E,k,!1,null,"35ddc6ab",null)),$=P.exports,Y={components:{Carousel:$},data:function(){return{item:["focusmuscle","admin"],focusMuscleImgArr:[a("610b"),a("a3b0")],focusMuscleAdminImgArr:[a("3a01"),a("8377")]}}},R=Y,T=(a("b06f"),Object(p["a"])(R,S,z,!1,null,"4c2df5be",null)),W=T.exports,J=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"contact",attrs:{id:"contact"}},[a("h1",{staticClass:"title"},[a("svg",{staticClass:"contactIcon",attrs:{t:"1646914640650",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1975",width:"200",height:"200"}},[a("path",{attrs:{d:"M640 416l-256 0c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S657.696 416 640 416z","p-id":"1976"}}),a("path",{attrs:{d:"M579.264 544 384 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l195.264 0c17.696 0 32 14.336 32 32S596.928 544 579.264 544z","p-id":"1977"}}),a("path",{attrs:{d:"M962.24 448c0-211.744-200.96-384-448-384s-448 172.256-448 384c0 116.512 63.04 226.048 172.928 300.672 14.624 9.984 34.528 6.144 44.448-8.512 9.92-14.624 6.112-34.528-8.512-44.448C183.04 633.216 130.24 542.944 130.24 448c0-176.448 172.256-320 384-320 211.744 0 384 143.552 384 320 0 176.448-172.256 320-384 320-1.984 0-3.68 0.768-5.568 1.12-15.136-2.72-30.464 5.216-35.776 20.192-6.144 17.376-46.368 46.656-94.144 73.792 17.44-58.208 9.088-70.688 3.488-78.976-6.72-9.984-17.92-15.936-29.92-15.936-17.664 0-32 14.304-32 32 0 5.824 1.536 11.264 4.256 15.968-3.232 18.208-17.216 60.832-33.056 99.84-4.928 12.096-1.984 25.984 7.392 35.072 6.08 5.888 14.112 8.992 22.272 8.992 4.384 0 8.8-0.896 12.992-2.752 36.48-16.256 147.648-69.12 187.616-125.632C765.344 828.16 962.24 657.568 962.24 448z","p-id":"1978"}})]),t._v(" 聯絡資料 ")]),t._m(0)])},U=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("main",{staticClass:"main"},[i("div",{staticClass:"contactContent"},[i("ul",[i("li",[i("i",{staticClass:"uil uil-envelope-check mr4"}),i("span",[t._v("電子信箱： ")]),i("span",[t._v("oz841119@gmail.com")])]),i("li",[i("i",{staticClass:"uil uil-mobile-android mr4"}),i("span",[t._v("聯絡電話： ")]),i("span",[t._v("0983 694 839")])]),i("li",[i("i",{staticClass:"uil uil-github-alt mr4"}),i("span",[t._v("GitHub： ")]),i("a",{staticClass:"link",attrs:{href:"https://github.com/oz841119",target:"break"}},[t._v("https://github.com/oz841119"),i("i",{staticClass:"uil uil-link"})])])]),i("hr",{staticClass:"hr"}),i("div",{staticClass:"ps"},[i("p",{staticClass:"mb10 ifLine"},[t._v("如果您想要與我進行更簡易且即時的文字對話")]),i("div",{staticClass:"line"},[i("div",{staticClass:"lineLinkAndID"},[i("div",[i("i",{staticClass:"uil uil-line mr4"}),i("span",[t._v("LINE： ")]),t._v(" "),i("span",[t._v("andy334782")])]),i("a",{staticClass:"link",attrs:{href:"https://line.me/ti/p/08BEaYZHEK"}},[t._v("https://line.me/ti/p/08BEaYZHEK")])]),i("div",{staticClass:"qrCodeWrap ml8"},[i("img",{attrs:{src:a("1768"),alt:""}})])])])])])}],Z={},D=Z,K=(a("2ae1"),Object(p["a"])(D,J,U,!1,null,"eafb472a",null)),G=K.exports,X={components:{TitlePage:b,Skill:A,Portfolio:W,Contact:G,NavBar:m},data:function(){return{isNavBar:!0,lastScrollY:scrollY}},created:function(){window.addEventListener("scroll",this.scrolling)},methods:{scrolling:function(){scrollY>this.lastScrollY?this.isNavBar=!1:this.isNavBar=!0,this.lastScrollY=scrollY,Math.ceil(scrollY)+window.innerHeight!=document.documentElement.offsetHeight&&0!=scrollY||(this.isNavBar=!0)}}},q=X,Q=(a("25a6"),Object(p["a"])(q,n,c,!1,null,"7e04c698",null)),tt=Q.exports,st={name:"App",components:{Page:tt},data:function(){return{options:{licenseKey:"YOUR_KEY_HEERE"}}}},at=st,it=Object(p["a"])(at,e,l,!1,null,null,null),et=it.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(et)}}).$mount("#app")},"609e":function(t,s,a){t.exports=a.p+"img/myPhoto.f38ea2f9.png"},"610b":function(t,s,a){t.exports=a.p+"img/focusmuscle.4f4bcd3a.png"},"750a":function(t,s,a){},8377:function(t,s,a){t.exports=a.p+"img/admin.003d1beb.png"},"89e6":function(t,s,a){"use strict";a("30e7")},"917d":function(t,s,a){},a3b0:function(t,s,a){t.exports=a.p+"img/focusmuscle2.7b9cc55a.png"},ab55:function(t,s,a){"use strict";a("750a")},b06f:function(t,s,a){"use strict";a("917d")},c11b:function(t,s,a){"use strict";a("f1bb")},d4b2:function(t,s,a){"use strict";a("09d2")},f1bb:function(t,s,a){}});
//# sourceMappingURL=app.dfc0ebbd.js.map