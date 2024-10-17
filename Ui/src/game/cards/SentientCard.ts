import type CardType from "game/enums/CardType";
import Card from "./Card";
import type TriggerType from "game/enums/TriggerType";
import CardEffect from "game/effects/CardEffect";

class SentientCard extends Card {
    power: number;
    health: number;

    constructor(name: string, desc: string, type: CardType, effects: CardEffect[], power: number, health: number) {
        super(name, desc, type, effects);
        this.power = power;
        this.health = health;
    }
}

export default SentientCard;