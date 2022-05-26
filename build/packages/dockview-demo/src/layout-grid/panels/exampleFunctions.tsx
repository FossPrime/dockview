import { IDockviewPanelProps } from 'dockview';
import * as React from 'react';
import { CompositeDisposable } from '../../lifecycle';
import './exampleFunctions.scss';

export const ExampleFunctions = (
    props: IDockviewPanelProps & { [key: string]: any }
) => {
    const [panelState, setPanelState] = React.useState<{
        isGroupActive: boolean;
        isPanelVisible: boolean;
    }>({
        isGroupActive: props.api.isActive,
        isPanelVisible: props.api.isVisible,
    });
    const [panelName, setPanelName] = React.useState<string>();
    const input = React.useRef<HTMLInputElement>();

    React.useEffect(() => {
        const disposable = new CompositeDisposable(
            props.api.onDidActiveChange((event) => {
                setPanelState((_) => ({
                    ..._,
                    isGroupActive: event.isActive,
                }));
            }),
            props.api.onDidVisibilityChange((x) => {
                setPanelState((_) => ({
                    ..._,
                    isPanelVisible: x.isVisible,
                }));
            }),
            props.api.onDidFocusChange(({ isFocused }) => {
                if (isFocused) {
                    input.current.focus();
                }
            })
        );

        return () => {
            disposable.dispose();
        };
    }, []);

    const onRename = () => {
        props.api.setTitle(panelName);
    };

    const onClose = () => {
        props.api.close();
    };

    return (
        <div className="example-functions-panel">
            <div className="example-functions-panel-header-bar">
                <span style={{ padding: '0px 8px' }}>
                    <span>{'isGroupActive: '}</span>
                    <span
                        style={{
                            color: panelState.isGroupActive
                                ? '#23d16f'
                                : '#cd312b',
                        }}
                    >
                        {`${panelState.isGroupActive}`}
                    </span>
                </span>
                <span style={{ padding: '0px 8px' }}>
                    <span>{'isPanelVisible: '}</span>
                    <span
                        style={{
                            color: panelState.isPanelVisible
                                ? '#23d16f'
                                : '#cd312b',
                        }}
                    >
                        {`${panelState.isPanelVisible}`}
                    </span>
                </span>
            </div>
            <div className="example-functions-panel-section">
                <input
                    value={panelName}
                    placeholder="New Panel Name"
                    type="text"
                    onChange={(event) => setPanelName(event.target.value)}
                />
                <button onClick={onRename}>Rename</button>
            </div>

            <input
                style={{ width: '175px' }}
                ref={input}
                placeholder="This is focused by the panel"
            />
            <input
                style={{ width: '175px' }}
                placeholder="This is also focusable"
            />
        </div>
    );
};
