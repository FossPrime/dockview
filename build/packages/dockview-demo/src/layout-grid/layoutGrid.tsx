import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    IDockviewPanelProps,
    IGridviewPanelProps,
    TabContextMenuEvent,
    DockviewReadyEvent,
    DockviewReact,
    DockviewApi,
    IWatermarkPanelProps,
    IDockviewPanel,
    PanelCollection,
} from 'dockview';
import { CustomTab } from './customTab';
import { Settings } from './settingsPanel';
import { useLayoutRegistry } from './registry';
import { SplitPanel } from './splitPanel';
import './layoutGrid.scss';
import { WelcomePanel } from '../panels/welcome/welcome';
import { SplitviewPanel } from '../panels/splitview/splitview';
import { GridviewDemoPanel } from '../panels/gridview/gridview';
import { useRecoilCallback } from 'recoil';
import { selectedPanelAtom } from './footer';
import { ExampleFunctions } from './panels/exampleFunctions';
import { CompositeDisposable } from '../lifecycle';

const WatermarkComponent = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            Watermark component
        </div>
    );
};

const Test = (props: IDockviewPanelProps) => {
    const [counter, setCounter] = React.useState<number>(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCounter((_) => _ + 1);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div>{`custom body ${counter}`}</div>
            <button>Toggle</button>
        </div>
    );
};

const components: PanelCollection<IDockviewPanelProps> = {
    test: Test,
    welcome: WelcomePanel,
    splitview: SplitviewPanel,
    gridview: GridviewDemoPanel,
    inner_component: (props: IDockviewPanelProps) => {
        const _api = React.useRef<DockviewApi>();

        const onReady = (event: DockviewReadyEvent) => {
            _api.current = event.api;

            event.api.addPanel({
                component: 'test_component',
                id: 'inner-1',
                title: 'inner-1',
            });
            event.api.addPanel({
                component: 'test_component',
                id: 'inner-2',
                title: 'inner-2',
            });
            event.api.addPanel({
                component: 'test_component',
                id: nextGuid(),
                title: 'inner-3',
                position: {
                    direction: 'within',
                    referencePanel: 'inner-1',
                },
            });
            event.api.addPanel({
                component: 'test_component',
                id: nextGuid(),
                title: 'inner-4',
                position: {
                    direction: 'within',
                    referencePanel: 'inner-2',
                },
            });
        };

        return (
            <div
                style={{
                    boxSizing: 'border-box',
                    // borderTop: "1px solid var(--dv-separator-border)",
                }}
            >
                <DockviewReact
                    onReady={onReady}
                    components={components}
                    watermarkComponent={WatermarkComponent}
                    tabHeight={20}
                />
            </div>
        );
    },
    test_component: ExampleFunctions,
    settings: Settings,
    split_panel: SplitPanel,
};

const tabComponents = {
    default: CustomTab,
};

export const nextGuid = (() => {
    let counter = 0;
    return () => 'panel_' + (counter++).toString();
})();

export const TestGrid = (props: IGridviewPanelProps) => {
    const [api, setApi] = React.useState<DockviewApi>();
    const registry = useLayoutRegistry();

    const onReady = (event: DockviewReadyEvent) => {
        const api = event.api;
        setApi(api);
        registry.register('dockview', api);
    };

    const setSelectedPanel = useRecoilCallback(
        ({ set }) =>
            (value: string) =>
                set(selectedPanelAtom, value),
        []
    );

    React.useEffect(() => {
        if (!api) {
            return () => {
                //
            };
        }
        props.api.setConstraints({
            minimumWidth: () => api.minimumWidth,
            minimumHeight: () => api.minimumHeight,
        });

        const disposable = new CompositeDisposable(
            api.onDidLayoutChange(() => {
                const state = api.toJSON();
                localStorage.setItem('dockview', JSON.stringify(state));
            }),
            api.onDidActivePanelChange((e) => {
                setSelectedPanel(e?.id || '');
            })
        );

        const state = localStorage.getItem('dockview');
        let success = false;
        if (state) {
            try {
                api.fromJSON(JSON.parse(state));
                success = true;
            } catch (err) {
                console.error('failed to load layout', err);
            }
        }

        const welcomePanel = api.getPanel('welcome');

        if (!welcomePanel) {
            api.addPanel({
                component: 'welcome',
                id: 'welcome',
                title: 'Welcome',
                suppressClosable: true,
            });
        }

        return () => {
            disposable.dispose();
        };
    }, [api]);

    const [coord, setCoord] =
        React.useState<{
            x: number;
            y: number;
            panel: IDockviewPanel;
        }>(undefined);

    const onTabContextMenu = React.useMemo(
        () => (event: TabContextMenuEvent) => {
            event.event.preventDefault();
            console.log(event.panel);
            const cb = (event: MouseEvent) => {
                let element: HTMLElement = event.target as HTMLElement;

                while (element) {
                    if (element.classList.contains('context-menu')) {
                        return;
                    }
                    element = element.parentElement;
                }

                window.removeEventListener('mousedown', cb);
                setCoord(undefined);
            };
            window.addEventListener('mousedown', cb);
            setCoord({
                x: event.event.clientX,
                y: event.event.clientY,
                panel: event.panel,
            });
        },
        []
    );

    const onClose = () => {
        setCoord(undefined);
        coord.panel.api.close();
    };

    const onChangeName = () => {
        setCoord(undefined);
        coord.panel.api.setTitle('This looks new?');
    };

    return (
        <>
            {coord &&
                ReactDOM.createPortal(
                    <div
                        className="context-menu"
                        style={{
                            left: `${coord.x}px`,
                            top: `${coord.y}px`,
                        }}
                    >
                        <div className="context-action" onClick={onClose}>
                            Close
                        </div>
                        <div className="context-action" onClick={onChangeName}>
                            Rename
                        </div>
                    </div>,
                    document.getElementById('anchor')
                )}
            <DockviewReact
                onReady={onReady}
                components={components}
                tabComponents={tabComponents}
                onTabContextMenu={onTabContextMenu}
                watermarkComponent={Watermark}
                showDndOverlay={(ev) => {
                    return true;
                }}
                onDidDrop={(ev) => {
                    console.log('onDidDrop', ev);
                }}
            />
        </>
    );
};

const Watermark = (props: IWatermarkPanelProps) => {
    const [groups, setGroups] = React.useState<number>(props.containerApi.size);
    React.useEffect(() => {
        const disposable = new CompositeDisposable(
            props.containerApi.onDidLayoutChange(() => {
                console.log(`groups2 ${props.containerApi.size}`);
                setGroups(props.containerApi.size);
            })
        );

        return () => {
            disposable.dispose();
        };
    }, []);

    const onClick = () => {
        props.close();
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexGrow: 1,
                height: '100%',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    height: '35px',
                    display: 'flex',
                    width: '100%',
                }}
            >
                <span style={{ flexGrow: 1 }} />
                {groups > 1 && (
                    <span
                        onClick={onClick}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <a className="close-action"></a>
                    </span>
                )}
            </div>
            <div
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <span>Watermark component</span>
            </div>
        </div>
    );
};
