import{j as e}from"./jsx-runtime-IAXpt_DT.js";import{B as u}from"./ButtonGroup-Dc7GnsRR.js";import{B as g}from"./Button-CSCRkr0u.js";import{u as x}from"./useDialog-CNZEMBvi.js";/* empty css                */import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./OpenIotIcon-DoImvoTE.js";import"./Svg-Dtfn3Qdy.js";function p({title:t,children:o,open:r,onClose:l,...s}){const{ref:m}=x({open:r});return e.jsx("dialog",{className:"AppDialog",ref:m,...s,children:e.jsx("div",{className:"AppDialogChildren",children:o})})}function c({title:t,desc:o,button:r,children:l,...s}){return e.jsxs(p,{...s,children:[e.jsxs("div",{className:"fc flex-col gap-2 py-4",children:[e.jsx("h2",{className:"text-01 Body-01-SB",children:t}),e.jsx("p",{className:"text-01 Body-01",children:o})]}),e.jsx("div",{className:"AppDialogButton",children:e.jsx(g,{...r})})]})}function d({title:t,desc:o,buttons:r,children:l,...s}){return e.jsxs(p,{...s,children:[e.jsxs("div",{className:"fc flex-col gap-2 py-4",children:[e.jsx("h2",{className:"text-01 Body-01-SB",children:t}),e.jsx("p",{className:"text-01 Body-01",children:o})]}),e.jsx("div",{className:"AppDialogButton",children:e.jsx(u,{...r})})]})}p.__docgenInfo={description:"",methods:[],displayName:"AppDialog",props:{title:{required:!1,tsType:{name:"string"},description:""}},composes:["DialogHTMLAttributes"]};c.__docgenInfo={description:"",methods:[],displayName:"AppDialogOneButton",props:{title:{required:!1,tsType:{name:"string"},description:""},desc:{required:!1,tsType:{name:"ReactNode"},description:""},button:{required:!0,tsType:{name:"ButtonProps"},description:""}},composes:["DialogHTMLAttributes"]};d.__docgenInfo={description:"",methods:[],displayName:"AppDialogTwoButton",props:{title:{required:!1,tsType:{name:"string"},description:""},desc:{required:!1,tsType:{name:"ReactNode"},description:""},buttons:{required:!0,tsType:{name:"ButtonGroupProps"},description:""}},composes:["DialogHTMLAttributes"]};const T={title:"Example/AppDialog",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"다이얼로그 노출 여부"}}},n={args:{open:!0,children:e.jsxs("div",{className:"p-6 text-center",children:[e.jsx("h2",{className:"Headline-02 mb-2",children:"알림"}),e.jsx("p",{className:"Body-02 text-02",children:"모바일 앱 스타일의 다이얼로그입니다."})]})}},a={render:t=>e.jsx(c,{...t}),args:{open:!0,title:"알림",desc:"성공적으로 처리되었습니다.",button:{text:"확인",color:"primary",onClick:()=>alert("확인 클릭")}}},i={render:t=>e.jsx(d,{...t}),args:{open:!0,title:"로그아웃",desc:"정말로 로그아웃 하시겠습니까?",buttons:{layout:"horizontal",gap:"medium",buttonA:{text:"취소",variant:"ghost",onClick:()=>alert("취소 클릭")},buttonB:{text:"로그아웃",color:"primary",onClick:()=>alert("로그아웃 클릭")}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <div className="p-6 text-center">
        <h2 className="Headline-02 mb-2">알림</h2>
        <p className="Body-02 text-02">모바일 앱 스타일의 다이얼로그입니다.</p>
      </div>
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <AppDialogOneButton {...args} />,
  args: {
    open: true,
    title: "알림",
    desc: "성공적으로 처리되었습니다.",
    button: {
      text: "확인",
      color: "primary",
      onClick: () => alert("확인 클릭")
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <AppDialogTwoButton {...args} />,
  args: {
    open: true,
    title: "로그아웃",
    desc: "정말로 로그아웃 하시겠습니까?",
    buttons: {
      layout: "horizontal",
      gap: "medium",
      buttonA: {
        text: "취소",
        variant: "ghost",
        onClick: () => alert("취소 클릭")
      },
      buttonB: {
        text: "로그아웃",
        color: "primary",
        onClick: () => alert("로그아웃 클릭")
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const v=["Default","OneButton","TwoButton"];export{n as Default,a as OneButton,i as TwoButton,v as __namedExportsOrder,T as default};
