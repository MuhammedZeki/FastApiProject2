(function(){"use strict";var e={885:function(e,t,n){var r=n(469),o=n(55);const s={id:"app"};function a(e,t,n,r,a,u){const l=(0,o.g2)("router-link"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("header",null,[(0,o.Lk)("nav",null,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Home")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/login"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("Login")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/register"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Register")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/students"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("Students")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/teachers"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("Teachers")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/schedules"},{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.eW)("Schedules")]))),_:1})])])])]),(0,o.Lk)("main",null,[(0,o.bF)(i)]),t[6]||(t[6]=(0,o.Lk)("footer",null,[(0,o.Lk)("p",null,"© 2023 My School Data Entry System")],-1))])}var u={name:"App"},l=n(932);const i=(0,l.A)(u,[["render",a],["__scopeId","data-v-4c672654"]]);var c=i,d=n(610);function h(e,t,n,r,s,a){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Lk)("h1",null,"Welcome to the Home Page",-1),(0,o.Lk)("p",null,"Basit bir metin",-1)]))}var p={name:"HomeView"};const m=(0,l.A)(p,[["render",h]]);var f=m,v=n(959);const k={key:0,style:{color:"red"}};function g(e,t,n,s,a,u){return(0,o.uX)(),(0,o.CE)("div",null,[t[4]||(t[4]=(0,o.Lk)("h2",null,"Login",-1)),(0,o.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...e)=>s.handleLogin&&s.handleLogin(...e)),["prevent"]))},[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.user.email=e),placeholder:"Email",required:""},null,512),[[r.Jo,s.user.email]]),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.user.password=e),placeholder:"Password",required:""},null,512),[[r.Jo,s.user.password]]),t[3]||(t[3]=(0,o.Lk)("button",{type:"submit"},"Login",-1))],32),s.error?((0,o.uX)(),(0,o.CE)("p",k,(0,v.v_)(s.error),1)):(0,o.Q3)("",!0)])}var L=n(207),b=n(222),y=(0,b.y$)({state:{token:""},mutations:{setToken(e,t){e.token=t},clearToken(e){e.token=""}},actions:{},getters:{isAuthenticated:e=>!!e.token}});const w=L.A.create({baseURL:"http://35.158.119.153:8000",headers:{"Content-Type":"application/json"}});w.interceptors.request.use((e=>{const t=y.state.token;return t&&(e.headers["Authorization"]=`Bearer ${t}`),e}),(e=>Promise.reject(e)));var _=w,E={name:"LoginPage",setup(){const e=(0,b.Pj)(),t=(0,d.rd)(),n={email:"",password:""},r="",o=async()=>{try{const r=await _.post("/users/login",n);e.commit("setToken",r.data.token),t.push("/")}catch(r){this.error="Login failed."}};return{user:n,error:r,handleLogin:o}}};const C=(0,l.A)(E,[["render",g]]);var S=C;const A={key:0,style:{color:"red"}},X={key:1,style:{color:"green"}};function U(e,t,n,s,a,u){return(0,o.uX)(),(0,o.CE)("div",null,[t[5]||(t[5]=(0,o.Lk)("h2",null,"Register",-1)),(0,o.Lk)("form",{onSubmit:t[3]||(t[3]=(0,r.D$)(((...e)=>u.handleRegister&&u.handleRegister(...e)),["prevent"]))},[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.newUser.email=e),placeholder:"Email",required:""},null,512),[[r.Jo,a.newUser.email]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.newUser.username=e),placeholder:"Username",required:""},null,512),[[r.Jo,a.newUser.username]]),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.newUser.password=e),placeholder:"Password",required:""},null,512),[[r.Jo,a.newUser.password]]),t[4]||(t[4]=(0,o.Lk)("button",{type:"submit"},"Register",-1))],32),a.error?((0,o.uX)(),(0,o.CE)("p",A,(0,v.v_)(a.error),1)):(0,o.Q3)("",!0),a.success?((0,o.uX)(),(0,o.CE)("p",X,(0,v.v_)(a.success),1)):(0,o.Q3)("",!0)])}var O={name:"RegisterPage",data(){return{newUser:{email:"",username:"",password:""},error:"",success:""}},methods:{async handleRegister(){try{await _.post("/users/",this.newUser),this.success="Registration successful.",this.error=""}catch(e){this.error="Registration failed.",this.success=""}}}};const P=(0,l.A)(O,[["render",U]]);var j=P;function T(e,t,n,r,s,a){return(0,o.uX)(),(0,o.CE)("div",null,[t[0]||(t[0]=(0,o.Lk)("h2",null,"Students",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.students,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},(0,v.v_)(e.first_name)+" "+(0,v.v_)(e.last_name)+" - "+(0,v.v_)(e.grade),1)))),128))])])}var F={name:"StudentsPage",data(){return{students:[]}},async created(){const e=await _.get("/students/");this.students=e.data}};const R=(0,l.A)(F,[["render",T]]);var q=R;function W(e,t,n,r,s,a){return(0,o.uX)(),(0,o.CE)("div",null,[t[0]||(t[0]=(0,o.Lk)("h2",null,"Teachers",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.teachers,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},(0,v.v_)(e.first_name)+" "+(0,v.v_)(e.last_name)+" - "+(0,v.v_)(e.subject_specialization),1)))),128))])])}var V={name:"TeachersPage",data(){return{teachers:[]}},async created(){const e=await _.get("/teachers/");this.teachers=e.data}};const J=(0,l.A)(V,[["render",W]]);var x=J;function H(e,t,n,r,s,a){return(0,o.uX)(),(0,o.CE)("div",null,[t[0]||(t[0]=(0,o.Lk)("h2",null,"Class Schedules",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.schedules,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},(0,v.v_)(e.class_name)+" - "+(0,v.v_)(e.assigned_teacher)+" ("+(0,v.v_)(e.schedule_timings)+") ",1)))),128))])])}var I={name:"ClassSchedules",data(){return{schedules:[]}},async created(){const e=await _.get("/schedules/");this.schedules=e.data}};const $=(0,l.A)(I,[["render",H]]);var D=$;const K=[{path:"/",name:"Home",component:f},{path:"/login",name:"Login",component:S},{path:"/register",name:"Register",component:j},{path:"/students",name:"Students",component:q,meta:{requiresAuth:!0}},{path:"/teachers",name:"Teachers",component:x,meta:{requiresAuth:!0}},{path:"/schedules",name:"Schedules",component:D,meta:{requiresAuth:!0}}],M=(0,d.aE)({history:(0,d.LA)(),routes:K});M.beforeEach(((e,t,n)=>{e.meta.requiresAuth&&!y.state.token?n({name:"Login"}):n()}));var Q=M;const z=(0,r.Ef)(c);z.use(Q),z.use(y),z.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],s=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,s<a&&(a=s));if(u){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,o,s]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,a=r[0],u=r[1],l=r[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(t&&t(r);i<a.length;i++)s=a[i],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(885)}));r=n.O(r)})();
//# sourceMappingURL=app.cfb02cd1.js.map