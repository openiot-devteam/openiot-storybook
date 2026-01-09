import{j as a}from"./jsx-runtime-DLNaQYgA.js";/* empty css                */import{r as u}from"./iframe-BU77cE2O.js";import"./preload-helper-PPVm8Dsz.js";function d({min:e,max:r,minLabel:p,maxLabel:l,onChangeMin:c,onChangeMax:n}){return a.jsxs("div",{className:"Slider",children:[a.jsx("div",{className:"SliderTrack"}),a.jsx("input",{type:"range",value:e,min:e,max:r,onChange:c,className:"SliderInput"}),a.jsx("input",{type:"range",value:r,min:e,max:r,onChange:n,className:"SliderInput"}),a.jsx("span",{className:"SliderLabel Caption-01",style:{transform:`translateX(${e}px)`},children:p??e}),a.jsx("span",{className:"SliderLabel Caption-01",style:{transform:`translateX(${320-e}px)`},children:l??r})]})}d.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},minLabel:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxLabel:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChangeMin:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onChangeMax:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const h={title:"Example/Slider",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{min:{control:"number",description:"최소값"},max:{control:"number",description:"최대값"},minLabel:{control:"text",description:"최소값 라벨"},maxLabel:{control:"text",description:"최대값 라벨"},onChangeMin:{action:"minChanged",description:"최소값 변경 이벤트 핸들러"},onChangeMax:{action:"maxChanged",description:"최대값 변경 이벤트 핸들러"}}},o=e=>{const[r,p]=u.useState(e.min||0),[l,c]=u.useState(e.max||100);return a.jsx(d,{...e,min:r,max:l,onChangeMin:n=>{p(Number(n.target.value)),e.onChangeMin?.(n)},onChangeMax:n=>{c(Number(n.target.value)),e.onChangeMax?.(n)}})},t={render:o,args:{min:0,max:100}},s={render:o,args:{min:0,max:100,minLabel:"최소",maxLabel:"최대"}},i={render:o,args:{min:0,max:1e6,minLabel:"0원",maxLabel:"1,000,000원"}},m={render:o,args:{min:10,max:90,minLabel:"10",maxLabel:"90"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 0,
    max: 100
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 0,
    max: 100,
    minLabel: "최소",
    maxLabel: "최대"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 0,
    max: 1000000,
    minLabel: "0원",
    maxLabel: "1,000,000원"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 10,
    max: 90,
    minLabel: "10",
    maxLabel: "90"
  }
}`,...m.parameters?.docs?.source}}};const C=["Default","WithLabels","PriceRange","CustomRange"];export{m as CustomRange,t as Default,i as PriceRange,s as WithLabels,C as __namedExportsOrder,h as default};
