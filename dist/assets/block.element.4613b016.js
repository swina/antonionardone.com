import{g as e,S as s}from"./vendor.4bda4d6d.js";import{n as t}from"./index.e7d306aa.js";e.registerPlugin(s);const l={};var n=t({data:()=>({el:null,article:"article",opacity:"opacity-0",menuover:-1,menu_show:!1,gsap_ani:null}),props:["current","runAnimation"],computed:{element(){return!!this.$attrs.element&&(this.el=this.$attrs.element)},tag(){return"h"===this.$attrs.element.element?"h"+this.$attrs.element.level:this.$attrs.element.element},stile(){return this.el.image?"background-image:url("+this.el.image.url+");background-repeat:no-repeat; background-size:cover;background-position:center center; "+this.el.style:(this.$attrs.refreshAnimation&&this.animation(this.$attrs.element,this.$attrs.element.id),"")},animations:()=>gsapEffects},watch:{runAnimation(e){console.log("rerun animation => ",e),e&&this.animate(this.element,this.element.id)}},methods:{showmenu(){console.log("showmenu"),this.menu_show=!this.menu_show,console.log(this.menu_show)},animation(t,l){if(this.$refs&&t.hasOwnProperty("gsap")&&t.gsap.animation){let n=e.effects[t.gsap.animation](this.$refs[l],{trigger:this.$refs[l],duration:parseFloat(t.gsap.duration),delay:parseFloat(t.gsap.delay),ease:t.gsap.ease});s.create({id:l,start:"top 99.99%",trigger:this.$refs[l],toggleActions:"play pause restart none",animation:n,onEnter:()=>{t.gsap.delay?n.play():n.play(0)}})}},responsiveCss:e=>e,isOver(e){return e<0?"opacity-0":this.menuover===e?"opacity-100":"opacity-0"},menu_responsive:e=>"horizontal"===e.type&&e.responsive?"hidden flex flex-col md:flex md:flex-row":"horizontal"!==e.type||e.responsive?"vertical"===e.type?"flex flex-col":void 0:e.css.container},mounted(){this.animation(this.element,this.element.id)},beforeDestroy(){e.timeline().kill()}},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.element?t("div",{ref:e.element.id,style:e.element.style,attrs:{id:e.element.hasOwnProperty("anchor")&&e.element.anchor?e.element.anchor:e.element.id,element:""},on:{click:function(s){e.element.hasOwnProperty("action")&&e.$emit("click",e.element.action)}}},["element"!==e.el.tag&&"button"!==e.el.type||"img"==e.el.element||"video"==e.el.type||"audio"==e.el.type||e.el.link?e._e():t(e.tag,{tag:"component",class:e.$cssResponsive(e.el.css),style:e.stile,domProps:{innerHTML:e._s(e.el.content)}}),e.el.link?t("a",{attrs:{href:e.el.link}},["element"!==e.el.tag&&"button"!==e.el.type||"img"==e.el.element||"video"==e.el.type||"audio"==e.el.type?e._e():t(e.tag,{tag:"component",class:e.$cssResponsive(e.el.css),style:e.stile,domProps:{innerHTML:e._s(e.el.content)}})],1):e._e(),"article"===e.el.tag?t(e.tag,{tag:"component",class:e.$cssResponsive(e.el.css),domProps:{innerHTML:e._s(e.el.content)}}):e._e(),"svg"===e.el.tag?t("svg",{class:e.el.css+" fill-current",attrs:{width:"100%",height:"100%",viewBox:e.el.content.viewBox},domProps:{innerHTML:e._s(e.el.content.g)}}):e._e(),"img"===e.el.element&&e.el.image&&e.el.image.url&&".svg"!=e.el.image.ext&&".mp4"!=e.el.image.ext?t("img",{class:e.$cssResponsive(e.el.css),attrs:{src:e.$imageURL(e.el.image),caption:e.el.image.caption,alt:e.el.image.alternative_text}}):e._e(),"img"===e.el.element&&e.el.image&&".svg"===e.el.image.ext?t("div",{class:e.el.css+" fill-current"},[t("img",{attrs:{src:e.$imageURL(e.el.image)}})]):e._e(),"video"===e.el.type&&e.el.image&&e.el.image.url?t("video",{class:e.$cssResponsive(e.el.css),attrs:{autoplay:!e.el.hasOwnProperty("autoplay")||e.el.autoplay,controls:!e.el.hasOwnProperty("controls")||e.el.controls,loop:!e.el.hasOwnProperty("loop")||e.el.loop}},[t("source",{attrs:{src:e.$imageURL(e.el.image)}})]):e._e(),"audio"===e.el.type?t("audio",{class:e.$cssResponsive(e.el.css)},[t("source",{attrs:{src:e.$imageURL(e.el.image)}})]):e._e(),"input"===e.el.tag&&"button"!=e.el.type?t("input",{class:e.$cssResponsive(e.el.css),attrs:{type:e.el.type,name:e.el.name,placeholder:e.el.required?"required!":""},domProps:{value:e.el.content}}):e._e(),e.el.required?t("sup",{staticClass:"ml-1 nuxpresso-element-required"},[e._v("*")]):e._e(),"icon"!==e.el.tag||e.el.link?e._e():t("i",{class:"material-icons moka-icons "+e.$cssResponsive(e.el.css)},[e._v(e._s(e.el.content))]),e.el.link&&"icon"===e.el.tag?t("a",{attrs:{href:e.el.link}},["icon"===e.el.tag?t("i",{class:"material-icons moka-icons "+e.$cssResponsive(e.el.css)},[e._v(e._s(e.el.content))]):e._e()]):e._e(),"textarea"===e.el.element?t("textarea",{class:e.$cssResponsive(e.el.css)}):e._e(),"menu"===e.el.element?t("nav",{class:e.menu_responsive(e.el)+" z-top "+e.el.css.align},e._l(e.el.items,(function(s,l){return t("div",{key:e.el.id+"_"+l,class:e.el.css.css+" cursor-pointer relative pr-4"},[s.submenu||e.$attrs.develop||!s.link||s.link.includes("http")?t("div",{class:e.el.css.css,on:{mouseover:function(s){e.menuover=l},click:function(s){e.menuover=l}}},[e._v(e._s(s.label)+" "),s.submenu&&s.submenu.length?t("i",{class:e.el.css.css+" material-icons moka-icons text-sm"},[e._v("arrow_drop_down")]):e._e()]):t("a",{class:e.el.css.css,attrs:{href:s.link}},[e._v(e._s(s.label)+" "),s.submenu?t("i",{staticClass:"material-icons moka-icons"},[e._v("arrow_drop_down")]):e._e()]),s.submenu&&s.submenu.length?t("div",{class:e.isOver(l)+" "+e.el.css.submenu+" absolute flex flex-col z-2xtop",on:{mouseleave:function(s){e.menuover=-1}}},e._l(s.submenu,(function(s){return t("div",[t("div",{class:e.el.css.css},[e._v(e._s(s.label))])])})),0):e._e()])})),0):e._e(),"menu"===e.el.element&&e.el.responsive?t("i",{class:"material-icons moka-icons z-max fixed md:hidden top-0 left-0 m-1 "+e.el.css.css,on:{click:e.showmenu}},[e._v("menu")]):e._e(),t("transition",{attrs:{name:"fade"}},[e.menu_show?t("nav",{class:e.el.css.responsive},["menu"===e.el.element&&e.el.responsive?t("i",{class:"material-icons moka-icons z-max md:hidden top-0 left-0 m-1 "+e.el.css.css,on:{click:e.showmenu}},[e._v("menu")]):e._e(),e._l(e.el.items,(function(s,l){return t("div",{class:e.el.css.css+" cursor-pointer relative p-1"},[t("a",{class:e.el.css.css,attrs:{href:s.link}},[e._v(e._s(s.label))]),s.submenu&&s.submenu.length?t("div",{class:e.el.css.css+" ml-2 flex flex-col"},e._l(s.submenu,(function(s){return t("div",[t("a",{class:e.el.css.css,attrs:{href:s.link}},[e._v(e._s(s.label))])])})),0):e._e()])}))],2):e._e()]),e.el.hasOwnProperty("plugin")?t("plugin-wrapper",{attrs:{block:e.el,plugin:e.el.plugin,component:e.el.plugin}}):e._e()],1):e._e()}),[],!1,(function(e){for(let s in l)this[s]=l[s]}),null,null,null);n.options.__file="src/components/blocks/block.element.vue";var i=n.exports;export default i;
