// Type definitions for @ag-grid-community/core v31.0.2
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "./context/beanStub";
export declare class LocaleService extends BeanStub {
    getLocaleTextFunc(): (key: string, defaultValue: string, variableValues?: string[]) => string;
}
