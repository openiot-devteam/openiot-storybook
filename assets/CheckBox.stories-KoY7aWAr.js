import{j as m}from"./jsx-runtime-IAXpt_DT.js";import{C as n}from"./CheckBox-cO8GCqe9.js";/* empty css                */import{r as p}from"./iframe-C_qAr3xJ.js";import"./CheckIcon-BBxKDoQf.js";import"./Svg-Dtfn3Qdy.js";import"./preload-helper-PPVm8Dsz.js";const z={title:"Example/CheckBox",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"],description:"체크박스 크기"},label:{control:"text",description:"체크박스 라벨"},checked:{control:"boolean",description:"체크 상태"},disabled:{control:"boolean",description:"비활성화 상태"},onChange:{action:"changed",description:"변경 이벤트 핸들러"}}},d=o=>{const[i,l]=p.useState(o.checked||!1);return m.jsx(n,{...o,checked:i,onChange:t=>{l(t.target.checked),o.onChange?.(t)}})},e={render:d,args:{size:"medium",label:"체크박스",id:"checkbox-default"}},r={render:d,args:{size:"small",label:"작은 체크박스",id:"checkbox-small"}},a={render:d,args:{size:"medium",label:"체크된 상태",id:"checkbox-checked",checked:!0}},s={args:{size:"medium",label:"비활성화",id:"checkbox-disabled",disabled:!0}},c={args:{size:"medium",label:"비활성화된 체크 상태",id:"checkbox-disabled-checked",checked:!0,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: CheckBoxWrapper,
  args: {
    size: "medium",
    label: "체크박스",
    id: "checkbox-default"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: CheckBoxWrapper,
  args: {
    size: "small",
    label: "작은 체크박스",
    id: "checkbox-small"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: CheckBoxWrapper,
  args: {
    size: "medium",
    label: "체크된 상태",
    id: "checkbox-checked",
    checked: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화",
    id: "checkbox-disabled",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화된 체크 상태",
    id: "checkbox-disabled-checked",
    checked: true,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const f=["Default","Small","Checked","Disabled","DisabledChecked"];export{a as Checked,e as Default,s as Disabled,c as DisabledChecked,r as Small,f as __namedExportsOrder,z as default};
