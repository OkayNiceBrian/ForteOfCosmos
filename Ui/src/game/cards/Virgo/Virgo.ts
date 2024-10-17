import CardType from "game/enums/CardType";
import type { ISentient } from "../ISentient";

const Virgo: ISentient = {
    name: "Virgo", 
    desc: "The stars...", 
    type: CardType.Sentient, 
    effects: [], 
    power: 20, 
    health: 20
};

export default Virgo;