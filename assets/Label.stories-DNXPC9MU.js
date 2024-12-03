import{c as r,a as E,g as G,G as I}from"./prefix-BLNPpWIh.js";import{C as e}from"./colors-s21EB8E3.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";const c=o=>{const{colorType:l="primary",light:u=!0,size:m="small",className:x,...P}=o,R=`${I}-label`,B=G(R);return E("span",{className:B([l,{light:u},m],x),css:r(N,q(l,u),V[m]),...P})},N=r({padding:"0px 10px",display:"inline-flex",justifyContent:"center",alignItems:"center",gap:10,border:"none",borderRadius:100,fontWeight:"500",lineHeight:"22px"}),p={primary:{light:r({backgroundColor:e.primary[300],color:e.primary[800]}),bold:r({backgroundColor:e.primary[800],color:e.primary[100]})},white:{light:r({backgroundColor:e.primary[600],color:e.primary[100]}),bold:r({backgroundColor:e.primary[200],color:e.primary[800]})},blue:{light:r({backgroundColor:e.blue[100],color:e.blue[500]}),bold:r({backgroundColor:e.blue[500],color:e.primary[100]})},green:{light:r({backgroundColor:e.green[100],color:e.green[500]}),bold:r({backgroundColor:e.green[500],color:e.primary[100]})},yellow:{light:r({backgroundColor:e.yellow[100],color:e.yellow[500]}),bold:r({backgroundColor:e.yellow[500],color:e.primary[100]})},red:{light:r({backgroundColor:e.red[100],color:e.red[500]}),bold:r({backgroundColor:e.red[500],color:e.primary[100]})}},q=(o,l)=>l?p[o].light:p[o].bold,V={small:r({fontSize:12}),medium:r({fontSize:14,padding:"2px 12px"})};try{c.displayName="Label",c.__docgenInfo={description:"",displayName:"Label",props:{colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"blue"'},{value:'"green"'},{value:'"yellow"'},{value:'"red"'},{value:'"white"'}]}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}}}catch{}const X={title:"Label",component:c,tags:["autodocs"],args:{children:"Label"}},a={args:{colorType:"primary",size:"small",light:!0}},s={args:{colorType:"blue",size:"small",light:!0}},t={args:{colorType:"green",size:"medium",light:!0}},n={args:{colorType:"yellow",size:"small",light:!0}},i={args:{colorType:"red",size:"medium",light:!0}};var d,g,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    colorType: 'primary',
    size: 'small',
    light: true
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,h,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    colorType: 'blue',
    size: 'small',
    light: true
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,z,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    colorType: 'green',
    size: 'medium',
    light: true
  }
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var T,k,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    colorType: 'yellow',
    size: 'small',
    light: true
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var _,w,v;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    colorType: 'red',
    size: 'medium',
    light: true
  }
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const Y=["Primary","Blue","Green","Yellow","Red"];export{s as Blue,t as Green,a as Primary,i as Red,n as Yellow,Y as __namedExportsOrder,X as default};
