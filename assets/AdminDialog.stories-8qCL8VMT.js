import{j as e}from"./jsx-runtime-IAXpt_DT.js";import{C}from"./CrossmarkIcon-DhEX95S7.js";import{B as a}from"./Button-CSCRkr0u.js";import{B}from"./ButtonGroup-Dc7GnsRR.js";import{u as x}from"./useDialog-CNZEMBvi.js";/* empty css                */import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Svg-Dtfn3Qdy.js";import"./OpenIotIcon-DoImvoTE.js";function s({title:t,children:o,onClose:d,open:u,onClickClose:m,...p}){const{ref:g}=x({open:u});return e.jsxs("dialog",{className:"AdminDialog",ref:g,onClose:d,...p,children:[e.jsxs("div",{className:"AdminDialogTitle ",children:[e.jsx("h2",{className:"text-01 Body-01-SB",children:t}),e.jsx(a,{icon:e.jsx(C,{className:"*:fill-06"}),content:"iconOnly",variant:"ghost",onClick:m})]}),o]})}function l({button:t,...o}){return e.jsxs(s,{...o,children:[e.jsx("div",{className:"AdminDialogDesc Body-01",children:o.children}),e.jsx("div",{className:"AdminDialogButton",children:e.jsx(a,{...t})})]})}function c({buttons:t,...o}){return e.jsxs(s,{...o,children:[e.jsx("div",{className:"AdminDialogDesc Body-01",children:o.children}),e.jsx("div",{className:"AdminDialogButton",children:e.jsx(B,{...t})})]})}s.__docgenInfo={description:"",methods:[],displayName:"AdminDialog",props:{title:{required:!1,tsType:{name:"string"},description:""},onClickClose:{required:!0,tsType:{name:'ButtonProps["onClick"]',raw:'ButtonProps["onClick"]'},description:""}},composes:["DialogHTMLAttributes"]};l.__docgenInfo={description:"",methods:[],displayName:"AdminDialogOneButton",props:{title:{required:!1,tsType:{name:"string"},description:""},onClickClose:{required:!0,tsType:{name:'ButtonProps["onClick"]',raw:'ButtonProps["onClick"]'},description:""},button:{required:!0,tsType:{name:"ButtonProps"},description:""}},composes:["DialogHTMLAttributes"]};c.__docgenInfo={description:"",methods:[],displayName:"AdminDialogTwoButton",props:{title:{required:!1,tsType:{name:"string"},description:""},onClickClose:{required:!0,tsType:{name:'ButtonProps["onClick"]',raw:'ButtonProps["onClick"]'},description:""},buttons:{required:!0,tsType:{name:"ButtonGroupProps"},description:""}},composes:["DialogHTMLAttributes"]};const v={title:"Example/AdminDialog",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"다이얼로그 제목"},open:{control:"boolean",description:"다이얼로그 노출 여부"},onClickClose:{action:"clicked",description:"닫기 버튼 클릭 이벤트"}}},n={args:{title:"기본 다이얼로그",open:!0,children:e.jsx("div",{className:"p-4",children:"다이얼로그 콘텐츠 영역입니다."}),onClickClose:()=>alert("닫기 클릭")}},r={render:t=>e.jsx(l,{...t}),args:{title:"확인 다이얼로그",open:!0,children:"처리가 완료되었습니다.",button:{text:"확인",onClick:()=>alert("확인 클릭")},onClickClose:()=>alert("닫기 클릭")}},i={render:t=>e.jsx(c,{...t}),args:{title:"삭제 확인",open:!0,children:"정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",buttons:{layout:"horizontal",gap:"medium",buttonA:{text:"취소",variant:"outlined",onClick:()=>alert("취소 클릭")},buttonB:{text:"삭제",color:"primary",onClick:()=>alert("삭제 클릭")}},onClickClose:()=>alert("닫기 클릭")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "기본 다이얼로그",
    open: true,
    children: <div className="p-4">다이얼로그 콘텐츠 영역입니다.</div>,
    onClickClose: () => alert("닫기 클릭")
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <AdminDialogOneButton {...args} />,
  args: {
    title: "확인 다이얼로그",
    open: true,
    children: "처리가 완료되었습니다.",
    button: {
      text: "확인",
      onClick: () => alert("확인 클릭")
    },
    onClickClose: () => alert("닫기 클릭")
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <AdminDialogTwoButton {...args} />,
  args: {
    title: "삭제 확인",
    open: true,
    children: "정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
    buttons: {
      layout: "horizontal",
      gap: "medium",
      buttonA: {
        text: "취소",
        variant: "outlined",
        onClick: () => alert("취소 클릭")
      },
      buttonB: {
        text: "삭제",
        color: "primary",
        onClick: () => alert("삭제 클릭")
      }
    },
    onClickClose: () => alert("닫기 클릭")
  }
}`,...i.parameters?.docs?.source}}};const q=["Default","OneButton","TwoButton"];export{n as Default,r as OneButton,i as TwoButton,q as __namedExportsOrder,v as default};
