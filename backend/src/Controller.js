const CardService = require("./Service");

class CardController {
    service;
    constructor() {
        this.service = new CardService();
    }

    getCardByName = async (req, res) => {
        const { name } = req.params;
        const cards = await this.service.getCardByName(name);
        return res.status(200).json(cards);
    }
    createCard = async (req, res) => {
        const newCard = await this.service.createCard(req.body);
        return res.status(201).json(newCard);
    }
}

module.exports = CardController;