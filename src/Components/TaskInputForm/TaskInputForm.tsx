import { useState } from "react";
import * as S from "../TaskCard/TaskCard.styled";

type TaskInputFormType = {
    onSubmit?: (title: string) => void;
    onCancel?: () => void;
    onChange?: (title: string) => void;
};

export function TaskInputForm({ onSubmit, onCancel, onChange }: TaskInputFormType) {
    const [title, setTitle] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && title.trim() && onSubmit) {
            onSubmit(title);
        } else if (e.key === "Escape" && onCancel) {
            onCancel();
        }
    };

    return (
        <S.Card>
            <input
                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    onChange?.(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter task title..."
                autoFocus
            />
        </S.Card>
    );
}

export default TaskInputForm;
