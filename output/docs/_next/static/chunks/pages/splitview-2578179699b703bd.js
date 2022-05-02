(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{6432:function(e,n,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/splitview",function(){return d(7918)}])},6985:function(e,n,d){"use strict";d.d(n,{B:function(){return r}});var i=d(2322),s=d(1920),t={default:function(e){return(0,i.jsx)("div",{style:{padding:"20px"},children:e.params.title})}},r=function(e){return(0,i.jsx)(s.TU,{components:t,proportionalLayout:e.proportional,onReady:function(e){e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},minimumSize:100}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},minimumSize:100}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},minimumSize:100})},orientation:s.i5.HORIZONTAL,className:"dockview-theme-dark"})}},7918:function(e,n,d){"use strict";d.r(n);var i=d(2322),s=d(5392),t=d(6985);n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({h1:"h1",a:"a",span:"span",pre:"pre",code:"code",h2:"h2",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"splitview",children:["Splitview",(0,i.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#splitview",children:(0,i.jsx)(n.span,{className:"icon icon-link"})})]}),"\n",(0,i.jsx)("div",{style:{height:"100px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"},children:(0,i.jsx)(t.B,{})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import {\n    ISplitviewPanelProps,\n    Orientation,\n    SplitviewReact,\n    SplitviewReadyEvent,\n} from 'dockview';\n\nconst components = {\n    default: (props: ISplitviewPanelProps<{ title: string }>) => {\n        return <div style={{ padding: '20px' }}>{props.params.title}</div>;\n    },\n};\n\nexport const SimpleSplitview = () => {\n    const onReady = (event: SplitviewReadyEvent) => {\n        event.api.addPanel({\n            id: 'panel_1',\n            component: 'default',\n            params: {\n                title: 'Panel 1',\n            },\n        });\n\n        event.api.addPanel({\n            id: 'panel_2',\n            component: 'default',\n            params: {\n                title: 'Panel 2',\n            },\n        });\n\n        event.api.addPanel({\n            id: 'panel_3',\n            component: 'default',\n            params: {\n                title: 'Panel 3',\n            },\n        });\n    };\n\n    return (\n        <SplitviewReact\n            components={components}\n            onReady={onReady}\n            orientation={Orientation.HORIZONTAL}\n            className=\"dockview-theme-dark\"\n        />\n    );\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"component-props",children:["Component Props",(0,i.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#component-props",children:(0,i.jsx)(n.span,{className:"icon icon-link"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { ReactSplitview } from 'dockview';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onReady"})," prop you will you access to the component ",(0,i.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onReady"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(event: SplitviewReadyEvent) => void"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"components"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Record<string, ISplitviewPanelProps>"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Panel renderers"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"orientation"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Orientation"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Orientation.HORIZONTAL"})}),(0,i.jsx)(n.td,{children:"Orientation of the Splitview"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"proportionalLayout"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.a,{href:"/basics/#proportional-layout",children:"Proportional layout"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hideBorders"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Hide the borders between panels"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"className"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"''"})}),(0,i.jsx)(n.td,{children:"Attaches a classname"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disableAutoResizing"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.a,{href:"/basics/#auto-resizing",children:"Auto resizing"})]})]})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"splitview-api",children:["Splitview API",(0,i.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#splitview-api",children:(0,i.jsx)(n.span,{className:"icon icon-link"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const MyComponent = (props: ISplitviewPanelProps<{ title: string }>) => {\n    // props.containerApi...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const onReady = (event: SplitviewReadyEvent) => {\n    // event.api...\n};\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"Component pixel height"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"width"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"Component pixel width"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minimumSize"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maximumSize"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"length"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"Number of panels"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"panels"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ISplitviewPanel[]"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidLayoutChange"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<void>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidLayoutFromJSON"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<void>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidAddView"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<IView>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidRemoveView"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<IView>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"addPanel"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"addPanel(options: AddSplitviewComponentOptions): ISplitviewPanel"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"removePanel"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(panel: ISplitviewPanel, sizing?: Sizing): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"getPanel"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(id:string): ISplitviewPanel | undefined"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"movePanel"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(from: number, to: number): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"setVisible"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(panel: ISplitviewPanel, isVisible: boolean): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"setActive"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(panel: ISplitviewPanel): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"updateOptions"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(options:SplitviewComponentUpdateOptions): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"focus"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"layout"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(width: number, height:number): void"})}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.a,{href:"/basics/#auto-resizing",children:"Auto resizing"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"resizeToFit"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(): void"})}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.a,{href:"/basics/#auto-resizing",children:"Auto resizing"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromJSON"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(data: SerializedSplitview): void"})}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.a,{href:"/basics/#serialization",children:"Serialization"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"toJSON"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(): SerializedSplitview"})}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.a,{href:"/basics/#serialization",children:"Serialization"})]})]})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"splitview-panel-api",children:["Splitview Panel API",(0,i.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#splitview-panel-api",children:(0,i.jsx)(n.span,{className:"icon icon-link"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const MyComponent = (props: ISplitviewPanelProps<{ title: string }>) => {\n    // props.api...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Panel id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isFocused"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Is panel focsed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isActive"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Is panel active"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isVisible"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Is panel visible"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"width"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"Panel width"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"Panel height"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidDimensionsChange"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<PanelDimensionChangeEvent>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidFocusChange"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<FocusEvent>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidVisibilityChange"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<VisibilityEvent>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidActiveChange"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<ActiveEvent>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onFocusEvent"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event<void>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onDidConstraintsChange"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onDidConstraintsChange: Event<PanelConstraintChangeEvent>"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"setVisible"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(isVisible: boolean): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"setActive"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(): void"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"setConstraints"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(value: PanelConstraintChangeEvent2): void;"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"setSize"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(event: PanelSizeEvent): void"})}),(0,i.jsx)(n.td,{})]})]})]})]})},d=Object.assign({},(0,s.ah)(),e.components),r=d.wrapper;return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(n,{})})):n()}}},function(e){e.O(0,[774,888,179],(function(){return n=6432,e(e.s=n);var n}));var n=e.O();_N_E=n}]);