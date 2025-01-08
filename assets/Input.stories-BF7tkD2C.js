import{j as I}from"./jsx-runtime-DR9Q75dM.js";import{j as f,a as n,c as o,g as w,G as j}from"./prefix-Bn27aDeQ.js";import{r as A}from"./index-DRjF_FHU.js";import{C as e}from"./colors-s21EB8E3.js";import{f as q}from"./index-B5ZI-g0m.js";const r=`${j}-input`,l=w(r),b=A.forwardRef((a,d)=>{const{colorType:u,type:i,size:m="small",label:t,helpText:x,status:R="default",className:S,icon:h,...T}=a;return f("div",{css:B,className:l(["container",R,S]),children:[t&&n("label",{className:l(["label"]),children:t}),f("div",{className:l(["wrapper"]),children:[n("input",{ref:d,type:i,className:l([u,"inner",{disabled:T.disabled},m]),...T}),h&&n("span",{className:l(["icon"]),children:h})]}),x&&n("p",{className:l(["helptext"]),children:x})]})}),V=o({fontSize:12,fontWeight:500,color:e.primary[800],marginBottom:2}),E=o({fontSize:10,fontWeight:300,marginTop:5}),P=o({padding:"10px 20px",fontsize:14,display:"inline-flex",alignItems:"center",border:"1.2px solid",borderRadius:8,backgroundColor:e.primary[100],cursor:"text",[`&.${r}-small`]:{width:200,height:14},[`&.${r}-medium`]:{width:260,height:24},[`&.${r}-disabled`]:{backgroundColor:e.primary[200],borderColor:e.primary[300],cursor:"not-allowed"}}),k=o({position:"relative",[`> input.${r}-inner`]:P,[`> span.${r}-icon`]:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}),B=o({display:"flex",flexDirection:"column",gap:2,width:"100%",[`> label.${r}-label`]:V,[`> div.${r}-wrapper`]:k,[`> p.${r}-helptext`]:E,[`&.${r}-default`]:{color:e.primary[700],[`> div.${r}-wrapper > input.${r}-inner`]:{borderColor:e.primary[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:e.primary[800]}}},[`&.${r}-success`]:{color:e.green[500],[`> div.${r}-wrapper > input.${r}-inner`]:{borderColor:e.green[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:e.primary[800]}}},[`&.${r}-error`]:{color:e.red[500],[`> div.${r}-wrapper > input.${r}-inner`]:{borderColor:e.red[500],"&:focus":{transition:"border-color 0.2s, color 0.2s",outline:"none",borderColor:e.primary[800]}}}});try{b.displayName="Input",b.__docgenInfo={description:"",displayName:"Input",props:{colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const s=`${j}-textarea`,y=w(s),g=A.forwardRef((a,d)=>{const{size:u="large",label:i,className:m,...t}=a;return f("div",{css:W,className:y(["container",m]),children:[i&&n("label",{className:y(["label"]),children:i}),n("textarea",{ref:d,className:y([u,"inner",{disabled:t.disabled}]),...t})]})}),D=o({fontSize:12,fontWeight:700,color:e.primary[800]}),L=o({padding:"10px 20px",fontsize:14,display:"inline-flex",alignItems:"center",border:"1.2px solid",borderRadius:8,borderColor:e.primary[500],backgroundColor:e.primary[100],cursor:"text","&:focus":{outline:"none",color:e.primary[800],borderColor:e.primary[800]},[`&.${s}-large`]:{width:660,height:280},[`&.${s}-disabled`]:{backgroundColor:e.primary[200],borderColor:e.primary[300],cursor:"not-allowed"}}),W=o({display:"flex",flexDirection:"column",gap:16,width:"100%",[`> label.${s}-label`]:D,[`> textarea.${s}-inner`]:L});try{g.displayName="TextArea",g.__docgenInfo={description:"",displayName:"TextArea",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const M={title:"Input",args:{onChange:q(),placeholder:"Input"}},p={render:a=>I.jsx(b,{...a}),args:{colorType:"primary",type:"text",size:"small",status:"default",label:"",helpText:"",disabled:!1},argTypes:{colorType:{control:"radio",options:["primary"]},type:{control:"radio",options:["text","password"]},size:{control:"radio",options:["small","medium"]},status:{control:"radio",options:["default","success","error"]},label:{control:"object"},helpText:{control:"object"}}},c={render:a=>I.jsx(g,{...a}),args:{size:"large",label:"",placeholder:"TextArea",disabled:!1},argTypes:{size:{control:"radio",options:["large"]},label:{control:"object"}}};var $,C,_;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return <Input {...args} />;
  },
  args: {
    colorType: 'primary',
    type: 'text',
    size: 'small',
    status: 'default',
    label: '',
    helpText: '',
    disabled: false
  },
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['primary']
    },
    type: {
      control: 'radio',
      options: ['text', 'password']
    },
    size: {
      control: 'radio',
      options: ['small', 'medium']
    },
    status: {
      control: 'radio',
      options: ['default', 'success', 'error']
    },
    label: {
      control: 'object'
    },
    helpText: {
      control: 'object'
    }
  }
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var v,N,z;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <TextArea {...args} />;
  },
  args: {
    size: 'large',
    label: '',
    placeholder: 'TextArea',
    disabled: false
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large']
    },
    label: {
      control: 'object'
    }
  }
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const U=["Basic","Textarea"];export{p as Basic,c as Textarea,U as __namedExportsOrder,M as default};
