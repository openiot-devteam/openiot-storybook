import{j as e}from"./jsx-runtime-BMISaUht.js";import{O as R,H as z,A as B,P as S,S as P}from"./Arrow1RightIcon-DDaYke2P.js";/* empty css                */import"./iframe-DA-D5ONL.js";import"./preload-helper-PPVm8Dsz.js";import"./Svg-RoBCl_qO.js";function I({children:T,size:v="medium",variant:O="filled",color:h="primary",loading:f,content:t,text:L,icon:y,...b}){const j=v!=="small"?"Body-02-SB":"Caption-01";return e.jsxs("button",{className:"Button","data-size":v,"data-variant":O,...h&&{"data-color":h},...f&&{"data-loading":f},...t==="iconOnly"&&{"data-icon-only":!0},...b,children:[t==="iconLeft"&&e.jsx("span",{className:"ButtonIcon",children:y}),t!=="iconOnly"&&e.jsx("span",{className:`${j}`,children:L}),t==="iconOnly"&&e.jsx("span",{className:"ButtonIcon",children:f?e.jsx(R.Filled,{className:"ButtonLoading"}):y}),t==="iconRight"&&e.jsx("span",{className:"ButtonIcon",children:y})]})}I.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:'"large" | "medium" | "small"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'}]},description:`버튼 크기
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "ghost"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"ghost"'}]},description:`버튼 스타일 변형
@default "filled"`,defaultValue:{value:'"filled"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "mono"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"mono"'}]},description:`버튼 색상
@default "primary"`,defaultValue:{value:'"primary"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`},loading:{required:!1,tsType:{name:"boolean"},description:`로딩 상태
@default false`},content:{required:!0,tsType:{name:"union",raw:'"text" | "iconLeft" | "iconRight" | "iconOnly"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"iconLeft"'},{name:"literal",value:'"iconRight"'},{name:"literal",value:'"iconOnly"'}]},description:`버튼 콘텐츠 유형
@default "text"`},text:{required:!1,tsType:{name:"string"},description:"버튼 텍스트 내용"},icon:{required:!1,tsType:{name:"ReactNode"},description:"버튼 아이콘 내용"},status:{required:!1,tsType:{name:"union",raw:'"active" | "hover" | "press"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"press"'}]},description:""}},composes:["Omit"]};const _={title:"Example/Button",component:I,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"버튼 크기"},variant:{control:"select",options:["filled","outlined","ghost"],description:"버튼 스타일 변형"},color:{control:"select",options:["primary","mono"],description:"버튼 색상"},content:{control:"select",options:["text","iconLeft","iconRight","iconOnly"],description:"버튼 콘텐츠 유형"},text:{control:"text",description:"버튼 텍스트 내용"},icon:{control:"object",description:"버튼 아이콘",options:[z,B,z.Filled]},disabled:{control:"boolean",description:"비활성화 상태"},loading:{control:"boolean",description:"로딩 상태"},onClick:{action:"clicked",description:"클릭 이벤트 핸들러"}},args:{onClick:()=>alert("오픈아이오티!")}},r={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"버튼"}},n={args:{color:"primary",variant:"outlined",size:"medium",content:"text",text:"버튼"}},a={args:{color:"primary",variant:"ghost",size:"medium",content:"text",text:"버튼"}},o={args:{color:"mono",variant:"filled",size:"medium",content:"text",text:"버튼"}},i={args:{color:"mono",variant:"outlined",size:"medium",content:"text",text:"버튼"}},s={args:{color:"mono",variant:"ghost",size:"medium",content:"text",text:"버튼"}},l={args:{color:"primary",variant:"filled",size:"small",content:"text",text:"작은 버튼"}},c={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"중간 버튼"}},m={args:{color:"primary",variant:"filled",size:"large",content:"text",text:"큰 버튼"}},d={args:{color:"primary",variant:"filled",size:"medium",content:"iconLeft",text:"아이콘 왼쪽",icon:e.jsx(S,{})}},u={args:{color:"primary",variant:"filled",size:"medium",content:"iconRight",text:"아이콘 오른쪽",icon:e.jsx(P,{})}},p={args:{color:"primary",variant:"filled",size:"medium",content:"iconOnly",icon:e.jsx(S,{})}},g={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"비활성화",disabled:!0}},x={args:{color:"primary",variant:"filled",size:"medium",content:"text",text:"로딩 중",loading:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "outlined",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "ghost",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: "mono",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "mono",
    variant: "outlined",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: "mono",
    variant: "ghost",
    size: "medium",
    content: "text",
    text: "버튼"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "small",
    content: "text",
    text: "작은 버튼"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "중간 버튼"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "large",
    content: "text",
    text: "큰 버튼"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "iconLeft",
    text: "아이콘 왼쪽",
    icon: <PlusIcon />
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "iconRight",
    text: "아이콘 오른쪽",
    icon: <SearchIcon />
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "iconOnly",
    icon: <PlusIcon />
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "비활성화",
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    content: "text",
    text: "로딩 중",
    loading: true
  }
}`,...x.parameters?.docs?.source}}};const k=["PrimaryFilled","PrimaryOutlined","PrimaryGhost","MonoFilled","MonoOutlined","MonoGhost","Small","Medium","Large","IconLeft","IconRight","IconOnly","Disabled","Loading"];export{g as Disabled,d as IconLeft,p as IconOnly,u as IconRight,m as Large,x as Loading,c as Medium,o as MonoFilled,s as MonoGhost,i as MonoOutlined,r as PrimaryFilled,a as PrimaryGhost,n as PrimaryOutlined,l as Small,k as __namedExportsOrder,_ as default};
