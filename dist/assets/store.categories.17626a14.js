import{n as e}from"./index.1da66106.js";import"./vendor.3caa4166.js";const t={};var o=e({name:"WhoobeStoreCategories",data:()=>({categories:null}),mounted(){this.categories=this.$shop().categories.data}},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.categories?o("div",{staticClass:"flex flex-col md:flex-row",class:e.$attrs.container},[e._l(e.categories,(function(t){return[o("div",{class:e.$attrs.css,on:{click:function(o){return e.$emit("category",t.name,!1)}}},[e._v(" "+e._s(t.name)+" ")])]}))],2):e._e()}),[],!1,(function(e){for(let o in t)this[o]=t[o]}),null,null,null);o.options.__file="src/components/plugins/store/whoobe/store.categories.vue";var s=o.exports;export default s;