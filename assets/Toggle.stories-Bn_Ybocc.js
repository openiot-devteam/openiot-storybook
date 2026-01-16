import{j as n}from"./jsx-runtime-Cudirygt.js";import{S as z}from"./Svg-C_7IKBB5.js";/* empty css                */import{r as x}from"./iframe-gCqYQPKW.js";import"./preload-helper-PPVm8Dsz.js";const r={size:{medium:"p-[3px] w-14 h-7.5",small:"p-[2px] w-9.5 h-5"},selected:{svg:{size:{medium:24,small:16},viewBox:{medium:"0 0 24 24",small:"0 0 16 16"},center:{medium:12,small:8}}}};function g({selected:s,size:e="medium",...i}){const u=r.size[e],f=r.selected.svg.size[e],S=r.selected.svg.viewBox[e],p=r.selected.svg.center[e];return n.jsx("button",{className:`Toggle ${u}`,"data-selected":s,...i,children:n.jsx(z,{className:"ToggleCircle",width:f,height:f,viewBox:S,children:n.jsx("circle",{cx:p,cy:p,r:p,fill:"#ffffff"})})})}g.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{selected:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"medium" | "small"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}}},composes:["ButtonHTMLAttributes"]};const j={title:"Example/Toggle",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"],description:"토글 크기"},selected:{control:"boolean",description:"선택 상태"},onClick:{action:"clicked",description:"클릭 이벤트 핸들러"}}},m=s=>{const[e,i]=x.useState(s.selected||!1);return n.jsx(g,{...s,selected:e,onClick:u=>{i(!e),s.onClick?.(u)}})},a={render:m,args:{size:"medium",selected:!1}},t={render:m,args:{size:"medium",selected:!0}},l={render:m,args:{size:"small",selected:!1}},o={render:m,args:{size:"small",selected:!0}},c={args:{size:"medium",selected:!1,disabled:!0}},d={args:{size:"medium",selected:!0,disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "medium",
    selected: false
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "medium",
    selected: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "small",
    selected: false
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ToggleWrapper,
  args: {
    size: "small",
    selected: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    selected: false,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    selected: true,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};const y=["Default","Selected","Small","SmallSelected","Disabled","DisabledSelected"];export{a as Default,c as Disabled,d as DisabledSelected,t as Selected,l as Small,o as SmallSelected,y as __namedExportsOrder,j as default};
