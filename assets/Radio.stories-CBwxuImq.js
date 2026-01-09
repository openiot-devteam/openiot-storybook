import{j as a}from"./jsx-runtime-DLNaQYgA.js";import{S as R}from"./Svg-CGLjOrJ3.js";/* empty css                */import{r as b}from"./iframe-BU77cE2O.js";import"./preload-helper-PPVm8Dsz.js";const r={wrapper:{size:{medium:"size-6",small:"size-5"}},size:{medium:"size-4",small:"size-3.5"},checked:{svg:{size:{medium:16,small:14},viewBox:{medium:"0 0 16 16",small:"0 0 14 14"},center:{medium:8,small:7},r:{medium:3.5,small:3}}},label:{medium:"Body-01",small:"Body-02"},color:{default:"text-01",disabled:"text-04"}};function d({size:e="medium",checked:o,onChange:p,disabled:s,htmlFor:f,label:k,...x}){const z=r.size[e],S=r.wrapper.size[e],h=r.checked.svg.size[e],C=r.checked.svg.viewBox[e],g=r.checked.svg.center[e],F=r.checked.svg.r[e],v=r.label[e],y=r.color[s?"disabled":"default"];return a.jsxs("label",{className:`selection ${y} ${v} `,htmlFor:f,children:[a.jsx("span",{className:`fc ${S}`,children:a.jsx("span",{className:`Radio ${z}`,"data-checked":o,"data-disabled":s,children:o&&a.jsx(R,{className:"RadioChecked",width:h,height:h,viewBox:C,children:a.jsx("circle",{cx:g,cy:g,r:F,fill:"#ffffff"})})})}),a.jsx("input",{className:"sr-only",type:"radio",checked:o,disabled:s,onChange:p,...x}),k]})}d.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{size:{required:!1,tsType:{name:"union",raw:'"medium" | "small"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},htmlFor:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const E={title:"Example/Radio",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"],description:"라디오 버튼 크기"},label:{control:"text",description:"라디오 버튼 라벨"},checked:{control:"boolean",description:"선택 상태"},disabled:{control:"boolean",description:"비활성화 상태"},onChange:{action:"changed",description:"변경 이벤트 핸들러"}}},u=e=>{const[o,p]=b.useState(e.checked||!1);return a.jsx(d,{...e,checked:o,onChange:s=>{p(s.target.checked),e.onChange?.(s)}})},i={render:u,args:{size:"medium",label:"라디오 버튼",htmlFor:"radio-default",id:"radio-default"}},t={render:u,args:{size:"small",label:"작은 라디오 버튼",htmlFor:"radio-small",id:"radio-small"}},n={render:u,args:{size:"medium",label:"선택된 상태",htmlFor:"radio-checked",id:"radio-checked",checked:!0}},l={args:{size:"medium",label:"비활성화",htmlFor:"radio-disabled",id:"radio-disabled",disabled:!0}},c={args:{size:"medium",label:"비활성화된 선택 상태",htmlFor:"radio-disabled-checked",id:"radio-disabled-checked",checked:!0,disabled:!0}},m={render:()=>{const[e,o]=b.useState("option1");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsx(d,{size:"medium",label:"옵션 1",htmlFor:"option1",id:"option1",name:"group",checked:e==="option1",onChange:()=>o("option1")}),a.jsx(d,{size:"medium",label:"옵션 2",htmlFor:"option2",id:"option2",name:"group",checked:e==="option2",onChange:()=>o("option2")}),a.jsx(d,{size:"medium",label:"옵션 3",htmlFor:"option3",id:"option3",name:"group",checked:e==="option3",onChange:()=>o("option3")})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: RadioWrapper,
  args: {
    size: "medium",
    label: "라디오 버튼",
    htmlFor: "radio-default",
    id: "radio-default"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: RadioWrapper,
  args: {
    size: "small",
    label: "작은 라디오 버튼",
    htmlFor: "radio-small",
    id: "radio-small"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: RadioWrapper,
  args: {
    size: "medium",
    label: "선택된 상태",
    htmlFor: "radio-checked",
    id: "radio-checked",
    checked: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화",
    htmlFor: "radio-disabled",
    id: "radio-disabled",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화된 선택 상태",
    htmlFor: "radio-disabled-checked",
    id: "radio-disabled-checked",
    checked: true,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("option1");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <Radio size="medium" label="옵션 1" htmlFor="option1" id="option1" name="group" checked={selected === "option1"} onChange={() => setSelected("option1")} />
        <Radio size="medium" label="옵션 2" htmlFor="option2" id="option2" name="group" checked={selected === "option2"} onChange={() => setSelected("option2")} />
        <Radio size="medium" label="옵션 3" htmlFor="option3" id="option3" name="group" checked={selected === "option3"} onChange={() => setSelected("option3")} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const T=["Default","Small","Checked","Disabled","DisabledChecked","RadioGroup"];export{n as Checked,i as Default,l as Disabled,c as DisabledChecked,m as RadioGroup,t as Small,T as __namedExportsOrder,E as default};
