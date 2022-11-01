module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: DataTypes.STRING, 
        },
        description: {
            type: DataTypes.STRING,
        },
        linkedin: {
            type: DataTypes.STRING,
        },
        github: {
            type: DataTypes.STRING, 
        }
    }, {
        timestamps: false,
        tableName: 'cards',
    })
    return Card;
}