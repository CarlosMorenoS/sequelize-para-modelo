module.exports = (sequelize, dataTypes) => {
    let alias = "Genre";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        }
    };
    let config = {
        tableName: "genres",
        updatedAt: "updated_at",
        createdAt: "created_at",
        deletedAt: false, 
    };

    const Genre = sequelize.define(alias, cols, config);

    return Genre;
}

