import type CardEffect from "game/effects/CardEffect";
import CardType from "game/enums/CardType";
import type TriggerType from "game/enums/TriggerType";

abstract class Card {
    name: string;
    desc: string;
    type: CardType;
    effects: CardEffect[];

    constructor(name: string, desc: string, type: CardType, effects: CardEffect[]) {
        this.name = name;
        this.desc = desc;
        this.type = type;
        this.effects = effects;
    }
}

export default Card;