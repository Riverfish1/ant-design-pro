webpackJsonp([35],{790:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(15),u=n(r),s=a(129),c=n(s),d=a(321);t.default={namespace:"list",state:{list:[],loading:!1},effects:{fetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(d.queryFakeList,r);case 4:return n=e.sent,e.next=7,s({type:"appendList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{appendList:function(e,t){return(0,u.default)({},e,{list:e.list.concat(t.payload)})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default}});