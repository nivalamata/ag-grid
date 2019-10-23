// Type definitions for @ag-community/grid-core v21.2.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IComponent } from "./iComponent";
import { IToolPanel } from "./iToolPanel";
export interface ISideBar extends IComponent<any> {
    refresh(): void;
    setDisplayed(show: boolean): void;
    setSideBarPosition(position?: 'left' | 'right'): void;
    isToolPanelShowing(): boolean;
    openToolPanel(key: string): void;
    getToolPanelInstance(key: string): IToolPanel | undefined;
    close(): void;
    reset(): void;
    openedItem(): string | null;
}
