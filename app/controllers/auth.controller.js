//auth controller
const db = require("../models");
const config = require("../config/auth.config");
const Admin = db.Admin;
const Penulis = db.Penulis;
const Mahasiswa = db.Mahasiswa;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  const { email, password } = req.body;

  // Cari pengguna berdasarkan email
  Admin.findOne({ where: { email: email } }).then(admin => {
    if (admin) {
      // Verifikasi kata sandi
      const passwordIsValid = bcrypt.compareSync(password, admin.password);
      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, accessToken: null, message: "Invalid Password!" });
      }
      
      // Buat token JWT untuk Admin
      const token = jwt.sign({ id: admin.id, role: "Admin" }, config.secret, { expiresIn: 86400 }); // 24 hours
      
      // Kirim token sebagai respons
      res.status(200).send({ 
        auth: true,
        id: admin.id,
        nama: admin.nama,
        email: admin.email,
        role: "Admin",
        accessToken: token
      });
    }
    else {
      // Cek di Penulis
      Penulis.findOne({ where: { email: email } }).then(penulis => {
        if (penulis) {
          const passwordIsValid = bcrypt.compareSync(password, penulis.password);
          if (!passwordIsValid) {
            return res.status(401).send({ auth: false, accessToken: null, message: "Invalid Password!" });
          }
          
          const token = jwt.sign({ id: penulis.id, role: "Penulis" }, config.secret, { expiresIn: 86400 });
          res.status(200).send({ 
            auth: true, 
            id: penulis.id, 
            nama: penulis.nama,
            email: penulis.email, 
            role: "Penulis", 
            accessToken: token 
          });
        }
        else {
          // Cek di Mahasiswa
          Mahasiswa.findOne({ where: { email: email } }).then(mahasiswa => {
            if (mahasiswa) {
              const passwordIsValid = bcrypt.compareSync(password, mahasiswa.password);
              if (!passwordIsValid) {
                return res.status(401).send({ auth: false, accessToken: null, message: "Invalid Password!" });
              }
              
              const token = jwt.sign({ id: mahasiswa.id, role: "Mahasiswa" }, config.secret, { expiresIn: 86400 });
              res.status(200).send({ 
                auth: true, 
                id: mahasiswa.id, 
                nama: mahasiswa.nama,
                email: mahasiswa.email, 
                role: "Mahasiswa", 
                accessToken: token 
              });
            }
            else {
              // Pengguna tidak ditemukan
              res.status(404).send({ message: "User Not found." });
            }
          });
        }
      });
    }
  }).catch(err => {
    res.status(500).send({ message: err.message || "Some error occurred while signing in." });
  });
};
