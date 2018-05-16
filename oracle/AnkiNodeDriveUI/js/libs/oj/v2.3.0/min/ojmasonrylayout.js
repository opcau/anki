/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojdnd"],function(a,g){function b(a,d,e,f,g,k){null==b.fR&&(b.fR=b.jua());this.pd=a;this.Pg=d;this.iqa=e;f&&f.tka&&(this.cFa=f.tka);g&&(g.wka&&(this.mX=g.wka),g.vka&&(this.lX=g.vka),g.Aka&&(this.rX=g.Aka),g.zka&&(this.qX=g.zka),g.xka&&(this.oX=g.xka),g.yka&&(this.ML=g.yka),g.Cka&&(this.tX=g.Cka),g.Dka&&(this.uX=g.Dka),g.Bka&&(this.sX=g.Bka));k&&(k.iF&&(this.Uh=k.iF),k.rG&&(this.jg=k.rG),k.Uga&&(this.R8=k.Uga),k.cha&&(this.aU=k.cha),k.dka&&(this.ht=
k.dka),k.Fha&&(this.ez=k.Fha),k.fia&&(this.pz=k.fia),k.eia&&(this.To=k.eia),k.dia&&(this.Zs=k.dia),k.gka&&(this.OE=k.gka),k.rg&&(this.Uda=k.rg),k.Ch&&(this.Vda=k.Ch));d=document.createElement("div");e=d.style;e.display="inline-block";e.overflow="hidden";e.visibility="hidden";f=document.createElement("div");e=f.style;e.display="inline-block";d.appendChild(f);a.insertBefore(d,a.firstChild);this.Jda=d;this.qw=f;var l=this;this.Oo=function(a){l.Hv(a)};this.a$=function(){l.wya()};this.Dv=function(a){l.yU(a)};
this.Gv=function(a){l.FU(a)}}b.prototype.Yn=function(a,b){var e=!1;a?(e=this.Wj()?!0:!1,this.kca()):(this.To&&this.To(),this.vX(b),e=this.pX());return e};b.prototype.destroy=function(){for(var a=this.pd,b=this.Bv(),e=0;e<b.length;e++){var f=b[e].style;this.Pg?f.right="":f.left="";f.top=""}a.removeChild(this.Jda);this.Vda=this.Uda=this.OE=this.Zs=this.To=this.pz=this.ez=this.ht=this.aU=this.R8=this.jg=this.Uh=this.pd=this.oq=this.to=this.Jl=this.uo=this.Ym=this.Gv=this.Dv=this.a$=this.Oo=this.qw=this.Jda=
null};b.prototype.resizeTile=function(a,b){var e=this.pd.querySelector(a);if(e){this.uo||(this.uo=[]);var f=this.uo;f.push(e);f.push(b);this.uca=!0;this.qE()}};b.prototype.DJa=function(a,b){var e=this.Bv();this.OE&&this.OE(e);var f=null;0<=b&&b<e.length&&(f=e[b]);this.pd.insertBefore(a,f);this.qE()};b.prototype.GLa=function(a){if(a=this.pd.querySelector(a))this.Jl||(this.Jl=[]),this.Jl.push(a),this.TW=!0,this.un!==b.e3&&this.un!==b.JH?this.qE():this.TW=!1};b.prototype.wJa=function(a){if(a=this.pd.querySelector(a))this.to||
(this.to=[]),this.to.push(a),this.b$=!0,this.qE()};b.prototype.fLa=function(){this.uca||this.b$||this.TW||(this.To&&this.To(),this.vX(!1),this.pX())};b.prototype.jj=function(){if(this.hea)return!1;this.Gqa||(this.$pa=this.iqa?!1:b.yza(b.fR[0],b.fR[1]),this.Gqa=!0);return this.$pa};b.prototype.nN=function(){return null!=this.un||null!=this.Ym&&0<this.Ym.length};b.prototype.GM=function(){this.hea=!0;this.Nq(this.rX);this.Nq(this.qX);this.Nq(this.oX);this.Nq(this.ML);this.Nq(this.tX);this.Nq(this.uX);
this.Nq(this.sX);this.jg(this.qw,this.mX);this.jg(this.qw,this.lX);b.ig(this.pd,"transitionend",this.Oo);b.ig(this.pd,"webkitTransitionEnd",this.Oo);for(var a=this.Bv(),d=0;d<a.length;d++){var e=a[d];e.hI&&delete e.hI;b.ig(e,"transitionend",this.Dv);b.ig(e,"webkitTransitionEnd",this.Dv);b.ig(e,"transitionend",this.Gv);b.ig(e,"webkitTransitionEnd",this.Gv)}this.fz?(clearTimeout(this.fz),this.fz=null,this.yU(null)):this.Kz?(clearTimeout(this.Kz),this.Kz=null,this.SW()):this.un===b.JH||null!=this.Ym&&
0<this.Ym.length?this.Hv(null):this.un===b.f3&&this.FU(null);this.hea=!1};b.Tua=function(a){var d=b.hD(a);return{Ei:a.offsetWidth+(b.Yi(d.marginLeft)+b.Yi(d.marginRight)),ik:a.offsetHeight+(b.Yi(d.marginTop)+b.Yi(d.marginBottom))}};b.Sua=function(a){a=b.hD(a);return{paddingLeft:b.Yi(a.paddingLeft),paddingRight:b.Yi(a.paddingRight),paddingTop:b.Yi(a.paddingTop),paddingBottom:b.Yi(a.paddingBottom),borderLeftWidth:b.Yi(a.borderLeftWidth),borderRightWidth:b.Yi(a.borderRightWidth),borderTopWidth:b.Yi(a.borderTopWidth),
borderBottomWidth:b.Yi(a.borderBottomWidth)}};b.hD=function(a){var b=a.ownerDocument.defaultView,e=null;return e=b?b.getComputedStyle(a,null):a.currentStyle};b.Yi=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};b.Th=function(a,b,e){a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent&&a.attachEvent("on"+b,e)};b.ig=function(a,b,e){a.removeEventListener?a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)};b.u4=function(a,b){if(a)for(var e=0;e<
a.length;e++)if(a[e]==b)return e;return-1};b.yza=function(a,b){var e=["gecko",16,"trident",6,"webkit",533.1],f=e.length;if(0==f%2)for(var g=0;g<=f-2;g+=2)if(a==e[g]){if(b>=e[1+g])return!0;break}return!1};b.jua=function(){var a=b.Vk,d=null,e=-1,f=navigator.userAgent.toLowerCase();-1!=f.indexOf("msie")||-1!=f.indexOf("trident")?(d="trident",e=a(f,/trident\/(\d+[.]\d+)/),-1==e&&(e=a(f,/msie (\d+\.\d+);/),-1==e&&(e=a(f,/msie (\d+\.\d+)b;/)),e-=4),null!=document.documentMode&&(e=Math.min(e,document.documentMode-
4))):-1!=f.indexOf("applewebkit")?(d="webkit",e=a(f,/applewebkit\/(\d+([.]\d+)*)/)):-1!=f.indexOf("gecko/")&&(d="gecko",e=a(f,/rv:(\d+[.]\d+)/));return[d,e]};b.Vk=function(a,b){var e=a.match(b);return e&&(e=e[1])?parseFloat(e):-1};b.zra=function(a,b){return a.rO>b.rO?1:a.rO<b.rO?-1:a.qO>b.qO?1:a.qO<b.qO?-1:0};b.prototype.qE=function(){this.mK||(this.un?this.bW||(this.bW=!0):this.mK=setTimeout(this.a$,0))};b.prototype.Bv=function(){for(var a=this.pd.querySelectorAll(this.cFa),b=[],e=0;e<a.length;e++){var f=
a[e],g=f.style;0<f.offsetWidth&&0<f.offsetHeight&&"hidden"!=g.visibility&&b.push(f)}return b};b.prototype.pX=function(){var a=this.Ym,d=this.Wj();if(this.uo){var e=this.uo;d||(d=[]);for(var f=0;f<e.length;f+=2){var g=e[f];0>b.u4(d,g)&&d.push(g)}}e=!1;if(!d||1>d.length){if(!a||1>a.length)this.Ym=null,this.Hv(null),e=!0}else this.Ym=d;a=null!=d&&0<d.length;this.jj()||e||this.Hv(null);return a};b.prototype.Wj=function(){var a=this.pd,d=this.Bv();this.OE&&this.OE(d);var e=this.MR=null;this.ys=0;this.Ca=
1;this.wz=null;var f=[],g=[],k=[],l=this.Pg,m=b.Sua(a),r=0,t=[];this.t4=t;for(var s=0;s<d.length;s++){var p=d[s],q=this.aU(p);(e=p.hI)&&delete p.hI;if(!this.MR){var n=q;e&&(n=document.createElement("div"),n.className=e,n=this.aU(n));this.MR=this.Hqa(p,n)}e=this.MR;this.wz||(this.ys=Math.max(Math.floor((a.offsetWidth-m.paddingLeft-m.paddingRight-m.borderLeftWidth-m.borderRightWidth)/e.Ei),1),this.Qya(this.ys,this.Ca),r=this.ys);q.colSpan>r&&(r=q.colSpan);q.colSpan>this.ys&&(q.colSpan=this.ys);for(var u=
!1,n=0;n<this.Ca;n++){for(var v=0;v<this.ys;v++)if(this.bua(v,n,q)){var u=p.style,w={top:u.top};l?w.right=u.right:w.left=u.left;g.push(w);this.SV(p,v,n,q,e,m);l&&k.push(v);u=!0;t.push({qO:v,rO:n,tile:p});break}if(u)break;n===this.Ca-1&&this.Y3()}}e&&(a=this.qw.style,a.width=r*e.Ei+"px",a.height=this.Ca*e.ik+"px");for(s=0;s<d.length;s++)p=d[s],u=p.style,w=g[s],""!=w.top&&(l&&parseInt(u.right,10)!==parseInt(w.right,10)||!l&&parseInt(u.left,10)!==parseInt(w.left,10)||parseInt(u.top,10)!==parseInt(w.top,
10))&&f.push(p);1>f.length&&(f=null);return f};b.prototype.kca=function(){var a=this.t4;this.t4=null;for(var a=a.sort(b.zra),d=this.Bv(),e=0;e<d.length;e++){var f=d[e],g=a[e].tile;f!=g&&(this.Vda(g),f.parentNode.insertBefore(g,f),this.Uda(g),f=b.u4(d,g),f>e&&(d.splice(f,1),d.splice(e,0,g)))}};b.prototype.Qya=function(a,b){for(var e=this.wz=[],f=0;f<b;f++){var g=[];e.push(g);for(var k=0;k<a;k++)g[k]=!1}};b.prototype.Y3=function(){this.Ca++;var a=[];this.wz.push(a);for(var b=0;b<this.ys;b++)a[b]=!1};
b.prototype.bua=function(a,b,e){var f=e.colSpan;e=e.rowSpan;for(var g=b;g<b+e;g++){g>=this.Ca&&this.Y3();for(var k=a;k<a+f;k++)if(k>=this.ys||this.wz[g][k])return!1}return!0};b.prototype.SV=function(a,b,e,f,g,k){var l=f.colSpan;f=f.rowSpan;for(var m=this.wz,r=e;r<e+f;r++)for(var t=b;t<b+l;t++)m[r][t]=!0;a=a.style;a.top=k.paddingTop+e*g.ik+"px";this.Pg?a.right=k.paddingRight+b*g.Ei+"px":a.left=k.paddingLeft+b*g.Ei+"px"};b.prototype.Gpa=function(a){for(var b=this.Bv(),e=0;e<b.length;e++)this.Uh(b[e],
a)};b.prototype.Nq=function(a){for(var b=this.Bv(),e=0;e<b.length;e++)this.jg(b[e],a)};b.prototype.vX=function(a){this.oaa||(this.lca=a,this.jj()&&(this.Gpa(a?this.qX:this.rX),this.Uh(this.qw,a?this.lX:this.mX),b.Th(this.pd,"transitionend",this.Oo),b.Th(this.pd,"webkitTransitionEnd",this.Oo)),this.oaa=!0)};b.prototype.Hv=function(a){var d=!0;if(this.Ym){var e=this.Ym;if(a){var f=a.target;for(a=0;a<e.length;a++)if(f===e[a]){e.splice(a,1);break}}else this.jj()||(e=this.Ym=[]);0<e.length&&(d=!1)}if(d){if(this.uo&&
(d=this.uo,this.uo=null,this.jj()))for(a=0;a<d.length;a+=2)this.jg(d[a],this.sX);this.lca?(this.jj()&&(this.Nq(this.qX),this.jg(this.qw,this.lX)),this.lca=!1):this.jj()&&(this.Nq(this.rX),this.jg(this.qw,this.mX));this.jj()&&(b.ig(this.pd,"transitionend",this.Oo),b.ig(this.pd,"webkitTransitionEnd",this.Oo));this.TW=this.b$=this.uca=this.oaa=!1;this.kca();this.pz&&this.pz();if(this.un===b.JH)if(this.jj()){var g=this;this.Kz=setTimeout(function(){g.SW()},0)}else this.SW();else this.un||this.Zs&&this.Zs()}};
b.prototype.Hqa=function(a,d){var e=b.Tua(a);return{Ei:e.Ei/d.colSpan,ik:e.ik/d.rowSpan}};b.prototype.wya=function(){this.mK&&(clearTimeout(this.mK),this.mK=null);this.To&&this.To();this.un=b.e3;if(this.to&&this.jj()){for(var a=this.to,d=0;d<a.length;d++){var e=a[d];b.Th(e,"transitionend",this.Dv);b.Th(e,"webkitTransitionEnd",this.Dv);this.Uh(e,this.oX)}var f=this;this.fz=setTimeout(function(){for(var b=0;b<a.length;b++){var d=a[b];f.jg(d,f.oX);f.Uh(d,f.ML)}},0)}else this.yU(null)};b.prototype.yU=
function(a){this.fz&&(clearTimeout(this.fz),this.fz=null);if(a){a.preventDefault();a.stopPropagation();a=a.target;this.jg(a,this.ML);b.ig(a,"transitionend",this.Dv);b.ig(a,"webkitTransitionEnd",this.Dv);var d=this.to;if(d){for(var e=0;e<d.length;e++){var f=d[e];if(f===a){d.splice(e,1);this.oq||(this.oq=[]);var g=this.oq;g.push(a);break}}1>d.length&&(this.to=null)}}else if(!this.jj()&&(d=this.to)){for(e=0;e<d.length;e++)f=d[e],this.oq||(this.oq=[]),g=this.oq,g.push(f);this.to=null}if(!this.to){if(this.oq){g=
this.oq;for(e=0;e<g.length;e++)a=g[e],this.jj()&&this.jg(a,this.ML),d=a.style,this.Pg?d.right="":d.left="",d.top="",this.ez&&this.ez(a);this.oq=null}this.un=b.JH;this.vX(!1);if(this.uo)for(g=this.uo,e=0;e<g.length;e+=2)a=g[e],d=g[e+1],f=this.R8(a),this.jg(a,f),this.Uh(a,d),this.jj()&&(this.Uh(a,this.sX),a.hI=f);this.pX()}};b.prototype.SW=function(){this.Kz&&(clearTimeout(this.Kz),this.Kz=null);this.un=b.f3;if(this.Jl&&this.jj())for(var a=this.Jl,d=0;d<a.length;d++){var e=a[d];b.Th(e,"transitionend",
this.Gv);b.Th(e,"webkitTransitionEnd",this.Gv);this.Uh(e,this.uX);this.jg(e,this.tX)}else{if(this.Jl)for(a=this.Jl,d=0;d<a.length;d++)e=a[d],this.jg(e,this.tX);this.FU(null)}};b.prototype.FU=function(a){if(a){a.preventDefault();a.stopPropagation();a=a.target;this.jg(a,this.uX);b.ig(a,"transitionend",this.Gv);b.ig(a,"webkitTransitionEnd",this.Gv);var d=this.Jl;if(d){for(var e=0;e<d.length;e++){var f=d[e];if(f===a){d.splice(e,1);this.ht&&this.ht(a);break}}1>d.length&&(this.Jl=null)}}else if(!this.jj()&&
(d=this.Jl)){for(e=0;e<d.length;e++)f=d[e],this.ht&&this.ht(f);this.Jl=null}this.Jl||(this.un=null,this.Zs&&this.Zs(),this.bW&&(this.bW=!1,this.qE()))};b.e3=1;b.JH=2;b.f3=3;(function(){function c(a){for(;a;){a=a.nextSibling;var b=!0;if(a){var c=a.style;!c||c.visibility!==t&&c.display!==s||(b=!1)}if(a&&1===a.nodeType&&b)return a}return null}function d(a,b){for(var c=a;c;){var d=c.style;if(d&&(d.visibility===t||d.display===s))break;d=c.parentNode;if(d===b)return c;c=d}return null}function e(a,b){return b.Id<
a.Id?1:a.Id<b.Id?-1:0}function f(a){a&&a.sort(e);return a}function h(a){var b=null;a=g(a);a.hasClass("oj-masonrylayout-tile-1x1")?b={colSpan:1,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-2x1")?b={colSpan:2,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-3x1")?b={colSpan:3,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-1x2")?b={colSpan:1,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-1x3")?b={colSpan:1,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-2x2")?b={colSpan:2,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-2x3")?
b={colSpan:2,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-3x2")&&(b={colSpan:3,rowSpan:2});return b}function k(a){var b=null;a=g(a);a.hasClass("oj-masonrylayout-tile-1x1")?b="oj-masonrylayout-tile-1x1":a.hasClass("oj-masonrylayout-tile-2x1")?b="oj-masonrylayout-tile-2x1":a.hasClass("oj-masonrylayout-tile-3x1")?b="oj-masonrylayout-tile-3x1":a.hasClass("oj-masonrylayout-tile-1x2")?b="oj-masonrylayout-tile-1x2":a.hasClass("oj-masonrylayout-tile-1x3")?b="oj-masonrylayout-tile-1x3":a.hasClass("oj-masonrylayout-tile-2x2")?
b="oj-masonrylayout-tile-2x2":a.hasClass("oj-masonrylayout-tile-2x3")?b="oj-masonrylayout-tile-2x3":a.hasClass("oj-masonrylayout-tile-3x2")&&(b="oj-masonrylayout-tile-3x2");return b}function l(a,b){g(a).removeClass(b)}function m(a,b){g(a).addClass(b)}a.Ra("oj.ojMasonryLayout",g.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{reorderHandle:null,beforeInsert:null,insert:null,beforeRemove:null,remove:null,beforeResize:null,resize:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){this._super();
this.element.addClass("oj-masonrylayout oj-component");this.options.disabled&&a.t.warn(w);this.jx=this.eventNamespace+"ReorderHandle";this.Ia={};this.Ia.Dh=!1;this.Ia.mf=!1;this.Ia.Z_=!1;this.Ia.vk=!1;this.Ia.ql=!1;this.Ss();this.rC();this.ab(!0)},refresh:function(){this._super();var a="rtl"===this.nd()!==this.Ui;a&&this.t6();this.ab(a)},hq:function(){this._super();this.Le&&this.ab(this.Le[0])},gq:function(){this._super();this.Le&&this.ab(this.Le[0])},ph:function(a,b,c){this.pBa(b);(a=this.Ia.mf.children().not(".oj-helper-hidden"))&&
0<a.length&&this.qh(b,c,{launcher:g(b.target).closest(":tabbable")})},ab:function(c){if(this.zC()){this.Le=null;this.Ui="rtl"===this.nd();this.us=a.D.jf();var d=this.element,e=this.options;if(c){var g=this;this.ht=function(a){g.IEa(a)};this.ez=function(a){g.vya(a)};this.pz=function(){g.Wza()};this.To=function(){g.Vza()};this.Zs=function(){g.Uza()};if(!this.di){var n={};n.tka=u;var q={wka:"oj-masonrylayout-transition-resize-to",vka:"oj-masonrylayout-transition-resize-to-fast",Aka:"oj-masonrylayout-tile-transition-move-to",
zka:"oj-masonrylayout-tile-transition-move-to-fast",xka:"oj-masonrylayout-tile-transition-hide-from",yka:"oj-masonrylayout-tile-transition-hide-to"};q.Cka=v;q.Dka="oj-masonrylayout-tile-transition-show-to";q.Bka="oj-masonrylayout-tile-transition-resize-to";var p={};p.iF=m;p.rG=l;p.Uga=k;p.cha=h;p.dka=this.ht;p.Fha=this.ez;p.fia=this.pz;p.eia=this.To;p.dia=this.Zs;p.gka=f;p.rg=a.Components.rg;p.Ch=a.Components.Ch;this.jDa();this.di=new b(d[0],this.Ui,"enabled"===a.fa.EY(),n,q,p)}this.y9=function(a){g.sU(a)};
this.v9=function(a){g.pU(a)};this.x9=function(a){g.rU(a)};this.w9=function(a){g.qU(a)};this.t9=function(a){g.oU(a)};this.z9=function(a){g.tU(a)};e.reorderHandle&&this.vda()}else e=d.children(),this.cX(e),this.OW(e),this.Xqa();this.di.Yn(c);c&&(this.Sj=function(){g.Lg()},a.D.$k(d[0],this.Sj))}else d=!1,this.Le&&(d=this.Le[0]),this.Le=[c||d]},_destroy:function(){this.gv();var b=this.element;a.D.xm(b[0],this.Sj);this.Sj=null;this.eDa();for(var c=this.Mo(),d=c.length,e=0;e<d;e++)delete c[e].Id;this.t6();
b.removeClass("oj-masonrylayout oj-component");this.options.reorderHandle&&this.fea();this.sy=this.Zs=this.To=this.pz=this.ez=this.ht=this.z9=this.t9=this.w9=this.x9=this.v9=this.y9=null;this._super()},_setOption:function(b,c,d){var e=!1;switch(b){case "reorderHandle":this.fea();e=!0;break;case "disabled":a.t.warn(w);break;case "contextMenu":a.D.jf()||(this.gv(),c&&this.Ss(c))}this._super(b,c,d);e&&c&&this.vda()},resizeTile:function(a,b){var c=this.di;c.nN()&&c.GM();var d=g(a),e=d[0],f=k(e);if(b==
f)throw Error("JET MasonryLayout: Unable to resize child "+a+" to style class "+b+" because "+b+" is already applied.");!1!==this._trigger("beforeResize",null,{tile:d,previousSizeStyleClass:f,sizeStyleClass:b})&&(this.tC||(this.tC=[]),this.tC.push(e,f,b),c.resizeTile(a,b))},insertTile:function(b,c){var d=this.di;d.nN()&&d.GM();isNaN(c)&&(c=-1);var e=g(b),f=e[0];!1!==this._trigger("beforeInsert",null,{tile:e,index:c})&&(f.kaa=c,d.jj()&&e.addClass(v),e=f.style,e.top="-1px",this.Ui?e.right="-1px":e.left=
"-1px",this.Ts(f,c),d.DJa(f,c),a.Components.rg(f),this.sy||(this.sy=[]),this.sy.push(b))},removeTile:function(b){var c=this.di;c.nN()&&c.GM();var d=g(b),e=d[0];if(a.me.qM(e)){var f=this.Mo(!0),e=f.indexOf(e);0<e&&(this.xS=f[e-1])}!1!==this._trigger("beforeRemove",null,{tile:d})&&c.wJa(b)},Lg:function(){this.vo||this.g$||this.di.fLa()},IEa:function(a){var b=g(a),c=a.kaa;delete a.kaa;this.options.reorderHandle&&this.OW(b);this._trigger("insert",null,{tile:b,index:c})},vya:function(b){var c=g(b);this.options.reorderHandle&&
this.cX(c);a.Components.Ch(b);b.parentNode.removeChild(b);this.iL(b);this._trigger("remove",null,{tile:c})},Wza:function(){if(this.sy){for(var a=this.di,b=this.sy,c=0;c<b.length;c++)a.GLa(b[c]);this.sy=null}if(this.tC){a=this.tC;for(c=0;c<a.length;c+=3){var b=a[c+1],d=a[c+2],b={tile:g(a[c]),previousSizeStyleClass:b,sizeStyleClass:d};this._trigger("resize",null,b)}this.tC=null}this.vo&&(this.lI?this.Iwa():this.mR&&this.u9())},Vza:function(){this.g$=!0;this.GK=null;var b=document.activeElement;b&&a.D.Dp(this.element[0],
b)&&(this.GK=b)},Uza:function(){this.g$=!1;var b=this.element[0];if(this.GK){var c=this.GK;this.GK=null;if(this.xS){if(c=this.xS,this.xS=null,c&&a.D.Dp(b,c)){var b=this.Mo(b,!0),d=b.indexOf(c);0<=d&&d<b.length-1?a.me.BY(b[d+1]):a.me.BY(c)}}else a.D.Dp(b,c)?a.me.qF(c):a.me.BY(b)}},t6:function(){var a=this.di;a&&a.destroy();this.di=null},zC:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);
return c},Mo:function(a){for(var b=this.element.children(u),c=b.length,d=[],e=0;e<c;e++){var f=b[e];if(!a||a&&f!==this.uf){var g=f.style;g.visibility!==t&&g.display!==s&&d.push(f)}}return d},jDa:function(){var a=this.Mo();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.Id||(c.Id=b+1)}},Xqa:function(){var a=this.Mo();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.Id||this.Ts(c,b)}},eDa:function(){var b=this.Mo(),c=this.Mo();f(c);for(var d=0;d<b.length;d++){var e=b[d],g=c[d];e!=g&&(a.Components.Ch(g),
e.parentNode.insertBefore(g,e),a.Components.rg(g),e=b.indexOf(g),e>d&&(b.splice(e,1),b.splice(d,0,g)))}},Ts:function(a,b){var c=this.Mo();0>b&&(b=c.length);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.Id&&e.Id>=b+1&&e.Id++}a.Id=b+1},iL:function(a){if(a.Id){var b=this.Mo();if(b)for(var c=0;c<b.length;c++){var d=b[c];d.Id&&d.Id>a.Id&&d.Id--}delete a.Id}},Ss:function(a){var b=null,c=null;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=
a||this.options.contextMenu;c=g.type(b);if("function"==c){try{b=b()}catch(d){b=null}g.type(b)}if(b){if(b=g(b)){b.css("display",s);c=this.Ia;if(!c)return;c.mf=b;c.Dh=!0}this.Ia.Dh&&a&&this.rC()}}},rC:function(){if(this.Ia&&this.Ia.Dh&&this.options.reorderHandle){var a=this.Ia.mf,b=this;a.on("ojselect",g.proxy(this.Sk,this));var c=!1;a.find("[data-oj-command]").each(function(){if(0===g(this).children("a").length){var a=g(this).attr("data-oj-command").slice(17);g(this).replaceWith(b.Kj(a));g(this).addClass("oj-menu-item");
c=!0}});c&&a.ojMenu("refresh");this.Ia.Z_=a.find("#"+y);this.Ia.vk=a.find("#"+x);this.Ia.ql=a.find("#"+z)}},gv:function(){var a=this.Ia;a&&a.Dh&&(a.Dh=!1,a.mf.off("ojselect"),a.mf=null)},pBa:function(a){var b=this.element,e=a.originalEvent.target,f=this.options.reorderHandle;a=!1;f&&(f=g(e).closest(f))&&0<f.length&&(a=!0);b=d(e,b[0]);this.Ia.tile=b;if(this.Ia.Dh){var e=this.Ia.tM,f=!1,h=this.Ia.Z_;if(h){var k=h.hasClass("oj-helper-hidden");a||k?a&&k&&(h.removeClass("oj-helper-hidden"),f=!0):(h.addClass("oj-helper-hidden"),
f=!0);var n=h.hasClass(q),k=!1;e&&b===e&&(k=!0);k&&!n?(h.addClass(q),f=!0):!k&&n&&(h.removeClass(q),f=!0)}if(h=this.Ia.vk)k=h.hasClass("oj-helper-hidden"),a||k?a&&k&&(h.removeClass("oj-helper-hidden"),f=!0):(h.addClass("oj-helper-hidden"),f=!0),n=h.hasClass(q),k=!1,e&&b!==e&&b!==c(e)||(k=!0),k&&!n?(h.addClass(q),f=!0):!k&&n&&(h.removeClass(q),f=!0);if(h=this.Ia.ql)k=h.hasClass("oj-helper-hidden"),a||k?a&&k&&(h.removeClass("oj-helper-hidden"),f=!0):(h.addClass("oj-helper-hidden"),f=!0),a=h.hasClass(q),
k=!1,e&&e!==b&&e!==c(b)||(k=!0),k&&!a?(h.addClass(q),f=!0):!k&&a&&(h.removeClass(q),f=!0);f&&this.Ia.mf.ojMenu("refresh")}},Kj:function(a){var b=C[a];a=D[a];var c=g('\x3ca href\x3d"#"\x3e\x3c/a\x3e');c.text(this.F(a));c.wrap("\x3cli id\x3d"+b+"\x3e\x3c/li\x3e");return c.parent()},mAa:function(a){a&&(this.Ia.tM=a)},Faa:function(a,b){if(a&&this.Ia.tM){var c=this.Ia.tM;this.Ia.tM=!1;this.fta(c,a,b)}},fta:function(a,b,d){var e=a.Id-1,f=g(a);if(!1!==this._trigger("beforeReorder",null,{tile:f,fromIndex:e})){this.iL(a);
var h=b.Id-1;d||h++;var k=this.element[0];d||(b=c(b));this.Ts(a,h);k.insertBefore(a,b);this.di.Yn(!0);this._trigger("reorder",null,{tile:f,fromIndex:e,toIndex:h})}},Sk:function(a,b){var c=b?b.item.attr("id"):void 0;c===y?this.mAa(this.Ia.tile):c===x?this.Faa(this.Ia.tile,!0):c===z&&this.Faa(this.Ia.tile,!1)},Z8:function(a){var b=this.Mo(!0);f(b);for(var c=b.length,d=0;d<c;d++)if(b[d]===a)return d;return-1},vda:function(){var a=this.element,b=a.children();this.OW(b);a.on("dragstart"+this.jx,this.y9).on("dragenter"+
this.jx,this.v9).on("dragover"+this.jx,this.x9).on("dragleave"+this.jx,this.w9).on("dragend"+this.jx,this.t9).on("drop"+this.jx,this.z9)},OW:function(a){var b=this.options;a.filter(b.reorderHandle).attr(p,"true").addClass(n);a.find(b.reorderHandle).attr(p,"true").addClass(n)},fea:function(){var a=this.element,b=a.children();this.cX(b);a.off(this.jx)},cX:function(a){var b=this.options;a.filter(b.reorderHandle).removeAttr(p).removeClass(n);a.find(b.reorderHandle).removeAttr(p).removeClass(n)},sU:function(a){var b=
this.options;if(b.reorderHandle){var c=a.originalEvent.target,c=g(c).closest(b.reorderHandle);if(!c||1>c.length)return}b.reorderHandle&&!this.vo&&(c=a.target,b=d(c,this.element[0]))&&(c=this.Z8(b),b.nV=c,c={tile:g(b),fromIndex:c},!1!==this._trigger("beforeReorder",null,c)&&(a=a.originalEvent,this.HS(b,a.pageX,a.pageY,a.dataTransfer)))},pU:function(b){if(this.vo){b=b.originalEvent;var c=b.relatedTarget,d=this.element[0],e=!1;c?e=d!=c&&!a.D.Dp(d,c):this.I6&&(e=(c=document.elementFromPoint(b.clientX,
b.clientY))&&(c==d||a.D.Dp(d,c)));e&&((this.I6=!1,this.Es)?this.uf&&(g(this.uf).css("display",""),this.di.Yn(!1,!0)):b.dataTransfer.dropEffect="none")}},rU:function(a){if(!this.vo)return!1;var b=a.originalEvent;b.dataTransfer.dropEffect="move";this.nta(b.pageX,b.clientX,b.clientY);a.preventDefault();return!1},qU:function(b){if(this.vo){var c=b.originalEvent,d=c.relatedTarget;b=this.element[0];var e=!1;e=d?b!=d&&!a.D.Dp(b,d):(c=document.elementFromPoint(c.clientX,c.clientY))&&c!=b&&!a.D.Dp(b,c);e&&
(this.I6=!0,this.uf&&(g(this.uf).css("display",s),this.di.Yn(!1,!0)))}},n5:function(){if(this.WI){clearTimeout(this.WI);this.WI=null;var a=this.Es;a&&g(a).removeClass("oj-drag")}},oU:function(){this.n5();if(this.vo&&!this.oR){var b=this.Es;if(b&&this.uf){var c=this.uf;a.D.Dp(this.element[0],b)&&(g(c).css("display",""),this.iL(c),c.parentNode.removeChild(c),g(b).css("display",""),this.Ts(b,b.Id-1),this.di.Yn(!1,!0));delete b.nV}this.uf=this.Es=null;this.nI=this.lI=!1;this.GS=null;this.vo=this.mR=!1}},
tU:function(a){if(!this.vo)return!1;var b=this.di;b.nN()&&b.GM();this.n5();b=a.originalEvent;this.xta(this.Es,b.pageX,b.pageY);a.stopPropagation();return!1},HS:function(b,c,d,e){this.vo=!0;this.nR=this.nI=this.oR=!1;this.Es=b;var f=this.element[0],h=k(b),n=this.uf=document.createElement("div");n.Id=b.Id;n.className=h+" oj-drop";var h=n.style,l=b.style;h.top=l.top;this.Ui?h.right=l.right:h.left=l.left;h=g(b).offset();f.insertBefore(n,b);this.GS=c={left:c-h.left,top:d-h.top};g(b).addClass("oj-drag");
e.effectAllowed="move";e.setData("text/html",b.outerHTML);e.setDragImage(b,c.left,c.top);var u=this;this.WI=setTimeout(function(){u.nR=!0;l.display=s;g(b).removeClass("oj-drag");u.WI=null;a.Components.ju(b)},0)},nta:function(a,b,e){this.nI=!0;if(this.nR&&!this.lI){var f=this.element[0];b=document.elementFromPoint(b,e);b=d(b,f);e=!1;if(b){var h=g(b),k=this.options.reorderHandle;k&&(e=(e=h.find(k))&&0<e.length)}b&&b!==this.uf&&b!==this.Es&&e&&(h=g(f).offset(),e=c(this.uf),a=a-h.left>=b.offsetLeft+.5*
b.offsetWidth,this.iL(this.uf),a&&!this.Ui||!a&&this.Ui?(a=c(b))?(this.Ts(this.uf,a.Id-1),f.insertBefore(this.uf,a)):(this.Ts(this.uf,b.Id),f.appendChild(this.uf)):(this.Ts(this.uf,b.Id-1),f.insertBefore(this.uf,b)),e!==c(this.uf)&&(this.lI=this.di.Yn(!1,!0)))}},Iwa:function(){this.lI=!1},xta:function(b,c,d){this.oR=!0;var e=this.element[0],f=this.uf;this.uf=null;a.Components.Ch(b);e.replaceChild(b,f);a.Components.rg(b);b.Id=f.Id;f=b.style;f.display="";a.Components.Mr(b);var h=g(e).offset(),k=this.GS;
f.top=d-k.top-h.top+r;c=c-k.left-h.left;this.Ui?(f.right=e.offsetWidth-(c+g(b).outerWidth(!0))+r,f.left=""):f.left=c+r;this.GS=null;this.nI?this.mR=this.di.Yn(!1,!0):this.u9()},u9:function(){this.nR=this.nI=this.oR=this.vo=this.mR=!1;var a=this.Es;this.Es=null;var b=a.nV;delete a.nV;var c=this.Z8(a),a={tile:g(a),fromIndex:b,toIndex:c};this._trigger("reorder",null,a)},getNodeBySubId:function(a){return this._super(a)},getSubIdByNode:function(a){return this._super(a)}});var r="px",t="hidden",s="none",
p="draggable",q="oj-disabled",n="oj-draggable",u=".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2",v="oj-masonrylayout-tile-transition-show-from",w="JET MasonryLayout: 'disabled' option not supported",y="ojmasonrylayoutcut",x="ojmasonrylayoutpastebefore",z="ojmasonrylayoutpasteafter",C={cut:y,"paste-before":x,"paste-after":z},
D={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter"}})();a.Components.Xa("ojMasonryLayout","baseComponent",{properties:{disabled:{type:"boolean"},reorderHandle:{type:"string"}},methods:{insertTile:{},refresh:{},removeTile:{},resizeTile:{}},extension:{_widgetName:"ojMasonryLayout"}});a.Components.register("oj-masonry-layout",a.Components.getMetadata("ojMasonryLayout"))});