const { Router } = require("express");

const loginRoutes = require("./loginRoutes");
const userRoutes = require("./userRoutes");
// const usersController = require("../controllers/usersController");

const router = Router();

// router.post("/user/create", usersController.createUser);

router.use("/user", userRoutes);
router.use("/login", loginRoutes);

router.get("/*", (req, res) => {
  return res.status(404).send({ error: "Erro 404 - Conteúdo nao existe" });
});

module.exports = router;