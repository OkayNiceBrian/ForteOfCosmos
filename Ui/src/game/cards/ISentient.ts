import type CardType from "game/enums/CardType";

export interface ISentient {
    name: string;
    desc: string;
    type:CardType;
    effects: [];
    power: number;
    health: number;
};