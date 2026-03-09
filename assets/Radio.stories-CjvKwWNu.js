import{j as r}from"./jsx-runtime-IAXpt_DT.js";import{R as a}from"./Radio-CfB-iDt2.js";/* empty css                */import{r as p}from"./iframe-C_qAr3xJ.js";import"./Svg-Dtfn3Qdy.js";import"./preload-helper-PPVm8Dsz.js";const F={title:"Example/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"],description:"라디오 버튼 크기"},label:{control:"text",description:"라디오 버튼 라벨"},checked:{control:"boolean",description:"선택 상태"},disabled:{control:"boolean",description:"비활성화 상태"},onChange:{action:"changed",description:"변경 이벤트 핸들러"}}},c=e=>{const[o,u]=p.useState(e.checked||!1);return r.jsx(a,{...e,checked:o,onChange:m=>{u(m.target.checked),e.onChange?.(m)}})},d={render:c,args:{size:"medium",label:"라디오 버튼",htmlFor:"radio-default",id:"radio-default"}},i={render:c,args:{size:"small",label:"작은 라디오 버튼",htmlFor:"radio-small",id:"radio-small"}},s={render:c,args:{size:"medium",label:"선택된 상태",htmlFor:"radio-checked",id:"radio-checked",checked:!0}},t={args:{size:"medium",label:"비활성화",htmlFor:"radio-disabled",id:"radio-disabled",disabled:!0}},n={args:{size:"medium",label:"비활성화된 선택 상태",htmlFor:"radio-disabled-checked",id:"radio-disabled-checked",checked:!0,disabled:!0}},l={render:()=>{const[e,o]=p.useState("option1");return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(a,{size:"medium",label:"옵션 1",htmlFor:"option1",id:"option1",name:"group",checked:e==="option1",onChange:()=>o("option1")}),r.jsx(a,{size:"medium",label:"옵션 2",htmlFor:"option2",id:"option2",name:"group",checked:e==="option2",onChange:()=>o("option2")}),r.jsx(a,{size:"medium",label:"옵션 3",htmlFor:"option3",id:"option3",name:"group",checked:e==="option3",onChange:()=>o("option3")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: RadioWrapper,
  args: {
    size: "medium",
    label: "라디오 버튼",
    htmlFor: "radio-default",
    id: "radio-default"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: RadioWrapper,
  args: {
    size: "small",
    label: "작은 라디오 버튼",
    htmlFor: "radio-small",
    id: "radio-small"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: RadioWrapper,
  args: {
    size: "medium",
    label: "선택된 상태",
    htmlFor: "radio-checked",
    id: "radio-checked",
    checked: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화",
    htmlFor: "radio-disabled",
    id: "radio-disabled",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "비활성화된 선택 상태",
    htmlFor: "radio-disabled-checked",
    id: "radio-disabled-checked",
    checked: true,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const S=["Default","Small","Checked","Disabled","DisabledChecked","RadioGroup"];export{s as Checked,d as Default,t as Disabled,n as DisabledChecked,l as RadioGroup,i as Small,S as __namedExportsOrder,F as default};
