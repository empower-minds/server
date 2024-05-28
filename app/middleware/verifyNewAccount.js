const db = require("../models");
const Admin = db.Admin;
const Mahasiswa = db.Mahasiswa;
const Penulis = db.Penulis;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  const { email } = req.body;
  // Check email in Admin
  Admin.findOne({
    where: { email: email }
  }).then(admin => {
    if (admin) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }
    // Check email in Mahasiswa
    Mahasiswa.findOne({
      where: { email: email }
    }).then(mahasiswa => {
      if (mahasiswa) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }
      // Check email in Penulis
      Penulis.findOne({
        where: { email: email }
      }).then(penulis => {
        if (penulis) {
          res.status(400).send({
            message: "Failed! Email is already in use!"
          });
          return;
        }
        next();
      });
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while checking email availability."
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.role) {
    Role.findOne({
      where: {
        name: req.body.role
      }
    }).then(role => {
      if (!role) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.role
        });
        return;
      }
      next();
    });
  } else {
    next();
  }
};

const verifyNewAccount = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifyNewAccount;
