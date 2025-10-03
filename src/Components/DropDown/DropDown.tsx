import type { Task } from "../../types";
import * as S from "./DropDown.styled";

type BacklogCardsType = {
    backlogCards: Task[];
};

export function DropDown({ backlogCards }: BacklogCardsType) {
    return (
        <S.DropDown>
            <S.DropDownList>
                {backlogCards.map((card) => (
                    <div>{card.title}</div>
                ))}
            </S.DropDownList>
        </S.DropDown>
    );
}

export default DropDown;
