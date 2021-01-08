import * as React from 'react';

interface Props {
    children: React.ReactNode;
    className: string
}

const HeaderButton = React.forwardRef<HTMLAnchorElement, Props>(({ children, className, ...props}, ref) => {
    return (
            <button className={className} {...props}>
                {children}
            </button>
    )
})

export default HeaderButton;