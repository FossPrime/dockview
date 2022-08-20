"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[4173],{5567:(e,n,a)=>{a.d(n,{b:()=>l});var t=a(662),o=a(2784);const i={default:e=>o.createElement("div",{style:{padding:"20px"}},e.params.title)},l=()=>o.createElement(t.tu,{components:i,onReady:e=>{const n=e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}});n.group.locked=!0,n.group.header.hidden=!0,e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}});e.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}});e.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"}}),e.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"}})},className:"dockview-theme-abyss"})},645:(e,n,a)=>{a.d(n,{X:()=>l});var t=a(662),o=a(2784);const i={default:e=>o.createElement("div",{style:{padding:"20px"}},e.params.title)},l=()=>o.createElement(t.$R,{components:i,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),e.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),e.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),e.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),e.api.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})},proportionalLayout:!1,orientation:t.i5.VERTICAL,className:"dockview-theme-abyss"})},5197:(e,n,a)=>{a.d(n,{p:()=>p});var t=a(662),o=a(2784);const i={default:e=>o.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},e.params.title)},l={myHeaderComponent:e=>{const[n,a]=o.useState(e.api.isExpanded);o.useEffect((()=>{const n=e.api.onDidExpansionChange((e=>{a(e.isExpanded)}));return()=>{n.dispose()}}),[]);return o.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},o.createElement("a",{onClick:()=>{e.api.setExpanded(!n)},className:n?"expanded":"collapsed"}),o.createElement("span",null,e.params.title))}},p=()=>o.createElement(t.Vm,{components:i,headerComponents:l,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},title:"Panel 1"}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},title:"Panel 2"}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},title:"Panel 3"})},className:"dockview-theme-abyss"})},1029:(e,n,a)=>{a.d(n,{B:()=>l});var t=a(662),o=a(2784);const i={default:e=>o.createElement("div",{style:{padding:"20px"}},e.params.title)},l=e=>o.createElement(t.TU,{components:i,proportionalLayout:e.proportional,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},minimumSize:100}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},minimumSize:100}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},minimumSize:100})},orientation:t.i5.HORIZONTAL,className:"dockview-theme-abyss"})},1363:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>P,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=a(7896),o=(a(2784),a(876)),i=a(1029),l=a(645),p=a(5197),d=a(5567);const r={sidebar_position:0,description:"A zero dependency layout manager built for React"},s="Introduction",c={unversionedId:"index",id:"index",title:"Introduction",description:"A zero dependency layout manager built for React",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"A zero dependency layout manager built for React"},sidebar:"tutorialSidebar",next:{title:"Basics",permalink:"/docs/next/basics"}},m={},u=[{value:"Features",id:"features",level:2},{value:"Quick start",id:"quick-start",level:2}],k={toc:u};function P(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dockview")," is a zero dependency layout manager that supports tab, grids and splitviews."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Themable and customizable"),(0,o.kt)("li",{parentName:"ul"},"Support for the serialization and deserialization of layouts"),(0,o.kt)("li",{parentName:"ul"},"Drag and drop support")),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dockview")," has a peer dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"react >= 16.8.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"react-dom >= 16.8.0"),". To install ",(0,o.kt)("inlineCode",{parentName:"p"},"dockview")," you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install dockview\n")),(0,o.kt)("p",null,"You must also import the dockview stylesheet found under ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/browse/dockview@latest/dist/styles/dockview.css"},(0,o.kt)("inlineCode",{parentName:"a"},"dockview/dict/styles/dockview.css")),",\ndepending on your solution this might be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@import './node_modules/dockview/dist/styles/dockview.css';\n")),(0,o.kt)("p",null,"A dark and light theme are provided, one of these classes (or a custom theme) must be attached at any point above your components in the HTML tree. To cover the entire web page you might attach the class to the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body classname="dockview-theme-abyss">\n    ...\n</body>\n<body classname="dockview-theme-light">\n    ...\n</body>\n')),(0,o.kt)("p",null,"There are 4 components you may want to use:"),(0,o.kt)("p",null,"Splitview"),(0,o.kt)("div",{style:{height:"100px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,o.kt)(i.B,{mdxType:"SimpleSplitview"})),(0,o.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,o.kt)(l.X,{mdxType:"SimpleGridview"})),(0,o.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,o.kt)(p.p,{mdxType:"SimplePaneview"})),(0,o.kt)("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,o.kt)(d.b,{mdxType:"SimpleDockview"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n    DockviewReact,\n    DockviewReadyEvent,\n    PanelCollection,\n    IDockviewPanelProps,\n    IDockviewPanelHeaderProps,\n} from 'dockview';\n\nconst components: PanelCollection<IDockviewPanelProps> = {\n    default: (props: IDockviewPanelProps<{ someProps: string }>) => {\n        return <div>{props.params.someProps}</div>;\n    },\n};\n\nconst headers: PanelCollection<IDockviewPanelHeaderProps> = {\n    customTab: (props: IDockviewPanelHeaderProps) => {\n        return (\n            <div>\n                <span>{props.api.title}</span>\n                <span onClick={() => props.api.close()}>{'[x]'}</span>\n            </div>\n        );\n    },\n};\n\nconst Component = () => {\n    const onReady = (event: DockviewReadyEvent) => {\n        event.api.addPanel({\n            id: 'panel1',\n            component: 'default',\n            tabComponent: 'customTab', // optional custom header\n            params: {\n                someProps: 'Hello',\n            },\n        });\n        event.api.addPanel({\n            id: 'panel2',\n            component: 'default',\n            params: {\n                someProps: 'World',\n            },\n            position: { referencePanel: 'panel1', direction: 'below' },\n        });\n    };\n\n    return (\n        <DockviewReact\n            components={components}\n            tabComponents={headers} // optional headers renderer\n            onReady={onReady}\n        />\n    );\n};\n")))}P.isMDXComponent=!0}}]);
//# sourceMappingURL=4edc808e.d07a370b.js.map