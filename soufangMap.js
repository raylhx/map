window.BMAP_AUTHENTIC_KEY="3a345e5b8b56a7f80605cd95d64634a8";(function(){function aa(a){throw a;}var j=void 0,o=!0,p=null,q=!1;function s(){return function(){}}function ba(a){return function(b){this[a]=b}}function u(a){return function(){return this[a]}}function ca(a){return function(){return a}}var da,ga=[];function ha(a){return function(){return ga[a].apply(this,arguments)}}function ia(a,b){return ga[a]=b}var ja,x=ja=x||{version:"1.3.4"};x.ba="$BAIDU$";window[x.ba]=window[x.ba]||{};x.object=x.object||{}; x.extend=x.object.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};x.D=x.D||{};x.D.$=function(a){return"string"==typeof a||a instanceof String?document.getElementById(a):a&&a.nodeName&&(1==a.nodeType||9==a.nodeType)?a:p};x.$=x.Cc=x.D.$;x.D.U=function(a){a=x.D.$(a);if(a===p)return a;a.style.display="none";return a};x.U=x.D.U;x.lang=x.lang||{};x.lang.ug=function(a){return"[object String]"==Object.prototype.toString.call(a)};x.ug=x.lang.ug; x.D.Pj=function(a){return x.lang.ug(a)?document.getElementById(a):a};x.Pj=x.D.Pj;x.D.getElementsByClassName=function(a,b){var c;if(a.getElementsByClassName)c=a.getElementsByClassName(b);else{var d=a;d==p&&(d=document);c=[];var d=d.getElementsByTagName("*"),e=d.length,f=RegExp("(^|\\s)"+b+"(\\s|$)"),g,i;for(i=g=0;g<e;g++)f.test(d[g].className)&&(c[i]=d[g],i++)}return c};x.getElementsByClassName=x.D.getElementsByClassName; x.D.contains=function(a,b){var c=x.D.Pj,a=c(a),b=c(b);return a.contains?a!=b&&a.contains(b):!!(a.compareDocumentPosition(b)&16)};x.da=x.da||{};/msie (\d+\.\d)/i.test(navigator.userAgent)&&(x.da.la=x.la=document.documentMode||+RegExp.$1);var ka={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",usemap:"useMap",frameborder:"frameBorder"};8>x.da.la?(ka["for"]="htmlFor",ka["class"]="className"):(ka.htmlFor="for",ka.className="class");x.D.AG=ka; x.D.nF=function(a,b,c){a=x.D.$(a);if(a===p)return a;if("style"==b)a.style.cssText=c;else{b=x.D.AG[b]||b;a.setAttribute(b,c)}return a};x.nF=x.D.nF;x.D.oF=function(a,b){a=x.D.$(a);if(a===p)return a;for(var c in b)x.D.nF(a,c,b[c]);return a};x.oF=x.D.oF;x.Rk=x.Rk||{};(function(){var a=RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g");x.Rk.trim=function(b){return(""+b).replace(a,"")}})();x.trim=x.Rk.trim; x.Rk.Po=function(a,b){var a=""+a,c=Array.prototype.slice.call(arguments,1),d=Object.prototype.toString;if(c.length){c=c.length==1?b!==p&&/\[object Array\]|\[object Object\]/.test(d.call(b))?b:c:c;return a.replace(/#\{(.+?)\}/g,function(a,b){var g=c[b];"[object Function]"==d.call(g)&&(g=g(b));return"undefined"==typeof g?"":g})}return a};x.Po=x.Rk.Po; x.D.Sb=function(a,b){a=x.D.$(a);if(a===p)return a;for(var c=a.className.split(/\s+/),d=b.split(/\s+/),e,f=d.length,g,i=0;i<f;++i){g=0;for(e=c.length;g<e;++g)if(c[g]==d[i]){c.splice(g,1);break}}a.className=c.join(" ");return a};x.Sb=x.D.Sb; x.D.Ix=function(a,b,c){a=x.D.$(a);if(a===p)return a;var d;if(a.insertAdjacentHTML)a.insertAdjacentHTML(b,c);else{d=a.ownerDocument.createRange();b=b.toUpperCase();if(b=="AFTERBEGIN"||b=="BEFOREEND"){d.selectNodeContents(a);d.collapse(b=="AFTERBEGIN")}else{b=b=="BEFOREBEGIN";d[b?"setStartBefore":"setEndAfter"](a);d.collapse(b)}d.insertNode(d.createContextualFragment(c))}return a};x.Ix=x.D.Ix;x.D.show=function(a){a=x.D.$(a);if(a===p)return a;a.style.display="";return a};x.show=x.D.show; x.D.FD=function(a){a=x.D.$(a);return a===p?a:a.nodeType==9?a:a.ownerDocument||a.document};x.D.Ua=function(a,b){a=x.D.$(a);if(a===p)return a;for(var c=b.split(/\s+/),d=a.className,e=" "+d+" ",f=0,g=c.length;f<g;f++)e.indexOf(" "+c[f]+" ")<0&&(d=d+(" "+c[f]));a.className=d;return a};x.Ua=x.D.Ua;x.D.DB=x.D.DB||{};x.D.Kl=x.D.Kl||[];x.D.Kl.filter=function(a,b,c){for(var d=0,e=x.D.Kl,f;f=e[d];d++)if(f=f[c])b=f(a,b);return b}; x.Rk.rO=function(a){return a.indexOf("-")<0&&a.indexOf("_")<0?a:a.replace(/[-_][^-_]/g,function(a){return a.charAt(1).toUpperCase()})};x.D.E_=function(a){x.D.$s(a,"expand")?x.D.Sb(a,"expand"):x.D.Ua(a,"expand")}; x.D.$s=function(a){if(arguments.length<=0||typeof a==="function")return this;if(this.size()<=0)return q;var a=a.replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g," "),b=a.split(" "),c;x.forEach(this,function(a){for(var a=a.className,e=0;e<b.length;e++)if(!~(" "+a+" ").indexOf(" "+b[e]+" ")){c=q;return}c!==q&&(c=o)});return c}; x.D.tj=function(a,b){var c=x.D,a=c.$(a);if(a===p)return a;var b=x.Rk.rO(b),d=a.style[b];if(!d)var e=c.DB[b],d=a.currentStyle||(x.da.la?a.style:getComputedStyle(a,p)),d=e&&e.get?e.get(a,d):d[e||b];if(e=c.Kl)d=e.filter(b,d,"get");return d};x.tj=x.D.tj;/opera\/(\d+\.\d)/i.test(navigator.userAgent)&&(x.da.opera=+RegExp.$1);x.da.kM=/webkit/i.test(navigator.userAgent);x.da.mY=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);x.da.rE="CSS1Compat"==document.compatMode; x.D.ha=function(a){a=x.D.$(a);if(a===p)return a;var b=x.D.FD(a),c=x.da,d=x.D.tj;c.mY>0&&b.getBoxObjectFor&&d(a,"position");var e={left:0,top:0},f;if(a==(c.la&&!c.rE?b.body:b.documentElement))return e;if(a.getBoundingClientRect){a=a.getBoundingClientRect();e.left=Math.floor(a.left)+Math.max(b.documentElement.scrollLeft,b.body.scrollLeft);e.top=Math.floor(a.top)+Math.max(b.documentElement.scrollTop,b.body.scrollTop);e.left=e.left-b.documentElement.clientLeft;e.top=e.top-b.documentElement.clientTop; a=b.body;b=parseInt(d(a,"borderLeftWidth"));d=parseInt(d(a,"borderTopWidth"));if(c.la&&!c.rE){e.left=e.left-(isNaN(b)?2:b);e.top=e.top-(isNaN(d)?2:d)}}else{f=a;do{e.left=e.left+f.offsetLeft;e.top=e.top+f.offsetTop;if(c.kM>0&&d(f,"position")=="fixed"){e.left=e.left+b.body.scrollLeft;e.top=e.top+b.body.scrollTop;break}f=f.offsetParent}while(f&&f!=a);if(c.opera>0||c.kM>0&&d(a,"position")=="absolute")e.top=e.top-b.body.offsetTop;for(f=a.offsetParent;f&&f!=b.body;){e.left=e.left-f.scrollLeft;if(!c.opera|| f.tagName!="TR")e.top=e.top-f.scrollTop;f=f.offsetParent}}return e};/firefox\/(\d+\.\d)/i.test(navigator.userAgent)&&(x.da.nf=+RegExp.$1);/BIDUBrowser/i.test(navigator.userAgent)&&(x.da.u1=o);var la=navigator.userAgent;/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la)&&!/chrome/i.test(la)&&(x.da.hF=+(RegExp.$1||RegExp.$2));/chrome\/(\d+\.\d)/i.test(navigator.userAgent)&&(x.da.dC=+RegExp.$1);x.kc=x.kc||{}; x.kc.Gb=function(a,b){var c,d,e=a.length;if("function"==typeof b)for(d=0;d<e;d++){c=a[d];c=b.call(a,c,d);if(c===q)break}return a};x.Gb=x.kc.Gb;x.lang.ba=function(){return"TANGRAM__"+(window[x.ba]._counter++).toString(36)};window[x.ba]._counter=window[x.ba]._counter||1;window[x.ba]._instances=window[x.ba]._instances||{};x.lang.jt=function(a){return"[object Function]"==Object.prototype.toString.call(a)};x.lang.Ca=function(a){this.ba=a||x.lang.ba();window[x.ba]._instances[this.ba]=this}; window[x.ba]._instances=window[x.ba]._instances||{};x.lang.Ca.prototype.gi=ha(0);x.lang.Ca.prototype.toString=function(){return"[object "+(this.wQ||"Object")+"]"};x.lang.Yy=function(a,b){this.type=a;this.returnValue=o;this.target=b||p;this.currentTarget=p}; x.lang.Ca.prototype.addEventListener=function(a,b,c){if(x.lang.jt(b)){!b.al&&(b.al={});!this.Hi&&(this.Hi={});var d=this.Hi,e;if(typeof c=="string"&&c){/[^\w\-]/.test(c)&&aa("nonstandard key:"+c);e=b.Ax=c}a.indexOf("on")!=0&&(a="on"+a);typeof d[a]!="object"&&(d[a]={});typeof b.al[a]!="object"&&(b.al[a]={});e=e||x.lang.ba();b.al[a].Ax=e;d[a][e]=b}}; x.lang.Ca.prototype.removeEventListener=function(a,b){a.indexOf("on")!=0&&(a="on"+a);if(x.lang.jt(b)){if(!b.al||!b.al[a])return;b=b.al[a].Ax}else if(!x.lang.ug(b))return;!this.Hi&&(this.Hi={});var c=this.Hi;c[a]&&c[a][b]&&delete c[a][b]}; x.lang.Ca.prototype.dispatchEvent=function(a,b){x.lang.ug(a)&&(a=new x.lang.Yy(a));!this.Hi&&(this.Hi={});var b=b||{},c;for(c in b)a[c]=b[c];var d=this.Hi,e=a.type;a.target=a.target||this;a.currentTarget=this;e.indexOf("on")!=0&&(e="on"+e);x.lang.jt(this[e])&&this[e].apply(this,arguments);if(typeof d[e]=="object")for(c in d[e])d[e][c].apply(this,arguments);return a.returnValue}; x.lang.ua=function(a,b,c){var d,e,f=a.prototype;e=new Function;e.prototype=b.prototype;e=a.prototype=new e;for(d in f)e[d]=f[d];a.prototype.constructor=a;a.v_=b.prototype;if("string"==typeof c)e.wQ=c};x.ua=x.lang.ua;x.lang.Kc=function(a){return window[x.ba]._instances[a]||p};x.platform=x.platform||{};x.platform.dM=/macintosh/i.test(navigator.userAgent);x.platform.h3=/MicroMessenger/i.test(navigator.userAgent);x.platform.lM=/windows/i.test(navigator.userAgent);x.platform.uY=/x11/i.test(navigator.userAgent);x.platform.Fm=/android/i.test(navigator.userAgent);/android (\d+\.\d)/i.test(navigator.userAgent)&&(x.platform.OJ=x.OJ=RegExp.$1);x.platform.oY=/ipad/i.test(navigator.userAgent);x.platform.nE=/iphone/i.test(navigator.userAgent); function ma(a,b){a.domEvent=b=window.event||b;a.clientX=b.clientX||b.pageX;a.clientY=b.clientY||b.pageY;a.offsetX=b.offsetX||b.layerX;a.offsetY=b.offsetY||b.layerY;a.screenX=b.screenX;a.screenY=b.screenY;a.ctrlKey=b.ctrlKey||b.metaKey;a.shiftKey=b.shiftKey;a.altKey=b.altKey;if(b.touches){a.touches=[];for(var c=0;c<b.touches.length;c++)a.touches.push({clientX:b.touches[c].clientX,clientY:b.touches[c].clientY,screenX:b.touches[c].screenX,screenY:b.touches[c].screenY,pageX:b.touches[c].pageX,pageY:b.touches[c].pageY, target:b.touches[c].target,identifier:b.touches[c].identifier})}if(b.changedTouches){a.changedTouches=[];for(c=0;c<b.changedTouches.length;c++)a.changedTouches.push({clientX:b.changedTouches[c].clientX,clientY:b.changedTouches[c].clientY,screenX:b.changedTouches[c].screenX,screenY:b.changedTouches[c].screenY,pageX:b.changedTouches[c].pageX,pageY:b.changedTouches[c].pageY,target:b.changedTouches[c].target,identifier:b.changedTouches[c].identifier})}if(b.targetTouches){a.targetTouches=[];for(c=0;c< b.targetTouches.length;c++)a.targetTouches.push({clientX:b.targetTouches[c].clientX,clientY:b.targetTouches[c].clientY,screenX:b.targetTouches[c].screenX,screenY:b.targetTouches[c].screenY,pageX:b.targetTouches[c].pageX,pageY:b.targetTouches[c].pageY,target:b.targetTouches[c].target,identifier:b.targetTouches[c].identifier})}a.rotation=b.rotation;a.scale=b.scale;return a}x.lang.Rw=function(a){var b=window[x.ba];b.HS&&delete b.HS[a]};x.event={}; x.M=x.event.M=function(a,b,c){if(!(a=x.$(a)))return a;b=b.replace(/^on/,"");a.addEventListener?a.addEventListener(b,c,q):a.attachEvent&&a.attachEvent("on"+b,c);return a};x.bd=x.event.bd=function(a,b,c){if(!(a=x.$(a)))return a;b=b.replace(/^on/,"");a.removeEventListener?a.removeEventListener(b,c,q):a.detachEvent&&a.detachEvent("on"+b,c);return a}; x.D.$s=function(a,b){if(!a||!a.className||typeof a.className!="string")return q;var c=-1;try{c=a.className==b||a.className.search(RegExp("(\\s|^)"+b+"(\\s|$)"))}catch(d){return q}return c>-1};x.SK=function(){function a(a){document.addEventListener&&(this.element=a,this.VK=this.yk?"touchstart":"mousedown",this.nD=this.yk?"touchmove":"mousemove",this.mD=this.yk?"touchend":"mouseup",this.qh=q,this.eu=this.du=0,this.element.addEventListener(this.VK,this,q),ja.M(this.element,"mousedown",s()),this.handleEvent(p))}a.prototype={yk:"ontouchstart"in window||"createTouch"in document,start:function(a){na(a);this.qh=q;this.du=this.yk?a.touches[0].clientX:a.clientX;this.eu=this.yk?a.touches[0].clientY: a.clientY;this.element.addEventListener(this.nD,this,q);this.element.addEventListener(this.mD,this,q)},move:function(a){oa(a);var c=this.yk?a.touches[0].clientY:a.clientY;if(10<Math.abs((this.yk?a.touches[0].clientX:a.clientX)-this.du)||10<Math.abs(c-this.eu))this.qh=o},end:function(a){oa(a);this.qh||(a=document.createEvent("Event"),a.initEvent("tap",q,o),this.element.dispatchEvent(a));this.element.removeEventListener(this.nD,this,q);this.element.removeEventListener(this.mD,this,q)},handleEvent:function(a){if(a)switch(a.type){case this.VK:this.start(a); break;case this.nD:this.move(a);break;case this.mD:this.end(a)}}};return function(b){return new a(b)}}();var z=window.BMap||{};z.version="2.0";z.HU=0.34>Math.random();0<=z.version.indexOf("#")&&(z.version="2.0");z.zr=[];z.Ue=function(a){this.zr.push(a)};z.pr=[];z.Rm=function(a){this.pr.push(a)}; z.VU=z.apiLoad||function(){z.version&&z.version>=1.5&&pa(z.Fc+"?qt=verify&ak="+qa,function(a){if(a&&a.error!==0){if(typeof map!=="undefined"){map.Na().innerHTML="";map.Hi={}}z=p;var b="\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";switch(a.error){case 101:b= "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";break;case 102:b="\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"}alert(b)}})}; var qa=window.BMAP_AUTHENTIC_KEY;window.BMAP_AUTHENTIC_KEY=p;var ra=window.BMap_loadScriptTime,sa=(new Date).getTime(),ta=p,ua=o,va=5042,wa=5002,xa=5003,ya="load_mapclick",za=5038,Ba=5041,Ca=5047,Da=5036,Fa=5039,Ga=5037,Ha=5040,Ia=5011,Ja=7E3;var Ka=0; function La(a,b){if(a=x.$(a)){var c=this;x.lang.Ca.call(c);b=b||{};c.K={jC:200,Yb:o,Zw:q,fD:o,Mo:o,No:b.enableWheelZoom||q,QK:o,hD:o,Es:o,Xw:o,km:o,Ko:b.enable3DBuilding||q,Gc:25,n0:240,JU:450,Xb:E.Xb,Fd:E.Fd,Lx:!!b.Lx,gc:Math.round(b.minZoom)||1,$b:Math.round(b.maxZoom)||19,Ib:b.mapType||Ma,Y3:q,MK:b.drawer||Ka,Yw:o,Vw:500,vW:b.enableHighResolution!==q,mj:b.enableMapClick!==q,devicePixelRatio:b.devicePixelRatio||window.devicePixelRatio||1,RF:99,ue:b.mapStyle||p,CY:b.logoControl===q?q:o,bV:[],xw:b.beforeClickIcon|| p};c.K.ue&&(this.dY(c.K.ue.controls),this.YL(c.K.ue.geotableId));c.K.ue&&c.K.ue.styleId&&c.R2(c.K.ue.styleId);c.K.cm={dark:{backColor:"#2D2D2D",textColor:"#bfbfbf",iconUrl:"dicons"},normal:{backColor:"#F3F1EC",textColor:"#c61b1b",iconUrl:"icons"},light:{backColor:"#EBF8FC",textColor:"#017fb4",iconUrl:"licons"}};b.enableAutoResize&&(c.K.Xw=b.enableAutoResize);b.enableStreetEntrance===q&&(c.K.km=b.enableStreetEntrance);b.enableDeepZoom===q&&(c.K.QK=b.enableDeepZoom);var d=c.K.bV;if(F())for(var e=0, f=d.length;e<f;e++)if(x.da[d[e]]){c.K.devicePixelRatio=1;break}d=-1<navigator.userAgent.toLowerCase().indexOf("android");e=-1<navigator.userAgent.toLowerCase().indexOf("mqqbrowser");if(-1<navigator.userAgent.toLowerCase().indexOf("UCBrowser")||d&&e)c.K.RF=99;c.Va=a;c.wB(a);a.unselectable="on";a.innerHTML="";a.appendChild(c.va());b.size&&this.ye(b.size);d=c.Ab();c.width=d.width;c.height=d.height;c.offsetX=0;c.offsetY=0;c.platform=a.firstChild;c.ve=c.platform.firstChild;c.ve.style.width=c.width+"px"; c.ve.style.height=c.height+"px";c.Vd={};c.gf=new H(0,0);c.mc=new H(0,0);c.Oa=3;c.Lc=0;c.BC=p;c.AC=p;c.Wb="";c.Dw="";c.Oh={};c.Oh.custom={};c.Ta=0;b.useWebGL===q&&Na(q);c.P=new Oa(a,{Pf:"api",MS:o});c.P.U();c.P.sF(c);b=b||{};d=c.Ib=c.K.Ib;c.xe=d.$o();d===Pa&&Ra(wa);d===Sa&&Ra(xa);d=c.K;d.JO=Math.round(b.minZoom);d.IO=Math.round(b.maxZoom);c.Su();c.R={Hc:q,lc:0,nt:0,pM:0,l3:0,aC:q,$E:-1,Pe:[]};c.platform.style.cursor=c.K.Xb;for(e=0;e<z.zr.length;e++)z.zr[e](c);c.R.$E=e;c.ca();I.load("map",function(){c.yb()}); c.K.mj&&(setTimeout(function(){Ra(ya)},1E3),I.load("mapclick",function(){window.MPC_Mgr=window.MPC_Mgr||{};window.MPC_Mgr[c.ba]=new Ta(c)},o));Va()&&I.load("oppc",function(){c.qz()});F()&&I.load("opmb",function(){c.qz()});a=p;c.KB=[]}}x.lang.ua(La,x.lang.Ca,"Map"); x.extend(La.prototype,{va:function(){var a=M("div"),b=a.style;b.overflow="visible";b.position="absolute";b.zIndex="0";b.top=b.left="0px";var b=M("div",{"class":"BMap_mask"}),c=b.style;c.position="absolute";c.top=c.left="0px";c.zIndex="9";c.overflow="hidden";c.WebkitUserSelect="none";a.appendChild(b);return a},wB:function(a){var b=a.style;b.overflow="hidden";"absolute"!==Wa(a).position&&(b.position="relative",b.zIndex=0);b.backgroundColor="#F3F1EC";b.color="#000";b.textAlign="left"},ca:function(){var a= this;a.Tr=function(){var b=a.Ab();if(a.width!==b.width||a.height!==b.height){var c=new N(a.width,a.height),d=new O("onbeforeresize");d.size=c;a.dispatchEvent(d);a.hk((b.width-a.width)/2,(b.height-a.height)/2);a.ve.style.width=(a.width=b.width)+"px";a.ve.style.height=(a.height=b.height)+"px";c=new O("onresize");c.size=b;a.dispatchEvent(c)}};a.K.Xw&&(a.R.Xr=setInterval(a.Tr,80))},hk:function(a,b,c,d){var e=this.pa().Ac(this.fa()),f=this.xe,g=o;c&&H.cM(c)&&(this.gf=new H(c.lng,c.lat),g=q);if(c=c&&d? f.Im(c,this.Wb):this.mc)if(this.mc=new H(c.lng+a*e,c.lat-b*e),(a=f.ph(this.mc,this.Wb))&&g)this.gf=a},Eg:function(a,b){if(Xa(a)&&(this.Su(),this.dispatchEvent(new O("onzoomstart")),a=this.Tn(a).zoom,a!==this.Oa)){this.Lc=this.Oa;this.Oa=a;var c;b?c=b:this.ih()&&(c=this.ih().ha());c&&(c=this.bc(c,this.Lc),this.hk(this.width/2-c.x,this.height/2-c.y,this.wb(c,this.Lc),o));this.dispatchEvent(new O("onzoomstartcode"))}},Nc:function(a){this.Eg(a)},VF:function(a){this.Eg(this.Oa+1,a)},WF:function(a){this.Eg(this.Oa- 1,a)},ui:function(a){a instanceof H&&(this.mc=this.xe.Im(a,this.Wb),this.gf=H.cM(a)?new H(a.lng,a.lat):this.xe.ph(this.mc,this.Wb))},yg:function(a,b){a=Math.round(a)||0;b=Math.round(b)||0;this.hk(-a,-b)},mw:function(a){a&&Ya(a.Ee)&&(a.Ee(this),this.dispatchEvent(new O("onaddcontrol",a)))},zN:function(a){a&&Ya(a.remove)&&(a.remove(),this.dispatchEvent(new O("onremovecontrol",a)))},so:function(a){a&&Ya(a.ra)&&(a.ra(this),this.dispatchEvent(new O("onaddcontextmenu",a)))},yp:function(a){a&&Ya(a.remove)&& (this.dispatchEvent(new O("onremovecontextmenu",a)),a.remove())},Ja:function(a){a&&Ya(a.Ee)&&(a.Ee(this),this.dispatchEvent(new O("onaddoverlay",a)))},Tb:function(a){a&&Ya(a.remove)&&(a.remove(),this.dispatchEvent(new O("onremoveoverlay",a)))},hK:function(){this.dispatchEvent(new O("onclearoverlays"))},Xg:function(a){a&&this.dispatchEvent(new O("onaddtilelayer",a))},yh:function(a){a&&this.dispatchEvent(new O("onremovetilelayer",a))},Bg:function(a){if(this.Ib!==a){var b=new O("onsetmaptype");b.P3= this.Ib;this.Ib=this.K.Ib=a;this.xe=this.Ib.$o();this.hk(0,0,this.Ka(),o);this.Su();var c=this.Tn(this.fa()).zoom;this.Eg(c);this.dispatchEvent(b);b=new O("onmaptypechange");b.Oa=c;b.Ib=a;this.dispatchEvent(b);(a===Za||a===Sa)&&Ra(xa)}},Wf:function(a){var b=this;if(a instanceof H)b.ui(a,{noAnimation:o});else if($a(a))if(b.Ib===Pa){var c=E.fC[a];c&&(pt=c.m,b.Wf(pt))}else{var d=this.HH();d.vF(function(c){0===d.tm()&&2===d.Fa.result.type&&(b.Wf(c.wk(0).point),Pa.sk(a)&&b.pF(a))});d.search(a,{log:"center"})}}, Dd:function(a,b){"[object Undefined]"!==Object.prototype.toString.call(b)&&(b=parseInt(b));z.An("cus.fire","time",{z_loadscripttime:sa-ra});var c=this;if($a(a))if(c.Ib===Pa){var d=E.fC[a];d&&(pt=d.m,c.Dd(pt,b))}else{var e=c.HH();e.vF(function(d){if(0===e.tm()&&(2===e.Fa.result.type||11===e.Fa.result.type)){var d=d.wk(0).point,f=b||P.bx(e.Fa.content.level,c);c.Dd(d,f);Pa.sk(a)&&c.pF(a)}});e.search(a,{log:"center"})}else if(a instanceof H&&b){b=c.Tn(b).zoom;c.Lc=c.Oa||b;c.Oa=b;d=c.gf;c.gf=new H(a.lng, a.lat);c.mc=c.xe.Im(c.gf,c.Wb);c.BC=c.BC||c.Oa;c.AC=c.AC||c.gf;var f=new O("onload"),g=new O("onloadcode");f.point=new H(a.lng,a.lat);f.pixel=c.bc(c.gf,c.Oa);f.zoom=b;c.loaded||(c.loaded=o,c.dispatchEvent(f),ta||(ta=ab()));c.dispatchEvent(g);f=new O("onmoveend");f.jH="centerAndZoom";d.nb(c.gf)||c.dispatchEvent(f);c.dispatchEvent(new O("onmoveend"));c.Lc!==c.Oa&&(d=new O("onzoomend"),d.jH="centerAndZoom",c.dispatchEvent(d));c.K.Ko&&c.Ko()}},HH:function(){this.R.zM||(this.R.zM=new bb(1));return this.R.zM}, reset:function(){this.Dd(this.AC,this.BC,o)},enableDragging:function(){this.K.Yb=o},disableDragging:function(){this.K.Yb=q},enableInertialDragging:function(){this.K.Yw=o},disableInertialDragging:function(){this.K.Yw=q},enableScrollWheelZoom:function(){this.K.No=o},disableScrollWheelZoom:function(){this.K.No=q},enableContinuousZoom:function(){this.K.Mo=o},disableContinuousZoom:function(){this.K.Mo=q},enableDoubleClickZoom:function(){this.K.fD=o},disableDoubleClickZoom:function(){this.K.fD=q},enableKeyboard:function(){this.K.Zw= o},disableKeyboard:function(){this.K.Zw=q},enablePinchToZoom:function(){this.K.Es=o},disablePinchToZoom:function(){this.K.Es=q},enableAutoResize:function(){this.K.Xw=o;this.Tr();this.R.Xr||(this.R.Xr=setInterval(this.Tr,80))},disableAutoResize:function(){this.K.Xw=q;this.R.Xr&&(clearInterval(this.R.Xr),this.R.Xr=p)},Ko:function(){this.K.Ko=o;this.In||(this.In=new cb({ZK:o}),this.Xg(this.In))},fW:function(){this.K.Ko=q;this.In&&(this.yh(this.In),this.In=p,delete this.In)},Ab:function(){return this.ls&& this.ls instanceof N?new N(this.ls.width,this.ls.height):new N(this.Va.clientWidth,this.Va.clientHeight)},ye:function(a){a&&a instanceof N?(this.ls=a,this.Va.style.width=a.width+"px",this.Va.style.height=a.height+"px"):this.ls=p},Ka:u("gf"),fa:u("Oa"),wV:function(){this.Tr()},Tn:function(a){var b=this.K.gc,c=this.K.$b,d=q,a=Math.round(a);a<b&&(d=o,a=b);a>c&&(d=o,a=c);return{zoom:a,oD:d}},Na:u("Va"),bc:function(a,b){b=b||this.fa();return this.xe.bc(a,b,this.mc,this.Ab(),this.Wb)},wb:function(a,b){b= b||this.fa();return this.xe.wb(a,b,this.mc,this.Ab(),this.Wb)},Te:function(a,b){if(a){var c=this.bc(new H(a.lng,a.lat),b);c.x-=this.offsetX;c.y-=this.offsetY;return c}},nN:function(a,b){if(a){var c=new Q(a.x,a.y);c.x+=this.offsetX;c.y+=this.offsetY;return this.wb(c,b)}},pointToPixelFor3D:function(a,b){var c=map.Wb;this.Ib===Pa&&c&&db.nK(a,this,b)},J3:function(a,b){var c=map.Wb;this.Ib===Pa&&c&&db.mK(a,this,b)},K3:function(a,b){var c=this,d=map.Wb;c.Ib===Pa&&d&&db.nK(a,c,function(a){a.x-=c.offsetX; a.y-=c.offsetY;b&&b(a)})},H3:function(a,b){var c=map.Wb;this.Ib===Pa&&c&&(a.x+=this.offsetX,a.y+=this.offsetY,db.mK(a,this,b))},Hd:function(a){if(!this.Kx())return new eb;var b=a||{},a=b.margins||[0,0,0,0],c=b.zoom||p,b=this.wb({x:a[3],y:this.height-a[2]},c),a=this.wb({x:this.width-a[1],y:a[0]},c);return new eb(b,a)},Kx:function(){return!!this.loaded},OR:function(a,b){for(var c=this.pa(),d=b.margins||[10,10,10,10],e=b.zoomFactor||0,f=d[1]+d[3],d=d[0]+d[2],g=c.Vo(),i=c=c.pm();i>=g;i--){var k=this.pa().Ac(i); if(a.JF().lng/k<this.width-f&&a.JF().lat/k<this.height-d)break}i+=e;i<g&&(i=g);i>c&&(i=c);return i},Zs:function(a,b){var c={center:this.Ka(),zoom:this.fa()};if(!a||!a instanceof eb&&0===a.length||a instanceof eb&&a.yj())return c;var d=[];a instanceof eb?(d.push(a.of()),d.push(a.se())):d=a.slice(0);for(var b=b||{},e=[],f=0,g=d.length;f<g;f++)e.push(this.xe.Im(d[f],this.Wb));d=new eb;for(f=e.length-1;0<=f;f--)d.extend(e[f]);if(d.yj())return c;c=d.Ka();e=this.OR(d,b);b.margins&&(d=b.margins,f=(d[1]- d[3])/2,d=(d[0]-d[2])/2,g=this.pa().Ac(e),b.offset&&(f=b.offset.width,d=b.offset.height),c.lng+=g*f,c.lat+=g*d);c=this.xe.ph(c,this.Wb);return{center:c,zoom:e}},Bh:function(a,b){var c;c=a&&a.center?a:this.Zs(a,b);var b=b||{},d=b.delay||200;if(c.zoom===this.Oa&&b.enableAnimation!==q){var e=this;setTimeout(function(){e.ui(c.center,{duration:210})},d)}else this.Dd(c.center,c.zoom)},Rf:u("Vd"),ih:function(){return this.R.ob&&this.R.ob.Wa()?this.R.ob:p},getDistance:function(a,b){if(a&&b){if(a.nb(b))return 0; var c=0,c=R.To(a,b);if(c===p||c===j)c=0;return c}},tx:function(){var a=[],b=this.wa,c=this.Be;if(b)for(var d in b)b[d]instanceof fb&&a.push(b[d]);if(c){d=0;for(b=c.length;d<b;d++)a.push(c[d])}return a},pa:u("Ib"),qz:function(){for(var a=this.R.$E;a<z.zr.length;a++)z.zr[a](this);this.R.$E=a},pF:function(a){this.Wb=Pa.sk(a);this.Dw=Pa.kL(this.Wb);this.Ib===Pa&&this.xe instanceof gb&&(this.xe.fj=this.Wb)},setDefaultCursor:function(a){this.K.Xb=a;this.platform&&(this.platform.style.cursor=this.K.Xb)}, getDefaultCursor:function(){return this.K.Xb},setDraggingCursor:function(a){this.K.Fd=a},getDraggingCursor:function(){return this.K.Fd},Fx:function(){return this.K.vW&&1.5<=this.K.devicePixelRatio},ow:function(a,b){b?this.Oh[b]||(this.Oh[b]={}):b="custom";a.tag=b;a instanceof hb&&(this.Oh[b][a.ba]=a,a.ra(this));var c=this;I.load("hotspot",function(){c.qz()},o)},oZ:function(a,b){b||(b="custom");this.Oh[b][a.ba]&&delete this.Oh[b][a.ba]},am:function(a){a||(a="custom");this.Oh[a]={}},Su:function(){var a= this.Ib.Vo(),b=this.Ib.pm(),c=this.K;c.gc=c.JO||a;c.$b=c.IO||b;c.gc<a&&(c.gc=a);c.$b>b&&(c.$b=b)},setMinZoom:function(a){a=Math.round(a);a>this.K.$b&&(a=this.K.$b);this.K.JO=a;this.qJ()},setMaxZoom:function(a){a=Math.round(a);a<this.K.gc&&(a=this.K.gc);this.K.IO=a;this.qJ()},qJ:function(){this.Su();var a=this.K;this.Oa<a.gc?this.Nc(a.gc):this.Oa>a.$b&&this.Nc(a.$b);var b=new O("onzoomspanchange");b.gc=a.gc;b.$b=a.$b;this.dispatchEvent(b)},T2:u("KB"),getKey:function(){return qa},Qt:function(a){var b= this;window.MPC_Mgr&&window.MPC_Mgr[b.ba]&&window.MPC_Mgr[b.ba].close();b.K.mj=q;z.An("cus.fire","count","z_setmapstylecount");if(a){b=this;a.styleJson&&(a.styleStr=b.s_(a.styleJson));F()&&x.da.hF?setTimeout(function(){b.K.ue=a;b.dispatchEvent(new O("onsetcustomstyles",a))},50):(this.K.ue=a,this.dispatchEvent(new O("onsetcustomstyles",a)),this.YL(b.K.ue.geotableId));var c={style:a.style};a.features&&0<a.features.length&&(c.features=o);a.styleJson&&0<a.styleJson.length&&(c.styleJson=o);Ra(5050,c); a.style&&(c=b.K.cm[a.style]?b.K.cm[a.style].backColor:b.K.cm.normal.backColor)&&(this.Na().style.backgroundColor=c)}},dY:function(a){this.controls||(this.controls={navigationControl:new ib,scaleControl:new jb,overviewMapControl:new kb,mapTypeControl:new lb});var b=this,c;for(c in this.controls)b.zN(b.controls[c]);a=a||[];x.kc.Gb(a,function(a){b.mw(b.controls[a])})},YL:function(a){a?this.js&&this.js.Af===a||(this.yh(this.js),this.js=new mb({geotableId:a}),this.Xg(this.js)):this.yh(this.js)},Vb:function(){var a= this.fa()>=this.K.RF&&this.pa()===Ma&&18>=this.fa(),b=q;try{document.createElement("canvas").getContext("2d"),b=o}catch(c){b=q}return a&&b},getCurrentCity:function(){return{name:this.Zg,code:this.Yr}},qm:function(){this.P.Yn();return this.P},setPanorama:function(a){this.P=a;this.P.sF(this)},s_:function(a){for(var b={featureType:"t",elementType:"e",visibility:"v",color:"c",lightness:"l",saturation:"s",weight:"w",zoom:"z",hue:"h"},c={all:"all",geometry:"g","geometry.fill":"g.f","geometry.stroke":"g.s", labels:"l","labels.text.fill":"l.t.f","labels.text.stroke":"l.t.s","lables.text":"l.t","labels.icon":"l.i"},d=[],e=0,f;f=a[e];e++){var g=f.stylers;delete f.stylers;x.extend(f,g);var g=[],i;for(i in b)f[i]&&("elementType"===i?g.push(b[i]+":"+c[f[i]]):g.push(b[i]+":"+f[i]));2<g.length&&d.push(g.join("|"))}return d.join(",")}}); function Ra(a,b){if(a){var b=b||{},c="",d;for(d in b)c=c+"&"+d+"="+encodeURIComponent(b[d]);var e=function(a){a&&(nb=o,setTimeout(function(){ob.src=z.Fc+"images/blank.gif?"+a.src},50))},f=function(){var a=pb.shift();a&&e(a)};d=(1E8*Math.random()).toFixed(0);nb?pb.push({src:"product=jsapi&sub_product=jsapi&v="+z.version+"&sub_product_v="+z.version+"&t="+d+"&code="+a+"&da_src="+a+c}):e({src:"product=jsapi&sub_product=jsapi&v="+z.version+"&sub_product_v="+z.version+"&t="+d+"&code="+a+"&da_src="+a+c}); qb||(x.M(ob,"load",function(){nb=q;f()}),x.M(ob,"error",function(){nb=q;f()}),qb=o)}}var nb,qb,pb=[],ob=new Image;Ra(5E3,{device_pixel_ratio:window.devicePixelRatio,platform:navigator.platform});z.SL={TILE_BASE_URLS:["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu","gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu","gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu","gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu","gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],TILE_ONLINE_URLS:["gss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv","gss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv","gss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv","gss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv","gss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"], TIlE_PERSPECT_URLS:["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a","gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a","gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a","gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],geolocControl:"gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",TILES_YUN_HOST:["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy","gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy","gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy","gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],traffic:"gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa", iw_pano:"gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",message:"gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",baidumap:"gsp0.baidu.com/80MWsjip0QIZ8tyhnq",wuxian:"gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",pano:["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_","gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_","gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],main_domain_nocdn:{baidu:"gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",other:"api.map.baidu.com"},main_domain_cdn:{baidu:["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv","gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],other:["api.map.baidu.com"],webmap:["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]},map_click:"gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",vector_traffic:"gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"}; z.YX={TILE_BASE_URLS:["shangetu0.map.bdimg.com","shangetu1.map.bdimg.com","shangetu2.map.bdimg.com","shangetu3.map.bdimg.com","shangetu4.map.bdimg.com"],TILE_ONLINE_URLS:["online0.map.bdimg.com","online1.map.bdimg.com","online2.map.bdimg.com","online3.map.bdimg.com","online4.map.bdimg.com"],TIlE_PERSPECT_URLS:["d0.map.baidu.com","d1.map.baidu.com","d2.map.baidu.com","d3.map.baidu.com"],geolocControl:"loc.map.baidu.com",TILES_YUN_HOST:["g0.api.map.baidu.com","g1.api.map.baidu.com","g2.api.map.baidu.com", "g3.api.map.baidu.com"],traffic:"its.map.baidu.com:8002",iw_pano:"pcsv0.map.bdimg.com",message:"j.map.baidu.com",baidumap:"map.baidu.com",wuxian:"wuxian.baidu.com",pano:["pcsv0.map.bdimg.com","pcsv1.map.bdimg.com","pcsv2.map.bdimg.com"],main_domain_nocdn:{baidu:"api.map.baidu.com"},main_domain_cdn:{baidu:["api0.map.bdimg.com","api1.map.bdimg.com","api2.map.bdimg.com"],webmap:["webmap0.map.bdimg.com"]},map_click:"mapclick.map.baidu.com",vector_traffic:"or.map.bdimg.com"}; z.V_={"0":{proto:"http://",domain:z.YX},1:{proto:"https://",domain:z.SL},2:{proto:"https://",domain:z.SL}};z.Oy=window.HOST_TYPE||"0";z.url=z.V_[z.Oy];z.pp=z.url.proto+z.url.domain.baidumap+"/";z.Fc=z.url.proto+("2"==z.Oy?z.url.domain.main_domain_nocdn.other:z.url.domain.main_domain_nocdn.baidu)+"/";z.ma=z.url.proto+("2"==z.Oy?z.url.domain.main_domain_cdn.other[0]:z.url.domain.main_domain_cdn.baidu[0])+"/";z.dj=z.url.proto+z.url.domain.main_domain_cdn.webmap[0]+"/"; z.tg=function(a,b){var c,d,b=b||"";switch(a){case "main_domain_nocdn":c=z.Fc+b;break;case "main_domain_cdn":c=z.ma+b;break;default:d=z.url.domain[a],"[object Array]"==Object.prototype.toString.call(d)?(c=[],x.kc.Gb(d,function(a,d){c[d]=z.url.proto+a+"/"+b})):c=z.url.proto+z.url.domain[a]+"/"+b}return c};function rb(a){var b={duration:1E3,Gc:30,Go:0,jc:sb.xM,Bt:s()};this.$f=[];if(a)for(var c in a)b[c]=a[c];this.k=b;if(Xa(b.Go)){var d=this;setTimeout(function(){d.start()},b.Go)}else b.Go!=tb&&this.start()}var tb="INFINITE";rb.prototype.start=function(){this.Ku=ab();this.Wz=this.Ku+this.k.duration;ub(this)};rb.prototype.add=function(a){this.$f.push(a)}; function ub(a){var b=ab();b>=a.Wz?(Ya(a.k.va)&&a.k.va(a.k.jc(1)),Ya(a.k.finish)&&a.k.finish(),0<a.$f.length&&(b=a.$f[0],b.$f=[].concat(a.$f.slice(1)),b.start())):(a.uy=a.k.jc((b-a.Ku)/a.k.duration),Ya(a.k.va)&&a.k.va(a.uy),a.EF||(a.Qr=setTimeout(function(){ub(a)},1E3/a.k.Gc)))}rb.prototype.stop=function(a){this.EF=o;for(var b=0;b<this.$f.length;b++)this.$f[b].stop(),this.$f[b]=p;this.$f.length=0;this.Qr&&(clearTimeout(this.Qr),this.Qr=p);this.k.Bt(this.uy);a&&(this.Wz=this.Ku,ub(this))}; rb.prototype.cancel=ha(1);var sb={xM:function(a){return a},reverse:function(a){return 1-a},aD:function(a){return a*a},$C:function(a){return Math.pow(a,3)},Cs:function(a){return-(a*(a-2))},OK:function(a){return Math.pow(a-1,3)+1},NK:function(a){return 0.5>a?2*a*a:-2*(a-2)*a-1},V1:function(a){return 0.5>a?4*Math.pow(a,3):4*Math.pow(a-1,3)+1},W1:function(a){return(1-Math.cos(Math.PI*a))/2}};sb["ease-in"]=sb.aD;sb["ease-out"]=sb.Cs;var E={ZF:34,$F:21,aG:new N(21,32),$O:new N(10,32),ZO:new N(24,36),YO:new N(12,36),XF:new N(13,1),qa:z.ma+"images/",c3:"http://api0.map.bdimg.com/images/",YF:z.ma+"images/markers_new.png",WO:24,XO:73,fC:{"\u5317\u4eac":{jy:"bj",m:new H(116.403874,39.914889)},"\u4e0a\u6d77":{jy:"sh",m:new H(121.487899,31.249162)},"\u6df1\u5733":{jy:"sz",m:new H(114.025974,22.546054)},"\u5e7f\u5dde":{jy:"gz",m:new H(113.30765,23.120049)}},fontFamily:"arial,sans-serif"}; x.da.nf?(x.extend(E,{CK:"url("+E.qa+"ruler.cur),crosshair",Xb:"-moz-grab",Fd:"-moz-grabbing"}),x.platform.lM&&(E.fontFamily="arial,simsun,sans-serif")):x.da.dC||x.da.hF?x.extend(E,{CK:"url("+E.qa+"ruler.cur) 2 6,crosshair",Xb:"url("+E.qa+"openhand.cur) 8 8,default",Fd:"url("+E.qa+"closedhand.cur) 8 8,move"}):x.extend(E,{CK:"url("+E.qa+"ruler.cur),crosshair",Xb:"url("+E.qa+"openhand.cur),default",Fd:"url("+E.qa+"closedhand.cur),move"});function vb(a,b){var c=a.style;c.left=b[0]+"px";c.top=b[1]+"px"}function wb(a){0<x.da.la?a.unselectable="on":a.style.MozUserSelect="none"}function xb(a){return a&&a.parentNode&&11!==a.parentNode.nodeType}function yb(a,b){x.D.Ix(a,"beforeEnd",b);return a.lastChild}function zb(a){for(var b={left:0,top:0};a&&a.offsetParent;)b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;return b}function na(a){a=window.event||a;a.stopPropagation?a.stopPropagation():a.cancelBubble=o} function Ab(a){a=window.event||a;a.preventDefault?a.preventDefault():a.returnValue=q;return q}function oa(a){na(a);return Ab(a)}function Bb(){var a=document.documentElement,b=document.body;return a&&(a.scrollTop||a.scrollLeft)?[a.scrollTop,a.scrollLeft]:b?[b.scrollTop,b.scrollLeft]:[0,0]}function Cb(a,b){if(a&&b)return Math.round(Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2)))}function Db(a,b){var c=[],b=b||function(a){return a},d;for(d in a)c.push(d+"="+b(a[d]));return c.join("&")} function M(a,b,c){var d=document.createElement(a);c&&(d=document.createElementNS(c,a));return x.D.oF(d,b||{})}function Wa(a){if(a.currentStyle)return a.currentStyle;if(a.ownerDocument&&a.ownerDocument.defaultView)return a.ownerDocument.defaultView.getComputedStyle(a,p)}function Ya(a){return"function"===typeof a}function Xa(a){return"number"===typeof a}function $a(a){return"string"==typeof a}function Fb(a){return"undefined"!=typeof a}function Gb(a){return"object"==typeof a}var Hb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; function Ib(a){var b="",c,d,e="",f,g="",i=0;f=/[^A-Za-z0-9\+\/\=]/g;if(!a||f.exec(a))return a;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do c=Hb.indexOf(a.charAt(i++)),d=Hb.indexOf(a.charAt(i++)),f=Hb.indexOf(a.charAt(i++)),g=Hb.indexOf(a.charAt(i++)),c=c<<2|d>>4,d=(d&15)<<4|f>>2,e=(f&3)<<6|g,b+=String.fromCharCode(c),64!=f&&(b+=String.fromCharCode(d)),64!=g&&(b+=String.fromCharCode(e));while(i<a.length);return b}var O=x.lang.Yy;function F(){return!(!x.platform.nE&&!x.platform.oY&&!x.platform.Fm)} function Va(){return!(!x.platform.lM&&!x.platform.dM&&!x.platform.uY)}function ab(){return(new Date).getTime()}function Jb(){var a=document.body.appendChild(M("div"));a.innerHTML='<v:shape id="vml_tester1" adj="1" />';var b=a.firstChild;if(!b.style)return q;b.style.behavior="url(#default#VML)";b=b?"object"===typeof b.adj:o;a.parentNode.removeChild(a);return b}function Kb(){return!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape","1.1")} function Nb(){return!!M("canvas").getContext}function Ob(a){return a*Math.PI/180}z.BY=function(){var a=o,b=o,c=o,d=o,e=0,f=0,g=0,i=0;return{HQ:function(){e+=1;a&&(a=q,setTimeout(function(){Ra(5054,{pic:e});a=o;e=0},1E4))},H0:function(){f+=1;b&&(b=q,setTimeout(function(){Ra(5055,{move:f});b=o;f=0},1E4))},J0:function(){g+=1;c&&(c=q,setTimeout(function(){Ra(5056,{zoom:g});c=o;g=0},1E4))},I0:function(a){i+=a;d&&(d=q,setTimeout(function(){Ra(5057,{tile:i});d=o;i=0},5E3))}}}();z.bq={mG:"#83a1ff",dq:"#808080"}; function Pb(a,b,c){b.Lm||(b.Lm=[],b.handle={});b.Lm.push({filter:c,lm:a});b.addEventListener||(b.addEventListener=function(a,c){b.attachEvent("on"+a,c)});b.handle.click||(b.addEventListener("click",function(a){for(var c=a.target||a.srcElement;c!=b;){Qb(b.Lm,function(b,g){RegExp(g.filter).test(c.getAttribute("filter"))&&g.lm.call(c,a,c.getAttribute("filter"))});c=c.parentNode}},q),b.handle.click=o)}function Qb(a,b){for(var c=0,d=a.length;c<d;c++)b(c,a[c])} void function(a,b,c){void function(a,b,c){function g(a){if(!a.Fo){for(var c=o,d=[],f=a.sZ,i=0;f&&i<f.length;i++){var k=f[i],l=ea[k]=ea[k]||{};if(l.Fo||l==a)d.push(l.Kc);else{c=q;if(!l.ZV&&(k=(Ea.get("alias")||{})[k]||k+".js",!J[k])){J[k]=o;var m=b.createElement("script"),n=b.getElementsByTagName("script")[0];m.async=o;m.src=k;n.parentNode.insertBefore(m,n)}l.Py=l.Py||{};l.Py[a.name]=a}}if(c){a.Fo=o;a.uK&&(a.Kc=a.uK.apply(a,d));for(var t in a.Py)g(a.Py[t])}}}function i(a){return(a||new Date)-D}function k(a, b,c){if(a){"string"==typeof a&&(c=b,b=a,a=L);try{a==L?(K[b]=K[b]||[],K[b].unshift(c)):a.addEventListener?a.addEventListener(b,c,q):a.attachEvent&&a.attachEvent("on"+b,c)}catch(d){}}}function l(a,b,c){if(a){"string"==typeof a&&(c=b,b=a,a=L);try{if(a==L){var d=K[b];if(d)for(var e=d.length;e--;)d[e]===c&&d.splice(e,1)}else a.removeEventListener?a.removeEventListener(b,c,q):a.detachEvent&&a.detachEvent("on"+b,c)}catch(f){}}}function m(a){var b=K[a],c=0;if(b){for(var d=[],e=arguments,f=1;f<e.length;f++)d.push(e[f]); for(f=b.length;f--;)b[f].apply(this,d)&&c++;return c}}function n(a,b){if(a&&b){var c=new Image(1,1),d=[],e="img_"+ +new Date,f;for(f in b)b[f]&&d.push(f+"="+encodeURIComponent(b[f]));L[e]=c;c.onload=c.onerror=function(){L[e]=c=c.onload=c.onerror=p;delete L[e]};c.src=a+"?"+d.join("&")}}function t(){var a=arguments,b=a[0];if(this.tK||/^(on|un|set|get|create)$/.test(b)){for(var b=w.prototype[b],c=[],d=1,e=a.length;d<e;d++)c.push(a[d]);"function"==typeof b&&b.apply(this,c)}else this.TJ.push(a)}function v(a, b){var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}function w(a){this.name=a;this.Hs={protocolParameter:{postUrl:p,protocolParameter:p}};this.TJ=[];this.alog=L}function y(a){a=a||"default";if("*"==a){var a=[],b;for(b in W)a.push(W[b]);return a}(b=W[a])||(b=W[a]=new w(a));return b}var C=c.alog;if(!C||!C.Fo){var B=b.all&&a.attachEvent,D=C&&C.wE||+new Date,A=a.o3||(+new Date).toString(36)+Math.random().toString(36).substr(2,3),G=0,J={},L=function(a){var b= arguments,c,d,e,f;if("define"==a||"require"==a){for(d=1;d<b.length;d++)switch(typeof b[d]){case "string":c=b[d];break;case "object":e=b[d];break;case "function":f=b[d]}"require"==a&&(c&&!e&&(e=[c]),c=p);c=!c?"#"+G++:c;d=ea[c]=ea[c]||{};d.Fo||(d.name=c,d.sZ=e,d.uK=f,"define"==a&&(d.ZV=o),g(d))}else"function"==typeof a?a(L):(""+a).replace(/^(?:([\w$_]+)\.)?(\w+)$/,function(a,c,d){b[0]=d;t.apply(L.MF(c),b)})},K={},W={},ea={p1:{name:"alog",Fo:o,Kc:L}};w.prototype.start=w.prototype.create=function(a){if(!this.tK){"object"== typeof a&&this.set(a);this.tK=new Date;for(this.Is("create",this);a=this.TJ.shift();)t.apply(this,a)}};w.prototype.send=function(a,b){var c=v({ts:i().toString(36),t:a,sid:A},this.Hs);if("object"==typeof b)c=v(c,b);else{var d=arguments;switch(a){case "pageview":d[1]&&(c.page=d[1]);d[2]&&(c.title=d[2]);break;case "event":d[1]&&(c.eventCategory=d[1]);d[2]&&(c.eventAction=d[2]);d[3]&&(c.eventLabel=d[3]);d[4]&&(c.eventValue=d[4]);break;case "timing":d[1]&&(c.timingCategory=d[1]);d[2]&&(c.timingVar=d[2]); d[3]&&(c.timingValue=d[3]);d[4]&&(c.timingLabel=d[4]);break;case "exception":d[1]&&(c.exDescription=d[1]);d[2]&&(c.exFatal=d[2]);break;default:return}}this.Is("send",c);var e;if(d=this.Hs.protocolParameter){var f={};for(e in c)d[e]!==p&&(f[d[e]||e]=c[e]);e=f}else e=c;n(this.Hs.postUrl,e)};w.prototype.set=function(a,b){if("string"==typeof a)"protocolParameter"==a&&(b=v({postUrl:p,protocolParameter:p},b)),this.Hs[a]=b;else if("object"==typeof a)for(var c in a)this.set(c,a[c])};w.prototype.get=function(a, b){var c=this.Hs[a];"function"==typeof b&&b(c);return c};w.prototype.Is=function(a,b){return L.Is(this.name+"."+a,b)};w.prototype.M=function(a,b){L.M(this.name+"."+a,b)};w.prototype.bd=function(a,b){L.bd(this.name+"."+a,b)};L.name="alog";L.bO=A;L.Fo=o;L.timestamp=i;L.bd=l;L.M=k;L.Is=m;L.MF=y;L("init");var fa=w.prototype;S(fa,{start:fa.start,create:fa.create,send:fa.send,set:fa.set,get:fa.get,on:fa.M,un:fa.bd,fire:fa.Is});var Ea=y();Ea.set("protocolParameter",{o1:p});if(C){fa=[].concat(C.ub||[],C.Vm|| []);C.ub=C.Vm=p;for(var Ua in L)L.hasOwnProperty(Ua)&&(C[Ua]=L[Ua]);L.ub=L.Vm={push:function(a){L.apply(L,a)}};for(C=0;C<fa.length;C++)L.apply(L,fa[C])}c.alog=L;B&&k(b,"mouseup",function(a){a=a.target||a.srcElement;1==a.nodeType&&/^ajavascript:/i.test(a.tagName+a.href)});var Qa=q;a.onerror=function(a,b,d,e){var g=o;!b&&/^script error/i.test(a)&&(Qa?g=q:Qa=o);g&&c.alog("exception.send","exception",{yt:a,vE:b,ut:d,$r:e});return q};c.alog("exception.on","catch",function(a){c.alog("exception.send","exception", {yt:a.yt,vE:a.path,ut:a.ut,method:a.method,aL:"catch"})})}}(a,b,c);void function(a,b,c){var g="18_1";F()&&(g="18_2");var i="http://static.tieba.baidu.com";"https:"===a.location.protocol&&(i="https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");var k=Math.random,i=i+"/tb/pms/img/st.gif",l={zh:"0.1"},m={zh:"0.1"},n={zh:"0.1"},t={zh:"0"};if(l&&l.zh&&k()<l.zh){var v=c.alog.MF("monkey"),w,l=a.screen,y=b.referrer;v.set("ver",5);v.set("pid",241);l&&v.set("px",l.width+"*"+l.height);v.set("ref",y);c.alog("monkey.on", "create",function(){w=c.alog.timestamp;v.set("protocolParameter",{reports:p})});c.alog("monkey.on","send",function(a){"pageview"==a.t&&(a.cmd="open");a.now&&(a.ts=w(a.now).toString(36),a.now="")});c.alog("monkey.create",{page:g,pid:"241",p:"18",dv:6,postUrl:i,reports:{refer:1}});c.alog("monkey.send","pageview",{now:+new Date})}if(m&&m.zh&&k()<m.zh){var C=q;a.onerror=function(a,b,d,e){var g=o;!b&&/^script error/i.test(a)&&(C?g=q:C=o);g&&c.alog("exception.send","exception",{yt:a,vE:b,ut:d,$r:e});return q}; c.alog("exception.on","catch",function(a){c.alog("exception.send","exception",{yt:a.yt,vE:a.path,ut:a.ut,method:a.method,aL:"catch"})});c.alog("exception.create",{postUrl:i,dv:7,page:g,pid:"170",p:"18"})}n&&(n.zh&&k()<n.zh)&&(c.alog("cus.on","time",function(a){var b={},d=q,e;if("[object Object]"===a.toString()){for(var g in a)"page"==g?b.page=a[g]:(e=parseInt(a[g]),0<e&&/^z_/.test(g)&&(d=o,b[g]=e));d&&c.alog("cus.send","time",b)}}),c.alog("cus.on","count",function(a){var b={},d=q;"string"===typeof a&& (a=[a]);if(a instanceof Array)for(var e=0;e<a.length;e++)/^z_/.test(a[e])?(d=o,b[a[e]]=1):/^page:/.test(a[e])&&(b.page=a[e].substring(5));d&&c.alog("cus.send","count",b)}),c.alog("cus.create",{dv:3,postUrl:i,page:g,p:"18"}));if(t&&t.zh&&k()<t.zh){var B=["Moz","O","ms","Webkit"],D=["-webkit-","-moz-","-o-","-ms-"],A=function(){return typeof b.createElement!=="function"?b.createElement(arguments[0]):b.createElement.apply(b,arguments)},G=A("dpFeatureTest").style,J=function(a){return L(a,j,j)},L=function(a, b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+B.join(d+" ")+d).split(" ");if(typeof b==="string"||typeof b==="undefined")return K(e,b);e=(a+" "+B.join(d+" ")+d).split(" ");a:{var a=e,f;for(f in a)if(a[f]in b){if(c===q){b=a[f];break a}f=b[a[f]];b=typeof f==="function"?fnBind(f,c||b):f;break a}b=q}return b},K=function(a,b){var c,d,e;d=a.length;for(c=0;c<d;c++){e=a[c];~(""+e).indexOf("-")&&(e=W(e));if(G[e]!==j)return b=="pfx"?e:o}return q},W=function(a){return a.replace(/([a-z])-([a-z])/g, function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")},ea=function(a,b,c){if(a.indexOf("@")===0)return atRule(a);a.indexOf("-")!=-1&&(a=W(a));return!b?L(a,"pfx"):L(a,b,c)},fa=function(){var a=A("canvas");return!(!a.getContext||!a.getContext("2d"))},Ea=function(){var a=A("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},Ua=function(){try{localStorage.setItem("localStorage","localStorage");localStorage.removeItem("localStorage");return o}catch(a){return q}},Qa=function(){return"content"in b.createElement("template")},Aa=function(){return"createShadowRoot"in b.createElement("a")},lc=function(){return"registerElement"in b},pe=function(){return"import"in b.createElement("link")},nf=function(){return"getItems"in b},fd=function(){return"EventSource"in window},Lb=function(a,b){var c=new Image;c.onload=function(){b(a,c.width>0&&c.height>0)};c.onerror=function(){b(a,q)};c.src="data:image/webp;base64,"+{r3:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",q3:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",jk:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[a]},mc=function(a,b){return Mb.ii["WebP-"+a]=b},qe=function(){return"openDatabase"in a},re=function(){return"performance"in a&&"timing"in a.performance},Lc=function(){return"performance"in a&&"mark"in a.performance},gd=function(){return!(!Array.prototype|| !Array.prototype.every||!Array.prototype.filter||!Array.prototype.forEach||!Array.prototype.indexOf||!Array.prototype.lastIndexOf||!Array.prototype.map||!Array.prototype.some||!Array.prototype.reduce||!Array.prototype.reduceRight||!Array.isArray)},se=function(){return"Promise"in a&&"cast"in a.fq&&"resolve"in a.fq&&"reject"in a.fq&&"all"in a.fq&&"race"in a.fq&&function(){var b;new a.fq(function(a){b=a});return typeof b==="function"}()},hd=function(){var b=!!a.u0,c=a.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;return!!a.x0&&b&&c},of=function(){return"geolocation"in navigator},te=function(){var b=A("canvas"),c="probablySupportsContext"in b?"probablySupportsContext":"supportsContext";return c in b?b[c]("webgl")||b[c]("experimental-webgl"):"WebGLRenderingContext"in a},ei=function(){return!!b.createElementNS&&!!b.createElementNS("http://www.w3.org/2000/svg","svg").H1},fi=function(){return!!a.E0},gi=function(){return"WebSocket"in a&&a.B0.r0===2},hi=function(){return!!b.createElement("video").canPlayType}, ii=function(){return!!b.createElement("audio").canPlayType},ji=function(){return!!(a.history&&"pushState"in a.history)},ki=function(){return!(!a.s0||!a.t0)},li=function(){return"postMessage"in window},mi=function(){return!!a.webkitNotifications||"Notification"in a&&"permission"in a.sP&&"requestPermission"in a.sP},ni=function(){for(var b=["webkit","moz","o","ms"],c=a.requestAnimationFrame,e=0;e<b.length&&!c;++e)c=a[b[e]+"RequestAnimationFrame"];return!!c},oi=function(){return"JSON"in a&&"parse"in JSON&& "stringify"in JSON},pi=function(){return!(!ea("exitFullscreen",b,q)&&!ea("cancelFullScreen",b,q))},qi=function(){return!!ea("Intl",a)},ri=function(){return J("flexBasis")},si=function(){return!!J("perspective")},ti=function(){return J("shapeOutside")},ui=function(){var a=A("div");a.style.cssText=D.join("filter:blur(2px); ");return!!a.style.length&&(b.documentMode===j||b.documentMode>9)},vi=function(){return"XMLHttpRequest"in a&&"withCredentials"in new XMLHttpRequest},wi=function(){return A("progress").max!== j},xi=function(){return A("meter").max!==j},yi=function(){return"sendBeacon"in navigator},zi=function(){return J("borderRadius")},Ai=function(){return J("boxShadow")},Bi=function(){var a=A("div").style;a.cssText=D.join("opacity:.55;");return/^0.55$/.test(a.opacity)},Ci=function(){return K(["textShadow"],j)},Di=function(){return J("animationName")},Ei=function(){return J("transition")},Fi=function(){return navigator.userAgent.indexOf("Android 2.")===-1&&J("transform")},Mb={ii:{},oa:function(a,b,c){this.ii[a]= b.apply(this,[].slice.call(arguments,2))},Cd:function(a,b){a.apply(this,[].slice.call(arguments,1))},zZ:function(){this.oa("bdrs",zi);this.oa("bxsd",Ai);this.oa("opat",Bi);this.oa("txsd",Ci);this.oa("anim",Di);this.oa("trsi",Ei);this.oa("trfm",Fi);this.oa("flex",ri);this.oa("3dtr",si);this.oa("shpe",ti);this.oa("fltr",ui);this.oa("cavs",fa);this.oa("dgdp",Ea);this.oa("locs",Ua);this.oa("wctem",Qa);this.oa("wcsdd",Aa);this.oa("wccse",lc);this.oa("wchti",pe);this.Cd(Lb,"lossy",mc);this.Cd(Lb,"lossless", mc);this.Cd(Lb,"alpha",mc);this.Cd(Lb,"animation",mc);this.oa("wsql",qe);this.oa("natm",re);this.oa("ustm",Lc);this.oa("arra",gd);this.oa("prms",se);this.oa("xhr2",hd);this.oa("wbgl",te);this.oa("geol",of);this.oa("svg",ei);this.oa("work",fi);this.oa("wbsk",gi);this.oa("vido",hi);this.oa("audo",ii);this.oa("hsty",ji);this.oa("file",ki);this.oa("psmg",li);this.oa("wknf",mi);this.oa("rqaf",ni);this.oa("json",oi);this.oa("flsc",pi);this.oa("i18n",qi);this.oa("cors",vi);this.oa("prog",wi);this.oa("metr", xi);this.oa("becn",yi);this.oa("mcrd",nf);this.oa("esrc",fd)}},v=c.alog.MF("feature");v.M("commit",function(){Mb.zZ();var a=setInterval(function(){if("WebP-lossy"in Mb.ii&&"WebP-lossless"in Mb.ii&&"WebP-alpha"in Mb.ii&&"WebP-animation"in Mb.ii){for(var b in Mb.ii)Mb.ii[b]=Mb.ii[b]?"y":"n";v.send("feature",Mb.ii);clearInterval(a)}},500)});c.alog("feature.create",{S1:4,L3:i,page:g,ub:"18"});c.alog("feature.fire","commit")}}(a,b,c)}(window,document,z);z.An=z.alog||s();z.alog("cus.fire","count","z_loadscriptcount"); "https:"===location.protocol&&z.alog("cus.fire","count","z_httpscount");function pa(a,b){if(b){var c=(1E5*Math.random()).toFixed(0);z._rd["_cbk"+c]=function(a){b&&b(a);delete z._rd["_cbk"+c]};a+="&callback=BMap._rd._cbk"+c}var d=M("script",{type:"text/javascript"});d.charset="utf-8";d.src=a;d.addEventListener?d.addEventListener("load",function(a){a=a.target;a.parentNode.removeChild(a)},q):d.attachEvent&&d.attachEvent("onreadystatechange",function(){var a=window.event.srcElement;a&&("loaded"==a.readyState||"complete"==a.readyState)&&a.parentNode.removeChild(a)});setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(d); d=p},1)};var Rb={map:"u3xpd4",common:"rxkf2g",style:"0xzqoa",tile:"134nn5",vectordrawlib:"m3bcyl",newvectordrawlib:"yjqu0d",groundoverlay:"yyslq4",pointcollection:"zger0u",marker:"hxqfbu",symbol:"lzfqn3",canvablepath:"gognwi",vmlcontext:"bgxoml",markeranimation:"gcozqj",poly:"4bbrdi",draw:"03ad5h",drawbysvg:"htppkl", drawbyvml:"ill3hz",drawbycanvas:"ohjshn",infowindow:"dhanno",oppc:"sydxi0",opmb:"00sgwb",menu:"gfrtsy",control:"5ibrnt",navictrl:"ovqqjb",geoctrl:"udyy0n",copyrightctrl:"eyjyai",citylistcontrol:"4xnhzd",scommon:"1jhh1n",local:"x4grny",route:"mtoxcx",othersearch:"t1pc1e",mapclick:"u2uxvc",buslinesearch:"ecd2oo", hotspot:"5r0czm",autocomplete:"rj2jk3",coordtrans:"xa15x0",coordtransutils:"lincwr",convertor:"q21wdv",clayer:"hjmz30",pservice:"frc3e3",pcommon:"01zfkp",panorama:"itjuti",panoramaflash:"oynmyg",vector:"an4idr"}; x.Iy=function(){function a(a){return d&&!!c[b+a+"_"+Rb[a]]}var b="BMap_",c=window.localStorage,d="localStorage"in window&&c!==p&&c!==j;return{qY:d,set:function(a,f){if(d){for(var g=b+a+"_",i=c.length,k;i--;)k=c.key(i),-1<k.indexOf(g)&&c.removeItem(k);try{c.setItem(b+a+"_"+Rb[a],f)}catch(l){c.clear()}}},get:function(e){return d&&a(e)?c.getItem(b+e+"_"+Rb[e]):q},dK:a}}();function I(){} x.object.extend(I,{Fj:{nG:-1,GP:0,Xp:1},oL:function(){var a="canvablepath",b=z.HU?"newvectordrawlib":"vectordrawlib";if(!F()||!Nb())Kb()||(Jb()?a="vmlcontext":Nb());return{tile:[b,"style"],control:[],marker:["symbol"],symbol:["canvablepath","common"],canvablepath:"canvablepath"===a?[]:[a],vmlcontext:[],style:[],poly:["marker","drawbycanvas","drawbysvg","drawbyvml"],drawbysvg:["draw"],drawbyvml:["draw"],drawbycanvas:["draw"],infowindow:["common","marker"],menu:[],oppc:[],opmb:[],scommon:[],local:["scommon"], route:["scommon"],othersearch:["scommon"],autocomplete:["scommon"],citylistcontrol:["autocomplete"],mapclick:["scommon"],buslinesearch:["route"],hotspot:[],coordtransutils:["coordtrans"],convertor:[],clayer:["tile"],pservice:[],pcommon:["style","pservice"],panorama:["pcommon"],panoramaflash:["pcommon"]}},O3:{},gG:{XP:z.ma+"getmodules?v=2.0&t=20140707",yU:5E3},CC:q,Pd:{rl:{},Cn:[],Qv:[]},load:function(a,b,c){var d=this.ib(a);if(d.Bd==this.Fj.Xp)c&&b();else{if(d.Bd==this.Fj.nG){this.jK(a);this.wN(a); var e=this;e.CC==q&&(e.CC=o,setTimeout(function(){for(var a=[],b=0,c=e.Pd.Cn.length;b<c;b++){var d=e.Pd.Cn[b],l="";ja.Iy.dK(d)?l=ja.Iy.get(d):(l="",a.push(d+"_"+Rb[d]));e.Pd.Qv.push({QM:d,JE:l})}e.CC=q;e.Pd.Cn.length=0;0==a.length?e.UK():pa(e.gG.XP+"&mod="+a.join(","))},1));d.Bd=this.Fj.GP}d.Ou.push(b)}},jK:function(a){if(a&&this.oL()[a])for(var a=this.oL()[a],b=0;b<a.length;b++)this.jK(a[b]),this.Pd.rl[a[b]]||this.wN(a[b])},wN:function(a){for(var b=0;b<this.Pd.Cn.length;b++)if(this.Pd.Cn[b]==a)return; this.Pd.Cn.push(a)},yZ:function(a,b){var c=this.ib(a);try{eval(b)}catch(d){return}c.Bd=this.Fj.Xp;for(var e=0,f=c.Ou.length;e<f;e++)c.Ou[e]();c.Ou.length=0},dK:function(a,b){var c=this;c.timeout=setTimeout(function(){c.Pd.rl[a].Bd!=c.Fj.Xp?(c.remove(a),c.load(a,b)):clearTimeout(c.timeout)},c.gG.yU)},ib:function(a){this.Pd.rl[a]||(this.Pd.rl[a]={},this.Pd.rl[a].Bd=this.Fj.nG,this.Pd.rl[a].Ou=[]);return this.Pd.rl[a]},remove:function(a){delete this.ib(a)},tV:function(a,b){for(var c=this.Pd.Qv,d=o,e= 0,f=c.length;e<f;e++)""==c[e].JE&&(c[e].QM==a?c[e].JE=b:d=q);d&&this.UK()},UK:function(){for(var a=this.Pd.Qv,b=0,c=a.length;b<c;b++)this.yZ(a[b].QM,a[b].JE);this.Pd.Qv.length=0}});function Q(a,b){this.x=a||0;this.y=b||0;this.x=this.x;this.y=this.y}Q.prototype.nb=function(a){return a&&a.x==this.x&&a.y==this.y};function N(a,b){this.width=a||0;this.height=b||0}N.prototype.nb=function(a){return a&&this.width==a.width&&this.height==a.height};function hb(a,b){a&&(this.Lb=a,this.ba="spot"+hb.ba++,b=b||{},this.Ug=b.text||"",this.wv=b.offsets?b.offsets.slice(0):[5,5,5,5],this.sJ=b.userData||p,this.Qh=b.minZoom||p,this.Ff=b.maxZoom||p)}hb.ba=0;x.extend(hb.prototype,{ra:function(a){this.Qh==p&&(this.Qh=a.K.gc);this.Ff==p&&(this.Ff=a.K.$b)},ta:function(a){a instanceof H&&(this.Lb=a)},ha:u("Lb"),Ut:ba("Ug"),VD:u("Ug"),setUserData:ba("sJ"),getUserData:u("sJ")});function Sb(){this.C=p;this.Mb="control";this.Qa=this.XJ=o}x.lang.ua(Sb,x.lang.Ca,"Control"); x.extend(Sb.prototype,{initialize:function(a){this.C=a;if(this.B)return a.Va.appendChild(this.B),this.B},Ee:function(a){!this.B&&(this.initialize&&Ya(this.initialize))&&(this.B=this.initialize(a));this.k=this.k||{Ag:q};this.wB();this.Hr();this.B&&(this.B.gr=this)},wB:function(){var a=this.B;if(a){var b=a.style;b.position="absolute";b.zIndex=this.vz||"10";b.MozUserSelect="none";b.WebkitTextSizeAdjust="none";this.k.Ag||x.D.Ua(a,"BMap_noprint");F()||x.M(a,"contextmenu",oa)}},remove:function(){this.C= p;this.B&&(this.B.parentNode&&this.B.parentNode.removeChild(this.B),this.B=this.B.gr=p)},Aa:function(){this.B=yb(this.C.Va,"<div unselectable='on'></div>");this.Qa==q&&x.D.U(this.B);return this.B},Hr:function(){this.qc(this.k.anchor)},qc:function(a){if(this.q1||!Xa(a)||isNaN(a)||a<Tb||3<a)a=this.defaultAnchor;this.k=this.k||{Ag:q};this.k.za=this.k.za||this.defaultOffset;var b=this.k.anchor;this.k.anchor=a;if(this.B){var c=this.B,d=this.k.za.width,e=this.k.za.height;c.style.left=c.style.top=c.style.right= c.style.bottom="auto";switch(a){case Tb:c.style.top=e+"px";c.style.left=d+"px";break;case Ub:c.style.top=e+"px";c.style.right=d+"px";break;case Vb:c.style.bottom=e+"px";c.style.left=d+"px";break;case 3:c.style.bottom=e+"px",c.style.right=d+"px"}c=["TL","TR","BL","BR"];x.D.Sb(this.B,"anchor"+c[b]);x.D.Ua(this.B,"anchor"+c[a])}},xD:function(){return this.k.anchor},getContainer:u("B"),Ve:function(a){a instanceof N&&(this.k=this.k||{Ag:q},this.k.za=new N(a.width,a.height),this.B&&this.qc(this.k.anchor))}, Qf:function(){return this.k.za},Id:u("B"),show:function(){this.Qa!=o&&(this.Qa=o,this.B&&x.D.show(this.B))},U:function(){this.Qa!=q&&(this.Qa=q,this.B&&x.D.U(this.B))},isPrintable:function(){return!!this.k.Ag},lh:function(){return!this.B&&!this.C?q:!!this.Qa}});var Tb=0,Ub=1,Vb=2;function ib(a){Sb.call(this);a=a||{};this.k={Ag:q,AF:a.showZoomInfo||o,anchor:a.anchor,za:a.offset,type:a.type,uW:a.enableGeolocation||q};this.defaultAnchor=F()?3:Tb;this.defaultOffset=new N(10,10);this.qc(a.anchor);this.fn(a.type);this.Ae()}x.lang.ua(ib,Sb,"NavigationControl");x.extend(ib.prototype,{initialize:function(a){this.C=a;return this.B},fn:function(a){this.k.type=Xa(a)&&0<=a&&3>=a?a:0},dp:function(){return this.k.type},Ae:function(){var a=this;I.load("navictrl",function(){a.xf()})}});function Wb(a){Sb.call(this);a=a||{};this.k={anchor:a.anchor||Vb,za:a.offset||new N(10,30),i_:a.showAddressBar!==q,Y1:a.enableAutoLocation||q,EM:a.locationIcon||p};var b=this;this.vz=1200;b.X_=[];this.le=[];I.load("geoctrl",function(){(function d(){if(0!==b.le.length){var a=b.le.shift();b[a.method].apply(b,a.arguments);d()}})();b.WP()});Ra(Ja)}x.lang.ua(Wb,Sb,"GeolocationControl");x.extend(Wb.prototype,{location:function(){this.le.push({method:"location",arguments:arguments})},getAddressComponent:ca(p)});function Xb(a){Sb.call(this);a=a||{};this.k={Ag:q,anchor:a.anchor,za:a.offset};this.dc=[];this.defaultAnchor=Vb;this.defaultOffset=new N(5,2);this.qc(a.anchor);this.XJ=q;this.Ae()}x.lang.ua(Xb,Sb,"CopyrightControl"); x.object.extend(Xb.prototype,{initialize:function(a){this.C=a;return this.B},nw:function(a){if(a&&Xa(a.id)&&!isNaN(a.id)){var b={bounds:p,content:""},c;for(c in a)b[c]=a[c];if(a=this.nm(a.id))for(var d in b)a[d]=b[d];else this.dc.push(b)}},nm:function(a){for(var b=0,c=this.dc.length;b<c;b++)if(this.dc[b].id==a)return this.dc[b]},ED:u("dc"),aF:function(a){for(var b=0,c=this.dc.length;b<c;b++)this.dc[b].id==a&&(r=this.dc.splice(b,1),b--,c=this.dc.length)},Ae:function(){var a=this;I.load("copyrightctrl", function(){a.xf()})}});function kb(a){Sb.call(this);a=a||{};this.k={Ag:q,size:a.size||new N(150,150),padding:5,Wa:a.isOpen===o?o:q,l0:4,za:a.offset,anchor:a.anchor};this.defaultAnchor=3;this.defaultOffset=new N(0,0);this.vq=this.wq=13;this.qc(a.anchor);this.ye(this.k.size);this.Ae()}x.lang.ua(kb,Sb,"OverviewMapControl"); x.extend(kb.prototype,{initialize:function(a){this.C=a;return this.B},qc:function(a){Sb.prototype.qc.call(this,a)},ne:function(){this.ne.ho=o;this.k.Wa=!this.k.Wa;this.B||(this.ne.ho=q)},ye:function(a){a instanceof N||(a=new N(150,150));a.width=0<a.width?a.width:150;a.height=0<a.height?a.height:150;this.k.size=a},Ab:function(){return this.k.size},Wa:function(){return this.k.Wa},Ae:function(){var a=this;I.load("control",function(){a.xf()})}});function Yb(a){Sb.call(this);a=a||{};this.defaultAnchor=Tb;this.qV=a.canCheckSize===q?q:o;this.fj="";this.defaultOffset=new N(10,10);this.onChangeBefore=[];this.onChangeAfter=[];this.onChangeSuccess=[];this.k={Ag:q,za:a.offset||this.defaultOffset,anchor:a.anchor||this.defaultAnchor,expand:!!a.expand};a.onChangeBefore&&Ya(a.onChangeBefore)&&this.onChangeBefore.push(a.onChangeBefore);a.onChangeAfter&&Ya(a.onChangeAfter)&&this.onChangeAfter.push(a.onChangeAfter);a.onChangeSuccess&&Ya(a.onChangeSuccess)&& this.onChangeSuccess.push(a.onChangeSuccess);this.qc(a.anchor);this.Ae()}x.lang.ua(Yb,Sb,"CityListControl");x.object.extend(Yb.prototype,{initialize:function(a){this.C=a;return this.B},Ae:function(){var a=this;I.load("citylistcontrol",function(){a.xf()},o)}});function jb(a){Sb.call(this);a=a||{};this.k={Ag:q,color:"black",cd:"metric",za:a.offset};this.defaultAnchor=Vb;this.defaultOffset=new N(81,18);this.qc(a.anchor);this.Zh={metric:{name:"metric",lK:1,XL:1E3,CO:"\u7c73",DO:"\u516c\u91cc"},us:{name:"us",lK:3.2808,XL:5280,CO:"\u82f1\u5c3a",DO:"\u82f1\u91cc"}};this.Zh[this.k.cd]||(this.k.cd="metric");this.RI=p;this.qI={};this.Ae()}x.lang.ua(jb,Sb,"ScaleControl"); x.object.extend(jb.prototype,{initialize:function(a){this.C=a;return this.B},Jk:function(a){this.k.color=a+""},p2:function(){return this.k.color},xF:function(a){this.k.cd=this.Zh[a]&&this.Zh[a].name||this.k.cd},NX:function(){return this.k.cd},Ae:function(){var a=this;I.load("control",function(){a.xf()})}});var Zb=0;function lb(a){Sb.call(this);a=a||{};this.defaultAnchor=Ub;this.defaultOffset=new N(10,10);this.k={Ag:q,oh:[Ma,Za,Sa,Pa],YV:["B_DIMENSIONAL_MAP","B_SATELLITE_MAP","B_NORMAL_MAP"],type:a.type||Zb,za:a.offset||this.defaultOffset,yW:o};this.qc(a.anchor);"[object Array]"==Object.prototype.toString.call(a.mapTypes)&&(this.k.oh=a.mapTypes.slice(0));this.Ae()}x.lang.ua(lb,Sb,"MapTypeControl"); x.object.extend(lb.prototype,{initialize:function(a){this.C=a;return this.B},Jy:function(a){this.C.Wn=a},Ae:function(){var a=this;I.load("control",function(){a.xf()},o)}});function $b(a){Sb.call(this);a=a||{};this.k={Ag:q,za:a.offset,anchor:a.anchor};this.Ri=q;this.Uv=p;this.zI=new ac({Pf:"api"});this.AI=new bc(p,{Pf:"api"});this.defaultAnchor=Ub;this.defaultOffset=new N(10,10);this.qc(a.anchor);this.Ae();Ra(va)}x.lang.ua($b,Sb,"PanoramaControl");x.extend($b.prototype,{initialize:function(a){this.C=a;return this.B},Ae:function(){var a=this;I.load("control",function(){a.xf()})}});function cc(a){x.lang.Ca.call(this);this.k={Va:p,cursor:"default"};this.k=x.extend(this.k,a);this.Mb="contextmenu";this.C=p;this.ya=[];this.If=[];this.Ce=[];this.Pw=this.gs=p;this.Ph=q;var b=this;I.load("menu",function(){b.yb()})}x.lang.ua(cc,x.lang.Ca,"ContextMenu"); x.object.extend(cc.prototype,{ra:function(a,b){this.C=a;this.wl=b||p},remove:function(){this.C=this.wl=p},qw:function(a){if(a&&!("menuitem"!=a.Mb||""==a.Ug||0>=a.$i)){for(var b=0,c=this.ya.length;b<c;b++)if(this.ya[b]===a)return;this.ya.push(a);this.If.push(a)}},removeItem:function(a){if(a&&"menuitem"==a.Mb){for(var b=0,c=this.ya.length;b<c;b++)this.ya[b]===a&&(this.ya[b].remove(),this.ya.splice(b,1),c--);b=0;for(c=this.If.length;b<c;b++)this.If[b]===a&&(this.If[b].remove(),this.If.splice(b,1),c--)}}, QB:function(){this.ya.push({Mb:"divider",Nj:this.Ce.length});this.Ce.push({D:p})},cF:function(a){if(this.Ce[a]){for(var b=0,c=this.ya.length;b<c;b++)this.ya[b]&&("divider"==this.ya[b].Mb&&this.ya[b].Nj==a)&&(this.ya.splice(b,1),c--),this.ya[b]&&("divider"==this.ya[b].Mb&&this.ya[b].Nj>a)&&this.ya[b].Nj--;this.Ce.splice(a,1)}},Id:u("B"),show:function(){this.Ph!=o&&(this.Ph=o)},U:function(){this.Ph!=q&&(this.Ph=q)},OZ:function(a){a&&(this.k.cursor=a)},getItem:function(a){return this.If[a]}});var dc=E.qa+"menu_zoom_in.png",ec=E.qa+"menu_zoom_out.png";function fc(a,b,c){if(a&&Ya(b)){x.lang.Ca.call(this);this.k={width:100,id:"",Bm:""};c=c||{};this.k.width=1*c.width?c.width:100;this.k.id=c.id?c.id:"";this.k.Bm=c.iconUrl?c.iconUrl:"";this.Ug=a+"";this.yz=b;this.C=p;this.Mb="menuitem";this.Or=this.lv=this.B=this.Hh=p;this.Lh=o;var d=this;I.load("menu",function(){d.yb()})}}x.lang.ua(fc,x.lang.Ca,"MenuItem"); x.object.extend(fc.prototype,{ra:function(a,b){this.C=a;this.Hh=b},remove:function(){this.C=this.Hh=p},Ut:function(a){a&&(this.Ug=a+"")},Ub:function(a){a&&(this.k.Bm=a)},Id:u("B"),enable:function(){this.Lh=o},disable:function(){this.Lh=q}});function eb(a,b){a&&!b&&(b=a);this.Ge=this.Fe=this.Le=this.Ke=this.Ll=this.ul=p;a&&(this.Ll=new H(a.lng,a.lat),this.ul=new H(b.lng,b.lat),this.Le=a.lng,this.Ke=a.lat,this.Ge=b.lng,this.Fe=b.lat)} x.object.extend(eb.prototype,{yj:function(){return!this.Ll||!this.ul},nb:function(a){return!(a instanceof eb)||this.yj()?q:this.se().nb(a.se())&&this.of().nb(a.of())},se:u("Ll"),of:u("ul"),HV:function(a){return!(a instanceof eb)||this.yj()||a.yj()?q:a.Le>this.Le&&a.Ge<this.Ge&&a.Ke>this.Ke&&a.Fe<this.Fe},Ka:function(){return this.yj()?p:new H((this.Le+this.Ge)/2,(this.Ke+this.Fe)/2)},gt:function(a){if(!(a instanceof eb)||Math.max(a.Le,a.Ge)<Math.min(this.Le,this.Ge)||Math.min(a.Le,a.Ge)>Math.max(this.Le, this.Ge)||Math.max(a.Ke,a.Fe)<Math.min(this.Ke,this.Fe)||Math.min(a.Ke,a.Fe)>Math.max(this.Ke,this.Fe))return p;var b=Math.max(this.Le,a.Le),c=Math.min(this.Ge,a.Ge),d=Math.max(this.Ke,a.Ke),a=Math.min(this.Fe,a.Fe);return new eb(new H(b,d),new H(c,a))},bs:function(a){return!(a instanceof H)||this.yj()?q:a.lng>=this.Le&&a.lng<=this.Ge&&a.lat>=this.Ke&&a.lat<=this.Fe},extend:function(a){if(a instanceof H){var b=a.lng,a=a.lat;this.Ll||(this.Ll=new H(0,0));this.ul||(this.ul=new H(0,0));if(!this.Le|| this.Le>b)this.Ll.lng=this.Le=b;if(!this.Ge||this.Ge<b)this.ul.lng=this.Ge=b;if(!this.Ke||this.Ke>a)this.Ll.lat=this.Ke=a;if(!this.Fe||this.Fe<a)this.ul.lat=this.Fe=a}},JF:function(){return this.yj()?new H(0,0):new H(Math.abs(this.Ge-this.Le),Math.abs(this.Fe-this.Ke))}});function H(a,b){isNaN(a)&&(a=Ib(a),a=isNaN(a)?0:a);$a(a)&&(a=parseFloat(a));isNaN(b)&&(b=Ib(b),b=isNaN(b)?0:b);$a(b)&&(b=parseFloat(b));this.lng=a;this.lat=b}H.cM=function(a){return a&&180>=a.lng&&-180<=a.lng&&74>=a.lat&&-74<=a.lat};H.prototype.nb=function(a){return a&&this.lat==a.lat&&this.lng==a.lng};function gc(){}gc.prototype.mh=function(){aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")};gc.prototype.wi=function(){aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")};function hc(){};var db={nK:function(a,b,c){I.load("coordtransutils",function(){db.$U(a,b,c)},o)},mK:function(a,b,c){I.load("coordtransutils",function(){db.ZU(a,b,c)},o)}};function ic(){this.Pa=[];var a=this;I.load("convertor",function(){a.UP()})}x.ua(ic,x.lang.Ca,"Convertor");x.extend(ic.prototype,{translate:function(a,b,c,d){this.Pa.push({method:"translate",arguments:[a,b,c,d]})}});S(ic.prototype,{translate:ic.prototype.translate});function R(){}R.prototype=new gc; x.extend(R,{jP:6370996.81,rG:[1.289059486E7,8362377.87,5591021,3481989.83,1678043.12,0],Bu:[75,60,45,30,15,0],pP:[[1.410526172116255E-8,8.98305509648872E-6,-1.9939833816331,200.9824383106796,-187.2403703815547,91.6087516669843,-23.38765649603339,2.57121317296198,-0.03801003308653,1.73379812E7],[-7.435856389565537E-9,8.983055097726239E-6,-0.78625201886289,96.32687599759846,-1.85204757529826,-59.36935905485877,47.40033549296737,-16.50741931063887,2.28786674699375,1.026014486E7],[-3.030883460898826E-8, 8.98305509983578E-6,0.30071316287616,59.74293618442277,7.357984074871,-25.38371002664745,13.45380521110908,-3.29883767235584,0.32710905363475,6856817.37],[-1.981981304930552E-8,8.983055099779535E-6,0.03278182852591,40.31678527705744,0.65659298677277,-4.44255534477492,0.85341911805263,0.12923347998204,-0.04625736007561,4482777.06],[3.09191371068437E-9,8.983055096812155E-6,6.995724062E-5,23.10934304144901,-2.3663490511E-4,-0.6321817810242,-0.00663494467273,0.03430082397953,-0.00466043876332,2555164.4], [2.890871144776878E-9,8.983055095805407E-6,-3.068298E-8,7.47137025468032,-3.53937994E-6,-0.02145144861037,-1.234426596E-5,1.0322952773E-4,-3.23890364E-6,826088.5]],oG:[[-0.0015702102444,111320.7020616939,1704480524535203,-10338987376042340,26112667856603880,-35149669176653700,26595700718403920,-10725012454188240,1800819912950474,82.5],[8.277824516172526E-4,111320.7020463578,6.477955746671607E8,-4.082003173641316E9,1.077490566351142E10,-1.517187553151559E10,1.205306533862167E10,-5.124939663577472E9, 9.133119359512032E8,67.5],[0.00337398766765,111320.7020202162,4481351.045890365,-2.339375119931662E7,7.968221547186455E7,-1.159649932797253E8,9.723671115602145E7,-4.366194633752821E7,8477230.501135234,52.5],[0.00220636496208,111320.7020209128,51751.86112841131,3796837.749470245,992013.7397791013,-1221952.21711287,1340652.697009075,-620943.6990984312,144416.9293806241,37.5],[-3.441963504368392E-4,111320.7020576856,278.2353980772752,2485758.690035394,6070.750963243378,54821.18345352118,9540.606633304236, -2710.55326746645,1405.483844121726,22.5],[-3.218135878613132E-4,111320.7020701615,0.00369383431289,823725.6402795718,0.46104986909093,2351.343141331292,1.58060784298199,8.77738589078284,0.37238884252424,7.45]],u2:function(a,b){if(!a||!b)return 0;var c,d,a=this.Fb(a);if(!a)return 0;c=this.Sk(a.lng);d=this.Sk(a.lat);b=this.Fb(b);return!b?0:this.Re(c,this.Sk(b.lng),d,this.Sk(b.lat))},To:function(a,b){if(!a||!b)return 0;a.lng=this.ND(a.lng,-180,180);a.lat=this.RD(a.lat,-74,74);b.lng=this.ND(b.lng,-180, 180);b.lat=this.RD(b.lat,-74,74);return this.Re(this.Sk(a.lng),this.Sk(b.lng),this.Sk(a.lat),this.Sk(b.lat))},Fb:function(a){if(a===p||a===j)return new H(0,0);var b,c;b=new H(Math.abs(a.lng),Math.abs(a.lat));for(var d=0;d<this.rG.length;d++)if(b.lat>=this.rG[d]){c=this.pP[d];break}a=this.oK(a,c);return a=new H(a.lng.toFixed(6),a.lat.toFixed(6))},zb:function(a){if(a===p||a===j||180<a.lng||-180>a.lng||90<a.lat||-90>a.lat)return new H(0,0);var b,c;a.lng=this.ND(a.lng,-180,180);a.lat=this.RD(a.lat,-74, 74);b=new H(a.lng,a.lat);for(var d=0;d<this.Bu.length;d++)if(b.lat>=this.Bu[d]){c=this.oG[d];break}if(!c)for(d=0;d<this.Bu.length;d++)if(b.lat<=-this.Bu[d]){c=this.oG[d];break}a=this.oK(a,c);return a=new H(a.lng.toFixed(2),a.lat.toFixed(2))},oK:function(a,b){if(a&&b){var c=b[0]+b[1]*Math.abs(a.lng),d=Math.abs(a.lat)/b[9],d=b[2]+b[3]*d+b[4]*d*d+b[5]*d*d*d+b[6]*d*d*d*d+b[7]*d*d*d*d*d+b[8]*d*d*d*d*d*d,c=c*(0>a.lng?-1:1),d=d*(0>a.lat?-1:1);return new H(c,d)}},Re:function(a,b,c,d){return this.jP*Math.acos(Math.sin(c)* Math.sin(d)+Math.cos(c)*Math.cos(d)*Math.cos(b-a))},Sk:function(a){return Math.PI*a/180},t4:function(a){return 180*a/Math.PI},RD:function(a,b,c){b!=p&&(a=Math.max(a,b));c!=p&&(a=Math.min(a,c));return a},ND:function(a,b,c){for(;a>c;)a-=c-b;for(;a<b;)a+=c-b;return a}}); x.extend(R.prototype,{Im:function(a){return R.zb(a)},mh:function(a){a=R.zb(a);return new Q(a.lng,a.lat)},ph:function(a){return R.Fb(a)},wi:function(a){a=new H(a.x,a.y);return R.Fb(a)},bc:function(a,b,c,d,e){if(a)return a=this.Im(a,e),b=this.Ac(b),new Q(Math.round((a.lng-c.lng)/b+d.width/2),Math.round((c.lat-a.lat)/b+d.height/2))},wb:function(a,b,c,d,e){if(a)return b=this.Ac(b),this.ph(new H(c.lng+b*(a.x-d.width/2),c.lat-b*(a.y-d.height/2)),e)},Ac:function(a){return Math.pow(2,18-a)}});function gb(){this.fj="bj"}gb.prototype=new R; x.extend(gb.prototype,{Im:function(a,b){return this.EQ(b,R.zb(a))},ph:function(a,b){return R.Fb(this.FQ(b,a))},lngLatToPointFor3D:function(a,b){var c=this,d=R.zb(a);I.load("coordtrans",function(){var a=hc.PD(c.fj||"bj",d),a=new Q(a.x,a.y);b&&b(a)},o)},pointToLngLatFor3D:function(a,b){var c=this,d=new H(a.x,a.y);I.load("coordtrans",function(){var a=hc.OD(c.fj||"bj",d),a=new H(a.lng,a.lat),a=R.Fb(a);b&&b(a)},o)},EQ:function(a,b){if(I.ib("coordtrans").Bd==I.Fj.Xp){var c=hc.PD(a||"bj",b);return new H(c.x, c.y)}I.load("coordtrans",s());return new H(0,0)},FQ:function(a,b){if(I.ib("coordtrans").Bd==I.Fj.Xp){var c=hc.OD(a||"bj",b);return new H(c.lng,c.lat)}I.load("coordtrans",s());return new H(0,0)},Ac:function(a){return Math.pow(2,20-a)}});function jc(){this.Mb="overlay"}x.lang.ua(jc,x.lang.Ca,"Overlay");jc.xm=function(a){a*=1;return!a?0:-1E5*a<<1}; x.extend(jc.prototype,{Ee:function(a){if(!this.V&&Ya(this.initialize)&&(this.V=this.initialize(a)))this.V.style.WebkitUserSelect="none";this.draw()},initialize:function(){aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")},draw:function(){aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")},remove:function(){this.V&&this.V.parentNode&&this.V.parentNode.removeChild(this.V);this.V=p;this.dispatchEvent(new O("onremove"))},U:function(){this.V&&x.D.U(this.V)},show:function(){this.V&&x.D.show(this.V)},lh:function(){return!this.V|| "none"==this.V.style.display||"hidden"==this.V.style.visibility?q:o}});z.Ue(function(a){function b(a,b){var c=M("div"),g=c.style;g.position="absolute";g.top=g.left=g.width=g.height="0";g.zIndex=b;a.appendChild(c);return c}var c=a.R;c.od=a.od=b(a.platform,200);a.Vd.rD=b(c.od,800);a.Vd.FE=b(c.od,700);a.Vd.bL=b(c.od,600);a.Vd.xE=b(c.od,500);a.Vd.IM=b(c.od,400);a.Vd.JM=b(c.od,300);a.Vd.PO=b(c.od,201);a.Vd.vt=b(c.od,200)});function fb(){x.lang.Ca.call(this);jc.call(this);this.map=p;this.Qa=o;this.Bb=p;this.eH=0}x.lang.ua(fb,jc,"OverlayInternal"); x.extend(fb.prototype,{initialize:function(a){this.map=a;x.lang.Ca.call(this,this.ba);return p},nx:u("map"),draw:s(),Hj:s(),remove:function(){this.map=p;x.lang.Rw(this.ba);jc.prototype.remove.call(this)},U:function(){this.Qa!==q&&(this.Qa=q)},show:function(){this.Qa!==o&&(this.Qa=o)},lh:function(){return!this.V?q:!!this.Qa},Na:u("V"),ON:function(a){var a=a||{},b;for(b in a)this.z[b]=a[b]},Vt:ba("zIndex"),nj:function(){this.z.nj=o},hW:function(){this.z.nj=q},so:ba("ig"),yp:function(){this.ig=p}});function kc(){this.map=p;this.wa={};this.Be=[]} z.Ue(function(a){var b=new kc;b.map=a;a.wa=b.wa;a.Be=b.Be;a.addEventListener("load",function(a){b.draw(a)});a.addEventListener("moveend",function(a){b.draw(a)});x.da.la&&8>x.da.la||"BackCompat"===document.compatMode?a.addEventListener("zoomend",function(a){setTimeout(function(){b.draw(a)},20)}):a.addEventListener("zoomend",function(a){b.draw(a)});a.addEventListener("maptypechange",function(a){b.draw(a)});a.addEventListener("addoverlay",function(a){a=a.target;if(a instanceof fb)b.wa[a.ba]||(b.wa[a.ba]= a);else{for(var d=q,e=0,f=b.Be.length;e<f;e++)if(b.Be[e]===a){d=o;break}d||b.Be.push(a)}});a.addEventListener("removeoverlay",function(a){a=a.target;if(a instanceof fb)delete b.wa[a.ba];else for(var d=0,e=b.Be.length;d<e;d++)if(b.Be[d]===a){b.Be.splice(d,1);break}});a.addEventListener("clearoverlays",function(){this.Wc();for(var a in b.wa)b.wa[a].z.nj&&(b.wa[a].remove(),delete b.wa[a]);a=0;for(var d=b.Be.length;a<d;a++)b.Be[a].enableMassClear!==q&&(b.Be[a].remove(),b.Be[a]=p,b.Be.splice(a,1),a--, d--)});a.addEventListener("infowindowopen",function(){var a=this.Bb;a&&(x.D.U(a.xc),x.D.U(a.cc))});a.addEventListener("movestart",function(){this.ih()&&this.ih().XI()});a.addEventListener("moveend",function(){this.ih()&&this.ih().MI()})});kc.prototype.draw=function(a){if(z.aq){var b=z.aq.Os(this.map);"canvas"===b.Mb&&b.canvas&&b.zQ(b.canvas.getContext("2d"))}for(var c in this.wa)this.wa[c].draw(a);x.kc.Gb(this.Be,function(a){a.draw()});this.map.R.ob&&this.map.R.ob.ta();z.aq&&b.uF()};function nc(a){fb.call(this);a=a||{};this.z={strokeColor:a.strokeColor||"#3a6bdb",nc:a.strokeWeight||5,rd:a.strokeOpacity||0.65,strokeStyle:a.strokeStyle||"solid",nj:a.enableMassClear===q?q:o,vk:p,rm:p,lf:a.enableEditing===o?o:q,RM:5,W_:q,hf:a.enableClicking===q?q:o,ni:a.icons&&0<a.icons.length?a.icons:p};0>=this.z.nc&&(this.z.nc=5);if(0>this.z.rd||1<this.z.rd)this.z.rd=0.65;if(0>this.z.rg||1<this.z.rg)this.z.rg=0.65;"solid"!=this.z.strokeStyle&&"dashed"!=this.z.strokeStyle&&(this.z.strokeStyle="solid"); this.V=p;this.Lu=new eb(0,0);this.ef=[];this.oc=[];this.Ra={}}x.lang.ua(nc,fb,"Graph");nc.ix=function(a){var b=[];if(!a)return b;$a(a)&&x.kc.Gb(a.split(";"),function(a){a=a.split(",");b.push(new H(a[0],a[1]))});"[object Array]"==Object.prototype.toString.apply(a)&&0<a.length&&(b=a);return b};nc.PE=[0.09,0.0050,1.0E-4,1.0E-5]; x.extend(nc.prototype,{initialize:function(a){this.map=a;return p},draw:s(),Gr:function(a){this.ef.length=0;this.ia=nc.ix(a).slice(0);this.Eh()},he:function(a){this.Gr(a)},Eh:function(){if(this.ia){var a=this;a.Lu=new eb;x.kc.Gb(this.ia,function(b){a.Lu.extend(b)})}},qe:u("ia"),dn:function(a,b){b&&this.ia[a]&&(this.ef.length=0,this.ia[a]=new H(b.lng,b.lat),this.Eh())},setStrokeColor:function(a){this.z.strokeColor=a},EX:function(){return this.z.strokeColor},Np:function(a){0<a&&(this.z.nc=a)},CL:function(){return this.z.nc}, Lp:function(a){a==j||(1<a||0>a)||(this.z.rd=a)},FX:function(){return this.z.rd},Ot:function(a){1<a||0>a||(this.z.rg=a)},bX:function(){return this.z.rg},Mp:function(a){"solid"!=a&&"dashed"!=a||(this.z.strokeStyle=a)},BL:function(){return this.z.strokeStyle},setFillColor:function(a){this.z.fillColor=a||""},aX:function(){return this.z.fillColor},Hd:u("Lu"),remove:function(){this.map&&this.map.removeEventListener("onmousemove",this.iv);fb.prototype.remove.call(this);this.ef.length=0},lf:function(){if(!(2> this.ia.length)){this.z.lf=o;var a=this;I.load("poly",function(){a.Rl()},o)}},gW:function(){this.z.lf=q;var a=this;I.load("poly",function(){a.mk()},o)},YW:function(){return this.z.lf}});function oc(a){fb.call(this);this.V=this.map=p;this.z={width:0,height:0,za:new N(0,0),opacity:1,background:"transparent",Qx:1,vM:"#000",zY:"solid",point:p};this.ON(a);this.point=this.z.point}x.lang.ua(oc,fb,"Division"); x.extend(oc.prototype,{Hj:function(){var a=this.z,b=this.content,c=['<div class="BMap_Division" style="position:absolute;'];c.push("width:"+a.width+"px;display:block;");c.push("overflow:hidden;");"none"!=a.borderColor&&c.push("border:"+a.Qx+"px "+a.zY+" "+a.vM+";");c.push("opacity:"+a.opacity+"; filter:(opacity="+100*a.opacity+")");c.push("background:"+a.background+";");c.push('z-index:60;">');c.push(b);c.push("</div>");this.V=yb(this.map.Rf().FE,c.join(""))},initialize:function(a){this.map=a;this.Hj(); this.V&&x.M(this.V,F()?"touchstart":"mousedown",function(a){na(a)});return this.V},draw:function(){var a=this.map.Te(this.z.point);this.z.za=new N(-Math.round(this.z.width/2)-Math.round(this.z.Qx),-Math.round(this.z.height/2)-Math.round(this.z.Qx));this.V.style.left=a.x+this.z.za.width+"px";this.V.style.top=a.y+this.z.za.height+"px"},ha:function(){return this.z.point},V0:function(){return this.map.bc(this.ha())},ta:function(a){this.z.point=a;this.draw()},PZ:function(a,b){this.z.width=Math.round(a); this.z.height=Math.round(b);this.V&&(this.V.style.width=this.z.width+"px",this.V.style.height=this.z.height+"px",this.draw())}});function pc(a,b,c){a&&b&&(this.imageUrl=a,this.size=b,a=new N(Math.floor(b.width/2),Math.floor(b.height/2)),c=c||{},a=c.anchor||a,b=c.imageOffset||new N(0,0),this.imageSize=c.imageSize,this.anchor=a,this.imageOffset=b,this.infoWindowAnchor=c.infoWindowAnchor||this.anchor,this.printImageUrl=c.printImageUrl||"")} x.extend(pc.prototype,{PN:function(a){a&&(this.imageUrl=a)},e_:function(a){a&&(this.printImageUrl=a)},ye:function(a){a&&(this.size=new N(a.width,a.height))},qc:function(a){a&&(this.anchor=new N(a.width,a.height))},Pt:function(a){a&&(this.imageOffset=new N(a.width,a.height))},VZ:function(a){a&&(this.infoWindowAnchor=new N(a.width,a.height))},SZ:function(a){a&&(this.imageSize=new N(a.width,a.height))},toString:ca("Icon")});function qc(a,b){if(a){b=b||{};this.style={anchor:b.anchor||new N(0,0),fillColor:b.fillColor||"#000",rg:b.fillOpacity||0,scale:b.scale||1,rotation:b.rotation||0,strokeColor:b.strokeColor||"#000",rd:b.strokeOpacity||1,nc:b.strokeWeight};this.Mb="number"===typeof a?a:"UserDefined";this.Ii=this.style.anchor;this.mr=new N(0,0);this.anchor=p;this.jB=a;var c=this;I.load("symbol",function(){c.Hn()},o)}} x.extend(qc.prototype,{setPath:ba("jB"),setAnchor:function(a){this.Ii=this.style.anchor=a},setRotation:function(a){this.style.rotation=a},setScale:function(a){this.style.scale=a},setStrokeWeight:function(a){this.style.nc=a},setStrokeColor:function(a){a=x.as.qC(a,this.style.rd);this.style.strokeColor=a},setStrokeOpacity:function(a){this.style.rd=a},setFillOpacity:function(a){this.style.rg=a},setFillColor:function(a){this.style.fillColor=a}});function rc(a,b,c,d){a&&(this.Bv={},this.$K=d?!!d:q,this.Uc=[],this.w_=a instanceof qc?a:p,this.FI=b===j?o:!!(b.indexOf("%")+1),this.Zj=isNaN(parseFloat(b))?1:this.FI?parseFloat(b)/100:parseFloat(b),this.GI=!!(c.indexOf("%")+1),this.repeat=c!=j?this.GI?parseFloat(c)/100:parseFloat(c):0)};function sc(a,b){x.lang.Ca.call(this);this.content=a;this.map=p;b=b||{};this.z={width:b.width||0,height:b.height||0,maxWidth:b.maxWidth||730,za:b.offset||new N(0,0),title:b.title||"",GE:b.maxContent||"",bh:b.enableMaximize||q,Ds:b.enableAutoPan===q?q:o,dD:b.enableCloseOnClick===q?q:o,margin:b.margin||[10,10,40,10],lC:b.collisions||[[10,10],[10,10],[10,10],[10,10]],ZX:q,UY:b.onClosing||ca(o),RK:q,iD:b.enableParano===o?o:q,message:b.message,kD:b.enableSearchTool===o?o:q,Bx:b.headerContent||"",eD:b.enableContentScroll|| q};if(0!=this.z.width&&(220>this.z.width&&(this.z.width=220),730<this.z.width))this.z.width=730;if(0!=this.z.height&&(60>this.z.height&&(this.z.height=60),650<this.z.height))this.z.height=650;if(0!=this.z.maxWidth&&(220>this.z.maxWidth&&(this.z.maxWidth=220),730<this.z.maxWidth))this.z.maxWidth=730;this.be=q;this.Ei=E.qa;this.ab=p;var c=this;I.load("infowindow",function(){c.yb()})}x.lang.ua(sc,x.lang.Ca,"InfoWindow"); x.extend(sc.prototype,{setWidth:function(a){!a&&0!=a||(isNaN(a)||0>a)||(0!=a&&(220>a&&(a=220),730<a&&(a=730)),this.z.width=a)},setHeight:function(a){!a&&0!=a||(isNaN(a)||0>a)||(0!=a&&(60>a&&(a=60),650<a&&(a=650)),this.z.height=a)},SN:function(a){!a&&0!=a||(isNaN(a)||0>a)||(0!=a&&(220>a&&(a=220),730<a&&(a=730)),this.z.maxWidth=a)},Bc:function(a){this.z.title=a},getTitle:function(){return this.z.title},ad:ba("content"),tk:u("content"),Rt:function(a){this.z.GE=a+""},ge:s(),Ds:function(){this.z.Ds=o}, disableAutoPan:function(){this.z.Ds=q},enableCloseOnClick:function(){this.z.dD=o},disableCloseOnClick:function(){this.z.dD=q},bh:function(){this.z.bh=o},Uw:function(){this.z.bh=q},show:function(){this.Qa=o},U:function(){this.Qa=q},close:function(){this.U()},Ux:function(){this.be=o},restore:function(){this.be=q},lh:function(){return this.Wa()},Wa:ca(q),ha:function(){if(this.ab&&this.ab.ha)return this.ab.ha()},Qf:function(){return this.z.za}}); La.prototype.Nb=function(a,b){if(a instanceof sc&&b instanceof H){var c=this.R;c.Km?c.Km.ta(b):(c.Km=new T(b,{icon:new pc(E.qa+"blank.gif",{width:1,height:1}),offset:new N(0,0),clickable:q}),c.Km.CR=1);this.Ja(c.Km);c.Km.Nb(a)}};La.prototype.Wc=function(){var a=this.R.ob||this.R.ll;a&&a.ab&&a.ab.Wc()};fb.prototype.Nb=function(a){this.map&&(this.map.Wc(),a.Qa=o,this.map.R.ll=a,a.ab=this,x.lang.Ca.call(a,a.ba))}; fb.prototype.Wc=function(){this.map&&this.map.R.ll&&(this.map.R.ll.Qa=q,x.lang.Rw(this.map.R.ll.ba),this.map.R.ll=p)};function tc(a,b){fb.call(this);this.content=a;this.V=this.map=p;b=b||{};this.z={width:0,za:b.offset||new N(0,0),Qp:{backgroundColor:"#fff",border:"1px solid #f00",padding:"1px",whiteSpace:"nowrap",font:"12px "+E.fontFamily,zIndex:"80",MozUserSelect:"none"},position:b.position||p,nj:b.enableMassClear===q?q:o,hf:o};0>this.z.width&&(this.z.width=0);Fb(b.enableClicking)&&(this.z.hf=b.enableClicking);this.point=this.z.position;var c=this;I.load("marker",function(){c.yb()})}x.lang.ua(tc,fb,"Label"); x.extend(tc.prototype,{ha:function(){return this.qv?this.qv.ha():this.point},ta:function(a){a instanceof H&&!this.ox()&&(this.point=this.z.position=new H(a.lng,a.lat))},ad:ba("content"),tF:function(a){0<=a&&1>=a&&(this.z.opacity=a)},Ve:function(a){a instanceof N&&(this.z.za=new N(a.width,a.height))},Qf:function(){return this.z.za},Ld:function(a){a=a||{};this.z.Qp=x.extend(this.z.Qp,a)},yi:function(a){return this.Ld(a)},Bc:function(a){this.z.title=a||""},getTitle:function(){return this.z.title},RN:function(a){this.point= (this.qv=a)?this.z.position=a.ha():this.z.position=p},ox:function(){return this.qv||p},tk:u("content")});function uc(a,b){if(0!==arguments.length){fb.apply(this,arguments);b=b||{};this.z={hb:a,opacity:b.opacity||1,Dm:b.Dm||"",rs:b.displayOnMinLevel||1,nj:b.enableMassClear===q?q:o,qs:b.displayOnMaxLevel||19,q_:b.stretch||q};var c=this;I.load("groundoverlay",function(){c.yb()})}}x.lang.ua(uc,fb,"GroundOverlay"); x.extend(uc.prototype,{setBounds:function(a){this.z.hb=a},getBounds:function(){return this.z.hb},setOpacity:function(a){this.z.opacity=a},getOpacity:function(){return this.z.opacity},setImageURL:function(a){this.z.Dm=a},getImageURL:function(){return this.z.Dm},setDisplayOnMinLevel:function(a){this.z.rs=a},getDisplayOnMinLevel:function(){return this.z.rs},setDisplayOnMaxLevel:function(a){this.z.qs=a},getDisplayOnMaxLevel:function(){return this.z.qs}});var vc=3,wc=4;function xc(){var a=document.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))} function yc(a,b){var c=this;xc()&&(a===j&&aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),"[object Array]"!==Object.prototype.toString.call(a)&&aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),b=b||{},fb.apply(c,arguments),c.ea={ia:a},c.z={shape:b.shape||vc,size:b.size||wc,color:b.color||"#fa937e",nj:o},this.gB=[],this.le=[],I.load("pointcollection",function(){for(var a=0,b;b=c.gB[a];a++)c[b.method].apply(c,b.arguments);for(a=0;b=c.le[a];a++)c[b.method].apply(c,b.arguments)}))} x.lang.ua(yc,fb,"PointCollection");x.extend(yc.prototype,{initialize:function(a){this.gB&&this.gB.push({method:"initialize",arguments:arguments})},setPoints:function(a){this.le&&this.le.push({method:"setPoints",arguments:arguments})},setStyles:function(a){this.le&&this.le.push({method:"setStyles",arguments:arguments})},clear:function(){this.le&&this.le.push({method:"clear",arguments:arguments})},remove:function(){this.le&&this.le.push({method:"remove",arguments:arguments})}});var zc=new pc(E.qa+"marker_red_sprite.png",new N(19,25),{anchor:new N(10,25),infoWindowAnchor:new N(10,0)}),Ac=new pc(E.qa+"marker_red_sprite.png",new N(20,11),{anchor:new N(6,11),imageOffset:new N(-19,-13)}); function T(a,b){fb.call(this);b=b||{};this.point=a;this.qq=this.map=p;this.z={za:b.offset||new N(0,0),vj:b.icon||zc,Mk:Ac,title:b.title||"",label:p,WJ:b.baseZIndex||0,hf:o,N4:q,sE:q,nj:b.enableMassClear===q?q:o,Yb:q,yN:b.raiseOnDrag===o?o:q,FN:q,Fd:b.draggingCursor||E.Fd,rotation:b.rotation||0};b.icon&&!b.shadow&&(this.z.Mk=p);b.enableDragging&&(this.z.Yb=b.enableDragging);Fb(b.enableClicking)&&(this.z.hf=b.enableClicking);var c=this;I.load("marker",function(){c.yb()})}T.Gu=jc.xm(-90)+1E6; T.kG=T.Gu+1E6;x.lang.ua(T,fb,"Marker"); x.extend(T.prototype,{Ub:function(a){if(a instanceof pc||a instanceof qc)this.z.vj=a},Uo:function(){return this.z.vj},zy:function(a){a instanceof pc&&(this.z.Mk=a)},getShadow:function(){return this.z.Mk},an:function(a){this.z.label=a||p},LD:function(){return this.z.label},Yb:function(){this.z.Yb=o},JC:function(){this.z.Yb=q},ha:u("point"),ta:function(a){a instanceof H&&(this.point=new H(a.lng,a.lat))},zi:function(a,b){this.z.sE=!!a;a&&(this.GG=b||0)},Bc:function(a){this.z.title=a+""},getTitle:function(){return this.z.title}, Ve:function(a){a instanceof N&&(this.z.za=a)},Qf:function(){return this.z.za},$m:ba("qq"),Kp:function(a){this.z.rotation=a},zL:function(){return this.z.rotation}});function Bc(a,b){nc.call(this,b);b=b||{};this.z.rg=b.fillOpacity?b.fillOpacity:0.65;this.z.fillColor=""==b.fillColor?"":b.fillColor?b.fillColor:"#fff";this.he(a);var c=this;I.load("poly",function(){c.yb()})}x.lang.ua(Bc,nc,"Polygon"); x.extend(Bc.prototype,{he:function(a,b){this.po=nc.ix(a).slice(0);var c=nc.ix(a).slice(0);1<c.length&&c.push(new H(c[0].lng,c[0].lat));nc.prototype.he.call(this,c,b)},dn:function(a,b){this.po[a]&&(this.po[a]=new H(b.lng,b.lat),this.ia[a]=new H(b.lng,b.lat),0==a&&!this.ia[0].nb(this.ia[this.ia.length-1])&&(this.ia[this.ia.length-1]=new H(b.lng,b.lat)),this.Eh())},qe:function(){var a=this.po;0==a.length&&(a=this.ia);return a}});function Cc(a,b){nc.call(this,b);this.Gr(a);var c=this;I.load("poly",function(){c.yb()})}x.lang.ua(Cc,nc,"Polyline");function Dc(a,b,c){this.point=a;this.xa=Math.abs(b);Bc.call(this,[],c)}Dc.PE=[0.01,1.0E-4,1.0E-5,4.0E-6];x.lang.ua(Dc,Bc,"Circle"); x.extend(Dc.prototype,{initialize:function(a){this.map=a;this.ia=this.ev(this.point,this.xa);this.Eh();return p},Ka:u("point"),Wf:function(a){a&&(this.point=a)},xL:u("xa"),vf:function(a){this.xa=Math.abs(a)},ev:function(a,b){if(!a||!b||!this.map)return[];for(var c=[],d=b/6378800,e=Math.PI/180*a.lat,f=Math.PI/180*a.lng,g=0;360>g;g+=9){var i=Math.PI/180*g,k=Math.asin(Math.sin(e)*Math.cos(d)+Math.cos(e)*Math.sin(d)*Math.cos(i)),i=new H(((f-Math.atan2(Math.sin(i)*Math.sin(d)*Math.cos(e),Math.cos(d)-Math.sin(e)* Math.sin(k))+Math.PI)%(2*Math.PI)-Math.PI)*(180/Math.PI),k*(180/Math.PI));c.push(i)}d=c[0];c.push(new H(d.lng,d.lat));return c}});var Ec={};function Fc(a){this.map=a;this.Jm=[];this.Xf=[];this.Dg=[];this.mV=300;this.ZE=0;this.wg={};this.ej={};this.rh=0;this.mE=o;this.wK={};this.Zn=this.Kn(1);this.ld=this.Kn(2);this.vl=this.Kn(3);a.platform.appendChild(this.Zn);a.platform.appendChild(this.ld);a.platform.appendChild(this.vl);var b=256*Math.pow(2,15),c=3*b,a=R.zb(new H(180,0)).lng,c=c-a,b=-3*b,d=R.zb(new H(-180,0)).lng;this.iI=a;this.jI=d;this.NA=c+(d-b);this.kI=a-d}z.Ue(function(a){var b=new Fc(a);b.ra();a.cb=b}); x.extend(Fc.prototype,{ra:function(){var a=this,b=a.map;b.addEventListener("loadcode",function(){a.Rx()});b.addEventListener("addtilelayer",function(b){a.Xg(b)});b.addEventListener("removetilelayer",function(b){a.yh(b)});b.addEventListener("setmaptype",function(b){a.Bg(b)});b.addEventListener("zoomstartcode",function(b){a.Jc(b)});b.addEventListener("setcustomstyles",function(b){a.Qt(b.target);a.Uf(o)})},Rx:function(){var a=this;if(x.da.la)try{document.execCommand("BackgroundImageCache",q,o)}catch(b){}this.loaded|| a.Hx();a.Uf();this.loaded||(this.loaded=o,I.load("tile",function(){a.VP()}))},Hx:function(){for(var a=this.map.pa().hr,b=0;b<a.length;b++){var c=new Gc;x.extend(c,a[b]);this.Jm.push(c);c.ra(this.map,this.Zn)}this.Qt()},Kn:function(a){var b=M("div");b.style.position="absolute";b.style.overflow="visible";b.style.left=b.style.top="0";b.style.zIndex=a;return b},yf:function(){this.rh--;var a=this;this.mE&&(this.map.dispatchEvent(new O("onfirsttileloaded")),this.mE=q);0==this.rh&&(this.Mi&&(clearTimeout(this.Mi), this.Mi=p),this.Mi=setTimeout(function(){if(a.rh==0){a.map.dispatchEvent(new O("ontilesloaded"));a.mE=o}a.Mi=p},80))},WD:function(a,b){return"TILE-"+b.ba+"-"+a[0]+"-"+a[1]+"-"+a[2]},Ex:function(a){var b=a.Hb;b&&xb(b)&&b.parentNode.removeChild(b);delete this.wg[a.name];a.loaded||(Hc(a),a.Hb=p,a.Mm=p)},wm:function(a,b,c){var d=this.map,e=d.pa(),f=d.Oa,g=d.mc,i=e.Ac(f),k=this.mL(),l=k[0],m=k[1],n=k[2],t=k[3],v=k[4],c="undefined"!=typeof c?c:0,e=e.k.Pb,k=d.ba.replace(/^TANGRAM_/,"");for(this.Qc?this.Qc.length= 0:this.Qc=[];l<n;l++)for(var w=m;w<t;w++){var y=l,C=w;this.Qc.push([y,C]);y=k+"_"+b+"_"+y+"_"+C+"_"+f;this.wK[y]=y}this.Qc.sort(function(a){return function(b,c){return 0.4*Math.abs(b[0]-a[0])+0.6*Math.abs(b[1]-a[1])-(0.4*Math.abs(c[0]-a[0])+0.6*Math.abs(c[1]-a[1]))}}([v[0]-1,v[1]-1]));g=[Math.round(-g.lng/i),Math.round(g.lat/i)];l=-d.offsetY+d.height/2;a.style.left=-d.offsetX+d.width/2+"px";a.style.top=l+"px";this.Me?this.Me.length=0:this.Me=[];l=0;for(d=a.childNodes.length;l<d;l++)w=a.childNodes[l], w.cr=q,this.Me.push(w);if(l=this.Pm)for(var B in l)delete l[B];else this.Pm={};this.Ne?this.Ne.length=0:this.Ne=[];l=0;for(d=this.Qc.length;l<d;l++){B=this.Qc[l][0];i=this.Qc[l][1];w=0;for(m=this.Me.length;w<m;w++)if(n=this.Me[w],n.id==k+"_"+b+"_"+B+"_"+i+"_"+f){n.cr=o;this.Pm[n.id]=n;break}}l=0;for(d=this.Me.length;l<d;l++)n=this.Me[l],n.cr||this.Ne.push(n);this.kn=[];w=(e+c)*this.map.K.devicePixelRatio;l=0;for(d=this.Qc.length;l<d;l++)B=this.Qc[l][0],i=this.Qc[l][1],t=B*e+g[0]-c/2,v=(-1-i)*e+g[1]- c/2,y=k+"_"+b+"_"+B+"_"+i+"_"+f,m=this.Pm[y],n=p,m?(n=m.style,n.left=t+"px",n.top=v+"px",m.Ze||this.kn.push([B,i,m])):(0<this.Ne.length?(m=this.Ne.shift(),m.getContext("2d").clearRect(-c/2,-c/2,w,w),n=m.style):(m=document.createElement("canvas"),n=m.style,n.position="absolute",n.width=e+c+"px",n.height=e+c+"px",this.Mx()&&(n.WebkitTransform="scale(1.001)"),m.setAttribute("width",w),m.setAttribute("height",w),a.appendChild(m)),m.id=y,n.left=t+"px",n.top=v+"px",-1<y.indexOf("bg")&&(t="#F3F1EC",this.map.K.xo&& (t=this.map.K.xo),n.background=t?t:""),this.kn.push([B,i,m])),m.style.visibility="";l=0;for(d=this.Ne.length;l<d;l++)this.Ne[l].style.visibility="hidden";return this.kn},Mx:function(){return/M040/i.test(navigator.userAgent)},mL:function(){var a=this.map,b=a.pa(),c=b.aE(a.Oa),d=a.mc,e=Math.ceil(d.lng/c),f=Math.ceil(d.lat/c),b=b.k.Pb,c=[e,f,(d.lng-e*c)/c*b,(d.lat-f*c)/c*b];return[c[0]-Math.ceil((a.width/2-c[2])/b),c[1]-Math.ceil((a.height/2-c[3])/b),c[0]+Math.ceil((a.width/2+c[2])/b),c[1]+Math.ceil((a.height/ 2+c[3])/b),c]},l_:function(a,b,c,d){var e=this;e.B1=b;var f=this.map.pa(),g=e.WD(a,c),i=f.k.Pb,b=[a[0]*i+b[0],(-1-a[1])*i+b[1]],k=this.wg[g];if(this.map.pa()!==Za&&this.map.pa()!==Sa){var l=this.yw(a[0],a[2]).offsetX;b[0]+=l;b.Z0=l}k&&k.Hb?(vb(k.Hb,b),d&&(d=new Q(a[0],a[1]),f=this.map.K.ue?this.map.K.ue.style:"normal",d=c.getTilesUrl(d,a[2],f),k.loaded=q,Ic(k,d)),k.loaded?this.yf():Jc(k,function(){e.yf()})):(k=this.ej[g])&&k.Hb?(c.Qb.insertBefore(k.Hb,c.Qb.lastChild),this.wg[g]=k,vb(k.Hb,b),d&&(d= new Q(a[0],a[1]),f=this.map.K.ue?this.map.K.ue.style:"normal",d=c.getTilesUrl(d,a[2],f),k.loaded=q,Ic(k,d)),k.loaded?this.yf():Jc(k,function(){e.yf()})):(k=i*Math.pow(2,f.pm()-a[2]),new H(a[0]*k,a[1]*k),d=new Q(a[0],a[1]),f=this.map.K.ue?this.map.K.ue.style:"normal",d=c.getTilesUrl(d,a[2],f),k=new Kc(this,d,b,a,c),Jc(k,function(){e.yf()}),k.Yn(),this.wg[g]=k)},yf:function(){this.rh--;var a=this;0==this.rh&&(this.Mi&&(clearTimeout(this.Mi),this.Mi=p),this.Mi=setTimeout(function(){if(a.rh==0){a.map.dispatchEvent(new O("ontilesloaded")); if(ua){if(ra&&sa&&ta){var b=ab(),c=a.map.Ab();setTimeout(function(){Ra(5030,{load_script_time:sa-ra,load_tiles_time:b-ta,map_width:c.width,map_height:c.height,map_size:c.width*c.height})},1E4);z.An("cus.fire","time",{z_imgfirstloaded:b-ta})}ua=q}}a.Mi=p},80))},WD:function(a,b){return this.map.pa()===Pa?"TILE-"+b.ba+"-"+this.map.Dw+"-"+a[0]+"-"+a[1]+"-"+a[2]:"TILE-"+b.ba+"-"+a[0]+"-"+a[1]+"-"+a[2]},Ex:function(a){var b=a.Hb;b&&(Mc(b),xb(b)&&b.parentNode.removeChild(b));delete this.wg[a.name];a.loaded|| (Mc(b),Hc(a),a.Hb=p,a.Mm=p)},yw:function(a,b){for(var c=0,d=6*Math.pow(2,b-3),e=d/2-1,f=-d/2;a>e;)a-=d,c-=this.NA;for(;a<f;)a+=d,c+=this.NA;c=Math.round(c/Math.pow(2,18-b));return{offsetX:c,$r:a}},oV:function(a){for(var b=a.lng;b>this.iI;)b-=this.kI;for(;b<this.jI;)b+=this.kI;a.lng=b;return a},pV:function(a,b){for(var c=256*Math.pow(2,18-b),d=Math.floor(this.iI/c),e=Math.floor(this.jI/c),c=Math.floor(this.NA/c),f=[],g=0;g<a.length;g++){var i=a[g],k=i[0],i=i[1];if(k>=d){var k=k+c,l="id_"+k+"_"+i+"_"+ b;a[l]||(a[l]=o,f.push([k,i]))}else k<=e&&(k-=c,l="id_"+k+"_"+i+"_"+b,a[l]||(a[l]=o,f.push([k,i])))}for(g=0;g<f.length;g++)a.push(f[g]);return a},Uf:function(a){var b=this;if(b.map.pa()==Pa)I.load("coordtrans",function(){b.map.Wb||(b.map.Wb=Pa.sk(b.map.Zg),b.map.Dw=Pa.kL(b.map.Wb));b.mI()},o);else{if(a&&a)for(var c in this.ej)delete this.ej[c];b.mI(a)}},mI:function(a){var b=this.Jm.concat(this.Xf),c=b.length,d=this.map,e=d.pa(),f=d.mc;this.map.pa()!==Za&&this.map.pa()!==Sa&&(f=this.oV(f));for(var g= 0;g<c;g++){var i=b[g];if(i.gc&&d.Oa<i.gc)break;if(i.ww){var k=this.Qb=i.Qb;if(a){var l=k;if(l&&l.childNodes)for(var m=l.childNodes.length,n=m-1;0<=n;n--)m=l.childNodes[n],l.removeChild(m),m=p}if(this.map.Vb()){this.ld.style.display="block";k.style.display="none";this.map.dispatchEvent(new O("vectorchanged"),{isvector:o});continue}else k.style.display="block",this.ld.style.display="none",this.map.dispatchEvent(new O("vectorchanged"),{isvector:q})}if(!i.$H&&!(i.lp&&!this.map.Vb()||i.jM&&this.map.Vb())){d= this.map;e=d.pa();k=e.$o();m=d.Oa;f=d.mc;e==Pa&&f.nb(new H(0,0))&&(f=d.mc=k.Im(d.gf,d.Wb));var t=e.Ac(m),k=e.aE(m),l=Math.ceil(f.lng/k),v=Math.ceil(f.lat/k),w=e.k.Pb,k=[l,v,(f.lng-l*k)/k*w,(f.lat-v*k)/k*w],n=k[0]-Math.ceil((d.width/2-k[2])/w),l=k[1]-Math.ceil((d.height/2-k[3])/w),v=k[0]+Math.ceil((d.width/2+k[2])/w),y=0;e===Pa&&15==d.fa()&&(y=1);e=k[1]+Math.ceil((d.height/2+k[3])/w)+y;this.RJ=new H(f.lng,f.lat);var C=this.wg,w=-this.RJ.lng/t,y=this.RJ.lat/t,t=[Math.ceil(w),Math.ceil(y)],f=d.fa(), B;for(B in C){var D=C[B],A=D.info;(A[2]!=f||A[2]==f&&(n>A[0]||v<=A[0]||l>A[1]||e<=A[1]))&&this.Ex(D)}C=-d.offsetX+d.width/2;D=-d.offsetY+d.height/2;i.Qb&&(i.Qb.style.left=Math.ceil(w+C)-t[0]+"px",i.Qb.style.top=Math.ceil(y+D)-t[1]+"px",i.Qb.style.WebkitTransform="translate3d(0,0,0)");w=[];for(d.KB=[];n<v;n++)for(y=l;y<e;y++)w.push([n,y]),d.KB.push({x:n,y:y});this.map.pa()!==Za&&this.map.pa()!==Sa&&(w=this.pV(w,m));w.sort(function(a){return function(b,c){return 0.4*Math.abs(b[0]-a[0])+0.6*Math.abs(b[1]- a[1])-(0.4*Math.abs(c[0]-a[0])+0.6*Math.abs(c[1]-a[1]))}}([k[0]-1,k[1]-1]));m=w.length;this.rh+=m;for(n=0;n<m;n++)this.l_([w[n][0],w[n][1],f],t,i,a)}}},Xg:function(a){var b=this,c=a.target,a=b.map.Vb();if(c instanceof cb)a&&!c.Em&&(c.ra(this.map,this.ld),c.Em=o);else if(c.Yf&&this.map.Xg(c.Yf),c.lp){for(a=0;a<b.Dg.length;a++)if(b.Dg[a]==c)return;I.load("vector",function(){c.ra(b.map,b.ld);b.Dg.push(c)},o)}else{for(a=0;a<b.Xf.length;a++)if(b.Xf[a]==c)return;c.ra(this.map,this.vl);b.Xf.push(c)}},yh:function(a){var a= a.target,b=this.map.Vb();if(a instanceof cb)b&&a.Em&&(a.remove(),a.Em=q);else{a.Yf&&this.map.yh(a.Yf);if(a.lp)for(var b=0,c=this.Dg.length;b<c;b++)a==this.Dg[b]&&this.Dg.splice(b,1);else{b=0;for(c=this.Xf.length;b<c;b++)a==this.Xf[b]&&this.Xf.splice(b,1)}a.remove()}},Bg:function(){for(var a=this.Jm,b=0,c=a.length;b<c;b++)a[b].remove();delete this.Qb;this.Jm=[];this.ej=this.wg={};this.Hx();this.Uf()},Jc:function(){var a=this;a.td&&x.D.U(a.td);setTimeout(function(){a.Uf();a.map.dispatchEvent(new O("onzoomend"))}, 10)},D4:s(),Qt:function(a){var b=this.map.pa();if(!this.map.Vb()&&(a?this.map.K.t_=a:a=this.map.K.t_,a))for(var c=p,c="2"==z.Oy?[z.url.proto+z.url.domain.main_domain_cdn.other[0]+"/"]:[z.url.proto+z.url.domain.main_domain_cdn.baidu[0]+"/",z.url.proto+z.url.domain.main_domain_cdn.baidu[1]+"/",z.url.proto+z.url.domain.main_domain_cdn.baidu[2]+"/"],d=0,e;e=this.Jm[d];d++)if(e.g_==o){b.k.$b=18;e.getTilesUrl=function(b,d){var e=b.x,e=this.map.cb.yw(e,d).$r,k=b.y,l=1;this.map.Fx()&&(l=2);l="customimage/tile?&x="+ e+"&y="+k+"&z="+d+"&udt=20170428&scale="+l+"&ak="+qa;l=a.styleStr?l+("&styles="+encodeURIComponent(a.styleStr)):l+("&customid="+a.style);return c[Math.abs(e+k)%c.length]+l};break}}});function Kc(a,b,c,d,e){this.Mm=a;this.position=c;this.Qu=[];this.name=a.WD(d,e);this.info=d;this.pJ=e.mt();d=M("img");wb(d);d.dL=q;var f=d.style,a=a.map.pa();f.position="absolute";f.border="none";f.width=a.k.Pb+"px";f.height=a.k.Pb+"px";f.left=c[0]+"px";f.top=c[1]+"px";f.maxWidth="none";this.Hb=d;this.src=b;Nc&&(this.Hb.style.opacity=0);var g=this;this.Hb.onload=function(){z.BY.HQ();g.loaded=o;if(g.Mm){var a=g.Mm,b=a.ej;if(!b[g.name]){a.ZE++;b[g.name]=g}if(g.Hb&&!xb(g.Hb)&&e.Qb){e.Qb.appendChild(g.Hb); if(x.da.la<=6&&x.da.la>0&&g.pJ)g.Hb.style.cssText=g.Hb.style.cssText+(';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+g.src+'",sizingMethod=scale);')}var c=a.ZE-a.mV,d;for(d in b){if(c<=0)break;if(!a.wg[d]){b[d].Mm=p;var f=b[d].Hb;if(f&&f.parentNode){f.parentNode.removeChild(f);Mc(f)}f=p;b[d].Hb=p;delete b[d];a.ZE--;c--}}Nc&&new rb({Gc:20,duration:200,va:function(a){if(g.Hb&&g.Hb.style)g.Hb.style.opacity=a*1},finish:function(){g.Hb&&g.Hb.style&&delete g.Hb.style.opacity}});Hc(g)}}; this.Hb.onerror=function(){Hc(g);if(g.Mm){var a=g.Mm.map.pa();if(a.k.lD){g.error=o;g.Hb.src=a.k.lD;g.Hb&&!xb(g.Hb)&&e.Qb.appendChild(g.Hb)}}};d=p}function Jc(a,b){a.Qu.push(b)}Kc.prototype.Yn=function(){this.Hb.src=0<x.da.la&&6>=x.da.la&&this.pJ?E.qa+"blank.gif":""!==this.src&&this.Hb.src==this.src?this.src+"&t = "+Date.now():this.src};function Hc(a){for(var b=0;b<a.Qu.length;b++)a.Qu[b]();a.Qu.length=0} function Mc(a){if(a){a.onload=a.onerror=p;var b=a.attributes,c,d,e;if(b){d=b.length;for(c=0;c<d;c+=1)e=b[c].name,Ya(a[e])&&(a[e]=p)}if(b=a.children){d=b.length;for(c=0;c<d;c+=1)Mc(a.children[c])}}}function Ic(a,b){a.src=b;a.Yn()}var Nc=!x.da.la||8<x.da.la;function Gc(a){this.th=a||{};this.JV=this.th.copyright||p;this.S_=this.th.transparentPng||q;this.ww=this.th.baseLayer||q;this.zIndex=this.th.zIndex||0;this.ba=Gc.vS++}Gc.vS=0;x.lang.ua(Gc,x.lang.Ca,"TileLayer"); x.extend(Gc.prototype,{ra:function(a,b){this.ww&&(this.zIndex=-100);this.map=a;if(!this.Qb){var c=M("div"),d=c.style;d.position="absolute";d.overflow="visible";d.zIndex=this.zIndex;d.left=Math.ceil(-a.offsetX+a.width/2)+"px";d.top=Math.ceil(-a.offsetY+a.height/2)+"px";b.appendChild(c);this.Qb=c}},remove:function(){this.Qb&&this.Qb.parentNode&&(this.Qb.innerHTML="",this.Qb.parentNode.removeChild(this.Qb));delete this.Qb},mt:u("S_"),getTilesUrl:function(a,b){if(this.map.pa()!==Za&&this.map.pa()!==Sa)var c= this.map.cb.yw(a.x,b).$r;var d="";this.th.tileUrlTemplate&&(d=this.th.tileUrlTemplate.replace(/\{X\}/,c),d=d.replace(/\{Y\}/,a.y),d=d.replace(/\{Z\}/,b));return d},nm:u("JV"),pa:function(){return this.Ib||Ma}});function Oc(a,b){Gb(a)?b=a||{}:(b=b||{},b.databoxId=a);this.k={xK:b.databoxId,eh:b.geotableId,Vm:b.q||"",gu:b.tags||"",filter:b.filter||"",Gy:b.sortby||"",r_:b.styleId||"",Sl:b.ak||qa,tw:b.age||36E5,zIndex:11,xY:"VectorCloudLayer",Ak:b.hotspotName||"vector_md_"+(1E5*Math.random()).toFixed(0),UU:"LBS\u4e91\u9ebb\u70b9\u5c42"};this.lp=o;Gc.call(this,this.k);this.bW=z.Fc+"geosearch/detail/";this.cW=z.Fc+"geosearch/v2/detail/";this.gp={}}x.ua(Oc,Gc,"VectorCloudLayer");function Pc(a){a=a||{};this.k=x.extend(a,{zIndex:1,xY:"VectorTrafficLayer",UU:"\u77e2\u91cf\u8def\u51b5\u5c42"});this.lp=o;Gc.call(this,this.k);this.O_=z.url.proto+z.url.domain.vector_traffic+"/gvd/?qt=lgvd&styles=pl&layers=tf";this.Eb={"0":[2,1354709503,2,2,0,[],0,0],1:[2,1354709503,3,2,0,[],0,0],10:[2,-231722753,2,2,0,[],0,0],11:[2,-231722753,3,2,0,[],0,0],12:[2,-231722753,4,2,0,[],0,0],13:[2,-231722753,5,2,0,[],0,0],14:[2,-231722753,6,2,0,[],0,0],15:[2,-1,4,0,0,[],0,0],16:[2,-1,5.5,0,0,[],0,0], 17:[2,-1,7,0,0,[],0,0],18:[2,-1,8.5,0,0,[],0,0],19:[2,-1,10,0,0,[],0,0],2:[2,1354709503,4,2,0,[],0,0],3:[2,1354709503,5,2,0,[],0,0],4:[2,1354709503,6,2,0,[],0,0],5:[2,-6350337,2,2,0,[],0,0],6:[2,-6350337,3,2,0,[],0,0],7:[2,-6350337,4,2,0,[],0,0],8:[2,-6350337,5,2,0,[],0,0],9:[2,-6350337,6,2,0,[],0,0]}}x.ua(Pc,Gc,"VectorTrafficLayer");function cb(a){this.nV=[z.url.proto+z.url.domain.TILE_ONLINE_URLS[1]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[2]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[3]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[4]+"/gvd/?"];this.k={ZK:q};for(var b in a)this.k[b]=a[b];this.Yh=this.Ih=this.Xa=this.B=this.C=p;this.oM=0;var c=this;I.load("vector",function(){c.Ae()})}x.extend(cb.prototype,{ra:function(a,b){this.C=a;this.B=b},remove:function(){this.B=this.C=p}});function Qc(a){Gc.call(this,a);this.k=a||{};this.jM=o;this.Yf=new Pc;this.Yf.My=this;if(this.k.predictDate){if(1>this.k.predictDate.weekday||7<this.k.predictDate.weekday)this.k.predictDate=1;if(0>this.k.predictDate.hour||23<this.k.predictDate.hour)this.k.predictDate.hour=0}this.xU=z.url.proto+z.url.domain.traffic+"/traffic/"}Qc.prototype=new Gc;Qc.prototype.ra=function(a,b){Gc.prototype.ra.call(this,a,b);this.C=a};Qc.prototype.mt=ca(o); Qc.prototype.getTilesUrl=function(a,b){var c="";this.k.predictDate?c="HistoryService?day="+(this.k.predictDate.weekday-1)+"&hour="+this.k.predictDate.hour+"&t="+(new Date).getTime()+"&":(c="TrafficTileService?time="+(new Date).getTime()+"&",c+="label=web2D&v=016&");var c=this.xU+c+"level="+b+"&x="+a.x+"&y="+a.y,d=1;this.C.Fx()&&(d=2);return(c+"&scaler="+d).replace(/-(\d+)/gi,"M$1")};var Rc=[z.url.proto+z.url.domain.TILES_YUN_HOST[0]+"/georender/gss",z.url.proto+z.url.domain.TILES_YUN_HOST[1]+"/georender/gss",z.url.proto+z.url.domain.TILES_YUN_HOST[2]+"/georender/gss",z.url.proto+z.url.domain.TILES_YUN_HOST[3]+"/georender/gss"],Sc=z.url.proto+z.url.domain.main_domain_nocdn.baidu+"/style/poi/rangestyle",Tc=100; function mb(a,b){Gc.call(this);var c=this;this.jM=o;var d=q;try{document.createElement("canvas").getContext("2d"),d=o}catch(e){d=q}d&&(this.Yf=new Oc(a,b),this.Yf.My=this);Gb(a)?b=a||{}:(c.Nn=a,b=b||{});b.geotableId&&(c.Af=b.geotableId);b.databoxId&&(c.Nn=b.databoxId);d=z.Fc+"geosearch";c.pc={tN:b.pointDensity||Tc,WX:d+"/detail/",XX:d+"/v2/detail/",tw:b.age||36E5,Vm:b.q||"",B_:"png",a3:[5,5,5,5],wY:{backgroundColor:"#FFFFD5",borderColor:"#808080"},Sl:b.ak||qa,gu:b.tags||"",filter:b.filter||"",Gy:b.sortby|| "",Ak:b.hotspotName||"tile_md_"+(1E5*Math.random()).toFixed(0),PF:o};I.load("clayer",function(){c.Qd()})}mb.prototype=new Gc;mb.prototype.ra=function(a,b){Gc.prototype.ra.call(this,a,b);this.C=a}; mb.prototype.getTilesUrl=function(a,b){var c=a.x,d=a.y,e=this.pc,c=Rc[Math.abs(c+d)%Rc.length]+"/image?grids="+c+"_"+d+"_"+b+"&q="+e.Vm+"&tags="+e.gu+"&filter="+e.filter+"&sortby="+e.Gy+"&ak="+this.pc.Sl+"&age="+e.tw+"&page_size="+e.tN+"&format="+e.B_;e.PF||(e=(1E5*Math.random()).toFixed(0),c+="&timeStamp="+e);this.Af?c+="&geotable_id="+this.Af:this.Nn&&(c+="&databox_id="+this.Nn);return c};mb.prototype.enableUseCache=function(){this.pc.PF=o};mb.prototype.disableUseCache=function(){this.pc.PF=q}; mb.VT=/^point\(|\)$/ig;mb.WT=/\s+/;mb.YT=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Uc(a,b,c){this.cf=a;this.hr=b instanceof Gc?[b]:b.slice(0);c=c||{};this.k={C_:c.tips||"",yE:"",gc:c.minZoom||3,$b:c.maxZoom||18,Z2:c.minZoom||3,Y2:c.maxZoom||18,Pb:256,FF:c.textColor||"black",lD:c.errorImageUrl||"",xe:c.projection||new R};1<=this.hr.length&&(this.hr[0].ww=o);x.extend(this.k,c)} x.extend(Uc.prototype,{getName:u("cf"),Ys:function(){return this.k.C_},E2:function(){return this.k.yE},JX:function(){return this.hr[0]},S2:u("hr"),KX:function(){return this.k.Pb},Vo:function(){return this.k.gc},pm:function(){return this.k.$b},setMaxZoom:function(a){this.k.$b=a},vm:function(){return this.k.FF},$o:function(){return this.k.xe},v2:function(){return this.k.lD},KX:function(){return this.k.Pb},Ac:function(a){return Math.pow(2,18-a)},aE:function(a){return this.Ac(a)*this.k.Pb}}); var Vc=[z.url.proto+z.url.domain.TILE_BASE_URLS[0]+"/it/",z.url.proto+z.url.domain.TILE_BASE_URLS[1]+"/it/",z.url.proto+z.url.domain.TILE_BASE_URLS[2]+"/it/",z.url.proto+z.url.domain.TILE_BASE_URLS[3]+"/it/",z.url.proto+z.url.domain.TILE_BASE_URLS[4]+"/it/"],Wc=[z.url.proto+z.url.domain.TILE_ONLINE_URLS[0]+"/tile/",z.url.proto+z.url.domain.TILE_ONLINE_URLS[1]+"/tile/",z.url.proto+z.url.domain.TILE_ONLINE_URLS[2]+"/tile/",z.url.proto+z.url.domain.TILE_ONLINE_URLS[3]+"/tile/",z.url.proto+z.url.domain.TILE_ONLINE_URLS[4]+ "/tile/"],Xc={dark:"dl",light:"ll",normal:"pl"},Yc=new Gc;Yc.g_=o;Yc.getTilesUrl=function(a,b,c){var d=a.x,a=a.y,e=1,c=Xc[c];this.map.Fx()&&(e=2);d=this.map.cb.yw(d,b).$r;return(Wc[Math.abs(d+a)%Wc.length]+"?qt=tile&x="+(d+"").replace(/-/gi,"M")+"&y="+(a+"").replace(/-/gi,"M")+"&z="+b+"&styles="+c+"&scaler="+e+(6==x.da.la?"&color_dep=32&colors=50":"")+"&udt=20170428").replace(/-(\d+)/gi,"M$1")};var Ma=new Uc("\u5730\u56fe",Yc,{tips:"\u663e\u793a\u666e\u901a\u5730\u56fe",maxZoom:19}),Zc=new Gc; Zc.oO=[z.url.proto+z.url.domain.TIlE_PERSPECT_URLS[0]+"/resource/mappic/",z.url.proto+z.url.domain.TIlE_PERSPECT_URLS[1]+"/resource/mappic/",z.url.proto+z.url.domain.TIlE_PERSPECT_URLS[2]+"/resource/mappic/",z.url.proto+z.url.domain.TIlE_PERSPECT_URLS[3]+"/resource/mappic/"];Zc.getTilesUrl=function(a,b){var c=a.x,d=a.y,e=256*Math.pow(2,20-b),d=Math.round((9998336-e*d)/e)-1;return url=this.oO[Math.abs(c+d)%this.oO.length]+this.map.Wb+"/"+this.map.Dw+"/3/lv"+(21-b)+"/"+c+","+d+".jpg"}; var Pa=new Uc("\u4e09\u7ef4",Zc,{tips:"\u663e\u793a\u4e09\u7ef4\u5730\u56fe",minZoom:15,maxZoom:20,textColor:"white",projection:new gb});Pa.Ac=function(a){return Math.pow(2,20-a)};Pa.sk=function(a){if(!a)return"";var b=E.fC,c;for(c in b)if(-1<a.search(c))return b[c].jy;return""};Pa.kL=function(a){return{bj:2,gz:1,sz:14,sh:4}[a]};var $c=new Gc({ww:o}); $c.getTilesUrl=function(a,b){var c=a.x,d=a.y;return(Vc[Math.abs(c+d)%Vc.length]+"u=x="+c+";y="+d+";z="+b+";v=009;type=sate&fm=46&udt=20150504").replace(/-(\d+)/gi,"M$1")};var Za=new Uc("\u536b\u661f",$c,{tips:"\u663e\u793a\u536b\u661f\u5f71\u50cf",minZoom:1,maxZoom:19,textColor:"white"}),ad=new Gc({transparentPng:o}); ad.getTilesUrl=function(a,b){var c=a.x,d=a.y;return(Wc[Math.abs(c+d)%Wc.length]+"?qt=tile&x="+(c+"").replace(/-/gi,"M")+"&y="+(d+"").replace(/-/gi,"M")+"&z="+b+"&styles=sl"+(6==x.da.la?"&color_dep=32&colors=50":"")+"&udt=20161229").replace(/-(\d+)/gi,"M$1")};var Sa=new Uc("\u6df7\u5408",[$c,ad],{tips:"\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",labelText:"\u8def\u7f51",minZoom:1,maxZoom:19,textColor:"white"});var bd=1,U={};window.o0=U;function V(a,b){x.lang.Ca.call(this);this.yd={};this.bn(a);b=b||{};b.ka=b.renderOptions||{};this.k={ka:{Ha:b.ka.panel||p,map:b.ka.map||p,Yg:b.ka.autoViewport||o,Lt:b.ka.selectFirstResult,bt:b.ka.highlightMode,Yb:b.ka.enableDragging||q},by:b.onSearchComplete||s(),fN:b.onMarkersSet||s(),eN:b.onInfoHtmlSet||s(),hN:b.onResultsHtmlSet||s(),dN:b.onGetBusListComplete||s(),cN:b.onGetBusLineComplete||s(),aN:b.onBusListHtmlSet||s(),$M:b.onBusLineHtmlSet||s(),ME:b.onPolylinesSet||s(),zp:b.reqFrom||""};this.k.ka.Yg= "undefined"!=typeof b&&"undefined"!=typeof b.renderOptions&&"undefined"!=typeof b.renderOptions.autoViewport?b.renderOptions.autoViewport:o;this.k.ka.Ha=x.Cc(this.k.ka.Ha)}x.ua(V,x.lang.Ca); x.extend(V.prototype,{getResults:function(){return this.Ec?this.Ji:this.ja},enableAutoViewport:function(){this.k.ka.Yg=o},disableAutoViewport:function(){this.k.ka.Yg=q},bn:function(a){a&&(this.yd.src=a)},vF:function(a){this.k.by=a||s()},setMarkersSetCallback:function(a){this.k.fN=a||s()},setPolylinesSetCallback:function(a){this.k.ME=a||s()},setInfoHtmlSetCallback:function(a){this.k.eN=a||s()},setResultsHtmlSetCallback:function(a){this.k.hN=a||s()},tm:u("Bd")});var cd={tG:z.Fc,bb:function(a,b,c,d,e){this.lZ(b);var f=(1E5*Math.random()).toFixed(0);z._rd["_cbk"+f]=function(b){b.result&&b.result.error&&202===b.result.error?alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01"):(c=c||{},a&&a(b,c),delete z._rd["_cbk"+f])};d=d||"";b=c&&c.GO?Db(b,encodeURI):Db(b,encodeURIComponent);this.tG=c&&c.Fs?c.EN?c.EN:z.pp:z.Fc;d=this.tG+d+"?"+b+"&ie=utf-8&oue=1&fromproduct=jsapi";e||(d+="&res=api");d=d+("&callback=BMap._rd._cbk"+ f)+("&ak="+qa);pa(d)},lZ:function(a){if(a.qt){var b="";switch(a.qt){case "bt":b="z_qt|bt";break;case "nav":b="z_qt|nav";break;case "walk":b="z_qt|walk";break;case "bse":b="z_qt|bse";break;case "nse":b="z_qt|nse";break;case "drag":b="z_qt|drag";break;case "s":b="z_qt|s";break;case "ext":b="z_qt|ext";break;case "gc":b="z_qt|gc";break;case "rgc":b="z_qt|rgc";break;case "bl":b="z_qt|bl";break;case "bsl":b="z_qt|bsl";break;case "con":b="z_qt|con";break;case "bd":b="z_qt|bd";break;case "nb":b="z_qt|nb"; break;case "bda":b="z_qt|bda";break;case "sa":b="z_qt|sa";break;case "nba":b="z_qt|nba";break;case "dec":b="z_qt|dec"}""!==b&&z.alog("cus.fire","count",b)}}};window.A0=cd;z._rd={};var P={};window.z0=P;P.AN=function(a){a=a.replace(/<\/?[^>]*>/g,"");return a=a.replace(/[ | ]* /g," ")};P.bZ=function(a){return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,"$1,$2;")};P.cZ=function(a,b){return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){"+b+"}","ig"),"$1")};var dd=2,ed=3,id=0,jd="bt",kd="nav",ld="walk",md="bl",nd="bsl",od=14,pd=15,qd=18,rd=20,sd=31;z.I=window.Instance=x.lang.Kc;function td(a,b,c){x.lang.Ca.call(this);if(a){this.Va="object"==typeof a?a:x.Cc(a);this.page=1;this.Jd=100;this.SJ="pg";this.Vf=4;this.$J=b;this.update=o;a={page:1,We:100,Jd:100,Vf:4,SJ:"pg",update:o};c||(c=a);for(var d in c)"undefined"!=typeof c[d]&&(this[d]=c[d]);this.va()}} x.extend(td.prototype,{va:function(){this.ra()},ra:function(){this.vV();this.Va.innerHTML=this.RV()},vV:function(){isNaN(parseInt(this.page))&&(this.page=1);isNaN(parseInt(this.Jd))&&(this.Jd=1);1>this.page&&(this.page=1);1>this.Jd&&(this.Jd=1);this.page>this.Jd&&(this.page=this.Jd);this.page=parseInt(this.page);this.Jd=parseInt(this.Jd)},J2:function(){location.search.match(RegExp("[?&]?"+this.SJ+"=([^&]*)[&$]?","gi"));this.page=RegExp.$1},RV:function(){var a=[],b=this.page-1,c=this.page+1;a.push('<p style="margin:0;padding:0;white-space:nowrap">'); if(!(1>b)){if(this.page>=this.Vf){var d;a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}","BMap.I('"+this.ba+"').toPage(1);"))}a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}","BMap.I('"+this.ba+"').toPage("+b+");"))}if(this.page<this.Vf)d=0==this.page%this.Vf?this.page-this.Vf-1:this.page-this.page% this.Vf+1,b=d+this.Vf-1;else{d=Math.floor(this.Vf/2);var e=this.Vf%2-1,b=this.Jd>this.page+d?this.page+d:this.Jd;d=this.page-d-e}this.page>this.Jd-this.Vf&&this.page>=this.Vf&&(d=this.Jd-this.Vf+1,b=this.Jd);for(e=d;e<=b;e++)0<e&&(e==this.page?a.push('<span style="margin-right:3px">'+e+"</span>"):1<=e&&e<=this.Jd&&(d='<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">['+e+"]</a></span>",a.push(d.replace("{temp3}","BMap.I('"+this.ba+"').toPage("+e+");")))); c>this.Jd||a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}","BMap.I('"+this.ba+"').toPage("+c+");"));a.push("</p>");return a.join("")},toPage:function(a){a=a?a:1;"function"==typeof this.$J&&(this.$J(a),this.page=a);this.update&&this.va()}});function bb(a,b){V.call(this,a,b);b=b||{};b.renderOptions=b.renderOptions||{};this.Jp(b.pageCapacity);"undefined"!=typeof b.renderOptions.selectFirstResult&&!b.renderOptions.selectFirstResult?this.KC():this.gD();this.wa=[];this.wf=[];this.kb=-1;this.Pa=[];var c=this;I.load("local",function(){c.Bz()},o)}x.ua(bb,V,"LocalSearch");bb.Zp=10;bb.w0=1;bb.zn=100;bb.jG=2E3;bb.qG=1E5; x.extend(bb.prototype,{search:function(a,b){this.Pa.push({method:"search",arguments:[a,b]})},Zm:function(a,b,c){this.Pa.push({method:"searchInBounds",arguments:[a,b,c]})},Fp:function(a,b,c,d){this.Pa.push({method:"searchNearby",arguments:[a,b,c,d]})},Oe:function(){delete this.Fa;delete this.Bd;delete this.ja;delete this.ga;this.kb=-1;this.sb();this.k.ka.Ha&&(this.k.ka.Ha.innerHTML="")},ym:s(),gD:function(){this.k.ka.Lt=o},KC:function(){this.k.ka.Lt=q},Jp:function(a){this.k.Ek="number"==typeof a&& !isNaN(a)?1>a?bb.Zp:a>bb.zn?bb.Zp:a:bb.Zp},pf:function(){return this.k.Ek},toString:ca("LocalSearch")});var ud=bb.prototype;S(ud,{clearResults:ud.Oe,setPageCapacity:ud.Jp,getPageCapacity:ud.pf,gotoPage:ud.ym,searchNearby:ud.Fp,searchInBounds:ud.Zm,search:ud.search,enableFirstResultSelection:ud.gD,disableFirstResultSelection:ud.KC});function vd(a,b){V.call(this,a,b)}x.ua(vd,V,"BaseRoute");x.extend(vd.prototype,{Oe:s()});function wd(a,b){V.call(this,a,b);b=b||{};this.Tt(b.policy);this.Jp(b.pageCapacity);this.ud=jd;this.Cu=od;this.Du=bd;this.wa=[];this.kb=-1;this.k.ed=b.enableTraffic||q;this.Pa=[];var c=this;I.load("route",function(){c.Qd()})}wd.zn=100;wd.lP=[0,1,0,0,0,0,0,0,2,0,0,0,1,1,1];x.ua(wd,vd,"TransitRoute"); x.extend(wd.prototype,{Tt:function(a){this.k.$c=0<=a&&4>=a?a:0},BA:function(a,b){this.Pa.push({method:"_internalSearch",arguments:[a,b]})},search:function(a,b){this.Pa.push({method:"search",arguments:[a,b]})},Jp:function(a){if("string"===typeof a&&(a=parseInt(a,10),isNaN(a))){this.k.Ek=wd.zn;return}this.k.Ek="number"!==typeof a?wd.zn:1<=a&&a<=wd.zn?Math.round(a):wd.zn},toString:ca("TransitRoute"),jU:function(a){return a.replace(/\(.*\)/,"")}});var xd=wd.prototype;S(xd,{_internalSearch:xd.BA});function yd(a,b){V.call(this,a,b);this.wa=[];this.kb=-1;this.Pa=[];var c=this,d=this.k.ka;1!==d.bt&&2!==d.bt&&(d.bt=1);this.Vz=this.k.ka.Yb?o:q;I.load("route",function(){c.Qd()});this.jE&&this.jE()}yd.zP=" \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" "); x.ua(yd,vd,"DWRoute");x.extend(yd.prototype,{search:function(a,b,c){this.Pa.push({method:"search",arguments:[a,b,c]})}});function zd(a,b){yd.call(this,a,b);b=b||{};this.k.ed=b.enableTraffic||q;this.Tt(b.policy);this.ud=kd;this.Cu=rd;this.Du=ed}x.ua(zd,yd,"DrivingRoute");zd.prototype.Tt=function(a){this.k.$c=0<=a&&2>=a?a:0};function Ad(a,b){yd.call(this,a,b);this.ud=ld;this.Cu=sd;this.Du=dd;this.Vz=q}x.ua(Ad,yd,"WalkingRoute");function Bd(a,b){x.lang.Ca.call(this);this.Tf=[];this.Sm=[];this.k=b;this.fc=a;this.map=this.k.ka.map||p;this.ty=this.k.ty;this.Bb=p;this.gj=0;this.Hy="";this.ae=1;this.$w="";this.Ap=[0,0,0,0,0,0,0];this.BE=[];this.fs=[1,1,1,1,1,1,1];this.wO=[1,1,1,1,1,1,1];this.Jt=[0,0,0,0,0,0,0];this.Bp=[0,0,0,0,0,0,0];this.Ma=[{o:"",Cd:0,mn:0,x:0,y:0,oa:-1},{o:"",Cd:0,mn:0,x:0,y:0,oa:-1},{o:"",Cd:0,mn:0,x:0,y:0,oa:-1},{o:"",Cd:0,mn:0,x:0,y:0,oa:-1},{o:"",Cd:0,mn:0,x:0,y:0,oa:-1},{o:"",Cd:0,mn:0,x:0,y:0,oa:-1}, {o:"",Cd:0,mn:0,x:0,y:0,oa:-1}];this.fi=-1;this.iu=[];this.ju=[];I.load("route",s())}x.lang.ua(Bd,x.lang.Ca,"RouteAddr");var Cd=navigator.userAgent;/ipad|iphone|ipod|iph/i.test(Cd);var Dd=/android/i.test(Cd);function Ed(a){this.th=a||{}}x.extend(Ed.prototype,{KN:function(a,b,c){var d=this;I.load("route",function(){d.Qd(a,b,c)})}});function Fd(a){this.k={};x.extend(this.k,a);this.Pa=[];var b=this;I.load("othersearch",function(){b.Qd()})}x.ua(Fd,x.lang.Ca,"Geocoder");x.extend(Fd.prototype,{sm:function(a,b,c){this.Pa.push({method:"getPoint",arguments:[a,b,c]})},Rs:function(a,b,c){this.Pa.push({method:"getLocation",arguments:[a,b,c]})},toString:ca("Geocoder")});var Gd=Fd.prototype;S(Gd,{getPoint:Gd.sm,getLocation:Gd.Rs});function Geolocation(a){a=a||{};this.K={timeout:a.timeout||1E4,maximumAge:a.maximumAge||6E5};this.le=[];var b=this;I.load("othersearch",function(){for(var a=0,d;d=b.le[a];a++)b[d.method].apply(b,d.arguments)})}x.extend(Geolocation.prototype,{getCurrentPosition:function(a,b){this.le.push({method:"getCurrentPosition",arguments:arguments})},getStatus:ca(2)});function Hd(a){a=a||{};a.ka=a.renderOptions||{};this.k={ka:{map:a.ka.map||p}};this.Pa=[];var b=this;I.load("othersearch",function(){b.Qd()})}x.ua(Hd,x.lang.Ca,"LocalCity");x.extend(Hd.prototype,{get:function(a){this.Pa.push({method:"get",arguments:[a]})},toString:ca("LocalCity")});function Id(){this.Pa=[];var a=this;I.load("othersearch",function(){a.Qd()})}x.ua(Id,x.lang.Ca,"Boundary");x.extend(Id.prototype,{get:function(a,b){this.Pa.push({method:"get",arguments:[a,b]})},toString:ca("Boundary")});function Jd(a,b){V.call(this,a,b);this.wP=md;this.yP=pd;this.vP=nd;this.xP=qd;this.Pa=[];var c=this;I.load("buslinesearch",function(){c.Qd()})}Jd.mv=E.qa+"iw_plus.gif";Jd.BS=E.qa+"iw_minus.gif";Jd.tU=E.qa+"stop_icon.png";x.ua(Jd,V); x.extend(Jd.prototype,{getBusList:function(a){this.Pa.push({method:"getBusList",arguments:[a]})},getBusLine:function(a){this.Pa.push({method:"getBusLine",arguments:[a]})},setGetBusListCompleteCallback:function(a){this.k.dN=a||s()},setGetBusLineCompleteCallback:function(a){this.k.cN=a||s()},setBusListHtmlSetCallback:function(a){this.k.aN=a||s()},setBusLineHtmlSetCallback:function(a){this.k.$M=a||s()},setPolylinesSetCallback:function(a){this.k.ME=a||s()}});function Kd(a){V.call(this,a);a=a||{};this.pc={input:a.input||p,VB:a.baseDom||p,types:a.types||[],by:a.onSearchComplete||s()};this.yd.src=a.location||"\u5168\u56fd";this.aj="";this.ng=p;this.WH="";this.Qi();Ra(Ia);var b=this;I.load("autocomplete",function(){b.Qd()})}x.ua(Kd,V,"Autocomplete");x.extend(Kd.prototype,{Qi:s(),show:s(),U:s(),wF:function(a){this.pc.types=a},bn:function(a){this.yd.src=a},search:ba("aj"),wy:ba("WH")});var Ta;function Oa(a,b){function c(){e.k.visible?("inter"===e.Ie&&e.k.haveBreakId&&e.k.indoorExitControl===o?x.D.show(e.uA):x.D.U(e.uA),this.k.closeControl&&this.zf&&this.C&&this.C.Na()===this.B?x.D.show(e.zf):x.D.U(e.zf),this.k.forceCloseControl&&x.D.show(e.zf)):(x.D.U(e.zf),x.D.U(e.uA))}this.B="string"==typeof a?x.$(a):a;this.ba=Ld++;this.k={enableScrollWheelZoom:o,panoramaRenderer:"flash",swfSrc:z.tg("main_domain_nocdn","res/swf/")+"APILoader.swf",visible:o,indoorExitControl:o,indoorFloorControl:q,linksControl:o, clickOnRoad:o,navigationControl:o,closeControl:o,indoorSceneSwitchControl:o,albumsControl:q,albumsControlOptions:{},copyrightControlOptions:{},forceCloseControl:q,haveBreakId:q};var b=b||{},d;for(d in b)this.k[d]=b[d];b.closeControl===o&&(this.k.forceCloseControl=o);b.useWebGL===q&&Na(q);this.Da={heading:0,pitch:0};this.Xn=[];this.Lb=this.Ya=p;this.ck=this.Wq();this.wa=[];this.Jc=1;this.Ie=this.ZS=this.dl="";this.He={};this.Mf=p;this.Qg=[];this.sr=[];"cvsRender"==this.ck||Na()?(this.Vj=90,this.Xj= -90):"cssRender"==this.ck&&(this.Vj=45,this.Xj=-45);this.wr=q;var e=this;this.Yn=function(){this.ck==="flashRender"?I.load("panoramaflash",function(){e.Qi()},o):I.load("panorama",function(){e.yb()},o);b.Pf=="api"?Ra(Da):Ra(Fa);this.Yn=s()};this.k.MS!==o&&(this.Yn(),z.An("cus.fire","count","z_loadpanoramacount"));this.DT(this.B);this.addEventListener("id_changed",function(){Ra(Ca,{from:b.Pf})});this.QP();this.addEventListener("indoorexit_options_changed",c);this.addEventListener("scene_type_changed", c);this.addEventListener("onclose_options_changed",c);this.addEventListener("onvisible_changed",c)}var Md=4,Nd=1,Ld=0;x.lang.ua(Oa,x.lang.Ca,"Panorama"); x.extend(Oa.prototype,{QP:function(){var a=this,b=this.zf=M("div");b.className="pano_close";b.style.cssText="z-index: 1201;display: none";b.title="\u9000\u51fa\u5168\u666f";b.onclick=function(){a.U()};this.B.appendChild(b);var c=this.uA=M("a");c.className="pano_pc_indoor_exit";c.style.cssText="z-index: 1201;display: none";c.innerHTML='<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';c.title="\u9000\u51fa\u5ba4\u5185\u666f";c.onclick=function(){a.Oo()};this.B.appendChild(c);window.ActiveXObject&& !document.addEventListener&&(b.style.backgroundColor="rgb(37,37,37)",c.style.backgroundColor="rgb(37,37,37)")},Oo:s(),DT:function(a){var b,c;b=a.style;c=Wa(a).position;"absolute"!=c&&"relative"!=c&&(b.position="relative",b.zIndex=0);if("absolute"===c||"relative"===c)if(a=Wa(a).zIndex,!a||"auto"===a)b.zIndex=0},jX:u("Xn"),Zb:u("Ya"),LX:u("Vv"),ZN:u("Vv"),ha:u("Lb"),Ea:u("Da"),fa:u("Jc"),gh:u("dl"),L2:function(){return this.c1||[]},G2:u("ZS"),Xs:u("Ie"),yy:function(a){a!==this.Ie&&(this.Ie=a,this.dispatchEvent(new O("onscene_type_changed")))}, rc:function(a,b,c){"object"===typeof b&&(c=b,b=j);a!=this.Ya&&(this.ol=this.Ya,this.pl=this.Lb,this.Ya=a,this.Ie=b||"street",this.Lb=p,c&&c.pov&&this.Mc(c.pov))},ta:function(a){a.nb(this.Lb)||(this.ol=this.Ya,this.pl=this.Lb,this.Lb=a,this.Ya=p)},Mc:function(a){a&&(this.Da=a,a=this.Da.pitch,a>this.Vj?a=this.Vj:a<this.Xj&&(a=this.Xj),this.wr=o,this.Da.pitch=a)},b_:function(a,b){this.Xj=0<=a?0:a;this.Vj=0>=b?0:b},Nc:function(a){a!=this.Jc&&(a>Md&&(a=Md),a<Nd&&(a=Nd),a!=this.Jc&&(this.Jc=a),"cssRender"=== this.ck&&this.Mc(this.Da))},uB:function(){if(this.C)for(var a=this.C.tx(),b=0;b<a.length;b++)(a[b]instanceof T||a[b]instanceof tc)&&a[b].point&&this.wa.push(a[b])},sF:ba("C"),St:function(a){this.Mf=a||"none"},Kk:function(a){for(var b in a){if("object"==typeof a[b])for(var c in a[b])this.k[b][c]=a[b][c];else this.k[b]=a[b];a.closeControl===o&&(this.k.forceCloseControl=o);a.closeControl===q&&(this.k.forceCloseControl=q);switch(b){case "linksControl":this.dispatchEvent(new O("onlinks_visible_changed")); break;case "clickOnRoad":this.dispatchEvent(new O("onclickonroad_changed"));break;case "navigationControl":this.dispatchEvent(new O("onnavigation_visible_changed"));break;case "indoorSceneSwitchControl":this.dispatchEvent(new O("onindoor_default_switch_mode_changed"));break;case "albumsControl":this.dispatchEvent(new O("onalbums_visible_changed"));break;case "albumsControlOptions":this.dispatchEvent(new O("onalbums_options_changed"));break;case "copyrightControlOptions":this.dispatchEvent(new O("oncopyright_options_changed")); break;case "closeControl":this.dispatchEvent(new O("onclose_options_changed"));break;case "indoorExitControl":this.dispatchEvent(new O("onindoorexit_options_changed"));break;case "indoorFloorControl":this.dispatchEvent(new O("onindoorfloor_options_changed"))}}},zk:function(){this.xl.style.visibility="hidden"},Cy:function(){this.xl.style.visibility="visible"},xW:function(){this.k.enableScrollWheelZoom=o},iW:function(){this.k.enableScrollWheelZoom=q},show:function(){this.k.visible=o},U:function(){this.k.visible= q},Wq:function(){return Va()&&!F()&&"javascript"!=this.k.panoramaRenderer?"flashRender":!F()&&Nb()?"cvsRender":"cssRender"},Ja:function(a){this.He[a.hd]=a},Tb:function(a){delete this.He[a]},ZD:function(){return this.k.visible},fh:function(){return new N(this.B.clientWidth,this.B.clientHeight)},Na:u("B"),gL:function(){var a=z.tg("baidumap","?"),b=this.Zb();if(b){var b={panotype:this.Xs(),heading:this.Ea().heading,pitch:this.Ea().pitch,pid:b,panoid:b,from:"api"},c;for(c in b)a+=c+"="+b[c]+"&"}return a.slice(0, -1)},Cx:function(){this.Kk({copyrightControlOptions:{logoVisible:q}})},zF:function(){this.Kk({copyrightControlOptions:{logoVisible:o}})},PB:function(a){function b(a,b){return function(){a.sr.push({NM:b,MM:arguments})}}for(var c=a.getPanoMethodList(),d="",e=0,f=c.length;e<f;e++)d=c[e],this[d]=b(this,d);this.Qg.push(a)},bF:function(a){for(var b=this.Qg.length;b--;)this.Qg[b]===a&&this.Qg.splice(b,1)},rF:s()});var Od=Oa.prototype; S(Od,{setId:Od.rc,setPosition:Od.ta,setPov:Od.Mc,setZoom:Od.Nc,setOptions:Od.Kk,getId:Od.Zb,getPosition:Od.ha,getPov:Od.Ea,getZoom:Od.fa,getLinks:Od.jX,getBaiduMapUrl:Od.gL,hideMapLogo:Od.Cx,showMapLogo:Od.zF,enableDoubleClickZoom:Od.a2,disableDoubleClickZoom:Od.O1,enableScrollWheelZoom:Od.xW,disableScrollWheelZoom:Od.iW,show:Od.show,hide:Od.U,addPlugin:Od.PB,removePlugin:Od.bF,getVisible:Od.ZD,addOverlay:Od.Ja,removeOverlay:Od.Tb,getSceneType:Od.Xs,setPanoramaPOIType:Od.St,exitInter:Od.Oo,setInteractiveState:Od.rF}); S(window,{BMAP_PANORAMA_POI_HOTEL:"hotel",BMAP_PANORAMA_POI_CATERING:"catering",BMAP_PANORAMA_POI_MOVIE:"movie",BMAP_PANORAMA_POI_TRANSIT:"transit",BMAP_PANORAMA_POI_INDOOR_SCENE:"indoor_scene",BMAP_PANORAMA_POI_NONE:"none",BMAP_PANORAMA_INDOOR_SCENE:"inter",BMAP_PANORAMA_STREET_SCENE:"street"});function Pd(){x.lang.Ca.call(this);this.hd="PanoramaOverlay_"+this.ba;this.P=p;this.Qa=o}x.lang.ua(Pd,x.lang.Ca,"PanoramaOverlayBase");x.extend(Pd.prototype,{H2:u("hd"),ra:function(){aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")},remove:function(){aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")},Lf:function(){aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")}});function Qd(a,b){Pd.call(this);var c={position:p,altitude:2,displayDistance:o},b=b||{},d;for(d in b)c[d]=b[d];this.Lb=c.position;this.Lj=a;this.pq=c.altitude;this.bR=c.displayDistance;this.FF=c.color;this.QL=c.hoverColor;this.backgroundColor=c.backgroundColor;this.UJ=c.backgroundHoverColor;this.borderColor=c.borderColor;this.YJ=c.borderHoverColor;this.fontSize=c.fontSize;this.padding=c.padding;this.eE=c.imageUrl;this.size=c.size;this.te=c.image;this.width=c.width;this.height=c.height;this.$X=c.imageData; this.borderWidth=c.borderWidth}x.lang.ua(Qd,Pd,"PanoramaLabel"); x.extend(Qd.prototype,{m2:u("borderWidth"),getImageData:u("$X"),vm:u("FF"),A2:u("QL"),i2:u("backgroundColor"),j2:u("UJ"),k2:u("borderColor"),l2:u("YJ"),x2:u("fontSize"),I2:u("padding"),B2:u("eE"),Ab:u("size"),jx:u("te"),ta:function(a){this.Lb=a;this.Lf("position",a)},ha:u("Lb"),ad:function(a){this.Lj=a;this.Lf("content",a)},tk:u("Lj"),mF:function(a){this.pq=a;this.Lf("altitude",a)},Ro:u("pq"),Ea:function(){var a=this.ha(),b=p,c=p;this.P&&(c=this.P.ha());if(a&&c)if(a.nb(c))b=this.P.Ea();else{b={}; b.heading=Rd(a.lng-c.lng,a.lat-c.lat)||0;var a=b,c=this.Ro(),d=this.Sn();a.pitch=Math.round(180*(Math.atan(c/d)/Math.PI))||0}return b},Sn:function(){var a=0,b,c;this.P&&(b=this.P.ha(),(c=this.ha())&&!c.nb(b)&&(a=R.To(b,c)));return a},U:function(){aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")},show:function(){aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")},Lf:s()});var Sd=Qd.prototype; S(Sd,{setPosition:Sd.ta,getPosition:Sd.ha,setContent:Sd.ad,getContent:Sd.tk,setAltitude:Sd.mF,getAltitude:Sd.Ro,getPov:Sd.Ea,show:Sd.show,hide:Sd.U});function Td(a,b){Pd.call(this);var c={icon:"",title:"",panoInfo:p,altitude:2},b=b||{},d;for(d in b)c[d]=b[d];this.Lb=a;this.RH=c.icon;this.nJ=c.title;this.pq=c.altitude;this.pT=c.panoInfo;this.Da={heading:0,pitch:0}}x.lang.ua(Td,Pd,"PanoramaMarker"); x.extend(Td.prototype,{ta:function(a){this.Lb=a;this.Lf("position",a)},ha:u("Lb"),Bc:function(a){this.nJ=a;this.Lf("title",a)},bp:u("nJ"),Ub:function(a){this.RH=icon;this.Lf("icon",a)},Uo:u("RH"),mF:function(a){this.pq=a;this.Lf("altitude",a)},Ro:u("pq"),QD:u("pT"),Ea:function(){var a=p;if(this.P){var a=this.P.ha(),b=this.ha(),a=Rd(b.lng-a.lng,b.lat-a.lat);isNaN(a)&&(a=0);a={heading:a,pitch:0}}else a=this.Da;return a},Lf:s()});var Ud=Td.prototype; S(Ud,{setPosition:Ud.ta,getPosition:Ud.ha,setTitle:Ud.Bc,getTitle:Ud.bp,setAltitude:Ud.mF,getAltitude:Ud.Ro,getPanoInfo:Ud.QD,getIcon:Ud.Uo,setIcon:Ud.Ub,getPov:Ud.Ea});function Rd(a,b){var c=0;if(0!==a&&0!==b){var c=180*(Math.atan(a/b)/Math.PI),d=0;0<a&&0>b&&(d=90);0>a&&0>b&&(d=180);0>a&&0<b&&(d=270);c=(c+90)%90+d}else 0===a?c=0>b?180:0:0===b&&(c=0<a?90:270);return Math.round(c)}function Na(a){if("boolean"===typeof Vd)return Vd;if(a===q||!window.WebGLRenderingContext||x.platform.Fm&&-1==navigator.userAgent.indexOf("Android 5"))return Vd=q;var a=document.createElement("canvas"),b=p;try{b=a.getContext("webgl")}catch(c){Vd=q}return Vd=b===p?q:o}var Vd; function Wd(){if("boolean"===typeof Xd)return Xd;Xd=o;if(x.platform.nE)return o;var a=navigator.userAgent;return-1<a.indexOf("Chrome")||-1<a.indexOf("SAMSUNG-GT-I9508")?o:Xd=q}var Xd;function bc(a,b){this.P=a||p;var c=this;c.P&&c.ca();I.load("pservice",function(){c.uQ()});"api"==(b||{}).Pf?Ra(Ga):Ra(Ha);this.vd={getPanoramaById:[],getPanoramaByLocation:[],getVisiblePOIs:[],getRecommendPanosById:[],getPanoramaVersions:[],checkPanoSupportByCityCode:[],getPanoramaByPOIId:[],getCopyrightProviders:[]}}z.Rm(function(a){"flashRender"!==a.Wq()&&new bc(a,{Pf:"api"})}); x.extend(bc.prototype,{ca:function(){function a(a){if(a){if(a.id!=b.Vv){b.ZN(a.id);b.ea=a;Wd()||b.dispatchEvent(new O("onthumbnail_complete"));b.Ya!=p&&(b.pl=b._position);for(var c in a)if(a.hasOwnProperty(c))switch(b["_"+c]=a[c],c){case "position":b.Lb=a[c];break;case "id":b.Ya=a[c];break;case "links":b.Xn=a[c];break;case "zoom":b.Jc=a[c]}if(b.pl){var f=b.pl,g=b._position;c=f.lat;var i=g.lat,k=Ob(i-c),f=Ob(g.lng-f.lng);c=Math.sin(k/2)*Math.sin(k/2)+Math.cos(Ob(c))*Math.cos(Ob(i))*Math.sin(f/2)*Math.sin(f/ 2);b.fH=6371E3*2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))}c=new O("ondataload");c.data=a;b.dispatchEvent(c);b.dispatchEvent(new O("onposition_changed"));b.dispatchEvent(new O("onlinks_changed"));b.dispatchEvent(new O("oncopyright_changed"),{copyright:a.copyright});a.Zl&&b.k.closeControl?x.D.show(b.xR):x.D.U(b.xR)}}else b.Ya=b.ol,b.Lb=b.pl,b.dispatchEvent(new O("onnoresult"))}var b=this.P,c=this;b.addEventListener("id_changed",function(){c.Yo(b.Zb(),a)});b.addEventListener("iid_changed",function(){c.Rg(bc.$k+ "qt=idata&iid="+b.qA+"&fn=",function(b){if(b&&b.result&&0==b.result.error){var b=b.content[0].interinfo,e={};e.Zl=b.BreakID;for(var f=b.Defaultfloor,g=p,i=0;i<b.Floors.length;i++)if(b.Floors[i].Floor==f){g=b.Floors[i];break}e.id=g.StartID||g.Points[0].PID;c.Yo(e.id,a,e)}})});b.addEventListener("position_changed_inner",function(){c.qj(b.ha(),a)})},Yo:function(a,b){this.vd.getPanoramaById.push(arguments)},qj:function(a,b,c){this.vd.getPanoramaByLocation.push(arguments)},$D:function(a,b,c,d){this.vd.getVisiblePOIs.push(arguments)}, wx:function(a,b){this.vd.getRecommendPanosById.push(arguments)},vx:function(a){this.vd.getPanoramaVersions.push(arguments)},cC:function(a,b){this.vd.checkPanoSupportByCityCode.push(arguments)},ux:function(a,b){this.vd.getPanoramaByPOIId.push(arguments)},lL:function(a){this.vd.getCopyrightProviders.push(arguments)}});var Yd=bc.prototype;S(Yd,{getPanoramaById:Yd.Yo,getPanoramaByLocation:Yd.qj,getPanoramaByPOIId:Yd.ux});function ac(a){Gc.call(this);"api"==(a||{}).Pf?Ra(za):Ra(Ba)}ac.xG=z.tg("pano","tile/");ac.prototype=new Gc;ac.prototype.getTilesUrl=function(a,b){var c=ac.xG[(a.x+a.y)%ac.xG.length]+"?udt=20150114&qt=tile&styles=pl&x="+a.x+"&y="+a.y+"&z="+b;x.da.la&&6>=x.da.la&&(c+="&color_dep=32");return c};ac.prototype.mt=ca(o);Zd.Ud=new R;function Zd(){}x.extend(Zd,{jW:function(a,b,c){c=x.lang.Kc(c);b={data:b};"position_changed"==a&&(b.data=Zd.Ud.wi(new Q(b.data.mercatorX,b.data.mercatorY)));c.dispatchEvent(new O("on"+a),b)}});var $d=Zd;S($d,{dispatchFlashEvent:$d.jW});var ae={nP:50};ae.Eu=z.tg("pano")[0];ae.Au={width:220,height:60}; x.extend(ae,{ip:function(a,b,c,d){if(!b||!c||!c.lngLat||!c.panoInstance)d();else{this.co===j&&(this.co=new bc(p,{Pf:"api"}));var e=this;this.co.cC(b,function(b){b?e.co.qj(c.lngLat,ae.nP,function(b){if(b&&b.id){var f=b.id,k=b.uh,b=b.vh,l=bc.Ud.mh(c.lngLat),m=e.cS(l,{x:k,y:b}),k=e.vL(f,m,0,ae.Au.width,ae.Au.height);a.content=e.dS(a.content,k,c.titleTip,c.beforeDomId);a.addEventListener("open",function(){ja.M(x.Cc("infoWndPano"),"click",function(){c.panoInstance.rc(f);c.panoInstance.show();c.panoInstance.Mc({heading:m, pitch:0})})})}d()}):d()})}},dS:function(a,b,c,d){var c=c||"",e;!d||!a.split(d)[0]?(d=a,a=""):(d=a.split(d)[0],e=d.lastIndexOf("<"),d=a.substring(0,e),a=a.substring(e));e=[];var f=ae.Au.width,g=ae.Au.height;e.push(d);e.push("<div id='infoWndPano' class='panoInfoBox' style='height:"+g+"px;width:"+f+"px; margin-top: -19px;'>");e.push("<img class='pano_thumnail_img' width='"+f+"' height='"+g+"' border='0' alt='"+c+"\u5916\u666f' title='"+c+"\u5916\u666f' src='"+b+"' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, "+ f+", "+g+");' />");e.push("<div class='panoInfoBoxTitleBg' style='width:"+f+"px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");e.push("</div>");e.push(a);return e.join("")},cS:function(a,b){var c=90-180*Math.atan2(a.y-b.y,a.x-b.x)/Math.PI;0>c&&(c+=360);return c},vL:function(a,b,c,d,e){var f={panoId:a,panoHeading:b||0,panoPitch:c||0,width:d,height:e};return(ae.Eu+"?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a,b){return f[b]})}});var be=document,ce=Math,de=be.createElement("div").style,ee;a:{for(var fe=["t","webkitT","MozT","msT","OT"],ge,he=0,ie=fe.length;he<ie;he++)if(ge=fe[he]+"ransform",ge in de){ee=fe[he].substr(0,fe[he].length-1);break a}ee=q} var je=ee?"-"+ee.toLowerCase()+"-":"",le=ke("transform"),ne=ke("transitionProperty"),oe=ke("transitionDuration"),ue=ke("transformOrigin"),ve=ke("transitionTimingFunction"),we=ke("transitionDelay"),Dd=/android/gi.test(navigator.appVersion),xe=/iphone|ipad/gi.test(navigator.appVersion),ye=/hp-tablet/gi.test(navigator.appVersion),ze=ke("perspective")in de,Ae="ontouchstart"in window&&!ye,Be=ee!==q,Ce=ke("transition")in de,De="onorientationchange"in window?"orientationchange":"resize",Ee=Ae?"touchstart": "mousedown",Fe=Ae?"touchmove":"mousemove",Ge=Ae?"touchend":"mouseup",He=Ae?"touchcancel":"mouseup",Ie=ee===q?q:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[ee],Je=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,1)},Ke=window.cancelRequestAnimationFrame||window.K4||window.webkitCancelRequestAnimationFrame|| window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,Le=ze?" translateZ(0)":""; function Me(a,b){var c=this,d;c.tn="object"==typeof a?a:be.getElementById(a);c.tn.style.overflow="hidden";c.Ob=c.tn.children[0];c.options={fp:o,nn:o,x:0,y:0,zo:o,jV:q,Vx:o,CE:o,Tk:o,Bi:q,F_:0,Cw:q,zx:o,mi:o,Ci:o,qD:Dd,Dx:xe,EW:xe&&ze,jF:"",zoom:q,Vk:1,Vp:4,lW:2,TO:"scroll",au:q,Fy:1,gN:p,ZM:function(a){a.preventDefault()},jN:p,YM:p,iN:p,XM:p,ay:p,kN:p,bN:p,up:p,lN:p,sp:p};for(d in b)c.options[d]=b[d];c.x=c.options.x;c.y=c.options.y;c.options.Tk=Be&&c.options.Tk;c.options.mi=c.options.fp&&c.options.mi; c.options.Ci=c.options.nn&&c.options.Ci;c.options.zoom=c.options.Tk&&c.options.zoom;c.options.Bi=Ce&&c.options.Bi;c.options.zoom&&Dd&&(Le="");c.Ob.style[ne]=c.options.Tk?je+"transform":"top left";c.Ob.style[oe]="0";c.Ob.style[ue]="0 0";c.options.Bi&&(c.Ob.style[ve]="cubic-bezier(0.33,0.66,0.66,1)");c.options.Tk?c.Ob.style[le]="translate("+c.x+"px,"+c.y+"px)"+Le:c.Ob.style.cssText+=";position:absolute;top:"+c.y+"px;left:"+c.x+"px";c.options.Bi&&(c.options.qD=o);c.refresh();c.ca(De,window);c.ca(Ee); !Ae&&"none"!=c.options.TO&&(c.ca("DOMMouseScroll"),c.ca("mousewheel"));c.options.Cw&&(c.uV=setInterval(function(){c.rQ()},500));this.options.zx&&(Event.prototype.stopImmediatePropagation||(document.body.removeEventListener=function(a,b,c){var d=Node.prototype.removeEventListener;a==="click"?d.call(document.body,a,b.OL||b,c):d.call(document.body,a,b,c)},document.body.addEventListener=function(a,b,c){var d=Node.prototype.addEventListener;a==="click"?d.call(document.body,a,b.OL||(b.OL=function(a){a.kZ|| b(a)}),c):d.call(document.body,a,b,c)}),c.ca("click",document.body,o))} Me.prototype={enabled:o,x:0,y:0,Aj:[],scale:1,xC:0,yC:0,Se:[],uf:[],UB:p,Qy:0,handleEvent:function(a){switch(a.type){case Ee:if(!Ae&&0!==a.button)break;this.Ov(a);break;case Fe:this.aT(a);break;case Ge:case He:this.$u(a);break;case De:this.nB();break;case "DOMMouseScroll":case "mousewheel":this.FU(a);break;case Ie:this.BU(a);break;case "click":this.CQ(a)}},rQ:function(){!this.qh&&(!this.Wk&&!(this.Vl||this.vy==this.Ob.offsetWidth*this.scale&&this.Ep==this.Ob.offsetHeight*this.scale))&&this.refresh()}, Fv:function(a){var b;this[a+"Scrollbar"]?(this[a+"ScrollbarWrapper"]||(b=be.createElement("div"),this.options.jF?b.className=this.options.jF+a.toUpperCase():b.style.cssText="position:absolute;z-index:100;"+("h"==a?"height:7px;bottom:1px;left:2px;right:"+(this.Ci?"7":"2")+"px":"width:7px;bottom:"+(this.mi?"7":"2")+"px;top:2px;right:1px"),b.style.cssText+=";pointer-events:none;"+je+"transition-property:opacity;"+je+"transition-duration:"+(this.options.EW?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.Dx? "0":"1"),this.tn.appendChild(b),this[a+"ScrollbarWrapper"]=b,b=be.createElement("div"),this.options.jF||(b.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+je+"background-clip:padding-box;"+je+"box-sizing:border-box;"+("h"==a?"height:100%":"width:100%")+";"+je+"border-radius:3px;border-radius:3px"),b.style.cssText+=";pointer-events:none;"+je+"transition-property:"+je+"transform;"+je+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+ je+"transition-duration:0;"+je+"transform: translate(0,0)"+Le,this.options.Bi&&(b.style.cssText+=";"+je+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[a+"ScrollbarWrapper"].appendChild(b),this[a+"ScrollbarIndicator"]=b),"h"==a?(this.LL=this.ML.clientWidth,this.TX=ce.max(ce.round(this.LL*this.LL/this.vy),8),this.SX.style.width=this.TX+"px"):(this.KO=this.LO.clientHeight,this.$_=ce.max(ce.round(this.KO*this.KO/this.Ep),8),this.Z_.style.height=this.$_+"px"),this.oB(a,o)):this[a+"ScrollbarWrapper"]&& (Be&&(this[a+"ScrollbarIndicator"].style[le]=""),this[a+"ScrollbarWrapper"].parentNode.removeChild(this[a+"ScrollbarWrapper"]),this[a+"ScrollbarWrapper"]=p,this[a+"ScrollbarIndicator"]=p)},nB:function(){var a=this;setTimeout(function(){a.refresh()},Dd?200:0)},vr:function(a,b){this.Wk||(a=this.fp?a:0,b=this.nn?b:0,this.options.Tk?this.Ob.style[le]="translate("+a+"px,"+b+"px) scale("+this.scale+")"+Le:(a=ce.round(a),b=ce.round(b),this.Ob.style.left=a+"px",this.Ob.style.top=b+"px"),this.x=a,this.y=b, this.oB("h"),this.oB("v"))},oB:function(a,b){var c="h"==a?this.x:this.y;this[a+"Scrollbar"]&&(c*=this[a+"ScrollbarProp"],0>c?(this.options.qD||(c=this[a+"ScrollbarIndicatorSize"]+ce.round(3*c),8>c&&(c=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=c+"px"),c=0):c>this[a+"ScrollbarMaxScroll"]&&(this.options.qD?c=this[a+"ScrollbarMaxScroll"]:(c=this[a+"ScrollbarIndicatorSize"]-ce.round(3*(c-this[a+"ScrollbarMaxScroll"])),8>c&&(c=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]= c+"px",c=this[a+"ScrollbarMaxScroll"]+(this[a+"ScrollbarIndicatorSize"]-c))),this[a+"ScrollbarWrapper"].style[we]="0",this[a+"ScrollbarWrapper"].style.opacity=b&&this.options.Dx?"0":"1",this[a+"ScrollbarIndicator"].style[le]="translate("+("h"==a?c+"px,0)":"0,"+c+"px)")+Le)},CQ:function(a){if(a.yR===o)return this.MB=a.target,this.ax=Date.now(),o;if(this.MB&&this.ax){if(600<Date.now()-this.ax)return this.ax=this.MB=p,o}else{for(var b=a.target;b!=this.Ob&&b!=document.body;)b=b.parentNode;if(b==document.body)return o}for(b= a.target;1!=b.nodeType;)b=b.parentNode;b=b.tagName.toLowerCase();if("select"!=b&&"input"!=b&&"textarea"!=b)return a.stopImmediatePropagation?a.stopImmediatePropagation():a.kZ=o,a.stopPropagation(),a.preventDefault(),this.ax=this.MB=p,q},Ov:function(a){var b=Ae?a.touches[0]:a,c,d;if(this.enabled){this.options.ZM&&this.options.ZM.call(this,a);(this.options.Bi||this.options.zoom)&&this.oJ(0);this.Wk=this.Vl=this.qh=q;this.HC=this.GC=this.gw=this.fw=this.NC=this.MC=0;this.options.zoom&&(Ae&&1<a.touches.length)&& (d=ce.abs(a.touches[0].pageX-a.touches[1].pageX),c=ce.abs(a.touches[0].pageY-a.touches[1].pageY),this.H_=ce.sqrt(d*d+c*c),this.dy=ce.abs(a.touches[0].pageX+a.touches[1].pageX-2*this.TF)/2-this.x,this.ey=ce.abs(a.touches[0].pageY+a.touches[1].pageY-2*this.UF)/2-this.y,this.options.up&&this.options.up.call(this,a));if(this.options.Vx&&(this.options.Tk?(c=getComputedStyle(this.Ob,p)[le].replace(/[^0-9\-.,]/g,"").split(","),d=+(c[12]||c[4]),c=+(c[13]||c[5])):(d=+getComputedStyle(this.Ob,p).left.replace(/[^0-9-]/g, ""),c=+getComputedStyle(this.Ob,p).top.replace(/[^0-9-]/g,"")),d!=this.x||c!=this.y))this.options.Bi?this.Wd(Ie):Ke(this.UB),this.Aj=[],this.vr(d,c),this.options.ay&&this.options.ay.call(this);this.hw=this.x;this.jw=this.y;this.du=this.x;this.eu=this.y;this.uh=b.pageX;this.vh=b.pageY;this.startTime=a.timeStamp||Date.now();this.options.jN&&this.options.jN.call(this,a);this.ca(Fe,window);this.ca(Ge,window);this.ca(He,window)}},aT:function(a){var b=Ae?a.touches[0]:a,c=b.pageX-this.uh,d=b.pageY-this.vh, e=this.x+c,f=this.y+d,g=a.timeStamp||Date.now();this.options.YM&&this.options.YM.call(this,a);if(this.options.zoom&&Ae&&1<a.touches.length)e=ce.abs(a.touches[0].pageX-a.touches[1].pageX),f=ce.abs(a.touches[0].pageY-a.touches[1].pageY),this.G_=ce.sqrt(e*e+f*f),this.Wk=o,b=1/this.H_*this.G_*this.scale,b<this.options.Vk?b=0.5*this.options.Vk*Math.pow(2,b/this.options.Vk):b>this.options.Vp&&(b=2*this.options.Vp*Math.pow(0.5,this.options.Vp/b)),this.np=b/this.scale,e=this.dy-this.dy*this.np+this.x,f=this.ey- this.ey*this.np+this.y,this.Ob.style[le]="translate("+e+"px,"+f+"px) scale("+b+")"+Le,this.options.lN&&this.options.lN.call(this,a);else{this.uh=b.pageX;this.vh=b.pageY;if(0<e||e<this.fe)e=this.options.zo?this.x+c/2:0<=e||0<=this.fe?0:this.fe;if(f>this.rf||f<this.nd)f=this.options.zo?this.y+d/2:f>=this.rf||0<=this.nd?this.rf:this.nd;this.MC+=c;this.NC+=d;this.fw=ce.abs(this.MC);this.gw=ce.abs(this.NC);6>this.fw&&6>this.gw||(this.options.CE&&(this.fw>this.gw+5?(f=this.y,d=0):this.gw>this.fw+5&&(e= this.x,c=0)),this.qh=o,this.vr(e,f),this.GC=0<c?-1:0>c?1:0,this.HC=0<d?-1:0>d?1:0,300<g-this.startTime&&(this.startTime=g,this.du=this.x,this.eu=this.y),this.options.iN&&this.options.iN.call(this,a))}},$u:function(a){if(!(Ae&&0!==a.touches.length)){var b=this,c=Ae?a.changedTouches[0]:a,d,e,f={Ba:0,time:0},g={Ba:0,time:0},i=(a.timeStamp||Date.now())-b.startTime;d=b.x;e=b.y;b.Wd(Fe,window);b.Wd(Ge,window);b.Wd(He,window);b.options.XM&&b.options.XM.call(b,a);if(b.Wk)d=b.scale*b.np,d=Math.max(b.options.Vk, d),d=Math.min(b.options.Vp,d),b.np=d/b.scale,b.scale=d,b.x=b.dy-b.dy*b.np+b.x,b.y=b.ey-b.ey*b.np+b.y,b.Ob.style[oe]="200ms",b.Ob.style[le]="translate("+b.x+"px,"+b.y+"px) scale("+b.scale+")"+Le,b.Wk=q,b.refresh(),b.options.sp&&b.options.sp.call(b,a);else{if(b.qh){if(300>i&&b.options.Vx){f=d?b.lI(d-b.du,i,-b.x,b.vy-b.su+b.x,b.options.zo?b.su:0):f;g=e?b.lI(e-b.eu,i,-b.y,0>b.nd?b.Ep-b.vn+b.y-b.rf:0,b.options.zo?b.vn:0):g;d=b.x+f.Ba;e=b.y+g.Ba;if(0<b.x&&0<d||b.x<b.fe&&d<b.fe)f={Ba:0,time:0};if(b.y>b.rf&& e>b.rf||b.y<b.nd&&e<b.nd)g={Ba:0,time:0}}f.Ba||g.Ba?(c=ce.max(ce.max(f.time,g.time),10),b.options.au&&(f=d-b.hw,g=e-b.jw,ce.abs(f)<b.options.Fy&&ce.abs(g)<b.options.Fy?b.scrollTo(b.hw,b.jw,200):(f=b.fJ(d,e),d=f.x,e=f.y,c=ce.max(f.time,c))),b.scrollTo(ce.round(d),ce.round(e),c)):b.options.au?(f=d-b.hw,g=e-b.jw,ce.abs(f)<b.options.Fy&&ce.abs(g)<b.options.Fy?b.scrollTo(b.hw,b.jw,200):(f=b.fJ(b.x,b.y),(f.x!=b.x||f.y!=b.y)&&b.scrollTo(f.x,f.y,f.time))):b.fo(200)}else{if(Ae)if(b.EK&&b.options.zoom)clearTimeout(b.EK), b.EK=p,b.options.up&&b.options.up.call(b,a),b.zoom(b.uh,b.vh,1==b.scale?b.options.lW:1),b.options.sp&&setTimeout(function(){b.options.sp.call(b,a)},200);else if(this.options.zx){for(d=c.target;1!=d.nodeType;)d=d.parentNode;e=d.tagName.toLowerCase();"select"!=e&&"input"!=e&&"textarea"!=e?(e=be.createEvent("MouseEvents"),e.initMouseEvent("click",o,o,a.view,1,c.screenX,c.screenY,c.clientX,c.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,p),e.yR=o,d.dispatchEvent(e)):d.focus()}b.fo(400)}b.options.kN&& b.options.kN.call(b,a)}}},fo:function(a){var b=0<=this.x?0:this.x<this.fe?this.fe:this.x,c=this.y>=this.rf||0<this.nd?this.rf:this.y<this.nd?this.nd:this.y;if(b==this.x&&c==this.y){if(this.qh&&(this.qh=q,this.options.ay&&this.options.ay.call(this)),this.mi&&this.options.Dx&&("webkit"==ee&&(this.ML.style[we]="300ms"),this.ML.style.opacity="0"),this.Ci&&this.options.Dx)"webkit"==ee&&(this.LO.style[we]="300ms"),this.LO.style.opacity="0"}else this.scrollTo(b,c,a||0)},FU:function(a){var b=this,c,d;if("wheelDeltaX"in a)c=a.wheelDeltaX/12,d=a.wheelDeltaY/12;else if("wheelDelta"in a)c=d=a.wheelDelta/12;else if("detail"in a)c=d=3*-a.detail;else return;if("zoom"==b.options.TO){if(d=b.scale*Math.pow(2,1/3*(d?d/Math.abs(d):0)),d<b.options.Vk&&(d=b.options.Vk),d>b.options.Vp&&(d=b.options.Vp),d!=b.scale)!b.Qy&&b.options.up&&b.options.up.call(b,a),b.Qy++,b.zoom(a.pageX,a.pageY,d,400),setTimeout(function(){b.Qy--;!b.Qy&&b.options.sp&&b.options.sp.call(b,a)},400)}else c=b.x+c,d=b.y+d,0<c?c=0:c<b.fe&&(c=b.fe),d>b.rf?d=b.rf: d<b.nd&&(d=b.nd),0>b.nd&&b.scrollTo(c,d,0)},BU:function(a){a.target==this.Ob&&(this.Wd(Ie),this.AB())},AB:function(){var a=this,b=a.x,c=a.y,d=Date.now(),e,f,g;a.Vl||(a.Aj.length?(e=a.Aj.shift(),e.x==b&&e.y==c&&(e.time=0),a.Vl=o,a.qh=o,a.options.Bi)?(a.oJ(e.time),a.vr(e.x,e.y),a.Vl=q,e.time?a.ca(Ie):a.fo(0)):(g=function(){var i=Date.now(),k;if(i>=d+e.time){a.vr(e.x,e.y);a.Vl=q;a.options.TY&&a.options.TY.call(a);a.AB()}else{i=(i-d)/e.time-1;f=ce.sqrt(1-i*i);i=(e.x-b)*f+b;k=(e.y-c)*f+c;a.vr(i,k);if(a.Vl)a.UB= Je(g)}},g()):a.fo(400))},oJ:function(a){a+="ms";this.Ob.style[oe]=a;this.mi&&(this.SX.style[oe]=a);this.Ci&&(this.Z_.style[oe]=a)},lI:function(a,b,c,d,e){var b=ce.abs(a)/b,f=b*b/0.0012;0<a&&f>c?(c+=e/(6/(6.0E-4*(f/b))),b=b*c/f,f=c):0>a&&f>d&&(d+=e/(6/(6.0E-4*(f/b))),b=b*d/f,f=d);return{Ba:f*(0>a?-1:1),time:ce.round(b/6.0E-4)}},Zj:function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;a!=this.tn&&(b*=this.scale,c*=this.scale);return{left:b,top:c}},fJ:function(a, b){var c,d,e;e=this.Se.length-1;c=0;for(d=this.Se.length;c<d;c++)if(a>=this.Se[c]){e=c;break}e==this.xC&&(0<e&&0>this.GC)&&e--;a=this.Se[e];d=(d=ce.abs(a-this.Se[this.xC]))?500*(ce.abs(this.x-a)/d):0;this.xC=e;e=this.uf.length-1;for(c=0;c<e;c++)if(b>=this.uf[c]){e=c;break}e==this.yC&&(0<e&&0>this.HC)&&e--;b=this.uf[e];c=(c=ce.abs(b-this.uf[this.yC]))?500*(ce.abs(this.y-b)/c):0;this.yC=e;e=ce.round(ce.max(d,c))||200;return{x:a,y:b,time:e}},ca:function(a,b,c){(b||this.Ob).addEventListener(a,this,!!c)}, Wd:function(a,b,c){(b||this.Ob).removeEventListener(a,this,!!c)},DC:ha(2),refresh:function(){var a,b,c,d=0;b=0;this.scale<this.options.Vk&&(this.scale=this.options.Vk);this.su=this.tn.clientWidth||1;this.vn=this.tn.clientHeight||1;this.rf=-this.options.F_||0;this.vy=ce.round(this.Ob.offsetWidth*this.scale);this.Ep=ce.round((this.Ob.offsetHeight+this.rf)*this.scale);this.fe=this.su-this.vy;this.nd=this.vn-this.Ep+this.rf;this.HC=this.GC=0;this.options.gN&&this.options.gN.call(this);this.fp=this.options.fp&& 0>this.fe;this.nn=this.options.nn&&(!this.options.jV&&!this.fp||this.Ep>this.vn);this.mi=this.fp&&this.options.mi;this.Ci=this.nn&&this.options.Ci&&this.Ep>this.vn;a=this.Zj(this.tn);this.TF=-a.left;this.UF=-a.top;if("string"==typeof this.options.au){this.Se=[];this.uf=[];c=this.Ob.querySelectorAll(this.options.au);a=0;for(b=c.length;a<b;a++)d=this.Zj(c[a]),d.left+=this.TF,d.top+=this.UF,this.Se[a]=d.left<this.fe?this.fe:d.left*this.scale,this.uf[a]=d.top<this.nd?this.nd:d.top*this.scale}else if(this.options.au){for(this.Se= [];d>=this.fe;)this.Se[b]=d,d-=this.su,b++;this.fe%this.su&&(this.Se[this.Se.length]=this.fe-this.Se[this.Se.length-1]+this.Se[this.Se.length-1]);b=d=0;for(this.uf=[];d>=this.nd;)this.uf[b]=d,d-=this.vn,b++;this.nd%this.vn&&(this.uf[this.uf.length]=this.nd-this.uf[this.uf.length-1]+this.uf[this.uf.length-1])}this.Fv("h");this.Fv("v");this.Wk||(this.Ob.style[oe]="0",this.fo(400))},scrollTo:function(a,b,c,d){var e=a;this.stop();e.length||(e=[{x:a,y:b,time:c,mZ:d}]);a=0;for(b=e.length;a<b;a++)e[a].mZ&& (e[a].x=this.x-e[a].x,e[a].y=this.y-e[a].y),this.Aj.push({x:e[a].x,y:e[a].y,time:e[a].time||0});this.AB()},disable:function(){this.stop();this.fo(0);this.enabled=q;this.Wd(Fe,window);this.Wd(Ge,window);this.Wd(He,window)},enable:function(){this.enabled=o},stop:function(){this.options.Bi?this.Wd(Ie):Ke(this.UB);this.Aj=[];this.Vl=this.qh=q},zoom:function(a,b,c,d){var e=c/this.scale;this.options.Tk&&(this.Wk=o,d=d===j?200:d,a=a-this.TF-this.x,b=b-this.UF-this.y,this.x=a-a*e+this.x,this.y=b-b*e+this.y, this.scale=c,this.refresh(),this.x=0<this.x?0:this.x<this.fe?this.fe:this.x,this.y=this.y>this.rf?this.rf:this.y<this.nd?this.nd:this.y,this.Ob.style[oe]=d+"ms",this.Ob.style[le]="translate("+this.x+"px,"+this.y+"px) scale("+c+")"+Le,this.Wk=q)}};function ke(a){if(""===ee)return a;a=a.charAt(0).toUpperCase()+a.substr(1);return ee+a}de=p;function Ne(a){this.k={anchor:Vb,offset:new N(0,0),maxWidth:"100%",imageHeight:80};var a=a||{},b;for(b in a)this.k[b]=a[b];this.Hl=new bc(p,{Pf:"api"});this.$j=[];this.P=p;this.fg={height:this.k.imageHeight,width:this.k.imageHeight*Oe};this.Oc=this.pB=this.Zl=this.Xc=p}var Pe=[0,1,2,2,2,2,2,2,2,3,3,3,3,4,5,5,5,6,6,7,8,8,8,9,10],Qe="\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" "); z.Rm(function(a){var b=p;a.addEventListener("position_changed",function(){a.k.visible&&a.k.albumsControl===o&&(b?b.ny(a.Zb()):(b=new Ne(a.k.albumsControlOptions),b.ra(a)))});a.addEventListener("albums_visible_changed",function(){a.k.albumsControl===o?(b?b.ny(a.Zb()):(b=new Ne(a.k.albumsControlOptions),b.ra(a)),b.show()):b.U()});a.addEventListener("albums_options_changed",function(){b&&b.Kk(a.k.albumsControlOptions)});a.addEventListener("visible_changed",function(){b&&(a.ZD()?a.k.albumsControl===o&& (b.B.style.visibility="visible"):b.B.style.visibility="hidden")})});var Oe=1.8;F()&&(Oe=1); x.extend(Ne.prototype,{Kk:function(a){for(var b in a)this.k[b]=a[b];a=this.k.imageHeight+"px";this.qc(this.k.anchor);this.B.style.width=isNaN(Number(this.k.maxWidth))===o?this.k.maxWidth:this.k.maxWidth+"px";this.B.style.height=a;this.fk.style.height=a;this.Wh.style.height=a;this.fg={height:this.k.imageHeight,width:this.k.imageHeight*Oe};this.ek.style.height=this.fg.height-6+"px";this.ek.style.width=this.fg.width-6+"px";this.ny(this.P.Zb(),o)},ra:function(a){this.P=a;this.ds();this.aQ();this.gY(); this.ny(a.Zb())},ds:function(){var a=this.k.imageHeight+"px";this.B=M("div");var b=this.B.style;b.cssText="background:rgb(37,37,37);background:rgba(37,37,37,0.9);";b.position="absolute";b.zIndex="2000";b.width=isNaN(Number(this.k.maxWidth))===o?this.k.maxWidth:this.k.maxWidth+"px";b.padding="8px 0";b.visibility="hidden";b.height=a;this.fk=M("div");b=this.fk.style;b.position="absolute";b.overflow="hidden";b.width="100%";b.height=a;this.Wh=M("div");b=this.Wh.style;b.height=a;this.fk.appendChild(this.Wh); this.B.appendChild(this.fk);this.P.B.appendChild(this.B);this.ek=M("div",{"class":"pano_photo_item_seleted"});this.ek.style.height=this.fg.height-6+"px";this.ek.style.width=this.fg.width-6+"px";this.qc(this.k.anchor)},CH:function(a){for(var b=this.$j,c=b.length-1;0<=c;c--)if(b[c].panoId==a)return c;return-1},ny:function(a,b){if(b||!this.$j[this.Xc]||!(this.$j[this.Xc].panoId==a&&3!==this.$j[this.Xc].recoType)){var c=this,d=this.CH(a);!b&&-1!==d&&this.$j[d]&&3!==this.$j[d].recoType?this.Ip(d):this.yX(function(a){for(var b= {},d,i,k=q,l=[],m=0,n=a.length;m<n;m++)d=a[m].catlog,i=a[m].floor,j!==d&&(""===d&&j!==i?(k=o,b[i]||(b[i]=[]),b[i].push(a[m])):(b[Pe[d]]||(b[Pe[d]]=[]),b[Pe[d]].push(a[m])));for(var t in b)k?l.push({data:t+"F",index:t}):l.push({data:Qe[t],index:t});c.TG=b;c.Oi=l;c.Dl(a);0==a.length?c.U():c.show()})}},SV:function(){if(!this.Li){var a=this.mX(this.Oi),b=M("div");b.style.cssText=["width:"+134*this.Oi.length+"px;","overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join(""); b.innerHTML=a;a=M("div");a.appendChild(b);a.style.cssText="position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";new Me(a,{zo:q,Vx:o,mi:q,Ci:q,nn:q,CE:o,Cw:o,zx:o});this.B.appendChild(a);for(var c=this,d=b.getElementsByTagName("span"),e=0,f=d.length;e<f;e++)b=d[e],x.M(b,"click",function(){if(this.getAttribute("dataindex")){c.Dl(c.TG[this.getAttribute("dataindex")]);for(var a= 0,b=d.length;a<b;a++)d[a].style.color="#FFFFFF";this.style.color="#3383FF"}});this.Li=a}},PV:function(){if(this.Li)a=this.jL(this.Oi),this.qQ.innerHTML=a;else{var a=this.jL(this.Oi),b=M("ul"),c=this;b.style.cssText="list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";b.innerHTML=a;x.M(b,"click",function(a){if(a=(a.srcElement||a.target).getAttribute("dataindex")){c.Dl(c.TG[a]);for(var d=b.getElementsByTagName("li"),e=0,f=d.length;e<f;e++)d[e].childNodes[0].getAttribute("dataindex")=== a?x.D.Ua(d[e],"pano_catlogLiActive"):x.D.Sb(d[e],"pano_catlogLiActive")}});var a=M("div"),d=M("a"),e=M("span"),f=M("a"),g=M("span"),i=["background:url("+E.qa+"panorama/catlog_icon.png) no-repeat;","display:block;width:10px;height:7px;margin:0 auto;"].join("");e.style.cssText=i+"background-position:-18px 0;";d.style.cssText="background:#1C1C1C;display:block;position:absolute;width:58px;";g.style.cssText=i+"background-position:0 0;";f.style.cssText="background:#1C1C1C;display:block;position:absolute;width:58px;"; f.style.top=this.k.imageHeight-7+"px";a.style.cssText="position:absolute;top:0px;left:0px;width:60px;";d.appendChild(e);f.appendChild(g);x.M(d,"mouseover",function(){var a=parseInt(b.style.top,10);7!==a&&(e.style.backgroundPosition="-27px 0");new rb({Gc:60,jc:sb.Cs,duration:300,va:function(c){b.style.top=a+(7-a)*c+"px"}})});x.M(d,"mouseout",function(){e.style.backgroundPosition="-18px 0"});x.M(f,"mouseover",function(){var a=parseInt(b.style.top,10),d=c.k.imageHeight-14;if(!(parseInt(b.offsetHeight, 10)<d)){var e=d-parseInt(b.offsetHeight,10)+7;e!==a&&(g.style.backgroundPosition="-9px 0");new rb({Gc:60,jc:sb.Cs,duration:300,va:function(c){b.style.top=a+(e-a)*c+"px"}})}});x.M(f,"mouseout",function(){g.style.backgroundPosition="0 0"});a.appendChild(d);a.appendChild(f);d=M("div");d.style.cssText=["position:absolute;z-index:2001;left:20px;","height:"+this.k.imageHeight+"px;","width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");d.appendChild(b);d.appendChild(a); this.Li=d;this.qQ=b;this.B.appendChild(d)}},QV:function(){if(this.Oi&&!(0>=this.Oi.length)){var a=M("div");a.innerHTML=this.Xz;a.style.cssText="position:absolute;background:#252525";this.B.appendChild(a);this.Gs=a;this.Oc.gg.style.left=this.fg.width+8+"px";this.Li&&(this.Li.style.left=parseInt(this.Li.style.left,10)+this.fg.width+8+"px");var b=this;x.M(a,"click",function(){b.P.rc(b.AW)})}},Dl:function(a){this.$j=a;this.k.showCatalog&&(0<this.Oi.length?(Va()?this.PV():this.SV(),this.Oc.offsetLeft= 60):(this.Gs&&(this.B.removeChild(this.Gs),this.Gs=p,this.Oc.gg.style.left="0px"),this.Li&&(this.B.removeChild(this.Li),this.Li=p),this.Oc.offsetLeft=0));var b=this.gX(a);Va()&&(this.Oi&&0<this.Oi.length&&this.k.showExit&&this.Xz)&&(this.Oc.offsetLeft+=this.fg.width+8,this.Gs?this.Gs.innerHTML=this.Xz:this.QV());this.Wh.innerHTML=b;this.Wh.style.width=(this.fg.width+8)*a.length+8+"px";a=this.B.offsetWidth;b=this.Wh.offsetWidth;this.Oc.Ns&&(b+=this.Oc.Ns());b<a-2*this.Oc.Fi-this.Oc.offsetLeft?this.B.style.width= b+this.Oc.offsetLeft+"px":(this.B.style.width=isNaN(Number(this.k.maxWidth))===o?this.k.maxWidth:this.k.maxWidth+"px",b<this.B.offsetWidth-2*this.Oc.Fi-this.Oc.offsetLeft&&(this.B.style.width=b+this.Oc.offsetLeft+"px"));this.Oc.refresh();this.pB=this.Wh.children;this.Wh.appendChild(this.ek);this.ek.style.left="-100000px";a=this.CH(this.P.Zb(),this.g1);-1!==a&&this.Ip(a)},mX:function(a){for(var b="",c,d=0,e=a.length;d<e;d++)c='<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="'+ a[d].index+'">'+a[d].data+"</span></div>",b+=c;return b},jL:function(a){for(var b="",c,d=0,e=a.length;d<e;d++)c='<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="'+a[d].index+'">'+a[d].data+"</span></li>",b+=c;return b},gX:function(a){for(var b,c,d,e,f=[],g=this.fg.height,i=this.fg.width,k=0;k<a.length;k++)b=a[k],recoType=b.recoType,d=b.panoId,e=b.name,c=b.heading,b=b.pitch,c=ae.vL(d,c,b,198,108),b='<a href="javascript:void(0);" class="pano_photo_item" data-index="'+k+ '"><img style="width:'+(i-2)+"px;height:"+(g-2)+'px;" data-index="'+k+'" name="'+e+'" src="'+c+'" alt="'+e+'"/><span class="pano_photo_decs" data-index="'+k+'" style="width:'+i+"px;font-size:"+Math.floor(g/6)+"px; line-height:"+Math.floor(g/6)+'px;"><em class="pano_poi_'+recoType+'"></em>'+e+"</span></a>",3===recoType?Va()?(this.Xz=b,this.AW=d,a.splice(k,1),k--):(b='<a href="javascript:void(0);" class="pano_photo_item" data-index="'+k+'"><img style="width:'+(i-2)+"px;height:"+(g-2)+'px;" data-index="'+ k+'" name="'+e+'" src="'+c+'" alt="'+e+'"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:'+this.k.imageHeight+'px;" data-index="'+k+'"><img src="'+E.qa+'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="'+k+'" alt=""/></div></a>',f.push(b)):f.push(b);return f.join("")},yX:function(a){var b=this,c=this.P.Zb();c&&this.Hl.wx(c,function(d){b.P.Zb()===c&&a(d)})},qc:function(a){if(!Xa(a)||isNaN(a)|| a<Tb||3<a)a=this.defaultAnchor;var b=this.B,c=this.k.offset.width,d=this.k.offset.height;b.style.left=b.style.top=b.style.right=b.style.bottom="auto";switch(a){case Tb:b.style.top=d+"px";b.style.left=c+"px";break;case Ub:b.style.top=d+"px";b.style.right=c+"px";break;case Vb:b.style.bottom=d+"px";b.style.left=c+"px";break;case 3:b.style.bottom=d+"px",b.style.right=c+"px"}},aQ:function(){this.ZP()},ZP:function(){var a=this;x.M(this.B,"touchstart",function(a){a.stopPropagation()});x.M(this.fk,"click", function(b){if((b=(b.srcElement||b.target).getAttribute("data-index"))&&b!=a.Xc)a.Ip(b),a.P.rc(a.$j[b].panoId)});x.M(this.Wh,"mouseover",function(b){b=(b.srcElement||b.target).getAttribute("data-index");b!==p&&a.kK(b,o)});this.P.addEventListener("size_changed",function(){isNaN(Number(a.k.maxWidth))&&a.Kk({maxWidth:a.k.maxWidth})})},Ip:function(a){this.ek.style.left=this.pB[a].offsetLeft+8+"px";this.ek.setAttribute("data-index",this.pB[a].getAttribute("data-index"));this.Xc=a;this.kK(a)},kK:function(a, b){var c=this.fg.width+8,d=0;this.Oc.Ns&&(d=this.Oc.Ns()/2);var e=this.fk.offsetWidth-2*d,f=this.Wh.offsetLeft||this.Oc.x,f=f-d,g=-a*c;g>f&&this.Oc.scrollTo(g+d);c=g-c;f-=e;c<f&&(!b||b&&8<g-f)&&this.Oc.scrollTo(c+e+d)},gY:function(){this.Oc=F()?new Me(this.fk,{zo:q,Vx:o,mi:q,Ci:q,nn:q,CE:o,Cw:o,zx:o}):new Re(this.fk)},U:function(){this.B.style.visibility="hidden"},show:function(){this.B.style.visibility="visible"}}); function Re(a){this.B=a;this.Tg=a.children[0];this.Jr=p;this.Fi=20;this.offsetLeft=0;this.ra()} Re.prototype={ra:function(){this.Tg.style.position="relative";this.refresh();this.ds();this.Xl()},refresh:function(){this.ao=this.B.offsetWidth-this.Ns();this.PA=-(this.Tg.offsetWidth-this.ao-this.Fi);this.rv=this.Fi+this.offsetLeft;this.Tg.style.left=this.rv+"px";this.Tg.children[0]&&(this.Jr=this.Tg.children[0].offsetWidth);this.gg&&(this.gg.children[0].style.marginTop=this.Br.children[0].style.marginTop=this.gg.offsetHeight/2-this.gg.children[0].offsetHeight/2+"px")},Ns:function(){return 2*this.Fi}, ds:function(){this.Gv=M("div");this.Gv.innerHTML='<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';this.gg=this.Gv.children[0];this.Br=this.Gv.children[1];this.B.appendChild(this.Gv); this.gg.children[0].style.marginTop=this.Br.children[0].style.marginTop=this.gg.offsetHeight/2-this.gg.children[0].offsetHeight/2+"px"},Xl:function(){var a=this;x.M(this.gg,"click",function(){a.scrollTo(a.Tg.offsetLeft+a.ao)});x.M(this.Br,"click",function(){a.scrollTo(a.Tg.offsetLeft-a.ao)})},CU:function(){x.D.Sb(this.gg,"pano_arrow_disable");x.D.Sb(this.Br,"pano_arrow_disable");var a=this.Tg.offsetLeft;a>=this.rv&&x.D.Ua(this.gg,"pano_arrow_disable");a-this.ao<=this.PA&&x.D.Ua(this.Br,"pano_arrow_disable")}, scrollTo:function(a){a=a<this.Tg.offsetLeft?Math.ceil((a-this.Fi-this.ao)/this.Jr)*this.Jr+this.ao+this.Fi-8:Math.ceil((a-this.Fi)/this.Jr)*this.Jr+this.Fi;a<this.PA?a=this.PA:a>this.rv&&(a=this.rv);var b=this.Tg.offsetLeft,c=this;new rb({Gc:60,jc:sb.Cs,duration:300,va:function(d){c.Tg.style.left=b+(a-b)*d+"px"},finish:function(){c.CU()}})}};z.Map=La;z.Hotspot=hb;z.MapType=Uc;z.Point=H;z.Pixel=Q;z.Size=N;z.Bounds=eb;z.TileLayer=Gc;z.Projection=gc;z.MercatorProjection=R;z.PerspectiveProjection=gb;z.Copyright=function(a,b,c){this.id=a;this.hb=b;this.content=c};z.Overlay=jc;z.Label=tc;z.GroundOverlay=uc;z.PointCollection=yc;z.Marker=T;z.Icon=pc;z.IconSequence=rc;z.Symbol=qc;z.Polyline=Cc;z.Polygon=Bc;z.InfoWindow=sc;z.Circle=Dc;z.Control=Sb;z.NavigationControl=ib;z.GeolocationControl=Wb;z.OverviewMapControl=kb;z.CopyrightControl=Xb; z.ScaleControl=jb;z.MapTypeControl=lb;z.CityListControl=Yb;z.PanoramaControl=$b;z.TrafficLayer=Qc;z.CustomLayer=mb;z.ContextMenu=cc;z.MenuItem=fc;z.LocalSearch=bb;z.TransitRoute=wd;z.DrivingRoute=zd;z.WalkingRoute=Ad;z.Autocomplete=Kd;z.RouteSearch=Ed;z.Geocoder=Fd;z.LocalCity=Hd;z.Geolocation=Geolocation;z.Convertor=ic;z.BusLineSearch=Jd;z.Boundary=Id;z.VectorCloudLayer=Oc;z.VectorTrafficLayer=Pc;z.Panorama=Oa;z.PanoramaLabel=Qd;z.PanoramaService=bc;z.PanoramaCoverageLayer=ac; z.PanoramaFlashInterface=Zd;function S(a,b){for(var c in b)a[c]=b[c]}S(window,{BMap:z,_jsload2:function(a,b){ja.Iy.qY&&ja.Iy.set(a,b);I.tV(a,b)},BMAP_API_VERSION:"2.0"});var X=La.prototype; S(X,{getBounds:X.Hd,getCenter:X.Ka,getMapType:X.pa,getSize:X.Ab,setSize:X.ye,getViewport:X.Zs,getZoom:X.fa,centerAndZoom:X.Dd,panTo:X.ui,panBy:X.yg,setCenter:X.Wf,setCurrentCity:X.pF,setMapType:X.Bg,setViewport:X.Bh,setZoom:X.Nc,highResolutionEnabled:X.Fx,zoomTo:X.Eg,zoomIn:X.VF,zoomOut:X.WF,addHotspot:X.ow,removeHotspot:X.oZ,clearHotspots:X.am,checkResize:X.wV,addControl:X.mw,removeControl:X.zN,getContainer:X.Na,addContextMenu:X.so,removeContextMenu:X.yp,addOverlay:X.Ja,removeOverlay:X.Tb,clearOverlays:X.hK, openInfoWindow:X.Nb,closeInfoWindow:X.Wc,pointToOverlayPixel:X.Te,overlayPixelToPoint:X.nN,getInfoWindow:X.ih,getOverlays:X.tx,getPanes:function(){return{floatPane:this.Vd.rD,markerMouseTarget:this.Vd.FE,floatShadow:this.Vd.bL,labelPane:this.Vd.xE,markerPane:this.Vd.IM,markerShadow:this.Vd.JM,mapPane:this.Vd.vt,vertexPane:this.Vd.PO}},addTileLayer:X.Xg,removeTileLayer:X.yh,pixelToPoint:X.wb,pointToPixel:X.bc,setFeatureStyle:X.Hp,selectBaseElement:X.c4,setMapStyle:X.Qt,enable3DBuilding:X.Ko,disable3DBuilding:X.fW, getPanorama:X.qm});var Se=Uc.prototype;S(Se,{getTileLayer:Se.JX,getMinZoom:Se.Vo,getMaxZoom:Se.pm,getProjection:Se.$o,getTextColor:Se.vm,getTips:Se.Ys});S(window,{BMAP_NORMAL_MAP:Ma,BMAP_PERSPECTIVE_MAP:Pa,BMAP_SATELLITE_MAP:Za,BMAP_HYBRID_MAP:Sa});var Te=R.prototype;S(Te,{lngLatToPoint:Te.mh,pointToLngLat:Te.wi});var Ue=gb.prototype;S(Ue,{lngLatToPoint:Ue.mh,pointToLngLat:Ue.wi});var Ve=eb.prototype; S(Ve,{equals:Ve.nb,containsPoint:Ve.bs,containsBounds:Ve.HV,intersects:Ve.gt,extend:Ve.extend,getCenter:Ve.Ka,isEmpty:Ve.yj,getSouthWest:Ve.se,getNorthEast:Ve.of,toSpan:Ve.JF});var We=jc.prototype;S(We,{isVisible:We.lh,show:We.show,hide:We.U});jc.getZIndex=jc.xm;var Xe=fb.prototype;S(Xe,{openInfoWindow:Xe.Nb,closeInfoWindow:Xe.Wc,enableMassClear:Xe.nj,disableMassClear:Xe.hW,show:Xe.show,hide:Xe.U,getMap:Xe.nx,addContextMenu:Xe.so,removeContextMenu:Xe.yp});var Ye=T.prototype; S(Ye,{setIcon:Ye.Ub,getIcon:Ye.Uo,setPosition:Ye.ta,getPosition:Ye.ha,setOffset:Ye.Ve,getOffset:Ye.Qf,getLabel:Ye.LD,setLabel:Ye.an,setTitle:Ye.Bc,setTop:Ye.zi,enableDragging:Ye.Yb,disableDragging:Ye.JC,setZIndex:Ye.Vt,getMap:Ye.nx,setAnimation:Ye.$m,setShadow:Ye.zy,hide:Ye.U,setRotation:Ye.Kp,getRotation:Ye.zL});S(window,{BMAP_ANIMATION_DROP:1,BMAP_ANIMATION_BOUNCE:2});var Ze=tc.prototype; S(Ze,{setStyle:Ze.Ld,setStyles:Ze.yi,setContent:Ze.ad,setPosition:Ze.ta,getPosition:Ze.ha,setOffset:Ze.Ve,getOffset:Ze.Qf,setTitle:Ze.Bc,setZIndex:Ze.Vt,getMap:Ze.nx,getContent:Ze.tk});var $e=pc.prototype;S($e,{setImageUrl:$e.PN,setSize:$e.ye,setAnchor:$e.qc,setImageOffset:$e.Pt,setImageSize:$e.SZ,setInfoWindowAnchor:$e.VZ,setPrintImageUrl:$e.e_});var af=sc.prototype; S(af,{redraw:af.ge,setTitle:af.Bc,setContent:af.ad,getContent:af.tk,getPosition:af.ha,enableMaximize:af.bh,disableMaximize:af.Uw,isOpen:af.Wa,setMaxContent:af.Rt,maximize:af.Ux,enableAutoPan:af.Ds});var bf=nc.prototype; S(bf,{getPath:bf.qe,setPath:bf.he,setPositionAt:bf.dn,getStrokeColor:bf.EX,setStrokeWeight:bf.Np,getStrokeWeight:bf.CL,setStrokeOpacity:bf.Lp,getStrokeOpacity:bf.FX,setFillOpacity:bf.Ot,getFillOpacity:bf.bX,setStrokeStyle:bf.Mp,getStrokeStyle:bf.BL,getFillColor:bf.aX,getBounds:bf.Hd,enableEditing:bf.lf,disableEditing:bf.gW,getEditing:bf.YW});var cf=Dc.prototype;S(cf,{setCenter:cf.Wf,getCenter:cf.Ka,getRadius:cf.xL,setRadius:cf.vf});var df=Bc.prototype;S(df,{getPath:df.qe,setPath:df.he,setPositionAt:df.dn}); var ef=hb.prototype;S(ef,{getPosition:ef.ha,setPosition:ef.ta,getText:ef.VD,setText:ef.Ut});H.prototype.equals=H.prototype.nb;Q.prototype.equals=Q.prototype.nb;N.prototype.equals=N.prototype.nb;S(window,{BMAP_ANCHOR_TOP_LEFT:Tb,BMAP_ANCHOR_TOP_RIGHT:Ub,BMAP_ANCHOR_BOTTOM_LEFT:Vb,BMAP_ANCHOR_BOTTOM_RIGHT:3});var ff=Sb.prototype;S(ff,{setAnchor:ff.qc,getAnchor:ff.xD,setOffset:ff.Ve,getOffset:ff.Qf,show:ff.show,hide:ff.U,isVisible:ff.lh,toString:ff.toString});var gf=ib.prototype; S(gf,{getType:gf.dp,setType:gf.fn});S(window,{BMAP_NAVIGATION_CONTROL_LARGE:0,BMAP_NAVIGATION_CONTROL_SMALL:1,BMAP_NAVIGATION_CONTROL_PAN:2,BMAP_NAVIGATION_CONTROL_ZOOM:3});var hf=kb.prototype;S(hf,{changeView:hf.ne,setSize:hf.ye,getSize:hf.Ab});var jf=jb.prototype;S(jf,{getUnit:jf.NX,setUnit:jf.xF});S(window,{BMAP_UNIT_METRIC:"metric",BMAP_UNIT_IMPERIAL:"us"});var kf=Xb.prototype;S(kf,{addCopyright:kf.nw,removeCopyright:kf.aF,getCopyright:kf.nm,getCopyrightCollection:kf.ED}); S(window,{BMAP_MAPTYPE_CONTROL_HORIZONTAL:Zb,BMAP_MAPTYPE_CONTROL_DROPDOWN:1,BMAP_MAPTYPE_CONTROL_MAP:2});var lf=Gc.prototype;S(lf,{getMapType:lf.pa,getCopyright:lf.nm,isTransparentPng:lf.mt});var mf=cc.prototype;S(mf,{addItem:mf.qw,addSeparator:mf.QB,removeSeparator:mf.cF});var pf=fc.prototype;S(pf,{setText:pf.Ut});var qf=V.prototype; S(qf,{getStatus:qf.tm,setSearchCompleteCallback:qf.vF,getPageCapacity:qf.pf,setPageCapacity:qf.Jp,setLocation:qf.bn,disableFirstResultSelection:qf.KC,enableFirstResultSelection:qf.gD,gotoPage:qf.ym,searchNearby:qf.Fp,searchInBounds:qf.Zm,search:qf.search});S(window,{BMAP_STATUS_SUCCESS:0,BMAP_STATUS_CITY_LIST:1,BMAP_STATUS_UNKNOWN_LOCATION:2,BMAP_STATUS_UNKNOWN_ROUTE:3,BMAP_STATUS_INVALID_KEY:4,BMAP_STATUS_INVALID_REQUEST:5,BMAP_STATUS_PERMISSION_DENIED:6,BMAP_STATUS_SERVICE_UNAVAILABLE:7,BMAP_STATUS_TIMEOUT:8}); S(window,{BMAP_POI_TYPE_NORMAL:0,BMAP_POI_TYPE_BUSSTOP:1,BMAP_POI_TYPE_BUSLINE:2,BMAP_POI_TYPE_SUBSTOP:3,BMAP_POI_TYPE_SUBLINE:4});S(window,{BMAP_TRANSIT_POLICY_LEAST_TIME:0,BMAP_TRANSIT_POLICY_LEAST_TRANSFER:2,BMAP_TRANSIT_POLICY_LEAST_WALKING:3,BMAP_TRANSIT_POLICY_AVOID_SUBWAYS:4,BMAP_LINE_TYPE_BUS:0,BMAP_LINE_TYPE_SUBWAY:1,BMAP_LINE_TYPE_FERRY:2});var rf=vd.prototype;S(rf,{clearResults:rf.Oe});xd=wd.prototype;S(xd,{setPolicy:xd.Tt,toString:xd.toString,setPageCapacity:xd.Jp}); S(window,{BMAP_DRIVING_POLICY_LEAST_TIME:0,BMAP_DRIVING_POLICY_LEAST_DISTANCE:1,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS:2});S(window,{BMAP_MODE_DRIVING:"driving",BMAP_MODE_TRANSIT:"transit",BMAP_MODE_WALKING:"walking",BMAP_MODE_NAVIGATION:"navigation"});var sf=Ed.prototype;S(sf,{routeCall:sf.KN});S(window,{BMAP_HIGHLIGHT_STEP:1,BMAP_HIGHLIGHT_ROUTE:2});S(window,{BMAP_ROUTE_TYPE_DRIVING:ed,BMAP_ROUTE_TYPE_WALKING:dd});S(window,{BMAP_ROUTE_STATUS_NORMAL:id,BMAP_ROUTE_STATUS_EMPTY:1,BMAP_ROUTE_STATUS_ADDRESS:2}); var tf=zd.prototype;S(tf,{setPolicy:tf.Tt});var uf=Kd.prototype;S(uf,{show:uf.show,hide:uf.U,setTypes:uf.wF,setLocation:uf.bn,search:uf.search,setInputValue:uf.wy});S(mb.prototype,{});var vf=Id.prototype;S(vf,{get:vf.get});S(ac.prototype,{});S(cb.prototype,{});S(window,{BMAP_POINT_DENSITY_HIGH:200,BMAP_POINT_DENSITY_MEDIUM:Tc,BMAP_POINT_DENSITY_LOW:50});S(window,{BMAP_POINT_SHAPE_STAR:1,BMAP_POINT_SHAPE_WATERDROP:2,BMAP_POINT_SHAPE_CIRCLE:vc,BMAP_POINT_SHAPE_SQUARE:4,BMAP_POINT_SHAPE_RHOMBUS:5}); S(window,{BMAP_POINT_SIZE_TINY:1,BMAP_POINT_SIZE_SMALLER:2,BMAP_POINT_SIZE_SMALL:3,BMAP_POINT_SIZE_NORMAL:wc,BMAP_POINT_SIZE_BIG:5,BMAP_POINT_SIZE_BIGGER:6,BMAP_POINT_SIZE_HUGE:7}); S(window,{BMap_Symbol_SHAPE_CAMERA:11,BMap_Symbol_SHAPE_WARNING:12,BMap_Symbol_SHAPE_SMILE:13,BMap_Symbol_SHAPE_CLOCK:14,BMap_Symbol_SHAPE_POINT:9,BMap_Symbol_SHAPE_PLANE:10,BMap_Symbol_SHAPE_CIRCLE:1,BMap_Symbol_SHAPE_RECTANGLE:2,BMap_Symbol_SHAPE_RHOMBUS:3,BMap_Symbol_SHAPE_STAR:4,BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW:5,BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW:6,BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW:7,BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW:8});S(window,{BMAP_CONTEXT_MENU_ICON_ZOOMIN:dc,BMAP_CONTEXT_MENU_ICON_ZOOMOUT:ec}); S(window,{BMAP_SYS_DRAWER:Ka,BMAP_SVG_DRAWER:1,BMAP_VML_DRAWER:2,BMAP_CANVAS_DRAWER:3,BMAP_SVG_DRAWER_FIRST:4});z.VU(); })();
var BMapLib=window.BMapLib=BMapLib||{};(function(){var a=a||{guid:"$BAIDU$"};(function(){window[a.guid]={};a.extend=function(h,f){for(var g in f){if(f.hasOwnProperty(g)){h[g]=f[g]}}return h};a.lang=a.lang||{};a.lang.guid=function(){return"TANGRAM__"+(window[a.guid]._counter++).toString(36)};window[a.guid]._counter=window[a.guid]._counter||1;window[a.guid]._instances=window[a.guid]._instances||{};a.lang.Class=function(f){this.guid=f||a.lang.guid();window[a.guid]._instances[this.guid]=this};window[a.guid]._instances=window[a.guid]._instances||{};a.lang.isString=function(f){return"[object String]"==Object.prototype.toString.call(f)};a.isString=a.lang.isString;a.lang.isFunction=function(f){return"[object Function]"==Object.prototype.toString.call(f)};a.lang.Event=function(f,g){this.type=f;this.returnValue=true;this.target=g||null;this.currentTarget=null};a.lang.Class.prototype.addEventListener=function(i,h,g){if(!a.lang.isFunction(h)){return}!this.__listeners&&(this.__listeners={});var f=this.__listeners,j;if(typeof g=="string"&&g){if(/[^\w\-]/.test(g)){throw ("nonstandard key:"+g)}else{h.hashCode=g;j=g}}i.indexOf("on")!=0&&(i="on"+i);typeof f[i]!="object"&&(f[i]={});j=j||a.lang.guid();h.hashCode=j;f[i][j]=h};a.lang.Class.prototype.removeEventListener=function(h,g){if(a.lang.isFunction(g)){g=g.hashCode}else{if(!a.lang.isString(g)){return}}!this.__listeners&&(this.__listeners={});h.indexOf("on")!=0&&(h="on"+h);var f=this.__listeners;if(!f[h]){return}f[h][g]&&delete f[h][g]};a.lang.Class.prototype.dispatchEvent=function(j,f){if(a.lang.isString(j)){j=new a.lang.Event(j)}!this.__listeners&&(this.__listeners={});f=f||{};for(var h in f){j[h]=f[h]}var h,g=this.__listeners,k=j.type;j.target=j.target||this;j.currentTarget=this;k.indexOf("on")!=0&&(k="on"+k);a.lang.isFunction(this[k])&&this[k].apply(this,arguments);if(typeof g[k]=="object"){for(h in g[k]){g[k][h].apply(this,arguments)}}return j.returnValue};a.dom=a.dom||{};a.dom._g=function(f){if(a.lang.isString(f)){return document.getElementById(f)}return f};a._g=a.dom._g;a.event=a.event||{};a.event._listeners=a.event._listeners||[];a.event.on=function(g,j,l){j=j.replace(/^on/i,"");g=a.dom._g(g);var k=function(n){l.call(g,n)},f=a.event._listeners,i=a.event._eventFilter,m,h=j;j=j.toLowerCase();if(i&&i[j]){m=i[j](g,j,k);h=m.type;k=m.listener}if(g.addEventListener){g.addEventListener(h,k,false)}else{if(g.attachEvent){g.attachEvent("on"+h,k)}}f[f.length]=[g,j,l,k,h];return g};a.on=a.event.on;a.event.un=function(h,k,g){h=a.dom._g(h);k=k.replace(/^on/i,"").toLowerCase();var n=a.event._listeners,i=n.length,j=!g,m,l,f;while(i--){m=n[i];if(m[1]===k&&m[0]===h&&(j||m[2]===g)){l=m[4];f=m[3];if(h.removeEventListener){h.removeEventListener(l,f,false)}else{if(h.detachEvent){h.detachEvent("on"+l,f)}}n.splice(i,1)}}return h};a.un=a.event.un;a.preventDefault=a.event.preventDefault=function(f){if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}})();var e=BMapLib.RichMarker=function(h,f,g){if(!h||!f||!(f instanceof BMap.Point)){return}this._map=null;this._content=h;this._position=f;this._container=null;this._size=null;g=g||{};this._opts=a.extend(a.extend(this._opts||{},{enableDragging:false,anchor:new BMap.Size(0,0)}),g)};e.prototype=new BMap.Overlay();e.prototype.initialize=function(g){var f=this,h=f._container=document.createElement("div");f._map=g;a.extend(h.style,{position:"absolute",zIndex:BMap.Overlay.getZIndex(f._position.lat),background:"none",cursor:"pointer"});g.getPanes().labelPane.appendChild(h);f._appendContent();f._setEventDispath();f._getContainerSize();return h};e.prototype.draw=function(){var h=this._map,g=this._opts.anchor,f=h.pointToOverlayPixel(this._position);this._container.style.left=f.x+g.width+"px";this._container.style.top=f.y+g.height+"px"};e.prototype.enableDragging=function(){this._opts.enableDragging=true};e.prototype.disableDragging=function(){this._opts.enableDragging=false};e.prototype.isDraggable=function(){return this._opts.enableDragging};e.prototype.getPosition=function(){return this._position};e.prototype.setPosition=function(f){if(!f instanceof BMap.Point){return}this._position=f;this.draw()};e.prototype.getAnchor=function(){return this._opts.anchor};e.prototype.setAnchor=function(f){if(!f instanceof BMap.Size){return}this._opts.anchor=f;this.draw()};e.prototype._appendContent=function(){var g=this._content;if(typeof g=="string"){var h=document.createElement("DIV");h.innerHTML=g;if(h.childNodes.length==1){g=(h.removeChild(h.firstChild))}else{var f=document.createDocumentFragment();while(h.firstChild){f.appendChild(h.firstChild)}g=f}}this._container.innerHTML="";this._container.appendChild(g)};e.prototype.getContent=function(){return this._content};e.prototype.setContent=function(f){if(!f){return}this._content=f;this._appendContent()};e.prototype._getContainerSize=function(){if(!this._container){return}var g=this._container.offsetHeight;var f=this._container.offsetWidth;this._size=new BMap.Size(f,g)};e.prototype.getWidth=function(){if(!this._size){return}return this._size.width};e.prototype.setWidth=function(f){if(!this._container){return}this._container.style.width=f+"px";this._getContainerSize()};e.prototype.getHeight=function(){if(!this._size){return}return this._size.height};e.prototype.setHeight=function(f){if(!this._container){return}this._container.style.height=f+"px";this._getContainerSize()};e.prototype._setEventDispath=function(){var k=this,l=k._container,g=false,i=null;function j(p){var p=window.event||p,n=p.pageX||p.clientX||0,q=p.pageY||p.clientY||0,o=new BMap.Pixel(n,q),m=k._map.pixelToPoint(o);return{pixel:o,point:m}}a.on(l,"onclick",function(m){c(k,"onclick");d(m)});a.on(l,"ondblclick",function(n){var m=j(n);c(k,"ondblclick",{point:m.point,pixel:m.pixel});d(n)});l.onmouseover=function(n){var m=j(n);c(k,"onmouseover",{point:m.point,pixel:m.pixel});d(n)};l.onmouseout=function(n){var m=j(n);c(k,"onmouseout",{point:m.point,pixel:m.pixel});d(n)};var h=function(n){var m=j(n);c(k,"onmouseup",{point:m.point,pixel:m.pixel});if(k._container.releaseCapture){a.un(l,"onmousemove",f);a.un(l,"onmouseup",h)}else{a.un(window,"onmousemove",f);a.un(window,"onmouseup",h)}if(!k._opts.enableDragging){d(n);return}k._container.releaseCapture&&k._container.releaseCapture();c(k,"ondragend",{point:m.point,pixel:m.pixel});g=false;i=null;k._setCursor("dragend");k._container.style.MozUserSelect="";k._container.style.KhtmlUserSelect="";k._container.style.WebkitUserSelect="";k._container.unselectable="off";k._container.onselectstart=function(){};d(n)};var f=function(o){if(!k._opts.enableDragging||!g){return}var n=j(o);var p=k._map.pointToPixel(k._position);var m=n.pixel.x-i.x+p.x;var q=n.pixel.y-i.y+p.y;i=n.pixel;k._position=k._map.pixelToPoint(new BMap.Pixel(m,q));k.draw();k._setCursor("dragging");c(k,"ondragging",{point:n.point,pixel:n.pixel});d(o)};a.on(l,"onmousedown",function(n){var m=j(n);c(k,"onmousedown",{point:m.point,pixel:m.pixel});if(k._container.setCapture){a.on(l,"onmousemove",f);a.on(l,"onmouseup",h)}else{a.on(window,"onmousemove",f);a.on(window,"onmouseup",h)}if(!k._opts.enableDragging){d(n);return}i=m.pixel;c(k,"ondragstart",{point:m.point,pixel:m.pixel});g=true;k._setCursor("dragstart");k._container.setCapture&&k._container.setCapture();k._container.style.MozUserSelect="none";k._container.style.KhtmlUserSelect="none";k._container.style.WebkitUserSelect="none";k._container.unselectable="on";k._container.onselectstart=function(){return false};d(n)})};e.prototype._setCursor=function(f){var h="";var g={moz:{dragstart:"-moz-grab",dragging:"-moz-grabbing",dragend:"pointer"},other:{dragstart:"move",dragging:"move",dragend:"pointer"}};if(navigator.userAgent.indexOf("Gecko/")!==-1){h=g.moz[f]}else{h=g.other[f]}if(this._container.style.cursor!=h){this._container.style.cursor=h}};e.prototype.remove=function(){c(this,"onremove");if(this._container){b(this._container)}if(this._container&&this._container.parentNode){this._container.parentNode.removeChild(this._container)}};function c(f,g,i){g.indexOf("on")!=0&&(g="on"+g);var h=new a.lang.Event(g);if(!!i){for(var j in i){h[j]=i[j]}}f.dispatchEvent(h)}function b(j){if(!j){return}var g=j.attributes,f="";if(g){for(var h=0,l=g.length;h<l;h++){f=g[h].name;if(typeof j[f]==="function"){j[f]=null}}}var k=j.childnodes;if(k){for(var h=0,l=k.length;h<l;h++){b(j.childnodes[h])}}}function d(f){var f=window.event||f;f.stopPropagation?f.stopPropagation():f.cancelBubble=true;return a.preventDefault(f)}})();(function(){var c=c||{guid:"$BAIDU$"};(function(){window[c.guid]={};c.extend=function(g,e){for(var f in e){if(e.hasOwnProperty(f)){g[f]=e[f]}}return g};c.lang=c.lang||{};c.lang.guid=function(){return"TANGRAM__"+(window[c.guid]._counter++).toString(36)};window[c.guid]._counter=window[c.guid]._counter||1;window[c.guid]._instances=window[c.guid]._instances||{};c.lang.Class=function(e){this.guid=e||c.lang.guid();window[c.guid]._instances[this.guid]=this};window[c.guid]._instances=window[c.guid]._instances||{};c.lang.isString=function(e){return"[object String]"==Object.prototype.toString.call(e)};c.lang.isFunction=function(e){return"[object Function]"==Object.prototype.toString.call(e)};c.lang.Class.prototype.toString=function(){return"[object "+(this._className||"Object")+"]"};c.lang.Class.prototype.dispose=function(){delete window[c.guid]._instances[this.guid];for(var e in this){if(!c.lang.isFunction(this[e])){delete this[e]}}this.disposed=true};c.lang.Event=function(e,f){this.type=e;this.returnValue=true;this.target=f||null;this.currentTarget=null};c.lang.Class.prototype.addEventListener=function(h,g,f){if(!c.lang.isFunction(g)){return}!this.__listeners&&(this.__listeners={});var e=this.__listeners,i;if(typeof f=="string"&&f){if(/[^\w\-]/.test(f)){throw ("nonstandard key:"+f)}else{g.hashCode=f;i=f}}h.indexOf("on")!=0&&(h="on"+h);typeof e[h]!="object"&&(e[h]={});i=i||c.lang.guid();g.hashCode=i;e[h][i]=g};c.lang.Class.prototype.removeEventListener=function(g,f){if(c.lang.isFunction(f)){f=f.hashCode}else{if(!c.lang.isString(f)){return}}!this.__listeners&&(this.__listeners={});g.indexOf("on")!=0&&(g="on"+g);var e=this.__listeners;if(!e[g]){return}e[g][f]&&delete e[g][f]};c.lang.Class.prototype.dispatchEvent=function(h,e){if(c.lang.isString(h)){h=new c.lang.Event(h)}!this.__listeners&&(this.__listeners={});e=e||{};for(var g in e){h[g]=e[g]}var g,f=this.__listeners,j=h.type;h.target=h.target||this;h.currentTarget=this;j.indexOf("on")!=0&&(j="on"+j);c.lang.isFunction(this[j])&&this[j].apply(this,arguments);if(typeof f[j]=="object"){for(g in f[j]){f[j][g].apply(this,arguments)}}return h.returnValue};c.lang.inherits=function(k,i,h){var g,j,e=k.prototype,f=new Function();f.prototype=i.prototype;j=k.prototype=new f();for(g in e){j[g]=e[g]}k.prototype.constructor=k;k.superClass=i.prototype;if("string"==typeof h){j._className=h}};c.dom=c.dom||{};c._g=c.dom._g=function(e){if(c.lang.isString(e)){return document.getElementById(e)}return e};c.g=c.dom.g=function(e){if("string"==typeof e||e instanceof String){return document.getElementById(e)}else{if(e&&e.nodeName&&(e.nodeType==1||e.nodeType==9)){return e}}return null};c.insertHTML=c.dom.insertHTML=function(h,e,g){h=c.dom.g(h);var f,i;if(h.insertAdjacentHTML){h.insertAdjacentHTML(e,g)}else{f=h.ownerDocument.createRange();e=e.toUpperCase();if(e=="AFTERBEGIN"||e=="BEFOREEND"){f.selectNodeContents(h);f.collapse(e=="AFTERBEGIN")}else{i=e=="BEFOREBEGIN";f[i?"setStartBefore":"setEndAfter"](h);f.collapse(i)}f.insertNode(f.createContextualFragment(g))}return h};c.ac=c.dom.addClass=function(k,m){k=c.dom.g(k);var f=m.split(/\s+/),e=k.className,j=" "+e+" ",h=0,g=f.length;for(;h<g;h++){if(j.indexOf(" "+f[h]+" ")<0){e+=(e?" ":"")+f[h]}}k.className=e;return k};c.event=c.event||{};c.event._listeners=c.event._listeners||[];c.on=c.event.on=function(f,i,k){i=i.replace(/^on/i,"");f=c._g(f);var j=function(m){k.call(f,m)},e=c.event._listeners,h=c.event._eventFilter,l,g=i;i=i.toLowerCase();if(h&&h[i]){l=h[i](f,i,j);g=l.type;j=l.listener}if(f.addEventListener){f.addEventListener(g,j,false)}else{if(f.attachEvent){f.attachEvent("on"+g,j)}}e[e.length]=[f,i,k,j,g];return f};c.un=c.event.un=function(g,j,f){g=c._g(g);j=j.replace(/^on/i,"").toLowerCase();var m=c.event._listeners,h=m.length,i=!f,l,k,e;while(h--){l=m[h];if(l[1]===j&&l[0]===g&&(i||l[2]===f)){k=l[4];e=l[3];if(g.removeEventListener){g.removeEventListener(k,e,false)}else{if(g.detachEvent){g.detachEvent("on"+k,e)}}m.splice(h,1)}}return g};c.preventDefault=c.event.preventDefault=function(e){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}}})();var d=BMapLib.DistanceTool=function(f,e){if(!f){return}this._map=f;e=e||{};this._opts=c.extend(c.extend(this._opts||{},{tips:"\u6d4b\u8ddd",followText:"\u5355\u51fb\u786e\u5b9a\u5730\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f",unit:"metric",lineColor:"#ff6319",lineStroke:2,opacity:0.8,lineStyle:"solid",cursor:"http://api.map.baidu.com/images/ruler.cur",secIcon:null,closeIcon:null}),e);this._followTitle=null;this._points=[];this._paths=[];this._dots=[];this._segDistance=[];this._overlays=[];this._enableMassClear=true,this._units={metric:{name:"metric",conv:1,incon:1000,u1:"\u7c73",u2:"\u516c\u91cc"},us:{name:"us",conv:3.2808,incon:5279.856,u1:"\u82f1\u5c3a",u2:"\u82f1\u91cc"}};this._isOpen=false;this._startFollowText="\u5355\u51fb\u786e\u5b9a\u8d77\u70b9";this._movingTimerId=null;this._styles={BMapLib_diso:"height:17px;width:5px;position:absolute;background:url(http://api.map.baidu.com/images/dis_box_01.gif) no-repeat left top",BMapLib_disi:"color:#7a7a7a;position:absolute;left:5px;padding:0 4px 1px 0;line-height:17px;background:url(http://api.map.baidu.com/images/dis_box_01.gif) no-repeat right top",BMapLib_disBoxDis:"color:#ff6319;font-weight:bold"};if(this._opts.lineStroke<=0){this._opts.lineStroke=2}if(this._opts.opacity>1){this._opts.opacity=1}else{if(this._opts.opacity<0){this._opts.opacity=0}}if(this._opts.lineStyle!="solid"&&this._opts.lineStyle!="dashed"){this._opts.lineStyle="solid"}if(!this._units[this._opts.unit]){this._opts.unit="metric"}this.text="\u6d4b\u8ddd"};c.lang.inherits(d,c.lang.Class,"DistanceTool");d.prototype._bind=function(){this._setCursor(this._opts.cursor);var f=this;c.on(this._map.getContainer(),"mousemove",function(i){if(!f._isOpen){return}if(!f._followTitle){return}i=window.event||i;var g=i.target||i.srcElement;if(g!=a.getDom(f._map)){f._followTitle.hide();return}if(!f._mapMoving){f._followTitle.show()}var h=a.getDrawPoint(i,true);f._followTitle.setPosition(h)});if(this._startFollowText){var e=this._followTitle=new BMap.Label(this._startFollowText,{offset:new BMap.Size(14,16)});this._followTitle.setStyles({color:"#333",borderColor:"#ff0103"})}};d.prototype.open=function(){if(this._isOpen==true){return true}if(!!BMapLib._toolInUse){return}this._isOpen=true;BMapLib._toolInUse=true;if(this._mapMoving){delete this._mapMoving}var h=this;if(!this._binded){this._binded=true;this._bind();this._map.addEventListener("moving",function(){h._hideCurrent()})}if(this._followTitle){this._map.addOverlay(this._followTitle);this._followTitle.hide()}var g=function(q){var l=h._map;if(!h._isOpen){return}q=window.event||q;var n=a.getDrawPoint(q,true);if(!h._isPointValid(n)){return}h._bind.initX=q.pageX||q.clientX||0;h._bind.initY=q.pageY||q.clientY||0;if(h._points.length>0){var t=l.pointToPixel(h._points[h._points.length-1]);var m=l.pointToPixel(n);var p=Math.sqrt(Math.pow(t.x-m.x,2)+Math.pow(t.y-m.y,2));if(p<5){return}}h._bind.x=q.offsetX||q.layerX||0;h._bind.y=q.offsetY||q.layerY||0;h._points.push(n);h._addSecPoint(n);if(h._paths.length==0){h._formatTitle(1,h._opts.followText,h._getTotalDistance())}if(h._paths.length>0){h._paths[h._paths.length-1].show();h._paths[h._paths.length-1].setStrokeOpacity(h._opts.opacity)}var w=new BMap.Polyline([n,n],{enableMassClear:h._enableMassClear});h._map.addOverlay(w);h._paths.push(w);h._overlays.push(w);w.setStrokeWeight(h._opts.lineStroke);w.setStrokeColor(h._opts.lineColor);w.setStrokeOpacity(h._opts.opacity/2);w.setStrokeStyle(h._opts.lineStyle);if(h._mapMoving){w.hide()}if(h._points.length>1){var o=h._paths[h._points.length-2];o.setPositionAt(1,n)}var r="";if(h._points.length>1){var u=h._setSegDistance(h._points[h._points.length-2],h._points[h._points.length-1]);var s=h._getTotalDistance();r=h._formatDisStr(s)}else{r="\u8d77\u70b9"}var v=new BMap.Label(r,{offset:new BMap.Size(10,-5),enableMassClear:h._enableMassClear});v.setStyles({color:"#333",borderColor:"#ff0103"});h._map.addOverlay(v);h._formatSegLabel(v,r);h._overlays.push(v);n.disLabel=v;v.setPosition(n);var k=new c.lang.Event("onaddpoint");k.point=n;k.pixel=h._map.pointToPixel(n);k.index=h._points.length-1;k.distance=h._getTotalDistance().toFixed(0);h.dispatchEvent(k)};var f=function(p){if(!h._isOpen){return}if(h._paths.length>0){p=window.event||p;var l=p.pageX||p.clientX||0;var k=p.pageY||p.clientY||0;if(typeof h._bind.initX=="undefined"){h._bind.x=p.offsetX||p.layerX||0;h._bind.y=p.offsetY||p.layerY||0;h._bind.initX=l;h._bind.initY=k}var r=h._bind.x+l-h._bind.initX;var q=h._bind.y+k-h._bind.initY;var z=h._paths[h._paths.length-1];var m=h._map.pixelToPoint(new BMap.Pixel(r,q));z.setPositionAt(1,m);if(!h._mapMoving){z.show()}var A=0;var u=0;if(r<10){A=8}else{if(r>h._map.getSize().width-10){A=-8}}if(q<10){u=8}else{if(q>h._map.getSize().height-10){u=-8}}if(A!=0||u!=0){if(!f._movingTimerId){h._mapMoving=true;h._map.panBy(A,u,{noAnimation:true});h._movingTimerId=f._movingTimerId=setInterval(function(){h._map.panBy(A,u,{noAnimation:true})},30);z.hide();h._followTitle&&h._followTitle.hide()}}else{if(f._movingTimerId){clearInterval(f._movingTimerId);delete f._movingTimerId;delete h._movingTimerId;var w=h._paths[h._paths.length-1];var v=h._map.pixelToPoint(new BMap.Pixel(r,q));if(!w){return}w.setPositionAt(1,v);w.show();if(h._followTitle){h._followTitle.setPosition(v);h._followTitle.show()}h._bind.i=0;h._bind.j=0;delete h._mapMoving}}if(h._followTitle){var o=h._getTotalDistance();var n=h._map.getDistance(h._points[h._points.length-1],m);h._updateInstDis(h._followTitle,o+n)}}else{if(h._followTitle){h._followTitle.show();p=window.event||p;var s=p.target||p.srcElement;if(s!=a.getDom()){h._followTitle.hide()}}}};var e=function(k){if(!h._isOpen){return}c.un(a.getDom(h._map),"click",g);c.un(document,"mousemove",f);c.un(a.getDom(h._map),"dblclick",e);c.un(document,"keydown",j);c.un(a.getDom(h._map),"mouseup",i);setTimeout(function(){h.close()},50)};var j=function(k){k=window.event||k;if(k.keyCode==27){h._clearCurData();setTimeout(function(){h.close()},50)}};var i=function(k){k=window.event||k;var l=0;if(/msie (\d+\.\d)/i.test(navigator.userAgent)){l=document.documentMode||+RegExp["\x241"]}if(l&&k.button!=1||k.button==2){h.close()}};h._initData();this._formatTitle();a.show(this._map);this._setCursor(this._opts.cursor);c.on(a.getDom(this._map),"click",g);c.on(document,"mousemove",f);c.on(a.getDom(this._map),"dblclick",e);c.on(document,"keydown",j);c.on(a.getDom(this._map),"mouseup",i);this.bindFunc=[{elem:a.getDom(this._map),type:"click",func:g},{elem:a.getDom(this._map),type:"dblclick",func:e},{elem:document,type:"mousemove",func:f},{elem:document,type:"keydown",func:j},{elem:a.getDom(this._map),type:"mouseup",func:i}];return true};d.prototype._dispatchLastEvent=function(){var e=new c.lang.Event("ondrawend");e.points=this._points?this._points.slice(0):[];e.overlays=this._paths?this._paths.slice(0,this._paths.length-1):[];e.distance=this._getTotalDistance().toFixed(0);this.dispatchEvent(e)};d.prototype.close=function(){if(this._isOpen==false){return}this._isOpen=false;BMapLib._toolInUse=false;if(this._mapMoving){delete this._mapMoving}var g=this;g._dispatchLastEvent();if(g._points.length<2){g._clearCurData()}else{g._paths[g._paths.length-1].remove();g._paths[g._paths.length-1]=null;g._paths.length=g._paths.length-1;var h=g._points[g._points.length-1];if(h.disLabel){h.disLabel.remove()}g._processLastOp()}a.hide();for(var f=0,e=this.bindFunc.length;f<e;f++){c.un(this.bindFunc[f].elem,this.bindFunc[f].type,this.bindFunc[f].func)}if(g._movingTimerId){clearInterval(g._movingTimerId);g._movingTimerId=null}if(this._followTitle){this._followTitle.hide()}};d.prototype._clearCurData=function(){for(var f=0,e=this._points.length;f<e;f++){if(this._points[f].disLabel){this._points[f].disLabel.remove()}}for(var f=0,e=this._paths.length;f<e;f++){this._paths[f].remove()}for(var f=0,e=this._dots.length;f<e;f++){this._dots[f].remove()}this._initData()};d.prototype._initData=function(){this._points.length=0;this._paths.length=0;this._segDistance.length=0;this._dots.length=0};d.prototype._setSegDistance=function(g,f){if(!g||!f){return}var e=this._map.getDistance(g,f);this._segDistance.push(e);return e};d.prototype._getTotalDistance=function(){var g=0;for(var f=0,e=this._segDistance.length;f<e;f++){g+=this._segDistance[f]}return g};d.prototype._convertUnit=function(e,f){f=f||"metric";if(this._units[f]){return e*this._units[f].conv}return e};d.prototype._addSecPoint=function(g){var f=this._opts.secIcon?this._opts.secIcon:new BMap.Icon("http://api.map.baidu.com/images/mapctrls.png",new BMap.Size(11,11),{imageOffset:new BMap.Size(-26,-313)});var e=new BMap.Marker(g,{icon:f,clickable:false,baseZIndex:3500000,zIndexFixed:true,enableMassClear:this._enableMassClear});this._map.addOverlay(e);this._dots.push(e)};d.prototype._formatDisStr=function(h){var f=this._opts.unit;var g=this._units[f].u1;var e=this._convertUnit(h,f);if(e>this._units[f].incon){e=e/this._units[f].incon;g=this._units[f].u2;e=e.toFixed(1)}else{e=e.toFixed(0)}return e+g};d.prototype._setCursor=function(f){var e=/webkit/.test(navigator.userAgent.toLowerCase())?"url("+this._opts.cursor+") 3 6, crosshair":"url("+this._opts.cursor+"), crosshair";a._setCursor(e)};d.prototype._getCursor=function(){return this._opts.cursor};d.prototype._formatSegLabel=function(e,f){e.setStyle({border:"none",padding:"0"});e.setContent("<span style='"+this._styles.BMapLib_diso+"'><span style='"+this._styles.BMapLib_disi+"'>"+f+"</span></span>")};d.prototype._processLastOp=function(){var i=this;delete i._bind.x;delete i._bind.y;delete i._bind.initX;delete i._bind.initY;if(i._paths.length>i._points.length-1){var g=i._paths.length-1;i._paths[g].remove();i._paths[g]=null;i._paths.length=g}var e={};e.points=i._points.slice(0);e.paths=i._paths.slice(0);e.dots=i._dots.slice(0);e.segDis=i._segDistance.slice(0);var j=i._map.pointToPixel(e.points[e.points.length-1]);var h=i._map.pointToPixel(e.points[e.points.length-2]);var k=[0,0];var f=[0,0];if(j.y-h.y>=0){f=[-5,11]}else{f=[-5,-35]}if(j.x-h.x>=0){k=[14,0]}else{k=[-14,0]}var n=e.points[e.points.length-1];n.disLabel=new BMap.Label("",{offset:new BMap.Size(-15,-40),enableMassClear:i._enableMassClear});n.disLabel.setStyles({color:"#333",borderColor:"#ff0103"});i._map.addOverlay(n.disLabel);n.disLabel.setOffset(new BMap.Size(f[0],f[1]));n.disLabel.setPosition(n);i._formatTitle(2,"","",n.disLabel);var m=this._opts.closeIcon?this._opts.closeIcon:new BMap.Icon("http://api.map.baidu.com/images/mapctrls.gif",new BMap.Size(12,12),{imageOffset:new BMap.Size(0,-14)});e.closeBtn=new BMap.Marker(e.points[e.points.length-1],{icon:m,offset:new BMap.Size(k[0],k[1]),baseZIndex:3600000,enableMassClear:i._enableMassClear});i._map.addOverlay(e.closeBtn);e.closeBtn.setTitle("\u6e05\u9664\u672c\u6b21\u6d4b\u8ddd");e.closeBtn.addEventListener("click",function(r){for(var p=0,o=e.points.length;p<o;p++){e.points[p].disLabel.remove();e.points[p].disLabel=null}for(var p=0,o=e.paths.length;p<o;p++){e.paths[p].remove();e.paths[p]=null}for(var p=0,o=e.dots.length;p<o;p++){e.dots[p].remove();e.dots[p]=null}e.closeBtn.remove();e.closeBtn=null;b(r);var q=new c.lang.Event("onremovepolyline");i.dispatchEvent(q)});i._initData()};d.prototype._formatTitle=function(g,l,e,i){var h=i||this._followTitle;if(!h){return}h.setStyle({lineHeight:"16px",zIndex:"85",padding:"3px 5px"});var n=this._startFollowText||"";var k=[];if(g==1){h.setOffset(0,25);var m=this._opts.unit;var j=this._units[m].u1;var f=this._convertUnit(e,m);if(f>this._units[m].incon){f=f/this._units[m].incon;j=this._units[m].u2;f=f.toFixed(1)}else{f=f.toFixed(0)}k.push("<span>\u603b\u957f\uff1a<span style='"+this._styles.BMapLib_disBoxDis+"'>"+f+"</span>"+j+"</span><br />");k.push("<span style='color:#7a7a7a'>"+l+"</span>")}else{if(g==2){var m=this._opts.unit;var j=this._units[m].u1;var f=this._convertUnit(this._getTotalDistance(),m);if(f>this._units[m].incon){f=f/this._units[m].incon;j=this._units[m].u2;f=f.toFixed(1)}else{f=f.toFixed(0)}k.push("\u603b\u957f\uff1a<span style='"+this._styles.BMapLib_disBoxDis+"'>"+f+"</span>"+j)}else{h.setOffset(0,25);k.push(n)}}h.setContent(k.join(""))};d.prototype._updateInstDis=function(g,e){var f=this._opts.unit;var i=this._units[f].u1;if(e>this._units[f].incon){e=e/this._units[f].incon;i=this._units[f].u2;e=e.toFixed(1)}else{e=e.toFixed(0)}if(g){var h=[];h.push("<span>\u603b\u957f\uff1a<span style='"+this._styles.BMapLib_disBoxDis+"'>"+e+"</span>"+i+"</span><br />");h.push("<span style='color:#7a7a7a'>"+this._opts.followText+"</span>");g.setContent(h.join(""))}};d.prototype._hideCurrent=function(){if(!this._isOpen){return}if(this._paths.length>0){var e=this._paths[this._paths.length-1];e.hide()}this._followTitle&&this._followTitle.hide()};d.prototype._isPointValid=function(h){if(!h){return false}var f=this._map.getBounds();var e=f.getSouthWest(),g=f.getNorthEast();if(h.lng<e.lng||h.lng>g.lng||h.lat<e.lat||h.lat>g.lat){return false}return true};var a={_map:null,_html:"<div style='background:transparent url(http://api.map.baidu.com/images/blank.gif);position:absolute;left:0;top:0;width:100%;height:100%;z-index:1000' unselectable='on'></div>",_maskElement:null,_cursor:"default",_inUse:false,show:function(e){if(!this._map){this._map=e}this._inUse=true;if(!this._maskElement){this._createMask(e)}this._maskElement.style.display="block"},_createMask:function(g){this._map=g;if(!this._map){return}c.insertHTML(this._map.getContainer(),"beforeEnd",this._html);var f=this._maskElement=this._map.getContainer().lastChild;var e=function(h){b(h);return c.preventDefault(h)};c.on(f,"mouseup",function(h){if(h.button==2){e(h)}});c.on(f,"contextmenu",e);f.style.display="none"},getDrawPoint:function(h,j){h=window.event||h;var f=h.offsetX||h.layerX||0;var i=h.offsetY||h.layerY||0;var g=h.target||h.srcElement;if(g!=a.getDom(this._map)&&j==true){while(g&&g!=this._map.getContainer()){if(!(g.clientWidth==0&&g.clientHeight==0&&g.offsetParent&&g.offsetParent.nodeName.toLowerCase()=="td")){f+=g.offsetLeft;i+=g.offsetTop}g=g.offsetParent}}if(g!=a.getDom(this._map)&&g!=this._map.getContainer()){return}if(typeof f==="undefined"||typeof i==="undefined"){return}if(isNaN(f)||isNaN(i)){return}return this._map.pixelToPoint(new BMap.Pixel(f,i))},hide:function(){if(!this._map){return}this._inUse=false;if(this._maskElement){this._maskElement.style.display="none"}},getDom:function(e){if(!this._maskElement){this._createMask(e)}return this._maskElement},_setCursor:function(e){this._cursor=e||"default";if(this._maskElement){this._maskElement.style.cursor=this._cursor}}};function b(f){var f=window.event||f;f.stopPropagation?f.stopPropagation():f.cancelBubble=true}})();(function(){var e=0;var j=1;var c=BMapLib.RectangleZoom=function(n,m){if(!n){return}this._map=n;this._bounds=null;this._opts={zoomType:e,followText:"",strokeWeight:2,strokeColor:"#111",style:"solid",fillColor:"#ccc",opacity:0.4,cursor:"crosshair",autoClose:false};this._setOptions(m);this._opts.strokeWeight=this._opts.strokeWeight<=0?1:this._opts.strokeWeight;this._opts.opacity=this._opts.opacity<0?0:this._opts.opacity>1?1:this._opts.opacity;if(this._opts.zoomType<e||this._opts.zoomType>j){this._opts.zoomType=e}this._isOpen=false;this._fDiv=null;this._followTitle=null};c.prototype._setOptions=function(m){if(!m){return}for(var n in m){if(typeof(m[n])!="undefined"){this._opts[n]=m[n]}}};c.prototype.setStrokeColor=function(m){if(typeof m=="string"){this._opts.strokeColor=m;this._updateStyle()}};c.prototype.setLineStroke=function(m){if(typeof m=="number"&&Math.round(m)>0){this._opts.strokeWeight=Math.round(m);this._updateStyle()}};c.prototype.setLineStyle=function(m){if(m=="solid"||m=="dashed"){this._opts.style=m;this._updateStyle()}};c.prototype.setOpacity=function(m){if(typeof m=="number"&&m>=0&&m<=1){this._opts.opacity=m;this._updateStyle()}};c.prototype.setFillColor=function(m){this._opts.fillColor=m;this._updateStyle()};c.prototype.setCursor=function(m){this._opts.cursor=m;f.setCursor(this._opts.cursor)};c.prototype._updateStyle=function(){if(this._fDiv){this._fDiv.style.border=[this._opts.strokeWeight,"px ",this._opts.style," ",this._opts.color].join("");var m=this._fDiv.style,n=this._opts.opacity;m.opacity=n;m.MozOpacity=n;m.KhtmlOpacity=n;m.filter="alpha(opacity="+(n*100)+")"}};c.prototype.getBounds=function(){return this._bounds};c.prototype.getCursor=function(){return this._opts.cursor};c.prototype._bind=function(){this.setCursor(this._opts.cursor);var n=this;d(this._map.getContainer(),"mousemove",function(q){if(!n._isOpen){return}if(!n._followTitle){return}q=window.event||q;var o=q.target||q.srcElement;if(o!=f.getDom(n._map)){n._followTitle.hide();return}if(!n._mapMoving){n._followTitle.show()}var p=f.getDrawPoint(q,true);n._followTitle.setPosition(p)});if(this._opts.followText){var m=this._followTitle=new BMap.Label(this._opts.followText,{offset:new BMap.Size(14,16)});this._followTitle.setStyles({color:"#333",borderColor:"#ff0103"})}};c.prototype.open=function(){if(this._isOpen==true){return true}if(!!BMapLib._toolInUse){return}this._isOpen=true;BMapLib._toolInUse=true;if(!this.binded){this._bind();this.binded=true}if(this._followTitle){this._map.addOverlay(this._followTitle);this._followTitle.hide()}var o=this;var p=this._map;var q=0;if(/msie (\d+\.\d)/i.test(navigator.userAgent)){q=document.documentMode||+RegExp["\x241"]}var n=function(s){s=window.event||s;if(s.button!=0&&!q||q&&s.button!=1){return}if(!!q&&f.getDom(p).setCapture){f.getDom(p).setCapture()}if(!o._isOpen){return}o._bind.isZooming=true;d(document,"mousemove",m);d(document,"mouseup",r);o._bind.mx=s.offsetX||s.layerX||0;o._bind.my=s.offsetY||s.layerY||0;o._bind.ix=s.pageX||s.clientX||0;o._bind.iy=s.pageY||s.clientY||0;a(f.getDom(p),"beforeBegin",o._generateHTML());o._fDiv=f.getDom(p).previousSibling;o._fDiv.style.width="0";o._fDiv.style.height="0";o._fDiv.style.left=o._bind.mx+"px";o._fDiv.style.top=o._bind.my+"px";b(s);return h(s)};var m=function(z){if(o._isOpen==true&&o._bind.isZooming==true){var z=window.event||z;var u=z.pageX||z.clientX||0;var s=z.pageY||z.clientY||0;var w=o._bind.dx=u-o._bind.ix;var t=o._bind.dy=s-o._bind.iy;var v=Math.abs(w)-o._opts.strokeWeight;var y=Math.abs(t)-o._opts.strokeWeight;o._fDiv.style.width=(v<0?0:v)+"px";o._fDiv.style.height=(y<0?0:y)+"px";var x=[p.getSize().width,p.getSize().height];if(w>=0){o._fDiv.style.right="auto";o._fDiv.style.left=o._bind.mx+"px";if(o._bind.mx+w>=x[0]-2*o._opts.strokeWeight){o._fDiv.style.width=x[0]-o._bind.mx-2*o._opts.strokeWeight+"px";o._followTitle&&o._followTitle.hide()}}else{o._fDiv.style.left="auto";o._fDiv.style.right=x[0]-o._bind.mx+"px";if(o._bind.mx+w<=2*o._opts.strokeWeight){o._fDiv.style.width=o._bind.mx-2*o._opts.strokeWeight+"px";o._followTitle&&o._followTitle.hide()}}if(t>=0){o._fDiv.style.bottom="auto";o._fDiv.style.top=o._bind.my+"px";if(o._bind.my+t>=x[1]-2*o._opts.strokeWeight){o._fDiv.style.height=x[1]-o._bind.my-2*o._opts.strokeWeight+"px";o._followTitle&&o._followTitle.hide()}}else{o._fDiv.style.top="auto";o._fDiv.style.bottom=x[1]-o._bind.my+"px";if(o._bind.my+t<=2*o._opts.strokeWeight){o._fDiv.style.height=o._bind.my-2*o._opts.strokeWeight+"px";o._followTitle&&o._followTitle.hide()}}b(z);return h(z)}};var r=function(A){if(o._isOpen==true){i(document,"mousemove",m);i(document,"mouseup",r);if(!!q&&f.getDom(p).releaseCapture){f.getDom(p).releaseCapture()}var v=parseInt(o._fDiv.style.left)+parseInt(o._fDiv.style.width)/2;var u=parseInt(o._fDiv.style.top)+parseInt(o._fDiv.style.height)/2;var z=[p.getSize().width,p.getSize().height];if(isNaN(v)){v=z[0]-parseInt(o._fDiv.style.right)-parseInt(o._fDiv.style.width)/2}if(isNaN(u)){u=z[1]-parseInt(o._fDiv.style.bottom)-parseInt(o._fDiv.style.height)/2}var C=Math.min(z[0]/Math.abs(o._bind.dx),z[1]/Math.abs(o._bind.dy));C=Math.floor(C);var x=new BMap.Pixel(v-parseInt(o._fDiv.style.width)/2,u-parseInt(o._fDiv.style.height)/2);var w=new BMap.Pixel(v+parseInt(o._fDiv.style.width)/2,u+parseInt(o._fDiv.style.height)/2);var F=p.pixelToPoint(x);var E=p.pixelToPoint(w);var y=new BMap.Bounds(F,E);o._bounds=y;delete o._bind.dx;delete o._bind.dy;delete o._bind.ix;delete o._bind.iy;if(!isNaN(C)){if(o._opts.zoomType==e){targetZoomLv=Math.round(p.getZoom()+(Math.log(C)/Math.log(2)));if(targetZoomLv<p.getZoom()){targetZoomLv=p.getZoom()}}else{targetZoomLv=Math.round(p.getZoom()+(Math.log(1/C)/Math.log(2)));if(targetZoomLv>p.getZoom()){targetZoomLv=p.getZoom()}}}else{targetZoomLv=p.getZoom()+(o._opts.zoomType==e?1:-1)}var s=p.pixelToPoint({x:v,y:u},p.getZoom());p.centerAndZoom(s,targetZoomLv);var I=f.getDrawPoint(A);if(o._followTitle){o._followTitle.setPosition(I);o._followTitle.show()}o._bind.isZooming=false;o._fDiv.parentNode.removeChild(o._fDiv);o._fDiv=null}var t=y.getSouthWest(),B=y.getNorthEast(),G=new BMap.Point(B.lng,t.lat),H=new BMap.Point(t.lng,B.lat),D=new BMap.Polygon([t,H,B,G]);D.setStrokeWeight(2);D.setStrokeOpacity(0.3);D.setStrokeColor("#111");D.setFillColor("");p.addOverlay(D);new g({duration:240,fps:20,delay:500,render:function(K){var J=0.3*(1-K);D.setStrokeOpacity(J)},finish:function(){p.removeOverlay(D);D.dispose();D=null}});if(o._opts.autoClose){setTimeout(function(){if(o._isOpen==true){o.close()}},70)}b(A);return h(A)};f.show(this._map);this.setCursor(this._opts.cursor);if(!this._isBeginDrawBinded){d(f.getDom(this._map),"mousedown",n);this._isBeginDrawBinded=true}return true};c.prototype.close=function(){this._bounds=null;if(!this._isOpen){return}this._isOpen=false;BMapLib._toolInUse=false;this._followTitle&&this._followTitle.hide();f.hide()};c.prototype._generateHTML=function(){return["<div style='position:absolute;z-index:300;border:",this._opts.strokeWeight,"px ",this._opts.style," ",this._opts.strokeColor,"; opacity:",this._opts.opacity,"; background: ",this._opts.fillColor,"; filter:alpha(opacity=",Math.round(this._opts.opacity*100),"); width:0; height:0; font-size:0'></div>"].join("")};function a(p,m,o){var n,q;if(p.insertAdjacentHTML){p.insertAdjacentHTML(m,o)}else{n=p.ownerDocument.createRange();m=m.toUpperCase();if(m=="AFTERBEGIN"||m=="BEFOREEND"){n.selectNodeContents(p);n.collapse(m=="AFTERBEGIN")}else{q=m=="BEFOREBEGIN";n[q?"setStartBefore":"setEndAfter"](p);n.collapse(q)}n.insertNode(n.createContextualFragment(o))}return p}function k(n,m){a(n,"beforeEnd",m);return n.lastChild}function b(m){var m=window.event||m;m.stopPropagation?m.stopPropagation():m.cancelBubble=true}function h(m){var m=window.event||m;m.preventDefault?m.preventDefault():m.returnValue=false;return false}function d(m,n,o){if(!m){return}n=n.replace(/^on/i,"").toLowerCase();if(m.addEventListener){m.addEventListener(n,o,false)}else{if(m.attachEvent){m.attachEvent("on"+n,o)}}}function i(m,n,o){if(!m){return}n=n.replace(/^on/i,"").toLowerCase();if(m.removeEventListener){m.removeEventListener(n,o,false)}else{if(m.detachEvent){m.detachEvent("on"+n,o)}}}var f={_map:null,_html:"<div style='background:transparent url(http://api.map.baidu.com/images/blank.gif);position:absolute;left:0;top:0;width:100%;height:100%;z-index:1000' unselectable='on'></div>",_maskElement:null,_cursor:"default",_inUse:false,show:function(m){if(!this._map){this._map=m}this._inUse=true;if(!this._maskElement){this._createMask(m)}this._maskElement.style.display="block"},_createMask:function(o){this._map=o;if(!this._map){return}var n=this._maskElement=k(this._map.getContainer(),this._html);var m=function(p){b(p);return h(p)};d(n,"mouseup",function(p){if(p.button==2){m(p)}});d(n,"contextmenu",m);n.style.display="none"},getDrawPoint:function(p,r){p=window.event||p;var m=p.offsetX||p.layerX||0;var q=p.offsetY||p.layerY||0;var o=p.target||p.srcElement;if(o!=f.getDom(this._map)&&r==true){while(o&&o!=this._map.getContainer()){if(!(o.clientWidth==0&&o.clientHeight==0&&o.offsetParent&&o.offsetParent.nodeName.toLowerCase()=="td")){m+=o.offsetLeft;q+=o.offsetTop}o=o.offsetParent}}if(o!=f.getDom(this._map)&&o!=this._map.getContainer()){return}if(typeof m==="undefined"||typeof q==="undefined"){return}if(isNaN(m)||isNaN(q)){return}return this._map.pixelToPoint(new BMap.Pixel(m,q))},hide:function(){if(!this._map){return}this._inUse=false;if(this._maskElement){this._maskElement.style.display="none"}},getDom:function(m){if(!this._maskElement){this._createMask(m)}return this._maskElement},setCursor:function(m){this._cursor=m||"default";if(this._maskElement){this._maskElement.style.cursor=this._cursor}}};function g(p){var m={duration:1000,fps:30,delay:0,transition:l.linear,onStop:function(){}};if(p){for(var n in p){m[n]=p[n]}}this._opts=m;if(m.delay){var o=this;setTimeout(function(){o._beginTime=new Date().getTime();o._endTime=o._beginTime+o._opts.duration;o._launch()},m.delay)}else{this._beginTime=new Date().getTime();this._endTime=this._beginTime+this._opts.duration;this._launch()}}g.prototype._launch=function(){var n=this;var m=new Date().getTime();if(m>=n._endTime){if(typeof n._opts.render=="function"){n._opts.render(n._opts.transition(1))}if(typeof n._opts.finish=="function"){n._opts.finish()}return}n.schedule=n._opts.transition((m-n._beginTime)/n._opts.duration);if(typeof n._opts.render=="function"){n._opts.render(n.schedule)}if(!n.terminative){n._timer=setTimeout(function(){n._launch()},1000/n._opts.fps)}};var l={linear:function(m){return m},reverse:function(m){return 1-m},easeInQuad:function(m){return m*m},easeInCubic:function(m){return Math.pow(m,3)},easeOutQuad:function(m){return -(m*(m-2))},easeOutCubic:function(m){return Math.pow((m-1),3)+1},easeInOutQuad:function(m){if(m<0.5){return m*m*2}else{return -2*(m-2)*m-1}return},easeInOutCubic:function(m){if(m<0.5){return Math.pow(m,3)*4}else{return Math.pow(m-1,3)*4+1}},easeInOutSine:function(m){return(1-Math.cos(Math.PI*m))/2}}})();(function(){BMapLib.CurveLine=CurveLine;function CurveLine(points,opts){var self=this;var curvePoints=getCurvePoints(points);var polyline=new BMap.Polyline(curvePoints,opts);polyline.addEventListener("lineupdate",function(){if(this.isEditing){this.enableEditing()}});polyline.cornerPoints=points;polyline.editMarkers=[];polyline.enableEditing=function(){var self=this;if(self.map){self.disableEditing();for(var i=0;i<self.cornerPoints.length;i++){var marker=new BMap.Marker(self.cornerPoints[i],{icon:new BMap.Icon("http://api.map.baidu.com/library/CurveLine/1.5/src/circle.png",new BMap.Size(16,16)),enableDragging:true,raiseOnDrag:true});marker.addEventListener("dragend",function(){self.cornerPoints.length=0;for(var i=0;i<self.editMarkers.length;i++){self.cornerPoints.push(self.editMarkers[i].getPosition())}var curvePoints=getCurvePoints(self.cornerPoints);self.setPath(curvePoints)});marker.index=i;self.editMarkers.push(marker);self.map.addOverlay(marker)}}self.isEditing=true};polyline.disableEditing=function(){this.isEditing=false;for(var i=0;i<this.editMarkers.length;i++){this.map.removeOverlay(this.editMarkers[i]);this.editMarkers[i]=null}this.editMarkers.length=0};polyline.getPath=function(){return curvePoints};return polyline}function extend(child,parent){for(var p in parent){if(parent.hasOwnProperty(p)){child[p]=parent[p]}}return child}function getCurvePoints(points){var curvePoints=[];for(var i=0;i<points.length-1;i++){var p=getCurveByTwoPoints(points[i],points[i+1]);if(p&&p.length>0){curvePoints=curvePoints.concat(p)}}return curvePoints}function getCurveByTwoPoints(obj1,obj2){if(!obj1||!obj2||!(obj1 instanceof BMap.Point)||!(obj2 instanceof BMap.Point)){return null}var B1=function(x){return 1-2*x+x*x};var B2=function(x){return 2*x-2*x*x};var B3=function(x){return x*x};curveCoordinates=[];var count=30;var isFuture=false;var t,h,h2,lat3,lng3,j,t2;var LnArray=[];var i=0;var inc=0;if(typeof(obj2)=="undefined"){if(typeof(curveCoordinates)!="undefined"){curveCoordinates=[]}return}var lat1=parseFloat(obj1.lat);var lat2=parseFloat(obj2.lat);var lng1=parseFloat(obj1.lng);var lng2=parseFloat(obj2.lng);if(lng2>lng1){if(parseFloat(lng2-lng1)>180){if(lng1<0){lng1=parseFloat(180+180+lng1)}}}if(lng1>lng2){if(parseFloat(lng1-lng2)>180){if(lng2<0){lng2=parseFloat(180+180+lng2)}}}j=0;t2=0;if(lat2==lat1){t=0;h=lng1-lng2}else{if(lng2==lng1){t=Math.PI/2;h=lat1-lat2}else{t=Math.atan((lat2-lat1)/(lng2-lng1));h=(lat2-lat1)/Math.sin(t)}}if(t2==0){t2=(t+(Math.PI/5))}h2=h/2;lng3=h2*Math.cos(t2)+lng1;lat3=h2*Math.sin(t2)+lat1;for(i=0;i<count+1;i++){curveCoordinates.push(new BMap.Point((lng1*B1(inc)+lng3*B2(inc))+lng2*B3(inc),(lat1*B1(inc)+lat3*B2(inc)+lat2*B3(inc))));inc=inc+(1/count)}return curveCoordinates}})();define("autodiv/autodiv",function(e){var i={resize:function(){var e=500,i=168,n=0,t=navigator.userAgent.toLowerCase();n+=t.indexOf("360se")>-1?3:t.indexOf("firefox")>-1?1:2;var r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e>r&&(r=e);var o=r-i-n,a={map_body_box:o,map_canvas:o-72,inforight:o+1,right_result_wrap:o-29};for(var d in a){var u=$("#"+d);u.height(a[d])}}};return i});/**
 * @file 封装 Baidu 地图 操作相关
 * @author 袁辉辉(yuanhuihui@fang.com) 吕雁(lvyan.bj@fang.com)
 */
define('modules/xf/SFMap', ['modules/SFUtil', 'modules/xf/MapApi', 'lazyload/lazyload', 'scrollbar/scrollbar'], function (require) {
    'use strict';
    var MapApi = require('modules/xf/MapApi'),
        $ = require('jquery');
    var SFUtil = require('modules/SFUtil');
    var vars = seajs.data.vars, city = vars.city, cityx = vars.cityx, cityy = vars.cityy, zoom = vars.zoom = 12;
    var localStor = vars.localStorage;
    var fangyuanInfo = {};
    var SFMap = {
        GOLD_SEARCH_STR_VAL: vars.goldAdTitle,
        GOLD_SEARCH_URL_VAL: vars.goldAdUrl,
        map: null,
        mapId: 'mapCanvas',
        API_PATH: vars.ajaxfilePath,
        api: {
            GET_FILTER: 'getDistAreaTag',
            GET_FILTER_SUBWAY: 'getSubway',
            GET_XFSEARCH: 'ajaxSearch'
        },
        config: {
            leveledMenu: {
                district: {
                    id: 'district',
                    subId: 'area',
                    data: [],
                    defaultVal: '区域找房',
                    title: '选择区域'
                },
                subway: {
                    id: 'subway',
                    subId: 'subwaystation',
                    data: [],
                    defaultVal: '地铁找房',
                    title: '选择地铁'
                }
            },
            houseTag: []
        },

        // 清空条件ID
        clearParamId: 'xfmap_E01_67',
        // 搜索条件默认显示文本
        paramsDefaultText: {
            // 关键字
            strKeyWord: {text: vars.goldAdTitle, id: 'xfmap_E01_46', wrapId: ''},
            // 学校
            schoolDist: {text: '学校找房', id: 'schoolDistParamContent', wrapId: 'schoolDistContent'},
            // 区域
            strDistrict: {text: '区域找房', id: 'areaParamContent', wrapId: ''},
            // 地铁线路
            railway: {text: '地铁找房', id: 'subwayParamContent', wrapId: ''},
            // 价格
            strPrice: {text: '价格', id: 'priceParamContent', wrapId: 'priceWrap'},
            // 户型
            strRoom: {text: '户型', id: 'huxingParamContent', wrapId: 'roomWrap'},
            // 物业类型
            strPurpose: {text: '类型', id: 'purposeParamCont', wrapId: 'purposesWrap'},
            // 特色
            housetag: {text: '', id: '', wrapId: 'houseTag'},
            // 销售状态
            saling: {text: '', id: '', wrapId: 'sellWrap'},
            // 开盘时间
            strStartDate: {text: '', id: '', wrapId: 'kaipanWrap'}
        },
        // 搜索条件
        params: {
            // 区域
            strDistrict: '',
            // 地铁线路
            railway: '',
            // 地铁站
            railway_station: '',
            // 价格
            strPrice: '',
            // 户型
            strRoom: '',
            // 物业类型
            strPurpose: '',
            // 特色
            housetag: '',
            // 销售状态
            saling: '',
            // 开盘时间
            strStartDate: '',
            // 关键字
            strKeyword: '',
            // 商圈
            strComarea: '',

            // 排序
            strSort: '',
            // 只看优惠房
            isyouhui: '',
            // 坐标参数
            x1: '',
            y1: '',
            x2: '',
            y2: '',
            // 楼盘id
            newCode: '',
            houseNum: '',
            // 学校类型
            schoolDist: '',
            // 学校id
            schoolid: ''
        },
        // 用来存储当前页面上所有点的信息
        markerList: {},
        firstLoad: true,
        // 搜索类型
        searchType: 'quxian',
        // 移动地图时搜索
        searchWhileMove: true,
        // 筛选框选中状态颜色
        activCls: 'activClo',
        init: function () {
            var that = this;
            // 改为relative后:地图的高度为100%,需要先设置外层容器.wrapper的高度
            that.resize();
            // 初始化地图
            that.map = new MapApi(that.mapId, cityy, cityx, zoom, {NotAddNavCtrl: false, BindEvent: !0});
            // 绑定事件
            that.bindEvent();
            //  初始化页面参数
            that.initParams();
            // 初始化结果显示
            that.searchResult();
            //  初始化筛选框数据:包含特色和区域
            that.initFilterData();
            // 地铁描线
            that.busline = new BMap.BusLineSearch(that.map._map, {
                renderOptions: {},
                onGetBusListComplete: function (result) {
                    // 获取第一个公交列表显示到map上
                    if (result) {
                        var fstLine = result.getBusListItem(0);
                        SFMap.busline.getBusLine(fstLine);
                    }
                },
                onGetBusLineComplete: function (result) {
                    var line = result.getPolyline();
                    line.setStrokeColor('#e84a01');
                    that.map._map.addOverlay(line);
                }
            });
        },

        // 地图按照像素移动
        panBy: function (offset) {
            var that = this;
            that.map._map.panBy(offset, 0, {
                noAnimation: !0
            });
        },

        // 设置自适应高度
        resize: function (isGet) {
            var oWrapper = $('.wrapper').eq(0);
            var omapL = $('.mapL').eq(0);
            var intOWh = $(window).innerHeight() - oWrapper.offset().top;
            var minHeight = 300;
            if (!$('.searchResult').length) {
                minHeight -= 80;
            }
            if (isGet) {
                // 多加16像素，否则还是会出滚动条
                var trueHeight = $('.scrollf').height() + 16, methHeight = intOWh - minHeight;
                if (trueHeight < methHeight) {
                    return trueHeight;
                } else {
                    return methHeight;
                }
            } else {
                var oWh = intOWh + 'px';
                oWrapper.height(oWh);
                omapL.css({'max-height': oWrapper.height()});
            }
        },
        bindEvent: function () {
            var that = this;
            // 初始化时地图右移
            that.panBy(198);
            $(function () {
                // 箭头点击事件
                var dianji = $('#Tab');
                dianji.on('click', function () {
                    $('.searchResult').toggleClass('hide');
                    $('.mapList').toggleClass('hide');
                    $('#Tab').toggleClass('h');
                    $('.mapLT').toggleClass('mapLT_pz');
                    $('.search_nei').toggleClass('mt_100');
                    // 列表页收起展开地图移动
                    that.mapListShow = !that.mapListShow;
                    var e = that.mapListShow ? -198 : 198;
                    that.panBy(e);
                });

                // 找房
                var oArea = $('#area');
                var oSubway = $('#subway');
                var oarea = $('.area');
                var arr = $('.haveSel em');
                var distAreaLeft = $('#distAreaLeft');
                var distAreaRight = $('#distAreaRight');
                var subwayLeft = $('#subwayLeft');
                var subwayRight = $('#subwayRight');
                // 学区
                var schoolDist = $('#schoolDist'),
                    schoolDistContent = $('#schoolDistContent'),
                    schEm = $('#schoolDist em');
                schoolDist.on('mouseenter', function () {
                    schEm.addClass('up');
                    schoolDistContent.show();
                }).on('mouseleave', function () {
                    schEm.removeClass('up');
                    schoolDistContent.hide();
                });
                // 区域找房
                oArea.on('mouseenter', function () {
                    arr.eq(0).addClass('up');
                    // 设置第一项为显示
                    var first = distAreaRight.children().eq(0);
                    if (first.text() == '') {
                        oarea.css('width', '120px');
                    } else {
                        oarea.css('width', '550px');
                    }
                    oarea.eq(0).show();
                    first.show();
                    // 背景色恢复默认
                    distAreaLeft.find('li').css('backgroundColor', '#f3f3f3');
                }).on('mouseleave', function () {
                    oarea.eq(0).hide();
                    arr.eq(0).removeClass('up');
                    // 隐藏全部项
                    distAreaRight.children().hide();
                });

                // 地铁找房
                oSubway.on('mouseenter', function () {
                    // 背景色恢复默认
                    subwayLeft.find('li').css('backgroundColor', '#f3f3f3');
                    oarea.eq(1).show();
                    arr.eq(1).addClass('up');
                    // 设置第一项为显示
                    var child = subwayRight.children().eq(0), childId = child ? child.data('id') : 'sorryNo';
                    subwayRight.children('[data-id=' + childId + ']').show();
                    // 初始化长度
                    $('#xfmap_E01_09').css('width', '100px');
                    // 隐藏全部项
                    subwayRight.children().hide();
                }).on('mouseleave', function () {
                    oarea.eq(1).hide();
                    arr.eq(1).removeClass('up');
                    // 隐藏全部项
                    subwayRight.children().hide();
                });

                // 更多条件
                var OSeaSelectM = $('.seaSelectM');
                OSeaSelectM.mouseenter(function () {
                    var $this = $(this);
                    $this.find('.haveSelM').next().show();
                    $this.find('em').addClass('up');
                }).mouseleave(function () {
                    var $this = $(this);
                    $this.find('.haveSelM').next().hide();
                    $this.find('em').removeClass('up');
                });

                //  删除条件
                $('#paramContent').on('click', 'a', function () {
                    var $this = $(this), dataKey = $this.attr('data-key'), dataVal = that.paramsDefaultText[dataKey], dataDom = $('#' + dataVal.id);
                    // 选择项颜色重置
                    var dataWrap = $('#' + dataVal.wrapId);
                    dataWrap.find('a').removeClass(that.activCls);
                    that.params[dataKey] = '';
                    dataDom.text(dataVal.text);
                    dataDom.val(dataVal.text);
                    // 若为区县 地铁需要一起删掉商圈 地铁站
                    if (dataKey === 'strDistrict') {
                        SFMap.clickComplete($('<a data-id="all" data-x="" data-y="">全部</a>'), 'district');
                        return;
                    }
                    dataKey === 'railway' && (that.params.railway_station = '');
                    $this.remove();
                    // 设置更多条件个数
                    that.moreConNum();
                    if ($('#paramContent a').length) {
                        that.searchResult(null, null, false);
                    } else {
                        $('#' + that.clearParamId).trigger('click');
                    }

                });
                //  清空全部条件
                $('#' + that.clearParamId).on('click', function () {
                    that.clearAllParams();
                    that.clearOtherOption('district');
                    that.map.clearOverlays();
                    SFMap.firstLoad = true;
                    that.params.strDistrict = '全部';
                    that.searchResult(null, 12, false, vars.cityx, vars.cityy);
                });
                // 点击右下角平移工具时，重新搜索房源并描点
                that.map._map.addEventListener('tilesloaded', function () {
                    var pingyi = $('.BMap_stdMpPan');
                    // 移动地图超过屏幕20%进行搜索
                    $('.BMap_stdMpPan').on('click', '.BMap_button', function() {
                        that.dragend = !0;
                        var timer;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            try {
                                var SFMap = require('modules/xf/SFMap');
                                // 区县模式、学区模式不重新搜索
                                if (!that.dragend || SFMap.searchType === 'quxian') {
                                    return;
                                }
                                if (SFMap.searchWhileMove) {
                                    that.dragend = !1;
                                    SFMap.clearOtherOption('map');
                                    SFMap.searchResult(1, '', true);
                                }
                            } catch (e) {
                            }
                        }, 800);
                    });
                });
            });
        },
        // 在更多条件中计数操作并且改变选择后的条件样式(特色，开盘时间，以及销售状态)
        moreConNum: function (container, obj, val) {
            var that = this;
            var params = that.params;
            var count = 0, all = '全部';
            // saling有可能是0,
            if (params.saling !== '' && all !== params.saling) {
                count++;
            }
            if (params.housetag && all !== params.housetag) {
                count++;
            }
            // hit30:表示代表点击率是前三十位的楼盘
            if (params.strStartDate && all !== params.strStartDate && 'hits30' != params.strStartDate) {
                count++;
            }
            container && $('#' + container).find('a').removeClass(that.activCls);
            if (val && all !== val) {
                obj.addClass(that.activCls);
            }
            var moresearchcount = $('#moresearchcount');
            if (count > 0) {
                moresearchcount.text('(' + count + ')');
            } else {
                moresearchcount.text('');
            }
        },
        moreStyle: function (id, val) {
            var that = this;
            $('#' + id).find('a').each(function (index, ele) {
                var obj = $(ele);
                if (val === obj.html()) {
                    that.moreConNum(id, obj, val);
                }
            });
        },

        // 清除跟选中类型互斥的数据及样式 mtype 选中类型
        clearOtherOption: function (mtype) {
            var that = this;
            var strDistrict0A = $('#areaParamContent'), strSubway0A = $('#subwayParamContent')
                , keyword = $('#xfmap_E01_46'), schoolDistParamContent = $('#schoolDistParamContent');
            switch (mtype) {
                case 'keyword':
                    that.params.railway = '';
                    that.params.railway_station = '';
                    that.params.strDistrict = '';
                    that.params.strComarea = '';
                    that.params.schoolDist = '';
                    that.params.schoolid = '';
                    schoolDistParamContent.html('学校找房');
                    $('#schoolDistContent a').removeClass(that.activCls);
                    strSubway0A.html('地铁找房');
                    strDistrict0A.html('区域找房');
                    break;
                case 'district':
                    that.params.strKeyword = '';
                    if (that.GOLD_SEARCH_STR_VAL) {
                        keyword.val(that.GOLD_SEARCH_STR_VAL).css('color', 'rgb(153, 153, 153)');
                    } else {
                        keyword.val('');
                    }
                    that.params.schoolDist = '';
                    that.params.schoolid = '';
                    schoolDistParamContent.html('学校找房');
                    $('#schoolDistContent a').removeClass(that.activCls);
                    that.params.railway = '';
                    that.params.railway_station = '';
                    strSubway0A.text('地铁找房');
                    break;
                case 'subway':
                    that.params.strKeyword = '';
                    if (that.GOLD_SEARCH_STR_VAL) {
                        keyword.val(that.GOLD_SEARCH_STR_VAL).css('color', 'rgb(153, 153, 153)');
                    } else {
                        keyword.val('');
                    }
                    that.params.strDistrict = '';
                    that.params.strComarea = '';
                    strDistrict0A.text('区域找房');
                    that.params.schoolDist = '';
                    that.params.schoolid = '';
                    schoolDistParamContent.html('学校找房');
                    $('#schoolDistContent a').removeClass(that.activCls);
                    break;
                case 'round':
                    that.params.strKeyword = '';
                    if (that.GOLD_SEARCH_STR_VAL) {
                        keyword.val(that.GOLD_SEARCH_STR_VAL).css('color', 'rgb(153, 153, 153)');
                    } else {
                        keyword.val('');
                    }
                    that.params.railway = '';
                    that.params.railway_station = '';
                    that.params.strDistrict = '';
                    that.params.strComarea = '';
                    strSubway0A.html('地铁找房');
                    strDistrict0A.html('区域找房');
                    that.params.schoolDist = '';
                    that.params.schoolid = '';
                    schoolDistParamContent.html('学校找房');
                    $('#schoolDistContent a').removeClass(that.activCls);
                    break;
                case 'map':
                    that.params.strKeyword = '';
                    if (that.GOLD_SEARCH_STR_VAL) {
                        keyword.val(that.GOLD_SEARCH_STR_VAL).css('color', 'rgb(153, 153, 153)');
                    } else {
                        keyword.val('');
                    }
                    that.params.railway = '';
                    that.params.railway_station = '';
                    that.params.strDistrict = '';
                    that.params.strComarea = '';
                    // that.params.schoolDist = '';
                    // schoolDistParamContent.html('学校找房');
                    strSubway0A.html('地铁找房');
                    strDistrict0A.html('区域找房');
                    break;
                case 'schoolDist':
                    that.params.strKeyword = '';
                    if (that.GOLD_SEARCH_STR_VAL) {
                        keyword.val(that.GOLD_SEARCH_STR_VAL).css('color', 'rgb(153, 153, 153)');
                    } else {
                        keyword.val('');
                    }
                    that.params.railway = '';
                    that.params.railway_station = '';
                    that.params.strDistrict = '';
                    that.params.strComarea = '';
                    strSubway0A.html('地铁找房');
                    strDistrict0A.html('区域找房');
                    break;
            }
            // 去掉楼盘ID
            that.params.newCode = '';
            that.params.houseNum = '';
        },
        // isSuggest: 区分是否是提示调用
        initParams: function (isSuggest) {
            var that = this, params = that.params;
            // shai_after 去除
            var shaiCls = '';
            // 楼盘id
            if (vars.strNewCode) {
                params.newCode = vars.strNewCode;
            }
            // 开盘时间
            if (vars.strStartDate) {
                var strStartDate = vars.strStartDate;
                params.strStartDate = strStartDate;
                that.moreStyle('kaipanWrap', strStartDate);
            }
            // 特色
            if (vars.housetag) {
                var housetag = vars.housetag;
                params.housetag = housetag;
                that.moreStyle('houseTag', housetag);
            }
            // 销售状态
            if (vars.saling) {
                var saling = vars.saling;
                params.saling = saling;
                if ('1' === saling) {
                    saling = '在售';
                } else if ('2' === saling) {
                    saling = '待售';
                } else {
                    saling = '售完';
                }
                that.moreStyle('sellWrap', saling);
            }
            // 区域、商圈
            var strDistrict = vars.strDistrict, strComarea = vars.strComarea, areaParam = $('#areaParam');
            if (vars.strDistrict && !vars.strComArea) {
                params.strDistrict = strDistrict;
                areaParam.children().eq(0).html(strDistrict).parent().children().addClass(shaiCls);
            } else if (vars.strDistrict && vars.strComArea) {
                params.strDistrict = vars.strDistrict;
                strComarea = vars.strComArea;
                params.strComarea = strComarea;
                areaParam.children().eq(0).html(strComarea).parent().children().addClass(shaiCls);
            }
            // 优惠
            if (vars.isyouhui) {
                params.isyouhui = vars.isyouhui;
                $('#xfmap_E01_41 div').addClass('on');
            }
            // 关键词
            if (vars.strKeyword) {
                var strKeyword = vars.strKeyword;
                params.strKeyword = strKeyword;
                $('#xfmap_E01_46').val(strKeyword);
            }
            // 地铁、地铁站
            var railway = vars.railway, railway_station = vars.railway_station, subwayParam = $('#subwayParam');
            if (vars.railway && !vars.railway_station) {
                params.railway = railway;
                subwayParam.children().eq(0).html(railway).parent().children().addClass(shaiCls);
            } else if (vars.railway && vars.railway_station) {
                params.railway = railway;
                params.railway_station = railway_station;
                subwayParam.children().eq(0).html(railway_station).parent().children().addClass(shaiCls);
            }
            // 用途类型
            if (vars.strPurpose) {
                var purposesWrap = $('#purposesWrap');
                params.strPurpose = vars.strPurpose;
                $('#purposeParamCont').text(vars.strPurpose);
                purposesWrap.find('a[data-id=' + params.strPurpose + ']').addClass(that.activCls);
            }
            // 价格
            if (vars.strPrice) {
                var priceParamContent = $('#priceParamContent'), priceWrap = $('#priceWrap');
                var priceArr = vars.strPrice.split(','), intPrice = '', txtPrice = '';
                params.strPrice = intPrice;
                if (priceArr[0] && priceArr[1]) {
                    txtPrice = priceArr[0] + '-' + priceArr[1] + '';
                    params.strPrice = '[' + priceArr[0] + ',' + priceArr[1] + ']';
                } else if (priceArr[0]) {
                    txtPrice = priceArr[0] + '以上';
                    params.strPrice = '[' + priceArr[0] + ',]';
                } else if (priceArr[1]) {
                    txtPrice = priceArr[1] + '以下';
                    params.strPrice = '[,' + priceArr[1] + ']';
                }
                priceParamContent.text(txtPrice || '不限');
                // 样式标红
                priceWrap.find('a[data-id=' + params.strPrice + ']').addClass(that.activCls);
            }
            // 户型
            if (vars.strRoom) {
                var roomWrap = $('#roomWrap');
                params.strRoom = vars.room;
                $('#huxingParamContent').text(vars.strRoom);
                // 样式标红
                roomWrap.find('a[data-id=' + params.room + ']').addClass(that.activCls);
            }
            if (vars.strSort) {
                params.strSort = vars.strSort;
            }
            // 输入提示时不实时显示条件
            !isSuggest && that.showParams();
        },
        // 获取根据当前条件生成的html
        getParamsHtml: function (dataKey) {
            var that = this, paramContent = $('#paramContent'),
                flag = 'ttt', dataKeyAttr = 'kkk', domTemp = '<a href="javascript:void(0)" data-key="' + dataKey + '">' + flag + '</a>', htm = '';
            var dataKeyDom = paramContent.find('a[data-key=' + dataKey + ']');
            var obj = $('#' + that.paramsDefaultText[dataKey].id);
            // 单独处理更多条件
            !obj.length && (obj = $('#' + that.paramsDefaultText[dataKey].wrapId).find('a[class=' + that.activCls + ']'));
            var val;
            if (obj.val() && obj.val() !== '区域找房' && obj.val() !== '地铁找房' && obj.val() !== '学校找房') {
                val = obj.val();
            }else {
                val = obj.text();
            }
            var defaultText = that.paramsDefaultText[dataKey].text;
            // 有可能已经被隐藏了,先显示出来
            dataKeyDom.show();

            // 学校找房若为不限则显示为学校
            if (dataKey === 'schoolDist' && val === '不限') {
                val = '学校';
            }
            // 已经存在若改变了则删除,否则不变
            if (!dataKeyDom.length || dataKeyDom.length && dataKeyDom.text() !== val) {
                htm = domTemp.replace(dataKeyAttr, dataKey).replace(flag, val);
                if (dataKeyDom.length && dataKeyDom.text() !== val) {
                    dataKeyDom.remove();
                }
            }
            // 如果为默认值则表示无条件,删除
            if (defaultText === val || !val) {
                dataKeyDom.remove();
                htm = '';
            }
            return htm;
        },

        //  根据页面已选条件显示,增加"清除全部条件"
        showParams: function () {
            var that = this, paramContainer = $('#paramContainer'), paramContent = $('#paramContent'), htm = '';
            for (var ele in that.paramsDefaultText) {
                if (that.paramsDefaultText.hasOwnProperty(ele)) {
                    htm += that.getParamsHtml(ele);
                }
            }
            paramContent.append(htm);
            var paramA = paramContent.find('a'), l = paramA.length, showEllipsis = !1;
            // 有条件时显示
            if (l) {
                paramContainer.show();
                var i;
                // 先删掉
                paramContent.find('span').remove();
                // 倒序遍历,直到正常显示
                for (i = l - 1; i > 0; i--) {
                    // 没正常显示则隐藏
                    if ($(window).innerWidth() - paramContainer.offset().left - 160 < paramContainer.width()) {
                        paramA.eq(i).hide();
                        // 显示省略号
                        showEllipsis = !0;
                    }
                }
                showEllipsis && paramContent.append('<span style=" float: left">...</span>');
            } else {
                paramContainer.hide();
            }
        },
        windowOpen: function (url, is_new) {
            // 默认全部新页面打开
            is_new = is_new || '_blank';
            var id = 'soufun_search_open_new_window';
            $('a#' + id).remove();
            var a = '<a href="' + url + '" id="' + id + '" target="' + is_new + '"><span id="thisa"></span></a>';
            $('body').append(a);
            $('#thisa').click();
        },
        picAddress: function (info) {
            var pic = info.picAddress;
            if (!pic) {
                pic = vars.imgUrl + 'img/shipin0.jpg';
            }
            return pic;
        },
        // 设置描点数据
        setMetaMarkers: function (hits, type) {
            if (!hits || !hits.length) {
                return;
            }
            var that = this;
            var metaMarkers = [], length = hits.length;
            for (var i = 0; i < length; i++) {
                var info = hits[i];
                // 异地楼盘不进行描点
                if (info.yidi) {
                    continue;
                }
                info.imgPath = vars.imgUrl;
                info.picAddress = that.picAddress(info);
                info.tel = info.tel400 || info.tel;
                if (!info.tel) {
                    info.tel = '暂无';
                }
                if (!info.purpose) {
                    info.purpose = '暂无';
                }
                if (!info.startTime) {
                    info.startTime = '暂无';
                }
                if (!info.developer) {
                    info.developer = '暂无';
                }
                if (!info.address) {
                    info.address = '暂无';
                }
                if (!info.price_type) {
                    info.price_type = '价格';
                }
                // 大于1000的进行转换
                if (info.price_num && !isNaN(info.price_num) && info.price_unit && info.price_unit.indexOf('万') === -1 && parseFloat(info.price_num) >= 1000) {
                    info.price_num = info.price_num;
                }
                if (!info.price_num || !info.price_unit) {
                    info.price_num = '';
                    info.price_unit = type ? '' : '';
                }
                if (info.price_unit) {
                    info.price_unit = info.price_unit.replace('平方米', '㎡');
                    info.price_unit = info.price_unit.replace('平', '㎡');
                }
                info.title_s = info.title;
                if (type) {
                    info.title_m = info.title;
                }
                if (!info.title) {
                    info.title = info.name || '暂无';
                    info.title_s = '暂无';
                    if (type) {
                        info.title_m = '暂无';
                    }
                } else {
                    var strlen = SFUtil.getStrlen(info.title);
                    if (strlen > 36) {
                        info.title_s = SFUtil.subStrcn(info.title, 36);
                    }

                    if (type && strlen > 18) {
                        info.title_m = SFUtil.subStrcn(info.title, 18);
                    }
                }
                if (info.householdpic) {
                    info.householdpichtml = info.householdpic;
                } else {
                    info.householdpichtml = '暂无资料';
                }
                that.markerList[info.newCode] = info;
                if (that.keyPointInfo && that.keyPointInfo.name == info.title) {
                    metaMarkers.unshift(info);
                } else {
                    metaMarkers.push(info);
                }
            }
            return metaMarkers;
        },
        showResult: function (allNum, hits, hiddenMarker, keyPoint, zoom, newCenterPoint, isDrag, newcode) {
            var that = this;
            var metaMarkers = that.setMetaMarkers(hits, true);
            hiddenMarker = hiddenMarker || false;
            keyPoint = keyPoint || false;
            return that.map.drawMarkers(metaMarkers, hiddenMarker, keyPoint, allNum, zoom, newCenterPoint, isDrag, '', newcode);
        },

        // 滚动条
        resizeScrollBar: function () {
            var that = this;
            // 滚动条添加
            $('#scrollbar1').scrollbar({
                type: 'scrollbar',
                height: that.resize(!0),
                width: 480,
                scrollerEase: 7,
                dragVertical: true,
                dragHorizontal: true,
                barWidth: 10,
                draggerVerticalSize: 'auto',
                draggerHorizontalSize: 'auto',
                roundCorners: 5,
                // 传入负数抵消内部去掉的2px
                distanceFromBar: -2,
                mouseWheel: true,
                mouseWheelOrientation: 'vertical',
                mouseWheelSpeed: 13,
                draggerColor: '#ccc',
                draggerOverColor: '#ccc',
                barColor: '#f1f1f1',
                barOverColor: '#f1f1f1'
            });
        },

        // 列表页排序
        showInorderBind: function () {
            var that = this, sortWrap = $('#sortWrap');
            sortWrap.on('click', 'a', function () {
                that.clickComplete($(this), 'sort');
            });
            // 添加(重设)滚动条
            that.resizeScrollBar();
            // 图片lazyload
            require.async('lazyload/lazyload', function () {
                $('img[data-original]').lazyload();
            });
            // 列表页悬浮事件绑定
            var listPic = $('#picContainer');
            listPic.on('mouseover', 'li[data_x]', function () {
                var id = $(this).data('id');
                var p = $('#mapCanvas a[data-buildid=' + id + ']');
                if (p.parent().hasClass('lpTip')) {
                    p.css({
                        backgroundColor: '#199752',
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        paddingRight: '7px',
                        borderRight: '1px solid #199752'
                    });
                }else if (p.parent().hasClass('lpTip1')) {
                    p.css({
                        backgroundColor: '#199752'
                    });
                }

                p.find('div').css('borderTop', '6px solid #199752');
                p.find('span').show();
                // 置顶
                var bmapDom = p.parent().parent();
                bmapDom.css('zIndex', Math.abs(bmapDom.css('zIndex')));
            });
            listPic.on('mouseout', 'li[data_x]', function () {
                var id = $(this).data('id');
                var p = $('#mapCanvas a[data-buildid=' + id + ']');
                /*if (that.params.newCode && ) {

                 }*/
                // 恢复颜色
                if (p.parent().hasClass('lpTip')) {
                    p.css({
                        backgroundColor: p.data('bgcolor') || '#f14646',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        paddingRight: '14px',
                        borderRight: 'none'
                    });
                }else if (p.parent().hasClass('lpTip1')) {
                    p.css({
                        backgroundColor: p.data('bgcolor') || '#f14646'
                    });
                }

                p.find('div').css('borderTop', p.data('bgtcolor') || '6px solid #f14646');
                if (that.params.newCode && +that.params.newCode === id) {

                }else {
                    p.find('span').hide();
                }
                //  取消置顶
                var bmapDom = p.parent().parent();
                bmapDom.css('zIndex', 0 - Math.abs(bmapDom.css('zIndex')));
            });
            // 列表页已查看状态
            var loupanListPics = 'fangworld_loupanListPics';
            listPic.on('click', 'li', function () {
                if (localStor) {
                    var $this = $(this), id = $this.data('id'), list = JSON.parse(localStor.getItem(loupanListPics)) || [];
                    if ($.inArray(id, list) === -1) {
                        $this.css('backgroundColor', '#f3f3f3');
                        list.push(id);
                        localStor.setItem(loupanListPics, '["' + list.join('","') + '"]');
                    }
                }
            });
            if (localStor) {
                // 初始化列表页已查看状态
                var listIn = JSON.parse(localStor.getItem(loupanListPics)) || [];
                for (var i = 0, l = listIn.length; i < l; i++) {
                    var id = listIn[i];
                    if (id) {
                        listPic.find('li[data-id=' + id + ']').css('backgroundColor', '#f3f3f3');
                    }
                }
            }
            //  重置收起尖括号为向上状态
            $('#Tab').removeClass('h');
            $('.mapLT').removeClass('mapLT_pz');
            $('.search_nei').removeClass('mt_100');
        },

        // 执行搜索
        searchResult: function (page, zoom, isDrag, pointX, pointY, newCodeObj) {
            var that = this, searchResult = $('#searchResult');
            // 搜索后设置标识为第一次拖拽，作为拖拽起始点
            that.NotFirstDrag = !1;
            // 获取房源信息
            if (newCodeObj) {
                that.params.newCode = newCodeObj.newCode;
                that.params.houseNum = newCodeObj.houseNum;
                //  房源
                that.searchType = 'fangyuan';
            }
            // 拷贝目前搜索条件:先清空非过滤条件
            that.params.x1 = that.params.x2 = that.params.y1 = that.params.y2 = '';
            that.params.a = that.params.city = that.params.zoom = that.params.PageNo = '';
            var params = $.extend({}, that.params);
            // isEmpty:2表示所有为空；1表示
            var isEmpty = 2;
            // 有任何参数条件都不进行四角坐标传递,移动地图时区县级别不重新搜索
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var isE = !(key === 'strDistrict' && params.strDistrict === '全部');
                    isE = isE && !(key === 'railway' && params.railway === '全部');
                    isE = isE && ( key !== 'strSort' || params.strSort !== 'mobileyhnew');
                    if (isE) {
                        if (typeof params[key] != 'function' && params[key]) {
                            if (key !== 'strDistrict' && key !== 'strComarea') {
                                isEmpty = 0;
                                break;
                            } else {
                                isEmpty = 1;
                            }
                        }
                    }
                }
            }
            // 一些默认参数赋值
            var method = 'get';
            params.a = that.api.GET_XFSEARCH;
            params.city = city;
            var newCenterPoint;
            if (pointX && parseFloat(pointX) > 0 && pointY && parseFloat(pointY) > 0) {
                newCenterPoint = new BMap.Point(pointX, pointY);
                // 定位新的地图中心
                that.map.setCenter(pointY, pointX, zoom);
                that.panBy(198);
                // 初始化地图中心：为移动60%清除条件
                that.map.centerstartSta = that.map._map.pointToOverlayPixel(that.map.getCenter());
            }

            // 拖拽、缩放地图时搜索数据,如果是非初始状态
            that.isDrag = isDrag;
            if (isDrag) {
                // y代表是否返回列表页数据
                params = $.extend({mapmode: 'y'}, params, that.map.gethdBounds());
            } else if (params.railway || params.strDistrict /*=== '全部'*/ || params.railway === '全部' || params.strKeyword !== '') {
                // 地铁、区县（全部）、关键词不传坐标
                params.mapmode = '';
                params.x1 = '';
                params.y1 = '';
                params.x2 = '';
                params.y2 = '';
            } else if (isEmpty === 1 || that.map._map.getZoom() <= 12 && isEmpty === 2) {
                params.mapmode = '';
                params.x1 = '';
                params.y1 = '';
                params.x2 = '';
                params.y2 = '';
            } else {
                // 如果非区县模式 则也返回列表页
                if (toQuxian) {
                    params = $.extend({mapmode: ''}, params, that.map.gethdBounds());
                }
            }

            that.page = page || 1;
            params.PageNo = that.page;
            // 传入zoom，去除自适应
            if (params.strComarea || params.strDistrict || MapApi.dragFlag || MapApi.zoomFlag || that.map._map.getZoom() > 12) {
                params.zoom = that.map._map.getZoom();
            }
            if (params.railway === '全部') {
                params.zoom = 12;
            }
            var inputKeyword = $('#xfmap_E01_46');
            var keyword = inputKeyword.val() || '';
            keyword = keyword.replace(/(^\s*)|(\s*$)/g, '');
            if ('\u697c\u76d8\u540d\u002f\u5730\u540d\u002f\u5f00\u53d1\u5546' === keyword || keyword === that.GOLD_SEARCH_STR_VAL) {
                keyword = '';
            } else {
                inputKeyword.val(keyword);
            }

            that.keepkw = keyword;
            params.strKeyword = keyword;
            var hiddenMarker = false, keyPoint = null;
            if (MapApi.dragFlag) {
                params.newCode = '';
                MapApi.dragFlag = false;
            }
            if (MapApi.zoomFlag) {
                params.newCode = '';
                MapApi.zoomFlag = false;
            }
            // 保存本次参数
            that.params = params;
            // 显示条件
            that.showParams();
            var onFailure = function () {
                that.isDrag = true;
            };
            var onComplete = function (result) {
                var newCodeResult;
                if (result.data) {
                    if (typeof result.data !== 'object') {
                        newCodeResult = JSON.parse(result.data);
                    } else {
                        newCodeResult = result.data;
                    }
                }
                function isEmptyObject(obj) {
                    for (var key in obj) {
                        return false;
                    }
                    return true;
                }
                var codeResult = result;
                if (params.newCode) {
                    that.searchType = 'fangyuan';
                    if (!isEmptyObject(fangyuanInfo)) {
                        result = fangyuanInfo;
                    }
                } else {
                    that.searchType = 'loupan';
                }
                var total = 0, hits;
                if (result.data) {
                    if (typeof result.data !== 'object') {
                        hits = JSON.parse(result.data);
                    } else {
                        hits = result.data;
                    }
                }
                // 删除原有列表元素
                searchResult.children('.searchResult').remove();
                searchResult.children('.mapList').remove();
                if (codeResult.list) {
                    // 列表页
                    searchResult.append(codeResult.list);
                    that.resize();
                    // 绑定排序
                    that.showInorderBind();
                }

                if (hits && hits.hit && hits.hit.length) {
                    total = hits.allResultNum;
                }

                // 把清除坐标放到离重新显示结果最近的地方
                that.markerList = {};

                // 点击楼盘，获取房源、户型，不重新描点
                if (that.searchType === 'fangyuan' && that.map.getMarkerLen() > 0) {
                    if (total > 0) {
                        // 因房源不进行描点，所以分页在这里单独处理
                        /*$('#xfmap_E01_38').on('click', 'a', function () {
                         that.searchResult($(this).data('id'));
                         });*/
                        that.map.newClearOverlays();
                        that.map.clearMarkers();
                        // 学校模式数据结构不太一样
                        if (params.schoolid) {
                            total = hits.schoolList ? hits.schoolList.length : 0;
                        }
                        // 仅选择学校类型不描楼盘
                        if (total > 0 && (!params.schoolDist || params.schoolDist && params.schoolid)) {
                            if (params.strKeyword) {
                                keyPoint = false;
                            }
                            if (that.params.newCode) {
                                that.showResult(total, newCodeResult.hit, hiddenMarker, keyPoint, zoom, newCenterPoint, isDrag, that.params.newCode);
                            }else {
                                that.showResult(total, hits.hit, hiddenMarker, keyPoint, zoom, newCenterPoint, isDrag, that.params.newCode);
                            }
                        }
                        // 搜索埋码
                        require.async(['http://js.ub.fang.com/_ub.js?v=201407181100'], function () {
                            hits && hits.hit && that.yhxw(hits.hit);
                        });
                    }
                } else if (that.searchType === 'fangyuan') {
                    // 楼盘详情页跳转地图，自带newcode，需要描点
                    that.map.newClearOverlays();
                    that.map.clearMarkers();
                    if (hits.loupan) {
                        that.showResult(1, hits.loupan, hiddenMarker, keyPoint, zoom, newCenterPoint, isDrag);
                    }
                    // 搜索埋码
                    require.async(['//js.ub.fang.com/_ub.js?v=201407181100'], function () {
                        hits && hits.loupan && that.yhxw(hits.loupan);
                    });
                } else {
                    that.map.newClearOverlays();
                    that.map.clearMarkers();
                    // 学校模式数据结构不太一样
                    if (params.schoolid) {
                        total = hits.schoolList ? hits.schoolList.length : 0;
                    }
                    // 仅选择学校类型不描楼盘
                    if (total > 0 && (!params.schoolDist || params.schoolDist && params.schoolid)) {
                        if (params.strKeyword) {
                            keyPoint = false;
                        }
                        that.showResult(total, hits.hit, hiddenMarker, keyPoint, zoom, newCenterPoint, isDrag);
                    }
                    // 搜索埋码
                    require.async(['http://js.ub.fang.com/_ub.js?v=201407181100'], function () {
                        hits && hits.hit && that.yhxw(hits.hit);
                    });
                }
                // 地铁描线
                if (params.railway || params.railway_station) {
                    // 选择地铁站的时候，也需要描地铁线
                    if (params.railway === '全部') {
                        that.showDistrict(result.stat.stat);
                        that.map.setCenter(cityy, cityx, 12);
                        that.panBy(198);
                        that.firstLoad = false;
                        that.searchType = 'quxian';
                    }else {
                        if (params.railway_station && !hits.subwayStat) {
                            var data = that.config.leveledMenu.subway.data, l = data.length;
                            for (var i = 0; i < l; i++) {
                                var item = data[i];
                                // 找到地铁线后
                                if (item.name === params.railway) {
                                    if (!hits) {
                                        hits = {};
                                        hits.subwayStat = [];
                                    } else {
                                        hits.subwayStat = [];
                                    }
                                    for (var k = 0, staL = item.stations.length; k < staL; k++) {
                                        var itemSta = item.stations[k];
                                        hits.subwayStat.push({
                                            name: itemSta.station_name,
                                            station: 1,
                                            x: itemSta.x,
                                            y: itemSta.y
                                        });
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    // 地铁
                    if (hits && hits.subwayStat && hits.subwayStat.length) {
                        // 点击新房地铁站要求16级  200米刻度
                        zoom = 16;
                        that.showResult(total, hits.subwayStat, hiddenMarker, keyPoint, zoom, newCenterPoint, isDrag);
                        that.subwayStat = !0;
                    } else {
                        that.subwayStat = !1;
                    }
                }

                // 区县模式
                if (result.stat && (that.firstLoad || that.map._map.getZoom() < 13)) {
                    // that.map.setCenter(cityy, cityx, zoom);
                    that.showDistrict(result.stat.stat);
                    that.firstLoad = false;
                    that.searchType = 'quxian';
                }

                // 学校
                if (params.schoolDist) {
                    // 学校
                    if (hits && hits.schoolList) {
                        that.showResult(total, hits.schoolList, hiddenMarker, keyPoint, zoom, newCenterPoint, isDrag);
                    }
                }

                $('#searchResult').scrollTop(0);
                if (that.keyPointInfo) {
                    that.map.addKeyMarker(that.keyPointInfo);
                    that.keyPointInfo = null;
                }
                if (!params.newCode) {
                    fangyuanInfo = result;
                }
            };
            if (that.ajax) {
                that.ajax.abort();
            }
            that.ajax = SFUtil.ajax(that.API_PATH, method, params, onComplete, onFailure, that.onLoading);
            toQuxian = true;
        },
        // 初始化商圈
        showDistrict: function (districts) {
            var that = this;
            that.map.convertPoint(districts);
        },
        onFailure: function () {

        },
        onSubwayFailure: function () {
            // 去掉地铁
            var subway = $('#subway');
            // 删除竖线
            subway.prev().remove();
            // 删除地铁过滤
            subway.remove();
        },
        // 初始化筛选框数据
        initFilterData: function () {
            var that = this;
            SFUtil.ajax(that.API_PATH, 'get', {a: that.api.GET_FILTER, city: city}, function (data) {
                // 初始化筛选-特色
                that.initHouseTag(data.houseTag);
                //  初始化筛选-区域
                that.initDistArea(data.distArea);
            }, that.onFailure, that.onLoading);
            SFUtil.ajax(that.API_PATH, 'get', {a: that.api.GET_FILTER_SUBWAY, city: city}, function (data) {
                // 初始化筛选-地铁
                that.initSubway(data);
            }, that.onSubwayFailure, that.onLoading);
        },
        // 初始化筛选-特色
        initHouseTag: function (tags) {
            var that = this;
            if (tags && tags.length) {
                that.config.houseTag = tags;
                var tagHTML = '', houseTag = $('#houseTag');
                for (var i = 0, l = tags.length; i < l; i++) {
                    tagHTML += '<a>' + tags[i] + '</a>';
                }
                houseTag.append(tagHTML).on('click', 'a', function () {
                    that.clickComplete($(this), 'housetag');
                });
            }
            //  初始化特色参数显示
            if (vars.housetag) {
                that.moreStyle('houseTag', vars.housetag);
            }
        },
        // 初始化筛选-区域
        initDistArea: function (DistArea) {
            var that = this;
            var tempHTML = '<li class="clearfix" data-id="mmm,ggg"><a data-id="ttt" data-x="pppx" data-y="pppy">xxx</a>';
            tempHTML += '<a data-id="sss" data-x="pppx" data-y="pppy">yyy</a></li>';
            var tempHTMlRBegin = '<ul class="clearfix hide" data-id="nnn">', tempHTMlREnd = '</ul>',
                tempHTMLLess = '<li class="clearfix" data-id="mmm"><a data-id="ttt" data-x="pppx" data-y="pppy">xxx</a></li>';
            var tempHTMlRTitle = '<li class="areaRtitle" data-x="pppx" data-y="pppy">xxx</li>';
            var tempHTMlRContent = '<li><a data-x="pppx" data-y="pppy">xxx</a></li>';
            var spliter = '<div class="lineH hide"></div>';
            if (DistArea && DistArea.length) {
                that.config.leveledMenu.district.data = DistArea;
                var area = $('#area');
                var distHTML = '', tHTML = '', item, lastName = '全部', lastId = 'all', lastx = '', lasty = '';
                var distArea = $('#distAreaLeft'), distAreaRight = $('#distAreaRight');
                var distHTMLR = '', itemR, i = 0, l = DistArea.length;
                for (i = 0; i < l; i++) {
                    item = DistArea[i];
                    tHTML = '';
                    // 区域总数少于15个则变成一列
                    if (l < 15) {
                        if (distArea.width() !== 64) {
                            distArea.width(64);
                            // 65去除另外一列的宽度
                            distAreaRight.css('left', 65);
                        }
                        // 起始位置加上全部
                        i === 0 ? tHTML = tempHTMLLess.replace('mmm', lastId).replace('ttt', lastId).replace('pppx', '').replace('pppy', '').replace('xxx', lastName) : tHTML = '';
                        tHTML += tempHTMLLess.replace('mmm', item.quanpin).replace('ttt', item.quanpin).replace('pppx', item.x).replace('pppy', item.y);
                        tHTML = tHTML.replace('xxx', item.name);
                        distHTML += tHTML;
                    } else {
                        // 第偶数个加入一次
                        if (!(i % 2)) {
                            tHTML = tempHTML.replace('xxx', lastName).replace('yyy', item.name).replace('ggg', item.quanpin);
                            tHTML = tHTML.replace('mmm', lastId).replace('ttt', lastId).replace('sss', item.quanpin);
                            tHTML = tHTML.replace('pppx', lastx).replace('pppy', lasty).replace('pppx', item.x).replace('pppy', item.y);
                            distHTML += tHTML;
                        } else {
                            lastName = item.name;
                            lastId = item.quanpin;
                            lastx = item.x;
                            lasty = item.y;
                        }
                    }
                    // 拼接右侧商圈数据
                    var areas = item.area;
                    if (areas.length > 0) {
                        var t = tempHTMlRBegin.replace('nnn', item.quanpin);
                        distHTMLR += t + tempHTMlRTitle.replace('xxx', item.name).replace('pppx', item.x || '').replace('pppy', item.y || '');
                        distHTMLR += tempHTMlRContent.replace('xxx', '全部').replace('pppx', item.x || '').replace('pppy', item.y || '');
                        for (var j = 0, le = areas.length; j < le; j++) {
                            itemR = areas[j];
                            distHTMLR += tempHTMlRContent.replace('xxx', itemR.name).replace('pppx', itemR.x || '').replace('pppy', itemR.y || '');
                        }
                        distHTMLR += tempHTMlREnd + spliter;
                    } else {
                        distHTMLR += '<ul></ul>';
                    }

                }
                // 若连同“全部”后是奇数个则额外加
                if (!(l % 2) && l >= 15) {
                    distHTML += '<li class="clearfix" data-id="' + item.quanpin + '"><a'
                        + ' data-x="' + item.x + '" data-y="' + item.y + '">' + item.name + '</a></li>';
                }
                distArea.append(distHTML);
                distAreaRight.append(distHTMLR);
                distArea.on('mouseenter', 'li', function () {
                    var $this = $(this), ids = $this.data('id').split(',');
                    // 先隐藏全部
                    distAreaRight.find('ul,.lineH').hide();
                    // 逐个显示
                    var oarea = $('.area'), w = 128;
                    // 少于15区县(有一个是全部，故为16)则宽度减小
                    $this.parent().find('a').length < 16 && (w = 64);
                    oarea.width(w);
                    for (var i = 0, l = ids.length; i < l; i++) {
                        var dom = distAreaRight.find('ul[data-id=' + ids[i] + ']');
                        if (dom.length > 0) {
                            oarea.css('width', '550px');
                        }
                        // 最后一个去掉分割
                        if (i === l - 1) {
                            dom.show();
                        } else {
                            dom.show().next().show();
                        }
                    }
                    //  设置背景色为初始
                    distArea.find('li').css('backgroundColor', '#f3f3f3');
                    //    设置自己为选中色
                    $this.css('backgroundColor', 'white');
                });
                area.on('click', 'li a', function () {
                    SFMap.clickComplete($(this), 'district');
                });
            }
        },
        // 初始化筛选-地铁
        initSubway: function (subway) {
            var that = this;
            var tempHTML = '<li class="clearfix" data-id="ttt"><a data-id="ttt">sss</a></li>';
            var tempHTMlRBegin = '<ul class="clearfix hide" data-title="ttt" data-id="nnn">', tempHTMlREnd = '</ul>';
            var tempHTMLBE = '</ul><ul class="clearfix hide" data-title="ttt" data-id="nnn">';
            var tempHTMlRContent = '<li data-id="yyy"><a data-x="pppx" data-y="pppy">xxx</a></li>';
            if (subway && subway.length) {
                that.config.leveledMenu.subway.data = subway;
                var subwayHTML = '<li class="clearfix" data-id="all"><a data-id="all">全部</a></li>';
                var item, subwayL = $('#subwayLeft'), subwayR = $('#subwayRight');
                var subwayHTMLR = '', itemR;
                for (var i = 0, l = subway.length; i < l; i++) {
                    item = subway[i];
                    subwayHTML += tempHTML.replace(/ttt/g, item.id).replace('sss', item.name);
                    // 拼接右侧地铁站点数据
                    var stations = item.stations;
                    subwayHTMLR += tempHTMlRBegin.replace('nnn', item.id).replace('ttt', item.name);
                    var liC = subway.length >= 12 ? subway.length : 12;
                    for (var j = 0, le = stations.length; j < le; j++) {
                        itemR = stations[j];
                        if (j !== 0 && j % liC === 0) {
                            subwayHTMLR += tempHTMLBE.replace('nnn', item.id).replace('ttt', item.name);
                        }
                        subwayHTMLR += tempHTMlRContent.replace('yyy', itemR.id).replace('xxx', itemR.station_name);
                        subwayHTMLR = subwayHTMLR.replace('pppx', itemR.x || '').replace('pppy', itemR.y || '');
                    }
                    subwayHTMLR += tempHTMlREnd;

                }
                subwayL.append(subwayHTML);
                subwayR.append(subwayHTMLR);
                subwayL.on('mouseenter', 'li', function () {
                    var $this = $(this), ids = $this.data('id');
                    // 先隐藏全部
                    subwayR.find('ul').hide();
                    // 再显示
                    var ulCo = subwayR.find('ul[data-id=' + ids + ']');
                    // 隐藏地铁线
                    var container = $('#xfmap_E01_09');
                    // 此处只能根据宽度大小来隐藏地铁站： 100为地铁线宽度。每列(ul)地铁136。
                    if ($(this).data('id') !== 'all') {
                        container.css('width', 100 + ulCo.length * 136);
                    } else {
                        container.css('width', '100px');
                    }
                    ulCo.show();
                    //  设置背景色为初始
                    subwayL.find('li').css('backgroundColor', '#f3f3f3');
                    //    设置自己为选中色
                    $this.css('backgroundColor', 'white');
                });
                $('#subway').on('click', 'li a', function () {
                    SFMap.clickComplete($(this), 'subway');
                });
            } else {
                that.onSubwayFailure();
            }
        },
        onLoading: function () {
            // $("#total_count").html('<img width="18" height="18" align="absmiddle" src="' + imgPath + 'baidu_n/img/load_18x18.gif" alt=""> 努力查找中...');
        },
        // 进入商圈详情
        gotoDistrict: function (district, x, y, school) {
            var that = this, zoom = 14;
            if (!school) {
                var strDistrict0A = $('#areaParamContent');
                that.params.strDistrict = district;
                strDistrict0A.html(district);
                that.isClickDist = !0;
            } else {
                var schoolDistParamContent = $('#schoolDistParamContent');
                that.params.schoolid = school.schoolid;
                schoolDistParamContent.text(district);
                zoom = 16;
            }
            // 楼盘级地图（地图比例：大于等于14级）
            that.searchResult(null, zoom, !1, x, y);
        },
        clearAllParams: function () {
            var that = this, params = that.params;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    if (typeof params[key] !== 'function') {
                        params[key] = '';
                    }
                }
            }
            var moreA = $('#moresearchcount'), strDistrict0A = $('#areaParam'), strSubway0A = $('#subwayParam');
            var strHousetag0A = $('#houseTag a'), strSale = $('#sellWrap a'), strRound = $('#roundWrap a'), strkaipan = $('#kaipanWrap a');
            var strPrice0A = $('#priceParam'), strRoom0A = $('#huxingParam'), strPurpose0A = $('#purposeParam'), strSchollDist = $('#schoolDistParam');
            moreA.html('');
            strDistrict0A.html('<span id="areaParamContent">区域找房</span><em class=""></em>');
            strSubway0A.html('<span id="subwayParamContent">地铁找房</span><em class=""></em>');
            strPrice0A.html('<span id="priceParamContent">价格</span><em class=""></em>');
            strRoom0A.html('<span id="huxingParamContent">户型</span><em class=""></em>');
            strPurpose0A.html('<span id="purposeParamCont">类型</span><em class=""></em>');
            strSchollDist.html('<span id="schoolDistParamContent">学校找房</span><em></em>');
            strHousetag0A.removeClass(that.activCls);
            strSale.removeClass(that.activCls);
            strRound.removeClass(that.activCls);
            strkaipan.removeClass(that.activCls);
            if (that.searchSign !== 0) {
                that.searchSign = 0;
            }
            // 学校
            $('#schoolDistContent a').removeClass(that.activCls);
            // 类型
            $('#purposesWrap a').removeClass(that.activCls);
            // 户型
            $('#roomWrap a').removeClass(that.activCls);
            // 总价
            $('#priceWrap a').removeClass(that.activCls);
        },
        clearAreaParams: function () {
            var strDistrict0A = $('#areaParam');
            strDistrict0A.html('<span id="areaParamContent">区域找房</span><em class=""></em>');
            var paramContent = $('#paramContent');
            paramContent.find('a[data-key="strDistrict"]').remove();
        },
        // 筛选条件样式标记：obj 点击对象,type表示对象类型用来区分地铁区县和其他筛选条件
        markFilter: function (obj, type) {
            var that = this;
            switch (type) {
                case 'district':
                    // 区县
                    obj.parent().find('li a').removeClass(that.activCls);
                    obj.find('a[data-id=' + that.params.district + ']').addClass(that.activCls);
                    break;
                case 'comarea':
                    // 商圈
                    obj.parent().parent().parent().find('li a').removeClass(that.activCls);
                    obj.addClass(that.activCls);
                    break;
                case 'subwayline':
                    // 地铁线
                    obj.parent().find('li>a').removeClass(that.activCls);
                    obj.find('a').addClass(that.activCls);
                    break;
                default:
                    // 价格、户型、类型
                    obj.parent().parent().find('a').removeClass(that.activCls);
                    obj.addClass(that.activCls);
            }
        },

        //  选择条件时点击触发事件:   obj 点击对象  mtype 对象类型
        clickComplete: function (obj, mtype) {
            // 楼盘模式14：现在为自适应了
            var that = this, zoom = 14;
            if (obj && obj.parent('li').parent('ul').attr('id') === 'subwayLeft') {
                that.params.mode = 'subwayLine';
            }
            // 是否是点击区县
            that.isClickDist = !1;
            var subwayCenter;
            if (obj) {
                var val = obj.html();
                // 不使用用data方法原因：会进行类型转换如"[20000,30000]"会直接变为数组
                var id = obj.attr('data-id');
                var title = '', titleId = '';
                // 更多条件
                var moreCon = $('#xfmap_E01_13');
                switch (mtype) {
                    case 'keyword':
                        var keyword = $('#xfmap_E01_46').val();
                        if (keyword === '\u697c\u76d8\u540d\u002f\u5730\u540d\u002f\u5f00\u53d1\u5546' && $.trim(keyword) === '') {
                            return false;
                        }
                        that.searchSign = 1;
                        that.params.strKeyword = $.trim(keyword);
                        var keyPanel = $('#panel_keyword');
                        if (keyPanel.is(':visible')) {
                            keyPanel.hide();
                            var suggest = require('modules/xf/suggest');
                            var p = keyPanel.find('.suggest_selected');
                            suggest.matchPanel(p, 'keyword');
                        }
                        that.clearOtherOption(mtype);
                        break;
                    case 'district':
                        var strDistrict0A = $('#areaParamContent');
                        title = obj.parent().parent().children('.areaRtitle').text();
                        // 如果点击的是最上方的全部
                        if ('all' === id) {
                            // 进入区县模式
                            zoom = 12;
                            that.clearAreaParams();
                            that.map.clearMarkers();
                            that.map.newClearOverlays();
                            that.firstLoad = true;
                            that.params.strDistrict = '全部';
                        }
                        // 点击的是每个的全部
                        else if ('全部' === val) {
                            that.params.strDistrict = title;
                            that.params.strComarea = '';
                            strDistrict0A.html(title);
                            // 点击区县
                            that.isClickDist = !0;
                        } else {
                            strDistrict0A.html(val);
                            if (!title) {
                                that.params.strDistrict = val;
                                that.params.strComarea = '';
                            } else {
                                that.params.strDistrict = title;
                                that.params.strComarea = val;
                            }
                            // 点击区县
                            that.isClickDist = !0;
                        }
                        $('#xfmap_E01_08').hide();
                        that.clearOtherOption(mtype);
                        break;
                    case 'subway':
                        var strSubway0A = $('#subwayParamContent');
                        title = obj.parent().parent().data('title');
                        // 如果点的是全部
                        if ('all' === id) {
                            that.params.railway = '全部';
                            strSubway0A.html('地铁找房');
                        } else {
                            strSubway0A.html(val);
                            if (!title) {
                                that.params.railway = val;
                                that.params.railway_station = '';
                                // 找到地铁线的中心点
                                var subwaylineStats = that.config.leveledMenu.subway.data.filter(function (item) {
                                    return item.id === id;
                                });
                                if (subwaylineStats.length) {
                                    var stations = subwaylineStats[0].stations;
                                    var xS = 0, yS = 0, allL = stations.length;
                                    for (var j = 0, l = stations.length; j < l; j++) {
                                        var item = stations[j];
                                        xS += parseFloat(item.x);
                                        yS += parseFloat(item.y);
                                        // 地铁站中有不含有经纬度的，这里去除，防止定位出差错
                                        if (!parseFloat(item.x) || !parseFloat(item.y)) {
                                            allL--;
                                        }
                                    }
                                    subwayCenter = {x: xS / allL, y: yS / allL};
                                }
                                // 设置点击地铁线时，到区县
                                that.isClickStation = '13';
                                zoom = 12;
                            } else {
                                that.params.railway = title;
                                that.params.railway_station = val;
                                zoom = 14;
                            }

                        }
                        $('#xfmap_E01_09').hide();
                        that.clearOtherOption(mtype);
                        break;
                    case 'schoolDist':
                        var schoolDistParamContent = $('#schoolDistParamContent')
                            , schoolDistContent = $('#schoolDistContent')
                            , cancelSchool = schoolDistContent.find('li:last');
                        // 如果点的是取消
                        if (!id) {
                            that.params.schoolDist = '';
                            schoolDistParamContent.html('学校找房');
                            $('#schoolDistContent a').removeClass(that.activCls);
                            cancelSchool.hide();
                        } else {
                            schoolDistParamContent.html(val);
                            that.params.schoolDist = id;
                            // 显示取消
                            cancelSchool.show();
                        }
                        schoolDistContent.hide();
                        that.params.schoolid = '';
                        that.clearOtherOption(mtype);
                        // 设置样式
                        that.markFilter(obj);
                        break;
                    case 'purpose':
                        var strPur = $('#purposeParamCont');
                        if ('不限' == val) {
                            val = '类型';
                            that.params.strPurpose = '';
                        } else {
                            that.params.strPurpose = val;
                        }
                        strPur.text(val);
                        $('#xfmap_E01_12').hide();
                        // 设置样式
                        that.markFilter(obj);
                        break;
                    case 'price':
                        var priceParamContent = $('#priceParamContent');
                        if (!id) {
                            that.params.strPrice = '';
                            val = '价格';
                        } else {
                            that.params.strPrice = id;
                        }
                        priceParamContent.text(val);
                        $('#xfmap_E01_10').hide();
                        // 设置样式
                        that.markFilter(obj);
                        break;
                    case 'room':
                        var strRoom0A = $('#huxingParamContent');
                        if (!id) {
                            that.params.strRoom = '';
                            val = '户型';
                        } else {
                            that.params.strRoom = id;
                        }
                        strRoom0A.text(val);
                        $('#xfmap_E01_11').hide();
                        // 设置样式
                        that.markFilter(obj);
                        break;
                    case 'housetag':
                        if ('全部' === val) {
                            val = '';
                        }
                        that.params.housetag = val;
                        that.moreConNum('houseTag', obj, val);
                        moreCon.hide();
                        break;
                    case 'sale':
                        if ('全部' === val) {
                            val = '';
                        }
                        that.params.saling = id || '';
                        that.moreConNum('sellWrap', obj, val);
                        break;
                    case 'kaipan':
                        if ('全部' === val) {
                            val = '';
                        }
                        that.params.strStartDate = val;
                        moreCon.hide();
                        that.moreConNum('kaipanWrap', obj, val);
                        break;
                    case 'category':
                        if (parseInt(obj.val())) {
                            that.params.category = 1;
                        } else {
                            that.params.category = 0;
                        }
                        break;
                    case 'sort':
                        // 智能排序为默认
                        if (obj.attr('class') == 'zhineng') {
                            that.params.strSort = '';
                        } else {
                            var em = obj.children('em');
                            if (em.attr('class') === 'up' || em.attr('class') === 'down1') {
                                em.attr('class', 'down');
                                if (obj.attr('id') === 'orderPrice') {
                                    // 价格排序
                                    that.params.strSort = '1';
                                } else {
                                    // 开盘时间排序
                                    that.params.strSort = '2';
                                }
                            } else {
                                em.attr('class', 'up');
                                if (obj.attr('id') === 'orderPrice') {
                                    that.params.strSort = '3';
                                } else {
                                    that.params.strSort = '4';
                                }
                            }
                        }
                        var onlis = $('.mapListT li.on');
                        if (onlis.length > 0) {
                            onlis.removeClass('on');
                        }
                        obj.parent('li').addClass('on');
                        break;
                }
            }
            var x = obj ? obj.data('x') : '';
            var y = obj ? obj.data('y') : '';
            // 区县模式
            if (that.firstLoad) {
                x = cityx;
                y = cityy;
            }
            // 点击地铁线时取中点地铁站
            if (subwayCenter) {
                x = subwayCenter.x;
                y = subwayCenter.y;
            }
            // 清除点击地铁标识
            if (mtype !== 'subway') {
                that.isClickStation = '';
            }
            that.searchResult(null, zoom, false, x, y);
        },

        // 搜索埋码
        yhxw: function (hits) {
            var that = this;
            var params = that.params;
            // 埋码参数
            var p = {};
            // 所属页面
            p['vwg.page'] = 'nhmaplist';
            // 搜索关键字
            if (params.strKeyword !== '') {
                p['vwn.key'] = encodeURIComponent(params.strKeyword);
            }
            // 区域和地铁互斥
            if (params.railway_station !== '') {
                // 地铁站
                p['vwn.subway'] = encodeURIComponent(params.railway) + '^' + encodeURIComponent(params.railway_station);
            } else if (params.railway !== '') {
                // 地铁线
                p['vwn.subway'] = encodeURIComponent(params.railway) + '^';
            } else if (params.strComarea !== '') {
                // 商圈
                p['vwn.position'] = encodeURIComponent(params.strDistrict) + '^' + encodeURIComponent(params.strComarea);
            } else if (params.strDistrict !== '') {
                // 区域
                p['vwn.position'] = encodeURIComponent(params.strDistrict) + '^';
            }
            // 物业类型
            if (params.strPurpose !== '') {
                p['vwn.genre'] = encodeURIComponent(params.strPurpose);
            }
            // 单价
            if (params.strPrice !== '') {
                p['vwn.unitprice'] = params.strPrice.replace('[,', '[0,').replace(',]', ',99999]').replace('[', '').replace(']', '').replace(',', '-');
            }
            // 户型
            var room = $('#huxingParamContent').text();
            if (room !== '\u6237\u578b' && room !== '\u4e0d\u9650') {
                p['vwn.housetype'] = encodeURIComponent(room);
            }
            // 特色
            var houseTag = '';
            if (params.isyouhui === 'y') {
                houseTag = encodeURIComponent('打折优惠');
            }
            if (params.housetag !== '') {
                houseTag = houseTag !== '' ? houseTag + ',' + encodeURIComponent(params.housetag) : encodeURIComponent(params.housetag);
            }
            if (houseTag !== '') {
                p['vwn.feature'] = houseTag;
            }
            // 销售状态
            if (params.saling === '0') {
                p['vwn.salestatus'] = encodeURIComponent('售完');
            } else if (params.saling === '1') {
                p['vwn.salestatus'] = encodeURIComponent('在售');
            } else if (params.saling === '2') {
                p['vwn.salestatus'] = encodeURIComponent('待售');
            }
            // 开盘时间
            if (params.strStartDate !== '') {
                p['vwn.opentime'] = encodeURIComponent(params.strStartDate);
            }
            // 优惠房源
            if (params.isyouhui) {
                p['vwn.justlooksfun'] = encodeURIComponent('是');
            } else {
                p['vwn.justlooksfun'] = encodeURIComponent('否');
            }
            // 移动地图搜索
            if (that.searchWhileMove) {
                p['vwn.movemapsearch'] = encodeURIComponent('是');
            } else {
                p['vwn.movemapsearch'] = encodeURIComponent('否');
            }
            // 搜索楼盘
            if (hits) {
                p['vwn.showhouseid'] = '';
                for (var i = 0; i < hits.length; i++) {
                    p['vwn.showhouseid'] += hits[i].newCode + ',';
                }
            }
            // 用户行为(格式：'字段编号':'值')
            _ub.city = vars.cityname;
            // 业务---新房
            _ub.biz = 'n';
            // 方位 ，网通为0，电信为1，如果无法获取方位，记录0
            _ub.location = 0;
            // 收集方法
            _ub.collect(1, p);
        }
    };
    return SFMap;
});
/**
 * @file 封装 Baidu 地图 操作相关
 * @modified by 袁辉辉(yuanhuihui@fang.com) 吕雁(lvyan@soufun.com)
 */
define('modules/xf/dhjs', ['modules/SFUtil', 'modules/xf/SFMap', 'jquery'], function (require) {
    'use strict';
    var vars = seajs.data.vars;
    var SFUtil = require('modules/SFUtil');
    var SFMap = require('modules/xf/SFMap');
    var $ = require('jquery');
    return {
        init: function () {
            // 注册点击文档任何地方关闭菜单
            $(document).on('click', function (e) {
                e = e || window.event;
                var eventSource = $(e.target || e.srcElement),
                    expt2 = $('#search_ad');
                // 判断如果搜索下拉框内容被点击，则隐藏下拉框显示
                if (0 != expt2.length && !SFUtil.containNode(expt2, eventSource) && !SFUtil.containNode($('#showsuggest'), eventSource)
                    && !SFUtil.containNode($('#xfmap_E01_46'), eventSource)) {
                    expt2.hide();
                }
            });
            // 获取登陆信息
            SFUtil.getLoginStatus();
            // 跳转到列表
            $('#xfmap_E01_07').on('click', function () {
                var params = SFMap.params;
                params.a = 'getshortUrl';
                params.city = vars.city;
                var onComplete = function (res) {
                    window.location = res.result;
                };
                SFUtil.ajax(vars.ajaxfilePath, 'get', params, onComplete);
                return false;
            });
            $('#password').on({
                focus: function () {
                    $('#label_pwd').html('');
                },
                blur: function () {
                    if (this.value == '') {
                        $('#label_pwd').html('\u5bc6\u7801');
                    }
                }
            });


            $('.subwayline').each(function () {
                $(this).on('click', function () {
                    var id = $(this).attr('name');
                    $('.subwaystation').hide();
                    $('#' + id).show();
                });
            });

            // 优惠房、移动地图时搜索
            var mapChoose = $('.mapChoose');
            var checkClick = function () {
                // 去除newCode
                SFMap.params.newCode = '';
                SFMap.params.houseNum = '';
                var $this = $(this),
                    checkDom = $this.children().eq(0);
                checkDom.toggleClass('on');
                var has = checkDom.hasClass('on');
                // 优惠
                if ($this.attr('id') === 'xfmap_E01_41') {
                    if (has) {
                        SFMap.params.isyouhui = 'y';
                    } else {
                        SFMap.params.isyouhui = '';
                    }
                    SFMap.searchResult();
                    // 移动地图时搜索
                } else if ($this.attr('id') === 'xfmap_E01_40') {
                    if (has) {
                        SFMap.searchWhileMove = true;
                    } else {
                        SFMap.searchWhileMove = false;
                    }
                }
            };
            mapChoose.on('click', 'li', checkClick);
            // 价格自定义输入
            var priceCus = $('#priceInputBtn');
            var priceBegTxt = $('#priceBegTxt');
            var priceEndTxt = $('#priceEndTxt');
            priceEndTxt.on('blur', function () {
                var $this = $(this),
                    val = $this.val();
                if (isNaN($.trim(val))) {
                    $this.val('');
                }
            }).on('keypress', function () {
                // 新房限制7位
                if (priceEndTxt.val().trim().length >= 7) {
                    return false;
                }
            });
            priceBegTxt.on('blur', function () {
                var $this = $(this),
                    val = $this.val();
                if (isNaN($.trim(val))) {
                    $this.val('');
                }
            }).on('keypress', function () {
                // 新房限制7位
                if (priceBegTxt.val().trim().length >= 7) {
                    return false;
                }
            });
            priceCus.on('click', function () {
                var priceBeg = priceBegTxt.val(),
                    priceEnd = priceEndTxt.val(),
                    txt = '',
                    begFlg = priceBeg && !isNaN(priceBeg),
                    endFlg = priceEnd && !isNaN(priceEnd);
                if (begFlg && endFlg) {
                    var temp = 0;
                    if (parseFloat(priceEnd) < parseFloat(priceBeg)) {
                        temp = priceBeg;
                        priceBeg = priceEnd;
                        priceEnd = temp;
                    }
                    txt = priceBeg + '-' + priceEnd + '万';
                    SFMap.params.strPrice = '[' + priceBeg * 10000 + ',' + priceEnd * 10000 + ']';
                } else if (begFlg) {
                    txt = priceBeg + '万以上';
                    SFMap.params.strPrice = '[' + priceBeg * 10000 + ',]';
                } else if (endFlg) {
                    txt = priceEnd + '万以下';
                    SFMap.params.strPrice = '[,' + priceEnd * 10000 + ']';
                }
                $('#priceParamContent').text(txt || '不限');
                priceBegTxt.val('');
                priceEndTxt.val('');
                // 设置选中样式
                var priceWrap = $('#priceWrap');
                priceWrap.find('a').removeClass(SFMap.activCls);
                // priceWrap.find('a[text=' + (txt || '不限')).addClass(SFMap.activCls);
                SFMap.clickComplete(null, 'price');
                $('#xfmap_E01_10').slideUp();
            });
            // 点击选择搜索条件
            var purposesWrap = $('#purposesWrap');
            var priceWrap = $('#priceWrap'),
                roomWrap = $('#roomWrap');
            var sellWrap = $('#sellWrap'),
                roundWrap = $('#roundWrap'),
                kaipanWrap = $('#kaipanWrap'),
                category = $('#category'),
                schoolDistContent = $('#schoolDistContent');
            var searchBtn = $('#xfmap_E01_06'),
                keywordBtn = $('#xfmap_E01_46'),
                sortWrap = $('#sortWrap');
            var $searchAd = $('#search_ad');
            // 复制一份,否则ie下会清空
            var $removeBtn = $('.removeBtn').clone();
            // icy 搜索历史
            var localStorage = vars.localStorage;
            var searchData = [];
            // 复制一份,否则ie下会清空
            var $ad = $searchAd.find('.adv').clone();

            function refreshSuggest() {
                var length, i;
                searchData = searchData.slice(0, 3);
                length = searchData.length;
                $searchAd.html('');
                for (i = 0; i < length; i++) {
                    $searchAd.append('<li><a id="xfmap_E01_43" class="searchHis clearfix ad" data-id ="' + searchData[i] + '">' + searchData[i] + '</a></li>');
                }
                // 最多显示10条
                var adLength = 10 - length;
                for (i = 0; i < adLength; i++) {
                    $searchAd.append($($ad[i]).clone());
                }
                if (length) {
                    // 再次复制否则ie下为空
                    var $removeBtnClone = $removeBtn.clone();
                    $removeBtnClone.appendTo($searchAd).show();
                }
                // 删除历史
                $('.removeBtn').off('click').on('click', function () {
                    searchData = [];
                    localStorage.setItem('search_his', searchData.join(','));
                    refreshSuggest();
                });
            }

            // 初始化提示框
            if (localStorage) {
                var historyData = localStorage.getItem('search_his');
                historyData && (searchData = historyData.split(',') || []);
                refreshSuggest();
                $searchAd.on('click', '.searchHis', function () {
                    var $this = $(this), id = $this.attr('data-id');
                    if (id) {
                        // 会先触发关键词输入框的blur事件，由于此时还没值会变成默认色，故特殊处理
                        $('#xfmap_E01_46').css('color', '#000');
                    }
                    keywordBtn.val(id);
                    // 隐藏广告
                    $('#searchIptAd').hide();
                    SFMap.clickComplete($(this), 'keyword');
                    refreshHistory();
                });
            }

            function refreshHistory() {
                var val = keywordBtn.val();
                // 若不为输入内容,则不计入历史
                if ($('#xfmap_E01_46').css('color') === 'rgb(153, 153, 153)') {
                    val = '';
                }
                searchData = searchData || [];
                var length = searchData.length;
                var temp, i;
                for (i = 0; i < length; i++) {
                    temp = searchData[i];
                    if (temp === val) {
                        searchData.splice(i, 1);
                        break;
                    }
                }
                if (!/^\s*$/.test(val)) {
                    searchData.unshift(val);
                    // 最多显示3个
                    searchData = searchData.slice(0, 3);
                    localStorage.setItem('search_his', searchData.join(','));
                    refreshSuggest();
                }
            }

            searchBtn.click(function () {
                $('#panel_xfmap_E01_46').hide();
                // 当输入结果是地铁站时，单独做判断
                var searchStationid = '', tipsPanel = $('#panel_xfmap_E01_46'), tipsA = tipsPanel.find('a');
                for(var i = 0, l = tipsA.length;i < l;i++){
                    var info = $(tipsA[i]);
                    if (info.attr('data-key') === keywordBtn.val() && info.attr('data-stationid')) {
                        searchStationid = info.attr('data-stationid');
                    }
                }
                if (searchStationid) {
                    $('#subwayRight').find('li[data-id=' + searchStationid + ']').find('a').trigger('click');
                    keywordBtn.val('').blur();
                    return;
                }
                var keyword_value = $.trim(keywordBtn.val());
                if (keyword_value === vars.goldAdTitle && vars.goldAdTitle) {
                    SFMap.windowOpen(vars.goldAdUrl, '_blank');
                } else {
                    SFUtil.searchType = 'fromSearchBtn';
                    SFMap.clickToSearchStartTime = new Date().getTime();
                    SFMap.clickComplete($(this), 'keyword');
                    refreshHistory();
                }
            });
            keywordBtn.keydown(function (e) {
                var $this = $(this), tipsPanel = $('#panel_xfmap_E01_46'), tipsA = tipsPanel.find('a');
                SFUtil.searchType = 'fromSearchBtn';
                SFMap.clickToSearchStartTime = new Date().getTime();
                var params = SFMap.params;
                var event = e || window.event;
                if (event.keyCode === 13) {
                    if (event && event.preventDefault) {
                        event.preventDefault();
                    } else {
                        // 注意加window
                        window.event.returnValue = false;
                    }
                    if ($this.attr('data-href')) {
                        // 输入框设为默认
                        $this.val('').trigger('blur');
                        tipsPanel.hide();
                        window.open($this.attr('data-href'));
                    } else {
                        tipsPanel.hide();
                        var activeTip = tipsPanel.find('li[class=hover]').find('a'), stationid = activeTip.data('stationid'), lineid = activeTip.data('lineid');
                        // 当输入结果是地铁站时，单独做判断
                        var searchStationid = '';
                        for(var i = 0, l = tipsA.length;i < l;i++){
                            var info = $(tipsA[i]);
                            if (info.attr('data-key') === keywordBtn.val() && info.attr('data-stationid')) {
                                searchStationid = info.attr('data-stationid');
                            }
                        }
                        if (searchStationid) {
                            $('#subwayRight').find('li[data-id=' + searchStationid + ']').find('a').trigger('click');
                            keywordBtn.val('').blur();
                            return;
                        }
                        // 若有其他任何条件则无关键字
                        if (activeTip.length && (params.strDistrict || params.strComArea || params.housetag || params.railway || params.railway_station)) {
                            params.strKeyword = '';
                            (params.strDistrict || params.strComArea) && SFMap.clearOtherOption('district');
                            (stationid || lineid) && SFMap.clearOtherOption('subway');
                            // 输入框设为默认
                            $this.val('').trigger('blur');
                        } else {
                            // 关键字颜色
                            $this.val() && $this.css('color', '#000');
                            SFMap.clearOtherOption('keyword');
                        }
                        // 地铁站 地铁线单独处理
                        if (stationid || lineid) {
                            (lineid ? $('#subwayLeft').find('a[data-id=' + lineid + ']')
                                : $('#subwayRight').find('li[data-id=' + stationid + ']').find('a')).trigger('click');
                        } else {
                            SFMap.searchResult(null, 16, false, $this.attr('data-x'), $this.attr('data-y'));
                        }
                        refreshHistory();
                    }
                }
            });

            purposesWrap.on('click', 'li a', function () {
                SFMap.clickComplete($(this), 'purpose');
            });
            priceWrap.on('click', 'li a', function () {
                SFMap.clickComplete($(this), 'price');
            });
            roomWrap.on('click', 'li a', function () {
                SFMap.clickComplete($(this), 'room');
            });

            $('#xhx').on('click', 'a', function () {
                SFMap.clearAllParams();
                SFMap.clickComplete($(this), 'housetag');
                return false;
            });
            sellWrap.on('click', ' a', function () {
                SFMap.clickComplete($(this), 'sale');
            });
            roundWrap.on('click', 'a', function () {
                SFMap.clickComplete($(this), 'round');
            });
            kaipanWrap.on('click', 'a', function () {
                SFMap.clickComplete($(this), 'kaipan');
            });
            sortWrap.on('click', 'a', function () {
                SFMap.clickComplete($(this), 'sort');
            });
            $('#bykp').on('click', 'a', function () {
                SFMap.clearAllParams();
                SFMap.clickComplete($(this), 'kaipan');
                return false;
            });
            category.on('click', 'input', function () {
                SFMap.clickComplete($(this), 'category');
            });
            // 学区找房
            schoolDistContent.on('click', 'a', function () {
                SFMap.clickComplete($(this), 'schoolDist');
            });
            $('#allHouseInfo,#dazheyouhui,#isyouhui_act,#orginal_sort').on('click', 'a', function () {
                SFMap.clickComplete($(this), 'isyouhui');
                return false;
            });
            $('#dzlp,#rmlp').on('click', 'a', function () {
                SFMap.clearAllParams();
                SFMap.clickComplete($(this), 'isyouhui');
                return false;
            });
            $('#xfmap_D02_02').on('click', 'li a', function () {

                if ($(this).attr('href').indexOf('javascript') > -1) {
                    SFMap.searchByTips($(this).html());
                    return false;
                }
            });
            $('div#search_result').on('mouseover mouseout', 'li[id^=xfmap]', function (e) {
                var ele = $(this),
                    div = ele.children('div'),
                    id = div.attr('id'),
                    newCode = id.replace('result_hs_', '');
                if (e.type == 'mouseover') {
                    this.className = 'seajgtd active bj';
                    SFMap.mouseoverTheTip(newCode);
                } else {
                    this.className = 'seajgtd';
                    SFMap.mouseoutTheTip(newCode);
                }
            });
            /* 登陆框相关点击操作 */
            $('#loginBox_close').click(function () {
                $('#loginbox,#layer').hide();
            });
            /* 用户名输入框操作 */
            $('#username').focus(function () {
                this.value = '';
            }).blur(function () {
                if ($.trim(this.value) == '') {
                    this.value = '\u624b\u673a\u53f7\u002f\u90ae\u7bb1\u002f\u7528\u6237\u540d';
                }
            });
            $('#nhlogin_tx').focus(function () {
                $(this).hide();
                $('#password').show().focus();
            });

            /* 密码框操作 */
            $('#password').focus(function () {
                if (this.value == this.defaultValue) {
                    this.value = '';
                    this.select();
                    this.style.color = '#333';
                }
            }).blur(function () {
                var objs = $('#nhlogin_tx');
                var password = $('#password');
                if (password.val() == '') {
                    objs.show();
                    password.hide();
                } else {
                    objs.hide();
                    password.show();
                }
            });

            /* 校验码操作 */
            $('#verify').focus(function () {
                this.value = '';
            }).blur(function () {
                if ($.trim(this.value) == '') {
                    this.value = '\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801';
                }
            });
            $('a.nhlogin_a').click(function () {
                $('#randImage').attr('src', '?c=user&a=authCode&random=' + Math.random());
            });
            $('#submit_btn').click(function () {
                SFUtil.login('xf');
            });
        }
    };
});define("modules/xf/suggest",["jquery"],function(e){"use strict";var t=seajs.data.vars,a=t.city,s=e("jquery");return{suggest_selected:0,inputDom:s("#xfmap_E01_46"),suggest_url:t.ajaxfilePath,suggest_tip:'<span class="tishiyu">\u8f93\u5165\u4e2d\u6587/\u62fc\u97f3/\u62fc\u97f3\u9996\u5b57\u6bcd\u6216\u7528\u4e0a\u4e0b\u952e\u9009\u62e9</span>',createPanel:function(){var e=this;if(!e.panel){var t=document.createElement("ul");t.id="panel_"+e.inputDom.attr("id"),t.className="seaTip dis",t.innerHTML=this.suggest_tip,t.onmouseover=function(){this.style.display="block"},t.onmouseout=function(){this.style.display="none"},s("#suggestId").append(t),s(t).on("click","li",function(){var t=s(this);t.find("a[href]").length?(e.inputDom.val("").trigger("blur"),s(e.panel).hide()):e.matchPanel(this)}),e.panel=t}return e.panel},init:function(){var e=this;e.inputDom.on("focus",function(t){e.showsuggest(t),e.suggest(t)}).on("keyup",function(t){e.suggest(t)}).on("keydown",function(t){var a=t.keyCode;38===a&&s(e.panel).is(":visible")&&t.preventDefault()}).on("blur",function(t){e.closesuggest(t)}).on("click",function(t){e.suggest(t)})},showMenu:function(e){var t=s("#"+e),a=s("#panel_"+e);t.length&&a.length&&(a.find("li").length?a.show():a.hide())},closesuggest:function(e){var t=e.target;t.value||(t.value=t.defaultValue,t.style.color="#999",s("#searchIptAd").show())},showsuggest:function(e){var t=s("#search_ad"),a=s("#searchIptAd"),i=e.target;this.panel&&(this.panel.style.display="none"),i.value===i.defaultValue&&(i.value="",i.style.color="#000",a.hide()),""===i.value&&t.find("li").length&&t.show()},suggest:function(t){var i=s("#search_ad"),l=t.target,r=t.keyCode,n=this,c=n.createPanel();if(/^\s*$/.test(l.value)?(c.style.display="none",i.find("li").length&&i.show()):(s(c).find("li").length&&s(c).show(),s("#search_ad").hide()),13==r)c.style.display="none";else if(!r||37>r||r>40){this.suggest_selected=0;var d="get",o={a:"getSearchTips",city:a,q:l.value};n.keywords=o.q;var u=function(e){var t,a=e.searchTips,i='<li id="xfmap_D02_iii"><a href="hhh" data-key="xxx" target="ttt" data-district="ddd"  data-comarea="ccc" data-stationid="sss"  data-lineid="rrr" class="clearfix"><div style="">xxx<span>ddd</span><span>ccc</span></div>qqq</a></li>';if(a&&a.length){var l=a,r=n.suggest_tip;s(c).html(r);for(var d="",o=14,u="\u6709\u5173\u7684\u8d2d\u623f\u6280\u5de7",h=0,g=l.length;g>h;h++){var p=l[h],f=l[h].name;if(t=i,f&&"object"!=typeof f){"l"===p.brand&&(f+='<span class="cl_f33" style="padding:0 5px">-</span><span class="cl_f33">\u54c1\u724c\u76f4\u9500</span>'),f.indexOf(u)>-1&&(f=f.replace(new RegExp(u,"g"),""),f+=u),t=t.replace(/xxx/g,f),t=t.replace(/sss/g,p.stationid||""),t=t.replace(/rrr/g,p.lineid||""),"channelsales"===p.type?(t=t.replace('style=""','style="color:#cf0000"'),t=t.replace("hhh",p.houseurl).replace("ttt","_blank"),t=t.replace("iii","28")):(t=t.replace("iii",o++),t=p.houseurl?p.allnum&&p.allnum>0&&(!p.type||"zhishi"!==p.type)?t.replace("hhh",p.houseurl).replace("ttt","_self"):t.replace("hhh",p.houseurl).replace("ttt","_blank"):t.replace('href="hhh"',"")),t=t.replace(/ccc/g,p.comarea||""),t=t.replace(/ddd/g,p.district||"");var m="";p.allnum&&p.allnum>0&&(m="<span>qqq\u6761\u623f\u6e90</span>".replace("qqq",p.allnum),"zhishi"===p.type&&(m=m.replace("\u623f\u6e90",""))),t=t.replace("qqq",m),d+=t}}d&&s(c).append(d)}else s(c).find("li").remove();n.inputDom.attr({"data-href":"","data-x":"","data-y":""}),n.showMenu(n.inputDom.attr("id"))},h=e("modules/SFUtil");n.ajax&&n.ajax.abort(),n.ajax=h.ajax(this.suggest_url,d,o,u)}else if(c&&"none"!==c.style.display){var g=c.childNodes,p=g.length;if(38===r||40===r){38===r&&(this.suggest_selected>1?this.suggest_selected--:this.suggest_selected=p),40===r&&(this.suggest_selected<p?this.suggest_selected+=0==this.suggest_selected?2:1:this.suggest_selected-1===p?this.suggest_selected=2:this.suggest_selected++);for(var f=1;p>f;f++)g[f].className=f===this.suggest_selected-1?"hover":"";if((1===this.suggest_selected||0===this.suggest_selected||this.suggest_selected>p)&&(s(l).val(n.keywords),n.inputDom.css("color","#000")),g[this.suggest_selected-1]){var m=g[this.suggest_selected-1].childNodes;n.matchPanel(s(m).parent(),!1,!0)}}}},matchPanel:function(a,i,l){var r=this,n=s(a).find("a"),c=e("modules/xf/SFMap"),d=n[1]||n[0],o=s(d),u=o.attr("href")||"";if(r.inputDom.attr({"data-href":"","data-x":"","data-y":""}),!o.length)return!1;if(r.inputDom.val(o.attr("data-key")),!l&&s(r.panel).hide(),!u||u.indexOf("javascript")>-1){var h=o.data("key"),g=o.data("district"),p=o.data("comarea"),f=c.config.houseTag;if(c.clearAllParams(),h===g||h===p)t.housetag="",h==p?(t.strComArea=p,t.strDistrict=g):h==g&&(t.strDistrict=g,t.strComArea="");else{var m="";s.inArray(h,f)>-1&&(m=h),""!==m?(t.strDistrict=t.strComArea="",t.housetag=m):t.strDistrict=t.strComArea=t.housetag=""}t.strKeyword=h,r.inputDom.css("color","#000");var v=o.data("stationid"),y=o.data("lineid");if(v||y?(v&&(t.railway_station=v),y&&(t.railway=y)):t.railway_station=t.railway="",c.initParams(!0),!i){var _="",x="";if(c.config.leveledMenu.district&&c.config.leveledMenu.district.data.length)for(var D=c.config.leveledMenu.district.data,w=!1,q=0,k=D.length;k>q&&!w;q++){var A=D[q],b=A.area;A.name!==t.strDistrict&&A.name!==t.strComArea||(_=A.x,x=A.y,w=!0);for(var j=0,C=b.length;C>j;j++){var P=b[j];P.name!==t.strDistrict&&P.name!==t.strComArea||(_=P.x,x=P.y,w=!0)}}r.inputDom.attr("data-x",_),r.inputDom.attr("data-y",x),l||(t.strDistrict||t.strComArea||t.housetag||t.railway||t.railway_station?(t.strKeyword="",t.goldAdTitle?r.inputDom.val(t.goldAdTitle):r.inputDom.val(""),r.inputDom.css("color","rgb(153, 153, 153)")):r.inputDom.css("color","#000"),v||y?(y?s("#subwayLeft").find("a[data-id="+y+"]"):s("#subwayRight").find("li[data-id="+v+"]").find("a")).trigger("click"):c.searchResult(null,16,!1,_,x))}}else r.inputDom.attr("data-href",u)}}});