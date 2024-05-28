const { verifyNewAccount } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    
    // Route for create admin
    app.post(
        "/api/admin",
        [
            verifyNewAccount.checkDuplicateUsernameOrEmail,
            verifyNewAccount.checkRolesExisted // Ensure the specified role exists
        ],
        controller.createAdmin
    );

    // Route for create mahasiswa
    app.post(
        "/api/mahasiswa",
        [
            verifyNewAccount.checkDuplicateUsernameOrEmail,
            verifyNewAccount.checkRolesExisted // Ensure the specified role exists
        ],
        controller.createMahasiswa
    );

    // Route for create penulis 
    app.post(
        "/api/penulis",
        [
            verifyNewAccount.checkDuplicateUsernameOrEmail,
            verifyNewAccount.checkRolesExisted // Ensure the specified role exists
        ],
        controller.createPenulis
    );
};