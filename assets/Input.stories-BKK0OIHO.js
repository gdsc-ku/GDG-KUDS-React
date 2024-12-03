import{j as m,a as o,c as s,g as N,G as _}from"./prefix-BLNPpWIh.js";import{r as z}from"./index-DRjF_FHU.js";import{C as r}from"./colors-s21EB8E3.js";import{f as S}from"./index-B5ZI-g0m.js";import"./jsx-runtime-DR9Q75dM.js";const e=`${_}-input`,a=N(e),n=z.forwardRef((i,T)=>{const{colorType:$,type:v,size:w="small",label:p,helpText:c,status:C="default",className:I,icon:d,...u}=i;return m("div",{css:V,className:a(["container",C,I]),children:[p&&o("label",{className:a(["label"]),children:p}),m("div",{className:a(["wrapper"]),children:[o("input",{ref:T,type:v,className:a([$,"inner",{disabled:u.disabled},w]),...u}),d&&o("span",{className:a(["icon"]),children:d})]}),c&&o("p",{className:a(["helptext"]),children:c})]})}),P=s({fontSize:12,fontWeight:500,color:r.primary[800],marginBottom:2}),q=s({fontSize:10,fontWeight:300,marginTop:5}),E=s({padding:"10px 20px",fontsize:14,display:"inline-flex",alignItems:"center",border:"1.2px solid",borderRadius:8,backgroundColor:r.primary[100],cursor:"text",[`&.${e}-small`]:{width:200,height:14},[`&.${e}-medium`]:{width:260,height:24},[`&.${e}-disabled`]:{backgroundColor:r.primary[200],borderColor:r.primary[300],cursor:"not-allowed"}}),R=s({position:"relative",[`> input.${e}-inner`]:E,[`> span.${e}-icon`]:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}),V=s({display:"flex",flexDirection:"column",gap:2,width:"100%",[`> label.${e}-label`]:P,[`> div.${e}-wrapper`]:R,[`> p.${e}-helptext`]:q,[`&.${e}-default`]:{color:r.primary[700],[`> div.${e}-wrapper > input.${e}-inner`]:{borderColor:r.primary[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:r.primary[800]}}},[`&.${e}-success`]:{color:r.green[500],[`> div.${e}-wrapper > input.${e}-inner`]:{borderColor:r.green[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:r.primary[800]}}},[`&.${e}-error`]:{color:r.red[500],[`> div.${e}-wrapper > input.${e}-inner`]:{borderColor:r.red[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:r.primary[800]}}}});try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const D={title:"Input",component:n,tags:["autodocs"],args:{onChange:S(),placeholder:"Input"}},l={args:{colorType:"primary",type:"text",size:"small",status:"default",label:"",helpText:"",disabled:!1}},t={args:{colorType:"primary",type:"password",size:"small",status:"success",label:"Password",helpText:"Enter characters more than 8",disabled:!1}};var f,y,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    colorType: 'primary',
    type: 'text',
    size: 'small',
    status: 'default',
    label: '',
    helpText: '',
    disabled: false
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    colorType: 'primary',
    type: 'password',
    size: 'small',
    status: 'success',
    label: 'Password',
    helpText: 'Enter characters more than 8',
    disabled: false
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const F=["Text","Password"];export{t as Password,l as Text,F as __namedExportsOrder,D as default};
