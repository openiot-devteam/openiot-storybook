import{a as t}from"./TabBar-8Cx4Bsn8.js";/* empty css                */import"./jsx-runtime-IAXpt_DT.js";import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CvpWL-gv.js";import"./use-merged-ref-CVbOPoyq.js";const p={title:"Example/TabBar",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["fill","scroll"],description:"탭 레이아웃 방식"}}},a=[{href:"#1",children:"메뉴 1",active:!0},{href:"#2",children:"메뉴 2",active:!1},{href:"#3",children:"메뉴 3",active:!1},{href:"#4",children:"메뉴 4",active:!1}],s=[...a,{href:"#5",children:"메뉴 5",active:!1},{href:"#6",children:"메뉴 6",active:!1},{href:"#7",children:"메뉴 7",active:!1},{href:"#8",children:"메뉴 8",active:!1}],e={args:{items:a,layout:"fill"}},r={args:{items:s,layout:"scroll"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    layout: "fill"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: manyItems,
    layout: "scroll"
  }
}`,...r.parameters?.docs?.source}}};const f=["Fill","Scroll"];export{e as Fill,r as Scroll,f as __namedExportsOrder,p as default};
