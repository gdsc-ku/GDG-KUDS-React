import{j as I,c as r,a as i,g as V,G as j}from"./prefix-kqzwbFHi.js";import{r as G}from"./index-DRjF_FHU.js";import{f as O}from"./index-B5ZI-g0m.js";import"./jsx-runtime-DR9Q75dM.js";const e={primary:{900:"#000000",800:"#101010",700:"#43474b",600:"#5f6367",500:"#adadad",400:"#c5c5c5",300:"#e1e2e4",200:"#f1f3f4",100:"#ffffff"},blue:{500:"#4285f4",300:"#8ab4f7",100:"#cadeff"},green:{500:"#34a853",300:"#81c995",100:"#b2e4c0"},yellow:{500:"#faab00",300:"#fee293",100:"#ffefc3"},red:{500:"#ea4336",300:"#f28b82",100:"#ffc5c0"}},d=G.forwardRef((t,x)=>{const{colorType:p="primary",size:N="medium",shape:S="round",disabled:R,loading:o,icon:m,className:A,children:F,...P}=t,q=`${j}-btn`,a=V(q);return I("button",{ref:x,className:a([p,S==="circle"?"circle":"",o?"loading":""],A),css:r(X,L[p],W[N]),disabled:R||o,...P,children:[o&&i("span",{className:a(["icon","loading-icon"]),children:"loading icon"}),!o&&m&&i("span",{className:a(["icon"]),children:m}),!o&&i("span",{className:a(["inner"]),children:F})]})}),X=r({padding:"14px 20px",display:"inline-flex",justifyContent:"center",alignItems:"center",gap:8,border:"none",borderRadius:300,transitionProperty:"background-color, color",transitionDuration:"150ms",transitionTimingFunction:"ease-in-out",cursor:"pointer","&:disabled":{backgroundColor:e.primary[400],color:e.primary[100],cursor:"not-allowed","&:hover":{backgroundColor:e.primary[400],color:e.primary[100]},"&:active":{backgroundColor:e.primary[400],color:e.primary[100]}}}),L={primary:r({backgroundColor:e.primary[800],color:e.primary[100],"&:hover":{backgroundColor:e.primary[200],color:e.primary[800]},"&:active":{backgroundColor:e.primary[300],color:e.primary[800]}}),blue:r({backgroundColor:e.blue[500],color:e.primary[100],"&:hover":{backgroundColor:e.blue[100]},"&:active":{backgroundColor:e.blue[300]}}),green:r({backgroundColor:e.green[500],color:e.primary[100],"&:hover":{backgroundColor:e.green[100]},"&:active":{backgroundColor:e.green[300]}}),yellow:r({backgroundColor:e.yellow[500],color:e.primary[100],"&:hover":{backgroundColor:e.yellow[100]},"&:active":{backgroundColor:e.yellow[300]}}),red:r({backgroundColor:e.red[500],color:e.primary[100],"&:hover":{backgroundColor:e.red[100]},"&:active":{backgroundColor:e.red[300]}})},W={large:r({width:"100%",height:48}),medium:r({minWidth:120,maxWidth:150,height:48})};try{d.displayName="Button",d.__docgenInfo={description:`?: css 파일은 컴포넌트 외부에 선언되는데, PREFIX가 붙은 class 선택자는 어떻게 가져올 수 있을까?
 => 전역변수 생성 후, getter 함수 작성해야할 듯. setter는 config에서만 할 수 있도록?
 => 이건 config 만들 때 같이 해야할 듯`,displayName:"Button",props:{colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"blue"'},{value:'"green"'},{value:'"yellow"'},{value:'"red"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"round"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const J={title:"Button",component:d,tags:["autodocs"],args:{onClick:O(),children:"Button"}},n={args:{colorType:"primary",size:"large",shape:"round",disabled:!1}},s={args:{colorType:"blue",size:"large",shape:"round",disabled:!1}},l={args:{colorType:"green",size:"medium",shape:"round",disabled:!1}},u={args:{colorType:"yellow",size:"large",shape:"round",disabled:!1}},c={args:{colorType:"red",size:"medium",shape:"round",disabled:!1}};var C,g,y;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    colorType: 'primary',
    size: 'large',
    shape: 'round',
    disabled: false
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,b,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    colorType: 'blue',
    size: 'large',
    shape: 'round',
    disabled: false
  }
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var h,v,D;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    colorType: 'green',
    size: 'medium',
    shape: 'round',
    disabled: false
  }
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var k,T,z;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    colorType: 'yellow',
    size: 'large',
    shape: 'round',
    disabled: false
  }
}`,...(z=(T=u.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var w,E,_;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    colorType: 'red',
    size: 'medium',
    shape: 'round',
    disabled: false
  }
}`,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const K=["Primary","Blue","Green","Yellow","Red"];export{s as Blue,l as Green,n as Primary,c as Red,u as Yellow,K as __namedExportsOrder,J as default};
