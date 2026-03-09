import{j as x}from"./jsx-runtime-IAXpt_DT.js";import{S as i}from"./Slider-C1NKi3qT.js";/* empty css                */import{r as m}from"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Example/Slider",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{min:{control:"number",description:"최소값"},max:{control:"number",description:"최대값"},minLabel:{control:"text",description:"최소값 라벨"},maxLabel:{control:"text",description:"최대값 라벨"},onChangeMin:{action:"minChanged",description:"최소값 변경 이벤트 핸들러"},onChangeMax:{action:"maxChanged",description:"최대값 변경 이벤트 핸들러"}}},s=e=>{const[c,p]=m.useState(e.min||0),[d,l]=m.useState(e.max||100);return x.jsx(i,{...e,min:c,max:d,onChangeMin:r=>{p(Number(r.target.value)),e.onChangeMin?.(r)},onChangeMax:r=>{l(Number(r.target.value)),e.onChangeMax?.(r)}})},a={render:s,args:{min:0,max:100}},n={render:s,args:{min:0,max:100,minLabel:"최소",maxLabel:"최대"}},t={render:s,args:{min:0,max:1e6,minLabel:"0원",maxLabel:"1,000,000원"}},o={render:s,args:{min:10,max:90,minLabel:"10",maxLabel:"90"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 0,
    max: 100
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 0,
    max: 100,
    minLabel: "최소",
    maxLabel: "최대"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 0,
    max: 1000000,
    minLabel: "0원",
    maxLabel: "1,000,000원"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: SliderWrapper,
  args: {
    min: 10,
    max: 90,
    minLabel: "10",
    maxLabel: "90"
  }
}`,...o.parameters?.docs?.source}}};const C=["Default","WithLabels","PriceRange","CustomRange"];export{o as CustomRange,a as Default,t as PriceRange,n as WithLabels,C as __namedExportsOrder,h as default};
