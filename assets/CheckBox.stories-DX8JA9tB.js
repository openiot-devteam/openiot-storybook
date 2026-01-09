import{j as a}from"./jsx-runtime-DLNaQYgA.js";import{C as g}from"./CheckIcon-CxNc2Y5f.js";/* empty css                */import{r as C}from"./iframe-BU77cE2O.js";import"./Svg-CGLjOrJ3.js";import"./preload-helper-PPVm8Dsz.js";const m={icon:{medium:"scale-67",small:"scale-58"},label:{medium:"Body-01",small:"Body-02"},color:{default:"text-01",disabled:"text-04"}};function p({size:e="medium",label:n,id:r,checked:s,disabled:i,onChange:h,...b}){const k=m.label[e],x=m.color[i?"disabled":"default"];return a.jsxs("label",{className:`selection ${x} ${k}`,htmlFor:r,children:[a.jsx("span",{role:"checkbox",className:"CheckBox fc size-6","data-checked":s,"data-disabled":i,children:a.jsx(g,{className:`CheckBoxIcon ${m.icon[e]}`})}),a.jsx("input",{className:"sr-only",type:"checkbox",id:r,checked:s,disabled:i,onChange:h,...b}),n]})}p.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"medium" | "small"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const D={title:"Example/CheckBox",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"],description:"체크박스 크기"},label:{control:"text",description:"체크박스 라벨"},checked:{control:"boolean",description:"체크 상태"},disabled:{control:"boolean",description:"비활성화 상태"},onChange:{action:"changed",description:"변경 이벤트 핸들러"}}},u=e=>{const[n,r]=C.useState(e.checked||!1);return a.jsx(p,{...e,checked:n,onChange:s=>{r(s.target.checked),e.onChange?.(s)}})},c={render:u,args:{size:"medium",label:"체크박스",id:"checkbox-default"}},o={render:u,args:{size:"small",label:"작은 체크박스",id:"checkbox-small"}},l={render:u,args:{size:"medium",label:"체크된 상태",id:"checkbox-checked",checked:!0}},d={args:{size:"medium",label:"비활성화",id:"checkbox-disabled",disabled:!0}},t={args:{size:"medium",label:"비활성화된 체크 상태",id:"checkbox-disabled-checked",checked:!0,disabled:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: CheckBoxWrapper,
  args: {
    size: "medium",
    label: "체크박스",
    id: "checkbox-default"
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: CheckBoxWrapper,
  args: {
    size: "small",
    label: "작은 체크박스",
    id: "checkbox-small"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: CheckBoxWrapper,
  args: {
    size: "medium",
    label: "체크된 상태",
    id: "checkbox-checked",
    checked: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화",
    id: "checkbox-disabled",
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화된 체크 상태",
    id: "checkbox-disabled-checked",
    checked: true,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const N=["Default","Small","Checked","Disabled","DisabledChecked"];export{l as Checked,c as Default,d as Disabled,t as DisabledChecked,o as Small,N as __namedExportsOrder,D as default};
