/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var p;function aa(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){a.Td=function(a,b,e){this.Init(a,b,e)};a.v.F(a.Td,a.Oe);a.Td.JFa=1.5;a.Td.hka=15;a.Td.g4a=40;a.Td.prototype.Init=function(b,d,e){a.Td.C.Init.call(this,b,d,e);this.Gib=!1};a.Td.prototype.ta=function(a,b,e){a&&(this.gq=a._resources,null==this.gq&&(this.gq=[]),this.Df(a));this.wb=b;this.Nb=e;this.W&&(a=this.HD(this.W),this.Mv(a))};a.Td.prototype.Df=function(b){this.W=this.$g.un(b);a.B.vk()||(this.W.animationOnDisplay="none",this.W.animationOnDataChange="none")};a.Td.prototype.Mv=function(a){this.Xb=
a.start;this.Hc=a.end;this.EL=a.gY;this.iF()};a.Td.prototype.iF=function(){this.Qk&&this.Qk.aj(this.EL)};a.Td.prototype.RF=function(a){this.le=this.Lf<a?a:this.Lf;this.Gib||(this.Lz=0,this.bw=this.le)};a.Td.prototype.Uk=function(){return a.B.ba(this.u())};a.Td.prototype.Gb=function(){return this.de};a.Td.prototype.PC=function(){return null};a.Td.prototype.hga=function(){this.UA(0);if(this.pc&&this.zd){var a=this.zd-this.pc;0<a&&(a=this.Lf/a,this.RF(a*(this.Hc-this.Xb)),this.UA(a*(this.Xb-this.pc)))}else{var a=
this.PC(),a=a.gX[a.rp],b=this.Xb,e=this.Hc;null==this.pc?null!=this.zd?(this.pc=this.zd-this.Lf/a*(e-b),this.pc<this.Xb&&(this.pc=this.Xb),a=this.zd-this.pc,a=this.Lf/a,this.RF(a*(this.Hc-this.Xb)),this.UA(a*(this.Xb-this.pc))):(this.pc=this.Xb,this.UA(0),this.zd=this.Lf/a*(e-b)+this.pc,this.zd>this.Hc&&(this.zd=this.Hc)):(this.zd=this.Lf/a*(e-b)+this.pc,this.zd>this.Hc&&(this.zd=this.Hc),a=this.zd-this.pc,a=this.Lf/a,this.RF(a*(this.Hc-this.Xb)),this.UA(a*(this.Xb-this.pc)))}};a.Td.prototype.rga=
function(b){this.Pm?this.Pm.he(null):this.Pm=new a.la(this.u(),"iCanvas");var d=new a.wd;this.Gb()?(d.Ce(this.qj,this.Om,this.qh,this.Lf),this.Pm.fa(this.qj),this.Pm.ua(this.Om+this.sM)):(d.Ce(this.qj,this.Om,this.Lf,this.qh),this.Pm.fa(this.qj+this.sM),this.Pm.ua(this.Om));b.he(d);this.Pm.getParent()!=b&&b.A(this.Pm)};a.Td.prototype.HXa=function(b){var d=this.u(),e=this.PC(),f=b.zoomInProps,h=f.imageSize,k=f.cssUrl,l=f.cssUrlHover,n=f.cssUrlActive,m=f.cssUrlDisabled,r=f.enabledBackgroundColor,q=
f.enabledBorderColor,w=f.hoverBackgroundColor,x=f.hoverBorderColor,v=f.activeBackgroundColor,z=f.activeBorderColor,u=f.disabledBackgroundColor,D=f.disabledBorderColor,k=a.Fk.cN(d,k,h,h,r,q),l=a.Fk.cN(d,l,h,h,w,x),n=a.Fk.cN(d,n,h,h,v,z),h=a.Fk.cN(d,m,h,h,u,D),B=f.posX,f=f.posY;null==this.Xm?(this.Xm=new a.Fk(d,k,l,n,h,this.I,this.I.J7),this.I.nb(this.Xm,this.Xm)):(this.Xm.LN(k),this.Xm.EN(l),this.Xm.yN(n),this.Xm.Sya(h));b=b.zoomOutProps;h=b.imageSize;k=b.cssUrl;l=b.cssUrlHover;n=b.cssUrlActive;m=
b.cssUrlDisabled;r=b.enabledBackgroundColor;q=b.enabledBorderColor;w=b.hoverBackgroundColor;x=b.hoverBorderColor;v=b.activeBackgroundColor;z=b.activeBorderColor;u=b.disabledBackgroundColor;D=b.disabledBorderColor;k=a.Fk.cN(d,k,h,h,r,q);l=a.Fk.cN(d,l,h,h,w,x);n=a.Fk.cN(d,n,h,h,v,z);h=a.Fk.cN(d,m,h,h,u,D);m=b.posX;b=b.posY;null==this.Ym?(this.Ym=new a.Fk(d,k,l,n,h,this.I,this.I.K7),this.I.nb(this.Ym,this.Ym)):(this.Ym.LN(k),this.Ym.EN(l),this.Ym.yN(n),this.Ym.Sya(h));this.Xm.To(a.H.wa(a.H.Ha,"ZOOM_IN",
null));this.Ym.To(a.H.wa(a.H.Ha,"ZOOM_OUT",null));this.Xm.Dt();this.Ym.Dt();a.Ob.Pl()&&(a.J.X(this.Xm.Qa(),"role","button"),a.J.X(this.Xm.Qa(),"aria-label",a.H.wa(a.H.Ha,"ZOOM_IN",null)),a.J.X(this.Ym.Qa(),"role","button"),a.J.X(this.Ym.Qa(),"aria-label",a.H.wa(a.H.Ha,"ZOOM_OUT",null)));this.Xm.fa(B);this.Ym.fa(m);this.Xm.ua(f);this.Ym.ua(b);this.Xm.getParent()!=this.vi&&this.vi.A(this.Xm);this.Ym.getParent()!=this.vi&&this.vi.A(this.Ym);d=this.le;d>=e.M1&&this.uX(!0);this.Lf>=d&&this.uX(!1)};a.Td.prototype.TZ=
function(b){a.I.tc(b);var d=b.wheelDelta,e=b.Qo();if(this.Uw()&&(null!=e.wheelDeltaX?b.wheelDeltaX=e.wheelDeltaX/a.Td.g4a:null!=e.deltaX&&(e.deltaMode==e.DOM_DELTA_LINE?b.wheelDeltaX=-e.deltaX:e.deltaMode==e.DOM_DELTA_PIXEL&&(b.wheelDeltaX=-e.deltaX/a.Td.hka)),d)){var e=this.u().NC(),e=this.de?b.pageY-e.y:b.pageX-e.x,f=(this.Hc-this.Xb)/this.le,f=this.Uk()&&!this.de?this.zd-f*e:f*e+this.pc;b.bZa=f;b.$Ya=e;b.eha=.02*d+1}};a.Td.prototype.dN=function(a,b,e){var f=(this.zd-this.pc)/(this.Hc-this.Xb)*
this.le;this.RF(a);a=f/this.le*(this.Hc-this.Xb);b?(f=(this.Hc-this.Xb)/this.le,this.Uk()&&!this.de?(this.zd=b+e*f,this.zd>this.Hc&&(this.zd=this.Hc),this.pc=this.zd-a,this.pc<this.Xb&&(this.pc=this.Xb,this.zd=this.pc+a,this.zd>this.Hc&&(this.zd=this.Hc))):(this.pc=b-e*f,this.pc<this.Xb&&(this.pc=this.Xb),this.zd=this.pc+a,this.zd>this.Hc&&(this.zd=this.Hc,this.pc=this.zd-a,this.pc<this.Xb&&(this.pc=this.Xb))),this.UA(1/f*(this.Xb-this.pc))):(this.pc=this.Xb,this.zd=this.pc+a,this.pc<this.Xb&&(this.pc=
this.Xb),this.UA(0));this.nX()};a.Td.prototype.XA=function(a){var b=this.de?this.Nb/2:this.wb/2;this.dN(this.le*((1/a-1)/2+1),(this.Hc-this.Xb)/this.le*b+this.pc,b,!0)};a.Td.prototype.Kjb=function(a,b,e,f){this.Tpa=this.de?Math.sqrt((b-f)*(b-f))+(b<f?b:f):Math.sqrt((a-e)*(a-e))+(a<e?a:e);this.nMa=(this.Hc-this.Xb)/this.le*this.Tpa+this.pc;this.Spa=Math.sqrt((a-e)*(a-e)+(b-f)*(b-f));this.mMa=this.le};a.Td.prototype.nkb=function(a,b,e,f){a=Math.sqrt((a-e)*(a-e)+(b-f)*(b-f));a!=this.Spa&&(this.uI=!0);
this.dN(a/this.Spa*this.mMa,this.nMa,this.Tpa,!1)};a.Td.prototype.slb=function(){this.nMa=this.mMa=this.Tpa=this.Spa=null;this.uI&&(this.uI=!1,this.dispatchEvent(this.oy()))};a.Td.prototype.Txa=function(a){if(this.de){a=this.Pm.pa()-a;var b=-(this.le-this.Lf-this.Om),e=this.Om;a<b?a=b:a>e&&(a=e);this.Pm.ua(a);a-=this.Om;this.NXa(a)}else a=this.Pm.ra()-a,b=-(this.le-this.Lf-this.qj),e=this.qj,a<b?a=b:a>e&&(a=e),this.Pm.fa(a),this.NXa(a-this.qj),a=this.sVa();b=this.le/(this.Hc-this.Xb);e=this.zd-this.pc;
this.pc=this.Xb-a/b;this.zd=this.pc+e};a.Td.prototype.QVa=function(b){b?this.XA(1/a.Td.JFa):this.XA(a.Td.JFa)};a.Td.prototype.fea=function(a){a?(this.Xm.Gn(!0),this.Xm.kF()):(this.Ym.Gn(!0),this.Ym.kF())};a.Td.prototype.uX=function(a){a?(this.Xm.Gn(!1),this.Xm.bea(),this.Xm.setCursor(null)):(this.Ym.Gn(!1),this.Ym.bea(),this.Ym.setCursor(null))};a.Td.prototype.nX=function(){this.de?this.Pm.ua(this.Om+this.sM):this.Pm.fa(this.qj+this.sM)};a.Td.prototype.NXa=function(a){this.sM=a};a.Td.prototype.sVa=
function(){return this.Uk()&&!this.de?this.Lf-this.le-this.sM:this.sM};a.Td.prototype.UA=function(a){this.Uk()&&!this.de?this.sM=this.Lf-this.le-a:this.sM=a};a.Td.prototype.aZ=function(a){this.qj=a};a.Td.prototype.wYa=function(a){this.Om=a};a.Td.prototype.Eea=function(){return this.Gb()?new a.Z(this.qj,this.Om,this.qh,this.Lf):new a.Z(this.qj,this.Om,this.Lf,this.qh)};a.Td.prototype.MA=function(){return!0};a.Td.prototype.yYa=function(a){this.Hp=a};a.Td.prototype.TXa=function(a,b){null!=b?(null==this.rj&&
(this.rj=[]),this.rj[b]=a):this.rj=a};a.Td.prototype.O4=function(){return b.XGa};a.Td.prototype.tfa=function(){return b.tfa()};a.Td.prototype.xea=function(){return b.xea()};a.Td.prototype.iO=function(b,d){b.type==a.du.ye&&(b=this.xY(b,d));b&&this.dispatchEvent(b)};a.Td.prototype.xY=function(a,b){if(b==this.Hp){var e=a.ara;this.pc=a.pQ;this.zd=e;this.UA(this.le/(this.Hc-this.Xb)*(this.Xb-this.pc));this.nX();e=this.oy();this.dispatchEvent(e)}};a.Td.prototype.cg=function(a){a&&this.dispatchEvent(a)};
a.Td.prototype.oy=function(){return null};a.Td.prototype.DT=function(){};a.Td.prototype.qG=function(){};a.Td.prototype.J0a=function(){null!=this.Xm&&this.Xm.sra();null!=this.Ym&&this.Ym.sra()};a.Td.prototype.G0a=function(){null!=this.Xm&&this.Xm.rra();null!=this.Ym&&this.Ym.rra()};a.Td.prototype.sR=function(a,b){this.Qna=a;this.Rna=b};a.Td.prototype.EI=function(){this.iea()};a.Td.prototype.I7=function(a){"none"!=this.xw&&this.Twa(a,"multiple"==this.xw)};a.Td.prototype.Twa=function(){};a.Td.prototype.P0a=
function(a){this.Twa(a,a.ctrlKey&&"multiple"==this.xw)};a.Td.prototype.iea=function(){this.uI&&(this.uI=!1,this.dispatchEvent(this.oy()))};a.Td.prototype.G3=function(a,b){if(this.Qna&&this.Rna){var e=this.Qna-a,f=this.Rna-b;if(0==e&&0==f)return!1;this.uI=!0;this.Qna=a;this.Rna=b;this.$i(e,f);return!0}return!1};a.Td.prototype.$i=function(a){this.Txa(a)};a.bh=function(a){this.Init(a.u(),a.cg,a);this.Ri=a;this.gqa=this.MV=!1};a.v.F(a.bh,a.I);a.bh.zBa="wheel";a.bh.prototype.Nf=function(b){a.bh.C.Nf.call(this,
b);a.Ij.C3(this.Ri,this.DQ,this.CQ,this.BQ,this);a.B.Wa()||(a.B.lo()?b.Za(a.bh.zBa,this.FD,!1,this):b.Za(a.MouseEvent.vG,this.FD,!1,this))};a.bh.prototype.Wj=function(b){a.bh.C.Wj.call(this,b);a.B.Wa()||(a.B.lo()?b.lc(a.bh.zBa,this.FD,!1,this):b.lc(a.MouseEvent.vG,this.FD,!1,this))};a.bh.prototype.Z7=function(b){a.bh.C.Z7.call(this,b);this.Ri.J0a()};a.bh.prototype.ED=function(b){a.bh.C.ED.call(this,b);this.Ri.G0a()};a.bh.prototype.f_=function(b){a.bh.C.f_.call(this,b);this.Ri.DT(b)};a.bh.prototype.$j=
function(b){this.MV||(a.bh.C.$j.call(this,b),this.Ri.P0a(b))};a.bh.prototype.f8=function(b){this.MV=!1;a.bh.C.f8.call(this,b);this.Ri.qG(b)};a.bh.prototype.FD=function(a){this.Ri.TZ(a)};a.bh.prototype.NT=function(b){a.bh.C.NT.call(this,b);this.Ri.VZ(b);this.Ri.u().Ee.LG.parentNode.focus()};a.bh.prototype.b8=function(b){a.bh.C.b8.call(this,b);this.Ri.I7(b)};a.bh.prototype.DQ=function(b){if(this.Ri.Uw())return a.B.Wa()?this.p2(b):this.m2(b)};a.bh.prototype.CQ=function(b){return a.B.Wa()?this.o2(b):
this.l2(b)};a.bh.prototype.BQ=function(b){return a.B.Wa()?this.n2(b):this.k2(b)};a.bh.prototype.Ui=function(b,d){this.Nm||(this.Nm=this.Ba.NC());return new a.R(b-this.Nm.x,d-this.Nm.y)};a.bh.prototype.m2=function(b){return b.button!=a.MouseEvent.Vja&&(b=this.Ui(b.pageX,b.pageY),this.Ri.Eea().li(b.x,b.y))?(this.Ri.sR(b.x,b.y),!0):!1};a.bh.prototype.l2=function(a){a=this.Ui(a.pageX,a.pageY);this.Ri.G3(a.x,a.y)&&(this.MV=!0)};a.bh.prototype.k2=function(){this.Ri.EI();this.Nm=null};a.bh.prototype.p2=
function(b){var d=b.touches,e=this.Ri.Eea();if(1==d.length){if(b=this.Ui(d[0].pageX,d[0].pageY),e.li(b.x,b.y))return this.Ri.sR(b.x,b.y),!0}else if(2==d.length){this.Ri.EI();this.gqa=!0;var f=this.Ui(d[0].pageX,d[0].pageY),d=this.Ui(d[1].pageX,d[1].pageY);if(e.li(f.x,f.y)&&e.li(d.x,d.y))return this.Ri.Kjb(f.x,f.y,d.x,d.y),a.I.tc(b),!0}return!1};a.bh.prototype.o2=function(a){var b=a.touches;if(1==b.length){var e=this.Ui(b[0].pageX,b[0].pageY);this.Ri.G3(e.x,e.y);a.preventDefault()}else 2==b.length&&
(e=this.Ui(b[0].pageX,b[0].pageY),b=this.Ui(b[1].pageX,b[1].pageY),this.Ri.nkb(e.x,e.y,b.x,b.y),a.preventDefault())};a.bh.prototype.n2=function(a){this.gqa?(this.gqa=!1,this.Ri.slb()):this.Ri.EI();a.preventDefault();this.Nm=null};a.bh.prototype.XA=function(a){this.Ri.XA(a)};a.bh.prototype.$i=function(b,d){var e=b*this.Ri.Lf*(a.B.ba(this.Ba)?-1:1),f=d*this.Ri.qh;0!=e&&(this.Ri.uI=!0);this.Ri.$i(e,f);this.Ri.iea()};a.bh.prototype.J7=function(){this.Ri.QVa(!0)};a.bh.prototype.K7=function(){this.Ri.QVa(!1)};
a.bh.prototype.gB=function(){return a.I.HG};a.KO=function(a){this.Init(a)};a.v.F(a.KO,a.Cb);a.KO.prototype.KF=function(a){return this.Bi(a)&&!a.ctrlKey};a.KO.prototype.cv=function(b){return b.keyCode==a.KeyboardEvent.ui&&b.ctrlKey};a.KO.prototype.xk=function(b){if(a.KeyboardEvent.Sfa(b)||a.KeyboardEvent.kxa(b))this.yb.J7();else if(a.KeyboardEvent.Pfa(b)||a.KeyboardEvent.Dxa(b))this.yb.K7();else{var d=b.keyCode;d==a.KeyboardEvent.Dja?(b.shiftKey?this.yb.$i(-.25,0):this.yb.$i(0,-.25),a.I.tc(b)):d==
a.KeyboardEvent.Cja&&(b.shiftKey?this.yb.$i(.25,0):this.yb.$i(0,.25),a.I.tc(b))}return a.KO.C.xk.call(this,b)};var b={};a.v.F(b,a.v);b.L5a="height: 3px; width: 3px; color: #9E9E9E; background-color: #F0F0F0";b.i5a="height: 3px; width: 3px; color: #9E9E9E; background-color: #F0F0F0";b.XGa=4;b.tfa=function(){return new a.j(b.L5a)};b.xea=function(){return new a.j(b.i5a)};b.O4=function(){return b.XGa}})(dvt);
  return dvt;
});
