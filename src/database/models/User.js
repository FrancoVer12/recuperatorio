module.exports = (sequelize, dataTypes) =>{



    let alias = 'User';
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        remember_token: {
            type: dataTypes.STRING
            },
        created_at: {
        type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        rol: {
            type: dataTypes.TINYINT
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    /*Genre.associate = function(models) {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })*/
    
        return User
    }
