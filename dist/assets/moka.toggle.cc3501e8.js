import{a as t,n as e}from"./index.e7d306aa.js";import"./vendor.4bda4d6d.js";const s={};var n=e({name:"Switch",data:()=>({status:!1}),mounted(){this.status=this.$attrs.status}},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"flex flex-row items-center"},[n(t,{staticClass:"text-5xl",class:e.status?"text-green-500":"text-red-500",attrs:{name:e.status?"toggle_on":"toggle_off"},on:{click:function(t){return e.$emit("click",e.status=!e.status)}}}),e._v(" Active ")],1)}),[],!1,(function(t){for(let e in s)this[e]=s[e]}),null,null,null);n.options.__file="src/components/common/toggle.vue";var l=n.exports;const o={};var a=e({name:"MokaToggle",props:["el"]},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"cursor-pointer"},[s(l,{attrs:{label:t.el.placeholder,status:t.el.content,css:t.el.css},on:{click:function(e){t.el.content=!t.el.content}}}),s("input",{attrs:{type:"hidden",name:t.el.name},domProps:{value:t.el.content}})],1)}),[],!1,(function(t){for(let e in o)this[e]=o[e]}),null,null,null);a.options.__file="src/components/blocks/elements/moka.toggle.vue";var c=a.exports;export default c;
