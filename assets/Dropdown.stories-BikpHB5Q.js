import{D as r}from"./Dropdown-CGagV49v.js";/* empty css                */import"./jsx-runtime-IAXpt_DT.js";import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Arrow1DownIcon-DncsGFlt.js";import"./Svg-Dtfn3Qdy.js";const m={title:"Example/Dropdown",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"플레이스홀더 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"},value:{control:"text",description:"선택된 값"},onChange:{action:"changed",description:"값 변경 이벤트 핸들러"}}},t=[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3",disabled:!0},{label:"옵션 4",value:"option4"}],e={args:{items:t,placeholder:"항목을 선택해 주세요."}},a={args:{items:t,value:"option2"}},o={args:{items:t,disabled:!0,placeholder:"비활성화된 드롭다운"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    placeholder: "항목을 선택해 주세요."
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    value: "option2"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    disabled: true,
    placeholder: "비활성화된 드롭다운"
  }
}`,...o.parameters?.docs?.source}}};const u=["Default","Selected","Disabled"];export{e as Default,o as Disabled,a as Selected,u as __namedExportsOrder,m as default};
