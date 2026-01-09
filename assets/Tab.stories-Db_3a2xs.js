import{j as e}from"./jsx-runtime-DLNaQYgA.js";import{L as d}from"./link-p7YNDoAT.js";/* empty css                */import"./iframe-BU77cE2O.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-BUPkODb0.js";function r({href:o,children:c,active:n=!1}){const i=n?"Body-01-SB text-01":"Body-01 text-03";return e.jsx(d,{className:"TabLink","data-active":n,href:o,children:e.jsxs("span",{className:i,children:[" ",c]})})}r.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{href:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={title:"Example/Tab",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",description:"탭 링크 URL"},children:{control:"text",description:"탭 텍스트 내용"},active:{control:"boolean",description:"활성 상태"}}},a={args:{href:"#",children:"탭",active:!1}},t={args:{href:"#",children:"활성 탭",active:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{href:"#tab1",active:!0,children:"탭 1"}),e.jsx(r,{href:"#tab2",active:!1,children:"탭 2"}),e.jsx(r,{href:"#tab3",active:!1,children:"탭 3"})]}),parameters:{layout:"centered"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "탭",
    active: false
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "활성 탭",
    active: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const x=["Default","Active","TabGroup"];export{t as Active,a as Default,s as TabGroup,x as __namedExportsOrder,b as default};
