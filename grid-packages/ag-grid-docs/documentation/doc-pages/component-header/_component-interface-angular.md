<framework-specific-section frameworks="angular">
<snippet transform={false}>
|interface IHeaderAngularComp {
|    // The agInit(params) method is called on the header component once.
|    // See below for details on the parameters.
|    agInit(params: IHeaderParams): void;
|
|    // Gets called when a new Column Definition has been set for this header.
|    // If you handle the refresh of your header return true otherwise return false
|    // and the grid will re-create your header from scratch.
|    refresh(params: IHeaderParams): boolean;
|}
</snippet>
</framework-specific-section>
