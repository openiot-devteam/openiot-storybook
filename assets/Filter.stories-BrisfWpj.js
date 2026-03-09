import{j as s}from"./jsx-runtime-IAXpt_DT.js";/* empty css                */import{r as m}from"./iframe-C_qAr3xJ.js";import"./preload-helper-PPVm8Dsz.js";function p({status:e="default",active:r=!1,children:t,onClick:a,id:i,...h}){const g=r?"Body-02-SB text-01":"Body-02 text-03";return s.jsx("button",{className:"Filter","data-status":e,"data-active":r,onClick:a,...h,children:s.jsx("span",{className:g,children:t})})}p.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{status:{required:!1,tsType:{name:"union",raw:'"default" | "hovering" | "pressed"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovering"'},{name:"literal",value:'"pressed"'}]},description:`상태
@default "default"`,defaultValue:{value:'"default"',computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:`활성 상태
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Filter 텍스트 내용"},id:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Filter ID"}},composes:["Omit"]};function f({items:e,onFilterClick:r}){return s.jsx("div",{className:"FilterBar",children:e.map(t=>s.jsx(p,{onClick:r,...t,children:t.children},t.id))})}f.__docgenInfo={description:"",methods:[],displayName:"FilterBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"FilterProps"}],raw:"FilterProps[]"},description:"Filter 목록"},onFilterClick:{required:!1,tsType:{name:'FilterProps["onClick"]',raw:'FilterProps["onClick"]'},description:"Filter 클릭 핸들러"}}};const k={title:"Example/Filter",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["default","hovering","pressed"],description:"필터 상태"},active:{control:"boolean",description:"활성 상태"},children:{control:"text",description:"필터 텍스트 내용"},onClick:{action:"clicked",description:"클릭 이벤트 핸들러"}}},v=e=>{const[r,t]=m.useState(e.active||!1);return s.jsx(p,{...e,active:r,onClick:a=>{t(!r),e.onClick?.(a)}})},n={render:v,args:{status:"default",active:!1,children:"필터",id:"filter-default"}},l={render:v,args:{status:"default",active:!1,children:"활성 필터",id:"filter-active"}},d={args:{status:"hovering",active:!1,children:"호버 상태",id:"filter-hovering"}},c={args:{status:"pressed",active:!1,children:"누름 상태",id:"filter-pressed"}},o={args:{status:"default",active:!1,children:"비활성화",id:"filter-disabled",disabled:!0}},u={render:()=>{const[e,r]=m.useState([{id:1,children:"전체",active:!0},{id:2,children:"필터 1",active:!1},{id:3,children:"필터 2",active:!1},{id:4,children:"필터 3",active:!1}]),t=a=>{r(e.map(i=>({...i,active:i.id===a})))};return s.jsx("div",{style:{display:"flex",gap:"8px"},children:s.jsx(f,{items:e,onFilterClick:a=>{const i=Number(a.currentTarget.id);t(i)}})})},parameters:{layout:"centered"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: FilterWrapper,
  args: {
    status: "default",
    active: false,
    children: "필터",
    id: "filter-default"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: FilterWrapper,
  args: {
    status: "default",
    active: false,
    children: "활성 필터",
    id: "filter-active"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: "hovering",
    active: false,
    children: "호버 상태",
    id: "filter-hovering"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pressed",
    active: false,
    children: "누름 상태",
    id: "filter-pressed"
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "default",
    active: false,
    children: "비활성화",
    id: "filter-disabled",
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: 1,
      children: "전체",
      active: true
    }, {
      id: 2,
      children: "필터 1",
      active: false
    }, {
      id: 3,
      children: "필터 2",
      active: false
    }, {
      id: 4,
      children: "필터 3",
      active: false
    }]);
    const handleFilterClick = (filterId: number) => {
      setItems(items.map(item => ({
        ...item,
        active: item.id === filterId
      })));
    };
    return <div style={{
      display: "flex",
      gap: "8px"
    }}>
        <FilterBar items={items} onFilterClick={e => {
        const filterId = Number(e.currentTarget.id);
        handleFilterClick(filterId);
      }} />
      </div>;
  },
  parameters: {
    layout: "centered"
  }
}`,...u.parameters?.docs?.source}}};const C=["Default","Active","Hovering","Pressed","Disabled","FilterBarExample"];export{l as Active,n as Default,o as Disabled,u as FilterBarExample,d as Hovering,c as Pressed,C as __namedExportsOrder,k as default};
