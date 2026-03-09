import{j as t}from"./jsx-runtime-IAXpt_DT.js";import{B as m}from"./Button-CSCRkr0u.js";import{B as p}from"./ButtonGroup-Dc7GnsRR.js";import"./CheckBox-cO8GCqe9.js";import"./Radio-CfB-iDt2.js";import"./Toggle-BMKtKvdu.js";import"./Dropdown-CGagV49v.js";import"./Slider-C1NKi3qT.js";/* empty css                */import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./OpenIotIcon-DoImvoTE.js";import"./Svg-Dtfn3Qdy.js";import"./CheckIcon-BBxKDoQf.js";import"./Arrow1DownIcon-DncsGFlt.js";function u({title:e,sub:r,children:o,...n}){return t.jsxs("header",{className:"HeaderSubTitle",...n,children:[t.jsxs("div",{className:"flex flex-col grow",children:[t.jsx("h2",{className:"Body-02-SB",children:e}),t.jsx("p",{className:"Body-02 text-02",children:r})]}),o]})}function d({title:e,sub:r,button:o,...n}){return t.jsx(u,{title:e,sub:r,...n,children:t.jsx(m,{...o})})}function l({title:e,sub:r,buttons:o,...n}){return t.jsx(u,{title:e,sub:r,...n,children:t.jsx(p,{...o})})}u.__docgenInfo={description:"",methods:[],displayName:"HeaderSubTitle"};d.__docgenInfo={description:"",methods:[],displayName:"HeaderSubTitleButton"};l.__docgenInfo={description:"",methods:[],displayName:"HeaderSubTitleButtonGroup"};const W={title:"Example/HeaderSubTitle",component:u,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},sub:{control:"text"}}},a={args:{title:"섹션 제목",sub:"해당 섹션에 대한 설명 문구입니다."}},s={render:e=>t.jsx(d,{...e}),args:{title:"사용자 목록",sub:"현재 등록된 모든 사용자를 관리합니다.",button:{text:"사용자 추가",color:"primary"}}},i={render:e=>t.jsx(l,{...e}),args:{title:"데이터 설정",sub:"데이터를 내보내거나 가져올 수 있습니다.",buttons:{layout:"horizontal",gap:"medium",buttonA:{text:"가져오기",variant:"outlined"},buttonB:{text:"내보내기",color:"primary"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "섹션 제목",
    sub: "해당 섹션에 대한 설명 문구입니다."
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <HeaderSubTitleButton {...args} />,
  args: {
    title: "사용자 목록",
    sub: "현재 등록된 모든 사용자를 관리합니다.",
    button: {
      text: "사용자 추가",
      color: "primary"
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <HeaderSubTitleButtonGroup {...args} />,
  args: {
    title: "데이터 설정",
    sub: "데이터를 내보내거나 가져올 수 있습니다.",
    buttons: {
      layout: "horizontal",
      gap: "medium",
      buttonA: {
        text: "가져오기",
        variant: "outlined"
      },
      buttonB: {
        text: "내보내기",
        color: "primary"
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const v=["Default","WithButton","WithButtonGroup"];export{a as Default,s as WithButton,i as WithButtonGroup,v as __namedExportsOrder,W as default};
