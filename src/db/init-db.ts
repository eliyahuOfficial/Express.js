import { Logger } from "../logs/logger";
import { usersService } from "../services/users-service";
import { cardService } from "../services/card-service";
import { users, cards } from "./initial-data";
import User from "./models/user-model";

const initDB = async () => {
    const usersCount = await User.countDocuments();

    if (usersCount != 0) return;

    for (let i = 0; i < users.length; i++) {
        const userData = users[i];
        const createdUser = await usersService.createUser(userData);


        const cardData = {
            ...cards[i],
            userId: createdUser._id.toString(),
        };

        await cardService.createCard(cardData, createdUser._id.toString());
    }

    Logger.log("Users and Business Cards Saved");
}

export default initDB;
