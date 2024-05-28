const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Admin = db.Admin;
const Mahasiswa = db.Mahasiswa;
const Penulis = db.Penulis;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  Admin.findByPk(req.userId).then(admin => {
    if (!admin) {
      return res.status(403).send({
        message: "Require Admin Role!"
      });
    }
    next();
  });
};

isPenulis = (req, res, next) => {
  Penulis.findByPk(req.userId).then(penulis => {
    if (!penulis) {
      return res.status(403).send({
        message: "Require Penulis Role!"
      });
    }
    next();
  });
};

isMahasiswa = (req, res, next) => {
  Mahasiswa.findOne({ where: { nrp: req.userId } }).then(mahasiswa => {
    if (!mahasiswa) {
      return res.status(403).send({
        message: "Require Mahasiswa Role!"
      });
    }
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isPenulis: isPenulis,
  isMahasiswa: isMahasiswa,
};

module.exports = authJwt;
