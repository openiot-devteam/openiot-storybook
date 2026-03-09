import{j as r}from"./jsx-runtime-IAXpt_DT.js";/* empty css                */import{r as h}from"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";function u({status:e="default",active:i=!1,children:a,className:s,id:n,disabled:g,onClick:v,...C}){return r.jsx("button",{className:"Chip","data-status":e,"data-active":i,onClick:v,...C,children:r.jsx("span",{className:"Caption-02",children:a})})}u.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{status:{required:!1,tsType:{name:"union",raw:'"default" | "hovering" | "pressed"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovering"'},{name:"literal",value:'"pressed"'}]},description:`상태
@default "default"`,defaultValue:{value:'"default"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Chip 텍스트 내용"},id:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Chip ID"},active:{required:!1,tsType:{name:"boolean"},description:`활성 상태
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};function m({chips:e,onChipClick:i}){return r.jsxs("div",{className:"ChipBar",children:[r.jsx("div",{className:"ChipBarScroll",children:e.map(a=>r.jsx(u,{onClick:i,...a,children:a.children},a.id))}),r.jsx("div",{className:"ChipBarGradient "})]})}m.__docgenInfo={description:"",methods:[],displayName:"ChipBar",props:{chips:{required:!0,tsType:{name:"Array",elements:[{name:"ChipProps"}],raw:"ChipProps[]"},description:"Chip 목록"},onChipClick:{required:!1,tsType:{name:'ChipProps["onClick"]',raw:'ChipProps["onClick"]'},description:"Chip 클릭 핸들러"}}};const j={title:"Example/Chip",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["default","hovering","pressed"],description:"칩 상태"},active:{control:"boolean",description:"활성 상태"},children:{control:"text",description:"칩 텍스트 내용"},onClick:{action:"clicked",description:"클릭 이벤트 핸들러"}}},f=e=>{const[i,a]=h.useState(e.active||!1);return r.jsx(u,{...e,active:i,onClick:s=>{a(!i),e.onClick?.(s)}})},t={render:f,args:{status:"default",active:!1,children:"칩",id:"chip-default"}},c={render:f,args:{status:"default",active:!0,children:"활성 칩",id:"chip-active"}},d={args:{status:"hovering",active:!1,children:"호버 상태",id:"chip-hovering"}},l={args:{status:"pressed",active:!1,children:"누름 상태",id:"chip-pressed"}},p={args:{status:"default",active:!1,children:"비활성화",id:"chip-disabled",disabled:!0}},o={render:()=>{const[e,i]=h.useState([{id:1,children:"전체",active:!0},{id:2,children:"카테고리 1",active:!1},{id:3,children:"카테고리 2",active:!1},{id:4,children:"카테고리 3",active:!1},{id:5,children:"카테고리 4",active:!1},{id:6,children:"카테고리 5",active:!1},{id:7,children:"카테고리 6",active:!1}]),a=s=>{i(e.map(n=>({...n,active:n.id===s})))};return r.jsx("div",{style:{width:"400px"},children:r.jsx(m,{chips:e,onChipClick:s=>{const n=Number(s.currentTarget.id);a(n)}})})},parameters:{layout:"centered"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ChipWrapper,
  args: {
    status: "default",
    active: false,
    children: "칩",
    id: "chip-default"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ChipWrapper,
  args: {
    status: "default",
    active: true,
    children: "활성 칩",
    id: "chip-active"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: "hovering",
    active: false,
    children: "호버 상태",
    id: "chip-hovering"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pressed",
    active: false,
    children: "누름 상태",
    id: "chip-pressed"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: "default",
    active: false,
    children: "비활성화",
    id: "chip-disabled",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState([{
      id: 1,
      children: "전체",
      active: true
    }, {
      id: 2,
      children: "카테고리 1",
      active: false
    }, {
      id: 3,
      children: "카테고리 2",
      active: false
    }, {
      id: 4,
      children: "카테고리 3",
      active: false
    }, {
      id: 5,
      children: "카테고리 4",
      active: false
    }, {
      id: 6,
      children: "카테고리 5",
      active: false
    }, {
      id: 7,
      children: "카테고리 6",
      active: false
    }]);
    const handleChipClick = (chipId: number) => {
      setChips(chips.map(chip => ({
        ...chip,
        active: chip.id === chipId
      })));
    };
    return <div style={{
      width: "400px"
    }}>
        <ChipBar chips={chips} onChipClick={e => {
        const chipId = Number(e.currentTarget.id);
        handleChipClick(chipId);
      }} />
      </div>;
  },
  parameters: {
    layout: "centered"
  }
}`,...o.parameters?.docs?.source}}};const N=["Default","Active","Hovering","Pressed","Disabled","ChipBarExample"];export{c as Active,o as ChipBarExample,t as Default,p as Disabled,d as Hovering,l as Pressed,N as __namedExportsOrder,j as default};
