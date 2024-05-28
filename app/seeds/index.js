const db = require('../models');
const Role = db.Role;
const Jenjang = db.Jenjang;
const Jurusan = db.Jurusan;
const Kelas = db.Kelas;

async function seed() {
  try {
    // Check if roles already exist
    const rolesCount = await Role.count();
    if (rolesCount === 0) {
      const roleData = [
        { id: 1, name: "Admin" },
        { id: 2, name: "Mahasiswa" },
        { id: 3, name: "Penulis" }
      ];
      await Role.bulkCreate(roleData);
      console.log("Data Roles berhasil ditambahkan.");
    }

    // Check if jenjangs already exist
    const jenjangCount = await Jenjang.count();
    if (jenjangCount === 0) {
      const jenjangData = [
        { id_jenjang: 1, nama_jenjang: "D3" },
        { id_jenjang: 2, nama_jenjang: "D4" },
        { id_jenjang: 3, nama_jenjang: "S2" },
        { id_jenjang: 4, nama_jenjang: "D1" }
      ];
      await Jenjang.bulkCreate(jenjangData);
      console.log("Data Jenjang berhasil ditambahkan.");
    }

    // Check if jurusans already exist
    const jurusanCount = await Jurusan.count();
    if (jurusanCount === 0) {
      const jurusanData = [
        { kode_jurusan: 1, nama_jurusan: "Teknik Elektronika" },
        { kode_jurusan: 2, nama_jurusan: "Teknik Telekomunikasi" },
        { kode_jurusan: 3, nama_jurusan: "Teknik Elektro Industri" },
        { kode_jurusan: 4, nama_jurusan: "Teknik Informatika" },
        { kode_jurusan: 5, nama_jurusan: "Teknik Komputer" },
        { kode_jurusan: 6, nama_jurusan: "Teknik Mekatronika" },
        { kode_jurusan: 7, nama_jurusan: "Sistem Pembangkit Energi" },
        { kode_jurusan: 8, nama_jurusan: "Multimedia Broadcasting" },
        { kode_jurusan: 9, nama_jurusan: "Teknologi Game" },
        { kode_jurusan: 10, nama_jurusan: "PJJ Teknik Informatika" },
        { kode_jurusan: 11, nama_jurusan: "LJ Teknik Informatika" },
        { kode_jurusan: 12, nama_jurusan: "LJ Teknik Elektro Industri" },
        { kode_jurusan: 13, nama_jurusan: "LJ Teknik Telekomunikasi" },
        { kode_jurusan: 14, nama_jurusan: "Pendidikan Vokasi Berkelanjutan (PVB)" }
      ];
      await Jurusan.bulkCreate(jurusanData);
      console.log("Data Jurusan berhasil ditambahkan.");
    }

    // Check if kelas already exist
    const kelasCount = await Kelas.count();
    if (kelasCount === 0) {
      const kelasData = [
        { kode_kelas: "K001", id_jenjang: 1, kode_jurusan: 1, tingkat: 1, nama_kelas: "A" },
        { kode_kelas: "K002", id_jenjang: 1, kode_jurusan: 2, tingkat: 1, nama_kelas: "B" },
        { kode_kelas: "K003", id_jenjang: 1, kode_jurusan: 3, tingkat: 1, nama_kelas: "A" },
        { kode_kelas: "K004", id_jenjang: 2, kode_jurusan: 1, tingkat: 1, nama_kelas: "B" },
        { kode_kelas: "K005", id_jenjang: 2, kode_jurusan: 2, tingkat: 2, nama_kelas: "A" },
        { kode_kelas: "K006", id_jenjang: 2, kode_jurusan: 3, tingkat: 2, nama_kelas: "B" },
        { kode_kelas: "K007", id_jenjang: 3, kode_jurusan: 1, tingkat: 2, nama_kelas: "A" },
        { kode_kelas: "K008", id_jenjang: 1, kode_jurusan: 4, tingkat: 1, nama_kelas: "B" },
        { kode_kelas: "K009", id_jenjang: 2, kode_jurusan: 5, tingkat: 2, nama_kelas: "A" },
        { kode_kelas: "K010", id_jenjang: 2, kode_jurusan: 4, tingkat: 2, nama_kelas: "B" },
        { kode_kelas: "K011", id_jenjang: 3, kode_jurusan: 4, tingkat: 2, nama_kelas: "A" },
        { kode_kelas: "K012", id_jenjang: 2, kode_jurusan: 6, tingkat: 2, nama_kelas: "B" },
        { kode_kelas: "K013", id_jenjang: 2, kode_jurusan: 7, tingkat: 3, nama_kelas: "A" },
        { kode_kelas: "K014", id_jenjang: 1, kode_jurusan: 8, tingkat: 1, nama_kelas: "B" },
        { kode_kelas: "K015", id_jenjang: 2, kode_jurusan: 9, tingkat: 2, nama_kelas: "A" },
        { kode_kelas: "K016", id_jenjang: 1, kode_jurusan: 10, tingkat: 1, nama_kelas: "B" },
        { kode_kelas: "K017", id_jenjang: 2, kode_jurusan: 11, tingkat: 2, nama_kelas: "A" },
        { kode_kelas: "K018", id_jenjang: 2, kode_jurusan: 12, tingkat: 2, nama_kelas: "B" },
        { kode_kelas: "K019", id_jenjang: 2, kode_jurusan: 13, tingkat: 3, nama_kelas: "A" },
        { kode_kelas: "K020", id_jenjang: 4, kode_jurusan: 14, tingkat: 4, nama_kelas: "B" }
      ];
      await Kelas.bulkCreate(kelasData);
      console.log("Data Kelas berhasil ditambahkan.");
    }
  } catch (error) {
    console.error("Gagal menambahkan data:", error.message);
  }
}

module.exports = seed;
