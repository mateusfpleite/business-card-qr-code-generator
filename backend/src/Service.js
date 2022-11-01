const { Op } = require('sequelize');
const { Card } = require('./database/models');

class CardService {
    model;
    constructor() {
        this.model = Card;
    }

    async getCardByName(name) {
        const cards = await this.model.findOne(
            { where: { name: { [Op.like]: `%${name}%` } } });
        return cards;
    }

    async createCard(data) {
        const { name, description, linkedin, github } = data;
        const newCard = await this.model.create(
            { name, description, linkedin, github })
        return newCard;
    }
}

module.exports = CardService; 