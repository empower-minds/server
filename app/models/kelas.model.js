module.exports = (sequelize, Sequelize) => {
    const Kelas = sequelize.define("kelas", {
        kode_kelas: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        id_jenjang: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        kode_jurusan: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tingkat: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nama_kelas: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Kelas;
};
