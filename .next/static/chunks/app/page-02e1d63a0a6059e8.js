(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4549:function(e,r,o){Promise.resolve().then(o.bind(o,5291)),Promise.resolve().then(o.bind(o,2461)),Promise.resolve().then(o.bind(o,2877))},5291:function(e,r,o){"use strict";o.r(r),o.d(r,{Content:function(){return s}});var a=o(9268),t=o(6006),n=o(6095),i=o(2499),l=o(1873);function s(){let[e,r]=(0,t.useState)(!1),[o,s]=(0,t.useState)([]),[d,c]=(0,t.useState)({titulo:"",descripcion:"",tipo:"1",password:""});(0,t.useEffect)(()=>{(0,l._)("/debates",{},e=>s(e.object_list),e=>console.log(e))},[]);let p=()=>r(!e),u=e=>{e.preventDefault(),m()&&(0,l._)("/debates",{method:"post",data:d},e=>{s([...o,e.obj]),c({titulo:"",tipo:"1",descripcion:"",password:""}),r(!1)},e=>alert("Error: ".concat(e)))},v=e=>{console.log(e.target.name,e.target.value),c(r=>({...r,[e.target.name]:e.target.value}))},m=()=>{let e=Object.fromEntries(Object.entries(d).filter(e=>{let[r]=e;return"password"!==r}));return Object.values(e).every(e=>""!==e)};return(0,a.jsx)("section",{className:"py-12 px-8",children:(0,a.jsxs)("div",{className:"mx-auto max-w-screen-md",children:[(0,a.jsxs)(n.Dialog,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,size:"sm",open:e,handler:p,className:"p-4",children:[(0,a.jsxs)(n.DialogHeader,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,className:"relative m-0 block",children:[(0,a.jsx)(n.Typography,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,variant:"h4",color:"blue-gray",children:"Agregar Debate"}),(0,a.jsx)(n.IconButton,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,size:"sm",variant:"text",className:"!absolute right-3.5 top-3.5",onClick:p,children:(0,a.jsx)(i.Z,{className:"h-4 w-4 stroke-2"})})]}),(0,a.jsxs)(n.DialogBody,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,className:"space-y-4 pb-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Typography,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,variant:"small",color:"blue-gray",className:"mb-2 text-left font-medium",children:"Nombre"}),(0,a.jsx)(n.Input,{crossOrigin:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,color:"gray",size:"lg",value:d.titulo,onChange:v,placeholder:"Nombre del Tema",name:"titulo",className:"placeholder:opacity-100 focus:!border-t-gray-900",containerProps:{className:"!min-w-full"},labelProps:{className:"hidden"}})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Typography,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,variant:"small",color:"blue-gray",className:"mb-2 text-left font-medium",children:"Tipo"}),(0,a.jsxs)(n.Select,{onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,className:"!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary",placeholder:"1",name:"tipo",value:d.tipo,onChange:e=>c(r=>({...r,tipo:e})),labelProps:{className:"hidden"},children:[(0,a.jsx)(n.Option,{value:"1",children:"Abierto"}),(0,a.jsx)(n.Option,{value:"0",children:"Cerrado"})]})]}),(0,a.jsx)("div",{className:"flex gap-4",children:(0,a.jsx)("div",{className:"w-full",children:"0"===d.tipo&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Typography,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,variant:"small",color:"blue-gray",className:"mb-2 text-left font-medium",children:"Clave de acceso"}),(0,a.jsx)(n.Input,{color:"gray",onPointerEnterCapture:void 0,crossOrigin:void 0,onPointerLeaveCapture:void 0,value:d.password,onChange:v,placeholder:"********",label:"Password",size:"lg"})]})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Typography,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,variant:"small",color:"blue-gray",className:"mb-2 text-left font-medium",children:"Descripci\xf3n"}),(0,a.jsx)(n.Textarea,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,rows:5,name:"descripcion",value:d.descripcion,onChange:v,className:"!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary",labelProps:{className:"hidden"}})]})]}),(0,a.jsx)(n.DialogFooter,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:(0,a.jsx)(n.Button,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,onClick:u,className:"ml-auto",children:"Enviar"})})]}),(0,a.jsxs)("div",{className:"container mx-auto space-y-5 px-4 py-20",children:[(0,a.jsxs)("div",{className:"w-full mb-10 md:flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex mb-5 md:mb-0 items-center gap-3",children:[(0,a.jsx)(n.Button,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,size:"sm",color:"gray",variant:"outlined",children:"Abiertas"}),(0,a.jsx)(n.Button,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,size:"sm",color:"gray",variant:"outlined",children:"Cerradas"}),(0,a.jsx)(n.Button,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,size:"sm",color:"gray",variant:"outlined",children:"Ver Todas"})]}),(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)(n.Button,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,onClick:p,color:"blue",className:"w-1/2 md:w-fit flex-shrink-0",size:"md",children:"Crear Debate"})})]}),null==o?void 0:o.map((e,r)=>(0,a.jsxs)("div",{className:" md:flex items-center justify-between",children:[(0,a.jsx)("div",{className:"mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Typography,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,variant:"h5",className:"mb-4 md:mb-0",color:"blue-gray",children:e.titulo}),(0,a.jsx)(n.Typography,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,className:"w-full md:w-10/12 font-normal !text-gray-500",children:e.descripcion})]})}),(0,a.jsx)(n.Button,{placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,color:"gray",className:"w-1/2 md:w-fit flex-shrink-0",size:"md",children:(0,a.jsx)("a",{href:"/debates/".concat(e.slug),children:" Participar"})})]},r))]})]})})}r.default=s}},function(e){e.O(0,[169,785,887,667,139,744],function(){return e(e.s=4549)}),_N_E=e.O()}]);