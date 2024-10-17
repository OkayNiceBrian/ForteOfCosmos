import Virgo from "./cards/Virgo/Virgo";
import CardType from "./enums/CardType";

const cardDb = new Map<number, object>();
cardDb.set(0, Virgo);

export default cardDb;