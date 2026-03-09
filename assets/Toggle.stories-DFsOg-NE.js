import{j as p}from"./jsx-runtime-IAXpt_DT.js";import{T as n}from"./Toggle-BMKtKvdu.js";/* empty css                */import{r as u}from"./iframe-C_qAr3xJ.js";import"./Svg-Dtfn3Qdy.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Example/Toggle",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"],description:"토글 크기"},selected:{control:"boolean",description:"선택 상태"},onClick:{action:"clicked",description:"클릭 이벤트 핸들러"}}},c=l=>{const[d,m]=u.useState(l.selected||!1);return p.jsx(n,{...l,selected:d,onClick:i=>{m(!d),l.onClick?.(i)}})},e={render:c,args:{size:"medium",selected:!1}},r={render:c,args:{size:"medium",selected:!0}},s={render:c,args:{size:"small",selected:!1}},a={render:c,args:{size:"small",selected:!0}},t={args:{size:"medium",selected:!1,disabled:!0}},o={args:{size:"medium",selected:!0,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "medium",
    selected: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "medium",
    selected: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "small",
    selected: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "small",
    selected: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    selected: false,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    selected: true,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const D=["Default","Selected","Small","SmallSelected","Disabled","DisabledSelected"];export{e as Default,t as Disabled,o as DisabledSelected,r as Selected,s as Small,a as SmallSelected,D as __namedExportsOrder,x as default};
