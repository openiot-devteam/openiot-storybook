import{j as g}from"./jsx-runtime-DLNaQYgA.js";import{B as f}from"./Button-BUIIt8NW.js";import{H as x,A as v,P as y}from"./Arrow1RightIcon-DR6PUVaf.js";import{S as z}from"./SearchIcon-8OCynsSd.js";/* empty css                */import"./iframe-BU77cE2O.js";import"./preload-helper-PPVm8Dsz.js";import"./OpenIotIcon-BhUgWHja.js";import"./Svg-CGLjOrJ3.js";const j={title:"Example/Button",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"버튼 크기"},variant:{control:"select",options:["filled","outlined","ghost"],description:"버튼 스타일 변형"},color:{control:"select",options:["primary","mono"],description:"버튼 색상"},content:{control:"select",options:["text","iconLeft","iconRight","iconOnly"],description:"버튼 콘텐츠 유형"},text:{control:"text",description:"버튼 텍스트 내용"},icon:{control:"object",description:"버튼 아이콘",options:[x,v,x.Filled]},disabled:{control:"boolean",description:"비활성화 상태"},loading:{control:"boolean",description:"로딩 상태"},onClick:{action:"clicked",description:"클릭 이벤트 핸들러"}},args:{onClick:()=>alert("오픈아이오티!")}},e={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"버튼"}},r={args:{color:"primary",variant:"outlined",size:"medium",content:"text",text:"버튼"}},t={args:{color:"primary",variant:"ghost",size:"medium",content:"text",text:"버튼"}},o={args:{color:"mono",variant:"filled",size:"medium",content:"text",text:"버튼"}},n={args:{color:"mono",variant:"outlined",size:"medium",content:"text",text:"버튼"}},a={args:{color:"mono",variant:"ghost",size:"medium",content:"text",text:"버튼"}},s={args:{color:"primary",variant:"filled",size:"small",content:"text",text:"작은 버튼"}},i={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"중간 버튼"}},c={args:{color:"primary",variant:"filled",size:"large",content:"text",text:"큰 버튼"}},m={args:{color:"primary",variant:"filled",size:"medium",content:"iconLeft",text:"아이콘 왼쪽",icon:g.jsx(y,{})}},l={args:{color:"primary",variant:"filled",size:"medium",content:"iconRight",text:"아이콘 오른쪽",icon:g.jsx(z,{})}},d={args:{color:"primary",variant:"filled",size:"medium",content:"iconOnly",icon:g.jsx(y,{})}},p={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"비활성화",disabled:!0}},u={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"로딩 중",loading:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "outlined",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "ghost",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: "mono",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "mono",
    variant: "outlined",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "mono",
    variant: "ghost",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "small",
    content: "text",
    text: "작은 버튼"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "중간 버튼"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "large",
    content: "text",
    text: "큰 버튼"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "iconLeft",
    text: "아이콘 왼쪽",
    icon: <PlusIcon />
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "iconRight",
    text: "아이콘 오른쪽",
    icon: <SearchIcon />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "iconOnly",
    icon: <PlusIcon />
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "비활성화",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "로딩 중",
    loading: true
  }
}`,...u.parameters?.docs?.source}}};const F=["PrimaryFilled","PrimaryOutlined","PrimaryGhost","MonoFilled","MonoOutlined","MonoGhost","Small","Medium","Large","IconLeft","IconRight","IconOnly","Disabled","Loading"];export{p as Disabled,m as IconLeft,d as IconOnly,l as IconRight,c as Large,u as Loading,i as Medium,o as MonoFilled,a as MonoGhost,n as MonoOutlined,e as PrimaryFilled,t as PrimaryGhost,r as PrimaryOutlined,s as Small,F as __namedExportsOrder,j as default};
