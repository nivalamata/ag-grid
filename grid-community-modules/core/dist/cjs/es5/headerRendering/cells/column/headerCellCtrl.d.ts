// Type definitions for @ag-grid-community/core v31.0.2
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { UserCompDetails } from "../../../components/framework/userComponentFactory";
import { Column } from "../../../entities/column";
import { ColumnSortState } from "../../../utils/aria";
import { HeaderRowCtrl } from "../../row/headerRowCtrl";
import { AbstractHeaderCellCtrl, IAbstractHeaderCellComp } from "../abstractCell/abstractHeaderCellCtrl";
import { IHeader, IHeaderParams } from "./headerComp";
import { ResizeFeature } from "./resizeFeature";
import { HorizontalDirection } from "../../../constants/direction";
export interface IHeaderCellComp extends IAbstractHeaderCellComp {
    setWidth(width: string): void;
    setAriaDescription(description?: string): void;
    setAriaSort(sort?: ColumnSortState): void;
    setUserCompDetails(compDetails: UserCompDetails): void;
    getUserCompInstance(): IHeader | undefined;
}
declare type HeaderAriaDescriptionKey = 'filter' | 'menu' | 'sort' | 'selectAll';
export declare class HeaderCellCtrl extends AbstractHeaderCellCtrl<IHeaderCellComp, Column, ResizeFeature> {
    private readonly columnModel;
    private pinnedWidthService;
    private readonly columnHoverService;
    private readonly sortController;
    private readonly menuFactory;
    private readonly resizeObserverService;
    private readonly gridApi;
    private refreshFunctions;
    private selectAllFeature;
    private sortable;
    private displayName;
    private draggable;
    private menuEnabled;
    private dragSourceElement;
    private userCompDetails;
    private userHeaderClasses;
    private ariaDescriptionProperties;
    constructor(column: Column, parentRowCtrl: HeaderRowCtrl);
    setComp(comp: IHeaderCellComp, eGui: HTMLElement, eResize: HTMLElement, eHeaderCompWrapper: HTMLElement): void;
    protected resizeHeader(direction: HorizontalDirection, shiftKey: boolean): void;
    protected moveHeader(hDirection: HorizontalDirection): void;
    private setupUserComp;
    private setCompDetails;
    private lookupUserCompDetails;
    private createParams;
    private setupSelectAll;
    getSelectAllGui(): HTMLElement;
    protected handleKeyDown(e: KeyboardEvent): void;
    private onEnterKeyDown;
    isMenuEnabled(): boolean;
    private onFocusIn;
    private onFocusOut;
    private setupTooltip;
    private setupClassesFromColDef;
    setDragSource(eSource: HTMLElement | undefined): void;
    private createDragItem;
    private updateState;
    addRefreshFunction(func: () => void): void;
    private refresh;
    private refreshHeaderComp;
    attemptHeaderCompRefresh(params: IHeaderParams): boolean;
    private calculateDisplayName;
    private checkDisplayName;
    private workOutDraggable;
    private onColumnRowGroupChanged;
    private onColumnPivotChanged;
    private onColumnValueChanged;
    private setupWidth;
    private setupMovingCss;
    private setupMenuClass;
    private setupSortableClass;
    private setupFilterClass;
    private setupWrapTextClass;
    protected onDisplayedColumnsChanged(): void;
    private onHeaderHeightChanged;
    private refreshSpanHeaderHeight;
    private getColumnGroupPaddingInfo;
    private setupAutoHeight;
    private refreshAriaSort;
    private refreshAriaMenu;
    private refreshAriaFiltered;
    setAriaDescriptionProperty(property: HeaderAriaDescriptionKey, value: string | null): void;
    refreshAriaDescription(): void;
    private refreshAria;
    private addColumnHoverListener;
    getColId(): string;
    private addActiveHeaderMouseListeners;
    private handleMouseOverChange;
    private handleColumnClick;
    private setActiveHeader;
    protected destroy(): void;
}
export {};
