const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Role = require('./role.model.js')(sequelize, Sequelize);
db.Admin = require('./admin.model.js')(sequelize, Sequelize);
db.Penulis = require('./penulis.model.js')(sequelize, Sequelize);
db.Jenjang = require('./jenjang.model.js')(sequelize, Sequelize);
db.Jurusan = require('./jurusan.model.js')(sequelize, Sequelize);
db.Kelas = require('./kelas.model.js')(sequelize, Sequelize);
db.Mahasiswa = require('./mahasiswa.model.js')(sequelize, Sequelize);

// Define associations
db.Admin.belongsTo(db.Role, { foreignKey: 'id_role' });
db.Penulis.belongsTo(db.Role, { foreignKey: 'id_role' });
db.Mahasiswa.belongsTo(db.Role, { foreignKey: 'id_role' });

db.Kelas.belongsTo(db.Jenjang, { foreignKey: 'id_jenjang' });
db.Kelas.belongsTo(db.Jurusan, { foreignKey: 'kode_jurusan' });
db.Mahasiswa.belongsTo(db.Kelas, { foreignKey: 'kode_kelas' });

db.ROLES = ["Admin", "Mahasiswa", "Penulis"];

module.exports = db;