export default function (sequelize, DataTypes) {
    const Post = sequelize.define('Post', {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }

    return Post;
}
