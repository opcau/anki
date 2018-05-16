/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","jqueryui-amd/position"],function(a,g){a.U=function(){this.Init()};a.b.sa(a.U,a.b,"oj.PopupService");a.U.prototype.Init=function(){a.U.u.Init.call(this)};a.U.Qe=function(){a.U.RV||(a.U.RV=new a.Sb);return a.U.RV};a.U.prototype.open=function(){a.p.kd()};a.U.prototype.close=function(){a.p.kd()};a.U.prototype.aA=function(){a.p.kd()};a.U.prototype.wO=function(){a.p.kd()};a.U.prototype.destroy=function(){delete a.U.RV};a.U.Ak={NONE:"none",iP:"modal",
Fla:"modeless"};a.U.Dd={Jx:"ojPopupRemove",Ix:"ojPopupClose",$p:"ojPopupRefresh",Hx:"ojPopupAutoDismiss"};a.U.Tr={AP:"topLevel",K0:"nearestAncestor"};a.U.qb={Ih:"popup",vu:"events",Ak:"modality",zB:"launcher",DB:"position",Ur:"layerSelectors",Tr:"layerLevel"};a.Sb=function(){this.Init()};a.b.sa(a.Sb,a.U,"oj.PopupServiceImpl");a.Sb.prototype.open=function(b){a.p.mi(b);var c=b[a.U.qb.Ih];a.p.ve(c,g);var d=b[a.U.qb.zB];a.p.ve(d,g);var e=b[a.U.qb.DB];a.p.Xea(e);var f=b[a.U.qb.vu];a.p.mi(f);var h=b[a.U.qb.Ak];
if(!h||a.U.Ak.Fla!==h&&a.U.Ak.iP!==h)h=a.U.Ak.NONE;var k=b[a.U.qb.Ur];a.p.Vq(k);b=b[a.U.qb.Tr];if(!b||a.U.Tr.AP!==b&&a.U.Tr.K0!==b)b=a.U.Tr.K0;a.D.Vja(c,d);a.T.aGa(c,d,f,h,k,b);c.show();c.removeAttr("aria-hidden");e&&c.position(e);this.jR();a.Components.Mr(c[0])};a.Sb.prototype.close=function(b){a.p.mi(b);b=b[a.U.qb.Ih];a.p.ve(b,g);a.T.VKa(b);b.hide();b.attr("aria-hidden","true");b.css({top:"auto",bottom:"auto",left:"auto",right:"auto"});a.D.Vja(b,null);this.jR();a.Components.ju(b[0])};a.Sb.prototype.aA=
function(b){a.p.mi(b);var c=b[a.U.qb.Ih];a.p.ve(c,g);c=a.T.tF(c);a.p.ve(c,g);var d=b[a.U.qb.vu];d&&a.T.Tea(c,d);(d=b[a.U.qb.Ak])&&a.T.Uea(c,d);b=b[a.U.qb.Ur];a.cb.hm(b)||c.attr("class",b)};a.Sb.prototype.wO=function(b,c,d){var e={};e.event=c;e.argsArray=d;b=a.T.tF(b);a.T.bO(b,this.qFa,e)};a.Sb.prototype.qFa=function(b,c){var d=c.event,e=c.argsArray,f=a.T.OY(b);f&&g.isFunction(f[d])&&f[d].apply(this,e);return a.T.Bj.nu};a.Sb.prototype.jR=function(){var b=a.T.Aha(),c=this.Z4;if(!b&&c){window.removeEventListener("resize",
a.Sb.ft,!0);window.removeEventListener("scroll",a.Sb.ft,!0);b=document.documentElement;b.removeEventListener("mousewheel",a.Sb.ft,!0);b.removeEventListener("DOMMouseScroll",a.Sb.ft,!0);delete this.Z4;for(var d=0;d<a.Sb.LH.length;d++){var e=a.Sb.LH[d];b.removeEventListener(e,c,!0)}if(c=this.Hda)c.destroy(),delete this.Hda}else if(b&&!c){window.addEventListener("resize",a.Sb.ft,!0);window.addEventListener("scroll",a.Sb.ft,!0);b=document.documentElement;b.addEventListener("mousewheel",a.Sb.ft,!0);b.addEventListener("DOMMouseScroll",
a.Sb.ft,!0);c=this.Z4=g.proxy(this.Dta,this);for(d=0;d<a.Sb.LH.length;d++)e=a.Sb.LH[d],b.addEventListener(e,c,!0);a.D.jf()&&(this.Hda=new a.Ck(c))}};a.Sb.prototype.Dta=function(b){var c=g(b.target);if(!a.T.Aha())this.jR();else if(!a.D.Qha(b)&&("focus"!==b.type||c.is(":focusable"))){var d=a.T.Ct();if("keydown"===b.type&&a.T.vJa()&&!a.D.Dp(d[0],c[0]))a.T.zHa(g.Event(b));else{var e=a.T.tF(c);if(d[0]!==e[0]){if(!e.hasClass(a.Sb.mH)){var f=this.rV;f&&f.removeClass(a.Sb.mH);e.addClass(a.Sb.mH);this.rV=
e}}else if(f=this.rV)f.removeClass(a.Sb.mH),delete this.rV;if("focus"!==b.type||"-1"!==c.attr("tabindex")){var c={},e={},h;for(h in b)a.Sb.wma[h]&&!g.isFunction(b[h])&&(e[h]=b[h]);c.event=g.Event(b,e);a.T.bO(d,a.Sb.QBa,c)}}}};a.Sb.QBa=function(b,c){var d=a.T.OY(b),e=c.event;if(d&&g.isFunction(d[a.U.Dd.Hx]))d[a.U.Dd.Hx](e);return a.T.Bj.nu};a.Sb.ft=function(){isNaN(a.Sb.Qba)&&(a.Sb.Qba=window.setTimeout(function(){delete a.Sb.Qba;var b=a.T.Ct();g.isFunction(window.requestAnimationFrame)?a.Sb.Ppa=window.requestAnimationFrame(function(){delete a.Sb.Ppa;
a.T.bO(b,a.Sb.Sba)}):a.T.bO(b,a.Sb.Sba)},a.Sb.moa))};a.Sb.Sba=function(b,c){if(0<c.level)return a.T.Bj.YG;var d=a.T.OY(b);if(d&&g.isFunction(d[a.U.Dd.$p]))d[a.U.Dd.$p]();return a.T.Bj.nu};a.Sb.prototype.destroy=function(){a.Sb.u.destroy.call(this)};a.Sb.mH="oj-focus-within";a.Sb.LH=["focus","mousedown","keydown"];a.Sb.wma={altKey:!0,bubbles:!0,cancelable:!0,ctrlKey:!0,currentTarget:!0,eventPhase:!0,metaKey:!0,relatedTarget:!0,shiftKey:!0,target:!0,timeStamp:!0,view:!0,which:!0,button:!0,buttons:!0,
clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pageX:!0,pageY:!0,screenX:!0,screenY:!0,toElement:!0,"char":!0,charCode:!0,key:!0,keyCode:!0};a.Sb.moa=10;a.T={};a.T.tF=function(b){if(!b)return a.T.Ct();for(;b&&0<b.length&&b.attr("oj.ZOrderUtils._SURROGATE_ATTR")!==a.T.TP;){if(a.T.OU(b[0]))return b;b=b.parent()}return a.T.Ct()};a.T.Ct=function(){var b=g(document.getElementById(a.T.TP));if(0<b.length)return b;b=g("\x3cdiv\x3e");b.attr("role","presentation");b.attr("id",a.T.TP);b.prependTo(g(document.body));
return b};a.T.aGa=function(b,c,d,e,f,h){var k=b[0];if(a.T.OU(k.parentNode))throw Error("JET Popup is already open - id: "+k.getAttribute("id"));c=a.T.tF(h===a.U.Tr.AP?null:c);h=g("\x3cdiv\x3e");var l=b.attr("id");a.cb.hm(l)?h.uniqueId():h.attr("id",[l,"layer"].join("_"));h.attr("role","presentation");h.addClass(f);b.after(h);f=a.T.nS(h);a.Components.Ch(k);b.appendTo(h);h.appendTo(c);a.Components.rg(k);a.T.Uea(h,e);a.T.Tea(h,d,f)};a.T.Tea=function(b,c,d){if(!d){var e=b.attr(a.T.cC);e&&(d=g(document.getElementById(e)))}b.data(a.T.lH,
c);d&&c&&g.isFunction(c[a.U.Dd.Jx])&&(d.surrogate(),d.surrogate("option","beforeDestroy",c[a.U.Dd.Jx]))};a.T.OY=function(b){return b.data(a.T.lH)};a.T.nS=function(b){var c=g("\x3cscript\x3e"),d=b.attr("id");a.cb.hm(d)?c.uniqueId():c.attr("id",[d,"surrogate"].join("_"));c.insertBefore(b);d=c.attr("id");b.attr(a.T.cC,d);return c};a.T.ECa=function(b){var c=b.attr(a.T.cC);b.removeAttr(a.T.cC);c=g(document.getElementById(c));b.insertAfter(c);c.surrogate("option","beforeDestroy",null);c.remove()};a.T.VKa=
function(b){var c=a.T.tF(b);a.T.l_(c,a.T.kra);a.T.kW(c);c.removeData(a.T.lH);c.removeData(a.T.jQ);var d=b[0];a.Components.Ch(d);a.T.ECa(c);a.D.unwrap(b,c);a.Components.rg(d)};a.T.kra=function(b,c){if(0<c.level)return a.T.Bj.YG;var d=b.data(a.T.lH);if(d&&g.isFunction(d[a.U.Dd.Ix]))d[a.U.Dd.Ix]();return a.T.Bj.nu};a.T.Uea=function(b,c){var d=b.data(a.T.jQ);b.data(a.T.jQ,c);a.cb.hm(d)?a.U.Ak.iP===c?a.T.X3(b):a.T.kW(b):d!==c&&(c!==d&&c===a.U.Ak.iP?a.T.X3(b):a.T.kW(b))};a.T.vJa=function(){for(var b=a.T.Ct().children(),
c=b.length-1;-1<c;c--)if(g(b[c]).hasClass(a.T.T2))return!0;return!1};a.T.X3=function(b){var c=g("\x3cdiv\x3e");c.addClass(a.T.T2);c.addClass(b[0].className);c.attr("role","presentation");var d=b.attr("id");a.cb.hm(d)?c.uniqueId():c.attr("id",[d,"overlay"].join("_"));b.before(c);c=c.attr("id");b.attr(a.T.oQ,c)};a.T.kW=function(b){var c=b.attr(a.T.oQ);a.cb.hm(c)||(b.removeAttr(a.T.oQ),g(document.getElementById(c)).remove())};a.T.Bj={nu:0,YG:1,NO:2};a.T.VH={O0:0,N0:1};a.T.bO=function(b,c,d){d||(d={});
d.level=0;d.type=a.T.VH.N0;a.T.NX(b,c,d)};a.T.l_=function(b,c,d){d||(d={});d.level=0;d.type=a.T.VH.O0;a.T.NX(b,c,d)};a.T.NX=function(b,c,d){var e=d.level;b=b.children();for(var f=b.length-1;-1<f;f--){var h=g(b[f]);if(a.T.OU(h[0])){var k;if(d.type===a.T.VH.O0){k=c(h,d);if(k===a.T.Bj.NO)return k;if(k===a.T.Bj.YG)break}d.level=e+1;k=a.T.NX(h,c,d);d.level=e;if(k===a.T.Bj.NO)return k;if(d.type===a.T.VH.N0){k=c(h,d);if(k===a.T.Bj.NO)return k;if(k===a.T.Bj.YG)break}}}return a.T.Bj.nu};a.T.OU=function(b){return 1===
b.nodeType&&b.hasAttribute(a.T.cC)?!0:!1};a.T.Aha=function(){return 0<a.T.Ct().children().length};a.T.TY=function(){var b={popupCount:0},c=a.T.Ct();a.T.l_(c,a.T.WAa,b);return b.popupCount};a.T.WAa=function(b,c){c.popupCount+=1;return a.T.Bj.nu};a.T.tY=function(){var b={},c=[];b.popups=c;c=a.T.Ct();a.T.l_(c,a.T.YAa,b);c=b.popups;return g(c)};a.T.YAa=function(b,c){c.popups.push(b[0]);return a.T.Bj.nu};a.T.iY=function(b,c){function d(b,c){for(var d=["absolute","relative","fixed"],e=b.parents(),f=[],
h=e.length-1;-1<h;h--)f.push(g(e[h]));e=f;e.push(b);for(var f=[],k=0,h=0;h<e.length;h++){var l=e[h],m=l.css("position"),r=a.D.RHa(l.css("opacity")),z=a.D.hr(l.css("z-index")),l=g.inArray(l[0],l.parent().children());-1<g.inArray(m,d)?f.push({weight:[k++,z,l],order:[l]}):1>r?f.push({weight:[k++,1,l],order:[l]}):c&&f.push({weight:[0,0,l],order:[l]})}return f}function e(a,b){for(var c=Math.max(a.length,b.length),d=0;d<c;d++){var e=d<a.length?a[d]:-1,f=d<b.length?b[d]:-1;if(e!==f)return e<f?-1:1}return 0}
a.p.ve(b,g);a.p.ve(c,g);for(var f=d(b,!1),h=d(c,!1),k=Math.max(f.length,h.length),l=0;l<k;l++){var m=l<f.length?f[l].weight:[-1],r=l<h.length?h[l].weight:[-1],m=e(m,r);if(0!==m)return m}f=d(b,!0);h=d(c,!0);k=Math.max(f.length,h.length);for(l=0;l<k;l++)if(m=l<f.length?f[l].order:[-1],r=l<h.length?h[l].order:[-1],m=e(m,r),0!==m)return m;return 0};a.T.zHa=function(a){a.stopPropagation();a.preventDefault()};a.T.lH="oj-popup-events";a.T.jQ="oj-popup-modality";a.T.TP="__oj_zorder_container";a.T.cC="data-oj-surrogate-id";
a.T.oQ="data-oj-overlayid";a.T.T2="oj-component-overlay";g.widget("oj.surrogate",{options:{create:null,beforeDestroy:null},_create:function(){this._super();this.element.uniqueId()},_destroy:function(){this._trigger("beforeDestroy");this.element.removeUniqueId();this._super()}});a.Ck=function(a){this.dea=a;this.Init()};a.b.sa(a.Ck,a.b,"oj.SimpleTapRecognizer");a.Ck.prototype.Init=function(){a.Ck.u.Init.call(this);for(var b=this.O6=g.proxy(this.aJ,this),c=document.documentElement,d=0;d<a.Ck.SH.length;d++)c.addEventListener(a.Ck.SH[d],
b,!0)};a.Ck.prototype.aJ=function(b){var c=this.dea,d=b.type;"touchstart"===d?(this.xw=b,this.xw.XEa=(new Date).getTime()):"touchmove"===d||"touchcancel"===d?delete this.xw:"touchend"===d&&(this.xw&&(b=this.xw.XEa,isNaN(b)?c(this.xw):(new Date).getTime()-b<a.Ck.joa&&c(this.xw)),delete this.xw)};a.Ck.prototype.destroy=function(){delete this.dea;var b=this.O6;delete this.O6;for(var c=document.documentElement,d=0;d<a.Ck.SH.length;d++)c.removeEventListener(a.Ck.SH[d],b,!0)};a.Ck.SH=["touchstart","touchmove",
"touchcancel","touchend"];a.Ck.joa=700;a.Cg=function(){this.Init()};a.b.sa(a.Cg,a.b,"oj.PopupLiveRegion");a.Cg.prototype.Init=function(){a.Cg.u.Init.call(this);isNaN(a.Cg.vE)?a.Cg.vE=1:++a.Cg.vE};a.Cg.prototype.destroy=function(){if(!isNaN(a.Cg.vE)&&(--a.Cg.vE,1>a.Cg.vE)){var b=g(document.getElementById(a.Cg.xQ));0<b.length&&b.remove()}};a.Cg.prototype.eGa=function(b){if(!a.cb.vi(b)){var c=a.Cg.mva();c.children().remove();g("\x3cdiv\x3e").text(b).appendTo(c)}};a.Cg.mva=function(){var b=g(document.getElementById(a.Cg.xQ));
0===b.length&&(b=g("\x3cdiv\x3e"),b.attr({id:a.Cg.xQ,role:"log","aria-live":"polite","aria-relevant":"additions"}),b.addClass("oj-helper-hidden-accessible"),b.appendTo(document.body));return b};a.Cg.xQ="__oj_popup_arialiveregion";a.Al=function(b,c,d,e){a.p.ve(b,g);a.p.Vq(c);a.p.ut(d);a.p.WX(e);this.AL=b;this.uz=c;this.JR=d;this.Rl=e?e:"";this.Init()};a.b.sa(a.Al,a.b,"oj.PopupSkipLink");a.Al.prototype.Init=function(){a.Al.u.Init.call(this);var b=this.AL,c=this.JR,d=this.uz;delete this.uz;var e=this.Rl;
delete this.Rl;var f=g("\x3ca\x3e").attr({tabindex:"-1",href:"#"});a.cb.vi(e)||f.attr("id",e);f.addClass("oj-helper-hidden-accessible");f.text(d);f.insertAfter(b);f.on("click",c);b.data(a.Al.PH,f)};a.Al.prototype.destroy=function(){var b=this.AL;delete this.AL;var c=this.JR;delete this.JR;if(b){var d=b.data(a.Al.PH);b.removeData(a.Al.PH);d&&(d.off("click",c),d.remove())}};a.Al.prototype.getLink=function(){var b=this.AL,c;b&&(c=b.data(a.Al.PH));return c};a.Al.PH="oj-skiplink";a.Ed={};a.Ed.ml=function(b,
c){for(var d=g.extend({},b),e=0;e<a.Ed.y1.length;e++){var f=a.Ed.y1[e],h=d[f];h&&(d[f]=h.replace("start",c?"right":"left").replace("end",c?"left":"right").replace("\x3c",c?"+":"-").replace("\x3e",c?"-":"+"))}return d};a.Ed.rKa=function(a,c,d){return"event"===a?d:null==a||"launcher"===a?c:a};a.Ed.OAa=function(a){g.each(["pageX","pageY"],function(c,d){if(a&&void 0===a[d]&&a.originalEvent){var e=a.originalEvent,f=e.type;(f="touchstart"===f||"touchmove"===f?"touches":"touchend"===f?"changedTouches":null)&&
(e=e[f][0])&&(a[d]=e[d])}})};a.Ed.y1=["my","at"];a.Ed.pZ=function(b){return b.target&&0<b.target.height&&0<b.target.width?!a.Ed.UJa(b.target.element):!1};a.Ed.UJa=function(b){function c(b,c){if(-1<["hidden","scroll","auto"].indexOf(c.overflowY)){if(-1>b.bottom-c.top)return!1;var d="auto"===c.overflowX||"scroll"===c.overflowX?a.D.RM():0;if(1>c.bottom-d-b.top)return!1}if(-1<["hidden","scroll","auto"].indexOf(c.overflowX)){d="auto"!==c.overflowY&&"scroll"!==c.overflowY||"rtl"!==a.D.In()?0:a.D.RM();if(-1>
b.right-(c.left+d))return!1;d="auto"!==c.overflowX&&"scroll"!==c.overflowX||"ltr"!==a.D.In()?0:a.D.RM();if(-1<b.left-(c.right-d))return!1}return!0}function d(a){return"visible"!==a.css("overflow-x")||"visible"!==a.css("overflow-y")}function e(a){var b=a[0];return 1===b.nodeType?(b=g.extend({},b.getBoundingClientRect()),b.overflowX=a.css("overflow-x"),b.overflowY=a.css("overflow-y"),b):{height:0,width:0}}function f(b){return-1<["fixed","absolute","relative"].indexOf(b.css("position"))&&(0<Math.abs(a.D.hr(b.css("top")))||
0<Math.abs(a.D.hr(b.css("bottom")))||0<Math.abs(a.D.hr(b.css("left")))||0<Math.abs(a.D.hr(b.css("right"))))}if(!b)return!1;if(g.isWindow(b[0])||f(b))return!0;var h=e(b),k=!0;for(b=b.parent();k&&b&&0<b.length&&"BODY"!==b[0].nodeName&&1===b[0].nodeType&&!f(b);){if(d(b)){var l=e(b);0<l.height&&0<l.width&&(k=c(h,l))}b=b.parent()}return k};g.ui.position.flipcenter={left:function(b,c){var d=b.left;g.ui.position.flip.left.call(this,b,c);var e=c.within,f=e.isWindow?e.scrollLeft:e.offset.left,h=b.left-c.collisionPosition.marginLeft,
e=h+c.collisionWidth-e.width-f;if(0<f-h||0<e)"right"===c.at[0]?d-=c.targetWidth/2:"left"===c.at[0]&&(d+=c.targetWidth/2),f="rtl"===a.D.In()?-1:1,d-=c.elemWidth/2*f,b.left=Math.max(0,d)},top:function(a,c){var d=a.top;g.ui.position.flip.top.call(this,a,c);var e=c.within,e=e.isWindow?e.scrollTop:e.offset.top,f=a.top-c.collisionPosition.marginTop,h=f+c.collisionHeight-c.within.height-e;if(0<e-f||0<h)"top"===c.at[1]?d+=c.targetHeight/2:"bottom"===c.at[1]&&(d-=c.targetHeight/2),d+=c.elemHeight/2,a.top=
Math.max(0,d)}};g.ui.position.flip={left:g.ui.position.flip.left.bind(this),top:function(a,c){var d=c.within,e=d.offset.top+d.scrollTop,f=d.height,g=d.isWindow?d.scrollTop:d.offset.top,k=a.top-c.collisionPosition.marginTop,d=k-g,k=k+c.collisionHeight-f-g,l="top"===c.my[1]?-c.elemHeight:"bottom"===c.my[1]?c.elemHeight:0,m="top"===c.at[1]?c.targetHeight:"bottom"===c.at[1]?-c.targetHeight:0,r=-2*c.offset[1];0>d?(e=a.top+l+m+r+c.collisionHeight-f-e,(0>e||e<Math.abs(d))&&0>k&&d>k&&(a.top+=l+m+r)):0<k&&
(e=a.top-c.collisionPosition.marginTop+l+m+r-g,0<e||Math.abs(e)<k)&&(a.top+=l+m+r)}}});