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
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a,g){a.Hb=function(b,c){c=c||{};if(!(b instanceof a.ua))throw Error(a.W.od._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.W.od._ERR_DATA_INVALID_TYPE_DETAIL);this.i=b;this.$e=[];this.oa=0;this.gi=[];this.nn=!0;null==this.i.xF("fetchSize")&&(this.i.gm=function(){return-1});var d=this;this.i.jN=function(b,c,g){var k,l,m,r,t=[],s=[],p=[];for(c=0;c<g.getCount();c++){l=g.getData(c);r=g.getMetadata(c).key;m=b+c;d.gi.splice(m,0,{});d.gi[m].nodeSet=
g;d.gi[m].startIndex=b;for(k=m+1;k<d.gi.length;k++)d.gi[k].startIndex+=1;t.push(d.$l(l));s.push(r);p.push(m);d.Ca.data.splice(m,0,l);d.Ca.keys.splice(m,0,r);d.Ca.indexes.splice(m,0,m)}d.tE();d.nn=!0;a.W.u.handleEvent.call(d,a.W.O.ADD,{data:t,keys:s,indexes:p})};this.i.kO=function(b){var c,g,k,l=[],m=[],r=[];for(c=b.length-1;0<=c;c--){k=b[c].index;l.push("");m.push("");r.push(k);d.gi.splice(k,1);for(g=k;g<d.gi.length;g++)d.gi[g].startIndex-=1;d.Ca.data.splice(k,1);d.Ca.keys.splice(k,1);d.Ca.indexes.splice(k,
1)}r=r.sort();d.tE();d.nn=!0;a.W.u.handleEvent.call(d,a.W.O.REMOVE,{data:l,keys:m,indexes:r})};this.Init();if(null!=c&&("enabled"==c.startFetch||null==c.startFetch)||null==c)this.QE=!0};o_("FlattenedTreeTableDataSource",a.Hb,a);a.b.sa(a.Hb,a.W,"oj.FlattenedTreeTableDataSource");a.Hb.prototype.Init=function(){a.Hb.u.Init.call(this)};a.b.g("FlattenedTreeTableDataSource.prototype.Init",{Init:a.Hb.prototype.Init});a.Hb.prototype.getCapability=function(){return"full"};a.b.g("FlattenedTreeTableDataSource.prototype.getCapability",
{getCapability:a.Hb.prototype.getCapability});a.Hb.prototype.getWrappedDataSource=function(){return this.i};a.b.g("FlattenedTreeTableDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.Hb.prototype.getWrappedDataSource});a.Hb.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||this.QE?this.Gg(a):Promise.resolve()};a.b.g("FlattenedTreeTableDataSource.prototype.fetch",{fetch:a.Hb.prototype.fetch});a.Hb.prototype.at=function(a){var c;c=0>a||a>=this.Ca.length?null:{data:this.Ca.data[a],
index:a,key:this.Ca.keys[a]};return new Promise(function(a){a(c)})};a.b.g("FlattenedTreeTableDataSource.prototype.at",{at:a.Hb.prototype.at});a.Hb.prototype.collapse=function(a){this.i.collapse(a)};a.b.g("FlattenedTreeTableDataSource.prototype.collapse",{collapse:a.Hb.prototype.collapse});a.Hb.prototype.expand=function(a){this.i.expand(a)};a.b.g("FlattenedTreeTableDataSource.prototype.expand",{expand:a.Hb.prototype.expand});a.Hb.prototype.get=function(a){var c=this.i.dl(Object(a));a={data:this.$l(this.Ca.data[c]),
key:a,index:c};return Promise.resolve(a)};a.b.g("FlattenedTreeTableDataSource.prototype.get",{get:a.Hb.prototype.get});a.Hb.prototype.on=function(b,c){if("expand"==b||"collapse"==b)this.i.on(b,c);else a.Hb.u.on.call(this,b,c)};a.b.g("FlattenedTreeTableDataSource.prototype.on",{on:a.Hb.prototype.on});a.Hb.prototype.off=function(b,c){"expand"==b||"collapse"==b?this.i.off(b,c):a.Hb.u.off.call(this,b,c)};a.b.g("FlattenedTreeTableDataSource.prototype.off",{off:a.Hb.prototype.off});a.Hb.prototype.sort=
function(b){null==b?b=this.sortCriteria:this.sortCriteria=b;var c=this;b.axis="column";return new Promise(function(d,e){c.i.getWrappedDataSource().sort(b,{success:function(){setTimeout(function(){c.i.refresh();c.Ca=null;var e={header:b.key,direction:b.direction};a.W.u.handleEvent.call(c,a.W.O.SORT,e);d(e)},0)}.bind(this),error:function(a){e(a)}.bind(this)})})};a.b.g("FlattenedTreeTableDataSource.prototype.sort",{sort:a.Hb.prototype.sort});a.Hb.prototype.totalSize=function(){return this.nn?-1:this.Ca.data.length};
a.b.g("FlattenedTreeTableDataSource.prototype.totalSize",{totalSize:a.Hb.prototype.totalSize});a.Hb.prototype.totalSizeConfidence=function(){return this.nn?"unknown":"actual"};a.b.g("FlattenedTreeTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Hb.prototype.totalSizeConfidence});a.Hb.prototype.IT=function(a){var c=this.gi[a].nodeSet.getStart();return this.gi[a].nodeSet.getMetadata(c+a-this.gi[a].startIndex)};a.Hb.prototype.Gg=function(b){b=b||{};this.PE(b);this.oa=null==b.startIndex?
this.oa:b.startIndex;var c=Number.MAX_VALUE;this.wb=null==b.pageSize?this.wb:b.pageSize;null!=this.wb&&(c=this.wb);var d=this.oa;if(null!=this.Ca)if(null!=this.wb){var e=this.Ca.data.length-1;if(this.oa+this.wb-1<=e){var e=a.Hb.wJ(this.Ca,this.oa,this.wb),c=[],d=[],f,g;for(f=this.oa;f<=e;f++)g=this.Ca.keys[f],c[f-this.oa]=this.$l(this.Ca.data[f]),d[f-this.oa]=g;e={data:c,keys:d,startIndex:this.oa};this.cn(b,e,null);return Promise.resolve(e)}this.oa<=e&&(d=e+1)}else this.i.refresh(),this.Ca=null;else d=
0;var k={start:d,count:c},l=this;return new Promise(function(c,d){l.i.tp(k,{success:function(d){l.wU(d);b.refresh=!0;d=a.Hb.wJ(l.Ca,l.oa,l.wb);var e=[],f=[],g,h;for(g=l.oa;g<=d;g++)h=l.Ca.keys[g],e[g-l.oa]=l.$l(l.Ca.data[g]),f[g-l.oa]=h;l.nn=0<e.length?!0:!1;d={data:e,keys:f,startIndex:l.oa};l.cn(b,d,null);c(d)}.bind(this),error:function(a){l.cn(b,null,a);d(a)}.bind(this)})})};a.Hb.prototype.wU=function(b){var c=b.getStart(),d,e;for(d=0;d<b.getCount();d++)e=c+d,this.gi[e]={},this.gi[e].nodeSet=b,
this.gi[e].startIndex=c;this.Ca||(this.Ca={},this.Ca.data=[],this.Ca.keys=[],this.Ca.indexes=[]);a.Hb.Xy(b,this,this.Ca,c)};a.Hb.prototype.PE=function(b){b.silent||a.W.u.handleEvent.call(this,a.W.O.REQUEST,{startIndex:b.startIndex})};a.Hb.prototype.cn=function(b,c,d){null!=d?a.W.u.handleEvent.call(this,a.W.O.ERROR,d):b.silent||a.W.u.handleEvent.call(this,a.W.O.SYNC,c)};a.Hb.wJ=function(a,c,d){var e=a.data.length-1;0<d&&(e=c+d-1,e=e>a.data.length-1?a.data.length-1:e);return e};a.Hb.Xy=function(a,c,
d,e){for(c=0;c<a.getCount();c++){var f=a.getData(a.getStart()+c);d.data[e+c]=f;d.keys[e+c]=a.getMetadata(a.getStart()+c).key;d.indexes[e+c]=e+c}};a.Hb.prototype.tE=function(){for(var a=0;a<this.Ca.data.length;a++)this.Ca.indexes[a]=a};a.Hb.prototype.$l=function(b){var c=g.extend(!0,{},b),d,e=Object.keys(b);for(d=0;d<e.length;d++)a.Hb.vS(c,b,e[d]);return c};a.Hb.vS=function(a,c,d){Object.defineProperty(a,d,{get:function(){return c[d]},set:function(a){c[d]=a},enumerable:!0})}});