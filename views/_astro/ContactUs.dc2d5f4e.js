import{r as d}from"./index.df40002d.js";import{C as E}from"./CustomTitle.35dbdb19.js";import{j as e}from"./jsx-runtime.b650ad46.js";import{l as F}from"./logo.7a379262.js";import{B as y}from"./Btn.b2e38e83.js";import{u as N,C as v}from"./index.8a4e72ea.js";const k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURQCfBgCSCwCRDACQFQCOCwCXDwCZAEdwTACjAACTFwCzAAC3AAC8AAHDDgDABP///wCwABnIKDfQQlrZZ3zZhnvhhyK7J6Hgo8vvy+f06GjTbkfEUfb49hS/FOg+w1cAAAAKdFJOU/htebxF8bwA+vneik0GAAAA5klEQVQoz22SW5KEIAwAUyOIQjTAuIig97/mBpyHuNtFkUAXCR8BpUQnxwbZCaVAPcacloaUx4cCAfnnzpL5ugvPfwgdSOcb0rou3jsJ4Br8RuQ5AsDUsBCtJd6F22lzLzFfxUqUJr5BFjjP81QWb5kozpUqphDCeYzcuSbniynuey6nxJ3xIwyi55YH4rHVUDCnwPLJuidsBXLxHHaKeBPGE238Vf8WmoU2BS7D5cybrzBcbDs+wrKwZxq4s7kKaXXFLFF/sRL6l9AmXEUPYqjG6it2EDwMg/3DwMPA49PD0AA9j88v3b8eH/TPTLMAAAAASUVORK5CYII=",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURfEmJrclJeUAAMECAukHB/UICLQREbEAAEdwTNsAAPoXF/QZGfsZGfAAAOYAAPYAAOoAANvadP8AAAANdFJOUygP6L3o6B4oAOjIs8EyZuFXAAAAqElEQVQoz1XSUQ6EIAxF0VfAtEgU9r/aKUyFtonG3COBDyBCDRIGjfQldPcrCK5+k0B7D6K9q6D1HmT13hs4BbGeGMLFifXCurlweuZMwbU+E89TOXF9wRbX/2AyxukGwnVo1mdUFg+6ZvZn2P8HUMaagghfPwLr7x4TuF7r+45P4DpzPWvg+jz1FvjuBaE7QQ59Swbl0E0y6WXIoS/JNE9FmeP1Ye3yA7lvFFCeMsHOAAAAAElFTkSuQmCC",P="/_astro/actave1.a2285b8d.m4a",D="/_astro/actave2.7fa10d70.m4a",T="/_astro/actave3.7a0edb71.m4a",Q="/_astro/actave4.cc13f13f.m4a",O="/_astro/actave5.c83f58cb.m4a",L="/_astro/actave6.86b0d3cd.m4a",M="/_astro/actave7.a1070994.m4a",f=({type:i,label:n,name:a,value:A,onChange:t,required:o,onBlur:l})=>e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"peer py-[14px] mt-10   bg-[transparent] placeholder-transparent block border-b border-b-[#48485C] w-full lg:max-w-[470px] focus:outline-none  ",type:i||"text",value:A,onChange:t,name:a,id:a,placeholder:"placeholder",required:o,onBlur:l}),e.jsx("label",{htmlFor:a,className:"block absolute text-base peer-focus:text-base  bottom-[55px] peer-focus:bottom-[55px] peer-focus:text-[#FAFAFA] transition-all text-[#A5a5a5] peer-placeholder-shown:text-sm peer-placeholder-shown:bottom-[15px]    ",children:n})]}),c=({children:i,src:n})=>{const[a,A]=d.useState(!1),t=d.useRef(null),o=d.useRef(null),l=()=>{o.current.currentTime=0,o.current.play(),t.current.classList.add("pressed")},p=s=>{s.stopPropagation(),a||l()},r=s=>{s.stopPropagation(),t.current.classList.remove("pressed")},u=s=>{s.stopPropagation(),l(),A(!0)},m=s=>{s.stopPropagation(),t.current.classList.remove("pressed"),A(!0)};return e.jsxs("button",{ref:t,style:{cursor:"pointer"},type:"button",className:"piano-btn  ",onMouseDown:p,onMouseUp:r,onMouseLeave:r,onTouchStart:u,onTouchEnd:m,children:[e.jsx("audio",{ref:o,src:n,preload:"auto",type:"audio/wav"}),e.jsx("span",{className:"rotate-90 inline-block lg:rotate-0",onMouseDown:p,onMouseUp:r,onMouseLeave:r,onTouchStart:u,onTouchEnd:m,children:i})]})},G=()=>e.jsx("div",{className:"lg:inline-block lg:absolute left-0 w-full  lg:w-[500px] xl:w-[600px] top-[180px] z-10 paino-holder  select-none",children:e.jsxs("div",{className:"relative perspective mx-auto w-[250px] xs:w-[430px] lg:w-[unset] -rotate-90 lg:rotate-0",children:[e.jsx("div",{className:"piano-line"}),e.jsx("div",{className:"piano-shadow left-0 top-1/2 lg:left-1/2"}),e.jsx("img",{src:F,className:"absolute left-0 -translate-x-1/2 hidden lg:block w-[110%] -top-10",alt:"octavey logo"}),e.jsx("div",{className:"paino-up-btn top-[36px]  xs:top-[50px]",children:e.jsx(c,{src:L,children:"c"})}),e.jsx("div",{className:"paino-up-btn top-[51%]",children:e.jsx(c,{src:M,children:"v"})}),e.jsx(c,{src:P,children:"o"}),e.jsx(c,{src:D,children:"t"}),e.jsx(c,{src:T,children:"a"}),e.jsx(c,{src:Q,children:"e"}),e.jsx(c,{src:O,children:"y"})]})}),V=()=>{const{values:i,handleBlur:n,handleChange:a,resetForm:A}=N({initialValues:{name:"",email:"",message:"",lang:"ar"},validationSchema:v}),{name:t,email:o,message:l}=i,[p,r]=d.useState({}),[u,m]=d.useState(!1),[s,b]=d.useState(!1);//! google recaptcha 3
function w(h){h.preventDefault(),b(!0),grecaptcha.ready(async()=>{try{if(!v.isValidSync({name:t,email:o,message:l}))throw new Error("Unvalid data");const x=await grecaptcha.execute("6Lc0vfkjAAAAABMrAfGgBk58qArgpYUNulBwgJ0e",{action:"submit"});if(!x)throw new Error("الرجاء اجتياز اختبار الامان");const g=new FormData;for(let[U,B]of Object.entries(i))g.append(U,B);g.append("g-recaptcha-response",x);const j=await(await fetch("/sendmail.php",{method:"POST",body:g})).json(),C=j.message;j.status=="success"?(A(),m(!0),r(!1)):r({isError:!0,message:C})}catch(x){r({isError:!0,message:x?.message})}finally{b(!1)}})}return e.jsxs("section",{id:"contact-us",className:" pb-[40px] sm:pb-[100px] lg:py-[140px] pt-[180px] relative lg:overflow-hidden",children:[e.jsx("div",{className:"container relative",children:e.jsxs("div",{className:"flex flex-col mb-20 lg:mb-0 lg:flex-row",children:[e.jsx("div",{className:"right lg:w-1/2",children:e.jsxs("form",{autoComplete:"off",onSubmit:h=>w(h),children:[e.jsxs(E,{right:!0,children:["تواصل معنا",e.jsx("span",{className:" inline-block scale-x-[2.5] origin-right",children:"_"})]}),e.jsx("h2",{className:"font-bold text-[24px] mt-6 text-center lg:text-right",children:"بحاجة إلى استشارة تقنية؟ تواصل معنا الآن"}),e.jsx(f,{label:"الاسم",value:t,onChange:a,onBlur:n,name:"name",required:!0}),e.jsx(f,{label:"البريد الالكتروني",type:"email",required:!0,onChange:a,onBlur:n,name:"email",value:o}),e.jsx(f,{label:"الرسالة",required:!0,onChange:a,onBlur:n,name:"message",value:l}),e.jsxs("p",{className:"pt-6 pb-4 recaptcha",children:["هذا الموقع محمي بواسطة reCaptcha من جوجل, تطبق"," ",e.jsx("a",{target:"_blank",href:"https://policies.google.com/privacy",children:"سياسة الخصوصية"})," ","و"," ",e.jsx("a",{target:"_blank",href:"https://policies.google.com/terms",children:"اتفاقية الاستخدام"})," "]}),e.jsx("div",{className:`mt-[46px] w-fit mx-auto lg:mx-0${s?" opacity-[0.6] pointer-events-none":""}`,children:e.jsx("div",{className:"relative group",children:e.jsx(y,{type:"submit",children:e.jsx("span",{className:"px-2 inline-block",children:s?"جاري الارسال...":"إرسال"})})})}),u&&e.jsxs("p",{className:"py-4",children:[e.jsx("img",{src:k,className:"inline-block ml-1",alt:"true mark"}),"شكراً لتواصلك معنا! سيتم الرد عليك في أقرب وقت ممكن"]}),p?.isError&&e.jsxs("p",{className:"py-4 text-[#FF7D7D]",children:[e.jsx("img",{src:S,className:"inline-block ml-1",alt:"red mark"}),p?.message?p.message:" فشل إرسال الرسالة! حاول مرة أخرى "]})]})}),e.jsx("div",{className:"left lg:w-1/2"})]})}),e.jsx(G,{})]})};export{V as default};