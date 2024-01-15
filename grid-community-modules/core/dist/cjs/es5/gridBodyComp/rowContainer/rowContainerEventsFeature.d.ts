// Type definitions for @ag-grid-community/core v31.0.2
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../../context/beanStub";
export declare class RowContainerEventsFeature extends BeanStub {
    private mouseEventService;
    private valueService;
    private contextMenuFactory;
    private ctrlsService;
    private navigationService;
    private focusService;
    private undoRedoService;
    private columnModel;
    private paginationProxy;
    private pinnedRowModel;
    private rangeService;
    private clipboardService;
    private element;
    constructor(element: HTMLElement);
    postConstruct(): void;
    private addKeyboardListeners;
    private addMouseListeners;
    private processMouseEvent;
    private mockContextMenuForIPad;
    private getRowForEvent;
    private handleContextMenuMouseEvent;
    private getControlsForEventTarget;
    private processKeyboardEvent;
    private processCellKeyboardEvent;
    private processFullWidthRowKeyboardEvent;
    private doGridOperations;
    private onCtrlAndA;
    private onCtrlAndC;
    private onCtrlAndX;
    private onCtrlAndV;
    private onCtrlAndD;
    private onCtrlAndZ;
    private onCtrlAndY;
}
