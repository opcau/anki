/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","jqueryui-amd/widget"],function(a,g,b){function c(){this.Init()}function d(a,b){var c={};c.value=b.value;return c}function e(a,b,c){b={};var d=c.optionMetadata;if(d&&"shouldWrite"===d.writeback){var e=c.option;b[e]=c.value;d.readOnly&&(a.vja[e]=!0)}return b}function f(a,b,c){"pieCenter"===a&&b.template&&(b.renderer=x(c,b.template));return{pieCenter:b}}function h(a,c){return function(d){var e,h;e=d.parentElement;h=a.createChildContext(d.data,null,function(a){a.$optionContext=
d});b.renderTemplate(c,h,null,e);return null}}function k(a,b,c){return"optionTemplate"===a&&null!==b?{optionRenderer:h(c,String(b))}:null}function l(a,b){this.Init(a,b)}function m(b,c,d,e,h){b=s(b,c,d,e);d=b.pGa;if(null==d)return h;var f={};p(d,function(a,b){f[a]=b});h=a.Uc.yf({},h);h[c]=r(e,f,b.sGa);return h}function r(b,c,d){function e(){var d={};Object.keys(c).forEach(function(e){var h=a.ya.XH(c[e]).bind(null,b);Object.defineProperty(d,e,{get:h,enumerable:!0})});Object.defineProperty(d,a.ya.R2,
{value:c});return d}e.toString=function(){return d};return e}function t(a,b,c){var d=b.getBindingsString;if(d)return d.call(b,a,c);switch(a.nodeType){case 1:return a.getAttribute("data-bind");case 8:return(a=a.nodeValue.match(/^\s*ko(?:\s+([\s\S]+))?\s*$/))?a[1]:null}return null}function s(a,c,d,e){var h=null;a=t(a,d,e);a=b.jsonExpressionRewriting.parseObjectLiteral(a);var f=null;p(a,function(a,b){return a===c?(f=b,!0):!1});null!=f&&0===f.indexOf("{")&&(h=b.jsonExpressionRewriting.parseObjectLiteral(f));
return{pGa:h,sGa:f}}function p(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=d.key,d=d.value;if(null!=e&&null!=d&&b(e.trim(),d.trim()))break}}function q(a,c){return function(d){var e,h,f;e=d.parentElement;h=a.createChildContext(d.data,null,function(a){a.$key=d.key;a.$metadata=d.metadata;a.$headerContext=d});f=u(c,d);b.renderTemplate(f,h,{afterRender:function(a){g(a)._ojDetectCleanData()}},e);return null}}function n(a,c){return function(d){var e,h,f;e=d.parentElement;h=a.createChildContext(d.data,
null,function(a){a.$keys=d.keys;a.$metadata=d.metadata;a.$cellContext=d;a.$cell=d.cell});f=u(c,d);b.renderTemplate(f,h,{afterRender:function(a){g(a)._ojDetectCleanData()}},e);return null}}function u(a,b){return"function"===typeof a?a(b):a}function v(a,c){return function(d){var e=a.createChildContext(d.data);b.renderTemplate(c,e,{afterRender:function(a){g(a)._ojDetectCleanData()}},d.parentElement);return null}}function w(a,c){return function(d){var e,h;e=d.parentElement;h=a.createChildContext(d.data,
null,function(a){a.$itemContext=d});b.renderTemplate(c,h,{afterRender:function(a){g(a)._ojDetectCleanData()}},e,"replaceNode");return null}}function y(a,b,c){return"item"==a?(a=b.template,null!=a&&(b.renderer=w(c,a)),{item:b}):null}function x(a,c){return function(d){var e=document.createElement("div");e.style.display="none";d=a.createChildContext(d);b.renderTemplate(c,d,{afterRender:function(a){g(a)._ojDetectCleanData()}},e);return(d=e.children[0])?(e.removeChild(d),g(e).remove(),d):null}}function z(a,
b,c){"center"===a&&b.template&&(b.renderer=x(c,b.template));return{center:b}}function C(a,c,d){var e={};(function(c,d){e=function(e){var h=null,f=null;"header"==d?(h=a.createChildContext(null,null,function(a){a.$columnIndex=e.columnIndex;a.$headerContext=e.headerContext;a.$data=e.data}),f=e.headerContext.parentElement):"cell"==d&&(h=a.createChildContext(e.row,null,function(a){a.$columnIndex=e.columnIndex;a.$cellContext=e.cellContext}),f=e.cellContext.parentElement);"footer"==d&&(h=a.createChildContext(null,
null,function(a){a.$columnIndex=e.columnIndex;a.$footerContext=e.footerContext}),f=e.footerContext.parentElement);b.renderTemplate(c,h,{afterRender:function(a){g(a)._ojDetectCleanData()}},f,"replaceNode")}})(d,c);return e}function D(a,c){return function(d){var e=a.createChildContext(d.row,null,function(a){a.$rowContext=d.rowContext});b.renderTemplate(c,e,{afterRender:function(a){g(a)._ojDetectCleanData()}},d.rowContext.parentElement,"replaceNode")}}function B(a,c){return function(d){var e=a.createChildContext(d.data);
b.renderTemplate(c,e,{afterRender:function(a){g(a)._ojDetectCleanData()}},d.parentElement);return null}}function K(a,b,c){if("areaLayers"===a){for(a=0;a<b.length;a++){var d=b[a].areaDataLayer;if(d){var e=d.template;null!=e&&(d._templateRenderer=B(c,e))}}return{areaLayers:b}}if("pointDataLayers"===a){for(a=0;a<b.length;a++)e=b[a].template,null!=e&&(b[a]._templateRenderer=B(c,e));return{pointDataLayers:b}}return null}function I(a,c){return function(d){var e=document.createElement("div");e.style.display=
"none";d=a.createChildContext(d);b.renderTemplate(c,d,{afterRender:function(a){g(a)._ojDetectCleanData()}},e);return(d=e.children[0])?(e.removeChild(d),g(e).remove(),d):null}}function Q(a,b,c){"tooltip"===a&&b.template&&(b.renderer=I(c,b.template));return{tooltip:b}}a.b.sa(c,a.b,"ComponentBinding.GlobalChangeQueue");c.prototype.Init=function(){c.u.Init.call(this);this.KL=[];this.pE=[]};c.prototype.PKa=function(b){-1===this.KL.indexOf(b)&&(this.KL.push(b),this.HI||(this.HI=setTimeout(a.b.ufa(this,
this.p6),1)))};c.prototype.oY=function(){this.HI&&clearTimeout(this.HI);this.p6()};c.prototype.p6=function(){var a;this.HI=null;var b=this.KL;this.KL=[];for(a=0;a<b.length;a++){var c=b[a];this.pE.push({O_:c,wt:c.JHa()})}for(;0<this.pE.length;)a=this.pE.shift(),a.O_.fGa(a.wt)};a.ya=function(a,b){this.Init(a,b)};o_("ComponentBinding",a.ya,a);a.b.sa(a.ya,a.b,"oj.ComponentBinding");a.ya.create=function(c,d){if(null==c)throw"Binding name is required!";var e=new a.ya(c,d),h=b.bindingHandlers,f,k=Array.isArray(c)?
c:[c];for(f=0;f<k.length;f++){var g=k[f];a.ya.g3.push(g);h[g]=e}return e};o_("ComponentBinding.create",a.ya.create,a);a.ya.Tg=function(){return a.ya.kna};o_("ComponentBinding.getDefaultInstance",a.ya.Tg,a);a.ya.prototype.$g=function(a){var b=a["for"],b=null==b?"@global":b,c=this.HK[b]||[];c.push(a);this.HK[b]=c};a.b.g("ComponentBinding.prototype.setupManagedAttributes",{$g:a.ya.prototype.$g});a.ya.oY=function(){a.ya.f5.oY()};o_("ComponentBinding.deliverChanges",a.ya.oY,a);a.ya.prototype.Init=function(b,
c){a.ya.u.Init.call(this);"string"===typeof c&&(c={componentName:c});this.pR=c||{};Array.isArray(b);this.init=this._init.bind(this);this.update=this.ot.bind(this);this.HK={}};a.ya.prototype._init=function(a,c,d,e,h){b.applyBindingsToDescendants(h,a);return{controlsDescendantBindings:!0}};a.ya.prototype.ot=function(c,d,e,h,f){function k(b){m.forEach(function(a){a.dispose()});m=[];b&&r&&(r("destroy"),r=null);q&&(q.gA(),q=null);s.off(a.ya.k2)}function n(b,d,h){if(null!=b){var k=s[b];if("function"!==
typeof k)a.t.error("Component %s is not found",b);else{k=k.bind(s);q=new l(k,a.ya.f5);var g=Object.keys(h).filter(function(a){return!(null==a||a===d)});r=this.Fya(c,{R:k,lF:q,ofa:b,wG:g,PGa:m,mu:function(){return h},Yz:e,Bw:f,sHa:function(){r=null},vja:{}})}}}var m=[],t=0,r,q,s=g(c);b.ignoreDependencies(function(){b.computed(function(){var c=b.utils.unwrapObservable(d());"object"!==typeof c&&a.t.error("ojComponent binding should evaluate to an object");var e=this.pR.componentName,h,f=!1;if(null==
e&null!=c){for(var g=[a.ya.uma,"role"],l=0;!f&&l<g.length;l++)h=g[l],h in c&&(f=!0,e=c[h]);f||a.t.error("component attribute is required for the ojComponent binding");e=b.utils.unwrapObservable(e)}0==t?t=1:b.ignoreDependencies(k,this,[!0]);b.ignoreDependencies(n,this,[e,h,c])},this,{disposeWhenNodeIsRemoved:c})},this);b.utils.domNodeDisposal.addDisposeCallback(c,k.bind(this,!1))};a.ya.prototype.Fya=function(c,d){function e(){var b=this.FBa,h=a.ya.gFa(d.mu()[b]);if(0===k){var g=q[b];null!=g?(l[b]=
g,g=g.pr,null!=g&&(b=g(b,h,c,m,d.mu,d.Yz,d.Bw)||{},a.Uc.yf(u,b))):u[b]=h}else if(!f)if(null!=q[b]){if(g=q[b].update,null!=g)for(b=g(b,h,c,m,d.mu,d.Yz,d.Bw)||{},h=Object.keys(b),g=0;g<h.length;g++){var n=h[g];d.lF.Oea(n,b[n])}}else d.vja[b]||d.lF.Oea(b,h)}function h(b){b.target&&b.target==c&&(d.sHa(),(b=r.pR.beforeDestroy)&&b(c,m,d.mu,d.Yz,d.Bw),a.ya.q6(!1,l,c,m,d.mu,d.Yz,d.Bw),f=!0,d.lF.gA(),c.removeEventListener("_ojDestroy",h))}var f=!1,k=0,l={},n=g(c),m=d.R,t=d.ofa,r=this;c.addEventListener("_ojDestroy",
h);var q=a.ya.wca(this.HK,d.wG,t),s=a.ya.Tg();this!==s&&(t=s.nva(d.wG,t),a.Uc.yf(t,q),q=t);for(var u={},t=0;t<d.wG.length;t++)d.PGa.push(b.computed(e,{FBa:d.wG[t]}));k=1;a.ya.gCa(n,d);var w=a.ya.R3(u);m(u);Object.keys(w).forEach(function(a){m("option",a,w[a])});(n=this.pR.afterCreate)&&n(c,m,d.mu,d.Yz,d.Bw);a.ya.q6(!0,l,c,m,d.mu,d.Yz,d.Bw);u=null;return m};a.ya.XH=function(a){return new Function("$context","with($context){with($data||{}){return "+a+";}}")};a.ya.prototype.nva=function(b,c){return a.ya.wca(this.HK,
b,c)};a.ya.wca=function(a,b,c){function d(b,c){var e=a[b];if(null!=e)for(var f=e.length-1;0<=f;f--){var k=e[f];null!=k.attributes&&h.push(k);if(c&&(k=k.use,null!=k))for(var k=Array.isArray(k)?k:[k],g=0;g<k.length;g++)d(k[g],!0)}}var e={},h=[];d(c,!0);c=g.oj[c];if(null!=c)for(c=Object.getPrototypeOf(c.prototype);null!=c&&"oj"===c.namespace;)d(c.widgetName,!0),c=Object.getPrototypeOf(c);d("@global",!1);if(0<h.length)for(c=0;c<b.length;c++)for(var f=b[c],k=0;k<h.length;k++){var l=h[k];if(0<=l.attributes.indexOf(f)){e[f]=
{pr:l.init,update:l.update,Wz:l.afterCreate,rGa:l.beforeDestroy};break}}return e};a.ya.k2=".oj_ko";a.ya.gCa=function(b,c){for(var h={"^slider$":[{event:"slidechange",getter:d}],"^oj*":[{event:"ojoptionchange",getter:e.bind(void 0,c)}]},f={},k=Object.keys(h),g=0;g<k.length;g++){var l=k[g];if(c.ofa.match(l)){h=h[l];for(k=0;k<h.length;k++)g=h[k],b.on(g.event+a.ya.k2,{DIa:g.getter},function(d,e){if(d.target===b[0]){var h=d.data.DIa(d,e),k=c.mu(),g;for(g in h){c.lF.OLa(g);try{if(0<=c.wG.indexOf(g)){var l=
k[a.ya.R2];a.ya.WFa(g,k[g],h[g],null==l?null:l[g],c.Bw,f)}}finally{c.lF.kLa(g)}}}});break}}};a.ya.WFa=function(c,d,e,h,f,k){null!=d&&b.isObservable(d)?b.isWriteableObservable(d)&&d(e):(c in k||(d=null,h=a.YH.Gga(h),null!=h&&(d=a.ya.XH(h)),k[c]=d),(c=k[c])&&c(f)(e))};a.ya.gFa=function(c){c=b.utils.unwrapObservable(c);(Array.isArray(c)||a.Uc.isPlainObject(c))&&c.ojConvertToJS&&(c=b.toJS(c));return c};a.ya.R3=function(a){for(var b={},c=Object.keys(a),d=0;d<c.length;d++){var e=c[d];0<=e.indexOf(".")&&
(b[e]=a[e],delete a[e])}return b};a.ya.q6=function(a,b,c,d,e,h,f){for(var k=Object.keys(b),g=0;g<k.length;g++){var l=k[g],n=b[l];(n=a?n.Wz:n.rGa)&&n(l,c,d,e,h,f)}};a.ya.f5=new c;a.ya.fpa=function(){return a.py()&&b?b.version:""};a.ya.zza=function(b){return 0<=a.ya.g3.indexOf(b)};a.ya.g3=[];a.ya.uma="component";a.ya.R2="_ojOptions";(function(){var c=b.removeNode;b.removeNode=function(b){var d=a.Components;d&&a.D.Uja(b);try{c(b)}finally{d&&a.D.Uja(null)}}})();a.ya.kna=a.ya.create(["ojComponent","jqueryUI"]);
g.widget("oj._ojDetectCleanData",{_destroy:function(){var a,c;a=b.utils.domNodeDisposal;c=a.cleanExternalData;a.cleanExternalData=function(){};try{b.cleanNode(this.element[0])}finally{a.cleanExternalData=c}}});a.ya.Tg().$g({attributes:["pieCenter"],init:function(a,b,c,d,e,h,k){return f(a,b,k)},update:function(a,b,c,d,e,h,k){return f(a,b,k)},"for":"ojChart"});a.ya.Tg().$g({attributes:["optionTemplate"],init:function(a,b,c,d,e,h,f){a=k(a,b,f);if(null!==a)return a},update:function(a,b,c,d,e,h,f){return k(a,
b,f)},"for":"ComboboxOptionRenderer"});a.ya.Tg().$g({"for":"ojCombobox",use:"ComboboxOptionRenderer"});a.ya.Tg().$g({"for":"ojSelect",use:"ComboboxOptionRenderer"});a.ya.Tg().$g({"for":"ojInputSearch",use:"ComboboxOptionRenderer"});a.b.sa(l,a.b,"ComponentBinding.ComponentChangeTracker");l.prototype.Init=function(a,b){l.u.Init.call(this);this.xa=a;this.pE=b;this.NR={};this.Lz={}};l.prototype.Oea=function(a,b){this.Fza(a)||this.C6||(this.NR[a]=b,this.pE.PKa(this))};l.prototype.gA=function(){this.C6=
!0};l.prototype.kLa=function(b){var c=this.Lz[b]||0;c--;0>c?a.t.error("ComponentChangeTracker suspendCount underflow"):0==c?delete this.Lz[b]:this.Lz[b]=c};l.prototype.OLa=function(a){this.Lz[a]=(this.Lz[a]||0)+1};l.prototype.fGa=function(b){if(!this.C6){var c=a.ya.R3(b),d={changed:!0};this.xa("option",b,d);for(var e in c)this.xa("option",e,c[e],d)}};l.prototype.JHa=function(){var a=this.NR;this.NR={};return a};l.prototype.Fza=function(a){return 1<=(this.Lz[a]||0)};b.bindingHandlers.ojContextMenu=
{update:function(c,d){function e(a,b,c){t=c;var d=f();if(t)n.one("touchend.ojContextMenu",function(){d.ny(!0);setTimeout(function(){d.ny(!1)},50)});"touchstart"===s&&"contextmenu"===a.type||"contextmenu"===s&&"touchstart"===a.type?(s=null,clearTimeout(q)):!a.isDefaultPrevented()&&(b={launcher:n,initialFocus:"menu",position:{mouse:{my:"start top",at:"start bottom",of:a},touch:{my:"start\x3e40 center",at:"start bottom",of:a,collision:"flipfit"},keyboard:{my:"start top",at:"start bottom",of:"launcher"}}[b]},
d.$H=!0,d.open(a,b),d.$H=!1,d.widget().is(":visible")&&(a.preventDefault(),document.addEventListener("keyup",k),"touchstart"===a.type||"contextmenu"===a.type))&&(s=a.type,q=setTimeout(function(){s=null},300))}function h(a,b){return b?g(document.getElementById(b)):g(a).first()}function f(){var b=a.Components.Yc(h(p,y)[0],"ojMenu"),b=b&&b("instance");if(!b)throw Error('ojContextMenu binding bound to "'+(y?y:p)+'", which does not reference a valid JET Menu.');w||(b.widget().on("ojclose.ojContextMenu",
function(){document.removeEventListener("keyup",k)}),w=!0);return b}function k(a){121==a.which&&a.shiftKey&&h(p,y).is(":visible")&&a.preventDefault()}function l(a){if(t)return a.preventDefault(),a.stopPropagation(),t=!1}var n=g(c),m,t=!1,r=!1,q,s=null;n.off(".ojContextMenu").removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click",l,!0);clearTimeout(m);var u=n.data("_ojLastContextMenu");u&&h(u.rLa,u.id).off(".ojContextMenu");var w=!1,p=b.utils.unwrapObservable(d()),y=g.isPlainObject(p)?
c.getAttribute("contextmenu"):null;n.data("_ojLastContextMenu",{rLa:p,id:y});c.addEventListener("click",l,!0);n.on("touchstart.ojContextMenu mousedown.ojContextMenu keydown.ojContextMenu ",function(a){if("mousedown"!==a.type||!f().ny())return t=!1,"touchstart"===a.type&&(r=!0,m=setTimeout(e.bind(void 0,a,"touch",!0),750)),!0}).on("touchend.ojContextMenu touchcancel.ojContextMenu",function(){r=!1;clearTimeout(m);return!0}).on("keydown.ojContextMenu contextmenu.ojContextMenu",function(a){("contextmenu"===
a.type||121==a.which&&a.shiftKey)&&e(a,r?"touch":"keydown"===a.type?"keyboard":"mouse",!1);return!0}).addClass(a.D.jf()?"oj-menu-context-menu-launcher":"")}};a.aR=(new function(){function c(a,b,e){var h=a[e];b[e]=function(){var b=h?h.apply(a,arguments):null,c=d[e];if(null!=c){var f=arguments;c.forEach(function(c){var d=Array.prototype.slice.call(f);d.push(b,a);b=c.apply(null,d)})}return b}}this.nZ=function(){var d=b.bindingProvider,e=d.instance;if(!e.getBindingAccessors)return a.t.error("JET's Knockout bindings are not compatible with the current binding provider since it does not implement getBindingAccessors()"),
this;var h=d.instance={},d=[];d.push("getBindingAccessors","nodeHasBindings","getBindings","preprocessNode");d.forEach(function(a){c(e,h,a)});return this};this.SX=function(a){Object.keys(a).forEach(function(b){d[b]=d[b]||[];d[b].push(a[b])})};var d={}}).nZ();a.aR.SX({getBindingAccessors:function(b,c,d,e){if(null==d)return null;var h;a:{h=Object.keys(d);for(var f=-0;f<h.length;f++){var k=h[f];if(a.ya.zza(k)){h=k;break a}}h=null}null!=h&&(d=m(b,h,e,c,d));return d}});a.aR.SX({nodeHasBindings:function(b,
c){return c||1===b.nodeType&&a.Components&&a.Components.Wha(b.nodeName)},getBindingAccessors:function(b,c,d){1===b.nodeType&&(b=b.nodeName,a.Components&&a.Components.Wha(b)&&(d=d||{},d._ojCustomElement=function(){}));return d}});a.ya.Tg().$g({attributes:["header","cell"],init:function(a,b,c,d,e,h,f){if("header"===a)return a=b.row,null!=a&&(c=a.template,null!=c&&(a.renderer=q(f,c))),a=b.column,null!=a&&(c=a.template,null!=c&&(a.renderer=q(f,c))),a=b.rowEnd,null!=a&&(c=a.template,null!=c&&(a.renderer=
q(f,c))),a=b.columnEnd,null!=a&&(c=a.template,null!=c&&(a.renderer=q(f,c))),{header:b};if("cell"===a)return a=b.template,null!=a&&(b.renderer=n(f,a)),{cell:b}},update:function(a,b,c,d,e,h,f){return"header"===a?(a=b.row,null!=a&&(c=a.template,null!=c&&(a.renderer=q(f,c))),a=b.column,null!=a&&(c=a.template,null!=c&&(a.renderer=q(f,c))),a=b.rowEnd,null!=a&&(c=a.template,null!=c&&(a.renderer=q(f,c))),a=b.columnEnd,null!=a&&(c=a.template,null!=c&&(a.renderer=q(f,c))),{header:b}):"cell"===a?(a=b.template,
null!=a&&(b.renderer=n(f,a)),{cell:b}):null},"for":"ojDataGrid"});a.ya.Tg().$g({attributes:["template"],init:function(a,b,c,d,e,h,f){return"template"===a?{_templateFunction:v(f,b)}:null},update:function(a,b,c,d,e,h,f){return"template"===a?{_templateFunction:v(f,b)}:null},"for":"ojDiagram"});(function(){a.YH={};a.YH.sF=function(a){var d={};if(a){var e=b.exec(a),e=e?e[1]:null;e||(d.Jfa=!0,e=(e=c.exec(a))?e[1]:null);d.expr=e}return d};a.YH.Gga=function(a){var b=["true","false","null","undefined"];if(null==
a||0<=b.indexOf(a))return null;b=a.match(d);return null===b?null:"function(v){"+(b[1]?"Object("+b[1]+")"+b[2]:a)+"\x3dv;}"};var b=/(?:\{\{\s*)([^\s]+)(?:\s*\}\})/,c=/(?:\[\[\s*)([^\s]+)(?:\s*\]\])/,d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i})();(function(){b.bindingHandlers._ojCustomElement={update:function(d,e,h,f,k){function g(){m&&(m.vO(),m=null);t&&(d.removeEventListener(c,t),t=null)}function l(){var b=a.Components.getMetadata(d.tagName);if(b){var e=b.properties;e&&(b=Object.keys(e),
0!==b.length&&(m=new a.M3(d,k),b.forEach(function(b){var c=a.sf.eB(b);d.hasAttribute(b)&&(c=d.getAttribute(c),m.E_(c,b,e[b]))}),t=function(b){b=b.detail;var c=a.sf.YX(b.attribute);m.E_(b.value,c,e[c])},d.addEventListener(c,t),d.classList.add("oj-complete")))}}var n=0,m,t,r=a.Components.UHa(d);b.ignoreDependencies(function(){b.computed(function(){function c(a,b){return function(a,c){a===n&&b(c)}.bind(void 0,a)}e();b.computedContext.isInitial()||g();n++;r.then(c(n,function(){l()}),c(n,function(b){a.t.error("Component create Promise rejected. Reason: %o",
b)}))},null,{disposeWhenNodeIsRemoved:d})});b.utils.domNodeDisposal.addDisposeCallback(d,g)}};var c="attribute-changed"})();a.M3=function(c,d){function e(h,f,n,m){function t(c){var e=!1;g[h]||(m&&b.ignoreDependencies(function(){var h=c.detail.value,k=n(d);b.isWriteableObservable(k)?(e=!0,k(h)):(k=a.YH.Gga(f),null!=k&&(a.ya.XH(k)(d)(h),e=!0))}),e||(k[h]=!0))}c.addEventListener(h+l,t);return t}this.E_=function(n,m,t){n=a.sf.sF(n);k[m]&&(k[m]=null);var r=h[m];r&&(r.dispose(),h[m]=null);if(r=f[m])c.removeEventListener(m+
l,r),f[m]=null;var r=t.readOnly,q=n.expr;if(q){var s=a.ya.XH(q);r||b.ignoreDependencies(function(){h[m]=b.computed(function(){if(!k[m]){var e=s(d),e=b.utils.unwrapObservable(e),h=g[m]||0;h++;g[m]=h;try{c[m]=e}finally{(e=g[m])?(e--,g[m]=0===e?null:e):a.t.error("Property count undefrlow")}}})});f[m]=e(m,q,s,t.writeback&&!n.Jfa);return!0}return!1};this.vO=function(){for(var a=Object.keys(h),b=0;b<a.length;b++)h[a[b]].dispose();h={};a=Object.keys(f);for(b=0;b<a.length;b++){var d=a[b];c.removeEventListener(d+
l,f[d])}f={}};var h={},f={},k={},g={},l="-changed"};a.BZ={};o_("koStringTemplateEngine",a.BZ,a);a.BZ.nZ=function(){if(!b.templates){var a={},c={},d=new b.nativeTemplateEngine,e=function(b){this.Oz=b;this.text=function(b){if(!b)return a[this.Oz];a[this.Oz]=b};this.data=function(a,b){c[this.Oz]||(c[this.Oz]={});if(1===arguments.length)return c[this.Oz][a];c[this.Oz][a]=b}};d.makeTemplateSource=function(a,c){if("string"==typeof a){c=c||document;var d=c.getElementById(a);return d?new b.templateSources.domElement(d):
new e(a)}if(a&&1==a.nodeType||8==a.nodeType)return new b.templateSources.anonymousTemplate(a)};b.templates=a;b.setTemplateEngine(d)}};o_("koStringTemplateEngine.install",a.BZ.nZ,a);a.ya.Tg().$g({attributes:["item"],init:function(a,b,c,d,e,h,f){a=y(a,b,f);if(null!=a)return a},update:function(a,b,c,d,e,h,f){return y(a,b,f)},"for":"ojListViewRenderer"});a.ya.Tg().$g({"for":"ojListView",use:"ojListViewRenderer"});a.ya.Tg().$g({"for":"ojNavigationList",use:"ojListViewRenderer"});a.fo={};o_("ResponsiveKnockoutUtils",
a.fo,a);a.fo.eA=function(a){if(null==a)throw Error("oj.ResponsiveKnockoutUtils.createMediaQueryObservable: aborting, queryString is null");a=window.matchMedia(a);var c=b.observable(a.matches);a.addListener(function(a){c(a.matches)});-1!=navigator.userAgent.indexOf("WebKit")&&-1==navigator.userAgent.indexOf("Chrome")&&g(window).resize(function(){0===g("body").has(".oj-webkit-bug-123293").length&&g("body").append('\x3cdiv aria-hidden\x3d"true" class\x3d"oj-helper-hidden-accessible oj-webkit-bug-123293"\x3e');
g(".oj-webkit-bug-123293").text((new Date).getMilliseconds().toString())});return c};o_("ResponsiveKnockoutUtils.createMediaQueryObservable",a.fo.eA,a);a.fo.ZGa=function(){var c=a.bc.kA(a.bc.Bx.XXL_UP),d=a.bc.kA(a.bc.Bx.XL_UP),e=a.bc.kA(a.bc.Bx.LG_UP),h=a.bc.kA(a.bc.Bx.MD_UP),f=a.bc.kA(a.bc.Bx.SM_UP),k=null==c?null:a.fo.eA(c),g=null==d?null:a.fo.eA(d),l=null==e?null:a.fo.eA(e),n=null==h?null:a.fo.eA(h),m=null==f?null:a.fo.eA(f);return b.computed(function(){if(k&&k())return a.bc.Jm.XXL;if(g&&g())return a.bc.Jm.XL;
if(l&&l())return a.bc.Jm.LG;if(n&&n())return a.bc.Jm.MD;if(m&&m())return a.bc.Jm.SM;throw Error(" NO MATCH in oj.ResponsiveKnockoutUtils.createScreenRangeObservable");})};o_("ResponsiveKnockoutUtils.createScreenRangeObservable",a.fo.ZGa,a);a.ya.Tg().$g({attributes:["center"],init:function(a,b,c,d,e,h,f){return z(a,b,f)},update:function(a,b,c,d,e,h,f){return z(a,b,f)},"for":"ojStatusMeterGauge"});a.ya.Tg().$g({attributes:["columns","columnsDefault","rowTemplate"],init:function(a,b,c,d,e,h,f){if("columns"==
a||"columnsDefault"==a){for(c=0;c<b.length;c++){var k=b[c];d=k.template;e=k.footerTemplate;h=k.headerTemplate;null!=d&&(k.renderer=C(f,"cell",d));null!=e&&(k.footerRenderer=C(f,"footer",e));null!=h&&(k.headerRenderer=C(f,"header",h))}return"columns"==a?{columns:b}:{columnsDefault:b}}if("rowTemplate"==a)return{rowRenderer:D(f,b)}},update:function(a,b,c,d,e,h,f){if("columns"==a||"columnsDefault"==a){var k;for(c=0;c<b.length;c++){var g=b[c];e=g.template;h=g.footerTemplate;k=g.headerTemplate;null!=e&&
(g.renderer=C(f,"cell",e));null!=h&&(g.footerRenderer=C(f,"footer",h));null!=k&&(g.headerRenderer=C(f,"header",k))}"columns"==a?d({columns:b}):d({columnsDefault:b})}else if("rowTemplate"==a)return{rowRenderer:D(f,b)};return null},"for":"ojTable"});a.ya.Tg().$g({attributes:["areaLayers","pointDataLayers"],init:function(a,b,c,d,e,h,f){return K(a,b,f)},update:function(a,b,c,d,e,h,f){return K(a,b,f)},"for":"ojThematicMap"});a.ya.Tg().$g({attributes:["tooltip"],init:function(a,b,c,d,e,h,f){return Q(a,
b,f)},update:function(a,b,c,d,e,h,f){return Q(a,b,f)},"for":"tooltipOptionRenderer"});(function(){for(var b="ojChart ojDiagram ojNBox ojPictoChart ojSunburst ojTagCloud ojThematicMap ojTreemap ojDialGauge ojLedGauge ojRatingGauge ojSparkChart ojStatusMeterGauge ojGantt".split(" "),c=0;c<b.length;c++)a.ya.Tg().$g({"for":b[c],use:"tooltipOptionRenderer"})})()});