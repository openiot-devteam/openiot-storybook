import{j as e}from"./jsx-runtime-Cudirygt.js";import{L as d}from"./link-BpB3KO96.js";/* empty css                */import"./iframe-gCqYQPKW.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-BsmUvcbT.js";function r({active:n=!1,children:o,id:l,...c}){const i=n?"Body-01-SB text-01":"Body-01 text-03";return e.jsx(d,{className:"Tab","data-active":n,...c,children:e.jsxs("span",{className:i,children:[" ",o]})})}r.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{id:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["LinkProps"]};const x={title:"Example/Tab",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",description:"탭 링크 URL"},children:{control:"text",description:"탭 텍스트 내용"},active:{control:"boolean",description:"활성 상태"}}},a={args:{href:"#",children:"탭",active:!1}},t={args:{href:"#",children:"활성 탭",active:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{href:"#tab1",active:!0,children:"탭 1"}),e.jsx(r,{href:"#tab2",active:!1,children:"탭 2"}),e.jsx(r,{href:"#tab3",active:!1,children:"탭 3"})]}),parameters:{layout:"centered"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["Default","Active","TabGroup"];export{t as Active,a as Default,s as TabGroup,v as __namedExportsOrder,x as default};
