module.exports = (sequelize, Sequelize) => {
    const Jurusan = sequelize.define("jurusan", {
        kode_jurusan: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_jurusan: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Jurusan;
};
