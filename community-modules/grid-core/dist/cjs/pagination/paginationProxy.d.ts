// Type definitions for @ag-community/grid-core v21.2.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../context/beanStub";
import { RowBounds } from "../interfaces/iRowModel";
import { RowNode } from "../entities/rowNode";
export declare class PaginationProxy extends BeanStub {
    private rowModel;
    private eventService;
    private gridOptionsWrapper;
    private selectionController;
    private columnApi;
    private gridApi;
    private active;
    private paginateChildRows;
    private pageSize;
    private totalPages;
    private currentPage;
    private topDisplayedRowIndex;
    private bottomDisplayedRowIndex;
    private pixelOffset;
    private topRowBounds;
    private bottomRowBounds;
    private masterRowCount;
    private postConstruct;
    ensureRowHeightsValid(startPixel: number, endPixel: number, startLimitIndex: number, endLimitIndex: number): boolean;
    private onModelUpdated;
    goToPage(page: number): void;
    getPixelOffset(): number;
    getRow(index: number): RowNode | null;
    getRowNode(id: string): RowNode | null;
    getRowIndexAtPixel(pixel: number): number;
    getCurrentPageHeight(): number;
    isRowPresent(rowNode: RowNode): boolean;
    isEmpty(): boolean;
    isRowsToRender(): boolean;
    getNodesInRangeForSelection(firstInRange: RowNode, lastInRange: RowNode): RowNode[];
    forEachNode(callback: (rowNode: RowNode, index: number) => void): void;
    getType(): string;
    getRowBounds(index: number): RowBounds;
    getPageFirstRow(): number;
    getPageLastRow(): number;
    getRowCount(): number;
    goToPageWithIndex(index: any): void;
    isLastPageFound(): boolean;
    getCurrentPage(): number;
    goToNextPage(): void;
    goToPreviousPage(): void;
    goToFirstPage(): void;
    goToLastPage(): void;
    getPageSize(): number;
    getTotalPages(): number;
    private setPageSize;
    private calculatePages;
    private setZeroRows;
    private calculatePagesMasterRowsOnly;
    getMasterRowCount(): number;
    private calculatePagesAllRows;
    private calculatedPagesNotActive;
}
