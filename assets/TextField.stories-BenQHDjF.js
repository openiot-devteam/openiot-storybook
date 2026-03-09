import{j as o}from"./jsx-runtime-IAXpt_DT.js";import{T as s}from"./TextField-C31VQpI9.js";import{S as n}from"./SearchIcon-CXxCBQp7.js";/* empty css                */import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Svg-Dtfn3Qdy.js";const u={title:"Example/TextField",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","search","hide","alert","positive"],description:"입력창 변형"},status:{control:"select",options:["default","active","filled","disabled","readonly"],description:"입력창 상태"},helper:{control:"text",description:"도움말 메시지"}}},e={args:{placeholder:"기본 입력창입니다."}},r={args:{placeholder:"아이콘이 있는 입력창",leadingIcon:o.jsx(n,{width:16,height:16}),trailingIcon:o.jsx("span",{className:"text-03 Caption-01",children:"단위"})}},a={args:{placeholder:"도움말이 있는 입력창",helper:"필수 입력 항목입니다."}},t={args:{placeholder:"에러 상태",variant:"alert",helper:"올바른 형식이 아닙니다."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "기본 입력창입니다."
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "아이콘이 있는 입력창",
    leadingIcon: <SearchIcon width={16} height={16} />,
    trailingIcon: <span className="text-03 Caption-01">단위</span>
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "도움말이 있는 입력창",
    helper: "필수 입력 항목입니다."
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "에러 상태",
    variant: "alert",
    helper: "올바른 형식이 아닙니다."
  }
}`,...t.parameters?.docs?.source}}};const g=["Default","WithIcons","WithHelper","Alert"];export{t as Alert,e as Default,a as WithHelper,r as WithIcons,g as __namedExportsOrder,u as default};
