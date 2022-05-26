import {
    DockviewApi,
    DockviewReact,
    DockviewReadyEvent,
    IDockviewPanelProps,
    PanelCollection,
} from 'dockview';
import * as React from 'react';
import { Meta } from '@storybook/react';

const components: PanelCollection<IDockviewPanelProps> = {
    default: (props) => {
        return (
            <div style={{ padding: '10px', height: '100%' }}>
                This content is not within an IFrame
            </div>
        );
    },
    iframe: (props) => {
        return (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        height: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0px 4px',
                    }}
                >
                    The contents below is within an iFrame
                </div>
                <iframe
                    src="./"
                    style={{
                        flexGrow: 1,
                        boxSizing: 'border-box',
                        border: '1px solid red',
                        width: '100%',
                    }}
                />
            </div>
        );
    },
};

export const Iframe = (props: {
    theme: string;
    hideBorders: boolean;
    disableAutoResizing: boolean;
}) => {
    const api = React.useRef<DockviewApi>();

    const onReady = (event: DockviewReadyEvent) => {
        api.current = event.api;

        event.api.addPanel({
            id: 'panel1',
            title: 'Standard Panel',
            component: 'default',
        });
        event.api.addPanel({
            id: 'panel2',
            title: 'IFrame Panel',
            component: 'iframe',
        });
    };

    return (
        <DockviewReact
            className={props.theme}
            onReady={onReady}
            components={components}
            hideBorders={props.hideBorders}
            disableAutoResizing={props.disableAutoResizing}
        />
    );
};

export default {
    title: 'Library/Dockview/Iframe',
    component: Iframe,
    decorators: [
        (Component) => {
            document.body.style.padding = '0px';
            return (
                <div style={{ height: '100vh', fontFamily: 'Arial' }}>
                    <Component />
                </div>
            );
        },
    ],
    args: { theme: 'dockview-theme-light' },
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['dockview-theme-dark', 'dockview-theme-light'],
            },
        },
    },
} as Meta;
