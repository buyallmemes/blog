import{$ as g1,$a as s2,$b as f5,A as z2,Aa as Pe,Ab as g0,B as Le,Ba as Oe,Bb as b0,C as n0,Ca as Be,Cb as z0,D as r2,Da as Ue,Db as B4,E as we,Ea as je,Eb as U4,F as B2,Fa as qe,Fb as y1,G as i2,Ga as Ge,Gb as S1,H as r0,Ha as y2,Hb as p1,I as xe,Ia as I4,Ib as W2,J as Se,Ja as q,Jb as e5,K as A4,Ka as q2,Kb as t5,L as N4,La as f0,Lb as a5,M as v1,Ma as o2,Mb as c5,N as C2,Na as w3,Nb as n5,O as e1,Oa as c1,Ob as C0,P as _,Pa as R4,Pb as r5,Q as U2,Qa as x3,Qb as i5,R as V,Ra as G2,Rb as o5,S as Z,Sa as $e,Sb as s5,T as Ae,Ta as u0,Tb as j4,U as S,Ua as B,Ub as l1,V as k,Va as Y,Vb as N3,W as d,Wa as G,Wb as x2,X as Z1,Xa as d0,Xb as D,Y as Ne,Ya as F4,Yb as t1,Z as ke,Za as $2,Zb as k3,_ as T1,_a as We,_b as l5,a as H,aa as M2,ab as $,ac as u5,b as J,ba as H2,bb as m0,bc as n1,c as Ce,ca as i0,cb as h0,cc as D3,d as Ya,da as De,db as P4,dc as d5,e as Xa,ea as m1,eb as L2,f as P2,fa as E,fb as _1,g as Me,ga as k4,gb as S3,h as He,ha as o0,hb as A3,i as b2,ia as D4,ib as Ze,j as a0,ja as T4,jb as Ye,k as c0,ka as Te,kb as Xe,l as i1,la as _e,lb as X,m as d1,ma as Ee,mb as I,n as $1,na as y3,nb as U,o as H1,oa as _4,ob as Q,p as A,pa as h1,pb as p0,q as H3,qa as Ie,qb as v0,r as Ve,ra as s0,rb as O4,s as ye,sa as Re,sb as Ke,t as R,ta as Y1,tb as Je,u as V3,ua as E4,ub as w2,v as V1,va as L3,vb as Qe,w as x4,wa as Fe,wb as o1,x as S4,xa as l0,xb as s1,y as W1,ya as V2,yb as E1,z as O2,za as j2,zb as b1}from"./chunk-44VX47B5.js";var Ha=Ya((Cp,Z6)=>{"use strict";var $o=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var w=function(e){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,a={},n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function m(f){return f instanceof r?new r(f.type,m(f.content),f.alias):Array.isArray(f)?f.map(m):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++t}),m.__id},clone:function m(f,h){h=h||{};var p,v;switch(n.util.type(f)){case"Object":if(v=n.util.objId(f),h[v])return h[v];p={},h[v]=p;for(var C in f)f.hasOwnProperty(C)&&(p[C]=m(f[C],h));return p;case"Array":return v=n.util.objId(f),h[v]?h[v]:(p=[],h[v]=p,f.forEach(function(N,L){p[L]=m(N,h)}),p);default:return f}},getLanguage:function(m){for(;m;){var f=c.exec(m.className);if(f)return f[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,f){m.className=m.className.replace(RegExp(c,"gi"),""),m.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(p){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(p.stack)||[])[1];if(m){var f=document.getElementsByTagName("script");for(var h in f)if(f[h].src==m)return f[h]}return null}},isActive:function(m,f,h){for(var p="no-"+f;m;){var v=m.classList;if(v.contains(f))return!0;if(v.contains(p))return!1;m=m.parentElement}return!!h}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(m,f){var h=n.util.clone(n.languages[m]);for(var p in f)h[p]=f[p];return h},insertBefore:function(m,f,h,p){p=p||n.languages;var v=p[m],C={};for(var N in v)if(v.hasOwnProperty(N)){if(N==f)for(var L in h)h.hasOwnProperty(L)&&(C[L]=h[L]);h.hasOwnProperty(N)||(C[N]=v[N])}var P=p[m];return p[m]=C,n.languages.DFS(n.languages,function(W,c2){c2===P&&W!=m&&(this[W]=C)}),C},DFS:function m(f,h,p,v){v=v||{};var C=n.util.objId;for(var N in f)if(f.hasOwnProperty(N)){h.call(f,N,f[N],p||N);var L=f[N],P=n.util.type(L);P==="Object"&&!v[C(L)]?(v[C(L)]=!0,m(L,h,null,v)):P==="Array"&&!v[C(L)]&&(v[C(L)]=!0,m(L,h,N,v))}}},plugins:{},highlightAll:function(m,f){n.highlightAllUnder(document,m,f)},highlightAllUnder:function(m,f,h){var p={callback:h,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",p),p.elements=Array.prototype.slice.apply(p.container.querySelectorAll(p.selector)),n.hooks.run("before-all-elements-highlight",p);for(var v=0,C;C=p.elements[v++];)n.highlightElement(C,f===!0,p.callback)},highlightElement:function(m,f,h){var p=n.util.getLanguage(m),v=n.languages[p];n.util.setLanguage(m,p);var C=m.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(C,p);var N=m.textContent,L={element:m,language:p,grammar:v,code:N};function P(c2){L.highlightedCode=c2,n.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,n.hooks.run("after-highlight",L),n.hooks.run("complete",L),h&&h.call(L.element)}if(n.hooks.run("before-sanity-check",L),C=L.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!L.code){n.hooks.run("complete",L),h&&h.call(L.element);return}if(n.hooks.run("before-highlight",L),!L.grammar){P(n.util.encode(L.code));return}if(f&&e.Worker){var W=new Worker(n.filename);W.onmessage=function(c2){P(c2.data)},W.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else P(n.highlight(L.code,L.grammar,L.language))},highlight:function(m,f,h){var p={code:m,grammar:f,language:h};if(n.hooks.run("before-tokenize",p),!p.grammar)throw new Error('The language "'+p.language+'" has no grammar.');return p.tokens=n.tokenize(p.code,p.grammar),n.hooks.run("after-tokenize",p),r.stringify(n.util.encode(p.tokens),p.language)},tokenize:function(m,f){var h=f.rest;if(h){for(var p in h)f[p]=h[p];delete f.rest}var v=new s;return l(v,v.head,m),o(m,v,f,v.head,0),z(v)},hooks:{all:{},add:function(m,f){var h=n.hooks.all;h[m]=h[m]||[],h[m].push(f)},run:function(m,f){var h=n.hooks.all[m];if(!(!h||!h.length))for(var p=0,v;v=h[p++];)v(f)}},Token:r};e.Prism=n;function r(m,f,h,p){this.type=m,this.content=f,this.alias=h,this.length=(p||"").length|0}r.stringify=function m(f,h){if(typeof f=="string")return f;if(Array.isArray(f)){var p="";return f.forEach(function(P){p+=m(P,h)}),p}var v={type:f.type,content:m(f.content,h),tag:"span",classes:["token",f.type],attributes:{},language:h},C=f.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(v.classes,C):v.classes.push(C)),n.hooks.run("wrap",v);var N="";for(var L in v.attributes)N+=" "+L+'="'+(v.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+N+">"+v.content+"</"+v.tag+">"};function i(m,f,h,p){m.lastIndex=f;var v=m.exec(h);if(v&&p&&v[1]){var C=v[1].length;v.index+=C,v[0]=v[0].slice(C)}return v}function o(m,f,h,p,v,C){for(var N in h)if(!(!h.hasOwnProperty(N)||!h[N])){var L=h[N];L=Array.isArray(L)?L:[L];for(var P=0;P<L.length;++P){if(C&&C.cause==N+","+P)return;var W=L[P],c2=W.inside,ve=!!W.lookbehind,ge=!!W.greedy,Ga=W.alias;if(ge&&!W.pattern.global){var $a=W.pattern.toString().match(/[imsuy]*$/)[0];W.pattern=RegExp(W.pattern.source,$a+"g")}for(var be=W.pattern||W,a1=p.next,D1=v;a1!==f.tail&&!(C&&D1>=C.reach);D1+=a1.value.length,a1=a1.next){var F2=a1.value;if(f.length>m.length)return;if(!(F2 instanceof r)){var V4=1,x1;if(ge){if(x1=i(be,D1,m,ve),!x1||x1.index>=m.length)break;var y4=x1.index,Wa=x1.index+x1[0].length,n2=D1;for(n2+=a1.value.length;y4>=n2;)a1=a1.next,n2+=a1.value.length;if(n2-=a1.value.length,D1=n2,a1.value instanceof r)continue;for(var M3=a1;M3!==f.tail&&(n2<Wa||typeof M3.value=="string");M3=M3.next)V4++,n2+=M3.value.length;V4--,F2=m.slice(D1,n2),x1.index-=D1}else if(x1=i(be,0,F2,ve),!x1)continue;var y4=x1.index,L4=x1[0],Q6=F2.slice(0,y4),ze=F2.slice(y4+L4.length),e0=D1+F2.length;C&&e0>C.reach&&(C.reach=e0);var w4=a1.prev;Q6&&(w4=l(f,w4,Q6),D1+=Q6.length),u(f,w4,V4);var Za=new r(N,c2?n.tokenize(L4,c2):L4,Ga,L4);if(a1=l(f,w4,Za),ze&&l(f,a1,ze),V4>1){var t0={cause:N+","+P,reach:e0};o(m,f,h,a1.prev,D1,t0),C&&t0.reach>C.reach&&(C.reach=t0.reach)}}}}}}function s(){var m={value:null,prev:null,next:null},f={value:null,prev:m,next:null};m.next=f,this.head=m,this.tail=f,this.length=0}function l(m,f,h){var p=f.next,v={value:h,prev:f,next:p};return f.next=v,p.prev=v,m.length++,v}function u(m,f,h){for(var p=f.next,v=0;v<h&&p!==m.tail;v++)p=p.next;f.next=p,p.prev=f,m.length-=v}function z(m){for(var f=[],h=m.head.next;h!==m.tail;)f.push(h.value),h=h.next;return f}if(!e.document)return e.addEventListener&&(n.disableWorkerMessageHandler||e.addEventListener("message",function(m){var f=JSON.parse(m.data),h=f.language,p=f.code,v=f.immediateClose;e.postMessage(n.highlight(p,n.languages[h],h)),v&&e.close()},!1)),n;var b=n.util.currentScript();b&&(n.filename=b.src,b.hasAttribute("data-manual")&&(n.manual=!0));function M(){n.manual||n.highlightAll()}if(!n.manual){var y=document.readyState;y==="loading"||y==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",M):window.requestAnimationFrame?window.requestAnimationFrame(M):window.setTimeout(M,16)}return n}($o);typeof Z6<"u"&&Z6.exports&&(Z6.exports=w);typeof global<"u"&&(global.Prism=w);w.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};w.languages.markup.tag.inside["attr-value"].inside.entity=w.languages.markup.entity;w.languages.markup.doctype.inside["internal-subset"].inside=w.languages.markup;w.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(w.languages.markup.tag,"addInlined",{value:function(c,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:w.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:w.languages[t]};var r={};r[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:n},w.languages.insertBefore("markup","cdata",r)}});Object.defineProperty(w.languages.markup.tag,"addAttribute",{value:function(e,c){w.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:w.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});w.languages.html=w.languages.markup;w.languages.mathml=w.languages.markup;w.languages.svg=w.languages.markup;w.languages.xml=w.languages.extend("markup",{});w.languages.ssml=w.languages.xml;w.languages.atom=w.languages.xml;w.languages.rss=w.languages.xml;(function(e){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(w);w.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};w.languages.javascript=w.languages.extend("clike",{"class-name":[w.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});w.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;w.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:w.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:w.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:w.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:w.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:w.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});w.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:w.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});w.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});w.languages.markup&&(w.languages.markup.tag.addInlined("script","javascript"),w.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));w.languages.js=w.languages.javascript;(function(){if(typeof w>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",c=function(b,M){return"\u2716 Error "+b+" while fetching file: "+M},t="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",r="loading",i="loaded",o="failed",s="pre[data-src]:not(["+n+'="'+i+'"]):not(['+n+'="'+r+'"])';function l(b,M,y){var m=new XMLHttpRequest;m.open("GET",b,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?M(m.responseText):m.status>=400?y(c(m.status,m.statusText)):y(t))},m.send(null)}function u(b){var M=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(M){var y=Number(M[1]),m=M[2],f=M[3];return m?f?[y,Number(f)]:[y,void 0]:[y,y]}}w.hooks.add("before-highlightall",function(b){b.selector+=", "+s}),w.hooks.add("before-sanity-check",function(b){var M=b.element;if(M.matches(s)){b.code="",M.setAttribute(n,r);var y=M.appendChild(document.createElement("CODE"));y.textContent=e;var m=M.getAttribute("data-src"),f=b.language;if(f==="none"){var h=(/\.(\w+)$/.exec(m)||[,"none"])[1];f=a[h]||h}w.util.setLanguage(y,f),w.util.setLanguage(M,f);var p=w.plugins.autoloader;p&&p.loadLanguages(f),l(m,function(v){M.setAttribute(n,i);var C=u(M.getAttribute("data-range"));if(C){var N=v.split(/\r\n?|\n/g),L=C[0],P=C[1]==null?N.length:C[1];L<0&&(L+=N.length),L=Math.max(0,Math.min(L-1,N.length)),P<0&&(P+=N.length),P=Math.max(0,Math.min(P,N.length)),v=N.slice(L,P).join(`
`),M.hasAttribute("data-start")||M.setAttribute("data-start",String(L+1))}y.textContent=v,w.highlightElement(y)},function(v){M.setAttribute(n,o),y.textContent=v})}}),w.plugins.fileHighlight={highlight:function(M){for(var y=(M||document).querySelectorAll(s),m=0,f;f=y[m++];)w.highlightElement(f)}};var z=!1;w.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),w.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var p5=null;function I1(){return p5}function M0(e){p5??=e}var T3=class{},H0=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>d(v5),providedIn:"platform"})}return e})();var v5=(()=>{class e extends H0{_location;_history;_doc=d(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return I1().getBaseHref(this._doc)}onPopState(t){let a=I1().getGlobalEventTarget(this._doc,"window");return a.addEventListener("popstate",t,!1),()=>a.removeEventListener("popstate",t)}onHashChange(t){let a=I1().getGlobalEventTarget(this._doc,"window");return a.addEventListener("hashchange",t,!1),()=>a.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,a,n){this._history.pushState(t,a,n)}replaceState(t,a,n){this._history.replaceState(t,a,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function g5(e,c){return e?c?e.endsWith("/")?c.startsWith("/")?e+c.slice(1):e+c:c.startsWith("/")?e+c:`${e}/${c}`:e:c}function m5(e){let c=e.search(/#|\?|$/);return e[c-1]==="/"?e.slice(0,c-1)+e.slice(c):e}function l2(e){return e&&e[0]!=="?"?`?${e}`:e}var _3=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>d(V0),providedIn:"root"})}return e})(),b5=new S(""),V0=(()=>{class e extends _3{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,a){super(),this._platformLocation=t,this._baseHref=a??this._platformLocation.getBaseHrefFromDOM()??d(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return g5(this._baseHref,t)}path(t=!1){let a=this._platformLocation.pathname+l2(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${a}${n}`:a}pushState(t,a,n,r){let i=this.prepareExternalUrl(n+l2(r));this._platformLocation.pushState(t,a,i)}replaceState(t,a,n,r){let i=this.prepareExternalUrl(n+l2(r));this._platformLocation.replaceState(t,a,i)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(a){return new(a||e)(k(H0),k(b5,8))};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),X1=(()=>{class e{_subject=new i1;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let a=this._locationStrategy.getBaseHref();this._basePath=Qa(m5(h5(a))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,a=""){return this.path()==this.normalize(t+l2(a))}normalize(t){return e.stripTrailingSlash(Ja(this._basePath,h5(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,a="",n=null){this._locationStrategy.pushState(n,"",t,a),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+l2(a)),n)}replaceState(t,a="",n=null){this._locationStrategy.replaceState(n,"",t,a),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+l2(a)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(a=>{this._notifyUrlChangeListeners(a.url,a.state)}),()=>{let a=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(a,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",a){this._urlChangeListeners.forEach(n=>n(t,a))}subscribe(t,a,n){return this._subject.subscribe({next:t,error:a??void 0,complete:n??void 0})}static normalizeQueryParams=l2;static joinWithSlash=g5;static stripTrailingSlash=m5;static \u0275fac=function(a){return new(a||e)(k(_3))};static \u0275prov=V({token:e,factory:()=>Ka(),providedIn:"root"})}return e})();function Ka(){return new X1(k(_3))}function Ja(e,c){if(!e||!c.startsWith(e))return c;let t=c.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:c}function h5(e){return e.replace(/\/index.html$/,"")}function Qa(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var q4=class{$implicit;ngForOf;index;count;constructor(c,t,a,n){this.$implicit=c,this.ngForOf=t,this.index=a,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},$4=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,a,n){this._viewContainer=t,this._template=a,this._differs=n}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let a=this._viewContainer;t.forEachOperation((n,r,i)=>{if(n.previousIndex==null)a.createEmbeddedView(this._template,new q4(n.item,this._ngForOf,-1,-1),i===null?void 0:i);else if(i==null)a.remove(r===null?void 0:r);else if(r!==null){let o=a.get(r);a.move(o,i),z5(o,n)}});for(let n=0,r=a.length;n<r;n++){let o=a.get(n).context;o.index=n,o.count=r,o.ngForOf=this._ngForOf}t.forEachIdentityChange(n=>{let r=a.get(n.currentIndex);z5(r,n)})}static ngTemplateContextGuard(t,a){return!0}static \u0275fac=function(a){return new(a||e)(c1(x3),c1(f0),c1(l5))};static \u0275dir=G({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function z5(e,c){e.context.$implicit=c.item}var E3=(()=>{class e{_viewContainer;_context=new G4;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,a){this._viewContainer=t,this._thenTemplateRef=a}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){C5(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){C5(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,a){return!0}static \u0275fac=function(a){return new(a||e)(c1(x3),c1(f0))};static \u0275dir=G({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),G4=class{$implicit=null;ngIf=null};function C5(e,c){if(e&&!e.createEmbeddedView)throw new _(2020,!1)}function I3(e,c){c=encodeURIComponent(c);for(let t of e.split(";")){let a=t.indexOf("="),[n,r]=a==-1?[t,""]:[t.slice(0,a),t.slice(a+1)];if(n.trim()===c)return decodeURIComponent(r)}return null}var S2=class{};var L0="browser";function W4(e){return e===L0}var M5=(()=>{class e{static \u0275prov=V({token:e,providedIn:"root",factory:()=>new y0(d(E),window)})}return e})(),y0=class{document;window;offset=()=>[0,0];constructor(c,t){this.document=c,this.window=t}setOffset(c){Array.isArray(c)?this.offset=()=>c:this.offset=c}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(c,t){this.window.scrollTo(J(H({},t),{left:c[0],top:c[1]}))}scrollToAnchor(c,t){let a=ic(this.document,c);a&&(this.scrollToElement(a,t),a.focus())}setHistoryScrollRestoration(c){try{this.window.history.scrollRestoration=c}catch{console.warn(U2(2400,!1))}}scrollToElement(c,t){let a=c.getBoundingClientRect(),n=a.left+this.window.pageXOffset,r=a.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(J(H({},t),{left:n-i[0],top:r-i[1]}))}};function ic(e,c){let t=e.getElementById(c)||e.getElementsByName(c)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let a=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),n=a.currentNode;for(;n;){let r=n.shadowRoot;if(r){let i=r.getElementById(c)||r.querySelector(`[name="${c}"]`);if(i)return i}n=a.nextNode()}}return null}var Y4=new S(""),N0=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,a){this._zone=a,t.forEach(n=>{n.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,a,n,r){return this._findPluginFor(a).addEventListener(t,a,n,r)}getZone(){return this._zone}_findPluginFor(t){let a=this._eventNameToPlugin.get(t);if(a)return a;if(a=this._plugins.find(r=>r.supports(t)),!a)throw new _(5101,!1);return this._eventNameToPlugin.set(t,a),a}static \u0275fac=function(a){return new(a||e)(k(Y4),k($))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),R3=class{_doc;constructor(c){this._doc=c}manager},w0="ng-app-id";function H5(e){for(let c of e)c.remove()}function V5(e,c){let t=c.createElement("style");return t.textContent=e,t}function sc(e,c,t,a){let n=e.head?.querySelectorAll(`style[${w0}="${c}"],link[${w0}="${c}"]`);if(n)for(let r of n)r.removeAttribute(w0),r instanceof HTMLLinkElement?a.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&t.set(r.textContent,{usage:0,elements:[r]})}function S0(e,c){let t=c.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var k0=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,a,n,r={}){this.doc=t,this.appId=a,this.nonce=n,sc(t,a,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,a){for(let n of t)this.addUsage(n,this.inline,V5);a?.forEach(n=>this.addUsage(n,this.external,S0))}removeStyles(t,a){for(let n of t)this.removeUsage(n,this.inline);a?.forEach(n=>this.removeUsage(n,this.external))}addUsage(t,a,n){let r=a.get(t);r?r.usage++:a.set(t,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,n(t,this.doc)))})}removeUsage(t,a){let n=a.get(t);n&&(n.usage--,n.usage<=0&&(H5(n.elements),a.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])H5(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[a,{elements:n}]of this.inline)n.push(this.addElement(t,V5(a,this.doc)));for(let[a,{elements:n}]of this.external)n.push(this.addElement(t,S0(a,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,a){return this.nonce&&a.setAttribute("nonce",this.nonce),t.appendChild(a)}static \u0275fac=function(a){return new(a||e)(k(E),k(s0),k(L3,8),k(Y1))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),x0={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},D0=/%COMP%/g;var L5="%COMP%",lc=`_nghost-${L5}`,fc=`_ngcontent-${L5}`,uc=!0,dc=new S("",{providedIn:"root",factory:()=>uc});function mc(e){return fc.replace(D0,e)}function hc(e){return lc.replace(D0,e)}function w5(e,c){return c.map(t=>t.replace(D0,e))}var O3=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,a,n,r,i,o,s,l=null,u=null){this.eventManager=t,this.sharedStylesHost=a,this.appId=n,this.removeStylesOnCompDestroy=r,this.doc=i,this.platformId=o,this.ngZone=s,this.nonce=l,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new F3(t,i,s,this.platformIsServer,this.tracingService)}createRenderer(t,a){if(!t||!a)return this.defaultRenderer;let n=this.getOrCreateRenderer(t,a);return n instanceof Z4?n.applyToHost(t):n instanceof P3&&n.applyStyles(),n}getOrCreateRenderer(t,a){let n=this.rendererByCompId,r=n.get(a.id);if(!r){let i=this.doc,o=this.ngZone,s=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,z=this.platformIsServer,b=this.tracingService;switch(a.encapsulation){case l0.Emulated:r=new Z4(s,l,a,this.appId,u,i,o,z,b);break;case l0.ShadowDom:return new A0(s,l,t,a,i,o,this.nonce,z,b);default:r=new P3(s,l,a,u,i,o,z,b);break}n.set(a.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(a){return new(a||e)(k(N0),k(k0),k(s0),k(dc),k(E),k(Y1),k($),k(L3),k(We,8))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),F3=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(c,t,a,n,r){this.eventManager=c,this.doc=t,this.ngZone=a,this.platformIsServer=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(c,t){return t?this.doc.createElementNS(x0[t]||t,c):this.doc.createElement(c)}createComment(c){return this.doc.createComment(c)}createText(c){return this.doc.createTextNode(c)}appendChild(c,t){(y5(c)?c.content:c).appendChild(t)}insertBefore(c,t,a){c&&(y5(c)?c.content:c).insertBefore(t,a)}removeChild(c,t){t.remove()}selectRootElement(c,t){let a=typeof c=="string"?this.doc.querySelector(c):c;if(!a)throw new _(-5104,!1);return t||(a.textContent=""),a}parentNode(c){return c.parentNode}nextSibling(c){return c.nextSibling}setAttribute(c,t,a,n){if(n){t=n+":"+t;let r=x0[n];r?c.setAttributeNS(r,t,a):c.setAttribute(t,a)}else c.setAttribute(t,a)}removeAttribute(c,t,a){if(a){let n=x0[a];n?c.removeAttributeNS(n,t):c.removeAttribute(`${a}:${t}`)}else c.removeAttribute(t)}addClass(c,t){c.classList.add(t)}removeClass(c,t){c.classList.remove(t)}setStyle(c,t,a,n){n&(q2.DashCase|q2.Important)?c.style.setProperty(t,a,n&q2.Important?"important":""):c.style[t]=a}removeStyle(c,t,a){a&q2.DashCase?c.style.removeProperty(t):c.style[t]=""}setProperty(c,t,a){c!=null&&(c[t]=a)}setValue(c,t){c.nodeValue=t}listen(c,t,a,n){if(typeof c=="string"&&(c=I1().getGlobalEventTarget(this.doc,c),!c))throw new _(5102,!1);let r=this.decoratePreventDefault(a);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(c,t,r)),this.eventManager.addEventListener(c,t,r,n)}decoratePreventDefault(c){return t=>{if(t==="__ngUnwrap__")return c;c(t)===!1&&t.preventDefault()}}};function y5(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var A0=class extends F3{sharedStylesHost;hostEl;shadowRoot;constructor(c,t,a,n,r,i,o,s,l){super(c,r,i,s,l),this.sharedStylesHost=t,this.hostEl=a,this.shadowRoot=a.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=n.styles;u=w5(n.id,u);for(let b of u){let M=document.createElement("style");o&&M.setAttribute("nonce",o),M.textContent=b,this.shadowRoot.appendChild(M)}let z=n.getExternalStyles?.();if(z)for(let b of z){let M=S0(b,r);o&&M.setAttribute("nonce",o),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(c){return c===this.hostEl?this.shadowRoot:c}appendChild(c,t){return super.appendChild(this.nodeOrShadowRoot(c),t)}insertBefore(c,t,a){return super.insertBefore(this.nodeOrShadowRoot(c),t,a)}removeChild(c,t){return super.removeChild(null,t)}parentNode(c){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(c)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},P3=class extends F3{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(c,t,a,n,r,i,o,s,l){super(c,r,i,o,s),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=n;let u=a.styles;this.styles=l?w5(l,u):u,this.styleUrls=a.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Z4=class extends P3{contentAttr;hostAttr;constructor(c,t,a,n,r,i,o,s,l){let u=n+"-"+a.id;super(c,t,a,r,i,o,s,l,u),this.contentAttr=mc(u),this.hostAttr=hc(u)}applyToHost(c){this.applyStyles(),this.setAttribute(c,this.hostAttr,"")}createElement(c,t){let a=super.createElement(c,t);return super.setAttribute(a,this.contentAttr,""),a}};var X4=class e extends T3{supportsDOMEvents=!0;static makeCurrent(){M0(new e)}onAndCancel(c,t,a,n){return c.addEventListener(t,a,n),()=>{c.removeEventListener(t,a,n)}}dispatchEvent(c,t){c.dispatchEvent(t)}remove(c){c.remove()}createElement(c,t){return t=t||this.getDefaultDocument(),t.createElement(c)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(c){return c.nodeType===Node.ELEMENT_NODE}isShadowRoot(c){return c instanceof DocumentFragment}getGlobalEventTarget(c,t){return t==="window"?window:t==="document"?c:t==="body"?c.body:null}getBaseHref(c){let t=vc();return t==null?null:gc(t)}resetBaseElement(){B3=null}getUserAgent(){return window.navigator.userAgent}getCookie(c){return I3(document.cookie,c)}},B3=null;function vc(){return B3=B3||document.head.querySelector("base"),B3?B3.getAttribute("href"):null}function gc(e){return new URL(e,document.baseURI).pathname}var bc=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),S5=(()=>{class e extends R3{constructor(t){super(t)}supports(t){return!0}addEventListener(t,a,n,r){return t.addEventListener(a,n,r),()=>this.removeEventListener(t,a,n,r)}removeEventListener(t,a,n,r){return t.removeEventListener(a,n,r)}static \u0275fac=function(a){return new(a||e)(k(E))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),x5=["alt","control","meta","shift"],zc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Cc={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},A5=(()=>{class e extends R3{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,a,n,r){let i=e.parseEventName(a),o=e.eventCallback(i.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>I1().onAndCancel(t,i.domEventName,o,r))}static parseEventName(t){let a=t.toLowerCase().split("."),n=a.shift();if(a.length===0||!(n==="keydown"||n==="keyup"))return null;let r=e._normalizeKey(a.pop()),i="",o=a.indexOf("code");if(o>-1&&(a.splice(o,1),i="code."),x5.forEach(l=>{let u=a.indexOf(l);u>-1&&(a.splice(u,1),i+=l+".")}),i+=r,a.length!=0||r.length===0)return null;let s={};return s.domEventName=n,s.fullKey=i,s}static matchEventFullKeyCode(t,a){let n=zc[t.key]||t.key,r="";return a.indexOf("code.")>-1&&(n=t.code,r="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),x5.forEach(i=>{if(i!==n){let o=Cc[i];o(t)&&(r+=i+".")}}),r+=n,r===a)}static eventCallback(t,a,n){return r=>{e.matchEventFullKeyCode(r,t)&&n.runGuarded(()=>a(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(a){return new(a||e)(k(E))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();function T0(e,c){let t=H({rootComponent:e},Mc(c));return f5(t)}function Mc(e){return{appProviders:[...wc,...e?.providers??[]],platformProviders:Lc}}function Hc(){X4.makeCurrent()}function Vc(){return new o0}function yc(){return Ie(document),document}var Lc=[{provide:Y1,useValue:L0},{provide:Re,useValue:Hc,multi:!0},{provide:E,useFactory:yc}];var wc=[{provide:ke,useValue:"root"},{provide:o0,useFactory:Vc},{provide:Y4,useClass:S5,multi:!0,deps:[E]},{provide:Y4,useClass:A5,multi:!0,deps:[E]},O3,k0,N0,{provide:o2,useExisting:O3},{provide:S2,useClass:bc},[]];var Y2=class{},X2=class{},A1=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(c){c?typeof c=="string"?this.lazyInit=()=>{this.headers=new Map,c.split(`
`).forEach(t=>{let a=t.indexOf(":");if(a>0){let n=t.slice(0,a),r=t.slice(a+1).trim();this.addHeaderEntry(n,r)}})}:typeof Headers<"u"&&c instanceof Headers?(this.headers=new Map,c.forEach((t,a)=>{this.addHeaderEntry(a,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(c).forEach(([t,a])=>{this.setHeaderEntries(t,a)})}:this.headers=new Map}has(c){return this.init(),this.headers.has(c.toLowerCase())}get(c){this.init();let t=this.headers.get(c.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(c){return this.init(),this.headers.get(c.toLowerCase())||null}append(c,t){return this.clone({name:c,value:t,op:"a"})}set(c,t){return this.clone({name:c,value:t,op:"s"})}delete(c,t){return this.clone({name:c,value:t,op:"d"})}maybeSetNormalizedName(c,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,c)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(c=>this.applyUpdate(c)),this.lazyUpdate=null))}copyFrom(c){c.init(),Array.from(c.headers.keys()).forEach(t=>{this.headers.set(t,c.headers.get(t)),this.normalizedNames.set(t,c.normalizedNames.get(t))})}clone(c){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([c]),t}applyUpdate(c){let t=c.name.toLowerCase();switch(c.op){case"a":case"s":let a=c.value;if(typeof a=="string"&&(a=[a]),a.length===0)return;this.maybeSetNormalizedName(c.name,t);let n=(c.op==="a"?this.headers.get(t):void 0)||[];n.push(...a),this.headers.set(t,n);break;case"d":let r=c.value;if(!r)this.headers.delete(t),this.normalizedNames.delete(t);else{let i=this.headers.get(t);if(!i)return;i=i.filter(o=>r.indexOf(o)===-1),i.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}break}}addHeaderEntry(c,t){let a=c.toLowerCase();this.maybeSetNormalizedName(c,a),this.headers.has(a)?this.headers.get(a).push(t):this.headers.set(a,[t])}setHeaderEntries(c,t){let a=(Array.isArray(t)?t:[t]).map(r=>r.toString()),n=c.toLowerCase();this.headers.set(n,a),this.maybeSetNormalizedName(c,n)}forEach(c){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>c(this.normalizedNames.get(t),this.headers.get(t)))}};var Q4=class{encodeKey(c){return N5(c)}encodeValue(c){return N5(c)}decodeKey(c){return decodeURIComponent(c)}decodeValue(c){return decodeURIComponent(c)}};function xc(e,c){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(n=>{let r=n.indexOf("="),[i,o]=r==-1?[c.decodeKey(n),""]:[c.decodeKey(n.slice(0,r)),c.decodeValue(n.slice(r+1))],s=t.get(i)||[];s.push(o),t.set(i,s)}),t}var Sc=/%(\d[a-f0-9])/gi,Ac={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function N5(e){return encodeURIComponent(e).replace(Sc,(c,t)=>Ac[t]??c)}function K4(e){return`${e}`}var L1=class e{map;encoder;updates=null;cloneFrom=null;constructor(c={}){if(this.encoder=c.encoder||new Q4,c.fromString){if(c.fromObject)throw new _(2805,!1);this.map=xc(c.fromString,this.encoder)}else c.fromObject?(this.map=new Map,Object.keys(c.fromObject).forEach(t=>{let a=c.fromObject[t],n=Array.isArray(a)?a.map(K4):[K4(a)];this.map.set(t,n)})):this.map=null}has(c){return this.init(),this.map.has(c)}get(c){this.init();let t=this.map.get(c);return t?t[0]:null}getAll(c){return this.init(),this.map.get(c)||null}keys(){return this.init(),Array.from(this.map.keys())}append(c,t){return this.clone({param:c,value:t,op:"a"})}appendAll(c){let t=[];return Object.keys(c).forEach(a=>{let n=c[a];Array.isArray(n)?n.forEach(r=>{t.push({param:a,value:r,op:"a"})}):t.push({param:a,value:n,op:"a"})}),this.clone(t)}set(c,t){return this.clone({param:c,value:t,op:"s"})}delete(c,t){return this.clone({param:c,value:t,op:"d"})}toString(){return this.init(),this.keys().map(c=>{let t=this.encoder.encodeKey(c);return this.map.get(c).map(a=>t+"="+this.encoder.encodeValue(a)).join("&")}).filter(c=>c!=="").join("&")}clone(c){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(c),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(c=>this.map.set(c,this.cloneFrom.map.get(c))),this.updates.forEach(c=>{switch(c.op){case"a":case"s":let t=(c.op==="a"?this.map.get(c.param):void 0)||[];t.push(K4(c.value)),this.map.set(c.param,t);break;case"d":if(c.value!==void 0){let a=this.map.get(c.param)||[],n=a.indexOf(K4(c.value));n!==-1&&a.splice(n,1),a.length>0?this.map.set(c.param,a):this.map.delete(c.param)}else{this.map.delete(c.param);break}}}),this.cloneFrom=this.updates=null)}};var e6=class{map=new Map;set(c,t){return this.map.set(c,t),this}get(c){return this.map.has(c)||this.map.set(c,c.defaultValue()),this.map.get(c)}delete(c){return this.map.delete(c),this}has(c){return this.map.has(c)}keys(){return this.map.keys()}};function Nc(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function k5(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function D5(e){return typeof Blob<"u"&&e instanceof Blob}function T5(e){return typeof FormData<"u"&&e instanceof FormData}function kc(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var U3="Content-Type",t6="Accept",F0="X-Request-URL",E5="text/plain",I5="application/json",R5=`${I5}, ${E5}, */*`,Z2=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(c,t,a,n){this.url=t,this.method=c.toUpperCase();let r;if(Nc(this.method)||n?(this.body=a!==void 0?a:null,r=n):r=a,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new Error("");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),this.transferCache=r.transferCache}if(this.headers??=new A1,this.context??=new e6,!this.params)this.params=new L1,this.urlWithParams=t;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=t;else{let o=t.indexOf("?"),s=o===-1?"?":o<t.length-1?"&":"";this.urlWithParams=t+s+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||k5(this.body)||D5(this.body)||T5(this.body)||kc(this.body)?this.body:this.body instanceof L1?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||T5(this.body)?null:D5(this.body)?this.body.type||null:k5(this.body)?null:typeof this.body=="string"?E5:this.body instanceof L1?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?I5:null}clone(c={}){let t=c.method||this.method,a=c.url||this.url,n=c.responseType||this.responseType,r=c.keepalive??this.keepalive,i=c.priority||this.priority,o=c.cache||this.cache,s=c.mode||this.mode,l=c.redirect||this.redirect,u=c.credentials||this.credentials,z=c.transferCache??this.transferCache,b=c.timeout??this.timeout,M=c.body!==void 0?c.body:this.body,y=c.withCredentials??this.withCredentials,m=c.reportProgress??this.reportProgress,f=c.headers||this.headers,h=c.params||this.params,p=c.context??this.context;return c.setHeaders!==void 0&&(f=Object.keys(c.setHeaders).reduce((v,C)=>v.set(C,c.setHeaders[C]),f)),c.setParams&&(h=Object.keys(c.setParams).reduce((v,C)=>v.set(C,c.setParams[C]),h)),new e(t,a,M,{params:h,headers:f,context:p,reportProgress:m,responseType:n,withCredentials:y,transferCache:z,keepalive:r,cache:o,priority:i,timeout:b,mode:s,redirect:l,credentials:u})}},K1=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(K1||{}),K2=class{headers;status;statusText;url;ok;type;constructor(c,t=200,a="OK"){this.headers=c.headers||new A1,this.status=c.status!==void 0?c.status:t,this.statusText=c.statusText||a,this.url=c.url||null,this.ok=this.status>=200&&this.status<300}},j3=class e extends K2{constructor(c={}){super(c)}type=K1.ResponseHeader;clone(c={}){return new e({headers:c.headers||this.headers,status:c.status!==void 0?c.status:this.status,statusText:c.statusText||this.statusText,url:c.url||this.url||void 0})}},A2=class e extends K2{body;constructor(c={}){super(c),this.body=c.body!==void 0?c.body:null}type=K1.Response;clone(c={}){return new e({body:c.body!==void 0?c.body:this.body,headers:c.headers||this.headers,status:c.status!==void 0?c.status:this.status,statusText:c.statusText||this.statusText,url:c.url||this.url||void 0})}},R1=class extends K2{name="HttpErrorResponse";message;error;ok=!1;constructor(c){super(c,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${c.url||"(unknown url)"}`:this.message=`Http failure response for ${c.url||"(unknown url)"}: ${c.status} ${c.statusText}`,this.error=c.error||null}},F5=200,Dc=204;function _0(e,c){return{body:c,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache,keepalive:e.keepalive,priority:e.priority,cache:e.cache,mode:e.mode,redirect:e.redirect}}var P5=(()=>{class e{handler;constructor(t){this.handler=t}request(t,a,n={}){let r;if(t instanceof Z2)r=t;else{let s;n.headers instanceof A1?s=n.headers:s=new A1(n.headers);let l;n.params&&(n.params instanceof L1?l=n.params:l=new L1({fromObject:n.params})),r=new Z2(t,a,n.body!==void 0?n.body:null,{headers:s,context:n.context,params:l,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials,transferCache:n.transferCache,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,credentials:n.credentials})}let i=A(r).pipe(z2(s=>this.handler.handle(s)));if(t instanceof Z2||n.observe==="events")return i;let o=i.pipe(W1(s=>s instanceof A2));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return o.pipe(R(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new _(2806,!1);return s.body}));case"blob":return o.pipe(R(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new _(2807,!1);return s.body}));case"text":return o.pipe(R(s=>{if(s.body!==null&&typeof s.body!="string")throw new _(2808,!1);return s.body}));case"json":default:return o.pipe(R(s=>s.body))}case"response":return o;default:throw new _(2809,!1)}}delete(t,a={}){return this.request("DELETE",t,a)}get(t,a={}){return this.request("GET",t,a)}head(t,a={}){return this.request("HEAD",t,a)}jsonp(t,a){return this.request("JSONP",t,{params:new L1().append(a,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,a={}){return this.request("OPTIONS",t,a)}patch(t,a,n={}){return this.request("PATCH",t,_0(n,a))}post(t,a,n={}){return this.request("POST",t,_0(n,a))}put(t,a,n={}){return this.request("PUT",t,_0(n,a))}static \u0275fac=function(a){return new(a||e)(k(Y2))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),Tc=/^\)\]\}',?\n/;function _5(e){if(e.url)return e.url;let c=F0.toLocaleLowerCase();return e.headers.get(c)}var O5=new S(""),J4=(()=>{class e{fetchImpl=d(E0,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=d($);destroyRef=d(k4);destroyed=!1;constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0})}handle(t){return new b2(a=>{let n=new AbortController;this.doRequest(t,n.signal,a).then(I0,i=>a.error(new R1({error:i})));let r;return t.timeout&&(r=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{n.signal.aborted||n.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{r!==void 0&&clearTimeout(r),n.abort()}})}doRequest(t,a,n){return P2(this,null,function*(){let r=this.createRequestInit(t),i;try{let M=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,H({signal:a},r)));_c(M),n.next({type:K1.Sent}),i=yield M}catch(M){n.error(new R1({error:M,status:M.status??0,statusText:M.statusText,url:t.urlWithParams,headers:M.headers}));return}let o=new A1(i.headers),s=i.statusText,l=_5(i)??t.urlWithParams,u=i.status,z=null;if(t.reportProgress&&n.next(new j3({headers:o,status:u,statusText:s,url:l})),i.body){let M=i.headers.get("content-length"),y=[],m=i.body.getReader(),f=0,h,p,v=typeof Zone<"u"&&Zone.current,C=!1;if(yield this.ngZone.runOutsideAngular(()=>P2(this,null,function*(){for(;;){if(this.destroyed){yield m.cancel(),C=!0;break}let{done:L,value:P}=yield m.read();if(L)break;if(y.push(P),f+=P.length,t.reportProgress){p=t.responseType==="text"?(p??"")+(h??=new TextDecoder).decode(P,{stream:!0}):void 0;let W=()=>n.next({type:K1.DownloadProgress,total:M?+M:void 0,loaded:f,partialText:p});v?v.run(W):W()}}})),C){n.complete();return}let N=this.concatChunks(y,f);try{let L=i.headers.get(U3)??"";z=this.parseBody(t,N,L)}catch(L){n.error(new R1({error:L,headers:new A1(i.headers),status:i.status,statusText:i.statusText,url:_5(i)??t.urlWithParams}));return}}u===0&&(u=z?F5:0),u>=200&&u<300?(n.next(new A2({body:z,headers:o,status:u,statusText:s,url:l})),n.complete()):n.error(new R1({error:z,headers:o,status:u,statusText:s,url:l}))})}parseBody(t,a,n){switch(t.responseType){case"json":let r=new TextDecoder().decode(a).replace(Tc,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(a);case"blob":return new Blob([a],{type:n});case"arraybuffer":return a.buffer}}createRequestInit(t){let a={},n;if(n=t.credentials,t.withCredentials&&(n="include"),t.headers.forEach((r,i)=>a[r]=i.join(",")),t.headers.has(t6)||(a[t6]=R5),!t.headers.has(U3)){let r=t.detectContentTypeHeader();r!==null&&(a[U3]=r)}return{body:t.serializeBody(),method:t.method,headers:a,credentials:n,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect}}concatChunks(t,a){let n=new Uint8Array(a),r=0;for(let i of t)n.set(i,r),r+=i.length;return n}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),E0=class{};function I0(){}function _c(e){e.then(I0,I0)}function Ec(e,c){return c(e)}function Ic(e,c,t){return(a,n)=>g1(t,()=>c(a,r=>e(r,n)))}var B5=new S(""),P0=new S(""),U5=new S("",{providedIn:"root",factory:()=>!0});var a6=(()=>{class e extends Y2{backend;injector;chain=null;pendingTasks=d(Ee);contributeToStability=d(U5);constructor(t,a){super(),this.backend=t,this.injector=a}handle(t){if(this.chain===null){let a=Array.from(new Set([...this.injector.get(B5),...this.injector.get(P0,[])]));this.chain=a.reduceRight((n,r)=>Ic(n,r,this.injector),Ec)}if(this.contributeToStability){let a=this.pendingTasks.add();return this.chain(t,n=>this.backend.handle(n)).pipe(B2(a))}else return this.chain(t,a=>this.backend.handle(a))}static \u0275fac=function(a){return new(a||e)(k(X2),k(T1))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var Rc=/^\)\]\}',?\n/,Fc=RegExp(`^${F0}:`,"m");function Pc(e){return"responseURL"in e&&e.responseURL?e.responseURL:Fc.test(e.getAllResponseHeaders())?e.getResponseHeader(F0):null}var R0=(()=>{class e{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new _(-2800,!1);let a=this.xhrFactory;return A(null).pipe(v1(()=>new b2(r=>{let i=a.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((f,h)=>i.setRequestHeader(f,h.join(","))),t.headers.has(t6)||i.setRequestHeader(t6,R5),!t.headers.has(U3)){let f=t.detectContentTypeHeader();f!==null&&i.setRequestHeader(U3,f)}if(t.timeout&&(i.timeout=t.timeout),t.responseType){let f=t.responseType.toLowerCase();i.responseType=f!=="json"?f:"text"}let o=t.serializeBody(),s=null,l=()=>{if(s!==null)return s;let f=i.statusText||"OK",h=new A1(i.getAllResponseHeaders()),p=Pc(i)||t.url;return s=new j3({headers:h,status:i.status,statusText:f,url:p}),s},u=()=>{let{headers:f,status:h,statusText:p,url:v}=l(),C=null;h!==Dc&&(C=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=C?F5:0);let N=h>=200&&h<300;if(t.responseType==="json"&&typeof C=="string"){let L=C;C=C.replace(Rc,"");try{C=C!==""?JSON.parse(C):null}catch(P){C=L,N&&(N=!1,C={error:P,text:C})}}N?(r.next(new A2({body:C,headers:f,status:h,statusText:p,url:v||void 0})),r.complete()):r.error(new R1({error:C,headers:f,status:h,statusText:p,url:v||void 0}))},z=f=>{let{url:h}=l(),p=new R1({error:f,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});r.error(p)},b=z;t.timeout&&(b=f=>{let{url:h}=l(),p=new R1({error:new DOMException("Request timed out","TimeoutError"),status:i.status||0,statusText:i.statusText||"Request timeout",url:h||void 0});r.error(p)});let M=!1,y=f=>{M||(r.next(l()),M=!0);let h={type:K1.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(h.total=f.total),t.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),r.next(h)},m=f=>{let h={type:K1.UploadProgress,loaded:f.loaded};f.lengthComputable&&(h.total=f.total),r.next(h)};return i.addEventListener("load",u),i.addEventListener("error",z),i.addEventListener("timeout",b),i.addEventListener("abort",z),t.reportProgress&&(i.addEventListener("progress",y),o!==null&&i.upload&&i.upload.addEventListener("progress",m)),i.send(o),r.next({type:K1.Sent}),()=>{i.removeEventListener("error",z),i.removeEventListener("abort",z),i.removeEventListener("load",u),i.removeEventListener("timeout",b),t.reportProgress&&(i.removeEventListener("progress",y),o!==null&&i.upload&&i.upload.removeEventListener("progress",m)),i.readyState!==i.DONE&&i.abort()}})))}static \u0275fac=function(a){return new(a||e)(k(S2))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),j5=new S(""),Oc="XSRF-TOKEN",Bc=new S("",{providedIn:"root",factory:()=>Oc}),Uc="X-XSRF-TOKEN",jc=new S("",{providedIn:"root",factory:()=>Uc}),q3=class{},qc=(()=>{class e{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,a){this.doc=t,this.cookieName=a}getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=I3(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(a){return new(a||e)(k(E),k(Bc))};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();function Gc(e,c){let t=e.url.toLowerCase();if(!d(j5)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return c(e);let a=d(q3).getToken(),n=d(jc);return a!=null&&!e.headers.has(n)&&(e=e.clone({headers:e.headers.set(n,a)})),c(e)}var O0=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(O0||{});function $c(e,c){return{\u0275kind:e,\u0275providers:c}}function B0(...e){let c=[P5,R0,a6,{provide:Y2,useExisting:a6},{provide:X2,useFactory:()=>d(O5,{optional:!0})??d(R0)},{provide:B5,useValue:Gc,multi:!0},{provide:j5,useValue:!0},{provide:q3,useClass:qc}];for(let t of e)c.push(...t.\u0275providers);return Z1(c)}function U0(){return $c(O0.Fetch,[J4,{provide:O5,useExisting:J4},{provide:X2,useExisting:J4}])}var Wc=new S(""),Zc="b",Yc="h",Xc="s",Kc="st",Jc="u",Qc="rt",j0=new S(""),e9=["GET","HEAD"];function t9(e,c){let M=d(j0),{isCacheActive:t}=M,a=Ce(M,["isCacheActive"]),{transferCache:n,method:r}=e;if(!t||n===!1||r==="POST"&&!a.includePostRequests&&!n||r!=="POST"&&!e9.includes(r)||!a.includeRequestsWithAuthHeaders&&a9(e)||a.filter?.(e)===!1)return c(e);let i=d(Fe);if(d(Wc,{optional:!0}))throw new _(2803,!1);let s=e.url,l=c9(e,s),u=i.get(l,null),z=a.includeHeaders;if(typeof n=="object"&&n.includeHeaders&&(z=n.includeHeaders),u){let{[Zc]:y,[Qc]:m,[Yc]:f,[Xc]:h,[Kc]:p,[Jc]:v}=u,C=y;switch(m){case"arraybuffer":C=new TextEncoder().encode(y).buffer;break;case"blob":C=new Blob([y]);break}let N=new A1(f);return A(new A2({body:C,headers:N,status:h,statusText:p,url:v}))}return c(e)}function a9(e){return e.headers.has("authorization")||e.headers.has("proxy-authorization")}function q5(e){return[...e.keys()].sort().map(c=>`${c}=${e.getAll(c)}`).join("&")}function c9(e,c){let{params:t,method:a,responseType:n}=e,r=q5(t),i=e.serializeBody();i instanceof URLSearchParams?i=q5(i):typeof i!="string"&&(i="");let o=[a,n,c,i,r].join("|"),s=n9(o);return s}function n9(e){let c=0;for(let t of e)c=Math.imul(31,c)+t.charCodeAt(0)<<0;return c+=2147483648,c.toString()}function G5(e){return[{provide:j0,useFactory:()=>(G2("NgHttpTransferCache"),H({isCacheActive:!0},e))},{provide:P0,useValue:t9,multi:!0},{provide:P4,multi:!0,useFactory:()=>{let c=d(L2),t=d(j0);return()=>{c.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var $5=(()=>{class e{_doc;_dom;constructor(t){this._doc=t,this._dom=I1()}addTag(t,a=!1){return t?this._getOrCreateElement(t,a):null}addTags(t,a=!1){return t?t.reduce((n,r)=>(r&&n.push(this._getOrCreateElement(r,a)),n),[]):[]}getTag(t){return t&&this._doc.querySelector(`meta[${t}]`)||null}getTags(t){if(!t)return[];let a=this._doc.querySelectorAll(`meta[${t}]`);return a?[].slice.call(a):[]}updateTag(t,a){if(!t)return null;a=a||this._parseSelector(t);let n=this.getTag(a);return n?this._setMetaElementAttributes(t,n):this._getOrCreateElement(t,!0)}removeTag(t){this.removeTagElement(this.getTag(t))}removeTagElement(t){t&&this._dom.remove(t)}_getOrCreateElement(t,a=!1){if(!a){let i=this._parseSelector(t),o=this.getTags(i).filter(s=>this._containsAttributes(t,s))[0];if(o!==void 0)return o}let n=this._dom.createElement("meta");return this._setMetaElementAttributes(t,n),this._doc.getElementsByTagName("head")[0].appendChild(n),n}_setMetaElementAttributes(t,a){return Object.keys(t).forEach(n=>a.setAttribute(this._getMetaKeyMap(n),t[n])),a}_parseSelector(t){let a=t.name?"name":"property";return`${a}="${t[a]}"`}_containsAttributes(t,a){return Object.keys(t).every(n=>a.getAttribute(this._getMetaKeyMap(n))===t[n])}_getMetaKeyMap(t){return i9[t]||t}static \u0275fac=function(a){return new(a||e)(k(E))};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),i9={httpEquiv:"http-equiv"},c6=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(a){return new(a||e)(k(E))};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var G3=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:function(a){let n=null;return a?n=new(a||e):n=k(o9),n},providedIn:"root"})}return e})(),o9=(()=>{class e extends G3{_doc;constructor(t){super(),this._doc=t}sanitize(t,a){if(a==null)return null;switch(t){case y2.NONE:return a;case y2.HTML:return j2(a,"HTML")?V2(a):Ge(this._doc,String(a)).toString();case y2.STYLE:return j2(a,"Style")?V2(a):a;case y2.SCRIPT:if(j2(a,"Script"))return V2(a);throw new _(5200,!1);case y2.URL:return j2(a,"URL")?V2(a):qe(String(a));case y2.RESOURCE_URL:if(j2(a,"ResourceURL"))return V2(a);throw new _(5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(t){return Pe(t)}bypassSecurityTrustStyle(t){return Oe(t)}bypassSecurityTrustScript(t){return Be(t)}bypassSecurityTrustUrl(t){return Ue(t)}bypassSecurityTrustResourceUrl(t){return je(t)}static \u0275fac=function(a){return new(a||e)(k(E))};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),q0=function(e){return e[e.NoHttpTransferCache=0]="NoHttpTransferCache",e[e.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",e[e.I18nSupport=2]="I18nSupport",e[e.EventReplay=3]="EventReplay",e[e.IncrementalHydration=4]="IncrementalHydration",e}(q0||{});function W5(...e){let c=[],t=new Set;for(let{\u0275providers:n,\u0275kind:r}of e)t.add(r),n.length&&c.push(n);let a=t.has(q0.HttpTransferCacheOptions);return Z1([[],u5(),t.has(q0.NoHttpTransferCache)||a?[]:G5({}),c])}var T="primary",n4=Symbol("RouteTitle"),X0=class{params;constructor(c){this.params=c||{}}has(c){return Object.prototype.hasOwnProperty.call(this.params,c)}get(c){if(this.has(c)){let t=this.params[c];return Array.isArray(t)?t[0]:t}return null}getAll(c){if(this.has(c)){let t=this.params[c];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function D2(e){return new X0(e)}function t7(e,c,t){let a=t.path.split("/");if(a.length>e.length||t.pathMatch==="full"&&(c.hasChildren()||a.length<e.length))return null;let n={};for(let r=0;r<a.length;r++){let i=a[r],o=e[r];if(i[0]===":")n[i.substring(1)]=o;else if(i!==o.path)return null}return{consumed:e.slice(0,a.length),posParams:n}}function l9(e,c){if(e.length!==c.length)return!1;for(let t=0;t<e.length;++t)if(!F1(e[t],c[t]))return!1;return!0}function F1(e,c){let t=e?K0(e):void 0,a=c?K0(c):void 0;if(!t||!a||t.length!=a.length)return!1;let n;for(let r=0;r<t.length;r++)if(n=t[r],!a7(e[n],c[n]))return!1;return!0}function K0(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function a7(e,c){if(Array.isArray(e)&&Array.isArray(c)){if(e.length!==c.length)return!1;let t=[...e].sort(),a=[...c].sort();return t.every((n,r)=>a[r]===n)}else return e===c}function c7(e){return e.length>0?e[e.length-1]:null}function J1(e){return Ve(e)?e:h0(e)?H1(Promise.resolve(e)):A(e)}var f9={exact:r7,subset:i7},n7={exact:u9,subset:d9,ignored:()=>!0};function Z5(e,c,t){return f9[t.paths](e.root,c.root,t.matrixParams)&&n7[t.queryParams](e.queryParams,c.queryParams)&&!(t.fragment==="exact"&&e.fragment!==c.fragment)}function u9(e,c){return F1(e,c)}function r7(e,c,t){if(!N2(e.segments,c.segments)||!i6(e.segments,c.segments,t)||e.numberOfChildren!==c.numberOfChildren)return!1;for(let a in c.children)if(!e.children[a]||!r7(e.children[a],c.children[a],t))return!1;return!0}function d9(e,c){return Object.keys(c).length<=Object.keys(e).length&&Object.keys(c).every(t=>a7(e[t],c[t]))}function i7(e,c,t){return o7(e,c,c.segments,t)}function o7(e,c,t,a){if(e.segments.length>t.length){let n=e.segments.slice(0,t.length);return!(!N2(n,t)||c.hasChildren()||!i6(n,t,a))}else if(e.segments.length===t.length){if(!N2(e.segments,t)||!i6(e.segments,t,a))return!1;for(let n in c.children)if(!e.children[n]||!i7(e.children[n],c.children[n],a))return!1;return!0}else{let n=t.slice(0,e.segments.length),r=t.slice(e.segments.length);return!N2(e.segments,n)||!i6(e.segments,n,a)||!e.children[T]?!1:o7(e.children[T],c,r,a)}}function i6(e,c,t){return c.every((a,n)=>n7[t](e[n].parameters,a.parameters))}var O1=class{root;queryParams;fragment;_queryParamMap;constructor(c=new O([],{}),t={},a=null){this.root=c,this.queryParams=t,this.fragment=a}get queryParamMap(){return this._queryParamMap??=D2(this.queryParams),this._queryParamMap}toString(){return p9.serialize(this)}},O=class{segments;children;parent=null;constructor(c,t){this.segments=c,this.children=t,Object.values(t).forEach(a=>a.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return o6(this)}},f2=class{path;parameters;_parameterMap;constructor(c,t){this.path=c,this.parameters=t}get parameterMap(){return this._parameterMap??=D2(this.parameters),this._parameterMap}toString(){return l7(this)}};function m9(e,c){return N2(e,c)&&e.every((t,a)=>F1(t.parameters,c[a].parameters))}function N2(e,c){return e.length!==c.length?!1:e.every((t,a)=>t.path===c[a].path)}function h9(e,c){let t=[];return Object.entries(e.children).forEach(([a,n])=>{a===T&&(t=t.concat(c(n,a)))}),Object.entries(e.children).forEach(([a,n])=>{a!==T&&(t=t.concat(c(n,a)))}),t}var f3=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>new T2,providedIn:"root"})}return e})(),T2=class{parse(c){let t=new Q0(c);return new O1(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(c){let t=`/${$3(c.root,!0)}`,a=b9(c.queryParams),n=typeof c.fragment=="string"?`#${v9(c.fragment)}`:"";return`${t}${a}${n}`}},p9=new T2;function o6(e){return e.segments.map(c=>l7(c)).join("/")}function $3(e,c){if(!e.hasChildren())return o6(e);if(c){let t=e.children[T]?$3(e.children[T],!1):"",a=[];return Object.entries(e.children).forEach(([n,r])=>{n!==T&&a.push(`${n}:${$3(r,!1)}`)}),a.length>0?`${t}(${a.join("//")})`:t}else{let t=h9(e,(a,n)=>n===T?[$3(e.children[T],!1)]:[`${n}:${$3(a,!1)}`]);return Object.keys(e.children).length===1&&e.children[T]!=null?`${o6(e)}/${t[0]}`:`${o6(e)}/(${t.join("//")})`}}function s7(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function n6(e){return s7(e).replace(/%3B/gi,";")}function v9(e){return encodeURI(e)}function J0(e){return s7(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function s6(e){return decodeURIComponent(e)}function Y5(e){return s6(e.replace(/\+/g,"%20"))}function l7(e){return`${J0(e.path)}${g9(e.parameters)}`}function g9(e){return Object.entries(e).map(([c,t])=>`;${J0(c)}=${J0(t)}`).join("")}function b9(e){let c=Object.entries(e).map(([t,a])=>Array.isArray(a)?a.map(n=>`${n6(t)}=${n6(n)}`).join("&"):`${n6(t)}=${n6(a)}`).filter(t=>t);return c.length?`?${c.join("&")}`:""}var z9=/^[^\/()?;#]+/;function $0(e){let c=e.match(z9);return c?c[0]:""}var C9=/^[^\/()?;=#]+/;function M9(e){let c=e.match(C9);return c?c[0]:""}var H9=/^[^=?&#]+/;function V9(e){let c=e.match(H9);return c?c[0]:""}var y9=/^[^&#]+/;function L9(e){let c=e.match(y9);return c?c[0]:""}var Q0=class{url;remaining;constructor(c){this.url=c,this.remaining=c}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new O([],{}):new O([],this.parseChildren())}parseQueryParams(){let c={};if(this.consumeOptional("?"))do this.parseQueryParam(c);while(this.consumeOptional("&"));return c}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let c=[];for(this.peekStartsWith("(")||c.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),c.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let a={};return this.peekStartsWith("(")&&(a=this.parseParens(!1)),(c.length>0||Object.keys(t).length>0)&&(a[T]=new O(c,t)),a}parseSegment(){let c=$0(this.remaining);if(c===""&&this.peekStartsWith(";"))throw new _(4009,!1);return this.capture(c),new f2(s6(c),this.parseMatrixParams())}parseMatrixParams(){let c={};for(;this.consumeOptional(";");)this.parseParam(c);return c}parseParam(c){let t=M9(this.remaining);if(!t)return;this.capture(t);let a="";if(this.consumeOptional("=")){let n=$0(this.remaining);n&&(a=n,this.capture(a))}c[s6(t)]=s6(a)}parseQueryParam(c){let t=V9(this.remaining);if(!t)return;this.capture(t);let a="";if(this.consumeOptional("=")){let i=L9(this.remaining);i&&(a=i,this.capture(a))}let n=Y5(t),r=Y5(a);if(c.hasOwnProperty(n)){let i=c[n];Array.isArray(i)||(i=[i],c[n]=i),i.push(r)}else c[n]=r}parseParens(c){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let a=$0(this.remaining),n=this.remaining[a.length];if(n!=="/"&&n!==")"&&n!==";")throw new _(4010,!1);let r;a.indexOf(":")>-1?(r=a.slice(0,a.indexOf(":")),this.capture(r),this.capture(":")):c&&(r=T);let i=this.parseChildren();t[r]=Object.keys(i).length===1?i[T]:new O([],i),this.consumeOptional("//")}return t}peekStartsWith(c){return this.remaining.startsWith(c)}consumeOptional(c){return this.peekStartsWith(c)?(this.remaining=this.remaining.substring(c.length),!0):!1}capture(c){if(!this.consumeOptional(c))throw new _(4011,!1)}};function f7(e){return e.segments.length>0?new O([],{[T]:e}):e}function u7(e){let c={};for(let[a,n]of Object.entries(e.children)){let r=u7(n);if(a===T&&r.segments.length===0&&r.hasChildren())for(let[i,o]of Object.entries(r.children))c[i]=o;else(r.segments.length>0||r.hasChildren())&&(c[a]=r)}let t=new O(e.segments,c);return w9(t)}function w9(e){if(e.numberOfChildren===1&&e.children[T]){let c=e.children[T];return new O(e.segments.concat(c.segments),c.children)}return e}function c3(e){return e instanceof O1}function d7(e,c,t=null,a=null){let n=m7(e);return h7(n,c,t,a)}function m7(e){let c;function t(r){let i={};for(let s of r.children){let l=t(s);i[s.outlet]=l}let o=new O(r.url,i);return r===e&&(c=o),o}let a=t(e.root),n=f7(a);return c??n}function h7(e,c,t,a){let n=e;for(;n.parent;)n=n.parent;if(c.length===0)return W0(n,n,n,t,a);let r=x9(c);if(r.toRoot())return W0(n,n,new O([],{}),t,a);let i=S9(r,n,e),o=i.processChildren?Z3(i.segmentGroup,i.index,r.commands):v7(i.segmentGroup,i.index,r.commands);return W0(n,i.segmentGroup,o,t,a)}function l6(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function X3(e){return typeof e=="object"&&e!=null&&e.outlets}function W0(e,c,t,a,n){let r={};a&&Object.entries(a).forEach(([s,l])=>{r[s]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let i;e===c?i=t:i=p7(e,c,t);let o=f7(u7(i));return new O1(o,r,n)}function p7(e,c,t){let a={};return Object.entries(e.children).forEach(([n,r])=>{r===c?a[n]=t:a[n]=p7(r,c,t)}),new O(e.segments,a)}var f6=class{isAbsolute;numberOfDoubleDots;commands;constructor(c,t,a){if(this.isAbsolute=c,this.numberOfDoubleDots=t,this.commands=a,c&&a.length>0&&l6(a[0]))throw new _(4003,!1);let n=a.find(X3);if(n&&n!==c7(a))throw new _(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function x9(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new f6(!0,0,e);let c=0,t=!1,a=e.reduce((n,r,i)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let o={};return Object.entries(r.outlets).forEach(([s,l])=>{o[s]=typeof l=="string"?l.split("/"):l}),[...n,{outlets:o}]}if(r.segmentPath)return[...n,r.segmentPath]}return typeof r!="string"?[...n,r]:i===0?(r.split("/").forEach((o,s)=>{s==0&&o==="."||(s==0&&o===""?t=!0:o===".."?c++:o!=""&&n.push(o))}),n):[...n,r]},[]);return new f6(t,c,a)}var e3=class{segmentGroup;processChildren;index;constructor(c,t,a){this.segmentGroup=c,this.processChildren=t,this.index=a}};function S9(e,c,t){if(e.isAbsolute)return new e3(c,!0,0);if(!t)return new e3(c,!1,NaN);if(t.parent===null)return new e3(t,!0,0);let a=l6(e.commands[0])?0:1,n=t.segments.length-1+a;return A9(t,n,e.numberOfDoubleDots)}function A9(e,c,t){let a=e,n=c,r=t;for(;r>n;){if(r-=n,a=a.parent,!a)throw new _(4005,!1);n=a.segments.length}return new e3(a,!1,n-r)}function N9(e){return X3(e[0])?e[0].outlets:{[T]:e}}function v7(e,c,t){if(e??=new O([],{}),e.segments.length===0&&e.hasChildren())return Z3(e,c,t);let a=k9(e,c,t),n=t.slice(a.commandIndex);if(a.match&&a.pathIndex<e.segments.length){let r=new O(e.segments.slice(0,a.pathIndex),{});return r.children[T]=new O(e.segments.slice(a.pathIndex),e.children),Z3(r,0,n)}else return a.match&&n.length===0?new O(e.segments,{}):a.match&&!e.hasChildren()?e8(e,c,t):a.match?Z3(e,0,n):e8(e,c,t)}function Z3(e,c,t){if(t.length===0)return new O(e.segments,{});{let a=N9(t),n={};if(Object.keys(a).some(r=>r!==T)&&e.children[T]&&e.numberOfChildren===1&&e.children[T].segments.length===0){let r=Z3(e.children[T],c,t);return new O(e.segments,r.children)}return Object.entries(a).forEach(([r,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[r]=v7(e.children[r],c,i))}),Object.entries(e.children).forEach(([r,i])=>{a[r]===void 0&&(n[r]=i)}),new O(e.segments,n)}}function k9(e,c,t){let a=0,n=c,r={match:!1,pathIndex:0,commandIndex:0};for(;n<e.segments.length;){if(a>=t.length)return r;let i=e.segments[n],o=t[a];if(X3(o))break;let s=`${o}`,l=a<t.length-1?t[a+1]:null;if(n>0&&s===void 0)break;if(s&&l&&typeof l=="object"&&l.outlets===void 0){if(!K5(s,l,i))return r;a+=2}else{if(!K5(s,{},i))return r;a++}n++}return{match:!0,pathIndex:n,commandIndex:a}}function e8(e,c,t){let a=e.segments.slice(0,c),n=0;for(;n<t.length;){let r=t[n];if(X3(r)){let s=D9(r.outlets);return new O(a,s)}if(n===0&&l6(t[0])){let s=e.segments[c];a.push(new f2(s.path,X5(t[0]))),n++;continue}let i=X3(r)?r.outlets[T]:`${r}`,o=n<t.length-1?t[n+1]:null;i&&o&&l6(o)?(a.push(new f2(i,X5(o))),n+=2):(a.push(new f2(i,{})),n++)}return new O(a,{})}function D9(e){let c={};return Object.entries(e).forEach(([t,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(c[t]=e8(new O([],{}),0,a))}),c}function X5(e){let c={};return Object.entries(e).forEach(([t,a])=>c[t]=`${a}`),c}function K5(e,c,t){return e==t.path&&F1(c,t.parameters)}var t3="imperative",K=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(K||{}),C1=class{id;url;constructor(c,t){this.id=c,this.url=t}},u2=class extends C1{type=K.NavigationStart;navigationTrigger;restoredState;constructor(c,t,a="imperative",n=null){super(c,t),this.navigationTrigger=a,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},B1=class extends C1{urlAfterRedirects;type=K.NavigationEnd;constructor(c,t,a){super(c,t),this.urlAfterRedirects=a}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},f1=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e}(f1||{}),n3=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(n3||{}),P1=class extends C1{reason;code;type=K.NavigationCancel;constructor(c,t,a,n){super(c,t),this.reason=a,this.code=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},U1=class extends C1{reason;code;type=K.NavigationSkipped;constructor(c,t,a,n){super(c,t),this.reason=a,this.code=n}},r3=class extends C1{error;target;type=K.NavigationError;constructor(c,t,a,n){super(c,t),this.error=a,this.target=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},K3=class extends C1{urlAfterRedirects;state;type=K.RoutesRecognized;constructor(c,t,a,n){super(c,t),this.urlAfterRedirects=a,this.state=n}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},u6=class extends C1{urlAfterRedirects;state;type=K.GuardsCheckStart;constructor(c,t,a,n){super(c,t),this.urlAfterRedirects=a,this.state=n}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},d6=class extends C1{urlAfterRedirects;state;shouldActivate;type=K.GuardsCheckEnd;constructor(c,t,a,n,r){super(c,t),this.urlAfterRedirects=a,this.state=n,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},m6=class extends C1{urlAfterRedirects;state;type=K.ResolveStart;constructor(c,t,a,n){super(c,t),this.urlAfterRedirects=a,this.state=n}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},h6=class extends C1{urlAfterRedirects;state;type=K.ResolveEnd;constructor(c,t,a,n){super(c,t),this.urlAfterRedirects=a,this.state=n}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},p6=class{route;type=K.RouteConfigLoadStart;constructor(c){this.route=c}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},v6=class{route;type=K.RouteConfigLoadEnd;constructor(c){this.route=c}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},g6=class{snapshot;type=K.ChildActivationStart;constructor(c){this.snapshot=c}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},b6=class{snapshot;type=K.ChildActivationEnd;constructor(c){this.snapshot=c}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},z6=class{snapshot;type=K.ActivationStart;constructor(c){this.snapshot=c}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},C6=class{snapshot;type=K.ActivationEnd;constructor(c){this.snapshot=c}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},i3=class{routerEvent;position;anchor;type=K.Scroll;constructor(c,t,a){this.routerEvent=c,this.position=t,this.anchor=a}toString(){let c=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${c}')`}},J3=class{},o3=class{url;navigationBehaviorOptions;constructor(c,t){this.url=c,this.navigationBehaviorOptions=t}};function T9(e){return!(e instanceof J3)&&!(e instanceof o3)}function _9(e,c){return e.providers&&!e._injector&&(e._injector=u0(e.providers,c,`Route: ${e.path}`)),e._injector??c}function N1(e){return e.outlet||T}function E9(e,c){let t=e.filter(a=>N1(a)===c);return t.push(...e.filter(a=>N1(a)!==c)),t}function u3(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let c=e.parent;c;c=c.parent){let t=c.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var M6=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return u3(this.route?.snapshot)??this.rootInjector}constructor(c){this.rootInjector=c,this.children=new d3(this.rootInjector)}},d3=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,a){let n=this.getOrCreateContext(t);n.outlet=a,this.contexts.set(t,n)}onChildOutletDestroyed(t){let a=this.getContext(t);a&&(a.outlet=null,a.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let a=this.getContext(t);return a||(a=new M6(this.rootInjector),this.contexts.set(t,a)),a}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(a){return new(a||e)(k(T1))};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),H6=class{_root;constructor(c){this._root=c}get root(){return this._root.value}parent(c){let t=this.pathFromRoot(c);return t.length>1?t[t.length-2]:null}children(c){let t=t8(c,this._root);return t?t.children.map(a=>a.value):[]}firstChild(c){let t=t8(c,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(c){let t=a8(c,this._root);return t.length<2?[]:t[t.length-2].children.map(n=>n.value).filter(n=>n!==c)}pathFromRoot(c){return a8(c,this._root).map(t=>t.value)}};function t8(e,c){if(e===c.value)return c;for(let t of c.children){let a=t8(e,t);if(a)return a}return null}function a8(e,c){if(e===c.value)return[c];for(let t of c.children){let a=a8(e,t);if(a.length)return a.unshift(c),a}return[]}var z1=class{value;children;constructor(c,t){this.value=c,this.children=t}toString(){return`TreeNode(${this.value})`}};function Q2(e){let c={};return e&&e.children.forEach(t=>c[t.value.outlet]=t),c}var Q3=class extends H6{snapshot;constructor(c,t){super(c),this.snapshot=t,f8(this,c)}toString(){return this.snapshot.toString()}};function g7(e){let c=I9(e),t=new d1([new f2("",{})]),a=new d1({}),n=new d1({}),r=new d1({}),i=new d1(""),o=new j1(t,a,r,i,n,T,e,c.root);return o.snapshot=c.root,new Q3(new z1(o,[]),c)}function I9(e){let c={},t={},a={},n="",r=new k2([],c,a,n,t,T,e,null,{});return new e4("",new z1(r,[]))}var j1=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(c,t,a,n,r,i,o,s){this.urlSubject=c,this.paramsSubject=t,this.queryParamsSubject=a,this.fragmentSubject=n,this.dataSubject=r,this.outlet=i,this.component=o,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(R(l=>l[n4]))??A(void 0),this.url=c,this.params=t,this.queryParams=a,this.fragment=n,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(R(c=>D2(c))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(R(c=>D2(c))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function V6(e,c,t="emptyOnly"){let a,{routeConfig:n}=e;return c!==null&&(t==="always"||n?.path===""||!c.component&&!c.routeConfig?.loadComponent)?a={params:H(H({},c.params),e.params),data:H(H({},c.data),e.data),resolve:H(H(H(H({},e.data),c.data),n?.data),e._resolvedData)}:a={params:H({},e.params),data:H({},e.data),resolve:H(H({},e.data),e._resolvedData??{})},n&&z7(n)&&(a.resolve[n4]=n.title),a}var k2=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[n4]}constructor(c,t,a,n,r,i,o,s,l){this.url=c,this.params=t,this.queryParams=a,this.fragment=n,this.data=r,this.outlet=i,this.component=o,this.routeConfig=s,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=D2(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=D2(this.queryParams),this._queryParamMap}toString(){let c=this.url.map(a=>a.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${c}', path:'${t}')`}},e4=class extends H6{url;constructor(c,t){super(t),this.url=c,f8(this,t)}toString(){return b7(this._root)}};function f8(e,c){c.value._routerState=e,c.children.forEach(t=>f8(e,t))}function b7(e){let c=e.children.length>0?` { ${e.children.map(b7).join(", ")} } `:"";return`${e.value}${c}`}function Z0(e){if(e.snapshot){let c=e.snapshot,t=e._futureSnapshot;e.snapshot=t,F1(c.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),c.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),F1(c.params,t.params)||e.paramsSubject.next(t.params),l9(c.url,t.url)||e.urlSubject.next(t.url),F1(c.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function c8(e,c){let t=F1(e.params,c.params)&&m9(e.url,c.url),a=!e.parent!=!c.parent;return t&&!a&&(!e.parent||c8(e.parent,c.parent))}function z7(e){return typeof e.title=="string"||e.title===null}var C7=new S(""),r4=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=T;activateEvents=new s2;deactivateEvents=new s2;attachEvents=new s2;detachEvents=new s2;routerOutletData=D(void 0);parentContexts=d(d3);location=d(x3);changeDetector=d(k3);inputBinder=d(x6,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:a,previousValue:n}=t.name;if(a)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new _(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new _(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new _(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,a){this.activated=t,this._activatedRoute=a,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,a){if(this.isActivated)throw new _(4013,!1);this._activatedRoute=t;let n=this.location,i=t.snapshot.component,o=this.parentContexts.getOrCreateContext(this.name).children,s=new n8(t,o,n.injector,this.routerOutletData);this.activated=n.createComponent(i,{index:n.length,injector:s,environmentInjector:a}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(a){return new(a||e)};static \u0275dir=G({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[y3]})}return e})(),n8=class{route;childContexts;parent;outletData;constructor(c,t,a,n){this.route=c,this.childContexts=t,this.parent=a,this.outletData=n}get(c,t){return c===j1?this.route:c===d3?this.childContexts:c===C7?this.outletData:this.parent.get(c,t)}},x6=new S("");var u8=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(a,n){a&1&&Q(0,"router-outlet")},dependencies:[r4],encapsulation:2})}return e})();function d8(e){let c=e.children&&e.children.map(d8),t=c?J(H({},e),{children:c}):H({},e);return!t.component&&!t.loadComponent&&(c||t.loadChildren)&&t.outlet&&t.outlet!==T&&(t.component=u8),t}function R9(e,c,t){let a=t4(e,c._root,t?t._root:void 0);return new Q3(a,c)}function t4(e,c,t){if(t&&e.shouldReuseRoute(c.value,t.value.snapshot)){let a=t.value;a._futureSnapshot=c.value;let n=F9(e,c,t);return new z1(a,n)}else{if(e.shouldAttach(c.value)){let r=e.retrieve(c.value);if(r!==null){let i=r.route;return i.value._futureSnapshot=c.value,i.children=c.children.map(o=>t4(e,o)),i}}let a=P9(c.value),n=c.children.map(r=>t4(e,r));return new z1(a,n)}}function F9(e,c,t){return c.children.map(a=>{for(let n of t.children)if(e.shouldReuseRoute(a.value,n.value.snapshot))return t4(e,a,n);return t4(e,a)})}function P9(e){return new j1(new d1(e.url),new d1(e.params),new d1(e.queryParams),new d1(e.fragment),new d1(e.data),e.outlet,e.component,e)}var s3=class{redirectTo;navigationBehaviorOptions;constructor(c,t){this.redirectTo=c,this.navigationBehaviorOptions=t}},M7="ngNavigationCancelingError";function y6(e,c){let{redirectTo:t,navigationBehaviorOptions:a}=c3(c)?{redirectTo:c,navigationBehaviorOptions:void 0}:c,n=H7(!1,f1.Redirect);return n.url=t,n.navigationBehaviorOptions=a,n}function H7(e,c){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[M7]=!0,t.cancellationCode=c,t}function O9(e){return V7(e)&&c3(e.url)}function V7(e){return!!e&&e[M7]}var B9=(e,c,t,a)=>R(n=>(new r8(c,n.targetRouterState,n.currentRouterState,t,a).activate(e),n)),r8=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(c,t,a,n,r){this.routeReuseStrategy=c,this.futureState=t,this.currState=a,this.forwardEvent=n,this.inputBindingEnabled=r}activate(c){let t=this.futureState._root,a=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,a,c),Z0(this.futureState.root),this.activateChildRoutes(t,a,c)}deactivateChildRoutes(c,t,a){let n=Q2(t);c.children.forEach(r=>{let i=r.value.outlet;this.deactivateRoutes(r,n[i],a),delete n[i]}),Object.values(n).forEach(r=>{this.deactivateRouteAndItsChildren(r,a)})}deactivateRoutes(c,t,a){let n=c.value,r=t?t.value:null;if(n===r)if(n.component){let i=a.getContext(n.outlet);i&&this.deactivateChildRoutes(c,t,i.children)}else this.deactivateChildRoutes(c,t,a);else r&&this.deactivateRouteAndItsChildren(t,a)}deactivateRouteAndItsChildren(c,t){c.value.component&&this.routeReuseStrategy.shouldDetach(c.value.snapshot)?this.detachAndStoreRouteSubtree(c,t):this.deactivateRouteAndOutlet(c,t)}detachAndStoreRouteSubtree(c,t){let a=t.getContext(c.value.outlet),n=a&&c.value.component?a.children:t,r=Q2(c);for(let i of Object.values(r))this.deactivateRouteAndItsChildren(i,n);if(a&&a.outlet){let i=a.outlet.detach(),o=a.children.onOutletDeactivated();this.routeReuseStrategy.store(c.value.snapshot,{componentRef:i,route:c,contexts:o})}}deactivateRouteAndOutlet(c,t){let a=t.getContext(c.value.outlet),n=a&&c.value.component?a.children:t,r=Q2(c);for(let i of Object.values(r))this.deactivateRouteAndItsChildren(i,n);a&&(a.outlet&&(a.outlet.deactivate(),a.children.onOutletDeactivated()),a.attachRef=null,a.route=null)}activateChildRoutes(c,t,a){let n=Q2(t);c.children.forEach(r=>{this.activateRoutes(r,n[r.value.outlet],a),this.forwardEvent(new C6(r.value.snapshot))}),c.children.length&&this.forwardEvent(new b6(c.value.snapshot))}activateRoutes(c,t,a){let n=c.value,r=t?t.value:null;if(Z0(n),n===r)if(n.component){let i=a.getOrCreateContext(n.outlet);this.activateChildRoutes(c,t,i.children)}else this.activateChildRoutes(c,t,a);else if(n.component){let i=a.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let o=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),i.children.onOutletReAttached(o.contexts),i.attachRef=o.componentRef,i.route=o.route.value,i.outlet&&i.outlet.attach(o.componentRef,o.route.value),Z0(o.route.value),this.activateChildRoutes(c,null,i.children)}else i.attachRef=null,i.route=n,i.outlet&&i.outlet.activateWith(n,i.injector),this.activateChildRoutes(c,null,i.children)}else this.activateChildRoutes(c,null,a)}},L6=class{path;route;constructor(c){this.path=c,this.route=this.path[this.path.length-1]}},a3=class{component;route;constructor(c,t){this.component=c,this.route=t}};function U9(e,c,t){let a=e._root,n=c?c._root:null;return W3(a,n,t,[a.value])}function j9(e){let c=e.routeConfig?e.routeConfig.canActivateChild:null;return!c||c.length===0?null:{node:e,guards:c}}function m3(e,c){let t=Symbol(),a=c.get(e,t);return a===t?typeof e=="function"&&!Ae(e)?e:c.get(e):a}function W3(e,c,t,a,n={canDeactivateChecks:[],canActivateChecks:[]}){let r=Q2(c);return e.children.forEach(i=>{q9(i,r[i.value.outlet],t,a.concat([i.value]),n),delete r[i.value.outlet]}),Object.entries(r).forEach(([i,o])=>Y3(o,t.getContext(i),n)),n}function q9(e,c,t,a,n={canDeactivateChecks:[],canActivateChecks:[]}){let r=e.value,i=c?c.value:null,o=t?t.getContext(e.value.outlet):null;if(i&&r.routeConfig===i.routeConfig){let s=G9(i,r,r.routeConfig.runGuardsAndResolvers);s?n.canActivateChecks.push(new L6(a)):(r.data=i.data,r._resolvedData=i._resolvedData),r.component?W3(e,c,o?o.children:null,a,n):W3(e,c,t,a,n),s&&o&&o.outlet&&o.outlet.isActivated&&n.canDeactivateChecks.push(new a3(o.outlet.component,i))}else i&&Y3(c,o,n),n.canActivateChecks.push(new L6(a)),r.component?W3(e,null,o?o.children:null,a,n):W3(e,null,t,a,n);return n}function G9(e,c,t){if(typeof t=="function")return t(e,c);switch(t){case"pathParamsChange":return!N2(e.url,c.url);case"pathParamsOrQueryParamsChange":return!N2(e.url,c.url)||!F1(e.queryParams,c.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!c8(e,c)||!F1(e.queryParams,c.queryParams);case"paramsChange":default:return!c8(e,c)}}function Y3(e,c,t){let a=Q2(e),n=e.value;Object.entries(a).forEach(([r,i])=>{n.component?c?Y3(i,c.children.getContext(r),t):Y3(i,null,t):Y3(i,c,t)}),n.component?c&&c.outlet&&c.outlet.isActivated?t.canDeactivateChecks.push(new a3(c.outlet.component,n)):t.canDeactivateChecks.push(new a3(null,n)):t.canDeactivateChecks.push(new a3(null,n))}function i4(e){return typeof e=="function"}function $9(e){return typeof e=="boolean"}function W9(e){return e&&i4(e.canLoad)}function Z9(e){return e&&i4(e.canActivate)}function Y9(e){return e&&i4(e.canActivateChild)}function X9(e){return e&&i4(e.canDeactivate)}function K9(e){return e&&i4(e.canMatch)}function y7(e){return e instanceof ye||e?.name==="EmptyError"}var r6=Symbol("INITIAL_VALUE");function l3(){return v1(e=>V3(e.map(c=>c.pipe(r2(1),N4(r6)))).pipe(R(c=>{for(let t of c)if(t!==!0){if(t===r6)return r6;if(t===!1||J9(t))return t}return!0}),W1(c=>c!==r6),r2(1)))}function J9(e){return c3(e)||e instanceof s3}function Q9(e,c){return V1(t=>{let{targetSnapshot:a,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:i}}=t;return i.length===0&&r.length===0?A(J(H({},t),{guardsResult:!0})):en(i,a,n,e).pipe(V1(o=>o&&$9(o)?tn(a,r,e,c):A(o)),R(o=>J(H({},t),{guardsResult:o})))})}function en(e,c,t,a){return H1(e).pipe(V1(n=>on(n.component,n.route,t,c,a)),i2(n=>n!==!0,!0))}function tn(e,c,t,a){return H1(c).pipe(z2(n=>x4(cn(n.route.parent,a),an(n.route,a),rn(e,n.path,t),nn(e,n.route,t))),i2(n=>n!==!0,!0))}function an(e,c){return e!==null&&c&&c(new z6(e)),A(!0)}function cn(e,c){return e!==null&&c&&c(new g6(e)),A(!0)}function nn(e,c,t){let a=c.routeConfig?c.routeConfig.canActivate:null;if(!a||a.length===0)return A(!0);let n=a.map(r=>S4(()=>{let i=u3(c)??t,o=m3(r,i),s=Z9(o)?o.canActivate(c,e):g1(i,()=>o(c,e));return J1(s).pipe(i2())}));return A(n).pipe(l3())}function rn(e,c,t){let a=c[c.length-1],r=c.slice(0,c.length-1).reverse().map(i=>j9(i)).filter(i=>i!==null).map(i=>S4(()=>{let o=i.guards.map(s=>{let l=u3(i.node)??t,u=m3(s,l),z=Y9(u)?u.canActivateChild(a,e):g1(l,()=>u(a,e));return J1(z).pipe(i2())});return A(o).pipe(l3())}));return A(r).pipe(l3())}function on(e,c,t,a,n){let r=c&&c.routeConfig?c.routeConfig.canDeactivate:null;if(!r||r.length===0)return A(!0);let i=r.map(o=>{let s=u3(c)??n,l=m3(o,s),u=X9(l)?l.canDeactivate(e,c,t,a):g1(s,()=>l(e,c,t,a));return J1(u).pipe(i2())});return A(i).pipe(l3())}function sn(e,c,t,a){let n=c.canLoad;if(n===void 0||n.length===0)return A(!0);let r=n.map(i=>{let o=m3(i,e),s=W9(o)?o.canLoad(c,t):g1(e,()=>o(c,t));return J1(s)});return A(r).pipe(l3(),L7(a))}function L7(e){return He(e1(c=>{if(typeof c!="boolean")throw y6(e,c)}),R(c=>c===!0))}function ln(e,c,t,a){let n=c.canMatch;if(!n||n.length===0)return A(!0);let r=n.map(i=>{let o=m3(i,e),s=K9(o)?o.canMatch(c,t):g1(e,()=>o(c,t));return J1(s)});return A(r).pipe(l3(),L7(a))}var a4=class{segmentGroup;constructor(c){this.segmentGroup=c||null}},c4=class extends Error{urlTree;constructor(c){super(),this.urlTree=c}};function J2(e){return H3(new a4(e))}function fn(e){return H3(new _(4e3,!1))}function un(e){return H3(H7(!1,f1.GuardRejected))}var i8=class{urlSerializer;urlTree;constructor(c,t){this.urlSerializer=c,this.urlTree=t}lineralizeSegments(c,t){let a=[],n=t.root;for(;;){if(a=a.concat(n.segments),n.numberOfChildren===0)return A(a);if(n.numberOfChildren>1||!n.children[T])return fn(`${c.redirectTo}`);n=n.children[T]}}applyRedirectCommands(c,t,a,n,r){return dn(t,n,r).pipe(R(i=>{if(i instanceof O1)throw new c4(i);let o=this.applyRedirectCreateUrlTree(i,this.urlSerializer.parse(i),c,a);if(i[0]==="/")throw new c4(o);return o}))}applyRedirectCreateUrlTree(c,t,a,n){let r=this.createSegmentGroup(c,t.root,a,n);return new O1(r,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(c,t){let a={};return Object.entries(c).forEach(([n,r])=>{if(typeof r=="string"&&r[0]===":"){let o=r.substring(1);a[n]=t[o]}else a[n]=r}),a}createSegmentGroup(c,t,a,n){let r=this.createSegments(c,t.segments,a,n),i={};return Object.entries(t.children).forEach(([o,s])=>{i[o]=this.createSegmentGroup(c,s,a,n)}),new O(r,i)}createSegments(c,t,a,n){return t.map(r=>r.path[0]===":"?this.findPosParam(c,r,n):this.findOrReturn(r,a))}findPosParam(c,t,a){let n=a[t.path.substring(1)];if(!n)throw new _(4001,!1);return n}findOrReturn(c,t){let a=0;for(let n of t){if(n.path===c.path)return t.splice(a),n;a++}return c}};function dn(e,c,t){if(typeof e=="string")return A(e);let a=e,{queryParams:n,fragment:r,routeConfig:i,url:o,outlet:s,params:l,data:u,title:z}=c;return J1(g1(t,()=>a({params:l,data:u,queryParams:n,fragment:r,routeConfig:i,url:o,outlet:s,title:z})))}var o8={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function mn(e,c,t,a,n){let r=w7(e,c,t);return r.matched?(a=_9(c,a),ln(a,c,t,n).pipe(R(i=>i===!0?r:H({},o8)))):A(r)}function w7(e,c,t){if(c.path==="**")return hn(t);if(c.path==="")return c.pathMatch==="full"&&(e.hasChildren()||t.length>0)?H({},o8):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let n=(c.matcher||t7)(t,e,c);if(!n)return H({},o8);let r={};Object.entries(n.posParams??{}).forEach(([o,s])=>{r[o]=s.path});let i=n.consumed.length>0?H(H({},r),n.consumed[n.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:n.consumed,remainingSegments:t.slice(n.consumed.length),parameters:i,positionalParamSegments:n.posParams??{}}}function hn(e){return{matched:!0,parameters:e.length>0?c7(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function J5(e,c,t,a){return t.length>0&&gn(e,t,a)?{segmentGroup:new O(c,vn(a,new O(t,e.children))),slicedSegments:[]}:t.length===0&&bn(e,t,a)?{segmentGroup:new O(e.segments,pn(e,t,a,e.children)),slicedSegments:t}:{segmentGroup:new O(e.segments,e.children),slicedSegments:t}}function pn(e,c,t,a){let n={};for(let r of t)if(S6(e,c,r)&&!a[N1(r)]){let i=new O([],{});n[N1(r)]=i}return H(H({},a),n)}function vn(e,c){let t={};t[T]=c;for(let a of e)if(a.path===""&&N1(a)!==T){let n=new O([],{});t[N1(a)]=n}return t}function gn(e,c,t){return t.some(a=>S6(e,c,a)&&N1(a)!==T)}function bn(e,c,t){return t.some(a=>S6(e,c,a))}function S6(e,c,t){return(e.hasChildren()||c.length>0)&&t.pathMatch==="full"?!1:t.path===""}function zn(e,c,t){return c.length===0&&!e.children[t]}var s8=class{};function Cn(e,c,t,a,n,r,i="emptyOnly"){return new l8(e,c,t,a,n,i,r).recognize()}var Mn=31,l8=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(c,t,a,n,r,i,o){this.injector=c,this.configLoader=t,this.rootComponentType=a,this.config=n,this.urlTree=r,this.paramsInheritanceStrategy=i,this.urlSerializer=o,this.applyRedirects=new i8(this.urlSerializer,this.urlTree)}noMatchError(c){return new _(4002,`'${c.segmentGroup}'`)}recognize(){let c=J5(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(c).pipe(R(({children:t,rootSnapshot:a})=>{let n=new z1(a,t),r=new e4("",n),i=d7(a,[],this.urlTree.queryParams,this.urlTree.fragment);return i.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(i),{state:r,tree:i}}))}match(c){let t=new k2([],Object.freeze({}),Object.freeze(H({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),T,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,c,T,t).pipe(R(a=>({children:a,rootSnapshot:t})),O2(a=>{if(a instanceof c4)return this.urlTree=a.urlTree,this.match(a.urlTree.root);throw a instanceof a4?this.noMatchError(a):a}))}processSegmentGroup(c,t,a,n,r){return a.segments.length===0&&a.hasChildren()?this.processChildren(c,t,a,r):this.processSegment(c,t,a,a.segments,n,!0,r).pipe(R(i=>i instanceof z1?[i]:[]))}processChildren(c,t,a,n){let r=[];for(let i of Object.keys(a.children))i==="primary"?r.unshift(i):r.push(i);return H1(r).pipe(z2(i=>{let o=a.children[i],s=E9(t,i);return this.processSegmentGroup(c,s,o,i,n)}),Se((i,o)=>(i.push(...o),i)),n0(null),xe(),V1(i=>{if(i===null)return J2(a);let o=x7(i);return Hn(o),A(o)}))}processSegment(c,t,a,n,r,i,o){return H1(t).pipe(z2(s=>this.processSegmentAgainstRoute(s._injector??c,t,s,a,n,r,i,o).pipe(O2(l=>{if(l instanceof a4)return A(null);throw l}))),i2(s=>!!s),O2(s=>{if(y7(s))return zn(a,n,r)?A(new s8):J2(a);throw s}))}processSegmentAgainstRoute(c,t,a,n,r,i,o,s){return N1(a)!==i&&(i===T||!S6(n,r,a))?J2(n):a.redirectTo===void 0?this.matchSegmentAgainstRoute(c,n,a,r,i,s):this.allowRedirects&&o?this.expandSegmentAgainstRouteUsingRedirect(c,n,t,a,r,i,s):J2(n)}expandSegmentAgainstRouteUsingRedirect(c,t,a,n,r,i,o){let{matched:s,parameters:l,consumedSegments:u,positionalParamSegments:z,remainingSegments:b}=w7(t,n,r);if(!s)return J2(t);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Mn&&(this.allowRedirects=!1));let M=new k2(r,l,Object.freeze(H({},this.urlTree.queryParams)),this.urlTree.fragment,Q5(n),N1(n),n.component??n._loadedComponent??null,n,e7(n)),y=V6(M,o,this.paramsInheritanceStrategy);return M.params=Object.freeze(y.params),M.data=Object.freeze(y.data),this.applyRedirects.applyRedirectCommands(u,n.redirectTo,z,M,c).pipe(v1(f=>this.applyRedirects.lineralizeSegments(n,f)),V1(f=>this.processSegment(c,a,t,f.concat(b),i,!1,o)))}matchSegmentAgainstRoute(c,t,a,n,r,i){let o=mn(t,a,n,c,this.urlSerializer);return a.path==="**"&&(t.children={}),o.pipe(v1(s=>s.matched?(c=a._injector??c,this.getChildConfig(c,a,n).pipe(v1(({routes:l})=>{let u=a._loadedInjector??c,{parameters:z,consumedSegments:b,remainingSegments:M}=s,y=new k2(b,z,Object.freeze(H({},this.urlTree.queryParams)),this.urlTree.fragment,Q5(a),N1(a),a.component??a._loadedComponent??null,a,e7(a)),m=V6(y,i,this.paramsInheritanceStrategy);y.params=Object.freeze(m.params),y.data=Object.freeze(m.data);let{segmentGroup:f,slicedSegments:h}=J5(t,b,M,l);if(h.length===0&&f.hasChildren())return this.processChildren(u,l,f,y).pipe(R(v=>new z1(y,v)));if(l.length===0&&h.length===0)return A(new z1(y,[]));let p=N1(a)===r;return this.processSegment(u,l,f,h,p?T:r,!0,y).pipe(R(v=>new z1(y,v instanceof z1?[v]:[])))}))):J2(t)))}getChildConfig(c,t,a){return t.children?A({routes:t.children,injector:c}):t.loadChildren?t._loadedRoutes!==void 0?A({routes:t._loadedRoutes,injector:t._loadedInjector}):sn(c,t,a,this.urlSerializer).pipe(V1(n=>n?this.configLoader.loadChildren(c,t).pipe(e1(r=>{t._loadedRoutes=r.routes,t._loadedInjector=r.injector})):un(t))):A({routes:[],injector:c})}};function Hn(e){e.sort((c,t)=>c.value.outlet===T?-1:t.value.outlet===T?1:c.value.outlet.localeCompare(t.value.outlet))}function Vn(e){let c=e.value.routeConfig;return c&&c.path===""}function x7(e){let c=[],t=new Set;for(let a of e){if(!Vn(a)){c.push(a);continue}let n=c.find(r=>a.value.routeConfig===r.value.routeConfig);n!==void 0?(n.children.push(...a.children),t.add(n)):c.push(a)}for(let a of t){let n=x7(a.children);c.push(new z1(a.value,n))}return c.filter(a=>!t.has(a))}function Q5(e){return e.data||{}}function e7(e){return e.resolve||{}}function yn(e,c,t,a,n,r){return V1(i=>Cn(e,c,t,a,i.extractedUrl,n,r).pipe(R(({state:o,tree:s})=>J(H({},i),{targetSnapshot:o,urlAfterRedirects:s}))))}function Ln(e,c){return V1(t=>{let{targetSnapshot:a,guards:{canActivateChecks:n}}=t;if(!n.length)return A(t);let r=new Set(n.map(s=>s.route)),i=new Set;for(let s of r)if(!i.has(s))for(let l of S7(s))i.add(l);let o=0;return H1(i).pipe(z2(s=>r.has(s)?wn(s,a,e,c):(s.data=V6(s,s.parent,e).resolve,A(void 0))),e1(()=>o++),r0(1),V1(s=>o===i.size?A(t):$1))})}function S7(e){let c=e.children.map(t=>S7(t)).flat();return[e,...c]}function wn(e,c,t,a){let n=e.routeConfig,r=e._resolve;return n?.title!==void 0&&!z7(n)&&(r[n4]=n.title),S4(()=>(e.data=V6(e,e.parent,t).resolve,xn(r,e,c,a).pipe(R(i=>(e._resolvedData=i,e.data=H(H({},e.data),i),null)))))}function xn(e,c,t,a){let n=K0(e);if(n.length===0)return A({});let r={};return H1(n).pipe(V1(i=>Sn(e[i],c,t,a).pipe(i2(),e1(o=>{if(o instanceof s3)throw y6(new T2,o);r[i]=o}))),r0(1),R(()=>r),O2(i=>y7(i)?$1:H3(i)))}function Sn(e,c,t,a){let n=u3(c)??a,r=m3(e,n),i=r.resolve?r.resolve(c,t):g1(n,()=>r(c,t));return J1(i)}function Y0(e){return v1(c=>{let t=e(c);return t?H1(t).pipe(R(()=>c)):A(c)})}var m8=(()=>{class e{buildTitle(t){let a,n=t.root;for(;n!==void 0;)a=this.getResolvedTitleForRoute(n)??a,n=n.children.find(r=>r.outlet===T);return a}getResolvedTitleForRoute(t){return t.data[n4]}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>d(A7),providedIn:"root"})}return e})(),A7=(()=>{class e extends m8{title;constructor(t){super(),this.title=t}updateTitle(t){let a=this.buildTitle(t);a!==void 0&&this.title.setTitle(a)}static \u0275fac=function(a){return new(a||e)(k(c6))};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),o4=new S("",{providedIn:"root",factory:()=>({})}),s4=new S(""),N7=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(s5);loadComponent(t,a){if(this.componentLoaders.get(a))return this.componentLoaders.get(a);if(a._loadedComponent)return A(a._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(a);let n=J1(g1(t,()=>a.loadComponent())).pipe(R(D7),e1(i=>{this.onLoadEndListener&&this.onLoadEndListener(a),a._loadedComponent=i}),B2(()=>{this.componentLoaders.delete(a)})),r=new c0(n,()=>new i1).pipe(a0());return this.componentLoaders.set(a,r),r}loadChildren(t,a){if(this.childrenLoaders.get(a))return this.childrenLoaders.get(a);if(a._loadedRoutes)return A({routes:a._loadedRoutes,injector:a._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(a);let r=k7(a,this.compiler,t,this.onLoadEndListener).pipe(B2(()=>{this.childrenLoaders.delete(a)})),i=new c0(r,()=>new i1).pipe(a0());return this.childrenLoaders.set(a,i),i}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function k7(e,c,t,a){return J1(g1(t,()=>e.loadChildren())).pipe(R(D7),V1(n=>n instanceof $e||Array.isArray(n)?A(n):H1(c.compileModuleAsync(n))),R(n=>{a&&a(e);let r,i,o=!1;return Array.isArray(n)?(i=n,o=!0):(r=n.create(t).injector,i=r.get(s4,[],{optional:!0,self:!0}).flat()),{routes:i.map(d8),injector:r}}))}function An(e){return e&&typeof e=="object"&&"default"in e}function D7(e){return An(e)?e.default:e}var A6=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>d(Nn),providedIn:"root"})}return e})(),Nn=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,a){return t}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),T7=new S("");var _7=new S(""),h8=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new i1;transitionAbortWithErrorSubject=new i1;configLoader=d(N7);environmentInjector=d(T1);destroyRef=d(k4);urlSerializer=d(f3);rootContexts=d(d3);location=d(X1);inputBindingEnabled=d(x6,{optional:!0})!==null;titleStrategy=d(m8);options=d(o4,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(A6);createViewTransition=d(T7,{optional:!0});navigationErrorHandler=d(_7,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>A(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=n=>this.events.next(new p6(n)),a=n=>this.events.next(new v6(n));this.configLoader.onLoadEndListener=a,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let a=++this.navigationId;this.transitions?.next(J(H({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:a}))}setupNavigations(t){return this.transitions=new d1(null),this.transitions.pipe(W1(a=>a!==null),v1(a=>{let n=!1;return A(a).pipe(v1(r=>{if(this.navigationId>a.id)return this.cancelNavigationTransition(a,"",f1.SupersededByNewNavigation),$1;this.currentTransition=a,this.currentNavigation={id:r.id,initialUrl:r.rawUrl,extractedUrl:r.extractedUrl,targetBrowserUrl:typeof r.extras.browserUrl=="string"?this.urlSerializer.parse(r.extras.browserUrl):r.extras.browserUrl,trigger:r.source,extras:r.extras,previousNavigation:this.lastSuccessfulNavigation?J(H({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>r.abortController.abort()};let i=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),o=r.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!i&&o!=="reload"){let s="";return this.events.next(new U1(r.id,this.urlSerializer.serialize(r.rawUrl),s,n3.IgnoredSameUrlNavigation)),r.resolve(!1),$1}if(this.urlHandlingStrategy.shouldProcessUrl(r.rawUrl))return A(r).pipe(v1(s=>(this.events.next(new u2(s.id,this.urlSerializer.serialize(s.extractedUrl),s.source,s.restoredState)),s.id!==this.navigationId?$1:Promise.resolve(s))),yn(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),e1(s=>{a.targetSnapshot=s.targetSnapshot,a.urlAfterRedirects=s.urlAfterRedirects,this.currentNavigation=J(H({},this.currentNavigation),{finalUrl:s.urlAfterRedirects});let l=new K3(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(l)}));if(i&&this.urlHandlingStrategy.shouldProcessUrl(r.currentRawUrl)){let{id:s,extractedUrl:l,source:u,restoredState:z,extras:b}=r,M=new u2(s,this.urlSerializer.serialize(l),u,z);this.events.next(M);let y=g7(this.rootComponentType).snapshot;return this.currentTransition=a=J(H({},r),{targetSnapshot:y,urlAfterRedirects:l,extras:J(H({},b),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=l,A(a)}else{let s="";return this.events.next(new U1(r.id,this.urlSerializer.serialize(r.extractedUrl),s,n3.IgnoredByUrlHandlingStrategy)),r.resolve(!1),$1}}),e1(r=>{let i=new u6(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot);this.events.next(i)}),R(r=>(this.currentTransition=a=J(H({},r),{guards:U9(r.targetSnapshot,r.currentSnapshot,this.rootContexts)}),a)),Q9(this.environmentInjector,r=>this.events.next(r)),e1(r=>{if(a.guardsResult=r.guardsResult,r.guardsResult&&typeof r.guardsResult!="boolean")throw y6(this.urlSerializer,r.guardsResult);let i=new d6(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot,!!r.guardsResult);this.events.next(i)}),W1(r=>r.guardsResult?!0:(this.cancelNavigationTransition(r,"",f1.GuardRejected),!1)),Y0(r=>{if(r.guards.canActivateChecks.length!==0)return A(r).pipe(e1(i=>{let o=new m6(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot);this.events.next(o)}),v1(i=>{let o=!1;return A(i).pipe(Ln(this.paramsInheritanceStrategy,this.environmentInjector),e1({next:()=>o=!0,complete:()=>{o||this.cancelNavigationTransition(i,"",f1.NoDataFromResolver)}}))}),e1(i=>{let o=new h6(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot);this.events.next(o)}))}),Y0(r=>{let i=o=>{let s=[];if(o.routeConfig?.loadComponent&&!o.routeConfig._loadedComponent){let l=u3(o)??this.environmentInjector;s.push(this.configLoader.loadComponent(l,o.routeConfig).pipe(e1(u=>{o.component=u}),R(()=>{})))}for(let l of o.children)s.push(...i(l));return s};return V3(i(r.targetSnapshot.root)).pipe(n0(null),r2(1))}),Y0(()=>this.afterPreactivation()),v1(()=>{let{currentSnapshot:r,targetSnapshot:i}=a,o=this.createViewTransition?.(this.environmentInjector,r.root,i.root);return o?H1(o).pipe(R(()=>a)):A(a)}),R(r=>{let i=R9(t.routeReuseStrategy,r.targetSnapshot,r.currentRouterState);return this.currentTransition=a=J(H({},r),{targetRouterState:i}),this.currentNavigation.targetRouterState=i,a}),e1(()=>{this.events.next(new J3)}),B9(this.rootContexts,t.routeReuseStrategy,r=>this.events.next(r),this.inputBindingEnabled),r2(1),C2(new b2(r=>{let i=a.abortController.signal,o=()=>r.next();return i.addEventListener("abort",o),()=>i.removeEventListener("abort",o)}).pipe(W1(()=>!n&&!a.targetRouterState),e1(()=>{this.cancelNavigationTransition(a,a.abortController.signal.reason+"",f1.Aborted)}))),e1({next:r=>{n=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new B1(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects))),this.titleStrategy?.updateTitle(r.targetRouterState.snapshot),r.resolve(!0)},complete:()=>{n=!0}}),C2(this.transitionAbortWithErrorSubject.pipe(e1(r=>{throw r}))),B2(()=>{n||this.cancelNavigationTransition(a,"",f1.SupersededByNewNavigation),this.currentTransition?.id===a.id&&(this.currentNavigation=null,this.currentTransition=null)}),O2(r=>{if(this.destroyed)return a.resolve(!1),$1;if(n=!0,V7(r))this.events.next(new P1(a.id,this.urlSerializer.serialize(a.extractedUrl),r.message,r.cancellationCode)),O9(r)?this.events.next(new o3(r.url,r.navigationBehaviorOptions)):a.resolve(!1);else{let i=new r3(a.id,this.urlSerializer.serialize(a.extractedUrl),r,a.targetSnapshot??void 0);try{let o=g1(this.environmentInjector,()=>this.navigationErrorHandler?.(i));if(o instanceof s3){let{message:s,cancellationCode:l}=y6(this.urlSerializer,o);this.events.next(new P1(a.id,this.urlSerializer.serialize(a.extractedUrl),s,l)),this.events.next(new o3(o.redirectTo,o.navigationBehaviorOptions))}else throw this.events.next(i),r}catch(o){this.options.resolveNavigationPromiseOnError?a.resolve(!1):a.reject(o)}}return $1}))}))}cancelNavigationTransition(t,a,n){let r=new P1(t.id,this.urlSerializer.serialize(t.extractedUrl),a,n);this.events.next(r),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),a=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==a?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function kn(e){return e!==t3}var E7=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>d(Dn),providedIn:"root"})}return e})(),w6=class{shouldDetach(c){return!1}store(c,t){}shouldAttach(c){return!1}retrieve(c){return null}shouldReuseRoute(c,t){return c.routeConfig===t.routeConfig}},Dn=(()=>{class e extends w6{static \u0275fac=(()=>{let t;return function(n){return(t||(t=_4(e)))(n||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),I7=(()=>{class e{urlSerializer=d(f3);options=d(o4,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(X1);urlHandlingStrategy=d(A6);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new O1;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:a,targetBrowserUrl:n}){let r=t!==void 0?this.urlHandlingStrategy.merge(t,a):a,i=n??r;return i instanceof O1?this.urlSerializer.serialize(i):i}commitTransition({targetRouterState:t,finalUrl:a,initialUrl:n}){a&&t?(this.currentUrlTree=a,this.rawUrlTree=this.urlHandlingStrategy.merge(a,n),this.routerState=t):this.rawUrlTree=n}routerState=g7(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:()=>d(Tn),providedIn:"root"})}return e})(),Tn=(()=>{class e extends I7{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(a=>{a.type==="popstate"&&setTimeout(()=>{t(a.url,a.state,"popstate")})})}handleRouterEvent(t,a){t instanceof u2?this.updateStateMemento():t instanceof U1?this.commitTransition(a):t instanceof K3?this.urlUpdateStrategy==="eager"&&(a.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(a),a)):t instanceof J3?(this.commitTransition(a),this.urlUpdateStrategy==="deferred"&&!a.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(a),a)):t instanceof P1&&t.code!==f1.SupersededByNewNavigation&&t.code!==f1.Redirect?this.restoreHistory(a):t instanceof r3?this.restoreHistory(a,!0):t instanceof B1&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:a,id:n}){let{replaceUrl:r,state:i}=a;if(this.location.isCurrentPathEqualTo(t)||r){let o=this.browserPageId,s=H(H({},i),this.generateNgRouterState(n,o));this.location.replaceState(t,"",s)}else{let o=H(H({},i),this.generateNgRouterState(n,this.browserPageId+1));this.location.go(t,"",o)}}restoreHistory(t,a=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,r=this.currentPageId-n;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===t.finalUrl&&r===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(a&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,a){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:a}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_4(e)))(n||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function p8(e,c){e.events.pipe(W1(t=>t instanceof B1||t instanceof P1||t instanceof r3||t instanceof U1),R(t=>t instanceof B1||t instanceof U1?0:(t instanceof P1?t.code===f1.Redirect||t.code===f1.SupersededByNewNavigation:!1)?2:1),W1(t=>t!==2),r2(1)).subscribe(()=>{c()})}var _n={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},En={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},h3=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(m0);stateManager=d(I7);options=d(o4,{optional:!0})||{};pendingTasks=d(_e);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(h8);urlSerializer=d(f3);location=d(X1);urlHandlingStrategy=d(A6);injector=d(T1);_events=new i1;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(E7);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(s4,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(x6,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Me;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(a=>{try{let n=this.navigationTransitions.currentTransition,r=this.navigationTransitions.currentNavigation;if(n!==null&&r!==null){if(this.stateManager.handleRouterEvent(a,r),a instanceof P1&&a.code!==f1.Redirect&&a.code!==f1.SupersededByNewNavigation)this.navigated=!0;else if(a instanceof B1)this.navigated=!0;else if(a instanceof o3){let i=a.navigationBehaviorOptions,o=this.urlHandlingStrategy.merge(a.url,n.currentRawUrl),s=H({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||kn(n.source)},i);this.scheduleNavigation(o,t3,null,s,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}T9(a)&&this._events.next(a)}catch(n){this.navigationTransitions.transitionAbortWithErrorSubject.next(n)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),t3,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,a,n)=>{this.navigateToSyncWithBrowser(t,n,a)})}navigateToSyncWithBrowser(t,a,n){let r={replaceUrl:!0},i=n?.navigationId?n:null;if(n){let s=H({},n);delete s.navigationId,delete s.\u0275routerPageId,Object.keys(s).length!==0&&(r.state=s)}let o=this.parseUrl(t);this.scheduleNavigation(o,a,i,r).catch(s=>{this.disposed||this.injector.get(D4)(s)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(d8),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,a={}){let{relativeTo:n,queryParams:r,fragment:i,queryParamsHandling:o,preserveFragment:s}=a,l=s?this.currentUrlTree.fragment:i,u=null;switch(o??this.options.defaultQueryParamsHandling){case"merge":u=H(H({},this.currentUrlTree.queryParams),r);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=r||null}u!==null&&(u=this.removeEmptyProps(u));let z;try{let b=n?n.snapshot:this.routerState.snapshot.root;z=m7(b)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),z=this.currentUrlTree.root}return h7(z,t,u,l??null)}navigateByUrl(t,a={skipLocationChange:!1}){let n=c3(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,t3,null,a)}navigate(t,a={skipLocationChange:!1}){return In(t),this.navigateByUrl(this.createUrlTree(t,a),a)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,a){let n;if(a===!0?n=H({},_n):a===!1?n=H({},En):n=a,c3(t))return Z5(this.currentUrlTree,t,n);let r=this.parseUrl(t);return Z5(this.currentUrlTree,r,n)}removeEmptyProps(t){return Object.entries(t).reduce((a,[n,r])=>(r!=null&&(a[n]=r),a),{})}scheduleNavigation(t,a,n,r,i){if(this.disposed)return Promise.resolve(!1);let o,s,l;i?(o=i.resolve,s=i.reject,l=i.promise):l=new Promise((z,b)=>{o=z,s=b});let u=this.pendingTasks.add();return p8(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:a,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:r,resolve:o,reject:s,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(z=>Promise.reject(z))}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function In(e){for(let c=0;c<e.length;c++)if(e[c]==null)throw new _(4008,!1)}var R7=new S(""),Rn=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=t3;restoredId=0;store={};constructor(t,a,n,r,i={}){this.urlSerializer=t,this.transitions=a,this.viewportScroller=n,this.zone=r,this.options=i,i.scrollPositionRestoration||="disabled",i.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof u2?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof B1?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof U1&&t.code===n3.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof i3&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,a){this.zone.runOutsideAngular(()=>P2(this,null,function*(){yield new Promise(n=>{setTimeout(n),typeof requestAnimationFrame<"u"&&requestAnimationFrame(n)}),this.zone.run(()=>{this.transitions.events.next(new i3(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,a))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(a){R4()};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();function v8(e,...c){return Z1([{provide:s4,multi:!0,useValue:e},[],{provide:j1,useFactory:Fn,deps:[h3]},{provide:P4,multi:!0,useFactory:On},c.map(t=>t.\u0275providers)])}function Fn(e){return e.routerState.root}function Pn(e,c){return{\u0275kind:e,\u0275providers:c}}function g8(e={}){return Pn(4,[{provide:R7,useFactory:()=>{let t=d(M5),a=d($),n=d(h8),r=d(f3);return new Rn(r,n,t,a,e)}}])}function On(){let e=d(m1);return c=>{let t=e.get(L2);if(c!==t.components[0])return;let a=e.get(h3),n=e.get(Bn);e.get(Un)===1&&a.initialNavigation(),e.get(jn,null,{optional:!0})?.setUpPreloading(),e.get(R7,null,{optional:!0})?.init(),a.resetRootComponentType(t.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var Bn=new S("",{factory:()=>new i1}),Un=new S("",{providedIn:"root",factory:()=>1});var jn=new S("");var Gn="@",$n=(()=>{class e{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=d(m1);loadingSchedulerFn=d(Wn,{optional:!0});_engine;constructor(t,a,n,r,i){this.doc=t,this.delegate=a,this.zone=n,this.animationType=r,this.moduleImpl=i}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-CKN23VW3.js").then(n=>n),a;return this.loadingSchedulerFn?a=this.loadingSchedulerFn(t):a=t(),a.catch(n=>{throw new _(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let i=new r(this.delegate,this._engine,this.zone);return this.delegate=i,i})}createRenderer(t,a){let n=this.delegate.createRenderer(t,a);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new b8(n);return a?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(i=>{let o=i.createRenderer(t,a);r.use(o),this.scheduler??=this.injector.get(Te,null,{optional:!0}),this.scheduler?.notify(10)}).catch(i=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(a){R4()};static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),b8=class{delegate;replay=[];\u0275type=1;constructor(c){this.delegate=c}use(c){if(this.delegate=c,this.replay!==null){for(let t of this.replay)t(c);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(c,t){return this.delegate.createElement(c,t)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}get destroyNode(){return this.delegate.destroyNode}appendChild(c,t){this.delegate.appendChild(c,t)}insertBefore(c,t,a,n){this.delegate.insertBefore(c,t,a,n)}removeChild(c,t,a){this.delegate.removeChild(c,t,a)}selectRootElement(c,t){return this.delegate.selectRootElement(c,t)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,t,a,n){this.delegate.setAttribute(c,t,a,n)}removeAttribute(c,t,a){this.delegate.removeAttribute(c,t,a)}addClass(c,t){this.delegate.addClass(c,t)}removeClass(c,t){this.delegate.removeClass(c,t)}setStyle(c,t,a,n){this.delegate.setStyle(c,t,a,n)}removeStyle(c,t,a){this.delegate.removeStyle(c,t,a)}setProperty(c,t,a){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(c,t,a)),this.delegate.setProperty(c,t,a)}setValue(c,t){this.delegate.setValue(c,t)}listen(c,t,a,n){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(c,t,a,n)),this.delegate.listen(c,t,a,n)}shouldReplay(c){return this.replay!==null&&c.startsWith(Gn)}},Wn=new S("");function P7(e="animations"){return G2("NgAsyncAnimations"),Z1([{provide:o2,useFactory:(c,t,a)=>new $n(c,t,a,e),deps:[E,O3,$]},{provide:E4,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Zn(e,c,t){return(c=Xn(c))in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}function O7(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);c&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function g(e){for(var c=1;c<arguments.length;c++){var t=arguments[c]!=null?arguments[c]:{};c%2?O7(Object(t),!0).forEach(function(a){Zn(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O7(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Yn(e,c){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,c||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(e)}function Xn(e){var c=Yn(e,"string");return typeof c=="symbol"?c:c+""}var B7=()=>{},B8={},mt={},ht=null,pt={mark:B7,measure:B7};try{typeof window<"u"&&(B8=window),typeof document<"u"&&(mt=document),typeof MutationObserver<"u"&&(ht=MutationObserver),typeof performance<"u"&&(pt=performance)}catch{}var{userAgent:U7=""}=B8.navigator||{},m2=B8,j=mt,j7=ht,N6=pt,qd=!!m2.document,t2=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",vt=~U7.indexOf("MSIE")||~U7.indexOf("Trident/"),Kn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Jn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,gt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],r1="classic",I6="duotone",er="sharp",tr="sharp-duotone",zt=[r1,I6,er,tr],ar={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},cr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},nr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),rr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ir=["fak","fa-kit","fakd","fa-kit-duotone"],q7={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},or=["kit"],sr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},lr=["fak","fakd"],fr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},G7={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},k6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ur=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],dr=["fak","fa-kit","fakd","fa-kit-duotone"],mr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},pr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},y8={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},vr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],L8=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ur,...vr],gr=["solid","regular","light","thin","duotone","brands"],Ct=[1,2,3,4,5,6,7,8,9,10],br=Ct.concat([11,12,13,14,15,16,17,18,19,20]),zr=[...Object.keys(pr),...gr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",k6.GROUP,k6.SWAP_OPACITY,k6.PRIMARY,k6.SECONDARY].concat(Ct.map(e=>"".concat(e,"x"))).concat(br.map(e=>"w-".concat(e))),Cr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Q1="___FONT_AWESOME___",w8=16,Mt="fa",Ht="svg-inline--fa",E2="data-fa-i2svg",x8="data-fa-pseudo-element",Mr="data-fa-pseudo-element-pending",U8="data-prefix",j8="data-icon",$7="fontawesome-i2svg",Hr="async",Vr=["HTML","HEAD","STYLE","SCRIPT"],Vt=(()=>{try{return!0}catch{return!1}})();function h4(e){return new Proxy(e,{get(c,t){return t in c?c[t]:c[r1]}})}var yt=g({},gt);yt[r1]=g(g(g(g({},{"fa-duotone":"duotone"}),gt[r1]),q7.kit),q7["kit-duotone"]);var yr=h4(yt),S8=g({},rr);S8[r1]=g(g(g(g({},{duotone:"fad"}),S8[r1]),G7.kit),G7["kit-duotone"]);var W7=h4(S8),A8=g({},y8);A8[r1]=g(g({},A8[r1]),fr.kit);var q8=h4(A8),N8=g({},hr);N8[r1]=g(g({},N8[r1]),sr.kit);var Gd=h4(N8),Lr=Kn,Lt="fa-layers-text",wr=Jn,xr=g({},ar),$d=h4(xr),Sr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],z8=Qn,Ar=[...or,...zr],f4=m2.FontAwesomeConfig||{};function Nr(e){var c=j.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function kr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}j&&typeof j.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(c=>{let[t,a]=c,n=kr(Nr(t));n!=null&&(f4[a]=n)});var wt={styleDefault:"solid",familyDefault:r1,cssPrefix:Mt,replacementClass:Ht,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f4.familyPrefix&&(f4.cssPrefix=f4.familyPrefix);var g3=g(g({},wt),f4);g3.autoReplaceSvg||(g3.observeMutations=!1);var x={};Object.keys(wt).forEach(e=>{Object.defineProperty(x,e,{enumerable:!0,set:function(c){g3[e]=c,u4.forEach(t=>t(x))},get:function(){return g3[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(e){g3.cssPrefix=e,u4.forEach(c=>c(x))},get:function(){return g3.cssPrefix}});m2.FontAwesomeConfig=x;var u4=[];function Dr(e){return u4.push(e),()=>{u4.splice(u4.indexOf(e),1)}}var d2=w8,q1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tr(e){if(!e||!t2)return;let c=j.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;let t=j.head.childNodes,a=null;for(let n=t.length-1;n>-1;n--){let r=t[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=r)}return j.head.insertBefore(c,a),e}var _r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function d4(){let e=12,c="";for(;e-- >0;)c+=_r[Math.random()*62|0];return c}function b3(e){let c=[];for(let t=(e||[]).length>>>0;t--;)c[t]=e[t];return c}function G8(e){return e.classList?b3(e.classList):(e.getAttribute("class")||"").split(" ").filter(c=>c)}function xt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Er(e){return Object.keys(e||{}).reduce((c,t)=>c+"".concat(t,'="').concat(xt(e[t]),'" '),"").trim()}function R6(e){return Object.keys(e||{}).reduce((c,t)=>c+"".concat(t,": ").concat(e[t].trim(),";"),"")}function $8(e){return e.size!==q1.size||e.x!==q1.x||e.y!==q1.y||e.rotate!==q1.rotate||e.flipX||e.flipY}function Ir(e){let{transform:c,containerWidth:t,iconWidth:a}=e,n={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),o="rotate(".concat(c.rotate," 0 0)"),s={transform:"".concat(r," ").concat(i," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:n,inner:s,path:l}}function Rr(e){let{transform:c,width:t=w8,height:a=w8,startCentered:n=!1}=e,r="";return n&&vt?r+="translate(".concat(c.x/d2-t/2,"em, ").concat(c.y/d2-a/2,"em) "):n?r+="translate(calc(-50% + ".concat(c.x/d2,"em), calc(-50% + ").concat(c.y/d2,"em)) "):r+="translate(".concat(c.x/d2,"em, ").concat(c.y/d2,"em) "),r+="scale(".concat(c.size/d2*(c.flipX?-1:1),", ").concat(c.size/d2*(c.flipY?-1:1),") "),r+="rotate(".concat(c.rotate,"deg) "),r}var Fr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function St(){let e=Mt,c=Ht,t=x.cssPrefix,a=x.replacementClass,n=Fr;if(t!==e||a!==c){let r=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(c),"g");n=n.replace(r,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(o,".".concat(a))}return n}var Z7=!1;function C8(){x.autoAddCss&&!Z7&&(Tr(St()),Z7=!0)}var Pr={mixout(){return{dom:{css:St,insertCss:C8}}},hooks(){return{beforeDOMElementCreation(){C8()},beforeI2svg(){C8()}}}},e2=m2||{};e2[Q1]||(e2[Q1]={});e2[Q1].styles||(e2[Q1].styles={});e2[Q1].hooks||(e2[Q1].hooks={});e2[Q1].shims||(e2[Q1].shims=[]);var G1=e2[Q1],At=[],Nt=function(){j.removeEventListener("DOMContentLoaded",Nt),_6=1,At.map(e=>e())},_6=!1;t2&&(_6=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),_6||j.addEventListener("DOMContentLoaded",Nt));function Or(e){t2&&(_6?setTimeout(e,0):At.push(e))}function p4(e){let{tag:c,attributes:t={},children:a=[]}=e;return typeof e=="string"?xt(e):"<".concat(c," ").concat(Er(t),">").concat(a.map(p4).join(""),"</").concat(c,">")}function Y7(e,c,t){if(e&&e[c]&&e[c][t])return{prefix:c,iconName:t,icon:e[c][t]}}var Br=function(c,t){return function(a,n,r,i){return c.call(t,a,n,r,i)}},M8=function(c,t,a,n){var r=Object.keys(c),i=r.length,o=n!==void 0?Br(t,n):t,s,l,u;for(a===void 0?(s=1,u=c[r[0]]):(s=0,u=a);s<i;s++)l=r[s],u=o(u,c[l],l,c);return u};function Ur(e){let c=[],t=0,a=e.length;for(;t<a;){let n=e.charCodeAt(t++);if(n>=55296&&n<=56319&&t<a){let r=e.charCodeAt(t++);(r&64512)==56320?c.push(((n&1023)<<10)+(r&1023)+65536):(c.push(n),t--)}else c.push(n)}return c}function k8(e){let c=Ur(e);return c.length===1?c[0].toString(16):null}function jr(e,c){let t=e.length,a=e.charCodeAt(c),n;return a>=55296&&a<=56319&&t>c+1&&(n=e.charCodeAt(c+1),n>=56320&&n<=57343)?(a-55296)*1024+n-56320+65536:a}function X7(e){return Object.keys(e).reduce((c,t)=>{let a=e[t];return!!a.icon?c[a.iconName]=a.icon:c[t]=a,c},{})}function D8(e,c){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=t,n=X7(c);typeof G1.hooks.addPack=="function"&&!a?G1.hooks.addPack(e,X7(c)):G1.styles[e]=g(g({},G1.styles[e]||{}),n),e==="fas"&&D8("fa",c)}var{styles:m4,shims:qr}=G1,kt=Object.keys(q8),Gr=kt.reduce((e,c)=>(e[c]=Object.keys(q8[c]),e),{}),W8=null,Dt={},Tt={},_t={},Et={},It={};function $r(e){return~Ar.indexOf(e)}function Wr(e,c){let t=c.split("-"),a=t[0],n=t.slice(1).join("-");return a===e&&n!==""&&!$r(n)?n:null}var Rt=()=>{let e=a=>M8(m4,(n,r,i)=>(n[i]=M8(r,a,{}),n),{});Dt=e((a,n,r)=>(n[3]&&(a[n[3]]=r),n[2]&&n[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=r}),a)),Tt=e((a,n,r)=>(a[r]=r,n[2]&&n[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=r}),a)),It=e((a,n,r)=>{let i=n[2];return a[r]=r,i.forEach(o=>{a[o]=r}),a});let c="far"in m4||x.autoFetchSvg,t=M8(qr,(a,n)=>{let r=n[0],i=n[1],o=n[2];return i==="far"&&!c&&(i="fas"),typeof r=="string"&&(a.names[r]={prefix:i,iconName:o}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});_t=t.names,Et=t.unicodes,W8=F6(x.styleDefault,{family:x.familyDefault})};Dr(e=>{W8=F6(e.styleDefault,{family:x.familyDefault})});Rt();function Z8(e,c){return(Dt[e]||{})[c]}function Zr(e,c){return(Tt[e]||{})[c]}function _2(e,c){return(It[e]||{})[c]}function Ft(e){return _t[e]||{prefix:null,iconName:null}}function Yr(e){let c=Et[e],t=Z8("fas",e);return c||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function h2(){return W8}var Pt=()=>({prefix:null,iconName:null,rest:[]});function Xr(e){let c=r1,t=kt.reduce((a,n)=>(a[n]="".concat(x.cssPrefix,"-").concat(n),a),{});return zt.forEach(a=>{(e.includes(t[a])||e.some(n=>Gr[a].includes(n)))&&(c=a)}),c}function F6(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=r1}=c,a=yr[t][e];if(t===I6&&!e)return"fad";let n=W7[t][e]||W7[t][a],r=e in G1.styles?e:null;return n||r||null}function Kr(e){let c=[],t=null;return e.forEach(a=>{let n=Wr(x.cssPrefix,a);n?t=n:a&&c.push(a)}),{iconName:t,rest:c}}function K7(e){return e.sort().filter((c,t,a)=>a.indexOf(c)===t)}function P6(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=c,a=null,n=L8.concat(dr),r=K7(e.filter(z=>n.includes(z))),i=K7(e.filter(z=>!L8.includes(z))),o=r.filter(z=>(a=z,!bt.includes(z))),[s=null]=o,l=Xr(r),u=g(g({},Kr(i)),{},{prefix:F6(s,{family:l})});return g(g(g({},u),ti({values:e,family:l,styles:m4,config:x,canonical:u,givenPrefix:a})),Jr(t,a,u))}function Jr(e,c,t){let{prefix:a,iconName:n}=t;if(e||!a||!n)return{prefix:a,iconName:n};let r=c==="fa"?Ft(n):{},i=_2(a,n);return n=r.iconName||i||n,a=r.prefix||a,a==="far"&&!m4.far&&m4.fas&&!x.autoFetchSvg&&(a="fas"),{prefix:a,iconName:n}}var Qr=zt.filter(e=>e!==r1||e!==I6),ei=Object.keys(y8).filter(e=>e!==r1).map(e=>Object.keys(y8[e])).flat();function ti(e){let{values:c,family:t,canonical:a,givenPrefix:n="",styles:r={},config:i={}}=e,o=t===I6,s=c.includes("fa-duotone")||c.includes("fad"),l=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(s||l||u)&&(a.prefix="fad"),(c.includes("fa-brands")||c.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Qr.includes(t)&&(Object.keys(r).find(b=>ei.includes(b))||i.autoFetchSvg)){let b=nr.get(t).defaultShortPrefixId;a.prefix=b,a.iconName=_2(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||n==="fa")&&(a.prefix=h2()||"fas"),a}var T8=class{constructor(){this.definitions={}}add(){for(var c=arguments.length,t=new Array(c),a=0;a<c;a++)t[a]=arguments[a];let n=t.reduce(this._pullDefinitions,{});Object.keys(n).forEach(r=>{this.definitions[r]=g(g({},this.definitions[r]||{}),n[r]),D8(r,n[r]);let i=q8[r1][r];i&&D8(i,n[r]),Rt()})}reset(){this.definitions={}}_pullDefinitions(c,t){let a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(n=>{let{prefix:r,iconName:i,icon:o}=a[n],s=o[2];c[r]||(c[r]={}),s.length>0&&s.forEach(l=>{typeof l=="string"&&(c[r][l]=o)}),c[r][i]=o}),c}},J7=[],p3={},v3={},ai=Object.keys(v3);function ci(e,c){let{mixoutsTo:t}=c;return J7=e,p3={},Object.keys(v3).forEach(a=>{ai.indexOf(a)===-1&&delete v3[a]}),J7.forEach(a=>{let n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(r=>{typeof n[r]=="function"&&(t[r]=n[r]),typeof n[r]=="object"&&Object.keys(n[r]).forEach(i=>{t[r]||(t[r]={}),t[r][i]=n[r][i]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(i=>{p3[i]||(p3[i]=[]),p3[i].push(r[i])})}a.provides&&a.provides(v3)}),t}function _8(e,c){for(var t=arguments.length,a=new Array(t>2?t-2:0),n=2;n<t;n++)a[n-2]=arguments[n];return(p3[e]||[]).forEach(i=>{c=i.apply(null,[c,...a])}),c}function I2(e){for(var c=arguments.length,t=new Array(c>1?c-1:0),a=1;a<c;a++)t[a-1]=arguments[a];(p3[e]||[]).forEach(r=>{r.apply(null,t)})}function p2(){let e=arguments[0],c=Array.prototype.slice.call(arguments,1);return v3[e]?v3[e].apply(null,c):void 0}function E8(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:c}=e,t=e.prefix||h2();if(c)return c=_2(t,c)||c,Y7(Ot.definitions,t,c)||Y7(G1.styles,t,c)}var Ot=new T8,ni=()=>{x.autoReplaceSvg=!1,x.observeMutations=!1,I2("noAuto")},ri={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t2?(I2("beforeI2svg",e),p2("pseudoElements2svg",e),p2("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:c}=e;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Or(()=>{oi({autoReplaceSvgRoot:c}),I2("watch",e)})}},ii={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_2(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=F6(e[0]);return{prefix:t,iconName:_2(t,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(x.cssPrefix,"-"))>-1||e.match(Lr))){let c=P6(e.split(" "),{skipLookups:!0});return{prefix:c.prefix||h2(),iconName:_2(c.prefix,c.iconName)||c.iconName}}if(typeof e=="string"){let c=h2();return{prefix:c,iconName:_2(c,e)||e}}}},M1={noAuto:ni,config:x,dom:ri,parse:ii,library:Ot,findIconDefinition:E8,toHtml:p4},oi=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:c=j}=e;(Object.keys(G1.styles).length>0||x.autoFetchSvg)&&t2&&x.autoReplaceSvg&&M1.dom.i2svg({node:c})};function O6(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>p4(t))}}),Object.defineProperty(e,"node",{get:function(){if(!t2)return;let t=j.createElement("div");return t.innerHTML=e.html,t.children}}),e}function si(e){let{children:c,main:t,mask:a,attributes:n,styles:r,transform:i}=e;if($8(i)&&t.found&&!a.found){let{width:o,height:s}=t,l={x:o/s/2,y:.5};n.style=R6(g(g({},r),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:c}]}function li(e){let{prefix:c,iconName:t,children:a,attributes:n,symbol:r}=e,i=r===!0?"".concat(c,"-").concat(x.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},n),{},{id:i}),children:a}]}]}function Y8(e){let{icons:{main:c,mask:t},prefix:a,iconName:n,transform:r,symbol:i,title:o,maskId:s,titleId:l,extra:u,watchable:z=!1}=e,{width:b,height:M}=t.found?t:c,y=lr.includes(a),m=[x.replacementClass,n?"".concat(x.cssPrefix,"-").concat(n):""].filter(N=>u.classes.indexOf(N)===-1).filter(N=>N!==""||!!N).concat(u.classes).join(" "),f={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":a,"data-icon":n,class:m,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(M)})},h=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(b/M*16*.0625,"em")}:{};z&&(f.attributes[E2]=""),o&&(f.children.push({tag:"title",attributes:{id:f.attributes["aria-labelledby"]||"title-".concat(l||d4())},children:[o]}),delete f.attributes.title);let p=g(g({},f),{},{prefix:a,iconName:n,main:c,mask:t,maskId:s,transform:r,symbol:i,styles:g(g({},h),u.styles)}),{children:v,attributes:C}=t.found&&c.found?p2("generateAbstractMask",p)||{children:[],attributes:{}}:p2("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=C,i?li(p):si(p)}function Q7(e){let{content:c,width:t,height:a,transform:n,title:r,extra:i,watchable:o=!1}=e,s=g(g(g({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});o&&(s[E2]="");let l=g({},i.styles);$8(n)&&(l.transform=Rr({transform:n,startCentered:!0,width:t,height:a}),l["-webkit-transform"]=l.transform);let u=R6(l);u.length>0&&(s.style=u);let z=[];return z.push({tag:"span",attributes:s,children:[c]}),r&&z.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),z}function fi(e){let{content:c,title:t,extra:a}=e,n=g(g(g({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),r=R6(a.styles);r.length>0&&(n.style=r);let i=[];return i.push({tag:"span",attributes:n,children:[c]}),t&&i.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),i}var{styles:H8}=G1;function I8(e){let c=e[0],t=e[1],[a]=e.slice(4),n=null;return Array.isArray(a)?n={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(z8.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(z8.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(z8.PRIMARY),fill:"currentColor",d:a[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:c,height:t,icon:n}}var ui={found:!1,width:512,height:512};function di(e,c){!Vt&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function R8(e,c){let t=c;return c==="fa"&&x.styleDefault!==null&&(c=h2()),new Promise((a,n)=>{if(t==="fa"){let r=Ft(e)||{};e=r.iconName||e,c=r.prefix||c}if(e&&c&&H8[c]&&H8[c][e]){let r=H8[c][e];return a(I8(r))}di(e,c),a(g(g({},ui),{},{icon:x.showMissingIcons&&e?p2("missingIconAbstract")||{}:{}}))})}var et=()=>{},F8=x.measurePerformance&&N6&&N6.mark&&N6.measure?N6:{mark:et,measure:et},l4='FA "6.7.2"',mi=e=>(F8.mark("".concat(l4," ").concat(e," begins")),()=>Bt(e)),Bt=e=>{F8.mark("".concat(l4," ").concat(e," ends")),F8.measure("".concat(l4," ").concat(e),"".concat(l4," ").concat(e," begins"),"".concat(l4," ").concat(e," ends"))},X8={begin:mi,end:Bt},D6=()=>{};function tt(e){return typeof(e.getAttribute?e.getAttribute(E2):null)=="string"}function hi(e){let c=e.getAttribute?e.getAttribute(U8):null,t=e.getAttribute?e.getAttribute(j8):null;return c&&t}function pi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function vi(){return x.autoReplaceSvg===!0?T6.replace:T6[x.autoReplaceSvg]||T6.replace}function gi(e){return j.createElementNS("http://www.w3.org/2000/svg",e)}function bi(e){return j.createElement(e)}function Ut(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?gi:bi}=c;if(typeof e=="string")return j.createTextNode(e);let a=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(r){a.setAttribute(r,e.attributes[r])}),(e.children||[]).forEach(function(r){a.appendChild(Ut(r,{ceFn:t}))}),a}function zi(e){let c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var T6={replace:function(e){let c=e[0];if(c.parentNode)if(e[1].forEach(t=>{c.parentNode.insertBefore(Ut(t),c)}),c.getAttribute(E2)===null&&x.keepOriginalSource){let t=j.createComment(zi(c));c.parentNode.replaceChild(t,c)}else c.remove()},nest:function(e){let c=e[0],t=e[1];if(~G8(c).indexOf(x.replacementClass))return T6.replace(e);let a=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let r=t[0].attributes.class.split(" ").reduce((i,o)=>(o===x.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});t[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",r.toNode.join(" "))}let n=t.map(r=>p4(r)).join(`
`);c.setAttribute(E2,""),c.innerHTML=n}};function at(e){e()}function jt(e,c){let t=typeof c=="function"?c:D6;if(e.length===0)t();else{let a=at;x.mutateApproach===Hr&&(a=m2.requestAnimationFrame||at),a(()=>{let n=vi(),r=X8.begin("mutate");e.map(n),r(),t()})}}var K8=!1;function qt(){K8=!0}function P8(){K8=!1}var E6=null;function ct(e){if(!j7||!x.observeMutations)return;let{treeCallback:c=D6,nodeCallback:t=D6,pseudoElementsCallback:a=D6,observeMutationsRoot:n=j}=e;E6=new j7(r=>{if(K8)return;let i=h2();b3(r).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!tt(o.addedNodes[0])&&(x.searchPseudoElements&&a(o.target),c(o.target)),o.type==="attributes"&&o.target.parentNode&&x.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&tt(o.target)&&~Sr.indexOf(o.attributeName))if(o.attributeName==="class"&&hi(o.target)){let{prefix:s,iconName:l}=P6(G8(o.target));o.target.setAttribute(U8,s||i),l&&o.target.setAttribute(j8,l)}else pi(o.target)&&t(o.target)})}),t2&&E6.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ci(){E6&&E6.disconnect()}function Mi(e){let c=e.getAttribute("style"),t=[];return c&&(t=c.split(";").reduce((a,n)=>{let r=n.split(":"),i=r[0],o=r.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),t}function Hi(e){let c=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",n=P6(G8(e));return n.prefix||(n.prefix=h2()),c&&t&&(n.prefix=c,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&a.length>0&&(n.iconName=Zr(n.prefix,e.innerText)||Z8(n.prefix,k8(e.innerText))),!n.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Vi(e){let c=b3(e.attributes).reduce((n,r)=>(n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n),{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return x.autoA11y&&(t?c["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(a||d4()):(c["aria-hidden"]="true",c.focusable="false")),c}function yi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nt(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:a,rest:n}=Hi(e),r=Vi(e),i=_8("parseNodeAttributes",{},e),o=c.styleParser?Mi(e):[];return g({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:q1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:r}},i)}var{styles:Li}=G1;function Gt(e){let c=x.autoReplaceSvg==="nest"?nt(e,{styleParser:!1}):nt(e);return~c.extra.classes.indexOf(Lt)?p2("generateLayersText",e,c):p2("generateSvgReplacementMutation",e,c)}function wi(){return[...ir,...L8]}function rt(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!t2)return Promise.resolve();let t=j.documentElement.classList,a=u=>t.add("".concat($7,"-").concat(u)),n=u=>t.remove("".concat($7,"-").concat(u)),r=x.autoFetchSvg?wi():bt.concat(Object.keys(Li));r.includes("fa")||r.push("fa");let i=[".".concat(Lt,":not([").concat(E2,"])")].concat(r.map(u=>".".concat(u,":not([").concat(E2,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=b3(e.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),n("complete");else return Promise.resolve();let s=X8.begin("onTree"),l=o.reduce((u,z)=>{try{let b=Gt(z);b&&u.push(b)}catch(b){Vt||b.name==="MissingIcon"&&console.error(b)}return u},[]);return new Promise((u,z)=>{Promise.all(l).then(b=>{jt(b,()=>{a("active"),a("complete"),n("pending"),typeof c=="function"&&c(),s(),u()})}).catch(b=>{s(),z(b)})})}function xi(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gt(e).then(t=>{t&&jt([t],c)})}function Si(e){return function(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(c||{}).icon?c:E8(c||{}),{mask:n}=t;return n&&(n=(n||{}).icon?n:E8(n||{})),e(a,g(g({},t),{},{mask:n}))}}var Ai=function(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=q1,symbol:a=!1,mask:n=null,maskId:r=null,title:i=null,titleId:o=null,classes:s=[],attributes:l={},styles:u={}}=c;if(!e)return;let{prefix:z,iconName:b,icon:M}=e;return O6(g({type:"icon"},e),()=>(I2("beforeDOMElementCreation",{iconDefinition:e,params:c}),x.autoA11y&&(i?l["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(o||d4()):(l["aria-hidden"]="true",l.focusable="false")),Y8({icons:{main:I8(M),mask:n?I8(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:b,transform:g(g({},q1),t),symbol:a,title:i,maskId:r,titleId:o,extra:{attributes:l,styles:u,classes:s}})))},Ni={mixout(){return{icon:Si(Ai)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=rt,e.nodeCallback=xi,e}}},provides(e){e.i2svg=function(c){let{node:t=j,callback:a=()=>{}}=c;return rt(t,a)},e.generateSvgReplacementMutation=function(c,t){let{iconName:a,title:n,titleId:r,prefix:i,transform:o,symbol:s,mask:l,maskId:u,extra:z}=t;return new Promise((b,M)=>{Promise.all([R8(a,i),l.iconName?R8(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[m,f]=y;b([c,Y8({icons:{main:m,mask:f},prefix:i,iconName:a,transform:o,symbol:s,maskId:u,title:n,titleId:r,extra:z,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(c){let{children:t,attributes:a,main:n,transform:r,styles:i}=c,o=R6(i);o.length>0&&(a.style=o);let s;return $8(r)&&(s=p2("generateAbstractTransformGrouping",{main:n,transform:r,containerWidth:n.width,iconWidth:n.width})),t.push(s||n.icon),{children:t,attributes:a}}}},ki={mixout(){return{layer(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=c;return O6({type:"layer"},()=>{I2("beforeDOMElementCreation",{assembler:e,params:c});let a=[];return e(n=>{Array.isArray(n)?n.map(r=>{a=a.concat(r.abstract)}):a=a.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers"),...t].join(" ")},children:a}]})}}}},Di={mixout(){return{counter(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:a=[],attributes:n={},styles:r={}}=c;return O6({type:"counter",content:e},()=>(I2("beforeDOMElementCreation",{content:e,params:c}),fi({content:e.toString(),title:t,extra:{attributes:n,styles:r,classes:["".concat(x.cssPrefix,"-layers-counter"),...a]}})))}}}},Ti={mixout(){return{text(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=q1,title:a=null,classes:n=[],attributes:r={},styles:i={}}=c;return O6({type:"text",content:e},()=>(I2("beforeDOMElementCreation",{content:e,params:c}),Q7({content:e,transform:g(g({},q1),t),title:a,extra:{attributes:r,styles:i,classes:["".concat(x.cssPrefix,"-layers-text"),...n]}})))}}},provides(e){e.generateLayersText=function(c,t){let{title:a,transform:n,extra:r}=t,i=null,o=null;if(vt){let s=parseInt(getComputedStyle(c).fontSize,10),l=c.getBoundingClientRect();i=l.width/s,o=l.height/s}return x.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([c,Q7({content:c.innerHTML,width:i,height:o,transform:n,title:a,extra:r,watchable:!0})])}}},_i=new RegExp('"',"ug"),it=[1105920,1112319],ot=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),cr),Cr),mr),O8=Object.keys(ot).reduce((e,c)=>(e[c.toLowerCase()]=ot[c],e),{}),Ei=Object.keys(O8).reduce((e,c)=>{let t=O8[c];return e[c]=t[900]||[...Object.entries(t)][0][1],e},{});function Ii(e){let c=e.replace(_i,""),t=jr(c,0),a=t>=it[0]&&t<=it[1],n=c.length===2?c[0]===c[1]:!1;return{value:k8(n?c[0]:c),isSecondary:a||n}}function Ri(e,c){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(c),n=isNaN(a)?"normal":a;return(O8[t]||{})[n]||Ei[t]}function st(e,c){let t="".concat(Mr).concat(c.replace(":","-"));return new Promise((a,n)=>{if(e.getAttribute(t)!==null)return a();let i=b3(e.children).filter(b=>b.getAttribute(x8)===c)[0],o=m2.getComputedStyle(e,c),s=o.getPropertyValue("font-family"),l=s.match(wr),u=o.getPropertyValue("font-weight"),z=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&z!=="none"&&z!==""){let b=o.getPropertyValue("content"),M=Ri(s,u),{value:y,isSecondary:m}=Ii(b),f=l[0].startsWith("FontAwesome"),h=Z8(M,y),p=h;if(f){let v=Yr(y);v.iconName&&v.prefix&&(h=v.iconName,M=v.prefix)}if(h&&!m&&(!i||i.getAttribute(U8)!==M||i.getAttribute(j8)!==p)){e.setAttribute(t,p),i&&e.removeChild(i);let v=yi(),{extra:C}=v;C.attributes[x8]=c,R8(h,M).then(N=>{let L=Y8(g(g({},v),{},{icons:{main:N,mask:Pt()},prefix:M,iconName:p,extra:C,watchable:!0})),P=j.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=L.map(W=>p4(W)).join(`
`),e.removeAttribute(t),a()}).catch(n)}else a()}else a()})}function Fi(e){return Promise.all([st(e,"::before"),st(e,"::after")])}function Pi(e){return e.parentNode!==document.head&&!~Vr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(x8)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function lt(e){if(t2)return new Promise((c,t)=>{let a=b3(e.querySelectorAll("*")).filter(Pi).map(Fi),n=X8.begin("searchPseudoElements");qt(),Promise.all(a).then(()=>{n(),P8(),c()}).catch(()=>{n(),P8(),t()})})}var Oi={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=lt,e}}},provides(e){e.pseudoElements2svg=function(c){let{node:t=j}=c;x.searchPseudoElements&&lt(t)}}},ft=!1,Bi={mixout(){return{dom:{unwatch(){qt(),ft=!0}}}},hooks(){return{bootstrap(){ct(_8("mutationObserverCallbacks",{}))},noAuto(){Ci()},watch(e){let{observeMutationsRoot:c}=e;ft?P8():ct(_8("mutationObserverCallbacks",{observeMutationsRoot:c}))}}}},ut=e=>{let c={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,a)=>{let n=a.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&i==="h")return t.flipX=!0,t;if(r&&i==="v")return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i;break}return t},c)},Ui={mixout(){return{parse:{transform:e=>ut(e)}}},hooks(){return{parseNodeAttributes(e,c){let t=c.getAttribute("data-fa-transform");return t&&(e.transform=ut(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(c){let{main:t,transform:a,containerWidth:n,iconWidth:r}=c,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(l)},z={transform:"translate(".concat(r/2*-1," -256)")},b={outer:i,inner:u,path:z};return{tag:"g",attributes:g({},b.outer),children:[{tag:"g",attributes:g({},b.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:g(g({},t.icon.attributes),b.path)}]}]}}}},V8={x:0,y:0,width:"100%",height:"100%"};function dt(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function ji(e){return e.tag==="g"?e.children:[e]}var qi={hooks(){return{parseNodeAttributes(e,c){let t=c.getAttribute("data-fa-mask"),a=t?P6(t.split(" ").map(n=>n.trim())):Pt();return a.prefix||(a.prefix=h2()),e.mask=a,e.maskId=c.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(c){let{children:t,attributes:a,main:n,mask:r,maskId:i,transform:o}=c,{width:s,icon:l}=n,{width:u,icon:z}=r,b=Ir({transform:o,containerWidth:u,iconWidth:s}),M={tag:"rect",attributes:g(g({},V8),{},{fill:"white"})},y=l.children?{children:l.children.map(dt)}:{},m={tag:"g",attributes:g({},b.inner),children:[dt(g({tag:l.tag,attributes:g(g({},l.attributes),b.path)},y))]},f={tag:"g",attributes:g({},b.outer),children:[m]},h="mask-".concat(i||d4()),p="clip-".concat(i||d4()),v={tag:"mask",attributes:g(g({},V8),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,f]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:ji(z)},v]};return t.push(C,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(h,")")},V8)}),{children:t,attributes:a}}}},Gi={provides(e){let c=!1;m2.matchMedia&&(c=m2.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:g(g({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=g(g({},n),{},{attributeName:"opacity"}),i={tag:"circle",attributes:g(g({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return c||i.children.push({tag:"animate",attributes:g(g({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},r),{},{values:"1;0;1;1;0;1;"})}),t.push(i),t.push({tag:"path",attributes:g(g({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:c?[]:[{tag:"animate",attributes:g(g({},r),{},{values:"1;0;0;0;0;1;"})}]}),c||t.push({tag:"path",attributes:g(g({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},$i={hooks(){return{parseNodeAttributes(e,c){let t=c.getAttribute("data-fa-symbol"),a=t===null?!1:t===""?!0:t;return e.symbol=a,e}}}},Wi=[Pr,Ni,ki,Di,Ti,Oi,Bi,Ui,qi,Gi,$i];ci(Wi,{mixoutsTo:M1});var Wd=M1.noAuto,$t=M1.config,Zd=M1.library,Wt=M1.dom,Zt=M1.parse,Yd=M1.findIconDefinition,Xd=M1.toHtml,Yt=M1.icon,Kd=M1.layer,Zi=M1.text,Yi=M1.counter;var Xi=["*"],Ki=(()=>{class e{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){$t.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),B6=(()=>{class e{definitions={};addIcons(...t){for(let a of t){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let n of a.icon[2])typeof n=="string"&&(this.definitions[a.prefix][n]=a)}}addIconPacks(...t){for(let a of t){let n=Object.keys(a).map(r=>a[r]);this.addIcons(...n)}}getIconDefinition(t,a){return t in this.definitions&&a in this.definitions[t]?this.definitions[t][a]:null}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ji=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},Qi=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Kt=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),eo=e=>{let c=Kt(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:c,"fa-rotate-by":e.rotate!=null&&!c,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(a=>t[a]?a:null).filter(a=>a!=null)},J8=new WeakSet,Xt="fa-auto-css";function to(e,c){if(!c.autoAddCss||J8.has(e))return;if(e.getElementById(Xt)!=null){c.autoAddCss=!1,J8.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",Xt),t.innerHTML=Wt.css();let a=e.head.childNodes,n=null;for(let r=a.length-1;r>-1;r--){let i=a[r],o=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}e.head.insertBefore(t,n),c.autoAddCss=!1,J8.add(e)}var ao=e=>e.prefix!==void 0&&e.iconName!==void 0,co=(e,c)=>ao(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:c,iconName:e},no=(()=>{class e{stackItemSize=D("1x");size=D();_effect=N3(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(a){return new(a||e)};static \u0275dir=G({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return e})(),ro=(()=>{class e{size=D();classes=l1(()=>{let t=this.size(),a=t?{[`fa-${t}`]:!0}:{};return J(H({},a),{"fa-stack":!0})});static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(a,n){a&2&&S1(n.classes())},inputs:{size:[1,"size"]},ngContentSelectors:Xi,decls:1,vars:0,template:function(a,n){a&1&&(E1(),b1(0))},encapsulation:2,changeDetection:0})}return e})(),U6=(()=>{class e{icon=t1.required();title=t1();animation=t1();mask=t1();flip=t1();size=t1();pull=t1();border=t1();inverse=t1();symbol=t1();rotate=t1();fixedWidth=t1();transform=t1();a11yRole=t1();renderedIconHTML=l1(()=>{let t=this.icon();if(t==null&&this.config.fallbackIcon==null)return Qi(),"";let a=this.findIconDefinition(t??this.config.fallbackIcon);if(!a)return"";let n=this.buildParams();to(this.document,this.config);let r=Yt(a,n);return this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))});document=d(E);sanitizer=d(G3);config=d(Ki);iconLibrary=d(B6);stackItem=d(no,{optional:!0});stack=d(ro,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}findIconDefinition(t){let a=co(t,this.config.defaultPrefix);if("icon"in a)return a;let n=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return n??(Ji(a),null)}buildParams(){let t=this.fixedWidth(),a={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},n=this.transform(),r=typeof n=="string"?Zt.transform(n):n,i=this.mask(),o=i!=null?this.findIconDefinition(i):null,s={},l=this.a11yRole();l!=null&&(s.role=l);let u={};return a.rotate!=null&&!Kt(a.rotate)&&(u["--fa-rotate-angle"]=`${a.rotate}`),{title:this.title(),transform:r,classes:eo(a),mask:o??void 0,symbol:this.symbol(),attributes:s,styles:u}}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,n){a&2&&(Qe("innerHTML",n.renderedIconHTML(),I4),_1("title",n.title()))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(a,n){},encapsulation:2,changeDetection:0})}return e})();var Jt=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=Y({type:e});static \u0275inj=Z({})}return e})();function v4(e){return e.buttons===0||e.detail===0}function g4(e){let c=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!c&&c.identifier===-1&&(c.radiusX==null||c.radiusX===1)&&(c.radiusY==null||c.radiusY===1)}var Q8;function Qt(){if(Q8==null){let e=typeof document<"u"?document.head:null;Q8=!!(e&&(e.createShadowRoot||e.attachShadow))}return Q8}function ee(e){if(Qt()){let c=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&c instanceof ShadowRoot)return c}return null}function k1(e){return e.composedPath?e.composedPath()[0]:e.target}var te;try{te=typeof Intl<"u"&&Intl.v8BreakIterator}catch{te=!1}var u1=(()=>{class e{_platformId=d(Y1);isBrowser=this._platformId?W4(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||te)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var b4;function ea(){if(b4==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>b4=!0}))}finally{b4=b4||!1}return b4}function z3(e){return ea()?e:!!e.capture}function v2(e){return e instanceof h1?e.nativeElement:e}var ta=new S("cdk-input-modality-detector-options"),aa={ignoreKeys:[18,17,224,91,16]},ca=650,ae={passive:!0,capture:!0},na=(()=>{class e{_platform=d(u1);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new d1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(a=>a===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=k1(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ca||(this._modality.next(v4(t)?"keyboard":"mouse"),this._mostRecentTarget=k1(t))};_onTouchstart=t=>{if(g4(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=k1(t)};constructor(){let t=d($),a=d(E),n=d(ta,{optional:!0});if(this._options=H(H({},aa),n),this.modalityDetected=this._modality.pipe(A4(1)),this.modalityChanged=this.modalityDetected.pipe(we()),this._platform.isBrowser){let r=d(o2).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(a,"keydown",this._onKeydown,ae),r.listen(a,"mousedown",this._onMousedown,ae),r.listen(a,"touchstart",this._onTouchstart,ae)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),z4=function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e}(z4||{}),ra=new S("cdk-focus-monitor-default-options"),j6=z3({passive:!0,capture:!0}),ce=(()=>{class e{_ngZone=d($);_platform=d(u1);_inputModalityDetector=d(na);_origin=null;_lastFocusOrigin;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(E);_stopInputModalityDetector=new i1;constructor(){let t=d(ra,{optional:!0});this._detectionMode=t?.detectionMode||z4.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let a=k1(t);for(let n=a;n;n=n.parentElement)t.type==="focus"?this._onFocus(t,n):this._onBlur(t,n)};monitor(t,a=!1){let n=v2(t);if(!this._platform.isBrowser||n.nodeType!==1)return A();let r=ee(n)||this._document,i=this._elementInfo.get(n);if(i)return a&&(i.checkChildren=!0),i.subject;let o={checkChildren:a,subject:new i1,rootNode:r};return this._elementInfo.set(n,o),this._registerGlobalListeners(o),o.subject}stopMonitoring(t){let a=v2(t),n=this._elementInfo.get(a);n&&(n.subject.complete(),this._setClasses(a),this._elementInfo.delete(a),this._removeGlobalListeners(n))}focusVia(t,a,n){let r=v2(t),i=this._document.activeElement;r===i?this._getClosestElementsInfo(r).forEach(([o,s])=>this._originChanged(o,a,s)):(this._setOrigin(a),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((t,a)=>this.stopMonitoring(a))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===z4.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,a){t.classList.toggle("cdk-focused",!!a),t.classList.toggle("cdk-touch-focused",a==="touch"),t.classList.toggle("cdk-keyboard-focused",a==="keyboard"),t.classList.toggle("cdk-mouse-focused",a==="mouse"),t.classList.toggle("cdk-program-focused",a==="program")}_setOrigin(t,a=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&a,this._detectionMode===z4.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?ca:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(t,a){let n=this._elementInfo.get(a),r=k1(t);!n||!n.checkChildren&&a!==r||this._originChanged(a,this._getFocusOrigin(r),n)}_onBlur(t,a){let n=this._elementInfo.get(a);!n||n.checkChildren&&t.relatedTarget instanceof Node&&a.contains(t.relatedTarget)||(this._setClasses(a),this._emitOrigin(n,null))}_emitOrigin(t,a){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(a))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let a=t.rootNode,n=this._rootNodeFocusListenerCount.get(a)||0;n||this._ngZone.runOutsideAngular(()=>{a.addEventListener("focus",this._rootNodeFocusAndBlurListener,j6),a.addEventListener("blur",this._rootNodeFocusAndBlurListener,j6)}),this._rootNodeFocusListenerCount.set(a,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(C2(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let a=t.rootNode;if(this._rootNodeFocusListenerCount.has(a)){let n=this._rootNodeFocusListenerCount.get(a);n>1?this._rootNodeFocusListenerCount.set(a,n-1):(a.removeEventListener("focus",this._rootNodeFocusAndBlurListener,j6),a.removeEventListener("blur",this._rootNodeFocusAndBlurListener,j6),this._rootNodeFocusListenerCount.delete(a))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,a,n){this._setClasses(t,a),this._emitOrigin(n,a),this._lastFocusOrigin=a}_getClosestElementsInfo(t){let a=[];return this._elementInfo.forEach((n,r)=>{(r===t||n.checkChildren&&r.contains(t))&&a.push([r,n])}),a}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:a,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!a||a===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let i=0;i<r.length;i++)if(r[i].contains(a))return!0}return!1}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var q6=new WeakMap,C4=(()=>{class e{_appRef;_injector=d(m1);_environmentInjector=d(T1);load(t){let a=this._appRef=this._appRef||this._injector.get(L2),n=q6.get(a);n||(n={loaders:new Set,refs:[]},q6.set(a,n),a.onDestroy(()=>{q6.get(a)?.refs.forEach(r=>r.destroy()),q6.delete(a)})),n.loaders.has(t)||(n.loaders.add(t),n.refs.push(d5(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function ne(e){return Array.isArray(e)?e:[e]}var ia=new Set,R2,G6=(()=>{class e{_platform=d(u1);_nonce=d(L3,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):oo}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&io(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function io(e,c){if(!ia.has(e))try{R2||(R2=document.createElement("style"),c&&R2.setAttribute("nonce",c),R2.setAttribute("type","text/css"),document.head.appendChild(R2)),R2.sheet&&(R2.sheet.insertRule(`@media ${e} {body{ }}`,0),ia.add(e))}catch(t){console.error(t)}}function oo(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var re=(()=>{class e{_mediaMatcher=d(G6);_zone=d($);_queries=new Map;_destroySubject=new i1;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return oa(ne(t)).some(n=>this._registerQuery(n).mql.matches)}observe(t){let n=oa(ne(t)).map(i=>this._registerQuery(i).observable),r=V3(n);return r=x4(r.pipe(r2(1)),r.pipe(A4(1),Le(0))),r.pipe(R(i=>{let o={matches:!1,breakpoints:{}};return i.forEach(({matches:s,query:l})=>{o.matches=o.matches||s,o.breakpoints[l]=s}),o}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let a=this._mediaMatcher.matchMedia(t),r={observable:new b2(i=>{let o=s=>this._zone.run(()=>i.next(s));return a.addListener(o),()=>{a.removeListener(o)}}).pipe(N4(a),R(({matches:i})=>({query:t,matches:i})),C2(this._destroySubject)),mql:a};return this._queries.set(t,r),r}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function oa(e){return e.map(c=>c.split(",")).reduce((c,t)=>c.concat(t)).map(c=>c.trim())}var g2=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(g2||{}),sa="cdk-high-contrast-black-on-white",la="cdk-high-contrast-white-on-black",ie="cdk-high-contrast-active",oe=(()=>{class e{_platform=d(u1);_hasCheckedHighContrastMode;_document=d(E);_breakpointSubscription;constructor(){this._breakpointSubscription=d(re).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return g2.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let a=this._document.defaultView||window,n=a&&a.getComputedStyle?a.getComputedStyle(t):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return g2.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return g2.BLACK_ON_WHITE}return g2.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ie,sa,la),this._hasCheckedHighContrastMode=!0;let a=this.getHighContrastMode();a===g2.BLACK_ON_WHITE?t.add(ie,sa):a===g2.WHITE_ON_BLACK&&t.add(ie,la)}}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var se=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=Y({type:e});static \u0275inj=Z({})}return e})();var a2=(()=>{class e{constructor(){d(oe)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(a){return new(a||e)};static \u0275mod=Y({type:e});static \u0275inj=Z({imports:[se,se]})}return e})();var so=["*"];var lo=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],fo=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],uo=new S("MAT_CARD_CONFIG"),fa=(()=>{class e{appearance;constructor(){let t=d(uo,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,n){a&2&&y1("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:so,decls:1,vars:0,template:function(a,n){a&1&&(E1(),b1(0))},styles:[`.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}
`],encapsulation:2,changeDetection:0})}return e})(),ua=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275dir=G({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return e})();var da=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275dir=G({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})(),ma=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275dir=G({type:e,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return e})();var ha=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:fo,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,n){a&1&&(E1(lo),b1(0),p0(1,"div",0),b1(2,1),v0(),b1(3,2))},encapsulation:2,changeDetection:0})}return e})();var le=class{_document;_textarea;constructor(c,t){this._document=t;let a=this._textarea=this._document.createElement("textarea"),n=a.style;n.position="fixed",n.top=n.opacity="0",n.left="-999em",a.setAttribute("aria-hidden","true"),a.value=c,a.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(a)}copy(){let c=this._textarea,t=!1;try{if(c){let a=this._document.activeElement;c.select(),c.setSelectionRange(0,c.value.length),t=this._document.execCommand("copy"),a&&a.focus()}}catch{}return t}destroy(){let c=this._textarea;c&&(c.remove(),this._textarea=void 0)}},pa=(()=>{class e{_document=d(E);constructor(){}copy(t){let a=this.beginCopy(t),n=a.copy();return a.destroy(),n}beginCopy(t){return new le(t,this._document)}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function mo(e){return/^(http|https):\/\//.test(e)?e:(console.warn(`[ShareButtons]: Sharing link '${e}' is invalid!`),null)}function ho(){return document.defaultView.print()}function po({params:e,data:c,clipboard:t,uiState:a}){t.copy(e.url),a.set({icon:c.successIcon,text:c.successText,disabled:!0}),setTimeout(()=>{a.set({icon:c.icon,text:c.text,disabled:!1})},c.delay)}var M4=new S("SHARE_BUTTONS_CONFIG",{providedIn:"root",factory:()=>go}),vo=new S("SHARE_ICONS");var $6=function(e){return e.Anchor="anchor",e.Window="window",e}($6||{}),go={sharerMethod:$6.Anchor,theme:"default",windowWidth:800,windowHeight:500,moreButtonIcon:["fas","ellipsis-h"],lessButtonIcon:["fas","minus"],moreButtonAriaLabel:"Show more share buttons",lessButtonAriaLabel:"Show less share buttons"},W6={description:e=>e.description?`${e.description}\r
${e.url}`:e.url},bo={type:"facebook",text:"Facebook",ariaLabel:"Share on Facebook",icon:["fab","facebook-f"],color:"#4267B2",share:{desktop:"https://facebook.com/sharer/sharer.php"},params:{url:"u"}},zo={type:"x",text:"X",ariaLabel:"Post on X",icon:["fab","x-twitter"],color:"#000",share:{desktop:"https://x.com/intent/post"},params:{url:"url",description:"text",tags:"hashtags",via:"via"}},Co={type:"linkedin",text:"LinkedIn",ariaLabel:"Share on LinkedIn",icon:["fab","linkedin-in"],color:"#0a66c2",share:{desktop:"https://www.linkedin.com/sharing/share-offsite"},params:{url:"url"}},Mo={type:"pinterest",text:"Pinterest",ariaLabel:"Share on Pinterest",icon:["fab","pinterest-p"],color:"#e60023",share:{desktop:"https://pinterest.com/pin/create/button/"},params:{url:"url",description:"description",image:"media"}},Ho={type:"reddit",text:"Reddit",ariaLabel:"Share on Reddit",icon:["fab","reddit-alien"],color:"#FF4006",share:{desktop:"https://www.reddit.com/submit"},params:{url:"url",title:"title"}},Vo={type:"tumblr",text:"Tumblr",ariaLabel:"Share on Tumblr",icon:["fab","tumblr"],color:"#36465D",share:{desktop:"https://tumblr.com/widgets/share/tool"},params:{url:"canonicalUrl",description:"caption",tags:"tags"}},yo={type:"mix",text:"Mix",ariaLabel:"Share on Mix",icon:["fab","mix"],color:"#eb4924",share:{desktop:"https://mix.com/add"},params:{url:"url"}},Lo={type:"viber",text:"Viber",ariaLabel:"Share on Viber",icon:["fab","viber"],color:"#665ca7",share:{android:"viber://forward",ios:"viber://forward"},params:{description:"text"},paramsFunc:W6,requiredParams:{description:!0}},wo={type:"vk",text:"VKontakte",ariaLabel:"Share on VKontakte",icon:["fab","vk"],color:"#4C75A3",share:{desktop:"https://vk.com/share.php"},params:{url:"url"}},xo={type:"telegram",text:"Telegram",ariaLabel:"Share on Telegram",icon:["fab","telegram-plane"],color:"#0088cc",share:{desktop:"https://t.me/share/url"},params:{url:"url",description:"text"}},So={type:"messenger",text:"Messenger",ariaLabel:"Share on Messenger",icon:["fab","facebook-messenger"],color:"#168AFF",share:{desktop:"https://www.facebook.com/dialog/send",android:"fb-messenger://share/",ios:"fb-messenger://share/"},params:{url:"link",appId:"app_id",redirectUrl:"redirect_uri"}},Ao={type:"whatsapp",text:"WhatsApp",ariaLabel:"Share on WhatsApp",icon:["fab","whatsapp"],color:"#25D366",share:{desktop:"https://api.whatsapp.com/send",android:"whatsapp://send",ios:"https://api.whatsapp.com/send"},params:{url:"link",description:"text"},requiredParams:{description:!0},paramsFunc:W6},No={type:"xing",text:"Xing",ariaLabel:"Share on Xing",icon:["fab","xing"],color:"#006567",share:{desktop:"https://www.xing.com/spi/shares/new"},params:{url:"url"}},ko={type:"line",text:"Line",ariaLabel:"Share on Line",icon:["fab","line"],color:"#00b900",share:{desktop:"https://social-plugins.line.me/lineit/share"},params:{url:"url"}},Do={type:"sms",text:"SMS",ariaLabel:"Share link via SMS",icon:["fas","sms"],color:"#20c16c",share:{desktop:"sms:",ios:"sms:&"},params:{description:"body"},paramsFunc:W6,requiredParams:{description:!0}},To={type:"email",text:"Email",ariaLabel:"Share link via email",icon:["fas","envelope"],color:"#FF961C",share:{desktop:"mailto:"},params:{title:"subject",description:"body"},paramsFunc:W6,requiredParams:{description:!0}},_o={type:"print",text:"Print",ariaLabel:"Print page",icon:["fas","print"],color:"#765AA2",func:ho},Eo={type:"copy",text:"Copy link",ariaLabel:"Copy link",icon:["fas","link"],color:"#607D8B",data:{text:"Copy link",icon:["fas","link"],successText:"Copied",successIcon:["fas","check"],delay:2e3},func:po},C3={facebook:bo,x:zo,linkedin:Co,pinterest:Mo,reddit:Ho,tumblr:Vo,mix:yo,viber:Lo,vk:wo,telegram:xo,messenger:So,whatsapp:Ao,xing:No,line:ko,sms:Do,email:To,print:_o,copy:Eo},Io=(()=>{let c=class c{constructor(){this.document=d(E),this.icons=d(vo,{optional:!0}),this.meta=d($5),this.platform=d(u1),this.clipboard=d(pa)}_getMetaTagContent(a){let n=this.meta.getTag(`property="${a}"`),r=this.meta.getTag(`name="${a}"`);return(n||r)?.getAttribute("content")??null}_getComputedUrl(a){return mo(a||this._getMetaTagContent("og:url")||this.document.location.href)}_getComputedParams(a){return a.url?{title:a.title,description:a.description,image:a.image,tags:a.tags,via:a.via,url:this._getComputedUrl(a.url),appId:a.appId||this._getMetaTagContent("fb:app_id"),redirectUrl:a.redirectUrl||this.document.location.href}:{title:a.title||this._getMetaTagContent("og:title"),description:a.description||this._getMetaTagContent("og:description"),image:a.image||this._getMetaTagContent("og:image"),tags:a.tags,via:a.via,url:this._getComputedUrl(a.url),appId:a.appId||this._getMetaTagContent("fb:app_id"),redirectUrl:a.redirectUrl||this.document.location.href}}_getComputedUrlParams(a,n){let r=this._getComputedParams(n);return Object.entries(a.params).reduce((i,[o,s])=>{if(a.requiredParams&&a.requiredParams[o]||r[o]){let l=a.paramsFunc?.[o];i[s]=l?l(r):r[o]}return i},{})}_getShareButtonInstance(a,n){let r=n?H(H({},C3[a]),n):C3[a];if(r)return r;throw new Error(`[ShareButtons]: The share button '${r}' does not exist!`)}share(a,n){let r;this.platform.IOS&&a.share.ios?r=a.share.ios:this.platform.ANDROID&&a.share.android?r=a.share.android:r=a.share.desktop;let i=this._getComputedUrlParams(a,n.params);if(r)switch(n.method){case $6.Anchor:this.openViaAnchor({params:i,url:r,target:n.target},n.debug);break;case $6.Window:this.openViaWindow({params:i,url:r,target:n.target},n.windowOptions,n.debug);break}}open(a){let n=this._getShareButtonInstance(a.name,a.props);this.openInstance(a,n)}openInstance(a,n){n.share?this.share(n,a):n.func({params:this._getComputedParams(a.params),data:n.data,clipboard:this.clipboard,uiState:a.uiState})}openViaWindow(a,n,r){let i=`${a.url}?${new L1({fromObject:a.params}).toString()}`;r&&console.log("[SHARE BUTTONS]: open link via window",i);let o=n?.windowObj||this.document.defaultView;(o?.[n?.openFunc]||this.document.defaultView.open)(i,a.target??"_blank",`width=${n?.width||800}, height=${n?.height||500}`),o.opener??=null}openViaAnchor(a,n){let r=`${a.url}?${new L1({fromObject:a.params}).toString()}`;n&&console.log("[SHARE BUTTONS]: open link via anchor",r);let i=this.document.createElement("a");i.setAttribute("target",a.target??"_blank"),i.setAttribute("rel","noopener noreferrer"),i.href=r,i.click(),i.remove()}};c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=V({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})(),Ro=new S("SHARE_BUTTONS_PROP",{providedIn:"root",factory:()=>C3});var va=(()=>{let c=class c{constructor(){this.shareButtonsProps=d(Ro),this.options=d(M4),this.shareService=d(Io),this.nativeElement=d(h1).nativeElement,this.uiState=T4({}),this.color=l1(()=>this.shareButtonInstance().color),this.text=l1(()=>this.uiState().text),this.icon=l1(()=>this.uiState().icon),this.disabled=l1(()=>this.uiState().disabled),this.shareButton=D.required(),this.shareButtonInstance=l1(()=>this.shareButtonsProps[this.shareButton()]),this.title=D(),this.description=D(),this.image=D(),this.tags=D(),this.redirectUrl=D(),this.url=D(),this.opened=x2(),N3(()=>{let a=this.shareButtonInstance();if(!a)throw new Error(`[ShareButtons]: The share button '${this.shareButton()}' does not exist!`);j4(()=>{this.uiState.set({icon:a.icon,text:a.text,disabled:!1})})}),N3(()=>{this.nativeElement.toggleAttribute("disabled",this.uiState().disabled)})}share(){this.shareService.openInstance({params:{url:this.url(),title:this.title(),description:this.description(),image:this.image(),tags:this.tags(),redirectUrl:this.redirectUrl()},target:this.options.sharerTarget,debug:this.options.debug,method:this.options.sharerMethod,uiState:this.uiState},this.shareButtonInstance()),this.opened.emit(this.shareButton())}};c.\u0275fac=function(n){return new(n||c)},c.\u0275dir=G({type:c,selectors:[["","shareButton",""]],hostVars:3,hostBindings:function(n,r){n&1&&o1("click",function(){return r.share()}),n&2&&(_1("aria-label",r.shareButtonInstance().ariaLabel),U4("--button-color",r.color()))},inputs:{shareButton:[1,"shareButton"],title:[1,"title"],description:[1,"description"],image:[1,"image"],tags:[1,"tags"],redirectUrl:[1,"redirectUrl"],url:[1,"url"]},outputs:{opened:"opened"},exportAs:["shareButton"]});let e=c;return e})();function Fo(e,c){if(e&1&&(I(0,"div",3),Q(1,"fa-icon",5),U()),e&2){let t=s1(),a=B4(1);q(),X("icon",t.icon()||a.icon())("fixedWidth",!0)}}function Po(e,c){if(e&1&&(I(0,"div",4),p1(1),U()),e&2){let t=s1(),a=B4(1);q(),e5(" ",t.text()||a.text()," ")}}var ga=(()=>{let c=class c{constructor(){this.options=d(M4),this.button=D(),this.url=D(),this.title=D(),this.description=D(),this.image=D(),this.tags=D(),this.redirectUrl=D(),this.showIcon=D(!0,{transform:n1}),this.showText=D(!1,{transform:n1}),this.text=D(),this.icon=D(),this.theme=D(this.options.theme),this.disabled=D(!1,{transform:n1}),this.classes=l1(()=>`sb-button sb-${this.theme()}`),this.opened=x2()}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=B({type:c,selectors:[["share-button"]],hostVars:2,hostBindings:function(n,r){n&2&&S1(r.classes())},inputs:{button:[1,"button"],url:[1,"url"],title:[1,"title"],description:[1,"description"],image:[1,"image"],tags:[1,"tags"],redirectUrl:[1,"redirectUrl"],showIcon:[1,"showIcon"],showText:[1,"showText"],text:[1,"text"],icon:[1,"icon"],theme:[1,"theme"],disabled:[1,"disabled"]},outputs:{opened:"opened"},decls:5,vars:14,consts:[["btn","shareButton"],["type","button",1,"sb-wrapper",3,"opened","shareButton","url","image","title","description","tags","redirectUrl","disabled"],[1,"sb-content"],[1,"sb-icon"],[1,"sb-text"],[3,"icon","fixedWidth"]],template:function(n,r){if(n&1){let i=w2();I(0,"button",1,0),o1("opened",function(s){return M2(i),H2(r.opened.emit(s))}),I(2,"div",2),S3(3,Fo,2,2,"div",3),S3(4,Po,2,1,"div",4),U()()}if(n&2){let i=B4(1);y1("sb-show-icon",r.showIcon())("sb-show-text",r.showText()),X("shareButton",r.button())("url",r.url())("image",r.image())("title",r.title())("description",r.description())("tags",r.tags())("redirectUrl",r.redirectUrl())("disabled",r.disabled()),q(3),A3(r.showIcon()&&i.icon()?3:-1),q(),A3(r.showText()?4:-1)}},dependencies:[va,U6],styles:["[button=facebook][_nghost-%COMP%], [button=facebook]   [_nghost-%COMP%]{--button-color: #4267B2}[button=x][_nghost-%COMP%], [button=x]   [_nghost-%COMP%]{--button-color: #00acee}[button=mix][_nghost-%COMP%], [button=mix]   [_nghost-%COMP%]{--button-color: #ff8226}[button=line][_nghost-%COMP%], [button=line]   [_nghost-%COMP%]{--button-color: #00b900}[button=linkedin][_nghost-%COMP%], [button=linkedin]   [_nghost-%COMP%]{--button-color: #0a66c2}[button=pinterest][_nghost-%COMP%], [button=pinterest]   [_nghost-%COMP%]{--button-color: #bd081c}[button=reddit][_nghost-%COMP%], [button=reddit]   [_nghost-%COMP%]{--button-color: #ff4006}[button=tumblr][_nghost-%COMP%], [button=tumblr]   [_nghost-%COMP%]{--button-color: #36465d}[button=whatsapp][_nghost-%COMP%], [button=whatsapp]   [_nghost-%COMP%]{--button-color: #25d366}[button=messenger][_nghost-%COMP%], [button=messenger]   [_nghost-%COMP%]{--button-color: #0080FF}[button=telegram][_nghost-%COMP%], [button=telegram]   [_nghost-%COMP%]{--button-color: #0088cc}[button=xing][_nghost-%COMP%], [button=xing]   [_nghost-%COMP%]{--button-color: #006567}[button=sms][_nghost-%COMP%], [button=sms]   [_nghost-%COMP%]{--button-color: #20c16c}[button=email][_nghost-%COMP%], [button=email]   [_nghost-%COMP%]{--button-color: #FF961C}[button=viber][_nghost-%COMP%], [button=viber]   [_nghost-%COMP%]{--button-color: #665ca7}[button=vk][_nghost-%COMP%], [button=vk]   [_nghost-%COMP%]{--button-color: #4C75A3}[button=copy][_nghost-%COMP%], [button=copy]   [_nghost-%COMP%]{--button-color: #607D8B}[button=print][_nghost-%COMP%], [button=print]   [_nghost-%COMP%]{--button-color: #765AA2}[button=expand][_nghost-%COMP%], [button=expand]   [_nghost-%COMP%]{--button-color: #FF6651}button[_ngcontent-%COMP%]{cursor:pointer;position:relative;outline:0;-webkit-print-color-adjust:exact;margin:var(--sb-margin, .3125em);padding:var(--sb-padding, 0);min-width:var(--sb-min-width, 4.125em);height:var(--sb-height, 2.5em);color:var(--sb-color, #fff);background:var(--sb-background);font-size:var(--sb-font-size, 13px);line-height:var(--sb-line-height, 2.571em);border:var(--sb-border);border-radius:var(--sb-border-radius);transition:var(--sb-transition);box-shadow:var(--sb-box-shadow);text-shadow:var(--sb-text-shadow);overflow:var(--sb-overflow)}.sb-icon[_ngcontent-%COMP%], .sb-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}.sb-content[_ngcontent-%COMP%]{flex:1;display:flex;height:100%;width:100%;position:relative}.sb-text[_ngcontent-%COMP%]{flex:1;height:100%;white-space:nowrap;padding:var(--sb-text-padding, 0 .7em);font-weight:var(--sb-font-weight, bold)}.sb-icon[_ngcontent-%COMP%]{text-align:center;width:100%;height:100%;min-width:2em;font-size:var(--sb-icon-size, 1.2em)}"],changeDetection:0});let e=c;return e})();function Oo(e,c){if(e&1){let t=w2();I(0,"share-button",2),o1("opened",function(n){M2(t);let r=s1();return H2(r.opened.emit(n))}),U()}if(e&2){let t=c.$implicit,a=s1();X("button",t)("theme",a.theme())("url",a.url())("title",a.title())("description",a.description())("image",a.image())("tags",a.tags())("redirectUrl",a.redirectUrl())("showIcon",a.showIcon())("showText",a.showText())("disabled",a.disabled())}}function Bo(e,c){if(e&1){let t=w2();I(0,"expand-button",3),c5("expandChange",function(n){M2(t);let r=s1();return a5(r.expanded,n)||(r.expanded=n),H2(n)}),U()}if(e&2){let t=s1();S1(C0("sb-button sb-",t.theme())),X("options",t.options),t5("expand",t.expanded)}}var Uo=(()=>{let c=class c{constructor(){this.options=D(),this.expand=D(),this.expandChange=x2()}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=B({type:c,selectors:[["expand-button"]],inputs:{options:[1,"options"],expand:[1,"expand"]},outputs:{expandChange:"expandChange"},decls:4,vars:2,consts:[[1,"sb-wrapper","sb-expand","sb-show-icon",3,"click"],[1,"sb-content"],[1,"sb-icon"],[3,"icon"]],template:function(n,r){n&1&&(I(0,"button",0),o1("click",function(){return r.expandChange.emit(!r.expand())}),I(1,"div",1)(2,"div",2),Q(3,"fa-icon",3),U()()()),n&2&&(_1("aria-label",r.expand()?r.options().lessButtonAriaLabel:r.options().moreButtonAriaLabel),q(3),X("icon",r.expand()?r.options().lessButtonIcon:r.options().moreButtonIcon))},dependencies:[U6],styles:["[button=facebook][_nghost-%COMP%], [button=facebook]   [_nghost-%COMP%]{--button-color: #4267B2}[button=x][_nghost-%COMP%], [button=x]   [_nghost-%COMP%]{--button-color: #00acee}[button=mix][_nghost-%COMP%], [button=mix]   [_nghost-%COMP%]{--button-color: #ff8226}[button=line][_nghost-%COMP%], [button=line]   [_nghost-%COMP%]{--button-color: #00b900}[button=linkedin][_nghost-%COMP%], [button=linkedin]   [_nghost-%COMP%]{--button-color: #0a66c2}[button=pinterest][_nghost-%COMP%], [button=pinterest]   [_nghost-%COMP%]{--button-color: #bd081c}[button=reddit][_nghost-%COMP%], [button=reddit]   [_nghost-%COMP%]{--button-color: #ff4006}[button=tumblr][_nghost-%COMP%], [button=tumblr]   [_nghost-%COMP%]{--button-color: #36465d}[button=whatsapp][_nghost-%COMP%], [button=whatsapp]   [_nghost-%COMP%]{--button-color: #25d366}[button=messenger][_nghost-%COMP%], [button=messenger]   [_nghost-%COMP%]{--button-color: #0080FF}[button=telegram][_nghost-%COMP%], [button=telegram]   [_nghost-%COMP%]{--button-color: #0088cc}[button=xing][_nghost-%COMP%], [button=xing]   [_nghost-%COMP%]{--button-color: #006567}[button=sms][_nghost-%COMP%], [button=sms]   [_nghost-%COMP%]{--button-color: #20c16c}[button=email][_nghost-%COMP%], [button=email]   [_nghost-%COMP%]{--button-color: #FF961C}[button=viber][_nghost-%COMP%], [button=viber]   [_nghost-%COMP%]{--button-color: #665ca7}[button=vk][_nghost-%COMP%], [button=vk]   [_nghost-%COMP%]{--button-color: #4C75A3}[button=copy][_nghost-%COMP%], [button=copy]   [_nghost-%COMP%]{--button-color: #607D8B}[button=print][_nghost-%COMP%], [button=print]   [_nghost-%COMP%]{--button-color: #765AA2}[button=expand][_nghost-%COMP%], [button=expand]   [_nghost-%COMP%]{--button-color: #FF6651}button[_ngcontent-%COMP%]{cursor:pointer;position:relative;outline:0;-webkit-print-color-adjust:exact;margin:var(--sb-margin, .3125em);padding:var(--sb-padding, 0);min-width:var(--sb-min-width, 4.125em);height:var(--sb-height, 2.5em);color:var(--sb-color, #fff);background:var(--sb-background);font-size:var(--sb-font-size, 13px);line-height:var(--sb-line-height, 2.571em);border:var(--sb-border);border-radius:var(--sb-border-radius);transition:var(--sb-transition);box-shadow:var(--sb-box-shadow);text-shadow:var(--sb-text-shadow);overflow:var(--sb-overflow)}.sb-icon[_ngcontent-%COMP%], .sb-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}.sb-content[_ngcontent-%COMP%]{flex:1;display:flex;height:100%;width:100%;position:relative}.sb-text[_ngcontent-%COMP%]{flex:1;height:100%;white-space:nowrap;padding:var(--sb-text-padding, 0 .7em);font-weight:var(--sb-font-weight, bold)}.sb-icon[_ngcontent-%COMP%]{text-align:center;width:100%;height:100%;min-width:2em;font-size:var(--sb-icon-size, 1.2em)}","[_nghost-%COMP%]{--button-color: var(--sb-expand-button-color, #FF6651)}"],changeDetection:0});let e=c;return e})(),ba=(()=>{let c=class c{constructor(){this.options=d(M4),this.show=D(Object.values(C3).length,{transform:D3}),this.include=D(this.options.include||[]),this.exclude=D(this.options.exclude||[]),this.expanded=t1(!1),this.selectedButtons=l1(()=>(this.include().length?this.include():Object.keys(C3)).filter(n=>this.exclude().indexOf(n)<0)),this.displayButtons=l1(()=>{let a=this.selectedButtons();return a.slice(0,this.expanded()?a.length:this.show())}),this.theme=D(this.options.theme),this.url=D(),this.title=D(),this.description=D(),this.image=D(),this.tags=D(),this.redirectUrl=D(),this.showIcon=D(!0,{transform:n1}),this.showText=D(!1,{transform:n1}),this.disabled=D(!1,{transform:n1}),this.opened=x2()}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=B({type:c,selectors:[["share-buttons"]],inputs:{show:[1,"show"],include:[1,"include"],exclude:[1,"exclude"],expanded:[1,"expanded"],theme:[1,"theme"],url:[1,"url"],title:[1,"title"],description:[1,"description"],image:[1,"image"],tags:[1,"tags"],redirectUrl:[1,"redirectUrl"],showIcon:[1,"showIcon"],showText:[1,"showText"],disabled:[1,"disabled"]},outputs:{expanded:"expandedChange",opened:"opened"},decls:4,vars:4,consts:[[3,"button","theme","url","title","description","image","tags","redirectUrl","showIcon","showText","disabled"],[3,"class","options","expand"],[3,"opened","button","theme","url","title","description","image","tags","redirectUrl","showIcon","showText","disabled"],[3,"expandChange","options","expand"]],template:function(n,r){n&1&&(I(0,"div"),Ye(1,Oo,1,11,"share-button",0,Ze),S3(3,Bo,1,5,"expand-button",1),U()),n&2&&(S1(C0("sb-group sb-",r.theme())),q(),Xe(r.displayButtons()),q(2),A3(r.show()<r.selectedButtons().length?3:-1))},dependencies:[ga,Uo],styles:["[_nghost-%COMP%]{display:inherit}.sb-group[_ngcontent-%COMP%], .sb-button[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start}.sb-group[_ngcontent-%COMP%]{flex-wrap:wrap}"],changeDetection:0});let e=c;return e})();var za=(()=>{let c=class c{constructor(a){this.sanitizer=a}transform(a){return this.sanitizer.bypassSecurityTrustHtml(a)}};c.\u0275fac=function(n){return new(n||c)(c1(G3,16))},c.\u0275pipe=d0({name:"SafeHtml",type:c,pure:!0});let e=c;return e})();var jo=()=>["copy","linkedin"];function qo(e,c){if(e&1&&(I(0,"div",1),Q(1,"div",2),I(2,"mat-card")(3,"mat-card-header",3)(4,"mat-card-title",4)(5,"span",5),p1(6),U(),I(7,"div",6),Q(8,"share-buttons",7),U()(),I(9,"mat-card-subtitle")(10,"span",8),p1(11),U()()(),I(12,"mat-card-content",9),Q(13,"div",10),i5(14,"SafeHtml"),U()()()),e&2){let t=s1();q(),X("id",n5(t.post.anchor)),q(5),W2(t.post.title),q(2),X("theme","material-light")("include",r5(13,jo))("show",2)("description",t.postShareTitle)("url",t.postUrl)("title",t.postShareTitle),q(3),W2(t.post.date),q(2),X("innerHTML",o5(14,11,t.post.content),I4)}}var Ca=(()=>{let c=class c{constructor(){this._postShareTitle="",this.postUrl=""}ngOnInit(){this.post?.title?this._postShareTitle=`BuyAllMemes - Blog - ${this.post.title}`:this._postShareTitle="BuyAllMemes - Blog",this.post&&this.updatePostUrl()}updatePostUrl(){let a="https://buyallmemes.com";this.postUrl=`${a}/post/${this.post.anchor}`}get postShareTitle(){return this._postShareTitle}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=B({type:c,selectors:[["app-post"]],inputs:{post:"post"},decls:1,vars:1,consts:[["class","post-container",4,"ngIf"],[1,"post-container"],[2,"position","relative","top","-80px","visibility","hidden",3,"id"],[2,"display","block","padding","1.5rem 1.5rem 1rem"],[2,"display","flex","flex-direction","row","align-items","center","flex-wrap","wrap","margin-bottom","0.5rem"],[1,"post-title-text",2,"flex","1"],[2,"margin-left","1rem"],[3,"theme","include","show","description","url","title"],[2,"font-size","0.875rem","color","#616161"],[2,"padding","0 1.5rem 1.5rem"],[2,"max-width","100%",3,"innerHTML"]],template:function(n,r){n&1&&$2(0,qo,15,14,"div",0),n&2&&X("ngIf",r.post)},dependencies:[fa,da,ha,ma,ua,E3,ba,za],styles:[".post-container[_ngcontent-%COMP%]{margin-bottom:2rem}[_nghost-%COMP%]     .prose{--tw-text-opacity: 1;color:rgb(66 66 66 / var(--tw-text-opacity, 1))}[_nghost-%COMP%]     .prose h1, [_nghost-%COMP%]     .prose h2, [_nghost-%COMP%]     .prose h3, [_nghost-%COMP%]     .prose h4, [_nghost-%COMP%]     .prose h5, [_nghost-%COMP%]     .prose h6{margin-top:1.5rem;margin-bottom:1rem;font-weight:700;--tw-text-opacity: 1;color:rgb(33 33 33 / var(--tw-text-opacity, 1))}[_nghost-%COMP%]     .prose h1{font-size:1.875rem;line-height:2.25rem}[_nghost-%COMP%]     .prose h2{font-size:1.5rem;line-height:2rem}[_nghost-%COMP%]     .prose h3{font-size:1.25rem;line-height:1.75rem}[_nghost-%COMP%]     .prose p{margin-top:1rem;margin-bottom:1rem}[_nghost-%COMP%]     .prose a{--tw-text-opacity: 1;color:rgb(30 136 229 / var(--tw-text-opacity, 1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}[_nghost-%COMP%]     .prose a:hover{--tw-text-opacity: 1;color:rgb(21 101 192 / var(--tw-text-opacity, 1))}[_nghost-%COMP%]     .prose ul, [_nghost-%COMP%]     .prose ol{margin-top:1rem;margin-bottom:1rem;padding-left:1.5rem}[_nghost-%COMP%]     .prose ul{list-style-type:disc}[_nghost-%COMP%]     .prose ol{list-style-type:decimal}[_nghost-%COMP%]     .prose pre{margin-top:1rem;margin-bottom:1rem;overflow-x:auto;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity, 1));padding:1rem}"]});let e=c;return e})();var Ma=[{filename:"20250525-let-go.md",content:`<h2>Long-Term Java</h2>
<p>My coding journey began with BASIC on an IBM 286 PC,
then spiraled into Assembly, C, C++, Pascal, and Delphi during school and university.
My professional career began with PHP in 2009, followed by a brief romance with Ruby on Rails, and then\u2014<strong>Java</strong>.</p>
<p>From 2011 to mid-2024, I lived and breathed <strong>Java</strong> almost exclusively.
Sure, I dabbled in JavaScript (an occupational hazard for any web developer),
and played with Scala, Elixir, Clojure, and Rust, to name a few.
But I always came back to Java.<br>
I love Java.
The language is amazing, and its ecosystem is simply the best there is.
Especially Spring \u2014 I attribute most of Java's success to it,
there's nothing even remotely close.<br>
I consider myself a Java guy.
Hell, I\u2019m even a certified Oracle Java Professional Programmer, FFS.</p>
<h2>The Red Flags</h2>
<blockquote>
<p>My disappointment is immeasurable, and my day is ruined (c) TheReportOfTheWeek</p>
</blockquote>
<p>But after 13 years in a committed relationship, I started noticing the red flags.
I can count on one hand the Java codebases I'd call truly &quot;clean&quot; \u2014
and I might still have fingers left over.
Why?
Have I only worked with &quot;bad&quot; programmers?
Absolutely not.
Do I have unrealistic standards?
I don't think so.<br>
At some point, it started to feel impossible.
And then I caught an intrusive thought: the biggest problem with Java is... drumroll... <strong>the people</strong>.<br>
We are <em>different</em>, we've lived through <em>different</em> experiences, and we see things <em>differently</em>.
And Java plays very strongly to those <em>differences</em>.
It provides too many options, too many ways to do the same thing, and too many paradigms all over the place.
Especially now, when the release cadence is every six months, code written 3\u20135 years ago looks very much dated.
And code written in Java 6 (God bless) isn\u2019t even considered Java anymore.
It\u2019s paleontology.</p>
<p>Picture this: You join a new team.
One developer has built a reactive streams pipeline that looks like it belongs in a Haskell textbook.
Another has crafted a classical inheritance hierarchy so deep it makes your IDE scroll bar weep.
A third has written what's essentially C with classes \u2014 static methods everywhere, zero abstraction.
All three claim they're writing &quot;good Java.&quot;
All three are technically correct.
And that's the problem.</p>
<p>That\u2019s not flexibility \u2014 that\u2019s chaos.</p>
<h2>The Accidental Go</h2>
<p>Mid 2024, life threw me a curveball disguised as a job offer.</p>
<p>I got hired as a Staff Engineer by a company that doesn't use much Java
but primarily uses Go as a go-to language (yes, the pun is unavoidable, deal with it).
By the time I signed the final offer, I had little to no idea what Go was.
&quot;Oh well, it's something from Google, and Kubernetes and Docker are written in it.&quot;
During the interview process,
I was told: &quot;Don't worry, we hire a lot of Java people without Go background, you'll be fine.&quot;
If you say so.</p>
<p>It's been almost a year at the time of writing this, and oh my God, I'm more than fine.
I don't remember the last time I had so much fun programming on the weekend by myself.
It feels so natural, fluent, and addictive.
I'm constantly in the process of building something, be it a small AI-integrated CLI tool,
micro AWS Lambda for a Telegram bot, or a backend that powers this blog.</p>
<h2>Simplicity's Strength</h2>
<p>The more I think about it, the more I realize \u2014 Google engineers who created GO are geniuses.
They made a perfect language for an average Joe.
The language follows a brutally simple motto: <strong>Less is more</strong>.
In fact, Go is the only language that consistently hosts conferences where people discuss features that should be
<strong><em>REMOVED</em></strong> from the language.
<strong><em>REMOVED</em></strong>.
Three ways to declare a variable?
Too many.
Leave one.<br>
Of course, it's not happening because it will break backwards compatibility,
but this is the narrative that drives the community.
And it works.</p>
<p>After half a year of writing and reading Go daily,
I opened the source code of Kubernetes \u2014 which is more than a decade old \u2014 and... understood everything.
It's not an ancient manuscript to me.
It's the same code I'm writing daily.
Sure, the structure of the project and some approaches may differ, but the code is the same:</p>
<ul>
<li>The same for-loops, if-statements, and variable assignments</li>
<li>The same structs and interfaces on the consumer side (I freaking love it)</li>
<li>Go's infamous clunky error handling</li>
<li>The context is passed everywhere as a first parameter</li>
<li>And tests look identical</li>
</ul>
<p>And one more\u2014<em>everything is formatted the same</em>.</p>
<blockquote>
<p>And don't get me started on the formatting wars...<br>
Nothing I hate more than pointless styleguide discussions.<br>
All those hours and energy wasted debating tabs vs spaces,
line length limits, bracket positions, and chain-method alignments...<br>
Ever hit &quot;Reformat&quot; on legacy code and Git blamed you for the whole mess?
\u201CWho wrote this crap?\u201D
\u201CApparently... Dave.
Last Tuesday.\u201D
All because he hit Ctrl+Alt+L.<br>
<strong>They played us for absolute fools.</strong><br>
Go just skipped the whole charade from day one with <code>gofmt</code>.<br>
<a href="https://www.youtube.com/watch?v=PAAkCSZUG1c&amp;t=523s&amp;ab_channel=TheGoProgrammingLanguage">Gofmt's style is no one's favorite, yet gofmt is everyone's favorite.</a><br>
This is the way.</p>
</blockquote>
<p>If this is not a success - I don't know what is.</p>
<p>For comparison, I tried to look at the source code of Apache Kafka once,
and I couldn't understand much.
&quot;What is this piece of code doing?
Something, I guess.&quot;
\u2014 It looked nothing like the Java I've written for over a decade.</p>
<p>Another time, I wanted to fix a bug in an open-source <code>openapi-diff</code> library.
I don't know what those guys were on,
but this stuff is considered <em>too hardcore</em> even by the Berlin industrial techno scene.
To me, it made absolutely no sense.
Just a bunch of eccentric abstractions.
The source code of Kafka at least made some sense.</p>
<h2>Talk is cheap. Show me the code.</h2>
<p>Let me give you a quick taste of Go.</p>
<p>I'm not going to explain how to write for-loop or an if-statement.
You can figure it out by yourself.<br>
Instead, I'll show you how to build a HelloWorld library and use it in another project.
It takes minutes, and it's freaking awesome.</p>
<p>Preconditions:</p>
<ul>
<li>Installed Go \u2014 google it, almost every package manager can do it</li>
<li>Access to a git repo \u2014 we need a place to store our code</li>
</ul>
<p>I\u2019m not going to waste time walking you through environment setup \u2014
there are plenty of resources online for that.</p>
<p>Let's jump straight to the point.</p>
<pre><code class="language-bash">mkdir go-hello-world-lib
cd go-hello-world-lib
go mod init github.com/{your_repo}/go-hello-world-lib
</code></pre>
<p>I hope the first two lines are self-explanatory.<br>
<code>go mod init github.com/{your_repo}/go-hello-world-lib</code> <strong>init</strong>ializes go <strong>mod</strong>ule - a single <code>go.mod</code> file that
holds information about the module, such as its name, Go version, dependencies, etc.
In my case, the module name is <code>github.com/mfenderov/go-hello-world-lib</code> -
technically, it could be whatever I want,
but it's a convention to name a module using a git repo URL,
I'm going to use GitHub in this case because I'm going for a fancy-pants open-source library, of course.<br>
Content of <code>go.mod</code>:</p>
<pre><code class="language-bash">module github.com/mfenderov/go-hello-world-lib

go 1.24.3
</code></pre>
<p>As I mentioned above, the module name and Go version.
Nothing else.</p>
<p>Now, use the editor of your choice and create the <code>main.go</code> file near <code>go.mod</code>, with a code like this:</p>
<pre><code class="language-go">package main

func main() {
	println(&quot;Hello World!&quot;)
}

</code></pre>
<p>As Hello World as it gets.</p>
<blockquote>
<p>You'd better get used to shortcutting everything.
There's no time to type <code>function</code> - it's a <code>func</code> now.<br>
I guess it's to prevent people from mixing Go with JavaScript.
I don't like it, but it is what it is.</p>
</blockquote>
<p>What is important here is the package name.
A package is the smallest unit of organization in Go.
It's basically a container for code and a means of encapsulation.
Kind of like in Java.</p>
<p>Now let's execute the code:</p>
<pre><code class="language-bash">go run main.go
</code></pre>
<p>Or, if we\u2019re in the same folder, we can just run:</p>
<pre><code class="language-bash">go run .
</code></pre>
<p>The runner will scan the folder in search of the <code>main</code> package
and then execute the <code>main</code> function(<code>public static void main</code> sends its regards).</p>
<p>This should print <code>Hello World!</code>.
Interesting? Not really.</p>
<blockquote>
<p>Worth mentioning that while a directory defines a single package, Go has a neat convention for tests.
You can put test files (e.g., something_test.go) in the same directory.
If you use the same package name (package main), tests get full access.
Or you can use a suffix like <code>package main_test</code> to restrict tests to public APIs only.
These <code>_test</code> packages reside in the same folder but are compiled separately, providing high cohesion of source code
while ensuring tests only use the public API of the package under test.
Clean and flexible.</p>
</blockquote>
<p>Now, let's perform a little refactoring \u2014 extract the <code>Hello World!</code> logic into a separate function.</p>
<pre><code class="language-go">package main

func Hello() {
	println(&quot;Hello World!&quot;)
}

func main() {
	Hello()
}
</code></pre>
<p>Noticed capital <code>H</code> in <code>func Hello()</code>?
This is how primitives (functions, variables, structs, interfaces, etc.) are exposed outside the package.
Sort of like <code>public</code> and <code>private</code>(package private to be exact) modifiers in Java.
Capital letter \u2014 public, lowercase \u2014 package private.
Everything within a package is visible to all members of the package.<br>
Easy enough?</p>
<p>How about a little trick?</p>
<pre><code class="language-go">package main

func Hello() {
	println(&quot;Hello World!&quot;)
}

func main() {
	helloFunc := Hello
	helloFunc()
}
</code></pre>
<p>This is, of course, an absolutely valid Go program.
The function <code>Hello</code> was assigned to a variable and called using <code>()</code> on the next line.
And since it's just a variable, it can be passed around.
Functional and effortless.</p>
<p>Now let's build it:</p>
<pre><code class="language-bash">go build main.go
</code></pre>
<p>This command compiles our wonderful Go program into a native executable.<br>
File <code>main</code> without any extension should appear nearby.
Let's execute it:</p>
<pre><code class="language-bash">./main
</code></pre>
<p>Voil\xE0!
Native Hello World!
How about that, Java?<br>
No Docker, no JVM, no GraalVM, no separate runtimes at all.
Pure efficiency instead.<br>
Want to forget about silly, untestable, unreadable, unmaintainable build scripts?
Use Go.</p>
<p>Now, let\u2019s turn this into a library.
Go\u2019s dependency system is laughably simple: it\u2019s just Git.<br>
Every library is just a Git repo, and its version is a Git tag.
That's it.
No complexity.<br>
For example, if I want to use <code>github.com/mfenderov/go-hello-world-lib</code> version <code>v0.0.1</code>,
it means there should be a Git repository with that URL
and a commit tagged with <code>v0.0.1</code>.
No third-party Artifactories, no Maven Centrals, no npm repositories with mysterious outages.
The library points straight to the source.<br>
Elegant simplicity at its finest.</p>
<p>But does this mean that every Git repo is automatically a Go library?
Actually, yes - any Git repo with a proper Go module structure can be used as a dependency.
However, to make your library more discoverable and provide official documentation,
you should list it on <code>https://pkg.go.dev/</code>.
This step isn't strictly required for usage, but it's good practice for any library you want others to find and use.</p>
<p>How do you get your library listed?
Ridiculously easy.
You need a publicly accessible Git repo,
tag your commit,
and execute the <code>go list</code> command.
The whole process looks something like this:</p>
<pre><code class="language-bash">git tag v0.0.1
git push origin v0.0.1
GOPROXY=proxy.golang.org go list -m github.com/{your_repo}/go-hello-world-lib@v0.0.1
</code></pre>
<p>This tells Go's module proxy to fetch and cache your library, making it available to the entire Go ecosystem.</p>
<p>To test it, initialize a new Go module with the <code>go mod init</code> command
and get the dependency via <code>go get github.com/{your_repo}/go-hello-world-lib@v0.0.1</code>.</p>
<p>This is the most straightforward way to release a library I've ever seen.<br>
With some basic CI/CD sprinkles, the whole publishing &quot;process&quot; just disappears.</p>
<p>Go also has a built-in dependency updater:</p>
<pre><code class="language-bash">go get -u ./...
</code></pre>
<p>Bam, and all our dependencies will be updated to the latest versions.
By default, it updates only minor or patch versions of all dependencies.
I ran it every once in a while, just to be on top of my things.</p>
<h2>Conclusion</h2>
<p>I'm not here to convert anyone.
Java will always have a special place in my heart, and honestly,
it pays the bills for millions of developers.
But after a year with Go,
I can't unsee what I've seen.
The simplicity, the consistency,
the fact that I can actually read decade-old code without a PhD in software archaeology\u2014it's liberating.
I'm completely sold on Go's ideas,
and right now,
I have zero desire to write any Java again.</p>
<p>Sometimes the most radical thing you can do is choose simple over clever.<br>
Sometimes, you just need to let go.</p>
`,date:"25.05.2025",title:"Let Go",anchor:"let-go"},{filename:"20240516-testing-guideline.md",content:`<p>I wrote this article quite some time ago and parked it on the company's confluence page.</p>
<p>Although it was super exciting to write,
and I tried to promote it internally to the best of my ability,
it turned out to be yet another cold documentation.</p>
<p>But I liked it so much, that I think it's worth revisiting and publishing in the open.</p>
<h1>Testing</h1>
<h2>Why test?</h2>
<p>I think it's mostly clear, but nonetheless, I will outline a couple of the most important reasons.</p>
<h3>We want our software to work</h3>
<p>Testing is an essential part of software development that helps ensure that an application works as intended and meets
the expectations of users.
Without tests, it's almost impossible to prove, that the functionality does what it's supposed to do -
it's just an educated guess.</p>
<h3>We want our software to continue working</h3>
<p>The true cost of software is in its maintenance.
Time and money invested into maintenance dwarfs initial development investment.
And the larger the codebase, the less and less important the initial development investment cost is.
Maintainability should be the main factor when developing software.<br>
We\u2019re getting inevitably slower as the code degrades over time.
Tests enable us to ease the pain of maintenance by turning it into a simple routine activity.<br>
Well-written tests enable change.
They enable options.</p>
<h3>People interaction</h3>
<p>Counterintuitively, tests help with readability.
They shift attention from implementation details to behavior, usability, and user-friendliness,
which ends up in much more simple code.
We spend 10x more time reading code when writing.
Something written in ~5 minutes will be read for an hour.
Think about this next time you will spend hours coding.</p>
<p>Speaking in financial terms:
<strong>code is a liability</strong> \u2014 it is something that requires more and more investments over time to keep it working.
The larger the codebase, the more maintenance, bug fixing, and refactoring it requires.<br>
On the other hand, <strong>test suite is your asset</strong> \u2014 it is something that helps to deal with the liability.
Well-written test suite will continuously pay its dividends.<br>
And if financial gurus are teaching us something,
is that we should invest (time and money) in assets, and not liabilities.</p>
<p>Tests are never obsolete, they act as a living specification forever.</p>
<p>Don\u2019t confuse anything of that with &quot;easy.&quot;
Writing good tests and good code is not easy.
It requires discipline and practice.
Constant practice.</p>
<p>So let's go through the most important aspects that I picked up over the years of writing awesome tests one-by-one.</p>
<h1>Understand the Classic Testing Pyramid</h1>
<p>It all starts with the testing pyramid \u2014
a testing strategy that emphasizes the importance of having a balanced mix of different types of tests.
There are many types of tests, but they can be categorized into three groups:</p>
<ul>
<li>unit tests</li>
<li>integration tests</li>
<li>end-to-end tests</li>
</ul>
<p>The aim is to have a higher percentage of unit tests and a lower percentage of end-to-end tests to ensure faster
feedback loops and more robust code.</p>
<p><img src="assets/20240406-tg/image-20230327-114635.png" alt=""></p>
<p><em>$$$ \u2014 expensive tests, a lot of machinery and time are involved</em></p>
<p><em>$ \u2014 cheap tests, very little resources and time are required</em></p>
<p>In this article, I will mainly focus on unit tests with sprinkles of integration tests.</p>
<h4>References</h4>
<ul>
<li><a href="https://martinfowler.com/articles/practical-test-pyramid.html">The Practical Test Pyramid</a></li>
</ul>
<h1>Unit tests</h1>
<h2>What is a <em>unit</em>?</h2>
<p>Before I dive deep into technics and dos-and-don'ts, we have to come to terms with &quot;What is a <em>unit</em>?&quot;.</p>
<blockquote>
<p>&quot;Unit \u2014 an individual thing or person regarded as single and complete but which can also form an individual component
of a larger or more complex whole.&quot;\u2014 Google a.k.a.
Oxford dictionary</p>
</blockquote>
<p>Interesting, but a bit too broad.</p>
<p>How about this?</p>
<blockquote>
<p>&quot;In computer programming, unit testing is a software testing method by which individual units
of source code\u2014sets of one or more computer program modules together with associated control data, usage procedures,
and operating procedures\u2014are tested to determine whether they are fit for use.
It is a standard step in development and implementation approaches such as
Agile.&quot;- https://en.wikipedia.org/wiki/Unit_testing</p>
</blockquote>
<p>Noticed anything?<br>
There's nothing about a &quot;single line of code,&quot; a &quot;single method&quot; or even a &quot;single class.&quot;<br>
This is one of the most common misconceptions.
Somehow &quot;unit&quot; is commonly interpreted as &quot;a method&quot; or even worse \u2014 &quot;a line of code.&quot;
And so unit testing becomes method testing, line testing, etc.<br>
This is very one-dimensional and crude.<br>
Yes, it's important for every method and every line of code to be tested,
but it should also make sense in the grand schema of things.</p>
<p>Allow me to elaborate.
If I'm introducing a change (whatever it might be: feature, bugfix, etc.), what is more important?</p>
<ul>
<li>for the change to work</li>
<li>for some method to return the right value</li>
</ul>
<p>Well, the answer is clear \u2014
it's always more important for the whole <strong>change</strong> to work than for the method to return the right value.
Code can have mistakes, but if the change performs as it should - who cares?
This is because the change is the unit in this case.
Not a method or a line of code.
The code is just an implementation detail of this change.
Important detail, but a detail nonetheless.
And details should be tested as part of something bigger.</p>
<p>This realization made unit testing my best ally, instead of a chore.</p>
<p>It's like LEGO.
Is it important that all bricks are working?
Yes.
But will the satisfaction be the same if instead of a pirate ship,
you receive just a bunch of working bricks?
I doubt so.</p>
<h2>Write Effective Unit Tests</h2>
<p>Here's my collection of techniques and best practices for writing awesome unit tests.
Don't get me wrong, I haven't invented any of those \u2014
this is just a collection that I've assembled over time from different sources: be it books, articles, conference talks,
workshops, and my colleagues.</p>
<p>However, all this stuff is battle-tested.
There's not a single technique that I don't use daily.
If anything, there might be more.</p>
<p>Some of these points are asymptotes \u2014
they are hardly reachable 100% of the time, and it's fine, as long as there's a consistent upward trend.</p>
<p>There are going to be quite a few code snippets, they all will be in <strong>Java</strong> with some sprinkles of <strong>Spring</strong>, for
obvious reasons \u{1F60F}.</p>
<h3>Listen to your unit tests</h3>
<p>Your unit tests are trying to tell you something, and if you want your code to be awesome, you have to listen.
They are your best allies.<br>
\u201CIf tests are hard to write, the production design is crappy\u201D - goes an old saying.
Indeed, writing unit tests gives one of the most comprehensive,
yet brutal feedback about the design of the system.</p>
<p>From my experience,
every project where tests were treated like a chore or an afterthought had a horrible rotting codebase.
No exceptions.
And the best codebases I worked with were always backed up by an amazing testing culture amongst developers.
There's nothing that hurts codebase more than a phrase: &quot;I'm finished with implementation, and now I'm writing tests.&quot;</p>
<p>And this brings us to the next point...</p>
<h3>Write unit tests early</h3>
<p>Writing fine-grained unit tests early increases friction with bad design,
helps to understand the problem and clarify business requirements early in development,
gives early design feedback, and produces real test coverage.</p>
<p>Unit tests force the writer to think about a piece of code from the user\u2019s perspective.
This coerces a cleaner and more effective design.</p>
<p>Writing unit tests after the implementation is done is practically useless.
All mistakes are already made.
Bad design decisions as well.
Unit tests will just &quot;solidify&quot; everything, and harm more than help.</p>
<p>I'm not preaching about TDD.
TDD is hard.
But writing unit tests early is not.
How early?
As early as possible.
Ideally, first \u{1F609}.<br>
Write a little bit of code, then write a little bit of test, then write a little bit of code, etc.
As soon as you feel comfortable, skip the first step.</p>
<h3>Testable Design is Good Design</h3>
<p><img src="assets/20240406-tg/image-20230328-072454.png" alt=""></p>
<p>Having to mock more than five plus dependencies is a sign of a bad production code design.</p>
<p>It's better to have ten small classes with one-two dependency each,
than one mega-class with ten dependencies.
The ideal number of dependencies per class is zero, but this is hardly possible,
but the intention to have as few dependencies per class as possible should drive the design.</p>
<h4><strong>Testing simplification is a great reason to refactor production code</strong></h4>
<p>I once heard a phrase from a seasoned dev: &quot;Changing production code because of tests is a bad practice!&quot; \u2014
it goes without saying that the project codebase was one of the worst I ever worked with to this day.</p>
<p>The pinnacle of this project for me was a 4-week sprint,
during which my team was extremely busy, but managed to produce so little output,
that during the monthly project demo, all we had to show for it was a small green text on a couple of web pages.<br>
And nobody was laughing, because other teams(~15 in total) managed to produce even less.
A couple of months later, the project with a 20mil euro a year budget was canceled after approximately 4 years of
development.
The project was a massive failure.</p>
<p>It was probably mismanaged all over the place,
yes, but poor and unprofessional engineering &quot;ship-shit-fast&quot; culture didn't help,
that's for sure.
Over 4 years, more than a hundred engineers(myself included) produced nothing but a raw unmaintainable mess,
that inevitably ground development to a halt.</p>
<p>But I've learned a lot.
No matter how many hours I and my team put into a working week, the ever-growing mess will always outpace us.
And the only way to move fast is to move with ever-increasing quality.
And the only way to achieve ever-increasing quality is to mercilessly refactor existing code.
And the only way to enable refactoring is to have rigorous testing ethics.</p>
<p><strong>Moral of the story: good tests equal fast development.</strong></p>
<h3>Test behavior, not implementation</h3>
<p>This is big.</p>
<p>This took me too long to realize.</p>
<h4>Implementation changes should not break tests</h4>
<p>If I want to perform some minor refactoring(tidying),
like rearranging methods, and classes, extracting new interfaces - something that keeps the behavior the same,
I should be able to do it without breaking tests.
This is impossible if tests are written to test implementation (each method/line of code).</p>
<p>My rule of thumb goes like this:
All the code I can merge into a single class without breaking the system and domain boundaries should be tested as
one.
The whole domain is a unit.</p>
<p>Assuming I have something like this:</p>
<pre><code class="language-bash">\u251C\u2500\u2500 buyallmemes
\u2502   \u251C\u2500\u2500 notification
\u2502   \u2502   \u251C\u2500\u2500 NotificationUser.java
\u2502   \u2502   \u251C\u2500\u2500 NotificationUserRetriever.java
\u2502   \u2502   \u251C\u2500\u2500 NotificationUserMapper.java //maps something to something
\u2502   \u2502   \u251C\u2500\u2500 EmailGatewayClient.java // sends message to queue
\u2502   \u2502   \u251C\u2500\u2500 ... //domain specific logic
\u2502   \u2502   \u2514\u2500\u2500 NotificationModule.java
\u2502   \u251C\u2500\u2500 user
\u2502   \u2502   \u2514\u2500\u2500  UserModule.java //implements NotificationUserRetriever, retrieves a user from DB

</code></pre>
<p>There are several possibilities to scope tests:</p>
<ul>
<li>go by the &quot;book&quot; and test each class/method on its own mocking everything else</li>
<li>scope tests around whole <code>NotificationModule</code> and mock only external dependencies</li>
</ul>
<p>This way, dependencies within the scope could be refactored.
It's much more flexible.
API signatures could be changed freely.</p>
<h3>Tests enable refactoring</h3>
<p>It\u2019s impossible to refactor code without tests.
It\u2019s dangerous, time-consuming, and error-prone.
It\u2019s not fun.
The number one precondition to any refactoring is a strong test suite, and there\u2019s no way around it.
Untested code cannot be adequately refactored.</p>
<p>And nobody writes clean code from scratch.
Not even the \u201Cstrongest\u201D programmers.
The &quot;stronger&quot; the programmer, the more he/she relies on an adequate test suite to support their messy code from the
beginning.</p>
<p>I've been guilty of refactoring without tests in the past.
It's a dreadful experience.</p>
<h3>Keep your tests clean</h3>
<p>The cleanliness of tests is arguably even more important than the clean \u201Cproduction\u201D code.
The code will inevitably change, it will evolve, and the only thing that will hold it accountable is tests.</p>
<p>Try to avoid any \u201Ccrafty\u201D approaches.
Settle for standard tools and practices.</p>
<h4>The best test is the simple test</h4>
<p><strong>Bad:</strong></p>
<pre><code class="language-java">
@BeforeEach
void setUp() {
    MockitoAnnotations.openMocks(this);
}
</code></pre>
<p>Deceiving. Hide unnecessary stubbing. Don\u2019t do it.</p>
<p><strong>Good:</strong></p>
<pre><code class="language-java">
@ExtendWith(MockitoExtension.class)
class WonderfulServiceTest {
...
}
</code></pre>
<p>Reveals unnecessary stubbing, makes tests more readable, and adds more Mockito magic (in this case, this is a good
thing).</p>
<p><strong>Bad:</strong></p>
<pre><code class="language-java">private SystemUnderTest underTest;

@Mock
private MockOfSomething mock;

@BeforeEach
void beforeEach() {
    underTest = new SystemUnderTest(mock);
}
</code></pre>
<p><strong>Good:</strong></p>
<pre><code class="language-java">
@InjectMocks
private SystemUnderTest underTest;

@Mock
private MockOfSomething mock;
</code></pre>
<p>Clean. Less boilerplate code.</p>
<p>Messy unit tests possess much greater risk than the absence of tests.
They create fake coverage and mislead into an idea that the code is working.</p>
<p><strong>And stay away from reflection.</strong></p>
<p>In Java world, tools like <strong>PowerMock</strong>,
<strong>ReflectionUtils</strong> are a solid sign that something is fundamentally wrong with the code design.
Unless you are building a reflection-based framework of some sort, there should be no need for such tools.</p>
<h3>Review and refactor tests regularly</h3>
<p>Just like production code, tests should be reviewed and refactored to
ensure that they are still valid and maintainable.
This includes removing redundant tests, consolidating duplicate
tests, and improving test readability.</p>
<h3>Keep your tests small and focused</h3>
<p>Follow the AAA pattern (Arrange, Act, Assert)/GWT pattern (Given, When, Then)</p>
<p><img src="assets/20240406-tg/image-20230327-122231.png" alt=""></p>
<h3>Have many test classes per production class</h3>
<p>Do not feel compelled to stuff all your tests for <code>FooService</code> into <code>FooServiceTest</code>.<br>
Every test that needs a slightly different setup should go into a separate test class.<br>
It helps to understand what exactly is going on in a test class.
For example, <code>FooServiceUserNotFoundExceptionTest</code> requires little to no explanations.</p>
<ul>
<li>
<p>Not sure about where to put new tests? Create a new class.</p>
</li>
<li>
<p>The test class is getting too big and requires a lot of doom-scrolling?
Split it into several test classes.
This is also a good indicator that the class under the test is too big with too many responsibilities.
Refactor it.
Split it into smaller pieces.</p>
</li>
</ul>
<p>Once again, <strong>the best test is the simple test</strong></p>
<h3>Test what\u2019s important first</h3>
<ol>
<li>
<p>Happy paths.<br>
It's a good idea to start with something simple, something satisfying.</p>
</li>
<li>
<p>Code that you fear.<br>
This should be your primary objective.
The first test is the hardest to write, and as soon as you crack it -
everything else will fall apart with ease.</p>
</li>
<li>
<p>Deeply encapsulated logic that is hard to reach via API.<br>
The logic that requires a lot of state management.
Sometimes it's not possible to test the whole change in isolation,
and this is where &quot;method by method&quot; tests become useful.
Don't overdo it.</p>
</li>
<li>
<p>A bug.<br>
Every time you write a failing test that proves the bug before fixing that bug - you deserve a small salary raise.
This is what truly differentiates the best from the rest.
Personally, I found this extremely satisfying to see my failed test prove a bug, just then to be fixed.
Or even better, a test that should fail \u2014 passes, because the initial &quot;bug&quot; assumption was wrong.
I can't stress enough how powerful this technique is.</p>
</li>
<li>
<p>Validation.<br>
Places with high cyclomatic complexity.<br>
<code>if</code>, <code>for</code>, <code>while</code>, etc.</p>
</li>
<li>
<p>Exceptional cases.<br>
All your <code>throws</code> and <code>try catch</code>.
Test it, but maybe a bit later.</p>
</li>
<li>
<p>Facade methods.<br>
Methods that just call another method or two.
If you have time - do it.
What are the chances that someone will accidentally delete one of those calls?
These methods usually could be tested in a bundle with some other logical parts.</p>
</li>
<li>
<p>Trivial code.<br>
Getters/Setters.
Not the best way to increase code coverage.
Same as for the facade methods \u2014 your getters/setters/mappers should be tested as part of something more meaningful.</p>
</li>
<li>
<p>Legacy code that never changes with no bugs.<br>
If it works \u2014 don\u2019t touch it.
Leave it be.
Find something better to do.</p>
</li>
</ol>
<p>Don\u2019t start testing by passing <code>null</code> and empty collections.<br>
Don\u2019t start testing with extremely rare edge cases.<br>
Focus on what\u2019s important first.<br>
Use code coverage to detect missed paths.</p>
<p>Don\u2019t strive to have high code coverage for the manager's sake.</p>
<h4>Strive to have meaningful tests that you trust with your life</h4>
<p><a href="https://en.wikipedia.org/wiki/Pareto_principle">Pareto principle</a> applies to tests quite well.
80% coverage could be achieved by spending just a little bit of effort.
The last 20% of coverage will take you approximately four times as much.</p>
<p><img src="assets/20240406-tg/image-20230331-114754.png" alt=""></p>
<h3>Keep your unit tests fast</h3>
<p><em>Ludicrously</em> fast.
Run unit tests often.
Run unit tests all the time.<br>
Keep in mind that unit tests are focussing on behavior.
Timing and concurrency should never be a part of the unit test \u2014 otherwise,
you end up with non-deterministic results.</p>
<ul>
<li>
<p>No <code>Thread.sleep(..)</code>.</p>
</li>
<li>
<p>No <a href="http://www.awaitility.org/">http://www.awaitility.org/</a>.</p>
</li>
<li>
<p>No <code>while(...){...}</code></p>
</li>
</ul>
<p>Keep these techniques for integration tests.</p>
<p>Actively look for slow unit tests and investigate.
The usual suspects are Reflection and his best friend Mockin Static.
To fight with the <code>static</code> disease - convert <code>static</code> methods into small instanced components.</p>
<p><strong>Bad:</strong></p>
<pre><code class="language-java">public class SomethingSometingUtil {
    private SomethingSometingUtil() { //look ma, I know about default constructor
    }

    public static Something convert(SomethingElse somethingElse) {
        Something something = new Something();
        something.setSomeField(somethingElse.getSomeField());
        return something;
    }
}
</code></pre>
<p>The only way to mock this is via <code>Mockito.staticMock(SomethingSometingUtil.class)</code>
or tools such as <code>PowerMockito</code>.
This slows down tests considerably and makes them hard to work with.
Overall, <code>static</code> is considered <em>by me</em> to be a terrible practice.</p>
<p><strong>Good:</strong></p>
<pre><code class="language-java">
@Component
public class SomethingSomethingConverter {
    public Something convert(SomethingElse somethingElse) {
        return SomethingSometingUtil.convert(somethingElse);
    }
}
</code></pre>
<p>In case it is impossible to refactor (and get rid of) <code>SomethingSometingUtil</code> in one go(3rd party library, too heavily
used in production code),
it is perfectly fine to introduce a decorator-ish component that wraps static nonsense.
The new component could be easily controlled, mocked, and tested.
This speeds up tests considerably and makes the code much cleaner in general.</p>
<p>Although some literature suggests that talking to a database or a queue during a unit test is fine, I disagree.
I like to keep my unit tests simple, fast, and away from the network.</p>
<h3>Keep your tests 100% deterministic</h3>
<ul>
<li>
<p>No flakiness.</p>
</li>
<li>
<p>No time dependence.<br>
Avoid <code>Instance.now()</code>and such.
Instead, create a small component and inject it <strong><em>everywhere</em></strong> you need a current
date.</p>
<pre><code class="language-java">@Component
public class DateService { // naming is hard, but we can always change it
    public Instant getNow(){
        return Instant.now(); //static methods are a bad practice, by the way
    }
}
</code></pre>
<p>It could be easily mocked and tested.
A thing of beauty.</p>
</li>
<li>
<p>No network interaction \u2014 the network is slow, avoid it</p>
</li>
<li>
<p>Avoid concurrency and multithreading, unless this is your prime objective</p>
</li>
</ul>
<h3>Use mocking judiciously</h3>
<ul>
<li>
<p>Mock behavior, not data.<br>
<strong>Bad:</strong></p>
<pre><code class="language-java">MyBelovedDTO dto = mock(MyBelovedDTO.class);
</code></pre>
<p>Why?
I see this all the time, and every single time my reaction is &quot;Why?&quot;
After all these years, I still don't understand.
I probably missed a memo or something.
In most cases, there's a beautiful builder pattern hidden somewhere.
Use it.
There\u2019s none?
Add a builder pattern and use it.
If there\u2019s no access to the source code(3rd party library), invest in creating a dedicated builder just for
testing.<br>
<strong>Good:</strong></p>
<pre><code class="language-java">MyBeloverDTO dto = new MyBeloverDTOBuilder() //builder could be a standalone class
                               ...           //use builder setters
                               .build();     //ugly target class is encapsulated
</code></pre>
</li>
<li>
<p>Don't Mock Getters.<br>
Just don\u2019t.</p>
</li>
<li>
<p>Don't have Mocks return Mocks.<br>
Every time you do that, a fairy dies \u{1F9DA}\u{1F622}</p>
</li>
<li>
<p>Overuse of mocks leads to brittle tests and code that is difficult to maintain.</p>
</li>
</ul>
<p>It is perfectly fine to use <em>real classes</em> instead of mocked interfaces.<br>
Mocked interfaces are hard to change - every API change will break <strong>ALL</strong> tests.
Do yourself a favor, and don't solidify interfaces between components prematurely.
This is especially true in the early stages of development.
Mock a bit further from the class you are testing, and leave yourself room to wiggle.
Or even better - start with a small integration test.</p>
<p>Assuming we have something like:</p>
<pre><code class="language-java">
@RequiredArgsConstructor
class A {
  private final B b;

  public String getSomething() {
      return b.computeSomething();
  }
}

@RequiredArgsConstructor
class B {
  private final CRepository cRepository;

  public String computeSomething() {
      return cRepository.getSomething() + &quot; World!&quot;;
  }
}

class CRepository {
  // represention of a database
  public String getSomething() {
      return &quot;Hello&quot;;
  }
}
</code></pre>
<p>Class <strong>A</strong> injects class <strong>B</strong>, and class <strong>B</strong> injects class <strong>CRepository</strong>. Nothing crazy.</p>
<p><strong>Might be too fragile:</strong></p>
<pre><code class="language-java">
@ExtendWith(MockitoExtension.class)
public class ATest {

    @InjectMocks
    private A a;

    @Mock
    private B b;

    @Test
    void test() {
        when(b.computeSomething()).thenReturn(&quot;Hello World!&quot;);
        String actual = a.getSomething();
        assertEquals(&quot;Hello World!&quot;, actual);
    }
}
</code></pre>
<p>The interface between <strong>A</strong> and <strong>B</strong> is effectively locked.
The only change we can make without breaking the test is renaming via IDE.
It's useful, but nothing spectacular.</p>
<p><strong>Might be more elastic:</strong></p>
<pre><code class="language-java">
@ExtendWith(MockitoExtension.class)
public class ATest {

    private A a;

    @InjectMocks
    private B b;

    @Mock
    private CRepository cRepository;

    @BeforeEach
    void setUp() {
        a = new A(b); //real implementation of B is injected
    }

    @Test
    void test() {
        when(cRepository.getSomething()).thenReturn(&quot;Hello&quot;);
        String actual = a.getSomething();
        assertEquals(&quot;Hello World!&quot;, actual);
    }
}
</code></pre>
<p>The interface between <strong>A</strong> and <strong>B</strong> could be freely changed in any direction.
Much more flexible approach.
But this does not mean that the interface of the <strong>B</strong> should always be fluent.
As soon as the API of class <strong>B</strong> is getting more mature (ready to be merged into mainline) it <em>might</em> make sense to
\u201Csolidify\u201D it by adding <strong>more</strong> unit tests.
If you're using a framework with a dependency injection mechanism, you probably can specify the set of dependencies to
include in the test.<br>
This is how Spring does it:</p>
<pre><code class="language-java">
    @ExtendWith(SpringExtension.class) // Enables Spring to take control over the test execution
    @Import({A.class, B.class}) //classes that will be included into the test Spring Context
    public class ATest {
    
        @Autowire
        private A a; //A will be instantiated by Spring
        //B will be injected automatically
        @MockBean
        private CRepository cRepository; //Mock of CRepository will be injected into B
    
        @Test
        void test() {
            when(cRepository.getSomething()).thenReturn(&quot;Hello&quot;);
            String actual = a.getSomething();
            assertEquals(&quot;Hello World!&quot;, actual);
        }
    }
</code></pre>
<p>But be careful, you're still locking quite a bit of components together.
Plus, such tests are a bit slower than &quot;pure&quot; jUnit tests due to the Spring Context overhead.
It's not slower by much, but when we're talking about thousands and thousands of unit tests - every hundred milliseconds
count.</p>
<h3>Avoid ArgumentMatchers</h3>
<p>Avoid usage of <code>any()</code> or similar vague matchers.
You should have a pretty good idea of what the parameter is and can use a specific value instead.<br>
And in case you don\u2019t know, you can capture the actual parameter
via <a href="https://www.baeldung.com/mockito-argumentcaptor">@ArgumentCaptors</a> and apply the usual assertions on it.</p>
<p><strong>Bad:</strong></p>
<pre><code class="language-java">underTest.returningVoidIsABadPractice(veryCoolInputData); //calling a real method

verify(mock).veryCoolMethodIWantToTest(any()); //WTH is tested here?
</code></pre>
<p>Extremely deceiving test creating a <em>fake</em> code coverage.
Better to have no test than this.
Honestly.</p>
<p><strong>Good:</strong></p>
<pre><code class="language-java">underTest.returningVoidIsABadPractice(veryCoolInputData); //calling a real method

ExpectedObjectType expectedObject = ExpectedObjectType.builder()
                                                      .setId(123L)
                                                      .build(); //indirectly tests setters!

verify(mock).veryCoolMethodIWantToTest(expectedObject); //aaah, now it's clear
</code></pre>
<p>Best case scenario.
Objects will be compared using <code>.equals(Object object)</code>.
A much more flexible solution.
In case new fields are added to <code>ExpectedObjectType</code>, this test will automatically reveal all discrepancies
in <code>underTest.returningVoidIsABadPractice(...)</code> implementation.
Isn't this awesome?</p>
<p><strong>or</strong></p>
<pre><code class="language-java">
@Captor
private ArgumentCaptor&lt;ExpectedObjectType&gt; expectedObjectCaptor;

underTest.returningVoidIsABadPractice(veryCoolInputData); //calling a real method

verify(mock).veryCoolMethodIWantToTest(expectedObjectCaptor.capture());
ExpectedObjectType expectedObject = expectedObjectCaptor.getValue();

asserEquals(123L,expectedObject.getId()); //indirectly testing getter!
</code></pre>
<p>Sometimes there\u2019s no <code>.equals(Object object)</code>implementation (3rd party library).
So we have to compare objects field by field manually.
Less flexible solution.</p>
<p><strong>or</strong></p>
<pre><code class="language-java">underTest.returningVoidIsABadPractice(veryCoolInputData);

verify(mock).veryCoolMethodIWantToTest(assertArg(expectedObject -&gt;{

assertEquals(123L,expectedObject.getId());

assertEquals(&quot;Object title&quot;,expectedObject.getTitle());
        }));
</code></pre>
<p>Slicker and up-to-date replacement for ArgumentCaptor.
Available since <a href="https://github.com/mockito/mockito/releases/tag/v5.3.0">Mockito v5.3.0</a>.</p>
<h3>Never couple unit tests</h3>
<p>The execution order of tests is non-deterministic, they even might run in parallel.
Avoid any sort of <code>static</code> constructions in your tests.</p>
<p><strong>Bad:</strong></p>
<pre><code class="language-java">private static List&lt;String&gt; names = new ArrayList&lt;&gt;();


@Test
void testNamesEmpty() {
    assertTrue(names.isEmpty());
}

@Test
void testNamesNotEmpty() {
    names.add(&quot;John Doe&quot;);
    assertFalse(names.isEmpty());
}

</code></pre>
<p>Variable <code>List&lt;String&gt; names</code> is shared between all tests.
Changing the order of execution will change the output.
Avoid like a plague.</p>
<p><strong>Good</strong>:</p>
<pre><code class="language-java">private List&lt;String&gt; names = new ArrayList&lt;&gt;();

@Test
void testNamesEmpty() {
    assertTrue(names.isEmpty());
}

@Test
void testNamesNotEmpty() {
    names.add(&quot;John Doe&quot;);
    assertFalse(names.isEmpty());
}
</code></pre>
<p>For each <code>@Test</code> new instance of a test class is created,
therefore instance variable <code>List&lt;String&gt; names</code> will not be shared.</p>
<h3>Control the output of your tests</h3>
<p><!-- raw HTML omitted -->Green<!-- raw HTML omitted --> test should produce no output.<br>
<!-- raw HTML omitted -->Red<!-- raw HTML omitted --> test should produce just enough clear output.</p>
<p><strong>Bad and absolutely useless log:</strong></p>
<p><img src="assets/20240406-tg/image-20230329-074245.png" alt=""></p>
<p>Good luck finding anything there.</p>
<p><strong>Good(but not perfect, too much output from Maven) output of the failing test suite:</strong></p>
<p><img src="assets/20240406-tg/image-20230329-074340.png" alt=""></p>
<p>A simple browser search will reveal all the necessary information.</p>
<h3>Eliminate everything that makes input and output unclear</h3>
<ul>
<li>
<p>Never generate random input.</p>
</li>
<li>
<p>Don\u2019t use named constants from the production code.<br>
What if there\u2019s a type-o?<br>
Prefer literal strings and numbers, even when it means duplication.</p>
</li>
</ul>
<h3>Keep assertions simple</h3>
<ul>
<li>
<p>Too many assertions make tests difficult to read, maintain and blur the overall picture</p>
</li>
<li>
<p>Strive to have one <code>assert...</code> per test for maximum readability</p>
</li>
<li>
<p>Avoid any sort of conditional logic or logic in general in your assertions.
Otherwise, you\u2019ll have to write tests to test your tests.</p>
<p><strong>Bad:</strong></p>
<pre><code class="language-java">  assertEquals(&quot;Hello&quot;+expectedPersonName, actualGreeting);
</code></pre>
<p>Even the simplest logic, like string concatenation, can produce errors.
Have you noticed the missing (space) after \u201CHello\u201D?
Users will notice.<br>
<strong>Good:</strong></p>
<pre><code class="language-java">  assertEquals(&quot;Hello John Doe&quot;,actualGreeting);
</code></pre>
<p>Leave no room for errors.
At least, in unit tests.</p>
</li>
<li>
<p>Be mindful of what is actually going on behind <code>assertEquals()</code><br>
It is not the best suitable to test collections.
Use <a href="https://assertj.github.io/doc/">https://assertj.github.io/doc/</a> <code>.contains()</code>, <code>.containsExactly()</code>, <code>.containsExactlyInAnyOrder()</code>,
etc. instead.
Don\u2019t over-abuse AssertJ, as it leads to overly complex tests.
Use simple standard assertions where possible.</p>
<ul>
<li>
<p>Assertions should not be smart</p>
</li>
<li>
<p><strong>Assertions should be simple</strong></p>
</li>
</ul>
</li>
<li>
<p>Use <code>assertAll()</code> to see the whole picture.<br>
<strong>Bad:</strong></p>
<pre><code class="language-java">assertEquals(123L, actual.getId());
assertEquals(&quot;John&quot;, actualy.getName());
assertEquals(&quot;Doe&quot;, actualy.getSurname());
... //20 more asserts, awful
</code></pre>
<p>The first failed <code>assert...</code> will interrupt the test, and you will see only a part of the picture.<br>
<strong>Good:</strong></p>
<pre><code class="language-java">assertAll(
  ()-&gt;assertEquals(123L, actual.getId()),
  ()-&gt;assertEquals(&quot;John&quot;, actualy.getName()),
  ()-&gt;assertEquals(&quot;Doe&quot;, actualy.getSurname()),
  ... //20 more asserts, still awful
);
</code></pre>
<p><code>assertAll(...)</code> will run all executables(asserts) and produce a combined output.
You will see the full picture.
Although the test itself is starting to look rather ugly.</p>
</li>
<li>
<p>Use the assert message parameter to help future you understand what exactly is going on.<br>
<code>assertEquals(expected.getId(), actual.getId(), &quot;User Id&quot;)</code> \u2190 every <code>assert..</code> method has n+1 parameters.
It accepts not only a <code>String</code> but also a <code>Supplier&lt;String&gt;</code>.
Even the simplest predefined message is much better than <code>AssertionFailedError: Expected 1 Actual 2</code>.
Good luck deciphering that in three months.</p>
</li>
</ul>
<p>You want your test to convey a story about what is going on with the system.
Just enough to spot the issue when it occurs.</p>
<h3>See your tests fail at least once</h3>
<p>Make sure that your tests are actually testing something.
You should see your tests fail before they succeed.</p>
<p>Be curious, change the production code, see your test fail, confirm the error, and fix it back.
It virtually takes no time, and comforts you during the production deployment.</p>
<p>The earlier you write unit tests, the simpler this could be achieved.
It's tough to write failing unit tests for already written code.</p>
<h3>Practice Parameterized Testing</h3>
<p><a href="https://www.baeldung.com/parameterized-tests-junit-5">Parameterized testing</a> is a technique used to run the same test method with different input parameters.
This helps reduce code duplication and ensures that the code works as expected with different inputs.
Practice parameterized testing to improve the efficiency of tests and increase test coverage.</p>
<p>Testing validation rules?
Parametrized test probably is a good idea.</p>
<h3>Use Architectural Testing</h3>
<p><a href="https://www.archunit.org/">Architectural testing</a> is a technique used to verify that the code follows certain architectural rules and constraints.
It should be used to ensure that the code is scalable, maintainable, and follows best practices.</p>
<p>Architectural tests are extremely useful for preserving(or forcing) project structure.</p>
<p>For example:</p>
<ul>
<li>
<p>prevent accessing classes in a certain package from another class in another package
(a.k.a. don't inject repository into the controller)</p>
</li>
<li>
<p>forbid accessing internal implementation of the module directly, and force usage of the API layer</p>
</li>
</ul>
<p>Overall, architectural tests should be quite deep in your toolbox.
Don\u2019t just wave it left and right.</p>
<h3>Avoid fake test coverage</h3>
<ul>
<li>
<p>Test coverage is a useful metric that can help <strong>identify</strong> untested code paths</p>
</li>
<li>
<p>Test coverage is <strong>just a metric</strong>, and <strong>should not</strong> be the sole purpose of writing tests</p>
</li>
<li>
<p>Writing tests solely to increase test coverage can lead to dangerous <strong>fake</strong> and <strong>meaningless</strong> coverage, where
tests are written to simply execute the code paths with no actually asserting or verifying results</p>
</li>
<li>
<p>Fake coverage leads to a <strong>false</strong> sense of security, where developers think they have thoroughly tested their code
when in reality they are not</p>
</li>
<li>
<p>Using tools like Sonar or other static code analyzers <strong>can help</strong> identify missed execution paths, but they <strong>should
not</strong> be used to enforce writing tests for the sake of coverage</p>
</li>
<li>
<p>Focus on writing tests that <strong>actually</strong> <strong>test</strong> functionality and ensure that code is working as expected,
rather than just trying to increase test coverage</p>
</li>
<li>
<p>Good test coverage alone <strong>does not</strong> guarantee the quality or correctness of code</p>
</li>
<li>
<p><strong>It is better to have no test coverage than a fake one.</strong>
With no coverage, at least, there is an incentive to write tests</p>
</li>
</ul>
<h3>How to identify \u201Cfake\u201D tests?</h3>
<ul>
<li>
<p>Try to break the test \u2014 if the only way to break the test is to delete some lines of code, it might be a fake
test</p>
</li>
<li>
<p>Vague argument matchers - screams fake</p>
</li>
<li>
<p>Messy overly complex tests \u2014 there\u2019s a high probability that some coverage is fake</p>
</li>
<li>
<p>Tests without any meaningful assertions or verifications - 100% fake</p>
</li>
<li>
<p>Tests that test getters and setters \u2014 it\u2019s not fake, but a horrible way to increase the test coverage</p>
</li>
<li>
<p>Tests that do not follow this testing guideline \u2014 most certainly fake \u{1F609}.</p>
</li>
</ul>
<h3>References</h3>
<ul>
<li>
<p><a href="https://www.baeldung.com/java-unit-testing-best-practices">https://www.baeldung.com/java-unit-testing-best-practices</a></p>
</li>
<li>
<p><a href="https://junit.org/junit5/docs/current/user-guide/">https://junit.org/junit5/docs/current/user-guide/</a></p>
</li>
<li>
<p><a href="https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/">https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/</a></p>
</li>
<li>
<p><a href="https://www.baeldung.com/mockito-argumentcaptor">https://www.baeldung.com/mockito-argumentcaptor</a></p>
</li>
<li>
<p><a href="http://jmock.org/oopsla2004.pdf">Mock Roles, not Objects</a></p>
</li>
<li>
<p><a href="https://assertj.github.io/doc/">https://assertj.github.io/doc/</a></p>
</li>
<li>
<p><a href="https://en.wikipedia.org/wiki/Mutation_testing">https://en.wikipedia.org/wiki/Mutation_testing</a></p>
</li>
<li>
<p><a href="https://www.baeldung.com/parameterized-tests-junit-5">Parameterized Tests with JUnit 5</a></p>
</li>
<li>
<p><a href="https://www.archunit.org/">ArchUnit</a></p>
</li>
</ul>
<h1>Follow Extreme Programming Practices</h1>
<p>Extreme Programming (XP) is an agile software development methodology that emphasizes testing as a core practice:</p>
<h3>Continuous Integration</h3>
<p>Integrate your code into the mainline frequently, and avoid branching for too long.</p>
<p>Thankfully, this practice is adopted quite well these days.</p>
<h3>Pair Programming</h3>
<p>If something is even 1% over your comfort zone - ask for help.</p>
<p>I can't stress enough the importance of pair programming.
I pity the teams and organizations that see this as a &quot;waste of time.&quot;</p>
<p>Two heads are better than one.</p>
<h3>Continuous refactoring</h3>
<p>Don\u2019t ever push code unless it is worthy to be added to your CV.</p>
<p>Let me quote Kent Beck here:</p>
<blockquote>
<p><strong>For each desired change, make the change easy (warning: this may be hard), then make the easy change</strong></p>
</blockquote>
<h3>Test-first</h3>
<p>Don\u2019t ever put code in visible sight unless it has a reasonably good unit test suite.</p>
<p>Nothing screams &quot;mess&quot; louder than &quot;I finished the development, now I will write some tests.&quot;</p>
<h3>References</h3>
<ul>
<li>
<p><a href="https://en.wikipedia.org/wiki/Extreme_programming">Extreme Programming</a></p>
</li>
<li>
<p><a href="https://amzn.eu/d/4riNe3l">https://amzn.eu/d/4riNe3l</a></p>
</li>
</ul>
<h1>Test microservices effectively</h1>
<p><img src="assets/20240406-tg/image-20230327-134922.png" alt=""></p>
<p>There's a reason why I labeled the test pyramid at the beginning of the article as &quot;classic.&quot;
I wanted to avoid &quot;monolithic.&quot;
But it's true, the classic test pyramid was introduced in times of monoliths.
Big monoliths.
With millions and millions of lines of code.</p>
<p>In the world of microservices, this pyramid evolved.
It's no longer even a pyramid.
It's evolved into what's called <a href="https://engineering.atspotify.com/2018/01/testing-of-microservices/">Honeycomb Testing Strategy</a>,
which shifts the focus from internal implementation to external integrations,
hence it suggests a higher quantity of integration tests with unit tests sprinkled on top.</p>
<h3>Honeycomb Testing Strategy</h3>
<p><img src="assets/20240406-tg/image-20230327-120207.png" alt=""></p>
<ul>
<li>
<p>Write a lot of integration tests and write them early</p>
</li>
<li>
<p>\u201CAttack\u201D complex isolated parts with unit tests</p>
</li>
<li>
<p>Sprinkle some system e2e tests on top</p>
</li>
</ul>
<h3>Test the entire microservice in isolation</h3>
<p>Use <a href="https://wiremock.org/">https://wiremock.org/</a>/<a href="https://www.mock-server.com/">https://www.mock-server.com/</a>
and <a href="https://www.testcontainers.org/">https://www.testcontainers.org/</a> to mock/emulate <strong>all</strong> external dependencies</p>
<h3>Start the entire service <em><strong>without internal Mocks</strong></em></h3>
<ul>
<li>
<p>Reuse the test setup as much as possible by introducing the base test class with all
the necessary fixtures to start the service.</p>
</li>
<li>
<p>Be careful about shared stateful parts, like DB, Kafka, RabbitMQ, etc.
Clean them <strong>before and after</strong> if necessary.<br>
Pro tip: cleaning state BEFORE the test provides you with a better debugging experience.</p>
</li>
</ul>
<h3>Test as many end-to-end flows in your system as possible</h3>
<p>In order of importance:</p>
<ol>
<li>
<p>Test the service as a whole via its interfaces \u2014 REST, Async, etc.
Treat your service as a black box.</p>
</li>
<li>
<p>Afterward, test integrations (like DB, 3rd party services, S3, etc) in isolation if necessary.</p>
</li>
</ol>
<h3>Use unit tests to cover the parts of the code naturally isolated with high internal complexity</h3>
<p>Mocks are allowed.</p>
<h3>Run integration tests separately from unit tests</h3>
<p>Use the <a href="https://maven.apache.org/surefire/maven-failsafe-plugin/">maven failsafe plugin</a> or similar to separate slow
integration tests from blazing-fast unit tests in your CI/CD pipeline.</p>
<p>Your goal should be to receive as much feedback as quickly as possible.</p>
<h3>There's no reason for a backend to have bugs</h3>
<p>This is a little bit wild, but I believe that there is no reason for a modern backend service to have technical bugs.
I'm not talking about bloody monoliths written in the past century.
I'm talking about something a little bit more modern.
Let's say written in the past 3 years.
There are no logical reasons to have bugs there.</p>
<p>There might be some discrepancies due to product misunderstanding and such.
But everything else signals a high level of unprofessionalism from the engineers who build it.</p>
<h3>References</h3>
<ul>
<li>
<p><a href="https://engineering.atspotify.com/2018/01/testing-of-microservices/">https://engineering.atspotify.com/2018/01/testing-of-microservices/</a></p>
</li>
<li>
<p><a href="https://www.testcontainers.org/">https://www.testcontainers.org/</a></p>
</li>
<li>
<p><a href="https://www.youtube.com/watch?v=0kXEwo0XFaY">https://www.youtube.com/watch?v=0kXEwo0XFaY</a></p>
</li>
<li>
<p><a href="https://wiremock.org/">https://wiremock.org/</a></p>
</li>
<li>
<p><a href="https://www.mock-server.com/">https://www.mock-server.com/</a></p>
</li>
<li>
<p><a href="https://maven.apache.org/surefire/maven-failsafe-plugin/">https://maven.apache.org/surefire/maven-failsafe-plugin/</a></p>
</li>
</ul>
<h1>Other materials</h1>
<ul>
<li>
<p><a href="https://www.youtube.com/watch?v=1Z_h55jMe-M">https://www.youtube.com/watch?v=1Z_h55jMe-M</a> - must watch, if you\u2019re
not familiar with Victor Rentea - welcome to the club, buddy</p>
</li>
<li>
<p><a href="https://www.youtube.com/watch?v=fr1E9aVnBxw">https://www.youtube.com/watch?v=fr1E9aVnBxw</a></p>
</li>
<li>
<p><a href="https://www.youtube.com/watch?v=F8Gc8Nwf0yk">https://www.youtube.com/watch?v=F8Gc8Nwf0yk</a></p>
</li>
<li>
<p><a href="https://amzn.eu/d/bLybGSN">https://amzn.eu/d/bLybGSN</a> - absolute classic, must-read, testing covered in Chapter 9</p>
</li>
<li>
<p><a href="https://amzn.eu/d/48lnk1H">https://amzn.eu/d/48lnk1H</a> - amazing book by one and only Martin Fowler. Must read.</p>
</li>
</ul>
<p>\u2026to be continued</p>
`,date:"16.05.2024",title:"Ultimate Testing Guideline",anchor:"ultimate-testing-guideline"},{filename:"20240412-circular-dependencies.md",content:`<blockquote>
<p>&quot;I knew you'd say that&quot; - Judge Dredd</p>
</blockquote>
<p>After
publishing <a href="https://www.buyallmemes.com/#practical-dependency-inversion-principle">Practical Dependency Inversion Principle</a>
article, I received amazing feedback from one of my dear colleagues.</p>
<p>It was in the form of a question:</p>
<blockquote>
<p>...there is another problem, the cross-dependency between modules/packages.</p>
<p>What are your thoughts on this?</p>
</blockquote>
<p>The question was premised on the schema that looks like this:</p>
<p><img src="assets/20240412-cd/img_1.png" alt="img_1.png"></p>
<p>With code structure like this:</p>
<pre><code class="language-bash">\u251C\u2500\u2500 test
\u2502   \u251C\u2500\u2500 notification
\u2502   \u2502   \u251C\u2500\u2500 NotificationUser.java
\u2502   \u2502   \u251C\u2500\u2500 NotificationUserRetriever.java
\u2502   \u2502   \u2514\u2500\u2500 NotificationModule.java
\u2502   \u251C\u2500\u2500 user
\u2502   \u2502   \u251C\u2500\u2500 UserModule.java
\u2502   \u2502   \u251C\u2500\u2500 UserNotificationRetriever.java
\u2502   \u2502   \u2514\u2500\u2500 UserNotification.java

</code></pre>
<p>Where <code>NotificationModule</code> implements <code>UserNotificationRetriever</code> and <code>UserModule</code>
implements <code>NotificationUserRetriever</code>.</p>
<p>It's not that hard to imagine:</p>
<ul>
<li><code>NotificationModule</code> wants to know something about a user, and the dependency on <code>UserModule</code> is inverted, exactly as
it should be</li>
<li><code>UserModule</code> needs something from <code>NotificationModule</code>, and the dependency is also inverted</li>
</ul>
<p>This is what's called <strong>Circular Dependency</strong>.</p>
<p>And it's extremely problematic.
Dependency Inversion ultimately plays no role here,
even with direct uninverted dependencies such a case can occur,
and the Dependency Inversion Principle by itself cannot fix it.
Some frameworks (like Spring) and build tools (like Maven) will produce an error in case even a single
circular dependency is detected.
The main reason is \u2014 it's just too dangerous to resolve.
It's a recursion.
Unless treated with care it can produce such nice things like <code>out-of-memory</code>, <code>stackoverflow</code>, etc.</p>
<p>But, more than anything, it reveals the fundamental flaw in the system design.</p>
<p>In this article, I'm going to share some tips-and-tricks on how to treat circular dependencies.
And I'm going to start with the most radical one.</p>
<h2>Tactical Merge</h2>
<p>Yes, I know.
You are your colleagues spent weeks and months trying to separate <code>UserModule</code> and <code>NotificationModule</code>.
You might have even extracted them into systems separated by the network to enforce sacred <em>domain boundaries</em>.
And now I'm suggesting to move everything back together into a single <code>SpaghettiModule</code>?
Hell no!</p>
<p>Hear me out.
The software is supposed to be... soft.
Flexible.
Like clay.
The purpose of the software is to help businesses achieve their needs.
If the software is designed in a way that does not allow developers to build certain features effectively -
the design is a massive failure.
At the end of the day, most product companies are <strong>not</strong> selling their software directly,
but rather via a service that software implements a.k.a. SaaS.
I think we can agree on that.</p>
<p>For example, do you care about the system design behind a <em>google.com</em>?
If you're a nerd, maybe.
A regular person cannot care less about the underlying software.
But everyone cares about this software working.
Everyone.</p>
<p>So yeah, if <code>UserModule</code> and <code>NotificationModule</code> want to be together,
because business requirements want so, it's probably a good idea to consider merging them,
and reshaping into a single domain.
Don't feel overprotected by existing boundaries.
Sometimes mistakes are made, and the worst thing we as engineers can do is to be stubborn about it.</p>
<p>It's a very humbling experience.
You should try it.</p>
<h2>One direction</h2>
<p>A less radical,
but a bit more political approach is to invert dependency only from one module to another,
and leave the direct dependency from another module back.</p>
<p>For example, we decide that <code>NotificationModule</code> is the high-level module,
and <code>UserModule</code> is... well, further from the core of the business logic.
This is where the political card has to be played
because the team that manages <code>UserModule</code> might not agree on doubling down on <code>NotificationModule</code> dependency:</p>
<p><img src="assets/20240412-cd/img.png" alt="img.png"></p>
<p>With the code structure like this:</p>
<pre><code class="language-bash">\u251C\u2500\u2500 test
\u2502   \u251C\u2500\u2500 notification
\u2502   \u2502   \u251C\u2500\u2500 NotificationUser.java
\u2502   \u2502   \u251C\u2500\u2500 NotificationUserRetriever.java
\u2502   \u2502   \u2514\u2500\u2500 NotificationModule.java
\u2502   \u251C\u2500\u2500 user
\u2502   \u2502   \u251C\u2500\u2500 UserModule.java
</code></pre>
<p>And so there we have it.
<code>UserModule</code> directly depends on <code>NotificationModule</code>,
and there's an inverted dependency from <code>UserModule</code> to <code>NotificationModule</code>.
The dependency cycle no longer exists.
At least, during build time.
There's still the possibility of an infinite loop during a <strong>runtime</strong>:</p>
<ul>
<li><code>NotificationModule</code> invokes a <code>NotificationUserRetriever</code> interface that's implemented within <code>UserModule</code></li>
<li>To implement <code>NotificationUserRetriever</code> <code>UserModule</code> needs something from <code>NotificationModule</code> and so it calls it
directly</li>
</ul>
<p>This is more like a hack or remedying the symptoms.
The disease is still there.
Modules are still tightly coupled.
Domain boundaries are wrong.
We just tricked the system.</p>
<p>To solve this problem once and for all, one of the dependencies has to be broken.
The best-case scenario is that both of them no longer exist.</p>
<p>However, there are ways to break circular dependencies via some integration patterns.
<strong>Queue</strong> is the first thing that comes to my mind.
Is it possible to eliminate the dependencies altogether by listening to a message queue?
Or maybe something a bit more robust, like a Kafka topic?
Sounds great!
Don't.
It's even more dangerous.</p>
<p>Let's go through a &quot;hypothetical&quot; example:</p>
<ul>
<li><code>NotificationModule</code> receives a request from out there, and after fulfilling the request, it emits an event
to <code>UserModule</code></li>
<li><code>UserModule</code> receives an event, performs some computation, updates some user data... and sends an event
to <code>NotificationModule</code></li>
<li>But, unfortunately, when <code>NotificationModule</code> receives an event, and after performing some computation, it decides to
notify <code>UserModule</code> via event</li>
</ul>
<p>You can see where it's going.
The system ends up in an asynchronous loop of events exchange that never terminates.
It might go for days and weeks unnoticed.
Until, eventually, with more and more requests triggering infinite loops,
the whole system will grind to a halt and go OOM.</p>
<p>Been there. Done that.</p>
<h2>Extract new module</h2>
<p>This is a tricky one because it's very easy to get it wrong and make things worse.</p>
<p>The approach is to extract functionalities that produce circular dependencies into a new even more high-level module.
And invert the dependency from it.</p>
<p><img src="assets/20240412-cd/img_2.png" alt="img_2.png"></p>
<p>The code structure:</p>
<pre><code class="language-bash">\u251C\u2500\u2500 test
\u2502   \u251C\u2500\u2500 aggregator
\u2502   \u2502   \u251C\u2500\u2500 AggregatorUser.java
\u2502   \u2502   \u251C\u2500\u2500 AggregatorUserRetriever.java
\u2502   \u2502   \u2502  
\u2502   \u2502   \u251C\u2500\u2500 AggregatorNotification.java
\u2502   \u2502   \u251C\u2500\u2500 AggregatorNotificationRetriever.java
\u2502   \u2502   \u2502
\u2502   \u2502   \u2514\u2500\u2500 AggregatorModule.java
\u2502   \u251C\u2500\u2500 notification
\u2502   \u2502   \u2514\u2500\u2500 NotificationModule.java
\u2502   \u251C\u2500\u2500 user
\u2502   \u2502   \u2514\u2500\u2500 UserModule.java

</code></pre>
<p>We're demoting <code>UserModule</code> and <code>NotificationModule</code> to a lower level of abstraction,
and introducing a new higher level <code>AggregatorModule</code> (naming is hard).</p>
<p>So that <code>NotificationModule</code> depends on <code>AggregatorModule</code>, and <code>UserModule</code> depends on <code>AggregatorModule</code>.
The nuance here is that <code>AggregatorModule</code> now exposes two interfaces,
but <code>NotificationModule</code> and <code>UserModule</code> can cover only one of those each,
so the setup requires more attention.</p>
<p>There are whole lots of tricks that could be applied to handle such a case:
from something like a combination of <code>@ConditionOnMissingBean(...)</code> and <code>@Primary</code> bean annotations
if we're talking about Spring Framework,
to something as simple as the default interface method.
And if you feel like there might be more modules
to depend on <code>AggregatorModule</code> it might be a good idea to introduce a generic aggregator interface.
This is where the real engineering begins.</p>
<p>This approach seems like a quite straightforward one.
What's easy to get wrong here?
I'm glad you asked.
And the answer is simple \u2014 direction of dependency inversion.
It might sound like a brilliant idea to introduce <code>AggregatorModule</code> and to make it depend on
both <code>UserModule</code> and <code>NotificationModule</code>:</p>
<p><img src="assets/20240412-cd/img_3.png" alt="img_3.png"></p>
<p>With code structure like this:</p>
<pre><code class="language-bash">\u251C\u2500\u2500 test
\u2502   \u251C\u2500\u2500 aggregator
\u2502   \u2502   \u2514\u2500\u2500 AggregatorModule.java
\u2502   \u251C\u2500\u2500 notification
\u2502   \u2502   \u251C\u2500\u2500 NotificationUser.java
\u2502   \u2502   \u251C\u2500\u2500 NotificationUserRetriever.java
\u2502   \u2502   \u2514\u2500\u2500 NotificationModule.java
\u2502   \u251C\u2500\u2500 user
\u2502   \u2502   \u251C\u2500\u2500 UserModule.java
\u2502   \u2502   \u251C\u2500\u2500 UserNotificationRetriever.java
\u2502   \u2502   \u2514\u2500\u2500 UserNotification.java

</code></pre>
<p><code>AggregatorModule</code> implements both interfaces.
<code>UserModule</code> and <code>NotificationModule</code> no longer know about each other.
Sounds great!
Except it's not.</p>
<p>Where <code>AggregatorModule</code> will get the information to implement <code>NotificationUserRetriever</code> for example?
From <code>UserModule</code> of course.
And what about <code>UserNotificationRetriever</code>, how to implement it?
Invoke <code>NotificationModule</code>.</p>
<p>So the more realistic dependency schema should look like this:</p>
<p><img src="assets/20240412-cd/img_4.png" alt="img_4.png"></p>
<p>So instead of one circular dependency between <code>UserModule</code> and <code>NotificationModule</code>,
there are two, and they are even more distributed!
And, the best way to solve a problem is to distribute it.
COVID? Anyone?</p>
<p>So yeah, be careful.
In this case, inversion of dependency could do more harm than good.</p>
<p>And this is exactly why I started with the <a href="#tactical-merge">Tactical Merge</a>.
Although it seems like the most extreme, it guarantees to work.
The presence of circular dependency signals a fundamental issue with the design,
and addressing it only partially might provide temporary relief but won't offer lasting fix.</p>
`,date:"15.04.2024",title:"Circular dependencies",anchor:"circular-dependencies"},{filename:"20240404-practical-dependency-inversion-principle.md",content:`<p>Dependency Inversion Principle (DIP) comes from the famous <strong>SOLID</strong> principles, coined by Uncle Bob back in the 90s.</p>
<ul>
<li><strong>S</strong>ingle Responsibility Principle</li>
<li><strong>O</strong>pen-Close Principle</li>
<li><strong>L</strong>iskov Substitution Principle</li>
<li><strong>I</strong>nterface Segregation Principle</li>
<li><strong>D</strong>ependency Inversion Principle</li>
</ul>
<h6>Food for the thought: Why are these principles bundled into SOLID, and not spread individually?</h6>
<p>Most developers have heard or read something about them to some extent.
From my experience, most devs (myself included) stop after <strong>SO</strong>, leaving <strong>LID</strong> for later days, because they are
confusing.</p>
<ul>
<li>Who the hell is Liskov? And whom she's substituting?</li>
<li>Why do we need to segregate anything \u2014 isn't it a bad thing these days?</li>
<li>And which dependencies should we invert and how? And what about dependency injection?</li>
</ul>
<p>In this article, I'm going to shed some light on the <strong>Dependency Inversion Principle</strong>, since it's the
most impactful and addicting, in my opinion.
Once I've started inverting the dependencies in my systems, I can't imagine living without it anymore.</p>
<h2>Naming things</h2>
<blockquote>
<p>There are only two hard things in Computer Science: cache invalidation and naming things.</p>
</blockquote>
<p>So let's deconstruct the name: <strong><em>dependency inversion</em></strong></p>
<h3>Dependency</h3>
<p>Having a dependency implies that we have at least two of <em>something</em>,
and there's a <em>dependency</em> between these <em>somethings</em>.
What is <em>something</em>? It could be anything really; the only restriction is that this <em>something</em> is somehow bound by
its context.
It might be a single class, a package, a component, a group of packages, a module, or even a standalone
web service.
For example, code that calls the database to fetch a user. There are many possible names for such a thing: domain,
module, component, package, service, etc.
Name is unimportant, as long as it's consistent throughout the discussion.
I'll call it a <strong>module</strong>.
A module that queries a user from somewhere (presumably DB) - the <code>UserModule</code>.
That's the first.
But we need one more.
Let's say we want to send a user notification because an appointment with a doctor is confirmed.
And here we have our second module \u2014 the <code>NotificationModule</code>.</p>
<p>The code might look something like this:</p>
<pre><code class="language-java">package test.notification;

import test.user.UserModule;
import test.user.User;

public class NotificationModule {

    private final UserModule userModule;

    public NotificationModule(UserModule userModule) {
        this.userModule = userModule;
    }

    public void sendNotification(long userId) {
        userModule.findUserById(userId)
                  .ifPresent(this::sendNotification);
    }

    private void sendNotification(User user) {
        // notification logic
    }
}

</code></pre>
<pre><code class="language-java">package test.user;

public class UserModule {

    public Optinal&lt;User&gt; findUserById(long id) {
        //fetching user from the DB
    }
}
</code></pre>
<pre><code class="language-java">package test.user;

public class User {
    private String name;
    private String surname;
    private String email;
    //50 more attributes, because why not
}

</code></pre>
<p>Folder structure:</p>
<pre><code class="language-bash">\u251C\u2500\u2500 test
\u2502   \u251C\u2500\u2500 notification
\u2502   \u2502   \u2514\u2500\u2500 NotificationModule.java
\u2502   \u251C\u2500\u2500 user
\u2502   \u2502   \u251C\u2500\u2500 UserModule.java
\u2502   \u2502   \u2514\u2500\u2500 User.java

</code></pre>
<p>According to the code <strong>NotificationModule</strong> <em>depends on</em> <strong>UserModule</strong>.</p>
<p>Such code could be found <strong>everywhere</strong>.
I would go as far as to say that 99% of the code I've read(and written) looks like this.
And it might seem that there's nothing wrong with it.
In the end, it works, it is straightforward to read and easy to understand.
But there's a problem.
Our sacred logic of managing notifications is polluted with something we don't have control over.
Notice, that <code>UserModule</code> resides in a different package than <code>NotificationModule</code>.
It's not a part of the notification domain.
It's a domain on its own.</p>
<p>From the perspective of the <code>NotificationModule</code>, the <code>UserModule</code> is a low-level implementation detail.
And this detail is leaking more and more into the module that depends on it.
See the <code>User</code> class?
It's part of the <code>UserModule</code>, not the <code>NotificationModule</code>.
And <code>NotificationModule</code> is just one of its clients.
Obviously <code>UserModule</code> is used throughout the system.
It's the most used module in the whole system.
Everything depends on it!</p>
<p>But wait.
Why would <code>NotificationModule</code> care about where the user is coming from?
It just needs some of the user data, and that's it.
The concept of the user is important, but not where it comes from.
And what if a <code>User</code> object is large, but we need only a few fields from it?
Should the new <code>SmallUser</code> object be introduced near the <code>UserModule</code>?
Isn't this a circular dependency then?
<code>NotificationModule</code> depends on <code>UserModule</code> in code, but <code>UserModule</code> depends on <code>NotificationModule</code> indirectly
logically?
It's not hard to imagine how this goes out of hand.
I've seen it go out of hand.
Every.
Single.
Time.
I've seen with my own eyes systems being tied into knots by such modules.
And months and months of refactoring spent just to be reverted with &quot;It's too much.
Too expensive.
Not worth it.&quot;
comments.
I wrote such systems.</p>
<p>The root of the problem lies in the dependency <strong>direction</strong>.
<strong>High-level</strong> <code>NotificationModule</code> depends on <strong>low-level</strong> <code>UserModule</code>.
Level in this case means the level of abstraction.
The further we go from the edge(domain boundary) of the system \u2014 the higher we go in terms of abstraction.
For example, modules that talk to DB are on the edge of the system (the scary network),
so as modules that send HTTP calls, talk to message brokers, etc.
However, the modules that prepare notification messages are much further from the edge of the system,
so the level of abstraction is higher.
It's a relative term.
Like Java is categorized as a high-level programming language,
based on its proximity to the bare metal,
in relation to something like Assembly language which is the lowest of them all.</p>
<p>And so the dependency tree might look something like this:</p>
<p><img src="assets/20240406-pdip/pre_inversion.png" alt="before inversion"></p>
<p>Dependency direction goes with the direction of an arrow.
Everything directly or transitively depends on <code>UserModule</code>.
The core of the system is not the business logic, but the module that retrieves a user from the DB.
This is fundamentally wrong.
We want the business logic to drive our system, not the <em>I-know-how-to-talk-to-a-database</em>-thingy.</p>
<h3>Inversion</h3>
<p>This is pretty much self-explanatory, or so it seems.
Google tells me that inversion is a result of being inverted.
Thank you, Google.
And the verb <code>invert</code> means <code>put upside down or in the opposite position, order, or arrangement</code>.
There it goes, putting upside down the dependency, so that it's no longer A-&gt;B, but A&lt;-B.
But how to achieve this?
We don't want <code>UserModule</code> to call <code>NotificationModule</code> to send notifications about appointment bookings, it makes no
sense.
What we actually want to do, is to make <code>UserModule</code> depend on <code>NotificationModule</code>, but not interact with it.</p>
<h3>How?</h3>
<blockquote>
<p>Are you watching closely?</p>
</blockquote>
<p>Interfaces.
Take your time and look through the refactored code:</p>
<pre><code class="language-java">package test.notification;

public class NotificationModule {

    private final NotificationUserRetriever userRetriever;

    public NotificationModule(NotificationUserRetriever userRetriever) {
        this.userRetriever = userRetriever;
    }

    public void sendNotification(long userId) {
        userRetriever.findUserById(userId)
                     .ifPresent(this::sendNotification);
    }

    private void sendNotification(NotificationUser user) {
        // notification logic
    }
}
</code></pre>
<pre><code class="language-java">package test.notification;

public interface NotificationUserRetriever {
    Optional&lt;NotificationUser&gt; findByUserId(long id);
}
</code></pre>
<pre><code class="language-java">package test.notification;

public record NotificationUser(String name, String surname, String email) {
}
</code></pre>
<pre><code class="language-java">package test.user;

import test.notification.NotificationUserRetriever;
import test.notification.NotificationUser;

public class UserModule implements NotificationUserRetriever {
    public Optinal&lt;NotificationUser&gt; findUserById(long id) {
        //fetching user from the DB
        //and maps it to NotificationUser
    }
}
</code></pre>
<p>Folder structure:</p>
<pre><code class="language-bash">\u251C\u2500\u2500 test
\u2502   \u251C\u2500\u2500 notification
\u2502   \u2502   \u251C\u2500\u2500 NotificationUser.java
\u2502   \u2502   \u251C\u2500\u2500 NotificationUserRetriever.java
\u2502   \u2502   \u2514\u2500\u2500 NotificationModule.java
\u2502   \u251C\u2500\u2500 user
\u2502   \u2502   \u2514\u2500\u2500  UserModule.java

</code></pre>
<p>There is a huge fundamental difference.
<code>NotificationModule</code> no longer depends on <code>UserModule</code>.
There's not a single <code>import</code> statement from <code>test.notification</code> that points to the <code>test.user</code> package.
Not a single one.
<code>NotificationModule</code> knows nothing about the existence of <code>UserModule</code>.
<code>NotificationModule</code> is <strong>decoupled</strong> from <code>UserModule</code>, but not the other way around.
It just asks the universe(system) for a <code>NotificationUser</code> using its own declared interface <code>NotificationUserRetriever</code>.
And the universe(<code>UserModule</code>) answers.
This is its job.
This is what this module does.
It abstracts the database on behalf of other modules.</p>
<p>And so the direction of the dependency between <code>NotificationModule</code> and <code>UserModule</code> is inverted.
Given that we apply the inversion to all dependencies;
the dependency tree might look like this:
<img src="assets/20240406-pdip/post_inversion.png" alt="after inversion"></p>
<p>Not only does the system no longer directly depend on <code>UserModule</code>.
But the transitive dependencies are also much more relaxed.</p>
<p>What if <code>UserModule</code> grows out of hand?
We can re-implement some interfaces in another <code>NewUserModule</code> without affecting anything.
There's no god <code>User</code> object to grow out of hand.
Instead, there are several domain-specific representations of a user,
which have no dependencies between each other whatsoever.</p>
<p>But every decision is not without tradeoffs.
In the case of dependency inversion, the tradeoff is the amount of code.
If every module that wants to retrieve a user introduces its user model and an interface to support it,
<code>UserModule</code> will grow pretty quickly.
And most of the code will just map a database object into yet another domain object.
It's not the most exciting code to write or to test.
<code>UserModule</code> is no longer treated as the module, which everyone has to bow to and respect,
but rather the mere mortal boring worker.
And it works.
But as I've mentioned before,
nothing stops the refactoring of <code>UserModule</code> into several smaller more exciting modules,
each implementing its interface and fetching only what's necessary from the DB.
And some of them might talk to something else, like a cache, another service, go for another DB table, etc.</p>
<h2>One more thing</h2>
<p>The Dependency Inversion Principle scales far beyond a couple of simple modules.
It's extremely powerful and addicting.
But it's important to know where to stop.
Some literature states that everything should be abstracted and inverted.
Including frameworks.
I think this is an overkill.
Abstracting the DB engine and inverting the dependency on it is a good idea.
Running around abstracting the framework of your choice, because someone from the internet says so, is not the smartest
idea.
It's a waste of time.
For example, Spring Framework (so as pretty much every web framework nowadays) provides amazing capabilities of DI
(dependency injection, not inversion)
that enable performing Dependency Inversion almost effortlessly.
Almost.</p>
<p>It requires practice though.
Quite a bit of practice.
And it feels weird at first.
Because we're so used to envisioning systems as <code>three-tiered</code> which goes from top to bottom or from left to right \u2014
A-&gt;B-&gt;C.
In reality, systems are more like a graph, where dependencies are pointing inwards to the business logic \u2014 A-&gt;B&lt;-C.</p>
<p>You guessed it right: Clean Architecture, Onion Architecture,
Hexagonal Architecture and such are ALL based heavily on the Dependency Inversion Principle.
These are different implementations of DIP.
But before you step into one of those architectures and claim yourself an ambassador,
I would suggest stepping back and practicing DIP on a smaller scale.</p>
<h2>Refactoring</h2>
<p>Last but not least.
Dependency inversion is an amazing refactoring tool.
And it doesn't get enough credit for it.</p>
<p>Let's imagine, the system is not a greenfield.
Let's imagine, the system is 7+ years old.
The <code>UserModule</code> from above now contains several dozens of public methods and has a dozen other dependencies.
The <code>User</code> object contains about 50 fields.
Half of them are weirdly named booleans.
There are quite a few complex relationships.</p>
<p>And here we are, building a brand-new notification system.
And we need some information about the user.
About three-four fields.</p>
<p>We have two options, and two options only:</p>
<ol>
<li>
<p><code>NotificationModule</code> depends on <code>UserModule</code>.
We reuse one of the existing public methods from <code>UserModule</code> to fetch a <code>User</code> object.
Then we perform all the necessary transformations on a user within the <code>NotificationModule</code>,
and that's it.
The job's done.</p>
<p>But we're added to the mess.
<code>UserModule</code> now is a bit harder to refactor, because there's one more dependency on it.
<code>NotificationModule</code> now also is not that new.
It's referencing a huge <code>User</code> object left right and center.
It's now the part of the ship.
Maybe you would like to introduce yet another method to <code>UserModule</code> that returns a smaller user?
And now there's even more mess.</p>
<p>How do you think those several dozens of public methods were added?
Exactly like that.</p>
</li>
<li>
<p>Inverse dependency.
We are not going to allow mess into our new <code>NotificationModule</code> by any means necessary.
Our new module is too innocent to witness the monstrosity <code>UserModule</code> has become.
Instead of depending on a mess, we're going to inverse the dependency and make the mess depend on our new
slick domain-specific interface.
The mess is still there, but we're not adding to it, which by definition means that we're reducing it.
At least, within our new <code>NotificationModule</code>.
And when someone eventually decides to refactor <code>UserModule</code>, all they need to do is keep the interface
implemented.
Not the several dozens of public methods with unknown origins introduced within the last 7+ years.
But a single interface that leaves within <code>NotificationModule</code> domain.</p>
</li>
</ol>
<p>I don't know about you, but for me <code>reducing the mess</code> beats <code>adding to the mess</code> any day.</p>
`,date:"04.04.2024",title:"Practical Dependency Inversion Principle",anchor:"practical-dependency-inversion-principle"},{filename:"20240331-lets-build.md",content:`<p>So, the tech.</p>
<p>Oh yes, the most important part \u2014 the tech.
I'm going to use stuff I'm most comfortable with, which happens to be the most widespread tech stack in the world:
Angular frontend, Java + String backend, and all that on top of AWS.</p>
<p>Let's begin with infrastructure \u2014 to keep things simple, I'm using AWS Amplify to run frontend, and AWS AppRunner to run
backend.
For now, there's no need for anything more complex than this.</p>
<h3>AWS Amplify</h3>
<p>I'm not the frontend expert by any means, but even I know, that FE is mostly static stuff.
And the best way to serve static stuff is via S3.
The problem is \u2014 I don't want to spend time configuring all that now.
S3 Bucket policy, pipelines, roles \u2014 I can configure all of that, but why?</p>
<p>This is where the Serverless shines.
<a href="https://aws.amazon.com/amplify/">AWS Amplify</a> hooks up to the frontend repository via GitHub webhook.
And every time anything is pushed into <code>main</code> branch, Amplify gets notified and the internal CI/CD machinery kicks in.
Amplify is smart enough to understand that it's connected to the angular app (this actually doesn't matter,
because it builds a project with a silly <code>npm run build</code> script).</p>
<p>Build artifact is then stored in AWS S3 bucket
(unfortunately, or not, this bucket is not accessible)
and then exposed via CloudFront distribution(also not accessible).
By &quot;not accessible&quot; I mean that it's not created under my account, I can't look at it or touch it.
It exists, but somewhere within the bowels of AWS.
Serverless, right?</p>
<p>AWS S3 is a perfect place for frontend artifacts \u2013 infinitely scalable, ultimately robust, publicly accessible(when
needed), cheap.
It just works.
I have a strong impression that AWS S3 powers at least half of the internet,
and so I'm trusting it to host my amazing frontend.</p>
<p>A couple of clicks more and the custom domain is attached.</p>
<p>Voil\xE0!</p>
<p>My FE is running under http://buyallmemes.com.</p>
<p>Minimum configuration, maximum profit.</p>
<p>And this is just the tip of the iceberg.
With a couple of clicks more, Amplify could be integrated with GitHub PRs.
It will spin a new env per PR created, and when PR is merged - it will tear the env down.
Some organizations I've worked for could only dream about such a feature.
And here it is out of the box.</p>
<h3>AWS AppRunner</h3>
<p>After the first blog post, I had no backend for my blog application.</p>
<p>\u2014 &quot;Do I even need a backend?&quot; - was my question.</p>
<p>\u2014 Of course, I'm a backend developer, I have to have a backend.</p>
<p>\u2014 Alright, let's have it.</p>
<p>Building the backend is straightforward.
Code here, code there \u2014 I've been doing this for the last 15 years, so I'm feeling somewhat comfortable.
The real question is &quot;How to run it?&quot;</p>
<p>EKS?
Hell no, I'm not touching Kubernetes.
I'm sick of it.
It's too complex.
Moreover, I want to run a single container.
To say that EKS is an overkill in this situation is a huge understatement.</p>
<p>ECS?
Sounds better.
Let's do it.
I've created a cluster, task definition, created a task... and nothing.
I can't access my service from the outside.
Oh, no... networking.
Something is not right with the VPC setup.
Subset seems fine.
Security groups and routing tables also &quot;look fine.&quot;
Damn it, something silly is not right, and I can't find it.
Screw it \u2014 a task stopped, task definition deleted, cluster deleted.
ECS is also too complex.</p>
<p>While in bed and half asleep, I was browsing through the AWS Console app on my phone.</p>
<p>Eureka!</p>
<p><a href="https://aws.amazon.com/q/">AWS Q</a>. AWS AI assistant.
This is exactly what they built it for \u2014 so that idiots like me could ask questions like mine.
The answer was instant \u2014 <a href="https://aws.amazon.com/apprunner/">AWS AppRunner</a>.</p>
<p>The next morning I logged in to AWS AppRunner, and clicked a few buttons:</p>
<ul>
<li>create service</li>
<li>select container registry as a repository type</li>
<li>selected a Hello World image from ECR</li>
<li>set it to be publicly accessible</li>
<li>deploy</li>
</ul>
<p>And... it worked.
My Hello World backend is running in a matter of minutes.
No complex configurations, and no networking.
This is why I love AWS.</p>
<p>I've hidden my app deployment via a custom domain http://api.buyallmemes.com by fiddling with Route 53 hosted zone
and clicking a couple of buttons in the App Runner.
Thankfully, I know a couple of tricks around DNS.</p>
<p>A couple of clicks more,
and now the App Runner will automatically redeploy my backend application as soon
as a new image version is published to ECR.
All I need to do is to setup GitHub Action to build and publish images to ECR.
Easy.</p>
<p>Once again, no roles, no policies, only profit.</p>
<p>Now, it's time to build the real backend.</p>
<h3>Java + Spring = \u2764\uFE0F</h3>
<p>The choice of tech for the backend is super easy.
There's no choice really.
There's only one true kind, and it's Java + Spring.
I'm starting with an extremely simple setup: one REST endpoint that returns a list of posts.
What is a post?
A simple resource with only one attribute \u2014 content.
For now, I don't need anything else.</p>
<p>However, I do need something \u2014 Zalando Problem library https://github.com/zalando/problem.
I'm sure you're aware of Zalando as an internet cloth retailer, but you might not be aware that they have quite a few
cool bits of software.
Problem Library is one of those bits.
It's a small library with a single purpose \u2014 to unify an approach for expressing errors in REST API.
Instead of figuring out every time what to return in case of error,
or returning gibberish (like a full Spring Web stack stace in case of 500),
the zalando/problem library suggests returning their little <code>Problem</code> structure.
Naturally, a library has an awesome integration with Spring, so there's very little configuration required.
Use it, and do yourself (and your REST API consumers) a favor.</p>
<p>Another one of those hidden gems is a Zalando RESTful API
Guidelines https://opensource.zalando.com/restful-api-guidelines/ \u2014 read it.
It's awesome.</p>
<p>So, after the initial setup, I throw a bunch of code in.</p>
<p><strong>Rule #1: First, make it work, then make it right, then make it fast.</strong></p>
<p>I don't care about performance at the moment(if ever), so I will ignore the latter part.
Let's focus on making things work.</p>
<p>Damn it, I need a database to store posts!
Or do I?
Hmm, why the hell would I need an enterprise-grade DB (like PostgreSQL) to store a single post - sounds absurd.
I will store it on disk as part of the source code!
My IDE is the perfect <code>.MD</code> editor.
Git will provide me with all the version control I ever need.
I can just branch out of the <code>main</code>, write whatever I want, and then merge it back when it's ready to be published.
And it's free!</p>
<p>Well, I need to redeploy the backend every time I write or change the post,
but for now, this is not a big deal, so this mechanism will suffice.
I've set AWS AppRunner to automatically detect and deploy the newest image versions of my backend.
So I don't have to do much manual stuff, besides building an image.</p>
<p>Btw, how am I supposed to build and push the image into ECR?
I'm not writing Dockerfile \u2014 that's for sure.
Google Jib, https://github.com/GoogleContainerTools/jib.</p>
<p>Simple jib gradle plugin declaration in <code>build.gradle</code>(Gradle FTW!),
set <code>jib.from.image</code> parameter to <code>amazoncorretto:21-alpine</code>, set <code>jib.to.image</code> to my ECR repo.
Quick <code>aws ecr get-login-password...</code> from ECR documentation, <code>./gradlew jib</code> and off flies my images.
Easy enough.
I will automate it later.
I think GitHub Actions is what cool kids are using (I'm more of a GitLab user,
but for the sake of exercise, I decided to publish everything on GitHub).</p>
<p>Alright, for now, that's enough.
I have a running Angular frontend and Java backend.
Frontend knows how to talk with the backend.
The backend returns a list of posts, which are stored in the <code>resources</code> folder.
Backend logic is rather silly</p>
<ul>
<li>Read files from <code>resources/blog/posts</code> project folder</li>
<li>Load each file content as a string into a Post object</li>
<li>Sort loaded posts by filename in descending order</li>
</ul>
<p>And yes, I've introduced <code>fileName</code> attribute to the <code>Post</code>.
And that's about it.
I already established a minimal flow of work.</p>
<p>At the moment, there's little to talk about.
There's little code and one cute unit test.
I guess this is worth talking about \u2014 I'm a huge fan of TDD.
I love my tests.
At the moment, I have only one crucial test that covers the two most important aspects \u2014 REST endpoint and posts
are properly ordered.
I decided to use file naming as a sort parameter.
Each new post file will be prefixed by the current date,
so I could easily sort them in reverse order to show the latest posts on top and the oldest at the bottom.
Since I'm a backend guy, I prefer to keep such logic at the back.
I don't want to spend much time on the frontend, so I will try to keep it as lean as possible.
Saying that, the more I think about it, the more I realize that I should've gone with something like a thymeleaf,
and built everything within the backend app, but what's done is done.
Having a separate frontend app is not without its benefits anyway.
Plus, I can definitely benefit from expanding my horizons beyond the backend and Java.</p>
`,date:"31.03.2024",title:"Let's build",anchor:"lets-build"},{filename:"20240329-hello-world.md",content:`<p>I hate frontend. But at least, I figured out how to use markdown to render content, so I don't have to struggle with
WYSIWYG editors, at least now.</p>
<p>But where was I... Oh yes, <strong><em>BLOG</em></strong>! I'm building a blog - something you've never heard of or seen before, right? I
hope you can read through my sarcasm, I'm using it a lot, and I'm not going to tell you where - figure it out by
yourself.</p>
<p>The idea is straightforward \u2014 share <strong>my</strong> knowledge, thoughts and opinions on software stuff.
And there's no better way to do it, but via examples.
So, let's do it!</p>
<p>I'm going to build a blog while covering certain aspects of the building process in this blog.
So you could see patterns in action.
I'm going to start simple, heck, I'm a backend developer, who claims to be proficient in Java and
distributed systems, but I'm writing this in .MD file, which I will copy-paste into a <code>component</code> file.</p>
<p>I want to make this process agile and iterative while doing only what is necessary to build what I want now.
So, for now, it's a single-repo-almost-a-static-page-thingy - https://github.com/buyallmemes/blog.</p>
<p>Also, I kinda enjoy writing from time to time + I'm a programmer, so why not combine the best of both worlds \u2014 create a
place where a can park some of my thoughts for good.</p>
`,date:"29.03.2024",title:"Hello, World!",anchor:"hello-world"}];var Lp=Xa(Ha());(function(){if(typeof Prism>"u"||typeof document>"u")return;var e=[],c={},t=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(i,o){var s;if(typeof o=="function"?s=o:s=function(l){var u;return typeof o.onClick=="function"?(u=document.createElement("button"),u.type="button",u.addEventListener("click",function(){o.onClick.call(this,l)})):typeof o.url=="string"?(u=document.createElement("a"),u.href=o.url):u=document.createElement("span"),o.className&&u.classList.add(o.className),u.textContent=o.text,u},i in c){console.warn('There is a button with the key "'+i+'" registered already.');return}e.push(c[i]=s)};function n(i){for(;i;){var o=i.getAttribute("data-toolbar-order");if(o!=null)return o=o.trim(),o.length?o.split(/\s*,\s*/g):[];i=i.parentElement}}var r=Prism.plugins.toolbar.hook=function(i){var o=i.element.parentNode;if(!(!o||!/pre/i.test(o.nodeName))&&!o.parentNode.classList.contains("code-toolbar")){var s=document.createElement("div");s.classList.add("code-toolbar"),o.parentNode.insertBefore(s,o),s.appendChild(o);var l=document.createElement("div");l.classList.add("toolbar");var u=e,z=n(i.element);z&&(u=z.map(function(b){return c[b]||t})),u.forEach(function(b){var M=b(i);if(M){var y=document.createElement("div");y.classList.add("toolbar-item"),y.appendChild(M),l.appendChild(y)}}),s.appendChild(l)}};a("label",function(i){var o=i.element.parentNode;if(!(!o||!/pre/i.test(o.nodeName))&&o.hasAttribute("data-label")){var s,l,u=o.getAttribute("data-label");try{l=document.querySelector("template#"+u)}catch{}return l?s=l.content:(o.hasAttribute("data-url")?(s=document.createElement("a"),s.href=o.getAttribute("data-url")):s=document.createElement("span"),s.textContent=u),s}}),Prism.hooks.add("complete",r)})();(function(){if(typeof Prism>"u"||typeof document>"u")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function e(r,i){r.addEventListener("click",function(){t(i)})}function c(r){var i=document.createElement("textarea");i.value=r.getText(),i.style.top="0",i.style.left="0",i.style.position="fixed",document.body.appendChild(i),i.focus(),i.select();try{var o=document.execCommand("copy");setTimeout(function(){o?r.success():r.error()},1)}catch(s){setTimeout(function(){r.error(s)},1)}document.body.removeChild(i)}function t(r){navigator.clipboard?navigator.clipboard.writeText(r.getText()).then(r.success,function(){c(r)}):c(r)}function a(r){window.getSelection().selectAllChildren(r)}function n(r){var i={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},o="data-prismjs-";for(var s in i){for(var l=o+s,u=r;u&&!u.hasAttribute(l);)u=u.parentElement;u&&(i[s]=u.getAttribute(l))}return i}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(r){var i=r.element,o=n(i),s=document.createElement("button");s.className="copy-to-clipboard-button",s.setAttribute("type","button");var l=document.createElement("span");return s.appendChild(l),z("copy"),e(s,{getText:function(){return i.textContent},success:function(){z("copy-success"),u()},error:function(){z("copy-error"),setTimeout(function(){a(i)},1),u()}}),s;function u(){setTimeout(function(){z("copy")},o["copy-timeout"])}function z(b){l.textContent=o[b],s.setAttribute("data-copy-state",b)}})})();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(c,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",r)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,c){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:Prism.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var c=e.languages.extend("typescript",{});delete c["class-name"],e.languages.typescript["class-name"].inside=c,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:c}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete e.languages.sass.atrule;var c=/\$[-\w]+|#\{\$[-\w]+\}/,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:c,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:c,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})})(Prism);Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}});Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]});Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/});Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}});Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;(function(e){var c=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,a={pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[a,{pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:a.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+t+/[A-Z]\w*\b/.source),lookbehind:!0,inside:a.inside}],keyword:c,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":a,keyword:c,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+t+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:a.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+t+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:a.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return c.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);(function(e){var c="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:t,environment:{pattern:RegExp("\\$"+c),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+c),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+c),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+c),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=e.languages.bash;for(var n=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=a.variable[1].inside,i=0;i<n.length;i++)r[n[i]]=e.languages.bash[n[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);var Y6=(()=>{let c=class c{constructor(a){this.platformId=a}highlightAll(){W4(this.platformId)&&Prism.highlightAll()}};c.\u0275fac=function(n){return new(n||c)(k(Y1))},c.\u0275prov=V({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})();function Zo(e,c){if(e&1){let t=w2();I(0,"div",11),o1("click",function(){let n=M2(t).$implicit,r=s1(2);return H2(r.selectPost(n))}),I(1,"h3",12),p1(2),U(),I(3,"p"),p1(4),U()()}if(e&2){let t=c.$implicit,a=s1(2);U4("background-color",a.isSelectedPost(t)?"#e3f2fd":"#fafafa")("border-left",a.isSelectedPost(t)?"4px solid #2196f3":"4px solid transparent"),y1("active",a.isSelectedPost(t)),q(2),W2(t.title),q(2),W2(t.date)}}function Yo(e,c){if(e&1&&(Ke(0),$2(1,Zo,5,8,"div",10),Je()),e&2){let t=s1();q(),X("ngForOf",t.posts)}}function Xo(e,c){e&1&&(I(0,"div",13)(1,"p"),p1(2,"No posts available"),U()())}function Ko(e,c){if(e&1&&(I(0,"div"),Q(1,"app-post",14),U()),e&2){let t=s1();q(),X("post",t.selectedPost)}}function Jo(e,c){e&1&&(I(0,"div",15)(1,"h2",16),p1(2,"Nothing to see here"),U(),I(3,"p"),p1(4,"No articles are currently available. Please check back later."),U()())}var fe=(()=>{let c=class c{constructor(a,n,r,i){this.route=a,this.highlightService=n,this.titleService=r,this.location=i,this.posts=[],this.loading=!1,this.postId="",this.subscriptions=[]}ngAfterViewChecked(){this.updatePageTitle(),this.highlightService.highlightAll()}ngOnInit(){this.posts=Ma;let a=this.route.snapshot.paramMap.get("postId");this.selectedPost=this.posts.find(n=>n.anchor===a)||this.posts[0]}ngOnDestroy(){this.subscriptions.forEach(a=>a.unsubscribe())}selectPost(a){!a||this.selectedPost?.anchor===a.anchor||(this.selectedPost=a,this.postId=a.anchor,this.location.go(`/blog/${a.anchor}`),window.scrollTo(0,0))}isSelectedPost(a){return this.selectedPost?.anchor===a.anchor}updatePageTitle(){let a="BuyAllMemes Blog";this.selectedPost?this.titleService.setTitle(`${a} - ${this.selectedPost.title}`):this.titleService.setTitle(a)}};c.\u0275fac=function(n){return new(n||c)(c1(j1),c1(Y6),c1(c6),c1(X1))},c.\u0275cmp=B({type:c,selectors:[["app-blog"]],decls:12,vars:4,consts:[[1,"container","px-4"],[1,"flex","flex-col","lg-flex-row","gap-8"],[1,"lg-w-1-4","lg-min-w-250","lg-max-w-350"],[1,"bg-white","rounded-lg","shadow-sm","p-4","border","border-neutral-200"],[1,"font-bold","mb-6","border-b","border-neutral-200"],[1,"mt-4","flex","flex-col","gap-4"],[4,"ngIf"],["class","text-center p-4 bg-neutral-50 rounded-lg",4,"ngIf"],[1,"lg-w-3-4","max-w-3xl"],["class","text-center p-4 bg-neutral-100 rounded-lg shadow-sm mb-6",4,"ngIf"],["class","post-list-item p-4 rounded-lg cursor-pointer",3,"active","background-color","border-left","click",4,"ngFor","ngForOf"],[1,"post-list-item","p-4","rounded-lg","cursor-pointer",3,"click"],[1,"font-bold","mb-2"],[1,"text-center","p-4","bg-neutral-50","rounded-lg"],[3,"post"],[1,"text-center","p-4","bg-neutral-100","rounded-lg","shadow-sm","mb-6"],[1,"font-bold","mb-6"]],template:function(n,r){n&1&&(I(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),p1(5,"All Posts"),U(),I(6,"div",5),$2(7,Yo,2,1,"ng-container",6)(8,Xo,3,0,"div",7),U()()(),I(9,"div",8),$2(10,Ko,2,1,"div",6)(11,Jo,5,0,"div",9),U()()()),n&2&&(q(7),X("ngIf",r.posts&&r.posts.length>0),q(),X("ngIf",!r.posts||r.posts.length===0),q(2),X("ngIf",r.selectedPost),q(),X("ngIf",!r.selectedPost||!r.posts||r.posts.length===0))},dependencies:[Ca,$4,E3],encapsulation:2});let e=c;return e})();var Va=[{path:"",component:fe},{path:"blog/:postId",component:fe},{path:"**",redirectTo:"/",pathMatch:"full"}];var ya={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]};var La={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]};function wa(e){e.addIcons(ya),e.addIcons(La)}function Qo(){return{provide:B6,useFactory:()=>{let e=new B6;return wa(e),e}}}var xa={providers:[v8(Va,g8({anchorScrolling:"enabled"})),B0(U0()),W5(),P7(),Ne(Y6,Jt),Qo()]};var es=new S("MATERIAL_ANIMATIONS");var Sa=null;function ts(){return d(es,{optional:!0})?.animationsDisabled||d(E4,{optional:!0})==="NoopAnimations"?"di-disabled":(Sa??=d(G6).matchMedia("(prefers-reduced-motion)").matches,Sa?"reduced-motion":"enabled")}function X6(){return ts()!=="enabled"}var w1=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(w1||{}),ue=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=w1.HIDDEN;constructor(c,t,a,n=!1){this._renderer=c,this.element=t,this.config=a,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},Aa=z3({passive:!0,capture:!0}),de=class{_events=new Map;addHandler(c,t,a,n){let r=this._events.get(t);if(r){let i=r.get(a);i?i.add(n):r.set(a,new Set([n]))}else this._events.set(t,new Map([[a,new Set([n])]])),c.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Aa)})}removeHandler(c,t,a){let n=this._events.get(c);if(!n)return;let r=n.get(t);r&&(r.delete(a),r.size===0&&n.delete(t),n.size===0&&(this._events.delete(c),document.removeEventListener(c,this._delegateEventHandler,Aa)))}_delegateEventHandler=c=>{let t=k1(c);t&&this._events.get(c.type)?.forEach((a,n)=>{(n===t||n.contains(t))&&a.forEach(r=>r.handleEvent(c))})}},H4={enterDuration:225,exitDuration:150},as=800,Na=z3({passive:!0,capture:!0}),ka=["mousedown","touchstart"],Da=["mouseup","mouseleave","touchend","touchcancel"],cs=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(a,n){},styles:[`.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}
`],encapsulation:2,changeDetection:0})}return e})(),K6=class e{_target;_ngZone;_platform;_containerElement;_triggerElement;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect;static _eventManager=new de;constructor(c,t,a,n,r){this._target=c,this._ngZone=t,this._platform=n,n.isBrowser&&(this._containerElement=v2(a)),r&&r.get(C4).load(cs)}fadeInRipple(c,t,a={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=H(H({},H4),a.animation);a.centered&&(c=n.left+n.width/2,t=n.top+n.height/2);let i=a.radius||ns(c,t,n),o=c-n.left,s=t-n.top,l=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${o-i}px`,u.style.top=`${s-i}px`,u.style.height=`${i*2}px`,u.style.width=`${i*2}px`,a.color!=null&&(u.style.backgroundColor=a.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let z=window.getComputedStyle(u),b=z.transitionProperty,M=z.transitionDuration,y=b==="none"||M==="0s"||M==="0s, 0s"||n.width===0&&n.height===0,m=new ue(this,u,a,y);u.style.transform="scale3d(1, 1, 1)",m.state=w1.FADING_IN,a.persistent||(this._mostRecentTransientRipple=m);let f=null;return!y&&(l||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let h=()=>{f&&(f.fallbackTimer=null),clearTimeout(v),this._finishRippleTransition(m)},p=()=>this._destroyRipple(m),v=setTimeout(p,l+100);u.addEventListener("transitionend",h),u.addEventListener("transitioncancel",p),f={onTransitionEnd:h,onTransitionCancel:p,fallbackTimer:v}}),this._activeRipples.set(m,f),(y||!l)&&this._finishRippleTransition(m),m}fadeOutRipple(c){if(c.state===w1.FADING_OUT||c.state===w1.HIDDEN)return;let t=c.element,a=H(H({},H4),c.config.animation);t.style.transitionDuration=`${a.exitDuration}ms`,t.style.opacity="0",c.state=w1.FADING_OUT,(c._animationForciblyDisabledThroughCss||!a.exitDuration)&&this._finishRippleTransition(c)}fadeOutAll(){this._getActiveRipples().forEach(c=>c.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(c=>{c.config.persistent||c.fadeOut()})}setupTriggerEvents(c){let t=v2(c);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ka.forEach(a=>{e._eventManager.addHandler(this._ngZone,a,t,this)}))}handleEvent(c){c.type==="mousedown"?this._onMousedown(c):c.type==="touchstart"?this._onTouchStart(c):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Da.forEach(t=>{this._triggerElement.addEventListener(t,this,Na)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(c){c.state===w1.FADING_IN?this._startFadeOutTransition(c):c.state===w1.FADING_OUT&&this._destroyRipple(c)}_startFadeOutTransition(c){let t=c===this._mostRecentTransientRipple,{persistent:a}=c.config;c.state=w1.VISIBLE,!a&&(!t||!this._isPointerDown)&&c.fadeOut()}_destroyRipple(c){let t=this._activeRipples.get(c)??null;this._activeRipples.delete(c),this._activeRipples.size||(this._containerRect=null),c===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),c.state=w1.HIDDEN,t!==null&&(c.element.removeEventListener("transitionend",t.onTransitionEnd),c.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),c.element.remove()}_onMousedown(c){let t=v4(c),a=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+as;!this._target.rippleDisabled&&!t&&!a&&(this._isPointerDown=!0,this.fadeInRipple(c.clientX,c.clientY,this._target.rippleConfig))}_onTouchStart(c){if(!this._target.rippleDisabled&&!g4(c)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=c.changedTouches;if(t)for(let a=0;a<t.length;a++)this.fadeInRipple(t[a].clientX,t[a].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(c=>{let t=c.state===w1.VISIBLE||c.config.terminateOnPointerUp&&c.state===w1.FADING_IN;!c.config.persistent&&t&&c.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let c=this._triggerElement;c&&(ka.forEach(t=>e._eventManager.removeHandler(t,c,this)),this._pointerUpEventsRegistered&&(Da.forEach(t=>c.removeEventListener(t,this,Na)),this._pointerUpEventsRegistered=!1))}};function ns(e,c,t){let a=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),n=Math.max(Math.abs(c-t.top),Math.abs(c-t.bottom));return Math.sqrt(a*a+n*n)}var Ta=new S("mat-ripple-global-options");var rs={capture:!0},is=["focus","mousedown","mouseenter","touchstart"],me="mat-ripple-loader-uninitialized",he="mat-ripple-loader-class-name",_a="mat-ripple-loader-centered",J6="mat-ripple-loader-disabled",Ea=(()=>{class e{_document=d(E);_animationsDisabled=X6();_globalRippleOptions=d(Ta,{optional:!0});_platform=d(u1);_ngZone=d($);_injector=d(m1);_eventCleanups;_hosts=new Map;constructor(){let t=d(o2).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>is.map(a=>t.listen(this._document,a,this._onInteraction,rs)))}ngOnDestroy(){let t=this._hosts.keys();for(let a of t)this.destroyRipple(a);this._eventCleanups.forEach(a=>a())}configureRipple(t,a){t.setAttribute(me,this._globalRippleOptions?.namespace??""),(a.className||!t.hasAttribute(he))&&t.setAttribute(he,a.className||""),a.centered&&t.setAttribute(_a,""),a.disabled&&t.setAttribute(J6,"")}setDisabled(t,a){let n=this._hosts.get(t);n?(n.target.rippleDisabled=a,!a&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(t))):a?t.setAttribute(J6,""):t.removeAttribute(J6)}_onInteraction=t=>{let a=k1(t);if(a instanceof HTMLElement){let n=a.closest(`[${me}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let a=this._document.createElement("span");a.classList.add("mat-ripple",t.getAttribute(he)),t.append(a);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??H4.enterDuration,i=this._animationsDisabled?0:n?.animation?.exitDuration??H4.exitDuration,o={rippleDisabled:this._animationsDisabled||n?.disabled||t.hasAttribute(J6),rippleConfig:{centered:t.hasAttribute(_a),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:i}}},s=new K6(o,this._ngZone,a,this._platform,this._injector),l=!o.rippleDisabled;l&&s.setupTriggerEvents(t),this._hosts.set(t,{target:o,renderer:s,hasSetUpEvents:l}),t.removeAttribute(me)}destroyRipple(t){let a=this._hosts.get(t);a&&(a.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(a){return new(a||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ia=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(a,n){},styles:[`.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}
`],encapsulation:2,changeDetection:0})}return e})();var os=["mat-icon-button",""],ss=["*"],ls=new S("MAT_BUTTON_CONFIG");function Ra(e){return e==null?void 0:D3(e)}var Fa=(()=>{class e{_elementRef=d(h1);_ngZone=d($);_animationsDisabled=X6();_config=d(ls,{optional:!0});_focusMonitor=d(ce);_cleanupClick;_renderer=d(w3);_rippleLoader=d(Ea);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){d(C4).load(Ia);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",a){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,a):this._elementRef.nativeElement.focus(a)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(a){return new(a||e)};static \u0275dir=G({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(a,n){a&2&&(_1("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),S1(n.color?"mat-"+n.color:""),y1("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",n1],disabled:[2,"disabled","disabled",n1],ariaDisabled:[2,"aria-disabled","ariaDisabled",n1],disabledInteractive:[2,"disabledInteractive","disabledInteractive",n1],tabIndex:[2,"tabIndex","tabIndex",Ra],_tabindex:[2,"tabindex","_tabindex",Ra]}})}return e})(),pe=(()=>{class e extends Fa{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[F4],attrs:os,ngContentSelectors:ss,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,n){a&1&&(E1(),O4(0,"span",0),b1(1),O4(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));flex-shrink:0;text-align:center;width:var(--mat-icon-button-state-layer-size, 40px);height:var(--mat-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);font-size:var(--mat-icon-button-icon-size, 24px);color:var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-icon-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;display:var(--mat-icon-button-touch-target-display, block);left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mat-icon-button-icon-size, 24px);height:var(--mat-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%))}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}
`,`@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}
`],encapsulation:2,changeDetection:0})}return e})();var Pa=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=Y({type:e});static \u0275inj=Z({imports:[a2,a2]})}return e})();var Oa=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=Y({type:e});static \u0275inj=Z({imports:[a2,Pa,a2]})}return e})();var us=["*",[["mat-toolbar-row"]]],ds=["*","mat-toolbar-row"],ms=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275dir=G({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),Ba=(()=>{class e{_elementRef=d(h1);_platform=d(u1);_document=d(E);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=B({type:e,selectors:[["mat-toolbar"]],contentQueries:function(a,n,r){if(a&1&&g0(r,ms,5),a&2){let i;b0(i=z0())&&(n._toolbarRows=i)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,n){a&2&&(S1(n.color?"mat-"+n.color:""),y1("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ds,decls:2,vars:0,template:function(a,n){a&1&&(E1(us),b1(0),b1(1,1))},styles:[`.mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}
`],encapsulation:2,changeDetection:0})}return e})();var Ua=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=Y({type:e});static \u0275inj=Z({imports:[a2,a2]})}return e})();var ja=(()=>{let c=class c{constructor(a){this.router=a}openLinkInNewWindow(a){window.open(a,"_blank","noopener,noreferrer")}goHome(){this.router.navigate([""]),window.scrollTo({top:0,behavior:"smooth"})}};c.\u0275fac=function(n){return new(n||c)(c1(h3))},c.\u0275cmp=B({type:c,selectors:[["app-navigation"]],decls:11,vars:0,consts:[[2,"box-shadow","0 1px 2px rgba(0, 0, 0, 0.05)","background-color","white","border-bottom","1px solid #eeeeee","position","fixed","top","0","left","0","right","0","z-index","1000"],[1,"container",2,"display","flex","align-items","center","justify-content","space-between"],[2,"color","#1976d2","font-weight","bold","font-size","1.25rem","cursor","pointer",3,"click"],[2,"display","flex","align-items","center","gap","0.5rem"],["mat-icon-button","","color","basic",2,"color","#757575",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","data-supported-dps","24x24","fill","currentColor","focusable","false",2,"width","1.25rem","height","1.25rem"],["d","M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"],["aria-hidden","true","viewBox","0 0 16 16","data-view-component","true",2,"width","1.25rem","height","1.25rem"],["fill","currentColor","d","M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"]],template:function(n,r){n&1&&(I(0,"mat-toolbar",0)(1,"div",1)(2,"span",2),o1("click",function(){return r.goHome()}),p1(3," BuyAllMemes "),U(),I(4,"div",3)(5,"button",4),o1("click",function(){return r.openLinkInNewWindow("https://www.linkedin.com/in/mark-fenderov/")}),i0(),I(6,"svg",5),Q(7,"path",6),U()(),De(),I(8,"button",4),o1("click",function(){return r.openLinkInNewWindow("https://github.com/buyallmemes")}),i0(),I(9,"svg",7),Q(10,"path",8),U()()()()())},dependencies:[Oa,pe,Ua,Ba],encapsulation:2});let e=c;return e})();var qa=(()=>{let c=class c{constructor(){this.title="BuyAllMemes"}};c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=B({type:c,selectors:[["app-root"]],decls:4,vars:0,consts:[[2,"min-height","100vh","background-color","#fafafa","padding-top","64px"],[1,"app-content"]],template:function(n,r){n&1&&(Q(0,"app-navigation"),I(1,"div",0)(2,"div",1),Q(3,"router-outlet"),U()())},dependencies:[r4,ja],styles:[".app-content[_ngcontent-%COMP%]{padding-top:1.5rem;padding-bottom:1.5rem}.app-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]});let e=c;return e})();T0(qa,xa).catch(e=>console.error(e));
