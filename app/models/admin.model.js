module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        id_role: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'roles',
                key: 'id'
            }
        }
    });
    return Admin;
};
