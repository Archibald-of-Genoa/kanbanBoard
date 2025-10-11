import { Arrow } from "../Arrow/Arrow";
import * as S from "./DropDown.styled";

type BacklogCardsType = {
    isOpen: boolean;
    onClick: () => void;
};

export function DropDown({ isOpen, onClick }: BacklogCardsType) {
    return (
        <S.DropDown>

            <Arrow fill="black" $isOpen={isOpen} onClick={onClick} />
        </S.DropDown>
    );
}

export default DropDown;
