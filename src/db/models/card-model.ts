import mongoose from "mongoose";
import cardSchema from "../schemas/card-schema";

const Card = mongoose.model("Crad", cardSchema);

export default Card;