// @ag-grid-community/react v31.0.2
import { CustomComponentWrapper } from "./customComponentWrapper.mjs";
export class StatusPanelComponentWrapper extends CustomComponentWrapper {
    refresh(params) {
        this.sourceParams = params;
        this.refreshProps();
        return true;
    }
}
