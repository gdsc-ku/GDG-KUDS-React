import{j as T}from"./jsx-runtime-DR9Q75dM.js";import{c as f,a as H,G as v,g as _,b as x}from"./prefix-Bn27aDeQ.js";import"./index-DRjF_FHU.js";const r=`${v}-typography`,z=_(r),p=({weight:e="regular",size:t="sm",className:o,...i})=>{const l=z([e,t],o);return H("p",{...i,className:l,css:b})},S={[`&.${r}-regular`]:{fontWeight:400},[`&.${r}-medium`]:{fontWeight:500},[`&.${r}-semiBold`]:{fontWeight:600},[`&.${r}-bold`]:{fontWeight:700}},b=f({...S,[`&.${r}-sm`]:{fontSize:14,lineHeight:"22px"},[`&.${r}-md`]:{fontSize:16,lineHeight:"24px"}});try{p.displayName="Typography",p.__docgenInfo={description:"",displayName:"Typography",props:{weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"regular"'},{value:'"semiBold"'},{value:'"bold"'}]}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'}]}}}}}catch{}const s=`${v}-heading`,j=_(s),g=({level:e,className:t,...o})=>{const i=j([e],t),l=`h${e}`;return x(l,{...o,className:i,css:B})},B=f({[`&.${s}-1`]:{fontSize:56,lineHeight:"64px"},[`&.${s}-2`]:{fontSize:40,lineHeight:"52px"},[`&.${s}-3`]:{fontSize:32,lineHeight:"44px"},[`&.${s}-4`]:{fontSize:24,lineHeight:"34px"},[`&.${s}-5`]:{fontSize:20,lineHeight:"28px"}});try{g.displayName="Heading",g.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"}]}}}}}catch{}const $=Object.assign(p,{Title:g}),I={title:"Typography"},a={render:e=>T.jsx($.Title,{...e,children:"This is a Typography"}),args:{level:1},argTypes:{level:{control:"select",options:[1,2,3,4,5]}}},n={render:e=>T.jsx($,{...e,children:"This is a Typography"}),args:{size:"sm",weight:"bold"},argTypes:{size:{control:"select",options:["sm","md"]},weight:{control:"select",options:["regular","medium","semiBold","bold"]}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Typography.Title {...args}>This is a Typography</Typography.Title>;
  },
  args: {
    level: 1
  },
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5]
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,y,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <Typography {...args}>This is a Typography</Typography>;
  },
  args: {
    size: 'sm',
    weight: 'bold'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semiBold', 'bold']
    }
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const C=["Heading","Body"];export{n as Body,a as Heading,C as __namedExportsOrder,I as default};
