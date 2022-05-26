import { IDockviewPanelProps } from 'dockview';
import * as React from 'react';
import './welcome.scss';

export const WelcomePanel = (props: IDockviewPanelProps) => {
    const onAddSplitview = (event: React.MouseEvent<HTMLDivElement>) => {
        const splitviewPanel = props.containerApi.getPanel('splitview');
        if (splitviewPanel) {
            splitviewPanel.api.setActive();
            return;
        }

        props.containerApi.addPanel({
            id: 'splitview',
            component: 'splitview',
            title: 'Splitview Docs',
        });
    };

    const onAddGridview = (event: React.MouseEvent<HTMLDivElement>) => {
        const splitviewPanel = props.containerApi.getPanel('gridview');
        if (splitviewPanel) {
            splitviewPanel.api.setActive();
            return;
        }

        props.containerApi.addPanel({
            id: 'gridview',
            component: 'gridview',
            title: 'Gridview Docs',
        });
    };

    return (
        <div className="welcome-panel">
            <div className="welcome-header">
                <h1>Dockview</h1>
                <h2>Zero dependency layout manager</h2>
            </div>
            <div className="directory">
                <div className="directory-title">Components</div>
                <div className="directory-item">Dockview</div>
                <div onClick={onAddSplitview} className="directory-item">
                    Splitview
                </div>
                <div onClick={onAddGridview} className="directory-item">
                    Gridview
                </div>
                <div className="directory-item">Paneview</div>
            </div>
        </div>
    );
};
