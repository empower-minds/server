module.exports = (sequelize, Sequelize) => {
    const Jenjang = sequelize.define("jenjang", {
        id_jenjang: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_jenjang: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Jenjang;
};
