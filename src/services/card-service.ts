import _ from "underscore";
import { ICardInput } from "../@types/@types";
import Card from "../db/models/card-model";
import { Logger } from "../logs/logger";
import { isAdmin } from "../middleware/is-admin";

const generateBizNumber = async () => {


    while (true) {
        const r = _.random(1_000_000, 9_999_999);
        const dbRes = await Card.findOne({ bizNumber: r });
        if (!dbRes) {
            return r;
        }
    }
}

export const cardService = {


    createCard: async (data: ICardInput, userId: string) => {

        const card = new Card(data);
        card.userId = userId;
        card.bizNumber = await generateBizNumber();

        Logger.log(card.bizNumber);
        return card.save();
    },


    getAllCards: async () => Card.find(),


    getUserCards: async (userId: string) => {
        return Card.find({ userId: userId });
    },


    getCardById: async (id: string) => {
        return Card.findById(id);
    },


    updateCard: async (id: string, data: ICardInput) => {
        return Card.findByIdAndUpdate(id, data, { new: true });
    },


    likeCard: async (id: string, userId: string) => {
        const card = await Card.findById(id);
        if (!card) {
            throw new Error("Card not found");
        }

        if (!card.likes.includes(userId)) {
            card.likes.push(userId);
        }
        return card.save();
    },

    deleteCard: async (id: string) => {
        return Card.findByIdAndDelete(id);
    }
};
