import{a as c,b as n,e as s,l as d,o as l,p as f,k as h}from"./entry.f8f912c8.js";const u=""+globalThis.__publicAssetsURL("george-mahoney-potter-remote.jpg");const _={name:"default",data:function(){return{observer:null}},mounted(){this.observer=new IntersectionObserver(([e])=>{if(console.log(e.target.id),e&&e.isIntersecting&&e.target.id){document.querySelectorAll("#menu a").forEach(r=>{r.classList.remove("active")});const o=e.target.id;["certification","education","organizations","testimonials","hobbies"].includes(o)&&this.$refs.accoladesMenu?this.$refs.accoladesMenu.classList.add("active"):this.$refs[e.target.id+"Menu"]&&this.$refs[e.target.id+"Menu"].classList.add("active")}},{rootMargin:"-40% 0% -40%"}),document.querySelectorAll("section").forEach(e=>{this.observer.observe(e)}),new IntersectionObserver(([e])=>{console.log(e),e&&this.$refs.headerObserver&&(e.isIntersecting?this.$refs.headerObserver.classList.add("header--inverted"):this.$refs.headerObserver.classList.remove("header--inverted"))},{rootMargin:"-100% 0% 0%"}).observe(document.querySelector("#intro"))}},i=t=>(f("data-v-ecd4c1b5"),t=t(),h(),t),v={id:"header",ref:"headerObserver",class:"header--inverted"},b=i(()=>s("a",{id:"logo",href:"#first"},"Potter Portfolio",-1)),p={id:"menu"},g={href:"#second",ref:"aboutMenu"},m={href:"#third",ref:"experienceMenu"},$={href:"#fourth",ref:"skillsMenu"},M={href:"#fifth",ref:"accoladesMenu"},I={href:"#sixth",ref:"connectMenu"},k=i(()=>s("footer",{id:"footer"},[s("div",{class:"footer__inner"},[s("img",{src:u,alt:"Thank you for visiting!",title:"Thank you for visiting!"}),s("h2",null,"Thank You for Visiting!"),s("a",{href:"",class:"button"}," Download this website ")])],-1));function S(t,e,o,a,r,x){return l(),n("main",null,[s("header",v,[b,s("nav",p,[s("a",g," About ",512),s("a",m," Experience ",512),s("a",$," Skills ",512),s("a",M," Accolades ",512),s("a",I," Connect ",512)])],512),d(t.$slots,"default",{},void 0,!0),k])}const O=c(_,[["render",S],["__scopeId","data-v-ecd4c1b5"]]);export{O as default};
