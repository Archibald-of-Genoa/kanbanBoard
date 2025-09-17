export type Column = {
    id: string;
    title: string;
};

export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
};

export type ArrowProps = {
    $isOpen?: boolean;
    onClick?: () => void;
};

