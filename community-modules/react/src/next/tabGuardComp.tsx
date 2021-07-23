import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle, RefForwardingComponent } from 'react';

import {
    Context, TabGuardCtrl, ITabGuard, GridCtrl
} from '@ag-grid-community/core';

export interface TabGuardCompCallback {
    forceFocusOutOfContainer(): void;
}

interface TabGuardProps {
    children: React.ReactNode,
    context: Context
    eFocusableElement: HTMLDivElement,
    onTabKeyDown: (e: KeyboardEvent) => void,
    gridCtrl: GridCtrl,
}

const TabGuardCompRef: RefForwardingComponent<TabGuardCompCallback, TabGuardProps> = (props, forwardRef) => {
    const { children, context, eFocusableElement, onTabKeyDown, gridCtrl } = props;
    const topTabGuardRef = useRef<HTMLDivElement>(null);
    const bottomTabGuardRef = useRef<HTMLDivElement>(null);
    const tabGuardCtrlRef = useRef<TabGuardCtrl>();
    const [tabIndex, setTabIndex] = useState<number>();

    useImperativeHandle(forwardRef, () => ({
        forceFocusOutOfContainer() {
            tabGuardCtrlRef.current!.forceFocusOutOfContainer();
        }
    }));

    useEffect(() => {
        console.log('init tabGuard');
        const eTopGuard = topTabGuardRef.current!;
        const eBottomGuard = bottomTabGuardRef.current!;

        const compProxy: ITabGuard = {
            setTabIndex: value => value == null ? setTabIndex(undefined) : setTabIndex(parseInt(value, 10))
        }

        const ctrl = tabGuardCtrlRef.current = context.createBean(new TabGuardCtrl({
            comp: compProxy,
            eTopGuard: eTopGuard,
            eBottomGuard: eBottomGuard,
            eFocusableElement: eFocusableElement,
            
            onTabKeyDown: onTabKeyDown,
            focusInnerElement: fromBottom => gridCtrl.focusInnerElement(fromBottom)
        }));

        return () => {
            context.destroyBean(ctrl);
        };

    }, []);

    const createTabGuard = (side: 'top' | 'bottom') => (
        <div 
            className={ `ag-tab-guard ag-tab-guard-${side}` }
            role="presentation"
            tabIndex={ tabIndex }
            ref={ side === 'top' ? topTabGuardRef : bottomTabGuardRef }
        ></div>
    )
    return (
        <>
            {createTabGuard('top')}
            { children }
            {createTabGuard('bottom')}
        </>
    )
};

const TabGuardComp = forwardRef(TabGuardCompRef);

export default TabGuardComp;