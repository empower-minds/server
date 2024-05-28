//auth controller
const db = require("../models");
const Admin = db.Admin;
const Penulis = db.Penulis;
const Mahasiswa = db.Mahasiswa;
const Role = db.Role;

const bcrypt = require("bcryptjs");

exports.createAdmin = (req, res) => {
  const { email, password, ...otherData } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  // Save Admin to Database
  Admin.create({
    email,
    password: hashedPassword,
    ...otherData
  })
    .then(admin => {
      Role.findOne({
        where: {
          name: 'Admin'
        }
      }).then(role => {
        if (!role) {
          return res.status(400).send({ message: "Role not found" });
        }
        admin.setRole(role).then(() => {
          res.send({ message: "Admin account was registered successfully!" });
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createMahasiswa = (req, res) => {
  const { email, password, ...otherData } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  // Save Mahasiswa to Database
  Mahasiswa.create({
    email,
    password: hashedPassword,
    ...otherData
  })
    .then(mahasiswa => {
      Role.findOne({
        where: {
          name: 'Mahasiswa'
        }
      }).then(role => {
        if (!role) {
          return res.status(400).send({ message: "Role not found" });
        }
        mahasiswa.setRole(role).then(() => {
          res.send({ message: "Mahasiswa account was registered successfully!" });
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.createPenulis = (req, res) => {
  const { email, password, ...otherData } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  // Save Penulis to Database
  Penulis.create({
    email,
    password: hashedPassword,
    ...otherData
  })
    .then(penulis => {
      Role.findOne({
        where: {
          name: 'Penulis'
        }
      }).then(role => {
        if (!role) {
          return res.status(400).send({ message: "Role not found" });
        }
        penulis.setRole(role).then(() => {
          res.send({ message: "Penulis account was registered successfully!" });
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
