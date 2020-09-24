const { Router } = require("express");

const usersController = require("../controllers/usersController");

const router = Router();

// CRUD
// C - Create
// R - Read
// U - Update
// D - Delete

router.get("/read/:id", usersController.readUser);
router.post("/create", usersController.createUser);
router.put("/update/:id", usersController.updateUser);
router.delete("/delete/:id", usersController.deleteUser);

module.exports = router;