import React, { useEffect, forwardRef } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    indeterminate?: boolean;
    disabled?: boolean;
}

const useCombinedRefs = (...refs: any): React.MutableRefObject<any> => {
    const targetRef = React.useRef();
    React.useEffect(() => {
        refs.forEach((ref: any) => {
            if (!ref) return;

            if (typeof ref === 'function') {
                ref(targetRef.current);
            } else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);

    return targetRef;
};

export const IndeterminateCheckbox = forwardRef<HTMLInputElement, Props>(
    ({ indeterminate, disabled, ...rest }, ref: React.Ref<HTMLInputElement>) => {
        const defaultRef = React.useRef(null);
        const combinedRef = useCombinedRefs(ref, defaultRef);

        useEffect(() => {
            if (combinedRef?.current) {
                combinedRef.current.indeterminate = indeterminate ?? false;
            }
        }, [combinedRef, indeterminate]);

        return (
            <React.Fragment>
                <Checkbox color="primary" disabled={disabled} ref={combinedRef} {...rest} />
            </React.Fragment>
        );
    }
);
