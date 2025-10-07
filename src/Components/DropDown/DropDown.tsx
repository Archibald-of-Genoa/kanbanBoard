import type { Task } from "../../types";
import { Arrow } from "../Arrow/Arrow";
import * as S from "./DropDown.styled";

type BacklogCardsType = {
    backlogCards: Task[];
    isOpen: boolean;
    onClick: () => void;
};

export function DropDown({ backlogCards, isOpen, onClick }: BacklogCardsType) {
    return (
        <S.DropDown>
            {/* <S.DropDownList>
                {backlogCards.map((card) => (
                    <div key={Math.random().toString(36)}>{card.title}</div>
                ))}
            </S.DropDownList> */}
            <Arrow fill="black" $isOpen={isOpen} onClick={onClick} />
        </S.DropDown>
    );
}

export default DropDown;
