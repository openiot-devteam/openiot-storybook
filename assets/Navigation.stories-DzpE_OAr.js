import{N as p}from"./Navigation-BTQSiw1o.js";/* empty css                */import"./jsx-runtime-IAXpt_DT.js";import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./image-BKLRkrK_.js";import"./use-merged-ref-CVbOPoyq.js";import"./link-CvpWL-gv.js";import"./CrossmarkIcon-DhEX95S7.js";import"./Svg-Dtfn3Qdy.js";import"./MenuIcon-DvWnKx7s.js";const f={title:"Example/Navigation",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{pathname:{control:"text",description:"현재 경로 (활성 상태 확인용)"}}},t={name:"OpenIot Admin",logo:"https://v1.next-admin.com/favicon.ico",id:"123"},s=[{label:"대시보드",href:"/app/123/dashboard"},{label:"사용자 관리",href:"/app/123/users"},{label:"기기 관리",href:"/app/123/devices"},{label:"로그 분석",href:"/app/123/logs"}],e={args:{app:t,items:s,pathname:"/app/123/dashboard"}},a={args:{app:t,items:s,setting:{label:"환경 설정",href:"/settings"},cs:{label:"도움말",href:"/support"},pathname:"/app/123/users"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    app: mockApp,
    items: mockItems,
    pathname: "/app/123/dashboard"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    app: mockApp,
    items: mockItems,
    setting: {
      label: "환경 설정",
      href: "/settings"
    },
    cs: {
      label: "도움말",
      href: "/support"
    },
    pathname: "/app/123/users"
  }
}`,...a.parameters?.docs?.source}}};const b=["Default","CustomSetting"];export{a as CustomSetting,e as Default,b as __namedExportsOrder,f as default};
