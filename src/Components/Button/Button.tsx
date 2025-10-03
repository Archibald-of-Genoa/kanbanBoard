import type { ReactNode } from "react";

type ButtonType = {
    isDisabled: boolean;
    onClick: () => void;
    children: ReactNode;
    
};

export function Button({ isDisabled, children, onClick }: ButtonType) {
    return (
        <button disabled={isDisabled} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
