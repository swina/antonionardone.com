import{a as t,n as e}from"./index.db9ba62f.js";import"./vendor.aff6e0d8.js";const n={};var s=e({name:"WhoobeChip"},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"flex flex-row items-center justify-around px-2 py-1",class:e.$attrs.css},[s("div",[e._v(e._s(e.$attrs.content))]),e.$attrs.icon?s(t,{staticClass:"mx-1",class:e.$attrs.reverse?"order-first":"",attrs:{name:e.$attrs.icon},on:{click:function(t){return e.$emit("click")}}}):e._e()],1)}),[],!1,(function(t){for(let e in n)this[e]=n[e]}),null,null,null);s.options.__file="src/components/common/chip.vue";var l=s.exports;const o={};var r=e({name:"MokaChip",props:["el"],data:()=>({selected:null})},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row flex-wrap"},[t._l(t.el.options,(function(e){return[e?n(l,{class:t.el.css,attrs:{content:e},on:{click:function(n){t.selected=e,t.$emit("click",e)}}}):t._e()]})),n("input",{attrs:{type:"hidden",name:t.el.name},domProps:{value:t.selected}})],2)}),[],!1,(function(t){for(let e in o)this[e]=o[e]}),null,null,null);r.options.__file="src/components/blocks/elements/moka.chip.vue";var c=r.exports;export default c;
