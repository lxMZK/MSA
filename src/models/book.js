const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {

    class Book extends Model {

        static associate() {

        }
    }

    Book.init({
        isbn: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        amount_available: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        amount_sold: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false
        },
        img_url: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Book',
        tableName: 'books',
        timestamps: false
    })
    return Book
}