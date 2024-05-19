import{N as x,O as y,P as q,I as U,D as L,C as O,F as P,w as S,L as T}from"./element-plus.ef27c94c.js";import{_ as $}from"./index.0b1bf1d7.js";import{u as j,a as z}from"./vue-router.9605b890.js";import{e as G,f as H}from"./index.b60a26c4.js";import{n as M,s as Q}from"./message.8c01f477.js";import{d as v,r as W,a1 as X,s as J,o as i,c as _,X as e,P as s,Q as K,u as a,O as Y,U as m,V as d,a as n,W as Z,a8 as ee}from"./@vue.a137a740.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.4eb0747d.js";import"./axios.317db7a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.329a9ebf.js";import"./pinia.9b4180ce.js";import"./css-color-function.32b8b184.js";import"./color.3683ba49.js";import"./clone.a10503d0.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.c50c242d.js";import"./vue-clipboard3.51d666ae.js";import"./clipboard.e9b83688.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";const te=n("div",{class:"font-medium mb-7"},"\u901A\u77E5\u540D\u79F0",-1),oe=n("div",{class:"font-medium mb-7"},"\u77ED\u4FE1\u901A\u77E5",-1),se={class:"w-80"},ae={class:"flex-1"},ue={class:"w-full max-w-[320px]"},re={class:"form-tips"},le=v({name:"noticeEdit"}),ze=v({...le,setup(me){const f=j(),N=z(),p=W(!1),t=X({id:"",name:"",type:"",remarks:"",smsNotice:{status:0,templateId:"",content:"",tips:[]}}),g={"smsNotice.templateId":[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u677FID",trigger:"blur"}],"smsNotice.content":[{required:!0,message:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u5185\u5BB9",trigger:"blur"}]},{removeTab:D}=G(),F=J(),B=async()=>{p.value=!0;const u=await M({id:f.query.id});Object.keys(u).forEach(o=>{o=="smsNotice"?(t[o]=u[o],t.smsNotice.templateId=u[o].template_id):t[o]=u[o]}),p.value=!1},w=async()=>{var u;await((u=F.value)==null?void 0:u.validate()),await Q(t),H.msgSuccess("\u64CD\u4F5C\u6210\u529F"),D(),N.back()};return f.query.id&&B(),(u,o)=>{const V=x,c=U,l=L,b=y,I=q,E=O,h=P,A=S,C=$,R=T;return i(),_("div",null,[e(c,{class:"!border-none",shadow:"never"},{default:s(()=>[e(V,{content:u.$route.meta.title,onBack:o[0]||(o[0]=r=>u.$router.back())},null,8,["content"])]),_:1}),K((i(),Y(h,{ref_key:"formRef",ref:F,model:a(t),"label-width":"120px",rules:g},{default:s(()=>[e(c,{class:"!border-none mt-4",shadow:"never"},{default:s(()=>[te,e(l,{label:"\u901A\u77E5\u540D\u79F0",prop:"name"},{default:s(()=>[m(d(a(t).name),1)]),_:1}),e(l,{label:"\u901A\u77E5\u7C7B\u578B",prop:"name"},{default:s(()=>[m(d(a(t).type),1)]),_:1}),e(l,{label:"\u901A\u77E5\u4E1A\u52A1",prop:"name"},{default:s(()=>[m(d(a(t).remarks),1)]),_:1})]),_:1}),e(c,{class:"!border-none mt-4",shadow:"never"},{default:s(()=>[oe,e(l,{label:"\u5F00\u542F\u72B6\u6001",prop:"smsNotice.status",required:""},{default:s(()=>[e(I,{modelValue:a(t).smsNotice.status,"onUpdate:modelValue":o[1]||(o[1]=r=>a(t).smsNotice.status=r)},{default:s(()=>[e(b,{label:"0"},{default:s(()=>[m("\u5173\u95ED")]),_:1}),e(b,{label:"1"},{default:s(()=>[m("\u5F00\u542F")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(l,{label:"\u6A21\u677FID",prop:"smsNotice.templateId"},{default:s(()=>[n("div",se,[e(E,{modelValue:a(t).smsNotice.templateId,"onUpdate:modelValue":o[2]||(o[2]=r=>a(t).smsNotice.templateId=r),placeholder:"\u8BF7\u8F93\u5165\u6A21\u677FID"},null,8,["modelValue"])])]),_:1}),e(l,{label:"\u77ED\u4FE1\u5185\u5BB9",prop:"smsNotice.content"},{default:s(()=>[n("div",ae,[n("div",ue,[e(E,{type:"textarea",autosize:{minRows:6,maxRows:6},modelValue:a(t).smsNotice.content,"onUpdate:modelValue":o[3]||(o[3]=r=>a(t).smsNotice.content=r)},null,8,["modelValue"])]),n("div",re,[(i(!0),_(Z,null,ee(a(t).smsNotice.tips,(r,k)=>(i(),_("div",{key:k},d(r),1))),128))])])]),_:1})]),_:1})]),_:1},8,["model"])),[[R,a(p)]]),e(C,null,{default:s(()=>[e(A,{type:"primary",onClick:w},{default:s(()=>[m("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{ze as default};