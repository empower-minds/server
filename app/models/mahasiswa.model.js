module.exports = (sequelize, Sequelize) => {
    const Mahasiswa = sequelize.define("mahasiswa", {
        nrp: {
            type: Sequelize.STRING,
            primaryKey: true
        },
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
        tgl_lahir: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        kode_kelas: {
            type: Sequelize.STRING,
            allowNull: false
        },
        thn_angkatan: {
            type: Sequelize.INTEGER,
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
    return Mahasiswa;
};
