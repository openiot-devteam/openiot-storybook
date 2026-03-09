import{j as e}from"./jsx-runtime-IAXpt_DT.js";import{B as v}from"./Button-CSCRkr0u.js";import"./ButtonGroup-Dc7GnsRR.js";import"./CheckBox-cO8GCqe9.js";import{R as A}from"./Radio-CfB-iDt2.js";import"./Toggle-BMKtKvdu.js";import"./Dropdown-CGagV49v.js";import"./Slider-C1NKi3qT.js";import{u as B}from"./useDialog-CNZEMBvi.js";import{r as x}from"./iframe-C_qAr3xJ.js";/* empty css                */import"./OpenIotIcon-DoImvoTE.js";import"./Svg-Dtfn3Qdy.js";import"./CheckIcon-BBxKDoQf.js";import"./Arrow1DownIcon-DncsGFlt.js";import"./preload-helper-PPVm8Dsz.js";function d({title:t,children:r,button:i,open:o,onClose:m,...s}){const{ref:u}=B({open:o});return e.jsxs("dialog",{className:"AppBottomSheet",ref:u,...s,children:[r,e.jsx("div",{className:"AppBottomSheetButton",children:e.jsx(v,{...i})}),e.jsx("div",{})]})}function b({button:t,children:r,title:i,options:o,...m}){return e.jsxs(d,{button:t,...m,children:[e.jsx("div",{className:"text-01 Headline-02 fc",children:i}),e.jsx("div",{className:"flex flex-col gap-4",children:o?.map(s=>e.jsx(A,{...s},s.id))})]})}function y({button:t,children:r,title:i,items:o,onScroll:m,...s}){const[u,j]=x.useState(null),a=x.useRef(null);return x.useEffect(()=>{if(!a.current)return;const n={root:a.current,rootMargin:"-84px 0px -84px 0px",threshold:1},f=new IntersectionObserver(h=>{h.forEach(g=>{if(g.isIntersecting){const S=g.target.getAttribute("data-id");S&&j(S)}})},n);return a.current.querySelectorAll(".AppBottomSheetPickerScrollItem").forEach(h=>f.observe(h)),()=>f.disconnect()},[o]),e.jsxs(d,{button:t,...s,children:[e.jsx("div",{className:"text-01 Headline-02 fc",children:i}),e.jsxs("div",{className:"relative px-2 flex justify-center",children:[e.jsx("div",{className:"AppBottomSheetPickerScrollShade"}),e.jsx("div",{className:"AppBottomSheetPickerScroll",ref:a,children:e.jsx("div",{className:"my-21 w-full",children:o?.map(n=>e.jsx("button",{className:"AppBottomSheetPickerScrollItem Headline-02","data-id":n.id,"data-selected":u===n.id,children:n.label},n.id))})}),e.jsx("div",{className:"AppBottomSheetPickGuide"}),e.jsx("div",{className:"AppBottomSheetPickerScrollShade"})]})]})}d.__docgenInfo={description:"",methods:[],displayName:"AppBottomSheet",props:{title:{required:!1,tsType:{name:"string"},description:""},button:{required:!0,tsType:{name:"ButtonProps"},description:""}},composes:["DialogHTMLAttributes"]};b.__docgenInfo={description:"",methods:[],displayName:"AppBottomSheetOption",props:{title:{required:!1,tsType:{name:"string"},description:""},button:{required:!0,tsType:{name:"ButtonProps"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""}},composes:["DialogHTMLAttributes"]};y.__docgenInfo={description:"",methods:[],displayName:"AppBottomSheetPicker",props:{onScroll:{required:!0,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:`Array<{
  id: string;
  label: string;
}>`},description:""}},composes:["Omit"]};const G={title:"Example/AppBottomSheet",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"바텀시트 노출 여부"},title:{control:"text",description:"바텀시트 제목"}}},l={args:{open:!0,title:"바텀시트 제목",button:{text:"확인",color:"primary",onClick:()=>alert("확인 클릭")},children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"Body-02 text-02",children:"바텀시트 콘텐츠 영역입니다."})})}},c={render:t=>e.jsx(b,{...t}),args:{open:!0,title:"정렬 기준 선택",button:{text:"적용하기",color:"primary"},options:[{id:"latest",label:"최신순",checked:!0},{id:"oldest",label:"오래된순",checked:!1},{id:"popular",label:"인기순",checked:!1}]}},k=Array.from({length:24},(t,r)=>({id:`${r}`,label:`${String(r).padStart(2,"0")}시`})),p={render:t=>e.jsx(y,{...t}),args:{open:!0,title:"시간 선택",button:{text:"선택 완료",color:"primary"},items:k}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "바텀시트 제목",
    button: {
      text: "확인",
      color: "primary",
      onClick: () => alert("확인 클릭")
    },
    children: <div className="p-4">
        <p className="Body-02 text-02">바텀시트 콘텐츠 영역입니다.</p>
      </div>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <AppBottomSheetOption {...args} />,
  args: {
    open: true,
    title: "정렬 기준 선택",
    button: {
      text: "적용하기",
      color: "primary"
    },
    options: [{
      id: "latest",
      label: "최신순",
      checked: true
    }, {
      id: "oldest",
      label: "오래된순",
      checked: false
    }, {
      id: "popular",
      label: "인기순",
      checked: false
    }]
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <AppBottomSheetPicker {...args} />,
  args: {
    open: true,
    title: "시간 선택",
    button: {
      text: "선택 완료",
      color: "primary"
    },
    items: pickerItems
  }
}`,...p.parameters?.docs?.source}}};const z=["Default","Options","Picker"];export{l as Default,c as Options,p as Picker,z as __namedExportsOrder,G as default};
