var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var j=void 0,k=!0,m=null,n=!1,aa=encodeURIComponent,r=window,ba=Object,s=String,t=document,v="push",w="test",ca="exec",x="replace",da="getElementById",ea="concat",y="indexOf",ga="readyState",z="createElement",B="setAttribute",ha="getTime",ia="getElementsByTagName",C="length",E="location",F="style",ja="call",G="getAttribute",I="href",J="apply",ka="parentNode",K="join",la="toLowerCase";var L=r,M=t,ma=L[E],na=function(){},oa=/\[native code\]/,N=function(a,b,c){return a[b]=a[b]||c},pa=function(a){for(var b=0;b<this[C];b++)if(this[b]===a)return b;return-1},qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=function(a){return s(a)[x](qa,"&amp;")[x](ra,"&lt;")[x](sa,"&gt;")[x](ta,"&quot;")[x](ua,"&#39;")},R=function(){var a;if((a=ba.create)&&oa[w](a))a=a(m);else{a={};for(var b in a)a[b]=j}return a},S=function(a,b){return ba.prototype.hasOwnProperty[ja](a,b)},T=function(a,b){var a=a||{},c;for(c in a)S(a,
c)&&(b[c]=a[c])},V=N(L,"gapi",{});var wa=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g"),b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[ca](a)||b[ca](a)))try{c=decodeURIComponent(a[2])}catch(d){}return c},xa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,ya=function(a){var b=[];if(a)for(var c in a)S(a,c)&&a[c]!=m&&b[v](aa(c)+"="+aa(a[c]));return b},za=function(a,b,c){var a=a.match(xa),e=R();e.n=a[1];e.d=a[3]?[a[3]]:[];e.c=a[5]?[a[5]]:[];e.d[v][J](e.d,ya(b));e.c[v][J](e.c,ya(c));return e.n+(0<e.d[C]?"?"+e.d[K]("&"):"")+
(0<e.c[C]?"#"+e.c[K]("&"):"")};var Aa=function(a,b,c){if(L[b+"EventListener"])L[b+"EventListener"]("message",a,n);else if(L[c+"tachEvent"])L[c+"tachEvent"]("onmessage",a)};var W;W=N(L,"___jsl",R());N(W,"I",0);N(W,"hel",10);var Ba=function(a){return!W.dpo?wa(a,"jsh",W.h):W.h},Da=function(a){return N(N(W,"H",R()),a,R())};var Ea=N(W,"perf",R()),Fa=N(Ea,"g",R()),Ga=N(Ea,"i",R());N(Ea,"r",[]);R();R();var Ha=function(a,b,c){var e=Ea.r;"function"===typeof e?e(a,b,c):e[v]([a,b,c])},X=function(a,b,c){Fa[a]=!b&&Fa[a]||c||(new Date)[ha]();Ha(a)},Ja=function(a,b,c){b&&0<b[C]&&(b=Ia(b),c&&0<c[C]&&(b+="___"+Ia(c)),c=b,b=N(Ga,"_p",R()),N(b,c,R())[a]=(new Date)[ha](),Ha(a,"_p",c))},Ia=function(a){return a[K]("__")[x](/\./g,"_")[x](/\-/g,"_")[x](/\,/g,"_")};var Ka=R(),La=[],Y;Y={b:"callback",l:"sync",j:"config",e:"_c",g:"h",o:"platform",i:"jsl",TIMEOUT:"timeout",k:"ontimeout"};La[v]([Y.i,function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?W[b]=N(W,b,[])[ea](c):N(W,b,c)}if(a=a.u)b=N(W,"us",[]),b[v](a),(c=/^https:(.*)$/[ca](a))&&b[v]("http:"+c[1]),N(W,"u",a)}]);var Ma=decodeURI("%73cript");Ka.m=function(a){var b=W.ms||"https://apis.google.com",a=a[0];if(!a||0<=a[y](".."))throw"Bad hint";return b+"/"+a[x](/^\//,"")};
var Na=function(a){return a[K](",")[x](/\./g,"_")[x](/-/g,"_")},Oa=function(a,b){for(var c=[],e=0;e<a[C];++e){var d=a[e];d&&0>pa[ja](b,d)&&c[v](d)}return c},Pa=/[@"'<>#\?&%]/,Qa=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,Ra=/\/cb=/g,Sa=function(a){var b=M[z](Ma);b[B]("src",a);b.async="true";a=M[ia](Ma)[0];a[ka].insertBefore(b,a)},Ua=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[Y.b]=b);var e=c,d=e&&e[Y.e];if(d)for(var f=0;f<La[C];f++){var g=La[f][0],i=La[f][1];i&&S(d,g)&&i(d[g],
a,e)}if(!(e=c[Y.g]))if(e=Ba(ma[I]),!e)throw"Bad hint";var h=e,p=c[Y.b],l=c[Y.j],d=c[Y.TIMEOUT],u=c[Y.k],q=m,D=n;if(d&&!u||!d&&u)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=N(Da(h),"r",[]).sort(),A=N(Da(h),"L",[]).sort(),U=[][ea](e),fa=function(a,b){if(D)return 0;L.clearTimeout(q);A[v][J](A,H);var c=((V||{}).config||{}).update;c?c(l):l&&N(W,"cu",[])[v](l);if(b){Ja("me0",a,U);try{Ta(function(){var a;a=h===Ba(ma[I])?N(V,"_",R()):R();a=N(Da(h),"_",a);b(a)})}finally{Ja("me1",
a,U)}}p&&p();return 1};0<d&&(q=L.setTimeout(function(){D=k;u()},d));if(a){d=a.split(":").sort();f=[];g=j;for(i=0;i<d[C];i++){var O=d[i];O!=g&&f[v](O);g=O}d=f}else d=[];var H=Oa(d,A);if(!H[C])return fa(H);var H=Oa(d,e),P=N(W,"CP",[]),Q=P[C];P[Q]=function(a){if(!a)return 0;Ja("ml1",H,U);var b=function(){P[Q]=m;return fa(H,a)};if(0<Q&&P[Q-1])P[Q]=b;else for(b();(b=P[++Q])&&b(););};if(!H[C])return P[Q](na);var Ca="loaded_"+W.I++;V[Ca]=function(a){P[Q](a);V[Ca]=m};d=h.split(";");d=(f=Ka[d.shift()])&&f(d);
if(!d)throw"Bad hint:"+h;f=d=d[x]("__features__",Na(H))[x](/\/$/,"")+(e[C]?"/ed=1/exm="+Na(e):"")+("/cb=gapi."+Ca);g=f.match(Ra);if(!g||!(1===g[C]&&Qa[w](f)&&!Pa[w](f)))throw"Bad URL "+d;e[v][J](e,H);Ja("ml0",H,U);c[Y.l]||L.___gapisync?(c=d,"loading"!=M[ga]?Sa(c):M.write("<"+Ma+' src="'+encodeURI(c)+'"></'+Ma+">")):Sa(d)};var Ta=function(a){if(W.hee&&0<W.hel)try{return a()}catch(b){W.hel--,Ua("debug_error",function(){r.___jsl.hefn(b)})}else return a()};V.load=function(a,b){return Ta(function(){return Ua(a,b)})};var Va=function(){return r.___jsl=r.___jsl||{}},Wa=function(a){var b=Va();b[a]=b[a]||[];return b[a]},Z=function(a){var b=Va();b.cfg=!a&&b.cfg||{};return b.cfg},Xa=function(a){return"object"===typeof a&&/\[native code\]/[w](a[v])},Ya=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Xa(a[c])&&!Xa(b[c])?Ya(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Xa(b[c])?[]:{},Ya(a[c],b[c])):a[c]=b[c])},$=function(a){if(!a)return Z();for(var a=
a.split("/"),b=Z(),c=0,e=a[C];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[C]&&b!==j?b:j};var Za=function(a){var b=t[z]("div"),c=t[z]("a");c.href=a;b.appendChild(c);b.innerHTML=b.innerHTML;return b.firstChild[I]},$a=function(a){for(var a=a||"canonical",b=t[ia]("link"),c=0,e=b[C];c<e;c++){var d=b[c],f=d[G]("rel");if(f&&f[la]()==a&&(d=d[G]("href")))if(d=Za(d))return d}return r[E][I]};var ab={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},bb=0;var cb=/:([a-zA-Z_]+):/g,db={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},eb="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),fb=m,gb=N(W,"WI",R()),hb=function(){var a=$("googleapis.config/sessionIndex");a==m&&(a=r.__X_GOOG_AUTHUSER);if(a==m){var b=r.google;b&&(a=b.authuser)}a==m&&(a=j,a==m&&(a=r[E][I]),a=a?wa(a,"authuser")||m:m);return a==m?m:s(a)},ib=function(a,b){if(!fb){var c=$("iframes/:socialhost:"),e=hb()||"0",d=hb();fb={socialhost:c,
session_index:e,session_prefix:d!==j&&d!==m&&""!==d?"u/"+d+"/":""}}return fb[b]||""},lb=function(a,b,c,e){if(!b[ka])return m;if(!e){for(var e=R(),d=0!=b.nodeName[la]()[y]("g:"),f=0,g=b.attributes[C];f<g;f++){var i=b.attributes[f],h=i.name,i=i.value;0<=pa[ja](jb,h)||(d&&0!=h[y]("data-")||"null"===i)||(d&&(h=h.substr(5)),e[h[la]()]=i)}d=b[F];(f=kb(d&&d.height))&&(e.height=s(f));(d=kb(d&&d.width))&&(e.width=s(d))}d=a;"plus"==a&&e.action&&(d=a+"_"+e.action);(d=$("iframes/"+d+"/url"))||(d=":socialhost:/_/widget/render/"+
a);d=d[x](cb,ib);f={};T(e,f);f.hl=$("lang")||"en-US";f.origin=r[E].origin||r[E].protocol+"//"+r[E].host;"plus"===a&&(g=f[I]?Za(f[I]):$a(e.action?m:"publisher"),f.url=g,delete f[I]);"plusone"===a&&(f.url=e[I]?Za(e[I]):$a(),g=e.db,h=$(),g==m&&h&&(g=h.db,g==m&&(g=h.gwidget&&h.gwidget.db)),f.db=g||j,g=e.ecp,h=$(),g==m&&h&&(g=h.ecp,g==m&&(g=h.gwidget&&h.gwidget.ecp)),f.ecp=g||j,delete f[I]);f.hl=$("lang")||"en-US";W.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;g=$("inline/css");"undefined"!==
typeof g&&(0<c&&g>=c)&&(f.ic="1");var g=/^#|^fr-/,c={},p;for(p in f)S(f,p)&&g[w](p)&&(c[p[x](g,"")]=f[p],delete f[p]);p=[][ea](eb);g=$("iframes/"+a+"/methods");"object"===typeof g&&oa[w](g[v])&&(p=p[ea](g));for(var l in e)if(S(e,l)&&/^on/[w](l)&&("plus"!=a||"onconnect"!=l))p[v](l),delete f[l];c._methods=p[K](",");d=za(d,f,c);e.rd?l=b:(l=t[z]("div"),b[B]("data-gapistub",k),l[F].cssText="position:absolute;width:100px;left:-10000px;",b[ka].insertBefore(l,b));l.id||(b=l,N(gb,a,0),p="___"+a+"_"+gb[a]++,
b.id=p);b=R();b[">type"]=a;T(e,b);l[B]("data-gwattr",ya(b)[K](":"));var u;p=d;a=l;b={attributes:db};l=a.ownerDocument;f=0;do c=b.id||["I",bb++,"_",(new Date)[ha]()][K]("");while(l[da](c)&&5>++f);if(!(5>f))throw Error("Error creating iframe id");g=l[E][I];f=R();(h=wa(g,"_bsh",W.bsh))&&(f._bsh=h);(g=Ba(g))&&(f.jsh=g);var q,g=R();g.id=c;g.parent=l[E].protocol+"//"+l[E].host;b.hintInFragment?T(f,g):q=f;p=za(p,q,g);q=R();T(ab,q);q.name=q.id=c;T(b.attributes,q);q.src=p;try{u=l[z]('<iframe frameborder="'+
va(q.frameborder)+'" scrolling="'+va(q.scrolling)+'" name="'+va(q.name)+'"/>')}catch(D){u=l[z]("iframe")}for(var A in q)b=q[A],"style"==A&&"object"===typeof b?T(b,u[F]):u[B](A,q[A]);for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(u);q.allowtransparency&&(u.allowTransparency=k);A={};A.userParams=e;A.url=d;A.iframeNode=u;A.id=u[G]("id");return A},jb=["style","data-gapiscan"],kb=function(a){var b=j;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},mb=function(){};var nb,ob=/(?:^|\s)g-((\S)*)(?:$|\s)/,pb=R(),qb=N(W,"FW",[]),sb=function(a,b){rb(j,n,a,b)},rb=function(a,b,c,e){X("ps0",k);var c=("string"===typeof c?t[da](c):c)||M,d,f=M.documentMode;if(c.querySelectorAll&&(!f||8<f)){if(e)d=[e];else if(oa[w](ba.keys))d=ba.keys(pb);else{f=[];for(d in pb)S(pb,d)&&f[v](d);d=f}for(var f=[],g=0;g<d[C];g++){var i=d[g];f[v](".g-"+i,"g\\:"+i)}d=c.querySelectorAll(f[K](","))}else d=c[ia]("*");c=R();for(f=0;f<d[C];f++){g=d[f];var h=g,i=e,p=h.nodeName[la](),l=j;h[G]("data-gapiscan")?
i=m:(0==p[y]("g:")?l=p.substr(2):(h=(h=s(h.className||h[G]("class")))&&ob[ca](h))&&(l=h[1]),i=l&&pb[l]&&(!i||l===i)?l:m);i&&(g[B]("data-gapiscan",k),N(c,i,[])[v](g))}if(b)for(var u in c){b=c[u];for(e=0;e<b[C];e++)b[e][B]("data-onload",k)}for(var q in c)qb[v](q);X("ps1",k);u=qb[K](":");V.load(u,a);if(tb(nb||{}))for(var D in c)ub(D);else{a=[];for(D in c){q=c[D];b=0;for(e=q[C];b<e;b++)if(d=lb(D,q[b],e))(f=d.id)&&a[v](f),ub(D,d)}vb(u,a)}},wb=function(a){var b=N(V,a,{});b.go||(b.go=function(b){return sb(b,
a)},b.render=function(b,e){var d=e||{};d.type=a;var f=d,d=f.type;delete f.type;if(!d||!pb[d])throw Error("Unsupported widget "+d||"");var g=("string"===typeof b?t[da](b):b)||j;if(g&&1===g.nodeType){var i={},h;for(h in f)S(f,h)&&(i[h[la]()]=f[h]);f=i;f.rd=1;h=lb(d,g,0,f);ub(d,h);(h=h.id)&&vb(d,[h])}})};var ub=function(a,b){var c=N(W,"watt",R())[a];b&&c?c(b):V.load(a,function(){var c=N(W,"watt",R())[a],d=b&&b.iframeNode;!d||!c?(0,V[a].go)(d&&d[ka]):c(b)})},tb=function(){return n},vb=function(){};N(V,"platform",{}).go=sb;tb=function(a){for(var b=[Y.e,Y.i,Y.g],c=0;c<b[C]&&a;c++)a=a[b[c]];b=Ba(ma[I]);return!a||0!=a[y]("n;")&&0!=b[y]("n;")&&a!==b};vb=function(a,b){var c=function(){Aa(e,"remove","de")},e=function(e){var g=e.data,i=e.origin;if(xb(g,b)){var h=d;d=n;h&&X("rqe");Ua(a,function(){h&&X("rqd");c();for(var a=N(W,"RPMQ",[]),b=0;b<a[C];b++)a[b]({data:g,origin:i})})}};if(!(0===b[C]||!r.JSON||!r.JSON.parse)){var d=k;Aa(e,"add","at");Ua(a,c)}};
La[v]([Y.o,function(a,b,c){nb=c;b&&qb[v](b);for(b=0;b<a[C];b++)pb[a[b]]=1;for(b=0;b<a[C];b++)wb(a[b]);if(b=r.__GOOGLEAPIS)b.googleapis&&!b["googleapis.config"]&&(b["googleapis.config"]=b.googleapis),N(W,"ci",[])[v](b),r.__GOOGLEAPIS=j;Z(k);var e=r.___gcfg,b=Wa("cu");if(e&&e!==r.___gu){var d={};Ya(d,e);b[v](d);r.___gu=e}var e=Wa("cu"),f=t.scripts||t[ia]("script")||[],d=[],g=[],i=Va().u;i&&g[v](i);Va().us&&g[v][J](g,Va().us);for(i=0;i<f[C];++i)for(var h=f[i],p=0;p<g[C];++p)h.src&&0==h.src[y](g[p])&&
d[v](h);0==d[C]&&f[f[C]-1].src&&d[v](f[f[C]-1]);for(f=0;f<d[C];++f)if(!d[f][G]("gapi_processed")){d[f][B]("gapi_processed",k);(g=d[f])?(i=g.nodeType,g=3==i||4==i?g.nodeValue:g.textContent||g.innerText||g.innerHTML||""):g=j;if(g){for(;0==g.charCodeAt(g[C]-1);)g=g.substring(0,g[C]-1);i=j;try{i=(new Function("return ("+g+"\n)"))()}catch(l){}if("object"===typeof i)g=i;else{try{i=(new Function("return ({"+g+"\n})"))()}catch(u){}g="object"===typeof i?i:{}}}else g=j;g&&e[v](g)}f=Wa("cd");e=0;for(d=f[C];e<
d;++e)Ya(Z(),f[e]);f=Wa("ci");e=0;for(d=f[C];e<d;++e)Ya(Z(),f[e]);e=0;for(d=b[C];e<d;++e)Ya(Z(),b[e]);if("explicit"!=$("parsetags")){b=N(W,"sws",[]);b[v][J](b,a);var q;if(c){var D=c[Y.b];D&&(q=function(){L.setTimeout(D,0)},delete c[Y.b])}if("complete"!==M[ga])try{rb(j,k)}catch(A){}var U=function(){rb(q,k)};if("complete"===M[ga])U();else{var fa=n,O=function(){if(!fa)return fa=k,U[J](this,arguments)};L.addEventListener?(L.addEventListener("load",O,n),L.addEventListener("DOMContentLoaded",O,n)):L.attachEvent&&
(L.attachEvent("onreadystatechange",function(){"complete"===M[ga]&&O[J](this,arguments)}),L.attachEvent("onload",O))}}}]);var yb=/^\{h\:'/,zb=/^!_/,xb=function(a,b){a=s(a);if(yb[w](a))return k;a=a[x](zb,"");if(!/^\{/[w](a))return n;try{var c=r.JSON.parse(a)}catch(e){return n}if(!c)return n;var d=c.f;return c.s&&d&&-1!=pa[ja](b,d)?("_renderstart"===c.s&&(c=c.a&&c.a[1],d=M[da](d),c&&d&&mb(d[ka],d,c)),k):n};mb=function(a,b,c){if(c.width&&c.height){a[F].cssText="";var e=c.width,c=c.height,d=a[F];d.textIndent="0";d.margin="0";d.padding="0";d.background="transparent";d.borderStyle="none";d.cssFloat="none";d.styleFloat="none";d.lineHeight="normal";d.fontSize="1px";d.verticalAlign="baseline";a[F].display="inline-block";a=b[F];a.position="static";a.left=0;a.top=0;a.visibility="visible";e&&(a.width=e+"px");c&&(a.height=c+"px");b["data-csi-wdt"]=(new Date)[ha]()}};X("bs0",k,r.gapi._bs);X("bs1",k);delete r.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"platform":["plusone","plus","additnow","card"],"jsl":{"u":"https://apis.google.com/js/plusone.js","dpo":false,"hee":true,"ci":{"services":{},"inline":{"css":1},"lexps":[34,69,71,65,36,40,74,75,15,45,17,51,61,60,30],"oauth-flow":{},"report":{},"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv=m"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv=m"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv=m"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv=m"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","url":"","size":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv=m"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&bsv=m"}},"isPlusUser":false,"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt=j/ver=juBCau63HTY.en_US./sv=1/am=!wIVbqfszG0CYZd2EOQ/d=1/rs=AItRSTMeOAycvmKJGhbUWPPsRK5URBbTpA","fp":"69b2d6da328e3b364ee913112a7221a0a8533c21"},"fp":"69b2d6da328e3b364ee913112a7221a0a8533c21"}});