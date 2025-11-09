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

export type ButtonProps = {
    $isOpen?: boolean;
    fill?: string;
    onClick?: () => void;
};

export type BoardContextType = {
    tasks: Task[];
    onBack: () => void;
    onUpdateTask: (taskId: string, updates: Partial<Task>) => void
  };
