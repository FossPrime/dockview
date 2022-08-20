"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[2852],{7455:(e,t,n)=>{n.d(t,{M:()=>l});var a=n(2784);const l=e=>{const t=a.useRef();return a.useLayoutEffect((()=>{t.current&&(t.current.scrollTop=Math.max(0,t.current.scrollHeight-t.current.clientHeight))}),[e.lines]),a.createElement("div",{ref:t,className:"console-container"},e.lines.map(((e,t)=>a.createElement("div",{key:t,className:"console-line"},a.createElement("span",{className:"console-line-timestamp"},(e=>{const t=e=>e<10?"0"+e:""+e;return t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+e.getMilliseconds()})(e.timestamp)),a.createElement("span",{className:"console-line-text",style:e.css},e.text)))))}},9312:(e,t,n)=>{n.d(t,{n:()=>p});var a=n(7896),l=n(662),r=n(2784);const i={default:e=>r.createElement("div",{style:{padding:"20px"}},e.params.title)},d=e=>{const t=r.useCallback((t=>{t.stopPropagation(),e.api.close()}),[e.api]),n=r.useCallback((t=>{e.api.setActive(),e.onClick&&e.onClick(t)}),[e.api,e.onClick]);return r.createElement("div",(0,a.Z)({},e,{onClick:n,className:"dockview-react-tab"}),r.createElement("span",{className:"dockview-react-tab-title"},e.api.title),r.createElement("span",{onClick:t,className:"dockview-react-tab-action"},"\u2715"))},o={default:e=>r.createElement(d,(0,a.Z)({onContextMenu:e=>{e.preventDefault(),alert("hiya")}},e))},p=()=>r.createElement(l.tu,{components:i,tabComponents:o,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",tabComponent:"default",params:{title:"Panel 1"}}),e.api.addPanel({id:"panel_2",component:"default",tabComponent:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",tabComponent:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",tabComponent:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}})},className:"dockview-theme-abyss",onTabContextMenu:e=>{e.event.preventDefault(),alert("Content appear event fired for panel "+e.panel.id)}})},960:(e,t,n)=>{n.d(t,{s:()=>i});var a=n(662),l=n(2784);const r={default:e=>l.createElement("div",{style:{padding:"20px"}},l.createElement("div",null,e.params.title))},i=e=>l.createElement(l.Fragment,null,l.createElement("div",{style:{backgroundColor:"orange",padding:"0px 8px",borderRadius:"4px",width:"100px",cursor:"pointer"},draggable:!0},"Drag me"),l.createElement("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},l.createElement(a.tu,{components:r,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}})},className:"dockview-theme-abyss",onDidDrop:e=>{const{group:t}=e;e.api.addPanel({id:"test",component:"default",position:{referencePanel:t.activePanel.id,direction:"within"}})},showDndOverlay:e=>!0})))},1333:(e,t,n)=>{n.d(t,{C:()=>d});var a=n(662),l=n(2784),r=n(7455);const i={default:e=>l.createElement("div",{style:{padding:"20px"}},e.params.title)},d=()=>{const[e,t]=l.useState([]),[n,d]=l.useState(!1),[o,p]=l.useState();l.useEffect((()=>{if(!o)return()=>{};const e=[o.onDidAddPanel((e=>{t((t=>[...t,{timestamp:new Date,text:"onDidAddPanel: "+e.id}]))})),o.onDidRemovePanel((e=>{t((t=>[...t,{timestamp:new Date,text:"onDidRemovePanel: "+e.id}]))})),o.onDidActivePanelChange((e=>{t((t=>[...t,{timestamp:new Date,text:"onDidActivePanelChange: "+(null==e?void 0:e.id)}]))})),o.onDidAddGroup((e=>{t((t=>[...t,{timestamp:new Date,text:"onDidAddGroup: "+e.id}]))})),o.onDidRemoveGroup((e=>{t((t=>[...t,{timestamp:new Date,text:"onDidRemoveGroup: "+e.id}]))})),o.onDidActiveGroupChange((e=>{t((t=>[...t,{timestamp:new Date,text:"onDidActiveGroupChange: "+(null==e?void 0:e.id)}]))})),o.onDidLayoutChange((e=>{t((e=>[...e,{timestamp:new Date,text:"onDidLayoutChange"}]))})),o.onDidLayoutFromJSON((e=>{t((e=>[...e,{timestamp:new Date,text:"onDidLayoutFromJSON"}]))}))];return()=>{e.forEach((e=>e.dispose()))}}),[o]),l.useEffect((()=>{o&&(t((e=>[...e,{timestamp:new Date,text:"Rebuilding view fromJSON:"+n,css:{color:"yellow",backgroundColor:"grey"}}])),n?o.fromJSON({grid:{root:{type:"branch",data:[{type:"leaf",data:{views:["panel_1","panel_2","panel_3"],activeView:"panel_3",id:"77"},size:262},{type:"branch",data:[{type:"leaf",data:{views:["panel_5"],activeView:"panel_5",id:"79"},size:100},{type:"leaf",data:{views:["panel_6","panel_8"],activeView:"panel_8",id:"80"},size:100},{type:"leaf",data:{views:["panel_7"],activeView:"panel_7",id:"81"},size:100}],size:262},{type:"leaf",data:{views:["panel_4"],activeView:"panel_4",id:"78"},size:263.75}],size:300},width:787.75,height:300,orientation:a.i5.HORIZONTAL},panels:{panel_1:{id:"panel_1",view:{content:{id:"default"}},params:{title:"Panel 1"},title:"panel_1"},panel_2:{id:"panel_2",view:{content:{id:"default"}},params:{title:"Panel 2"},title:"panel_2"},panel_3:{id:"panel_3",view:{content:{id:"default"}},params:{title:"Panel 3"},title:"panel_3"},panel_4:{id:"panel_4",view:{content:{id:"default"}},params:{title:"Panel 4"},title:"panel_4"},panel_5:{id:"panel_5",view:{content:{id:"default"}},params:{title:"Panel 5"},title:"panel_5"},panel_6:{id:"panel_6",view:{content:{id:"default"}},params:{title:"Panel 6"},title:"panel_6"},panel_8:{id:"panel_8",view:{content:{id:"default"}},params:{title:"Panel 8"},title:"panel_8"},panel_7:{id:"panel_7",view:{content:{id:"default"}},params:{title:"Panel 7"},title:"panel_7"}},activeGroup:"80",options:{}}):(o.clear(),o.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),o.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),o.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),o.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),o.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),o.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"}}),o.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"below"}}),o.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"within"}})))}),[o,n]);return l.createElement(l.Fragment,null,l.createElement("label",null,l.createElement("input",{type:"checkbox",checked:n,onChange:e=>d(e.target.checked)}),l.createElement("span",null,"fromJSON")),l.createElement("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},l.createElement(a.tu,{components:i,onReady:e=>{p(e.api)},className:"dockview-theme-abyss"})),l.createElement(r.M,{lines:e}))}},5908:(e,t,n)=>{n.d(t,{X:()=>u,y:()=>m});var a=n(662),l=n(2784),r=n(3476);const i=(0,r.cn)({key:"renderVisibleComponentsOnlyAtom",default:!1});const d=e=>{const t=new Date,n=e=>e<10?"0"+e:""+e;return"["+(n(t.getHours())+":"+n(t.getMinutes())+":"+n(t.getSeconds()))+"] "+e},o={default:(p=e=>{const[t,n]=l.useState([d("Component created")]);return l.useEffect((()=>{n((e=>[...e,d("Running task for 5 seconds")]));const e=setTimeout((()=>{n((e=>[...e,d("Task completed")]))}),5e3);return()=>{clearTimeout(e)}}),[]),l.createElement("div",{style:{padding:"20px"}},l.createElement("div",null,e.params.title),t.map(((e,t)=>l.createElement("div",{key:t},e))))},e=>{const[t,n]=l.useState(e.api.isVisible),a=(0,r.sJ)(i);return l.useEffect((()=>{const t=e.api.onDidVisibilityChange((e=>n(e.isVisible)));return()=>{t.dispose()}}),[e.api]),!t&&a?null:l.createElement(p,e)})};var p;const m=e=>{const[t,n]=(0,r.FV)(i);l.useEffect((()=>n(e.renderVisibleOnly)),[e.renderVisibleOnly]);return l.createElement(a.tu,{components:o,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}})},className:"dockview-theme-abyss"})},u=()=>{const[e,t]=(0,r.FV)(i);return l.createElement("label",null,"Render only when visible",l.createElement("input",{type:"checkbox",checked:e,onChange:e=>t(e.target.checked)}))}},5567:(e,t,n)=>{n.d(t,{b:()=>i});var a=n(662),l=n(2784);const r={default:e=>l.createElement("div",{style:{padding:"20px"}},e.params.title)},i=()=>l.createElement(a.tu,{components:r,onReady:e=>{const t=e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}});t.group.locked=!0,t.group.header.hidden=!0,e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}});e.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}});e.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"}}),e.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"}})},className:"dockview-theme-abyss"})},2024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>u,metadata:()=>k,toc:()=>g});var a=n(7896),l=(n(2784),n(876)),r=n(5567),i=n(5908),d=n(960),o=n(1333),p=n(9312),m=n(9817);const u={},s="Dockview",k={unversionedId:"components/dockview",id:"version-1.4.3/components/dockview",title:"Dockview",description:"Introduction",source:"@site/versioned_docs/version-1.4.3/components/dockview.mdx",sourceDirName:"components",slug:"/components/dockview",permalink:"/docs/1.4.3/components/dockview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.4.3/components/dockview.mdx",tags:[],version:"1.4.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/1.4.3/category/components"},next:{title:"Gridview",permalink:"/docs/1.4.3/components/gridview"}},c={},g=[{value:"Introduction",id:"introduction",level:2},{value:"DockviewReact Component",id:"dockviewreact-component",level:2},{value:"Dockview API",id:"dockview-api",level:2},{value:"Dockview Panel API",id:"dockview-panel-api",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Locked group",id:"locked-group",level:3},{value:"Group header",id:"group-header",level:3},{value:"Context Menu",id:"context-menu",level:3},{value:"Rendering",id:"rendering",level:3},{value:"Drag And Drop",id:"drag-and-drop",level:3},{value:"Events",id:"events",level:3}],N={toc:g};function v(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dockview"},"Dockview"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Dockview is an abstraction built on top of ",(0,l.kt)("a",{parentName:"p",href:"./gridview"},"Gridviews")," where each view is a container of many tabbed panels."),(0,l.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,l.kt)(r.b,{mdxType:"SimpleDockview"})),(0,l.kt)("p",null,"You can access the panels associated group through the ",(0,l.kt)("inlineCode",{parentName:"p"},"panel.group")," variable.\nThe group will always be defined and will change if a panel is moved into another group."),(0,l.kt)("h2",{id:"dockviewreact-component"},"DockviewReact Component"),(0,l.kt)("p",null,"You can create a Dockview through the use of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDockview")," component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ReactDockview } from 'dockview';\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onReady"),(0,l.kt)("td",{parentName:"tr",align:null},"(event: SplitviewReadyEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"components"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tabComponents"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"watermarkComponent"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideBorders"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"''"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableAutoResizing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)(m.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTabContextMenu"),(0,l.kt)("td",{parentName:"tr",align:null},"Event"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidDrop"),(0,l.kt)("td",{parentName:"tr",align:null},"Event"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showDndOverlay"),(0,l.kt)("td",{parentName:"tr",align:null},"Event"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"dockview-api"},"Dockview API"),(0,l.kt)("p",null,"The Dockview API is exposed both at the ",(0,l.kt)("inlineCode",{parentName:"p"},"onReady")," event and on each panel through ",(0,l.kt)("inlineCode",{parentName:"p"},"props.containerApi"),".\nThrough this API you can control general features of the component and access all added panels."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Dockview API via Panel component"',title:'"Dockview',API:!0,via:!0,Panel:!0,'component"':!0},"const MyComponent = (props: IDockviewPanelProps<{ title: string }>) => {\n    // props.containerApi...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Dockview API via the onReady callback"',title:'"Dockview',API:!0,via:!0,the:!0,onReady:!0,'callback"':!0},"const onReady = (event: DockviewReadyEvent) => {\n    // event.api...\n};\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Component pixel height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Component pixel width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minimumHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of panels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"panels"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IDockviewPanel[]")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GroupPanel[]")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activePanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IDockviewPanel \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activeGroup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IDockviewPanel \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidLayoutChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidLayoutFromJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidAddGroup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<GroupPanel>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidRemoveGroup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<GroupPanel>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidActiveGroupChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<GroupPanel \\| undefined>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidAddPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IDockviewPanel>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidRemovePanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IDockviewPanel>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidActivePanelChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IDockviewPanel \\| undefined>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidDrop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<DockviewDropEvent")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addPanel(options: AddPanelOptions): IDockviewPanel")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(id: string) \\| IDockviewPanel \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addEmptyGroup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(options? AddGroupOptions): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closeAllGroups"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removeGroup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(group: GroupPanel): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getGroup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(id: string): GroupPanel \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getTabHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): number \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setTabHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(hegiht: number \\| undefined): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateOptions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(options:SplitviewComponentUpdateOptions): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(width: number, height:number): void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fromJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(data: SerializedDockview): void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): SerializedDockview")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null},"Clears the current layout")))),(0,l.kt)("h2",{id:"dockview-panel-api"},"Dockview Panel API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IDockviewPanelProps<{ title: string }>) => {\n    // props.api...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel focsed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isActive"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel active")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidDimensionsChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<PanelDimensionChangeEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidFocusChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<FocusEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidVisibilityChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<VisibilityEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidActiveChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<ActiveEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setActive"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidConstraintsChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onDidConstraintsChange: Event<PanelConstraintChangeEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setConstraints"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(value: PanelConstraintChangeEvent2): void;")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(event: SizeEvent): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"`GroupPanel"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined`")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isGroupActive"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suppressClosable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"close"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setTitle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(title: string): void")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,l.kt)("h3",{id:"locked-group"},"Locked group"),(0,l.kt)("p",null,"Locking a group will disable all drop events for this group ensuring a user can not add additional panels to the group.\nYou can still add groups to a locked panel programatically using the API."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"panel.group.locked = true;\n")),(0,l.kt)("h3",{id:"group-header"},"Group header"),(0,l.kt)("p",null,"You may wish to hide the header section of a group. This can achieved through setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"hidden")," variable on ",(0,l.kt)("inlineCode",{parentName:"p"},"panel.group.header"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"panel.group.header.hidden = true;\n")),(0,l.kt)("h3",{id:"context-menu"},"Context Menu"),(0,l.kt)("p",null,"Since overriding the context menu is a such a common feature rather than defining a custom tab the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDockview")," component exposes the prop ",(0,l.kt)("inlineCode",{parentName:"p"},"onTabContextMenu"),".\nYou can alternatively define a custom tab component for more granular control."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onTabContextMenu")," is intended to be removed in a future release to further simplify the library.\nIn the future you will be required to define a custom tab component to intercept the context menu events."))),(0,l.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,l.kt)(p.n,{mdxType:"ContextMenuDockview"})),(0,l.kt)("h3",{id:"rendering"},"Rendering"),(0,l.kt)("p",null,"Although ",(0,l.kt)("inlineCode",{parentName:"p"},"DockviewReact")," will only add those tabs that are visible to the DOM all associated React Components for each tab including those that\nare not initially visible will be created.\nThis will mean that any hooks in those components will run and if you running expensive operations in the tabs you may end up doing a lot of initial\nwork for what are hidden tabs."),(0,l.kt)("p",null,"This is the default behaviour to ensure the greatest flexibility for the user but you can create a Higher-Order component wrapping your components that\nwill ensure the component is only created if the tab is visible as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PanelApi } from 'dockview';\nimport * as React from 'react';\n\nfunction RenderWhenVisible<\n    T extends { api: Pick<PanelApi, 'isVisible' | 'onDidVisibilityChange'> }\n>(component: React.FunctionComponent<T>) {\n    const HigherOrderComponent = (props: T) => {\n        const [visible, setVisible] = React.useState<boolean>(\n            props.api.isVisible\n        );\n\n        React.useEffect(() => {\n            const disposable = props.api.onDidVisibilityChange((event) =>\n                setVisible(event.isVisible)\n            );\n\n            return () => {\n                disposable.dispose();\n            };\n        }, [props.api]);\n\n        if (!visible) {\n            return null;\n        }\n\n        return React.createElement(component, props);\n    };\n    return HigherOrderComponent;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const component = RenderWhenVisible(MyComponent);\n")),(0,l.kt)("p",null,"Through toggling the checkbox you can see that when you only render those panels which are visible the underling React component is destroyed when it becomes hidden and re-created when it becomes visible."),(0,l.kt)(i.X,{mdxType:"Checkbox"}),(0,l.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,l.kt)(i.y,{renderVisibleOnly:!1,mdxType:"RenderingDockview"})),(0,l.kt)("h3",{id:"drag-and-drop"},"Drag And Drop"),(0,l.kt)("p",null,"The component exposes some method to help determine whether external drag events should be interacted with or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"/**\n * called when an ondrop event which does not originate from the dockview libray and\n * passes the showDndOverlay condition occurs\n **/\nconst onDidDrop = (event: DockviewDropEvent) => {\n    const { group } = event;\n\n    event.api.addPanel({\n        id: 'test',\n        component: 'default',\n        position: {\n            referencePanel: group.activePanel.id,\n            direction: 'within',\n        },\n    });\n};\n\n/**\n * called for drag over events which do not originate from the dockview library\n * allowing the developer to decide where the overlay should be shown for a\n * particular drag event\n **/\nconst showDndOverlay = (event: DockviewDndOverlayEvent) => {\n    return true;\n};\n\nreturn (\n    <DockviewReact\n        components={components}\n        onReady={onReady}\n        className=\"dockview-theme-abyss\"\n        onDidDrop={onDidDrop}\n        showDndOverlay={showDndOverlay}\n    />\n);\n")),(0,l.kt)(d.s,{mdxType:"DndDockview"}),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)(o.C,{mdxType:"EventsDockview"}))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=01664128.a95d6a1f.js.map