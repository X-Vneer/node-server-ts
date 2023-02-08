import{r as A}from"./index.df40002d.js";import{C as v}from"./CustomTitle.35dbdb19.js";import{j as e}from"./jsx-runtime.b650ad46.js";import{u as w,a as f}from"./index.8a4e72ea.js";import{B as y}from"./Btn.b2e38e83.js";const E="/_astro/upload.3c7c21a4.svg",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHWSURBVHgB3ZTNUeNAEIXnB929GWgDAHkKiSpOK2dgIrDJgI1gdyNYiAATgU0EFlcLSjYQgIkAnxGa5nWNZCQj/m4UXeXSaKbnm+fXPRLiq4f8TPLV1c0fIWhIJHxsnWNqFIbbJ58GZlnWKQo9xjDGb0JECyllgHFfSjHa3d05/DDQwbamQlifyB5EkUmqtTRdHAH8Hwf8i6Lg77vAOsxa29vbM/PNnMvL6ylU+lD5k9/VW8A8V8cVzPPEsi0H6i6cpy5eBaZpFislB1qLI89TATy8h5oxVPtNoIAVtHwVyH8TG2G26uN1ZUxwBpXnGMN4imHBuMqdzbIuH4rhWTUnN2GlZxfl8iAMd37UVUupp1rrfp4/3CmlkUvLMAxMq8JaAUZ4JpjqpOlNXK27CtOqKB57Sqkhw7S2vTpjDSybtsutwdUMQzPB+1xKgm+3A1YvGiEThhljVvXZrechDblJAUqqmTy3B56nT4uCFYtDeMvTHSI5iaLtRLTEGlhW666+uL9vlnj0WF2eC18pMXWHtsMaQCRis/zVluRgrgBK2d/ijVh7aC1x6WO+TvUE148O1ubZZjTaZjZbjMq+anwAuDgfgb0Alopw4RWgsss2sPLq4n+PeAI+pvSgQWq1XAAAAABJRU5ErkJggg==",b=({name:l,label:o,required:a,type:i,value:n,onChange:c,onBlur:s,placeholder:d,className:m,lang:r,error:t})=>(a||=!0,e.jsxs("div",{className:"my-4",children:[e.jsxs("label",{className:"block mb-4 font-bold",htmlFor:l,children:[o," ",a&&e.jsx("span",{className:"text-[#FF6767]",children:" *"})]}),i==="textArea"?e.jsx("textarea",{rows:"4",dir:r=="en"?"ltr":"rtl",lang:r||"en",className:`block focus:outline-none rounded-md w-full px-4 py-2   border mb-6 resize-none ${m} ${t&&"border-red-500"}`,id:l,name:l,required:!0,placeholder:d||"type here...",value:n,onChange:c,onBlur:s}):e.jsx("input",{dir:r=="en"?"ltr":"rtl",lang:r||"en",className:`block focus:outline-none rounded-md w-full px-4 py-2   border mb-6  ${m}
          ${t&&"border-red-500"}
          `,type:i||"text",id:l,name:l,required:!0,placeholder:d||"type here...",value:n,onChange:c,onBlur:s})]})),L=({filesList:l,setFilesList:o,maxNum:a,label:i,required:n,setError:c})=>{n||=!0;const s=A.useRef(null),d=()=>{s.current.classList.add("opacity-60")},m=()=>{s.current.classList.remove("opacity-60")},r=()=>{s.current.classList.remove("opacity-60")},t=".pdf,.doc,.docx,.odt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/rtf",x=u=>{if(l.length>0)return;let p;t.includes(u.target.files[0].type)?p=u.target.files[0]:c({isError:!0,message:"امتداد الملف غير مدعوم, يرجى رفع ملف من نوع .PDF or .docx"}),p&&o([p])},h=()=>{o([])};return e.jsxs("div",{className:"mt-6 mb-2 relative",children:[l.length>0&&e.jsxs("div",{dir:"ltr",lang:"en",className:"absolute left-2 right-2 top-12 px-1 py-[2px] bg-[#3C3C51] text-textGray z-10  rounded-[4px] flex  items-center justify-between",children:[e.jsx("img",{src:F,className:"mr-1",alt:"link"}),e.jsx("p",{className:"whitespace-nowrap overflow-hidden text-sm  grow ",children:l[0].name}),e.jsx("span",{onClick:h,className:"block ml-2  cursor-pointer",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M4.2603 13.4326C3.92 13.7728 3.90379 14.3803 4.2684 14.7286C4.6168 15.0932 5.23258 15.077 5.57288 14.7367L9.50254 10.8082L13.4322 14.7367C13.7806 15.0851 14.3802 15.0932 14.7286 14.7286C15.0932 14.3803 15.0851 13.7728 14.7367 13.4245L10.807 9.49595L14.7367 5.57548C15.0851 5.21907 15.0932 4.61966 14.7286 4.27135C14.3802 3.90685 13.7806 3.91495 13.4322 4.26325L9.50254 8.19183L5.57288 4.26325C5.23258 3.92305 4.6168 3.90685 4.2684 4.27135C3.90379 4.61966 3.92 5.22717 4.2603 5.56738L8.18995 9.49595L4.2603 13.4326Z",fill:"#CCCCD2"})})})]}),e.jsxs("label",{className:`block mb-4 font-bold ${l.length>=a&&" cursor-default pointer-events-none"}`,htmlFor:"filesListInput",children:[i," ",n&&e.jsx("span",{className:"text-[#FF6767]",children:" *"})]}),e.jsxs("p",{ref:s,onDragEnter:d,onDragLeave:m,onDrop:r,className:`block text-center bg-[#212139] text-textGray  border-[#48485C] border-dashed  border rounded-lg py-5 px-7 ${l.length>=a&&"opacity-60 cursor-default pointer-events-none pt-11"}`,children:[e.jsx("img",{className:"inline mx-3",src:E,alt:"upload"}),e.jsx("span",{className:" font-semibold text-customWhite",children:"أختر ملف،"})," أو أسحب وأفلت الملف هنا",e.jsx("input",{type:"file",value:"",accept:t,id:"filesListInput",onChange:x,className:" absolute inset-0 block opacity-0 cursor-pointer "})]})]})},B=({error:{isError:l,message:o}})=>l?e.jsxs("p",{className:"text-[#FF8F97] text-sm",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",className:"inline-block ml-2",children:[e.jsx("path",{d:"M20.9623 20.8535C24.8013 17.0145 24.8013 10.7902 20.9623 6.9512C17.1233 3.11219 10.899 3.11219 7.06003 6.9512C3.22102 10.7902 3.22102 17.0145 7.06003 20.8535C10.899 24.6925 17.1233 24.6925 20.9623 20.8535Z",fill:"#FE646F"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.0138 16.868C13.7957 16.868 13.609 16.6819 13.5711 16.4259L12.4554 8.90052C12.3151 7.95278 12.9274 7.08398 13.7354 7.08398H14.2917C15.0997 7.08398 15.7119 7.95278 15.5717 8.90052L14.4559 16.4259C14.4186 16.6819 14.2319 16.868 14.0138 16.868ZM15.0346 19.6989C15.0346 19.1368 14.5759 18.6781 14.0138 18.6781C13.4517 18.6781 12.993 19.1368 12.993 19.6989C12.993 20.2611 13.4517 20.7197 14.0138 20.7197C14.5759 20.7197 15.0346 20.2616 15.0346 19.6989Z",fill:"white"})]}),o]}):e.jsx(e.Fragment,{}),H=()=>{const[l,o]=A.useState({isError:!1,message:""}),a=(T,U)=>{},{values:{fullName:i,email:n,phoneNumber:c},errors:s,touched:d,handleSubmit:m,handleBlur:r,handleChange:t}=w({initialValues:{fullName:"",email:"",phoneNumber:""},validationSchema:f,onSubmit:a}),{fullName:x,email:h,phoneNumber:u}=s,{fullName:p,email:N,phoneNumber:j}=d,[g,C]=A.useState([]);return e.jsx("div",{className:"w-full lg:w-1/2",children:e.jsxs("form",{children:[e.jsxs("div",{className:"mb-12",children:[e.jsx(v,{children:"أنضم إلينا"}),e.jsx("h1",{className:"text-2xl font-bold mb-8 ",children:"أرسل طلبك وسنعاود التواصل قريبًا !"}),e.jsx(b,{name:"fullName",value:i,onChange:t,onBlur:r,label:"الاسم بالكامل",placeholder:"أكتب اسمك بالكامل هنا",className:"border-[#2D334E] bg-[#212139]",error:x&&p}),e.jsx(b,{name:"email",value:n,onChange:t,onBlur:r,label:"البريد الإلكتروني",lang:"en",type:"email",placeholder:"ex@gmail.com",className:"border-[#2D334E] bg-[#212139]",error:h&&N}),e.jsx(b,{name:"phoneNumber",value:c,onChange:t,onBlur:r,label:"رقم الجوال ",placeholder:"ادخل رقم الجوال هنا",className:"border-[#2D334E] bg-[#212139]",error:u&&j}),e.jsx(L,{label:" السيرة الذاتية ",filesList:g,setFilesList:C,maxNum:1,setError:o}),e.jsx(B,{error:l})]}),f.isValidSync({fullName:i,email:n,phoneNumber:c})&&g.length>0?e.jsx(y,{type:"submit",children:"تقدم الآن"}):e.jsx("button",{type:"button",className:"block pointer-events-none rounded-[26px] border-[2px] border-[#9595A0] bg-[#9595A0] text-[14px] md:text-[16px] font-bold py-2 px-5 md:py-3 md:px-[26px]  ",children:"تقدم الآن"})]})})};export{H as default};