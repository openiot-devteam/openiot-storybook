import{j as e}from"./jsx-runtime-IAXpt_DT.js";import{T as n}from"./TabBar-8Cx4Bsn8.js";/* empty css                */import"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CvpWL-gv.js";import"./use-merged-ref-CVbOPoyq.js";const m={title:"Example/Tab",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",description:"탭 링크 URL"},children:{control:"text",description:"탭 텍스트 내용"},active:{control:"boolean",description:"활성 상태"}}},r={args:{href:"#",children:"탭",active:!1}},a={args:{href:"#",children:"활성 탭",active:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(n,{href:"#tab1",active:!0,children:"탭 1"}),e.jsx(n,{href:"#tab2",active:!1,children:"탭 2"}),e.jsx(n,{href:"#tab3",active:!1,children:"탭 3"})]}),parameters:{layout:"centered"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "탭",
    active: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "활성 탭",
    active: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      gap: "8px"
    }}>
        <Tab href="#tab1" active={true}>
          탭 1
        </Tab>
        <Tab href="#tab2" active={false}>
          탭 2
        </Tab>
        <Tab href="#tab3" active={false}>
          탭 3
        </Tab>
      </div>;
  },
  parameters: {
    layout: "centered"
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","Active","TabGroup"];export{a as Active,r as Default,t as TabGroup,u as __namedExportsOrder,m as default};
