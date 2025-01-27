import{j as l}from"./jsx-runtime-DR9Q75dM.js";import{b,d as h,j as n,c as u,P as w}from"./context-C8IlOjeA.js";import{I as S}from"./check-BtRw9FP0.js";import{R as j,r as y}from"./index-DRjF_FHU.js";import{C as _}from"./ConfigProvider-B76vDKOI.js";const e=`${w}-checkbox`,t=j.forwardRef((c,i)=>{const{colorType:o,name:a,labelStyle:d,className:p,children:r,...m}=c,{disabled:x,checked:k}=m,$=b(`${e}-wrapper`,{[`${e}-disabled`]:x,[`${e}-checked`]:k},p),f=b(e,{[`${e}-${o}`]:o!=="primary"});return h("label",{ref:i,htmlFor:a,className:$,style:d,css:T,children:[h("span",{className:f,css:N,children:[n("input",{type:"checkbox",id:a,className:`${e}-input`,...m}),n("span",{className:`${e}-inner`,children:n(S,{className:b(`${e}-icon`,`${e}-icon-check`)})})]}),r&&n("span",{className:`${e}-helper`,css:R,children:r})]})}),T=u({display:"inline-flex",alignItems:"center",gap:8,cursor:"pointer",[`&.${e}-checked > .${e}`]:{backgroundColor:"var(--primary-700)",[`&.${e}-blue`]:{backgroundColor:"var(--blue-500)",borderColor:"var(--blue-500)"},[`&.${e}-green`]:{backgroundColor:"var(--green-500)",borderColor:"var(--green-500)"},[`&.${e}-yellow`]:{backgroundColor:"var(--yellow-500)",borderColor:"var(--yellow-500)"},[`&.${e}-red`]:{backgroundColor:"var(--red-500)",borderColor:"var(--red-500)"},[`> .${e}-inner`]:{opacity:1}},[`&.${e}-disabled`]:{cursor:"not-allowed",[`> .${e}`]:{backgroundColor:"var(--primary-200)",[`&.${e}-blue`]:{borderColor:"var(--blue-100)"},[`&.${e}-green`]:{borderColor:"var(--green-100)"},[`&.${e}-yellow`]:{borderColor:"var(--yellow-100)"},[`&.${e}-red`]:{borderColor:"var(--red-100)"}}},[`> .${e}-helper`]:{color:"var(--primary-400)"}}),N=u({position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",width:12,height:12,borderWidth:2,borderStyle:"solid",borderColor:"var(--primary-700)",borderRadius:4,transitionProperty:"all",transitionDuration:"100ms",transitionTimingFunction:"ease-out",[`&.${e}-blue`]:{borderColor:"var(--blue-300)"},[`&.${e}-green`]:{borderColor:"var(--green-300)"},[`&.${e}-yellow`]:{borderColor:"var(--yellow-300)"},[`&.${e}-red`]:{borderColor:"var(--red-300)"},[`> .${e}-input`]:{position:"absolute",inset:0,margin:0,padding:0,opacity:0,cursor:"unset"},[`> .${e}-inner`]:{display:"inline-flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",opacity:0,[`> .${e}-icon-check path`]:{stroke:"var(--primary-100)"}}}),R=u({fontSize:14,fontWeight:500,lineHeight:"8px",color:"var(--primary-800)"});try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"blue"'},{value:'"green"'},{value:'"yellow"'},{value:'"red"'}]}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const W={title:"Checkbox",component:t,tags:["autodocs"],args:{},argTypes:{name:{control:!1}},render:function(i){const[o,a]=y.useState(!1),[d,p]=y.useState("light");return l.jsx(_,{theme:{mode:d},children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[l.jsx("button",{onClick:()=>p(r=>r==="light"?"dark":"light"),style:{width:200,color:"var(--primary-800)",backgroundColor:"var(--primary-200)",border:"none",borderRadius:4},children:"Toggle Mode"}),l.jsx(t,{...i,checked:o,onChange:r=>a(r.target.checked),children:"This is Helper Text"})]})})}},s={args:{name:"checkbox",colorType:"yellow",disabled:!1,children:""}};var g,C,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'checkbox',
    colorType: 'yellow',
    disabled: false,
    children: ''
  }
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const q=["checkbox"];export{q as __namedExportsOrder,s as checkbox,W as default};