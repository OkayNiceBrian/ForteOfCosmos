import CardType from "game/enums/CardType";
import type Card from "./Card";
import SentientCard from "./SentientCard";

const CardFactory = (card: any): Card => {
    switch(card.type) {
        case CardType.Sentient: return new SentientCard(card.name, card.desc, card.type, card.effects, card.power, card.health);
        default: return new SentientCard(card.name, card.desc, card.type, card.effects, card.power, card.health);
    }
}